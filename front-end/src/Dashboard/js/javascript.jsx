import React from "react";
import PropTypes from "prop-types";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";

import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import D2 from "./Sidebar";
import D1 from "./Video";
import D3 from "./Header";
import {DashboardProvider} from "../DashboardContext"

function Copyright() {
  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#63ccff",
      main: "#009be5",
      dark: "#006db3",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: "#eaeff1",
    width: "100%",
  },
  footer: {
    padding: theme.spacing(2),
    background: "#eaeff1",
  },
};

const categories = [
  {
    id: "Videos",
    children: [
      {
        id: "Test Video",
        icon: <MovieFilterIcon />,
        video:
          "https://cdn.videvo.net/videvo_files/video/premium/video0007/small_watermarked/black_headz_spin4k05_preview.webm",
      },
      { id: "Database", icon: <MovieFilterIcon /> },
      { id: "Storage", icon: <MovieFilterIcon /> },
      { id: "Hosting", icon: <MovieFilterIcon /> },
      { id: "Functions", icon: <MovieFilterIcon /> },
      { id: "ML Kit", icon: <MovieFilterIcon /> },
    ],
  },
  {
    id: "Project",
    children: [
      { id: "Analytics", icon: <OndemandVideoIcon /> },
      { id: "Performance", icon: <OndemandVideoIcon /> },
      { id: "Test Lab", icon: <OndemandVideoIcon /> },
    ],
  },
];

function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <DashboardProvider value = {categories} >
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <D2
              PaperProps={{ style: { width: drawerWidth } }}
              active={active}
              setActive={setActive}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          </Hidden>
          {
            <Hidden xsDown implementation="css">
              <D2
                PaperProps={{ style: { width: drawerWidth } }}
                active={active}
                setActive={setActive}
              />
            </Hidden>
          }
        </nav>
        <div className={classes.app}>
          <D3 onDrawerToggle={handleDrawerToggle} />
          <main className={classes.main}>
            <D1 />
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
      <div>{active}</div>
    </ThemeProvider>
    </DashboardProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
