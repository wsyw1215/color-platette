import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core/';
import { Picker } from 'emoji-mart';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'

export class PaletteMetaForm extends Component {
    state = {
        paletteName: "",
        step:1
    };
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    };
    handleSubmit = (emoji) => {
        const name = this.state.paletteName;
        const newPalette = {
            paletteName: name,
            id: name.toLowerCase().replace(/ /g, "-"),
            emoji:emoji.native,
        }
        this.setState({
            step:0
        })
        this.props.submit(newPalette);
    }
    goNextStep = () => {
        this.setState({
            step:2
        })
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            return this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        });
    }
    render() {
        const { close } = this.props;
        const { step, paletteName } = this.state;
        return (
            <div>
                <Dialog 
                    open={step === 2}
                    onClose={close}
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
                    <Picker onSelect={this.handleSubmit} />
                </Dialog>
                <Dialog
                    open={step === 1}
                    onClose={close}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                    <ValidatorForm onSubmit={this.goNextStep}>
                        <DialogContent>
                            <DialogContentText>
                                Give a name for your new palette. Make sure it's unique!
                        </DialogContentText>
                            <TextValidator
                                label="Palette Name"
                                value={paletteName}
                                onChange={this.handleChange}
                                validators={['required', 'isPaletteNameUnique']}
                                fullWidth
                                errorMessages={[
                                    'this field is required',
                                    'Name already used'
                                ]}
                                name="paletteName"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="secondary" onClick={close}>Cancel</Button>
                            <Button variant="contained" color="primary" type="submit">Save</Button>
                        </DialogActions>
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}

export default PaletteMetaForm;
