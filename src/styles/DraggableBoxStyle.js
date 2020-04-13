import chroma from 'chroma-js';
import sizes from './sizes';
export default {
    root:{
        width: "20%",
        height: "25%",
        margin: "0px auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover svg":{
            color:"white",
            transform:"scale(1.4)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "20%"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "5%",
        }
    },
    boxContent:{
        position: "absolute",
        textTransform: "uppercase",
        letterSpacing: "1px",
        fontSize: "12px",
        padding: "10px",
        left: "0px",
        bottom: "0px",
        display:"flex",
        justifyContent:"space-between", 
        color: props => chroma(props.color).luminance() <= 0.08 ? "white" : "rgba(0,0,0,0.5)",
        width:"100%",

    },
    deleteIcon:{
        transition:'all 0.4s ease-in-out'
    }
}