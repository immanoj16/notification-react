import React from 'react';
import styled from 'styled-components';

const Home = props => {
  return (
    <Container>
      <Title>Notification</Title>
      <Slogan>The real time, cloud based notification container</Slogan>
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.p`
  color: #4a90e2;
  font-weight: 100;
  font-size: 100px;
  margin-bottom: 20px;
`;

const Slogan = styled.p`
  color: #4a90e2;
  font-size: 35px;
  text-align: center;
  line-height: 55px;
  font-weight: 100;
`;

export default Home;
