import React from 'react'
import styled from 'styled-components';

const Logout = () => {
  return (
    <Text>
      You are now logged out!
    </Text>
  )
}

const Text = styled.div`
  color: #4a90e2;
  font-size: 35px;
  text-align: center;
  line-height: 55px;
  font-weight: 100;
  text-align: center;
  padding-top: 100px;
`;

export default Logout;
