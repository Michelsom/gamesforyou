import styled from 'styled-components';

export const Container = styled.div`
   background: transparent;
   align-items: center;
   justify-content: space-evenly;
   padding: 1rem 6rem;
   display: grid ;
   grid-template-columns: repeat(4, 1fr);
`;

export const Box = styled.section`
   align-items: center;
   display:flex ;
   width: 13.5rem;
   height: 12.5rem;
   padding: 0 0.62rem;
   flex-direction: column;
   margin-right: 2.8rem;
   margin-left:2.8rem;
   margin-bottom: 3rem;
   background: #96A6B7;
   border-radius:0.5rem .5rem 0.5rem 0.5rem;

`;

export const ImageBox = styled.img`
align-items: center;
width: 13.5rem;
height: 5.73rem;
background: transparent;
border-radius:0.5rem 0.5rem 0 0;

`;

export const TextTitle = styled.div`

font-family: 'Open-Sans', Helvetica;
font-size: 14px;
width: 180px;
height: 60px;
text-align: left;
background: transparent;
margin-top:0.5rem ;
margin-right: 1.3rem;
color: #ffffff;

`;

export const Price = styled.div`
font-size: 20px;
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction:row;
align-items: center;
border: 1px solid white;
border-radius: 5px;
width: 200px;
justify-content:space-evenly;
color: white;




button{
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
transition: filter 2s;
font-family: 'Poppins', sans-serif;
background: #232d22;
color: white;
width: 134px;
height:30px;

}
`;