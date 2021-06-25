import { Caixa, Imagem } from "./styles"
import React from "react";
import dataproduct from "../assets/products.json"

import codinfiniteImg from "../assets/cod-infinite-warfare.png"
import codwwiiImg from "../assets/cod-wwii.png"
import fifaImg from "../assets/fifa-18.png"
import horizonImg from "../assets/horizon-zero-dawn.png"
import mortalkombat from "../assets/mk-xl.png"
import shardsODImg from "../assets/shards-of-darkness.png"
import odyImg from "../assets/sm-ody.png"
import shadowofmordorImg from "../assets/som.png"
import thewither from "../assets/twwh.png"
import CartImg from "../assets/cart-icon.svg"
import { useState } from "react";

interface game {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;
}


export function Container() {
    const [cart, setCart] = useState<game[]>([])
    return (
        <Caixa>
            {dataproduct.map((jogo: game) => (
                <section>
                    <h1>{jogo.name}</h1>
                    <div>
                        <Imagem src={"public/assets/" + jogo.image} alt="Call of Duty Infinite Warfare" />
                        <button>saiba mais</button>
                        <button><img src={CartImg} alt="adicionar ao carrinho" /></button>
                    </div>
                </section>
            ))}

        </Caixa>
    )
}