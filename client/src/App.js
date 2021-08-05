import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import Notification from "./components/Notification";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    margin: "auto",
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar>
          <Typography variant="h4">Video Chat</Typography>
        </Toolbar>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notification />
      </Options>
    </div>
  );
};

export default App;
