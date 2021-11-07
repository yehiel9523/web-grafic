export default function Preview(
    { isSelected, selectedFile, imagePreview }
) {
    return (
        <div className='flex-coulmn'>
            {isSelected ? (
                <div className='flex-coulmn'>
                    {/* <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p> */}
                    {/* <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p> */}
                    <img src={`${imagePreview}`} alt="image" />

                </div>

            ) : (
                <p>בחר קובץ </p>
            )}

        </div>
    )

}