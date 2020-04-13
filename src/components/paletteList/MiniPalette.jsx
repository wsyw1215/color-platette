import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from '../../styles/MiniPaletteStyle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class MiniPalette extends PureComponent {

    handleClick = () => {
        this.props.handleClick(this.props.id)
    }
    openDeleteDialog = (evt) => {
        evt.stopPropagation();
        this.props.openDeleteDialog({name:this.props.paletteName,id:this.props.id});
    }
    render() {
        const { classes, paletteName, emoji, colors } = this.props;
        const miniColorBox = colors.map(color => <div className={classes.colorbox} style={{ backgroundColor: color.color }} key={color.name}></div>)
        return (
            <div className={classes.root} onClick={this.handleClick}>
                <DeleteForeverIcon className={classes.deleteIcon} onClick={this.openDeleteDialog} />
                <div className={classes.colors}>
                    {miniColorBox}
                </div>
                <h5 className={classes.title}>{paletteName}<span className={classes.emoji}>{emoji}</span></h5>
            </div>
        )
    }

}

export default withStyles(styles)(MiniPalette);