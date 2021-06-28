import styled from 'styled-components';

export const Caixa = styled.div`
background: #282828;
display: grid;
gap: 1rem;
padding: 1rem 1rem;
width: 81.3rem;
grid-template-columns: repeat(4, 1fr);


section{
padding: 0 2rem;
display: flex;
flex-direction: column;
width: 15rem;
background: white;
border-radius: 2px;
}

img{
        width: 16rem;
        height: 16rem;
        margin-bottom: 20px;
        margin-top: 2px;
    }
`;
export const SubCaixa = styled.div` 
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;


export const Text = styled.h1`
    font-size:20px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin-top: 1px;




`;

export const TextBox = styled.div`
height: 3rem;
background: transparent;
`;

//button// 

export const Vent = styled.div`
width:19rem ;
display: flex ;
flex-direction: column;
align-items: center;
background: #282828; 
 margin-top: 4rem;
`;

export const Bnt = styled.div`
    display: flex;
    width: 19rem;
    height: 4rem;
    font-family: 'Poppins', sans-serif;
    background:#f05a28;
    color: white;
    cursor: pointer;
    border-top: 5px solid #282828 ;
    border-radius:0 0 100px 100px;


    h1 {
        font-size: 1.2rem;
        margin-left: 1px;
        
    }
  img{
      
      width: 2.8rem;
      height: 4rem;
      margin-left: 5rem;
   
  }
`;

export const Price = styled.div`
display: flex;
flex-direction:column;
align-items: center;
font-family: 'Poppins', sans-serif;
background:white;
color: black;
font-size: 25px;
width: 19rem;
height: 2rem;
outline: none; 
font-weight:bold ;

`;