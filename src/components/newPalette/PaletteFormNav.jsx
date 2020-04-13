import React, { Component } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Button } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/PaletteFormNavStyle'
import PaletteMetaForm from './PaletteMetaForm.jsx';

class PaletteFormNav extends Component {
    state = {
        formShowing:false
    }
    handleClickOpen = () => {
        this.setState({ formShowing: true });
    };
    handleClose = () => {
        this.setState({ formShowing: false });
    };
    render() {
        const { classes, open, handleDrawerOpen, submit, palettes } = this.props;
        const { formShowing } = this.state
        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                    color="default"
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            className={classNames(classes.menuButton, { [classes.hide]: open })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        {/* 儲存調色盤 */}
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen} className={classes.buttons}>
                            Save
                        </Button>
                        {/* 返回按鈕 */}
                        <Link to="/">
                            <Button variant="contained" color="secondary" className={classes.buttons}>Go Back</Button>
                        </Link>
                    </div>
                </AppBar>
                {/* 彈跳視窗 */}
                { formShowing && <PaletteMetaForm submit={submit} palettes={palettes} close={this.handleClose}/> }
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
