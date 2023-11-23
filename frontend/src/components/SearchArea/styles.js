import styled from "styled-components";

export const Container = styled.div`
    padding: 4rem 0 2rem;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    object-fit: contain;

    .overlay{
        position: absolute;
        height: 100%;
        width: 100%;
        background: ..........
        top: 0;
        bottom: 0;
        z-index: 1;
        mix-blend-mode: hard-light;
    }

    .h1{
        color: #000;
        font-size: 50px;
        margin-top: -100px
    }
    
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