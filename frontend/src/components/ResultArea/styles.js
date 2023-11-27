import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem;
    background: #FFF;

    h1 {
        font-family: 'Inter';
        text-align: center;
        font-size: 45px;
    }
`;

export const ResultContainer = styled.div`
    background-color: #F5F5F5;
    margin-top: 10px;
    border-radius: 20px;
    padding: 20px;
    margin-top: 50px;


    label {
        font-family: 'Inter';
        color: #26897D;
        font-size: 25px;
        display: block;
        margin-bottom: 20px;

        textarea {
            background-color: #F5F5F5;
            display: block;
            margin-top: 10px;
            box-sizing: border-box;
            width: 100%;
            border: none;
            border-radius: 10px;
            color: #000;
            outline: none;
            font-size: 15px;
        }
    }
`;