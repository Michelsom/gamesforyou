import { Bnt, Caixa, Price, SubCaixa, Text, TextBox, Vent } from "./styles"
import React from "react";
import cart from "../../assets/cart-icon.svg";

import { useContext } from "react";
import { CartContext } from "../../CartContext";

export function CartTable() {
    const dataproduct = useContext(CartContext);
    console.log(dataproduct)

    return (
        <Caixa>
            {dataproduct.map(game => (
                <section key={game.id} >
                    <SubCaixa>
                        <img src={process.env.PUBLIC_URL + '/assets/' + game.image} alt={game.name} />
                        <TextBox>
                            <Text>{game.name}</Text>
                        </TextBox>
                        <Vent>
                            <Price>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRl'
                                }).format(game.price)}
                            </Price>
                            <Bnt>
                                <img src={cart} alt="" />
                                <h1>+ Carrinho</h1>
                            </Bnt>
                        </Vent>
                    </SubCaixa>
                </section>
            ))}
        </Caixa>
    )
}
