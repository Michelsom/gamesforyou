import logofox from "../../assets/logo-fox.svg";
import carrinho from "../../assets/cart-icon.svg";
import xboxImg from "../../assets/xbox-logo-white.svg";
import nintendoImg from "../../assets/nintendo-logo-white.svg";
import ps4Img from "../../assets/ps4-logo-white.svg";
import pcImg from "../../assets/desktop-logo-white.svg";
import setabaixoIcon from "../../assets/seta-para-baixo.svg";
import saleImg from "../../assets/sale-logo-white.svg";
import lupaIcon from "../../assets/icons/lupa-icon.svg";
import {
  Head,
  ImgLogo,
  Logo,
  HeaderButtons,
  ImgCart,
  BtnNintendo,
  BtnPromo,
  BtnPc,
  BtnXbox,
  BtnPlaystation,
  LogoName,
  BoxInput,
} from "./styles";
import React from "react";

interface HeaderProps {
  onOpenCartModal: () => void;
}

export function Header({ onOpenCartModal }: HeaderProps) {
  return (
    <Head>
      <Logo>
        <ImgLogo src={logofox} alt="" />
        <LogoName>Fox Ashen</LogoName>
      </Logo>

      <HeaderButtons>
        <BtnPromo>
          <img src={saleImg} alt="" />
          <h2>Promoções</h2>
          <img className="ImgSetaBaixo" src={setabaixoIcon} alt="" />
        </BtnPromo>
        <BtnXbox>
          <img src={xboxImg} alt="" />
          <h2>Xbox</h2>
        </BtnXbox>
        <BtnNintendo>
          <img src={nintendoImg} alt="" />
          <h2>Nintendo</h2>
        </BtnNintendo>
        <BtnPc>
          <img src={pcImg} alt="" />
          <h2>PC</h2>
          <img className="ImgSetaBaixo" src={setabaixoIcon} alt="" />
        </BtnPc>
        <BtnPlaystation>
          <img src={ps4Img} alt="" />
          <h2>Playstation</h2>
        </BtnPlaystation>
      </HeaderButtons>
      <BoxInput>
        <input type="text" placeholder="Buscar" />
        <img src={lupaIcon} alt="" />
      </BoxInput>
      <button onClick={onOpenCartModal}>
        <ImgCart src={carrinho} alt="carrinho" onClick={onOpenCartModal} />
      </button>
    </Head>
  );
}
