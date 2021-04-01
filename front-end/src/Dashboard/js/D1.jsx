import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import VideoPlayer from 'react-video-js-player';

const styles = (theme) => ({
  paper: {
    maxWidth: 'auto',
    margin: 'auto', 
    // overflow: 'hidden',
  },
});

function Content(props) {
  const { classes } = props;

  return (
    <div>
    <VideoPlayer className={classes.paper}
    src="https://cdn.videvo.net/videvo_files/video/premium/video0007/small_watermarked/black_headz_spin4k05_preview.webm" 
    width="auto"
    height="auto"
    />
    </div>
  )
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);