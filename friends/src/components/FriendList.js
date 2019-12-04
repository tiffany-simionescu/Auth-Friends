import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendList extends React.Component {
  state = {
    // Add State
  }

  componentDidMount() {
    this.getFriends();
  }

  getFriends = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        this.setState({
          // Add State
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Friend List</h1>
        {/* Display Friend Data Here */}
      </div>
    )
  }
}