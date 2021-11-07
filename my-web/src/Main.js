import { useContext } from 'react';
import logo2 from './images/לוגו_thumbnail2.png';
import { ImagesContecxt } from './ImagesContects';



export default function Main() {
    const { images } = useContext(ImagesContecxt)

    return (
        <>


            <header className='header'>
                <img className='header-logo' src={logo2} alt="logo" />
                <div dir='rtl' className='header-href'>
                    <a href="#about">קצת עליי</a>
                    <a href="#projucts">לפרויקטים שלי</a>
                </div>

            </header>
            <div className='logo-background'></div>

            <div>
                <h3 id="about" dir='rtl' className='aboutHeader'>קצת עליי</h3>
                <p className="aboutContent">קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי קצת עליי  </p>
            </div>


            <h3 id='projucts' dir='rtl' className='projuctsHeader' >הפרויקטים שלי</h3>
            <div className="conteiner">
                {images.length > 0 ?
                    images.map((image) => {
                        return <div key={image.id} className="projuct">
                            <img key={image.id} className='imageProject' src={`${image.location}`} alt="image-project" />
                        </div>
                    }) :
                    <div>...טוען</div>


                }
            </div>
        </>
    )
}