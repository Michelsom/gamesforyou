import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from './components/services/api'

interface game {
    id: number;
    name: string;
    price: number;
    score: number;
    image: string;

}
interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<game[]>([]);


export function CartProvider({ children }: CartProviderProps) {
    const [dataproduct, setDataproduct] = useState<game[]>([]);

    useEffect(() => {
        async function GetTransaction(){
            const response = await api.get('dataproduct');
            setDataproduct(response.data)
        }
        GetTransaction()
      
    }, []);
    return (
        <CartContext.Provider value={dataproduct}>
            {children}
        </CartContext.Provider>


    );
}


