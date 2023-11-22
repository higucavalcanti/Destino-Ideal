import styled from "styled-components";

export const Container = styled.div`
    background: #F9F9F9;
    flex: 1;
    padding: 10px 0;

    p {
        font-family: 'Inter';
        font-size: 25px;
        color: #000;
    }
`; 

export const Logo = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        display: flex;
        align-items: center;
    }
`;