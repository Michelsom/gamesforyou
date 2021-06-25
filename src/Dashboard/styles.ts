import styled from 'styled-components';

export const Caixa = styled.main`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-area: center;
align-items: center;

                                                                                                                  

section{

    display: flex;
    height: 100vh;
    font-family: sans-serif;
    color: blue;
    font-size: 400;
    margin-bottom: 2.4rem;

    display: flex;
    flex-direction:column;

    align-items: center;
}

div {
    width: 100%;
    height: 100%;
  
    border: 2px blue;
    display: flex;
    flex-direction: column;
}
`;

export const Imagem = styled.img`
width: 200px;

`;