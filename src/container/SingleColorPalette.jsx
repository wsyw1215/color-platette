import React, { Component } from 'react';
import uuid from 'uuid/v4'
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import style from '../styles/SingleColorStyle'
import ColorBox from '../components/palette/ColorBox.jsx';
import Navbar from '../components/palette/Navbar.jsx';
import Footer from '../components/palette/Footer.jsx';

class singleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = {
            colorFormat: 'hex'
        }
    }
    gatherShades(palatte, colorId) {
        let allColors = palatte.colors;
        let shades = Object.values(allColors).map(color => { return color.find(c => c.id === colorId) });
        // 去除掉50
        return shades.slice(1);
    }
    changeFormat = (value) => {
        console.log(value)
        this.setState({
            colorFormat: value
        })
    }
    render() {
        const colorBox = this._shades.map(color => {
            return <ColorBox
                background={color[this.state.colorFormat]}
                key={uuid()}
                name={color.name}
                showFullPalette={false}
            />
        })
        const { paletteName, emoji, id } = this.props.palette;
        const { classes } = this.props;
        return (
            <div className={classes.Palette}>
                <Navbar showSlider={false} changeFormat={this.changeFormat} />
                <div className={classes.PaletteColors}>
                    {colorBox}
                    <div className={classes.goBackBox}>
                        <Link to={`/palette/${id}`}>Go Back</Link>
                    </div>
                </div>
                <Footer paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(style)(singleColorPalette);
