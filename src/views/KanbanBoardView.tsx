import React from 'react';
import IconButton from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';

import './KanbanBoardView.css';



const KanbanBoardView: React.FC = (props) => {
    return (
        <div className="KanbanBoardView-content">
            <table className="KanbanBoardView-board">
                <thead>
                    <tr>
                        <th className="KanbanBoardView-header-cell-add-sticky">
                            <IconButton style={{margin:0, padding:0}}>
                                <AddBoxIcon className="" />
                            </IconButton>
                        </th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    )
}


export default KanbanBoardView;