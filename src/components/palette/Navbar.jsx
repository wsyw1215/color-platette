import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { IconButton, Snackbar, MenuItem, Select } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import { withStyles } from '@material-ui/styles';
import 'rc-slider/assets/index.css';
import style from '../../styles/NavbarStyle';

class Navbar extends Component {
    state = {
        format: 'hex',
        snackbarOpen: false,
    }
    handleFormatChange = (e) => {
        this.setState(
            {
                format: e.target.value,
                snackbarOpen: true
            },
            () => {
                this.props.changeFormat(this.state.format);
            });
    }
    handleCloseMessage = (e) => {
        this.setState({ snackbarOpen: false });
    }
    render() {
        const { level, changeLevel, showSlider, classes } = this.props;
        const { format } = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">color picker</Link>
                </div>
                {showSlider &&
                    <div className={classes.sliderContainer}>
                        <span>Level: {level}</span>
                        <div className={classes.slider}>
                            <Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
                        </div>
                    </div>
                }
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={1000}
                    message={<span id="message-id">Format Change To {format.toUpperCase()} !</span>}
                    onClose={this.handleCloseMessage}
                    action={[
                        <IconButton onClick={this.handleCloseMessage} color='inherit'>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}

export default withStyles(style)(Navbar);