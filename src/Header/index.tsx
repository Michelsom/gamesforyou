import logoImg from "../assets/lovegames.svg";
import carrinho from "../assets/cart-icon.svg";

export function Header() {
    return (

        <div>
            <img src={logoImg} alt="I love games" />
            <img src={carrinho} alt="carrinho" />
        </div>

    )
}