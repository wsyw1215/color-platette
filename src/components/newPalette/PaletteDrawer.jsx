import React, { Component } from 'react';
import { Typography, Divider, IconButton, Drawer, Button } from '@material-ui/core/';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/PaletteDrawerStyle';
import ColorPickerForm from './ColorPickerForm.jsx';

export class PaletteDrawer extends Component {
    handleDrawerClose = () => {
        this.props.close();
    }
    render() {
        const {classes, paletteIsFull, colors, open, addNewColor, clearColor, addRandomColor } = this.props;
        return (
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />

                <div className={classes.container}>
                    <Typography variant="h4">Design Your Palette</Typography>
                    <div className={classes.button}>
                        <Button variant="contained" color="secondary" onClick={clearColor}>Clear Palette</Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={addRandomColor}
                            disabled={paletteIsFull}
                        >Random Color</Button>
                    </div>
                    <ColorPickerForm colors={colors} addNewColor={addNewColor} paletteIsFull={paletteIsFull} />
                </div>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(PaletteDrawer);
