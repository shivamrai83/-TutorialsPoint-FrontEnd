import React, {useContext, useEffect} from "react";
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
  const [url, setUrl] = React.useState();

  const videoUrl = (videoId) => {
    const id = categories[0].children[0].id;
    if (videoId === id) {
      return categories[0].children[0].video
    }
    else{
      return "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }
  };
  
  useEffect(()=>{
    setUrl(videoUrl(videoId));
  },[videoId])

  console.log("Video",url)
  console.log("in video id is",categories[0].children[0].video)
  return (
    <div>
      <ReactVideo
        // src="https://cdn.videvo.net/videvo_files/video/premium/video0007/small_watermarked/black_headz_spin4k05_preview.webm"
        // src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        src={url}
        primaryColor="yellow"
      />
    </div>
  );
}

export default withStyles(styles)(Content);
