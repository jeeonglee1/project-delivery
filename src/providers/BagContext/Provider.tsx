import { createContext, useState, useContext } from "react";

interface ContextType {
    currentDish: any;
    currentRestaurant: any;
    addProduct: (currentDish: any, currentRestaurant: any) => void;
    removeProduct: () => void;
    products: any;
}

export const BagContext = createContext({} as ContextType);

 export const BagProvider = ({ children }: React.PropsWithChildren) => {
     
    const [products, setProducts] = useState<Array<any>>([]);

    const addProduct = (currentDish: any, currentRestaurant: any) => {
        const itemObject = {currentDish, currentRestaurant};
        setProducts([...products, itemObject]);
    };

    const removeProduct = (products) => {
        const filteredBag = bag.filter (
            (bagItem) => CartLogo.indexOf(bagItem) !== itemIndex
        )
        setProducts(filteredBag)
    };

    return (
        <BagContext.Provider value={{products, addProduct, removeProduct}}>
            {children}
        </BagContext.Provider>
    );
}

export const useBagProvider = () => useContext(BagContext);