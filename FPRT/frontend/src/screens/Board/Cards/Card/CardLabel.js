import React, { Component } from 'react';

import { LABELS } from '../../../../constants/index';
import { Label } from '../../../../components/Label/Label';

export default class CardLabel extends Component {
  render() {
    const { card, listKey, onEditCard } = this.props;
    return LABELS.map((label, index) => (
      <Label
        key={index}
        color={label.color}
        text={label.text}
        active={card.label === label.text}
        card={card}
        listKey={listKey}
        onClick={onEditCard}
      />
    ));
  }
}
