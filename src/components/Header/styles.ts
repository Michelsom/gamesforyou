import styled from "styled-components";

export const Head = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
background:#263241 ;
height: 79px;
width: 1349px;
`;
export const Search = styled.input`
    width: 150px;
    height: 40px;
    margin-top: 20px;
    padding-left: 18px;
    background: #263241;
    color: #fff;
    transition: 0.4s;
    &:focus{
        width: 200px;
    }
    
`;

export const ImgLogo = styled.img`
margin-top: 0.9rem;
width: 5rem;
margin-left: -1.4rem;
cursor: pointer;
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

h2{
    font-size: 1.3rem;
    font-family:Helvetica;
    color: #fff;
}
`;

export const HeaderButtons = styled.div`
background: transparent;
width:1000px ;
display: flex;
flex-direction: row;


button {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    background: transparent;
    width: 10rem;

   img.ImgSetaBaixo {
color:blue;
    }
    img {
width:3rem;
height: 7rem;

    }

    h2 {

        font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
    }
}
`;



