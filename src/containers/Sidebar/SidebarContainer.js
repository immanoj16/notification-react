import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import slug from 'slug';

import Sidebar from '../../components/Sidebar/Sidebar';
import ModalContainer from '../Modal/ModalContainer';

class SidebarContainer extends Component {

  render() {

    const { match, location } = this.props;
    return (
      <Container>
        <Sidebar
          loading={false}
          title='Users'
          list={this.props.users.map(user => user.name)}
          {...this.props}
        />

        {location.pathname === '/dashboard'
          ? <Instruction>Select a User to send notification</Instruction>
          : null}

        {this.props.users.length ? 
          <Route path={`${match.url}/:username`} render={({ match }) => {
            const user = this.props.users.find(user => slug(user.name) === match.params.username);
  
            const { name, avatar, uid } = user;
  
            return (
              <Panel>
                <Img src={`${avatar}`} alt={`${name}'s avatar`}/>
                <Medium>{name}</Medium>
                <Header>{uid}</Header>
                <ButtonGroup>
                  <ModalContainer receiverId={uid} type='task' title='Assign a Task' />
                  <ModalContainer receiverId={uid} type='reminder' title='Add a Reminder' />
                  <ModalContainer receiverId={uid} type='notification' title='Send Notification' />
                </ButtonGroup>
              </Panel>
            )
          }} />  
          : null}

      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Instruction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Panel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100px;
  border-radius: 100px;
`;

const Medium = styled.h1`
  font-size: 55px;
  text-align: center;
  margin: 20px 0;
`;

const Header = styled.h3`
  margin: 20px 0;
  font-weight: 300;
  font-size: 35px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

const mapStateToProps = (state) => ({
  users: state.users.users
})

export default connect(mapStateToProps)(SidebarContainer);
