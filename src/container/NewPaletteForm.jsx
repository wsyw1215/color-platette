import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import  arrayMove from 'array-move';
import DraggableColorList from '../components/newPalette/DraggableColorList.jsx';
import PaletteFormNav from '../components/newPalette/PaletteFormNav.jsx';
import styles from '../styles/NewPaletteFormStyle'
import PaletteDrawer from '../components/newPalette/PaletteDrawer.jsx'
import seedColors from '../seedColors';

class NewPaletteForm extends Component {

    static defaultProps = {
        maxColorNum: 20
    }
    state = {
        open: false,
        colors: seedColors[0].colors,

    };
    // SiderBar 控制
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    // 新增一個顏色
    addNewColor = (newColor) => {
        this.setState({
            colors: [...this.state.colors, newColor],
            colorName: ""
        });
    }
    // 清空調色盤內所有顏色
    clearColor = () => {
        // 清除當前所有顏色
        this.setState({
            colors: []
        })
    }
    // 加入一個隨機的顏色
    addRandomColor = () => {
        // 從現有的調色盤內隨機挑選一個顏色
        const allColors = this.props.palettes.map(palette => palette.colors).flat();
        let rand;
        let randomColor;
        let isDuplicate = true;
        
        while(isDuplicate) {
            rand = Math.floor(Math.random() * allColors.length);
            randomColor = allColors[rand];
            isDuplicate = this.state.colors.some(color => color.name === randomColor.name)
        }
        this.setState({
            colors: [...this.state.colors, allColors[rand]]
        });
    }
    // 處理儲存調色盤
    handleSubmit = (palette) => {
        palette.colors = this.state.colors
        this.props.newPalette(palette);
        this.props.history.push("/");
    }
    // 處理刪除單一顏色
    handleDelete = (deleteName) => {
        this.setState(st => {
            return {
                colors: st.colors.filter(({ name }) => name !== deleteName)
            }
        })
    }
    // 處理拖拉排序結束
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ colors }) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };

    render() {
        const { classes, maxColorNum, palettes } = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColorNum;
        return (
            <div className={classes.root}>
                {/* NavBar */}
                <PaletteFormNav
                    open={open}
                    palettes={palettes}
                    handleDrawerOpen={this.handleDrawerOpen}
                    submit={this.handleSubmit}
                />
                <PaletteDrawer 
                    paletteIsFull={paletteIsFull} 
                    colors={colors} 
                    open={open}
                    close={this.handleDrawerClose}
                    addNewColor={this.addNewColor}
                    clearColor={this.clearColor}
                    addRandomColor={this.addRandomColor}
                />
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
                    <DraggableColorList
                        colors={colors}
                        remove={this.handleDelete}
                        axis='xy'
                        onSortEnd={this.onSortEnd}
                        distance={20}
                    />
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);