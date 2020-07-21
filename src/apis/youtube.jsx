import axios from 'axios';

const KEY = "AIzaSyDgU2zQzDo531zg4ShcSbPAx5T9Hx93JIs";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        type: 'video',
        key:KEY
    }
})