import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { SortableElement } from 'react-sortable-hoc';
import style from '../../styles/DraggableBoxStyle';

const DraggableBox = SortableElement(props => {
    const { classes, color, name } = props;
    function handleDelete(){
        props.delete(props.name);
    }
    return (
        <div className={classes.root} style={{ backgroundColor: color }}>
            <div className={classes.boxContent}>
                <span>
                    {name}
                </span>
                <DeleteForeverIcon className={classes.deleteIcon} onClick={handleDelete}/>
            </div>
        </div>
    )
})

export default withStyles(style)(DraggableBox);