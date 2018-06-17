import React from 'react';
import styled from 'styled-components';
import FacebookAuthButton from '../../components/FacebookAuthButton/FacebookAuthButton';

const Authenticate = ({error, isFetching, onAuth}) => {
  return (
    <Container>
      <Title>Authenticate</Title>
       <FacebookAuthButton isFetching={isFetching} onAuth={onAuth} />
      {error ? <ErrorMsg>{error}</ErrorMsg> : null}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media(max-width: 769px) {
    margin-top: 200px;
  }
`;

const Title = styled.h1`
  color: #4a90e2;
  font-weight: 100;
  font-size: 100px;
  margin-bottom: 20px;

  @media(max-width: 769px) {
    font-size: 50px;
  }
`;

const ErrorMsg = styled.p`
  color: #FF7777;
  font-size: 22px;
  text-align: center
`;

export default Authenticate;
