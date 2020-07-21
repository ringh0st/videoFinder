import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({videos}) => {
    const renderList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video}/>
    })
    console.log(videos)
    return(
        <div>{renderList}</div>
    )
}

export default VideoList;