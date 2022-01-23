/* eslint-disable no-unreachable */
import React from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.dataUserRedux);
    this.state = {
      users: props.dataUserRedux,
    };
  }

  handleDeleteUser = (userId) => {
    const { deleteUserRedux } = this.props;
    deleteUserRedux(userId);
  };

  handleAddUser = () => {
    const { addUserRedux } = this.props;
    addUserRedux();
  };

  render() {
    const { dataUserRedux } = this.props;
    console.log('dataUserRedux', this.props.dataUserRedux);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <div>
            {dataUserRedux &&
              dataUserRedux.map((user, index) => (
                <div key={user.id}>
                  {index + 1}. {user.name}
                  <span
                    onClick={() => this.handleDeleteUser(user.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {' '}
                    X
                  </span>
                </div>
              ))}
          </div>

          <button onClick={this.handleAddUser}>Add User</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    dataUserRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userId) =>
      dispatch({
        type: 'DELETE_USER',
        payload: userId,
      }),
    addUserRedux: () =>
      dispatch({
        type: 'ADD_USER',
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
