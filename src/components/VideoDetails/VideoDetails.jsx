import React from 'react';
import {VideoDetailContainer} from './VideoDetails.styles';

const VideoDetails =({selectedVideo})=>{
    if(!selectedVideo){
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return (
    <VideoDetailContainer className="ui image">
        <div className="ui embed">
            <iframe title="video player" src={videoSrc}/>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{selectedVideo.snippet.title}</h4>
            <p>{selectedVideo.snippet.description}</p>
        </div>
    </VideoDetailContainer>
    )
}
export default VideoDetails