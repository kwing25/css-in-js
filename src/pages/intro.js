import { makeStyles } from "tss-react/mui";


function Intro() {
    const { classes } = useStyles({});

    return (
        <div className={classes.main}>
            <p>
            We deliver to the stars and beyond.
          We are the fastest delivery service in the universe.
          Our crew is replaceable, your package isn't! 
            </p>

        </div>
    );
}

const useStyles = makeStyles()((_, props) => ({

    main: {
        display: 'block',
      height: '100vh',
      width: '100vw',

    }
  }))

export default Intro;