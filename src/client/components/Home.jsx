import React,{Component} from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Area } from './Area';

class HomeComponent extends Component{
    constructor(props) {
        super(props);
    }
 
    render(){
        return (
            <div className="container">
                <div className = "conatinerrow">
                    <DndProvider backend={HTML5Backend}>
                        <Area />
                    </DndProvider>
                </div>
            </div>
        )
    }
}

export default HomeComponent