import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { ReactVideo } from "reactjs-media";

const styles = (theme) => ({
  paper: {
    maxWidth: "auto",
    margin: "auto",
    // overflow: 'hidden',
  },
});

function Content(props) {
  const { classes } = props;

  return (
    <div>
      <ReactVideo
        // src="https://cdn.videvo.net/videvo_files/video/premium/video0007/small_watermarked/black_headz_spin4k05_preview.webm"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        primaryColor="yellow"
      />
    </div>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
