import { DRAWER_WIDTH , NAVBAR_HEIGHT } from '../constant'
import sizes from './sizes'
const drawerWidth = DRAWER_WIDTH;
const navHeight = NAVBAR_HEIGHT;
const styles = theme => ({
    root: {
        display: 'flex'
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: navHeight
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    navBtns: {
        display: 'flex',
        "& a":{
            textDecoration: "none"
        }
    },
    buttons: {
        marginRight: "10px",
        [sizes.down("xs")]: {
            marginRight: "0.2rem",
            padding: "3px",
            fontSize:"12px"
        }
    }
});

export default styles;