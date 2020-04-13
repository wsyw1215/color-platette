import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import style from '../../styles/ColorBoxStyle'

class ColorBox extends Component {
    state = {
        copied: false
    }
    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 1500)
        });
    }

    render() {
        const { background, name, moreUrl, showFullPalette, classes } = this.props;
        const { copied } = this.state;
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background: background }} className={classes.ColorBox}>
                    <div style={{ background: background }} className={classNames(classes.copyOverlay,{ [classes.showOverlay]:copied })} />
                    <div className={classNames(classes.copyMsg, { [classes.copyMsgShow]:copied })}>
                        <h1 className={classes.copiedText}>Copied</h1>
                        <p className={classes.copiedText}>{background}</p>
                    </div>
                    <div>
                        <div className={classes.boxContent}>
                            {name}
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    {showFullPalette &&
                        (
                            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                                <span className={classes.seeMore}>More</span>
                            </Link>
                        )
                    }
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(style)(ColorBox);