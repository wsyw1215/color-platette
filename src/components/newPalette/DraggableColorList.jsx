import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableBox from './DraggableBox.jsx';

const DraggableColorList = SortableContainer(({colors, remove}) => {
    return (
        <div style={{height: "100%"}}>
            {
                colors.map((m, i) => (
                    <DraggableBox 
                        index={i}
                        color={m.color} 
                        name={m.name} 
                        key={m.color} 
                        delete={remove}
                    />
                ))
            }
        </div>
    );
})

export default DraggableColorList;
