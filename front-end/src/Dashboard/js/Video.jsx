import React, {useContext, useEffect, useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import { ReactVideo } from "reactjs-media";
import Context from '../DashboardContext';

const styles = (theme) => ({
  paper: {
    maxWidth: "auto",
    margin: "auto",
    // overflow: 'hidden',
  },
});

function Content() {
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

  console.log("Video url",url)
  
  return (
    <div>
      <ReactVideo
        src={url ? url : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"}
        primaryColor="yellow"
      />
    </div>
  );
}

export default withStyles(styles)(Content);
