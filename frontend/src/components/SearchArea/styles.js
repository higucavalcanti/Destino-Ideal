import styled, { keyframes } from "styled-components";

export const LoadingIndicator = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 21px;
  height: 20px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    padding: 130px;

    .overlay {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        bottom: 0;
        z-index: 1;
        mix-blend-mode: hard-light;
    }
`;
    
export const Content = styled.div`
    z-index: 2;

    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;

    h1 {
        font-family: 'Inter';
        font-size: 90px;
        margin-top: -10px;
    }

    p {
        margin-top: 8px;
        font-size: 38px;
    }

    .input {
        display: flex;
        margin-top: 20px;
        padding: 10px;
        width: 600px;
        background-color: #F9F9F9;
        align-items: center;
        border-radius: 3rem;

        input {
            border: none;
            outline: none;
            background: none;
            width: 100%;
            font-size: 16px;
            font-weight: 500;
            margin-left: 15px; 
            &::placeholder{
                font-size: 15px;
            }
        }

    color: #F9F9F9;
    }
`;


export const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 550px;
    z-index: 7;
    position: absolute; 
    cursor:pointer;
`;

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
`; 