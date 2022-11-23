import { makeStyles } from "tss-react/mui";
import Lottie from "lottie-react";
import mapIconPulseAnimation from "../assets/lotties/mapIconPulse.json";
import rocketSpaceAnimation from "../assets/lotties/rocketSpace.json";

function Header() {
  const { classes } = useStyles({});

  return (
    <div className="header">
      <h1>Planet Express</h1>
      <h5>A delivery service that is out of this world!</h5>
      <div className={classes.wrapper}>
        <Lottie animationData={rocketSpaceAnimation} />


        {/* We deliver to the stars and beyond.
          We are the fastest delivery service in the universe.
          Our crew is replaceable, your package isn't!  */}

      </div>

    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({

  wrapper: {
    height: '50vh',
    width: '50vw',
    textAlign: 'center',
  }
}))


export default Header;