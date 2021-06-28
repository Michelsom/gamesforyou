import logoImg from "../../assets/logo.svg";
import carrinho from "../../assets/cart-icon.svg";
import { Head, ImgLogo, ImgCart, LogoName, Name } from "./styles";

interface HeaderProps {
    onOpenCartModal: () => void;
}

export function Header({ onOpenCartModal }: HeaderProps) {

    return (

        <Head>
            <LogoName>
                <ImgLogo src={logoImg} alt="I love games" />
                <Name>I LOVE GAMES</Name>
                <button>PS4</button>
                <button>XBOX</button>
                <button>NINTENDO</button>
                <button>COMPUTADOR</button>


            </LogoName>


            <ImgCart src={carrinho} alt="carrinho" onClick={onOpenCartModal} />

        </Head>

    )
}