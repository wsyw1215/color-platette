import sizes from './sizes';
export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        height: "6%",
        backgroundColor: "white",
    },
    logo: {
        width: "15%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "5px",
        textAlign: "center",
        fontWeight: "700",
        marginRight: "10px",
        textTransform: "uppercase",
        backgroundColor: "rgb(82, 82, 82)",
        "& a": {
            textDecoration: "none",
            color: "white",
            fontSize: "25px",
            fontFamily: "'Yanone Kaffeesatz', sans-serif",
        },
        [sizes.down("xs")]: {
            display:"none"
        },
    },
    sliderContainer: {
        width: "30%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px"
    },
    slider: {
        width: "70%",
        margin: "0px 15px",
        display: "inline-block",
        "& .rc-slider-track": {
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .select-container": {
            marginLeft: "auto",
            marginRight: "1rem"
        },
        "& .rc-slider-handle:focus, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle": {
            background: "#76ccf3",
            outline: "none", 
            border: "none",
            width: "13px",
            height: "13px",
            boxShadow:"none",
            marginLeft: "-7px",
            marginTop: "-2.5px",
        }
    },
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
    }

}