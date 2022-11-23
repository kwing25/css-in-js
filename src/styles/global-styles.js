
const colors = {
    brandTeal: '#00D09F',
    brandRed: '#D83A3A',
    brandWhite: '#F8F2D6',
    brandBlack: '#010100',
    secondaryBlue: '#408975',
    secondarkTeal: '#A8F9B0',
    secondaryDark: '#8F3532',
    neutralBlack: '#000000',
    neutralWhite: '#ffffff',
    neutralTransparent: 'transparent'
}

const globalStyles = {
    body: {
fontFamily: "Outfit",
        overscrollBehaviorY: "none",
    
    },

    h1: {
        fontFamily: "OutfitBold",
        fontSize: 130,
        lineHeight: "1",
        letterSpacing: "-1px",
        color: colors.brandTeal,

    },

    p: {
        fontFamily: "FRReg",
        fontSize: 20,
        letterSpacing: "1px",
    }
};

export default globalStyles;
