import React from "react";

const AlbumImg = ({imageList}) => {

    const chosenImage = imageList.find( (image) => {
        return image.attributes.height == 55
    })

    return (
        <>
            <img id="albumImg" src={chosenImage.label} alt="Album image" />
        </>
    )
}


export default AlbumImg