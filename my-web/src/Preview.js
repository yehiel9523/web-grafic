export default function Preview(
    { isSelected, selectedFile, imagePreview }
) {
    return (
        <>
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    {/* <p>
                        lastModifiedDate:{' '}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p> */}
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <img src={`${imagePreview}`} alt="image" />

        </>
    )

}