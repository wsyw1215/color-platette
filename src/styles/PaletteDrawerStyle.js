import { DRAWER_WIDTH} from '../constant'
const drawerWidth = DRAWER_WIDTH;
const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        display:"flex",
        justifyContent:"center",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: "1rem"
    },
    container: {
        width: "90%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
    }
})

export default styles;