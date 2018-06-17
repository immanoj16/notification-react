import React from 'react';
import styled from 'styled-components';

const FacebookAuthButton = ({onAuth, isFetching}) => {
  return (
    <Button onClick={onAuth}>
      {isFetching === true
        ? 'Loading'
        : 'Login with facebook'}
    </Button>
  )
}

const Button = styled.button`
  background: #385998;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  border-width: 0;
  font-size: 25px;
  cursor: pointer;
  width: 300px;
  margin: 0 auto;

  &:hover {
    background: #1542a0;
  }
`;

export default FacebookAuthButton;
