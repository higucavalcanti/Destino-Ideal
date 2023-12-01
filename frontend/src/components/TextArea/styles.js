import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px 25px;
    background-color: #F5F5F5;
    border-radius: 0 0 20px 20px;
    margin-left: 64px;
    margin-right: 64px; 
`;

export const TextArea = styled.textarea`
    background-color: #F5F5F5;
    box-sizing: border-box;
    width: calc(100% - 40px);
    border: none;
    border-radius: 10px;
    color: #000;
    outline: none;
    font-size: 15px;
    resize: none; /* Evita que o usuário redimensione o textarea manualmente */
    overflow-y: auto; /* Adiciona uma barra de rolagem vertical quando necessário */
    max-height: 500px;
`;