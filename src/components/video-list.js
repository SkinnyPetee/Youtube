import React from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video-list-item';

const VideoList = (props) => {

 const videoItems = props.videos.map((video) => {
   return (
     <VideoListItem
       onVideoselect={props.onVideoselect}
       video={video} key={video.etag}/>
   );
 });


 return (
   <ul className = " col-md-4 list-group">
      {videoItems}
   </ul>
 );

}


export default VideoList;
