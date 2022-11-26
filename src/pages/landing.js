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
        display: 'grid',
        height: '100%',
        width: '100vw',
        alignItems: 'center',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr',
    },
    intro: {
        display: 'block',
        padding: '10px',
    },
    // lottieWrapper: {
    //     height: '50vh',
    //     width: '50vw',
    // }

}))


export default Landing;