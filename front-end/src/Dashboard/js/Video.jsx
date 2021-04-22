import React, {useContext, useEffect, useState} from "react";
import { ReactVideo } from "reactjs-media";
// import { Player, ControlBar } from 'video-react';
import Context from '../DashboardContext';

function Content({video}) {
  const {categories, videoId, } = useContext(Context);
  const [url, setUrl] = useState();

  const videoUrl = (videoId) => {
    const id = categories[0].children[0].id;
    if (videoId === id) {
      return categories[0].children[0].video
    }
  };
  
  useEffect(()=>{
    setUrl(videoUrl(videoId));
  },[videoId])

  console.log("Video arr",video)
  const vid = "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  return (
    <div>
      {video.map((vid)=>(
        vid.id===videoId ? vid.video ? <ReactVideo
        src={vid.video ? vid.video : vid }
        primaryColor="yellow"
      /> : <React.Fragment />
      : <React.Fragment />
      ))}
      {/* <ReactVideo
        src={arr.children.video ? arr.children.video : vid }
        primaryColor="yellow"
      /> */}

        {/* <Player>
          <source src={url} />
          <ControlBar autoHide={false} />
        </Player> */}
    </div>
  );
}

export default Content;
