import styled from "styled-components";

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

    label {
        margin-top: 20px;
        display: flex;
        align-items: center;
        width: 80%;

        .input {
            flex: 1;
            padding: 10px;
            border: 2px solid #fff;
            border-radius: 10px;
            background-color: #F9F9F9;
            width: 100%;
        }
    }
`;


export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 590px;
    z-index: 7;
    position: absolute; 
    cursor:pointer;
`;
export const Label = styled.label`

    display:flex;
    flex-direction:row;
    justify-content: space-between;

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