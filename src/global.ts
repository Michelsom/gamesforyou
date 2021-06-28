import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: transparent;
    -webkit-font-smoothing: antialiased;
}
body, input, textarea, button{
 font-family:'popins', sans-serif;
 font-weight: 400;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75px;
    }
    @media (max-width: 720px) {
        font-size: 87.5px;
    }   
}

}
.react-modal-overlay {
background: transparent;

position: fixed;
top: 0;
bottom: 6.1rem;
right: 0;
left: 60rem;

display: flex;
align-items:center;
justify-content: center;
}
.react-modal-content {
    width: 26rem;
    height: 27rem;
    max-width: 576px;
    background: rgba(900, 900, 400, 0.5);
    padding: 1rem;
    position: relative;
    border-radius: 0.24rem;

}


`;
