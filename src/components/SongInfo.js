import React from "react"

const SongInfo = ({songInfo}) => {

    return (
        <>
            <p className="songInfo"><span>Genre:</span> { songInfo.category.attributes.term } </p>
            <p className="songInfo"><span>Release date:</span> { songInfo['im:releaseDate']['attributes']['label'] } </p>
        </>
    )

}

export default SongInfo