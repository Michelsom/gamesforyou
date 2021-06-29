import { Box, Container, ImageBox, Price, TextTitle } from "./styles"
import React from "react";
import { useContext } from "react";
import CartContext from "../../CartContext";

interface game {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}

export function CartTable() {
    const { dataproduct } = useContext(CartContext)
    return (
        <Container>
            {dataproduct?.map((jogo: game) => (
                <Box key={jogo.id} >

                    <ImageBox key={jogo.id} src={process.env.PUBLIC_URL +
                        '/assets/' + jogo.image} alt={jogo.name} />

                    <TextTitle>
                        <h3> {jogo.name}</h3>
                    </TextTitle>
                    <Price> {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRl'
                    }).format(jogo.price)}
                    </Price>
                </Box>
            ))}
        </Container >
    )
}
