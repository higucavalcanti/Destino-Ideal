import styled from "styled-components";

export const Container = styled.div`
    padding: 64px 64px 0;
    display: flex;
`;

export const ResultContainer = styled.div`
    background-color: #F5F5F5;
    font-family: 'Inter';
    font-size: 28px;
    color: #26897D;
    width: 100%;
    border-radius: 20px 0 0 0;
    padding: 20px;
    margin-top: 100px;
`;

export const ResultInput = styled.div`
  display: flex;
  margin-top: 100px;
  padding: 10px;
  align-items: center;
  border-radius: 0 20px 0 0;
  background-color: #F5F5F5;

  input {
    padding: 10px;
    border-radius: 3rem;
    border: none;
    outline: none;
    background: #FFF;
    width: 345px;
    font-size: 16px;
    font-weight: 500;
    margin-right: 10px;
    margin-left: auto;
    &::placeholder {
      font-size: 15px;
    }
  }
`;