import logofox from "../../assets/logo-fox.svg";
import carrinho from "../../assets/cart-icon.svg";
import xboxImg from "../../assets/xbox-logo.svg"
import nintendoImg from "../../assets/nintendo-logo.svg"
import ps4Img from "../../assets/ps4-logo.svg"
import pcImg from "../../assets/pc-logo.svg"
import setabaixoIcon from "../../assets/seta-para-baixo.svg"
import { Head, ImgLogo, LogoName, Search, HeaderButtons, ImgCart } from "./styles";
import React from "react";

interface HeaderProps {
    onOpenCartModal: () => void;
}

export function Header({ onOpenCartModal }: HeaderProps) {

    return (

        <Head>
            <LogoName>
                <ImgLogo src={logofox} alt="" />
                <h2>Fox Ashen</h2>
            </LogoName>
            <HeaderButtons>
                <button>
                    <img src={pcImg} alt="" />
                    <h2>Promoções</h2>
                    <img className="ImgSetaBaixo" src={setabaixoIcon} alt="" />
                </button>
                <button>
                    <img src={xboxImg} alt="" />
                    <h2>Xbox</h2>
                </button>
                <button>

                    <img src={nintendoImg} alt="" />
                    <h2>Nintendo</h2>

                </button>
                <button>

                    <img src={pcImg} alt="" />
                    <h2>PC</h2>
                    <img className="ImgSetaBaixo" src={setabaixoIcon} alt="" />
                </button>
                <button>

                    <img src={ps4Img} alt="" />
                    <h2>Playstation</h2>
                </button>
                <Search type="search" placeholder="Buscar" />
            </HeaderButtons>

            <div>
                <button>Entrar</button>

            </div>

            <a href="{onOpenCartModal}">
                <ImgCart src={carrinho} alt="carrinho" onClick={onOpenCartModal} />
            </a>
        </Head>

    )
}