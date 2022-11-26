import theme from "./theme";

const globalStyles = {
    ".main": {
        backgroundColor: theme.palette.brandTeal,
    },
    body: {
        fontFamily: "Outfit",
        overscrollBehaviorY: "none",

    },
    h1: {
        fontFamily: "OutfitBold",
        fontSize: 130,
        lineHeight: "1",
        letterSpacing: "-1px",
        color: theme.palette.brandTeal,
        [theme.breakpoints.down("tablet")]: { fontSize: 100 },
        [theme.breakpoints.down("mobile")]: { fontSize: 75 },
    },
    h5: {
        fontSize: 40,
        lineHeight: "1",
        letterSpacing: "-1.5px",
        color: theme.palette.brandBlack,
        [theme.breakpoints.down("tablet")]: { fontSize: 32 },
        [theme.breakpoints.down("mobile")]: { fontSize: 27 },
      },
    p: {
        fontFamily: "FRTitle",
        fontSize: 20,
        letterSpacing: "1px",
    },
    // ".grid": {
    //     display: "grid",
    //     gridAutoColumns: "1fr",
    //     gridTemplateRows: "auto",
    //     gridTemplateColumns: "1fr 1fr",
    //     gridRowGap: 16,
    //     gridColumnGap: 16,
    // [theme.breakpoints.down("mobile")]: {
    //     gridTemplateColumns: "1fr 1fr",
    //   },
    // },
};

export default globalStyles;
