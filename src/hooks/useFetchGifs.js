import { useEffect, useState } from "react";
import { getGifs } from "../herpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        getGifs(category)
            .then(setImages)
            .then(setIsLoading(false));
    },[]);
    return {
        images,
        isLoading,
    }
}
