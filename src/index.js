import _ from 'lodash';
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import VideoDetail from './components/video-detail';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';

const API_KEY = 'AIzaSyDUM65mulvkWWAsabjYm3iSz7hnnqydQcw';



class App extends Component {

  constructor(props) {
    super(props) ;

    this.state = {
      videos : [],
      selectedVideo : null
      }

      this.videoSearch('FIFA');

  }

   videoSearch(term) {
     YTSearch({key : API_KEY, term: term}, (videos) => {
       this.setState({
         videos : videos,
         selectedVideo : videos[0]

       });

     });
   }


  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoselect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
 }


ReactDOM.render(<App />, document.querySelector('.container'));
