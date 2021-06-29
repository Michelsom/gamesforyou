import { createContext, useEffect, useState } from "react";
import { api } from './components/services/api'
interface game {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;

}
interface context {
    cart: game[] | [];
    dataproduct: game[] | [];
    addCart: (value: game) => void;
};


const CartContext = createContext<context>({} as context);


export const CartProvider: React.FC = ({ children }) => {
    const [cart, setCart] = useState<game[]>([])
    const [dataproduct, setDataproduct] = useState<game[]>([]);
    function addCart(x: game) {
        setCart([...cart, x])

    }
    useEffect(() => {
        async function GetTransaction() {
            const response = await api.get('dataproducts');
            console.log(response)
            setDataproduct(response.data.dataproducts)
        }
        GetTransaction()

    }, []);
    return (
        <CartContext.Provider value={{ dataproduct, cart, addCart }}>
            {children}
        </CartContext.Provider>


    );
}
export default CartContext;

