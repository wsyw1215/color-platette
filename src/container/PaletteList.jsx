import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core/';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import styles from '../styles/PaletteListStyle'
import DeleteDialogue from '../components/paletteList/DeleteDialogue'
import MiniPalette from '../components/paletteList/MiniPalette.jsx'

class PaletteList extends Component {
    state = {
        showDeleteDialog:false,
        deletePaletteInfo:{}
    }
    gotoPalette = (id) => {
        this.props.history.push(`/palette/${id}`);
    };
    handleFile = (evt) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const newPalette = JSON.parse(event.target.result);
            this.props.importPalette(newPalette);
        };
        if (evt.target.files[0])
            reader.readAsText(evt.target.files[0]);
    }
    openDeleteDialog = (palette) => {
        this.setState({
            showDeleteDialog: true,
            deletePaletteInfo:palette
        });
    }
    closeDeleteDialog = () => {
        this.setState({showDeleteDialog: false});
    }
    render() {
        const { classes, palettes, deletePalette } = this.props;
        const { showDeleteDialog,deletePaletteInfo } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Color</h1>
                        <div>
                            <Link to="/palette/new"><Button variant="contained" color="primary" className={classes.button}>New</Button></Link>
                            <input
                                accept=".json"
                                className={classes.input}
                                onChange={this.handleFile}
                                id="raised-button-file"
                                type="file"
                            />
                            <label htmlFor="raised-button-file">
                                <Button variant="contained" component="span" color="secondary" className={classes.button}>
                                    Import
                                </Button>
                            </label>
                        </div>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {
                            palettes.map(p => {
                                return (
                                    <CSSTransition key={p.id} classNames="fade" timeout={500}>
                                        <MiniPalette key={p.id} {...p} handleClick={this.gotoPalette} openDeleteDialog={this.openDeleteDialog} />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </div>
                { showDeleteDialog && 
                    <DeleteDialogue 
                        closeDeleteDialog={this.closeDeleteDialog} 
                        deletePalette={deletePalette}  
                        deleteInfo={deletePaletteInfo}
                        />
                }
            </div>
        )
    }
}
export default withStyles(styles)(PaletteList);