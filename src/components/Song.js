import React from "react"
import AlbumImg from "./AlbumImg"
import SongInfo from "./SongInfo"

const Song = ({chartNumber, songInfo}) => {

return (
    <>
        <h4>{chartNumber} - {songInfo.title.label}</h4>
            <div id="flex-container">
                <AlbumImg imageList={songInfo['im:image']} />
                <SongInfo songInfo={songInfo} />
            </div>
    </>
)

}

export default Song