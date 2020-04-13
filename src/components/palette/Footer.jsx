import React from 'react'
import { withStyles } from '@material-ui/styles';
import style from '../../styles/FooterStyle'


function Footer (props) {
    const { paletteName, emoji, classes } = props;
    return (
        <footer className={classes.Footer}>
            <div className={classes.palettename}>{ paletteName }</div>
            <div className={classes.emoji}>{ emoji }</div>
        </footer>
    )

}

export default withStyles(style)(Footer);
