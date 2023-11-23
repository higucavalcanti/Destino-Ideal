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
    padding: 150px;

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

    h1 {
        font-size: 150px;
        margin-top: -100px;
    }

    p {
        margin-top: 10px;
        font-size: 45px;
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
            margin-right: 10px;
            color: #000;
        }
    }
`;

export const Icon = styled.div`
    width: 24px;
    height: 24px;
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