import React from 'react';
import ReactDOM from 'react-dom';


const VideoListItem = ({video,onVideoselect}) => {
const imageURL = video.snippet.thumbnails.default.url;
const title = video.snippet.title;

  return(
    <li onClick={() => onVideoselect(video)}className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
            <img className="media-object" src={imageURL}/>
        </div>
        <div className="media-object">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>

  );

}

export default VideoListItem;
