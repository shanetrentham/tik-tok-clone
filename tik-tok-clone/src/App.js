import React, { useState } from 'react';
import Video from './Video';
import './App.css';

function App() {

  const [videos, setVideos] = useState([]);

  return (
    //BEM
    <div className="app">

      <div className="app__videos">

        {videos.map(({url, channel, description, song, likes, messages, shares}) => ( 
          <Video 
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>


  );
}

export default App;
