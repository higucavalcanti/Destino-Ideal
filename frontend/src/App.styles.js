import { createGlobalStyle } from 'styled-components';
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

{/* https://www.figma.com/file/ZHmcX7pf9RartgeXbOD4Ci/Untitled?type=design&node-id=1-2&mode=design*/}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #FFF;
    color: #000;
    font-family: 'Inter', sans-serif;
  }
`;
