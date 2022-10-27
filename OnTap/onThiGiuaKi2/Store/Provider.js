import { useState } from "react";
import PlantContext from "./Context";
import images from "../assets/images";

function Provider({ children }) {
    const plants = [
        { id: 1, name: "Aloe Vera", price: 10, image: images.kiquanmaster },
        { id: 2, name: "Ilumira", price: 10, image: images.ocuadieuki },
        { id: 3, name: "Hello", price: 10, image: images.ocuadieuki },
        { id: 4, name: "Uwuw", price: 10, image: images.ocuadieuki },
        { id: 5, name: "DMM", price: 10, image: images.ocuadieuki },
    ];
    const [plantCart, setPlantCart] = useState([]);
    return (
        <PlantContext.Provider value={{ plants, plantCart, setPlantCart }}>
            {children}
        </PlantContext.Provider>
    );
}

export default Provider;
