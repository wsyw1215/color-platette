import sizes from './sizes'
export default{
    Palette: {
        height: "100%",
        display: "flex",
        flexDirection: "column"

    },
    PaletteColors: {
        height: "90%"
    },
    goBackBox: {
        width: "20%",
        height: "50%",
        margin: "0px auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        background: "black",
        "& a": {
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
            color: "white",
            textTransform: "uppercase",
            border: "none",
            transition: "opacity 1s",
            opacity: 1,
            textDecoration: "none"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "33.3333%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height:"20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%",
        },
    },
}