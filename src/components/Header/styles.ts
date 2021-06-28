import styled from "styled-components";

export const Head = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background:#f05a28 ;
height: 4rem;
width: 100%;
`;

export const ImgLogo = styled.img`
width: 50px;
margin-right: 15px;
`;

export const ImgCart = styled.img`
width: 50px;
margin-right:15px ;
`;

export const LogoName = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin:2rem;

button {
    display: flex;
    flex-direction: row;
    align-items: center;

width:10rem ;
height: 4rem;
margin-left: 1rem;
transition:  2s;
cursor: pointer;

background: transparent;


border: none;
color: white;
font-weight: bolder;
font-family:'Poppins', sans-serif;
font-size: 27px;

}
input {
    margin-left: 3rem;
    width: 11rem;
    height: 20px;
}
`;

export const butone = styled.button`

`;


export const Name = styled.h1`
font-size: 30px;
font-family: 'Poppins', sans-serif;
font-weight: 400;
color: white;

`;

