import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../apis/youtube';
import VideoList from '../VideoList/VideoList';
import VideoDetails from '../VideoDetails/VideoDetails';

class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null
    }
    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params:{
                q: term,
            }
        })
        this.setState({videos:response.data.items})
    }; 
    
    onVideoSelect =(video)=>{
        console.log('ffrom the app',video);
        this.setState({selectedVideo:video})
    }
    render(){
        return <div className="ui container">
            <SearchBar onTermSubmit={this.onTermSubmit}/>
            <VideoDetails selectedVideo={this.state.selectedVideo}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
            </div>
        
    }
}
export default App;