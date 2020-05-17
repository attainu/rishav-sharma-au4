import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import withAuthorization from '../../utils/withAuthorization';
import { mergeDataWithKey } from '../../utils/index';
import { db } from '../../firebase';
import CreateBoardModal from './CreateBoardModal';
import { BoardLink, NewBoard } from '../../components/Board/BoardsButtons';
import Loader from '../../components/Loader/Loader';
import { BoardTypes, BoardTypeTitle, Boards } from './styled';

class BoardsScreen extends Component {
  state = {
    boards: [],
    isLoading: false,
    modalVisible: false
  };

  componentDidMount = () => {
    this.setState({
      isLoading: true
    });
    db.onceGetBoards()
      .then(snapshot => {
        if (!snapshot.val()) {
          return;
        }
        this.setState({
          boards: mergeDataWithKey(snapshot.val())
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };

  handleCreateBoard = board => {
    return db.doCreateBoard(board).then(response => {
      let updatedBoards = this.state.boards;
      updatedBoards.push(response);
      this.setState({
        boards: updatedBoards,
        modalVisible: false
      });
    });
  };

  setModalVisible = () => {
    this.setState({ modalVisible: true });
  };

  handleCloseModal = () => {
    this.setState({
      modalVisible: false
    });
  };

  render() {
    const { isLoading } = this.state;
    const { boards } = this.state;
    const starredBoards = boards.filter(board => board.favorite);

    return isLoading ? (
      <Loader />
    ) : (
      <Boards>
        {!isEmpty(starredBoards) && (
          <BoardTypes>
            <BoardTypeTitle>
              <Icon type="star" />
              Starred Boards
            </BoardTypeTitle>

            {starredBoards.map((board, index) => {
              return (
                <Link to={`b/${board.key}`} key={index}>
                  <BoardLink
                    title={board.title}
                    color="#0079BF"
                    favorite={board.favorite}
                  />
                </Link>
              );
            })}
          </BoardTypes>
        )}

        <BoardTypes>
          <BoardTypeTitle>
            <Icon type="user" />
            Personal Boards
          </BoardTypeTitle>

          <React.Fragment>
            {boards.map((board, index) => {
              return (
                <Link key={index} to={`b/${board.key}`}>
                  <BoardLink
                    key={index}
                    title={board.title}
                    color="#0079BF"
                    favorite={board.favorite}
                  />
                </Link>
              );
            })}
            <NewBoard onClick={this.setModalVisible} />
          </React.Fragment>
        </BoardTypes>

        <CreateBoardModal
          onCreateBoard={this.handleCreateBoard}
          onCloseModal={this.handleCloseModal}
          visible={this.state.modalVisible}
        />
      </Boards>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(BoardsScreen);
