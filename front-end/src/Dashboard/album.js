import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import JS from './js/javascript';
import Reacts from './react/react';
import Node from './node/node'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © localHost   '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  toolbar:{
      backgroundColor:'black'
  }
}));

const cards = [
            {   
                course:"JavaScript",
                desc:"Learn Javascript with Fun",
                button:"Learn Js",
                link:"/js",
                image:"https://blog.logrocket.com/wp-content/uploads/2020/10/deep-cloning-objects-javascript.png"
            },
            {   
                course:"React",
                desc:"Learn React with Fun",
                button:"Learn React",
                link:"/react",
                image:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
            },
            {   course:"Node",
                desc:"Learn Node with Fun",
                button:"Learn Node",
                link:"/node",
                image:"https://tsh.io/wp-content/uploads/2019/05/node-js-injection_.jpg"
            }
            ];

export default function Album() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
    <Router>
    <Switch>
           {/* <Route path="/" component = {<JS/>}>
           <Redriect from='/blog/' to="/tutorials/" />
           <Route path="/tutorials/" component={About} /> */}
            <Route exact path="/js">
              <JS/>
            </Route>
            <Route exact path="/react">
                <Reacts/>
            </Route>
            <Route exact path="/node">
                <Node/>
            </Route>
    </Switch>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          {/* <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography> */}
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              WELCOME 
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              MASTER THE WEB DEVELOPEMENT WITH LOCALHOST
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.course}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Link to={card.link}>{card.button}</Link> &nbsp;
                    {/* <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          All the content is Upar...^...
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      </Router>
    </React.Fragment>
  );
}