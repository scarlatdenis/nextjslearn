import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./header.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  // menuButton: {
  //   marginRight: theme.spacing(1)
  // },
  // title: {
  //   flexGrow: 1
  // },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={styles.menuButton}
            >
              <MenuIcon></MenuIcon>
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              Web developer blog
            </Typography>
            <Box className={styles.box}>
              <Button color="inherit" variant="outlined">
                Log in
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
