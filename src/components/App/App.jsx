import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import youtube from '../../apis/youtube'
class App extends React.Component{
    onTermSubmit = term => {
        youtube.get('/search', {
            params:{
                q: term,
            }
        })
        console.log(term)
    };
    
    render(){
        return <div className="ui container"><SearchBar onTermSubmit={this.onTermSubmit}/></div>
    }
}
export default App;