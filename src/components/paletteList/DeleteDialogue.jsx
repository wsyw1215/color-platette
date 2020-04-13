import React, { Component } from 'react';
import { Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";

export class DeleteDialogue extends Component {
    handleDelete = () => {
        this.props.deletePalette(this.props.deleteInfo.id);
        this.props.closeDeleteDialog();
    }
    render() {
        const {closeDeleteDialog, deleteInfo} = this.props;
        return (
            <Dialog
                open={true}
                onClose={closeDeleteDialog}
            >
                <DialogTitle>Delete {deleteInfo.name}?</DialogTitle>
                <List>
                    <ListItem button onClick={this.handleDelete}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete" />
                    </ListItem>
                    <ListItem button onClick={closeDeleteDialog}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel" />
                    </ListItem>
                </List>
            </Dialog>
        );
    }
}

export default DeleteDialogue;
