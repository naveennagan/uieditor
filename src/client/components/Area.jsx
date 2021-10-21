import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { LayoutCard } from './LayoutCard';
import {HtmlComponent} from './HtmlComponent';
import {DetailsComponent} from './Details';

const AREAS = [
    { id: 1, name: '3x2', rows: 3, cols: 2 },
    { id: 2, name: '2x2', rows: 2, cols: 2 },
    { id: 3, name: '3x4', rows: 3, cols: 4 },
    { id: 4, name: '1x3', rows: 1, cols: 3 },
    { id: 5, name: '4x5', rows: 4, cols: 5 },
]

const components = [
    {id: 10, name: "button"},
    {id: 20, name: "text"},
    {id: 30, name: "combo"},
    {id: 40, name: "para"},
]

export const Area = () => {
    
    const [area, setArea] = useState()

    const [{ isOver }, dropRef] = useDrop({
        accept: 'area',
        drop: (item)=>{
            console.log(item);
            setArea(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <React.Fragment>
            <div className='areas'>
                <p> Layouts </p>
                {AREAS.map(area => <LayoutCard draggable id={area.id} isPreview = {true} name={area.name} rows={area.rows} cols={area.cols} />)}
            </div>
            <div className='components'>
                <p> Components </p>
                {components.map(component => <HtmlComponent draggable id={component.id} isPreview = {true} name={component.name} />)}
            </div>
            <div className='area' ref={dropRef}>
                {!isOver && area && <LayoutCard id={area.id} isPreview = {false} name={area.name} rows={area.rows} cols={area.cols} /> }
                {isOver && <div>Drop Here!</div>}
            </div>
        </React.Fragment>
    )
}