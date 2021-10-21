import React, {useState } from 'react'
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';
import { HtmlComponent } from './HtmlComponent';

export const LayoutCard = ({ id, name , rows, cols, isPreview }) => {
    var cellMatrixDef = [];
    for(var i =0; i<rows;i++){
        cellMatrixDef[i] = [];
        for(var j=0;j<cols;j++){
            cellMatrixDef[i][j] = null;
        }
    }
    const [cellMatrix, setCellMatrix] = useState(cellMatrixDef);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCol, setCurrentCol] = useState(0);
   
    const [{ isDragging }, dragRef] = useDrag({
        type: 'area',
        item: { id, name, rows, cols, isPreview },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    });

    const [{ isOver }, dropRef] = useDrop({
        accept: 'component',
        drop: (item, monitor)=>{
            cellMatrix[currentRow][currentCol] = item;
            
            if(currentCol < cellMatrix[0].length && currentRow < cellMatrix.length){
                setCurrentCol(currentCol+1);
            }else if (currentRow < cellMatrix.length){
                setCurrentRow(currentRow+1);
                setCurrentCol(0);
            }

            setCellMatrix(cellMatrix);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    
    

    return (
        isPreview ? <div class = "preview" ref={dragRef} >
           {name}
        </div>: (
        <div className='area-item' ref={dragRef} ref={dropRef} >
           { 
                (cellMatrix || []).map((row,rowIndex)=>{
                    return (
                            <div class="row" ref={dropRef}>
                                {
                                    (cellMatrix[0] || [] ).map((col,colIndex)=>{
                                        return (
                                            <div class="col" row = {rowIndex} col = {rowIndex} >
                                    { cellMatrix[rowIndex][colIndex] ? <HtmlComponent id= {cellMatrix[rowIndex][colIndex].id} isPreview={false} name= {cellMatrix[rowIndex][colIndex].name} />: null }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    )
                })
           }
            {isDragging && 'Dragging'}
        </div>)
    )
}