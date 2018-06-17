import React from 'react'
import ReactModal from 'react-modal'
import styled from 'styled-components';

const modalStyles = {
  content: {
    width: 350,
    margin: '0px auto',
    height: 220,
    borderRadius: 5,
    background: '#EBEBEB',
    padding: 0
  },
}

ReactModal.setAppElement('#root');

export default function Modal (props) {

  const {title, text, isSubmitDisabled, openModal, closeModal, isOpen, updateText, submitDuck} = props;

  return (
    <DartButton onClick={openModal}>
      {title}
      <ReactModal style={modalStyles} isOpen={isOpen} onRequestClose={closeModal}>
        <ModalHeader>
          <span>{title}</span>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </ModalHeader>
        <InputContainer>
          <TextArea
            onChange={(e) => updateText(e.target.value)}
            value={text}
            maxLength={140}
            type='text'
            placeholder="What's on your mind?" />
        </InputContainer>
        <SubmitButton
          disabled={isSubmitDisabled}
          onClick={submitDuck}>
            Submit
        </SubmitButton>
      </ReactModal>
    </DartButton>
  )
}

const DartButton = styled.span`
  background: #4a90e2;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 10px;
  margin-right: 5px;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #4a90e2;
  text-decoration: none;

  &:hover {
    background: #1877E6
  }
`;

const ModalHeader = styled.div`
  background: #fff;
  padding: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1877E6;
`;

const CloseButton = styled.span`
  cursor: pointer
`;

const InputContainer = styled.div`
  display: flex;
  height: 110px;
  margin: 10px;
`;

const TextArea = styled.textarea`
  flex: 1;
  border-radius: 3px;
  padding: 8px 10px;
  font-size: 18px;
  resize: none;
`;

const SubmitButton = styled.button`
  background: #4a90e2;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 15px;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #4a90e2;
  text-decoration: none;
  composes: darkBtn;
  margin: 0px auto;
  width: 150px;
  text-align: center;
  display: block;

  &:hover {
    background: #1877E6
  }

  &:disabled {
    background: #C6C6C6;
    border: 1px solid #C6C6C6;
  }
`;