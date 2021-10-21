import React, {useState, Fragment} from 'react'
import { useDrag } from 'react-dnd';
import {DetailsComponent} from './Details';

export const HtmlComponent = ({ id, name, isPreview }) => {

    const [style, setStyle] = useState({});
    const [showProps, setShowProps] = useState(false);

    const [{ isDragging }, dragRef1] = useDrag({
        type: 'component',
        item: { id, name, isPreview },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });
    
    const onClick = ()=>{
       if(!isPreview){
         setShowProps(true);
       }
    }

    const onSetStyle = (style)=>{
        setStyle(style);
    }

    return (
        <Fragment>
            <div class = "component" ref={dragRef1} onClick={onClick} style={style}>
                {name}
                {isDragging && 'Dragging'}
            </div>
            { 
              showProps && <DetailsComponent onClose= {()=>{
                    setShowProps(false);
                }} setStyle={onSetStyle}/>
            }
        </Fragment>
    )
}