import sizes from './sizes';
export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 0.5s ease-out"
        }
    },
    root: {
        height: "100vh",
        overflow: 'scroll',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        transition: 'width 0.5s',
        [sizes.down("xl")]: {
            width: "60%",
        },
        [sizes.down("lg")]: {
            width: "70%",
        },
        [sizes.down("md")]: {
            width: "80%",
        },
        [sizes.down("xs")]: {
            width: "90%",
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "rgba(0,0,0,0.7)"
        }
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "1.5rem",
        marginBottom: "1.5rem",
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(2, 45%)"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 90%)"
        }
    },
    button: {
        marginLeft: "10px"
    },
    input: {
        display: "none"
    }
}