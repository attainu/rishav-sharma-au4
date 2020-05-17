import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import { findIndex } from 'lodash';

import { db } from '../../../firebase';
import { mergeDataWithKey } from '../../../utils/index';
import { ItemTypes } from '../../../constants/ItemTypes';
import CardContainer from './Card';
import FormCreation from '../../../components/Form/FormCreation';

const cardTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    item.onMoveCard(
      component,
      item.listKey,
      props.list.key,
      item.card.key,
      item.card
    );
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Cards extends Component {
  state = {
    cards: {}
  };

  componentDidMount = () => {
    db.onceGetCard(this.props.list.key).then(snapshot => {
      const snapshotVal = snapshot.val();
      if (!snapshotVal) {
        return;
      }
      const updatedCards = { ...this.state.cards };
      updatedCards[this.props.list.key] = mergeDataWithKey(snapshotVal);
      this.setState({
        cards: updatedCards
      });
    });
  };

  handleCreateCard = cardTitle => {
    const { list } = this.props;
    return db
      .doAddCard(list.key, cardTitle)
      .then(() => db.onceGetCard(list.key))
      .then(snapshot => {
        const snapshotVal = snapshot.val();
        if (!snapshotVal) {
          return;
        }
        const updatedCards = { ...this.state.cards };
        updatedCards[list.key] = mergeDataWithKey(snapshotVal);
        this.setState({
          cards: updatedCards
        });
      });
  };

  handleEditCard = (listKey, cardKey, card) => {
    return db.doEditCard(listKey, cardKey, card).then(() => {
      const updatedCards = { ...this.state.cards };
      const cardIndex = findIndex(
        updatedCards[listKey],
        card => card.key === cardKey
      );
      updatedCards[listKey][cardIndex] = {
        ...updatedCards[listKey][cardIndex],
        ...card
      };

      this.setState(() => ({
        cards: updatedCards
      }));
    });
  };

  moveCard = (component, oldListKey, newListKey, cardKey, card) => {
    db.doMoveCard(oldListKey, newListKey, cardKey, card).then(() => {
      const cardItems = this.state.cards[oldListKey].filter(
        card => card.key !== cardKey
      );
      const updatedCards = { ...this.state.cards };
      updatedCards[oldListKey] = cardItems;
      this.setState({
        cards: updatedCards
      });

      const destCardWrap = { ...component.state.cards };
      const destCards = destCardWrap[newListKey] || [];
      destCards.push(card);
      destCardWrap[newListKey] = destCards;
      component.setState({
        cards: destCardWrap
      });
    });
  };

  handleDeleteCard = (listKey, cardKey) => {
    return db.doDeleteCard(listKey, cardKey).then(() => {
      const updatedCards = { ...this.state.cards };
      const listCards = this.state.cards[listKey].filter(
        card => card.key !== cardKey
      );
      updatedCards[listKey] = listCards;
      this.setState({
        cards: updatedCards
      });
    });
  };

  render() {
    const { list, connectDropTarget } = this.props;
    const { cards } = this.state;

    const listCards = cards[list.key] ? cards[list.key] : [];
    return connectDropTarget(
      <div>
        {listCards.map(card => (
          <CardContainer
            key={card.key}
            listKey={list.key}
            card={card}
            onEditCard={this.handleEditCard}
            onMoveCard={this.moveCard}
            onDeleteCard={this.handleDeleteCard}
          />
        ))}
        <FormCreation
          placeholder="Create card"
          onCreate={this.handleCreateCard}
        />
      </div>
    );
  }
}

export default DropTarget(ItemTypes.CARD, cardTarget, collect)(Cards);
