import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/ColorPickerFormStyle'

export class ColorPickerForm extends Component {
    state = {
        currentColor: "teal",
        colorName: "",
    };
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            return this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
        });
        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            return this.props.colors.every(({ color }) => color !== this.state.currentColor)
        });
    }

    handleAddColor = () => {
        //  新增新的顏色
        const newColor = {
            name: this.state.colorName,
            color: this.state.currentColor
        }
        this.props.addNewColor(newColor);
        this.setState({colorName:""});
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    pickColor = (newColor) => {
        this.setState({ currentColor: newColor.hex });
    }
    
    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, colorName } = this.state;
        return (
            <div>
                {/* 顏色挑選器 */}
                <ChromePicker color={currentColor} onChangeComplete={this.pickColor} className={classes.picker}/>
                {/* 驗證表單：顏色名稱 */}
                <ValidatorForm onSubmit={this.handleAddColor} instantValidate={false}>
                    <TextValidator
                        type="text"
                        value={colorName}
                        onChange={this.handleChange}
                        name="colorName"
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        className={classes.textField}
                        placeholder="Color Name"
                        errorMessages={[
                            'this field is required',
                            'Color name must be unique',
                            'Color already used'
                        ]}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >{paletteIsFull ? 'Palette Full' : 'Add Color'}</Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);

