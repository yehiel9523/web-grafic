import { useEffect, useState } from 'react';
import logo2 from './images/logo2.png';
import Upload from './Upload';



export default function Main() {
    // const [imageClass, setImageClass] = useState('imageProjuct')
    const [images, setImages] = useState([])
    // const fullPicture = () => {
    //     setImageClass('fullImage')


    // }
    // useEffect(() => {
    // }, [imageClass])
    useEffect(() => {
        fetch('./getImages')
            .then(res => res.json())
            .then((data) => {
                setImages(data);
                console.log(data)
            })
    }, [])
    return (
        <>

            <header className='header'>
                <img src={logo2} alt="logo" />
            </header>

            <div>
                <h3 dir='rtl' className='aboutHeader'>קצת עליי</h3>
                <p className="aboutContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita facilis voluptatem animi perspiciatis consequatur doloribus vitae porro, cum repellat distinctio aut ut architecto nostrum veritatis aliquam atque quis alias.</p>
            </div>


            <h3 dir='rtl' className='aboutHeader' >הפרויקטים שלי</h3>
            <div className="conteiner">
                {images.map((image) => {
                    return <div className="projuct">
                        <img className='imageProject' src={`${image.location}`} alt="image project" />
                    </div>
                })}
            </div>
        </>
    )
}