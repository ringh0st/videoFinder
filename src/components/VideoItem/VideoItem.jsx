import React from 'react';
import {VideoContainer, VideoImage} from './VideoItem.styles';

const VideoItem = ({video, onVideoSelect}) =>{
    console.log(video);
    return(
        //to comunicate with App component (parent component) we use callback function! if not it wont get the video details but a ffunction detail in general.
        <VideoContainer onClick={()=>onVideoSelect(video)} className="item">
            <VideoImage className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </VideoContainer>
    )
}
export default VideoItem;

//video.snippet.title