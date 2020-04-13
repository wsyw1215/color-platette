
import chroma from 'chroma-js';
import sizes from './sizes';
export default {
    ColorBox: {
        width: "20%",
        height: props => props.showFullPalette ? "25%" : "50%",
        margin: "0px auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3px",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.showFullPalette ? "20%" : "33.3333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showFullPalette ? "10%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showFullPalette ? "5%" : "10%",
        }
    },
    copiedText: {
        color: props => chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.5)" : "white"
    },
    seeMore: {
        width: "60px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        bottom: "0",
        right: "0",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "16px",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.5)" : "white",
        textTransform: "uppercase",
        border: "none"
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => chroma(props.background).luminance() >= 0.5 ? "rgba(0,0,0,0.5)" : "white",
        textTransform: "uppercase",
        border: "none",
        transition: "opacity 1s",
        opacity: 0
    },
    boxContent: {
        position: "absolute",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "12px",
        padding: "10px",
        left: "0px",
        bottom: "0px",
        color: props => chroma(props.background).luminance() <= 0.08 ? "white" : "black"
    },
    copyOverlay: {
        opacity: 0,
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform: "scale(0.1)",
    },
    showOverlay: {
        opacity: 1,
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        flexDirection: "column",
    },
    copyMsgShow: {
        opacity: 1,
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s",
        transitionDelay: "0.3s",
        "& h1": {
            fontWeight: "400",
            textShadow: "5px 5px 10px rgba(0, 0, 0, 0.459)",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            fontSize: "100px",
            [sizes.down("xs")]: {
                fontSize: "70px",
            },
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    }
}