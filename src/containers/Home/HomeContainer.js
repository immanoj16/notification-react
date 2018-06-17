import React from 'react';
import { connect } from 'react-redux';

import Home from '../../components/Home/Home';

class HomeContainer extends React.Component {

  componentDidMount() {
    if (this.props.isAuthed) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <Home />
    )
  }
}

export default connect(state => ({
  isAuthed: state.users.isAuthed
}))(HomeContainer);
