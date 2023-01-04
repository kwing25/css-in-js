import { makeStyles } from "tss-react/mui";

function Intro() {
  const { classes } = useStyles({});

  return (
    <div className={classes.main}>
      <p>
        We deliver to the stars and beyond.<br />
        We are the fastest delivery service in the universe.<br />
        Our crew is replaceable, your package isn't!
      </p>
    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({

  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    width: 'auto',
    padding: '50px',
    margin: '30px',
  }
}))

export default Intro;