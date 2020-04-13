import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Navbar from '../components/palette/Navbar.jsx';
import Footer from '../components/palette/Footer.jsx';
import ColorBox from '../components/palette/ColorBox.jsx';
import { withStyles } from '@material-ui/styles';
import style from '../styles/PaletteStyle'

class Palette extends Component {
    state = {
        level: 500,
        colorFormat: 'hex'
    }
    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        });
    }
    changeFormat = (value) => {
        this.setState({
            colorFormat: value
        })
    }
    render() {
        const { level, colorFormat } = this.state;
        const { classes } = this.props;
        const { colors, paletteName, emoji, id } = this.props.palette;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox
                key={uuid()}
                background={color[colorFormat]}
                name={color.name}
                moreUrl={`/palette/${id}/${color.id}`}
                showFullPalette
            />
        });
        return (
            <div className={classes.Palette}>
                {/* Navbar */}
                <Navbar level={level} changeLevel={this.changeLevel} changeFormat={this.changeFormat} showSlider />
                <div className={classes.PaletteColors}>
                    {/* color boxes */}
                    {colorBoxes}
                </div>
                {/* footer */}
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(style)(Palette);