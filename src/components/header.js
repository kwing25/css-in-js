import { makeStyles } from "tss-react/mui";
import Lottie from "lottie-react";
import mapIconPulseAnimation from "../assets/lotties/mapIconPulse.json";

function Header() {
  const { classes } = useStyles({});

  return (
    <div className="header">
      <h1>Header</h1>
      <div className={classes.wrapper}>
        <Lottie animationData={mapIconPulseAnimation} />
      </div>
      <p>sub paragrah</p>
    </div>
  );
}

const useStyles = makeStyles()((_, props) => ({

  wrapper: {
    height: '50vh',
    width: '50vw'
  }
}))


export default Header;