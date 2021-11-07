import { useState, useEffect } from "react";
import Preview from "./Preview";
export default function Upload() {
    const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [imagePreview, setImagePreview] = useState()


    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);

    };
    useEffect(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        }
        if (selectedFile)
            reader.readAsDataURL(selectedFile)

    }, [selectedFile])

    const handleSubmission = () => {
        const formData = new FormData();
        formData.append('file', selectedFile);
        fetch(
            '/upload',
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <div className='flex-coulmn'>
            <input type="file" name="file" onChange={changeHandler} />
            <Preview isSelected={isSelected} selectedFile={selectedFile} imagePreview={imagePreview} />

            <div>
                <button onClick={handleSubmission}>שלח</button>
            </div>


        </div>
    )

}