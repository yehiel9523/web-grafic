import React, { useState, useEffect } from 'react';

export const ImagesContecxt = React.createContext({
    images: [],
    setImages: () => { }
});

export default function ImagesProvider({ children }) {

    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('./getImages')
            .then(res => res.json())
            .then((data) => {
                setImages(data);
                console.log(data)
            })
    }, [])
    return (
        <ImagesContecxt.Provider value={{
            images,
            setImages
        }}>
            {children}
        </ImagesContecxt.Provider>
    )
}
