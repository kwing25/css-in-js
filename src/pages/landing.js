import { makeStyles } from "tss-react/mui";
import Lottie from "lottie-react";
import rocketSpaceAnimation from "../assets/lotties/rocketSpace.json";

function Landing() {
    const { classes } = useStyles({});

    return (
        <div className={classes.landing}>
            <div className={classes.intro}>
                <h1>Planet Express</h1>
                <h5>A delivery service that is out of this world!</h5>
            </div>
            <div className={classes.lottieWrapper}>
                <Lottie animationData={rocketSpaceAnimation} />
            </div>
        </div>
    );
}

const useStyles = makeStyles()((_, props) => ({

    landing: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        alignItems: 'center',
    },
    intro: {
        display: 'block',
        padding: '10px',
    },
    lottieWrapper: {
        height: 'auto',
        // width: '50vw',
    }

}))


export default Landing;