import React from "react"
import Song from "../components/Song"

const SongList = ({songList}) => {
    
    const songArray = songList.map( (song, index) => {
        return <Song key={index} chartNumber={index+1} songInfo={song} />
    })

    return (
        <>
            {songArray}
        </>
    )
}

export default SongList