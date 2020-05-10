import React from "react";
import IconButton from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddBoxIcon from "@material-ui/icons/AddBox";
import clsx from "clsx";

import "./KanbanBoardView.css";

type StickyProps = {
    taskStatus: string,
    teamOrStory: string,
    taskDescription: string
}

const useStyles = makeStyles((theme) => ({
  root: {},
  smallIcon: {
    width: "20px",
    height: "20px",
  },
}));



const Sticky: React.FC<StickyProps> = (props) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    function handleOnDragStart(ev: React.DragEvent) {
        ev.dataTransfer.setData('elId', (ev.target as any).id);
    }
    
    return (
        <a
            id={'1'}
            className = "KanbanBoardView-sticky-link"
            draggable
            onDragStart = {handleOnDragStart}>
                <div 
                    className = {'KanbanBoardView-sticky-note'}>
                        <div className="KanbanBoardView-sticky-description">
                           {props.taskDescription}
                        </div>
                    </div>
            </a>

    )
}

const Stickys:  React.FC = () => {

    function handleOnDragOver(ev : React.DragEvent) {
        ev.preventDefault();
    }

    function handleOnDrop(ev: React.DragEvent) {
        
        ev.preventDefault();
    }

    return (
        <div className= {'KanbanBoardView-sticky-wrap'}
        onDragOver = {handleOnDragOver}
        onDrop = {handleOnDrop}>
            <Sticky
                key = {1}
                teamOrStory = "1"
                taskStatus = "Todo"
                taskDescription = "Defect-121 - URL unable to load correct state"
            />
            <Sticky
                key = {1}
                teamOrStory = "1"
                taskStatus = "Todo"
                taskDescription = "Defect-122 - Dropdown not populating correct values"
            />
            <Sticky
                key = {1}
                teamOrStory = "1"
                taskStatus = "Todo"
                taskDescription = "Defect-123 - Event is not getting triggered"
            />
        </div>
    )
}

const KanbanBoardView: React.FC = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className="KanbanBoardView-content">
      <Typography variant="h6" align="center" style={{ cursor: "pointer" }}>
        {"Welcome Board"}
      </Typography>
      <table className="KanbanBoardView-board">
        <thead>
          <tr>
            <th className="KanbanBoardView-header-cell-add-sticky">
              <IconButton style={{ margin: 0, padding: 0 }}>
                <AddBoxIcon className={clsx(classes.smallIcon)} />
              </IconButton>
            </th>
            <th
              key={1}
              className={
                "KanbanBoardView-header-cell-task-statuses"
              }
            >
              {"Backlog"}
            </th>
            <th
              key={2}
              className={
                "KanbanBoardView-header-cell-task-statuses " +
                ("taskStatus.className" || "")
              }
            >
              {"Todo"}
            </th>
            <th
              key={3}
              className={
                "KanbanBoardView-header-cell-task-statuses " +
                ("taskStatus.className" || "")
              }
            >
              {"InProgress"}
            </th>
            <th
              key={4}
              className={
                "KanbanBoardView-header-cell-task-statuses " +
                ("taskStatus.className" || "")
              }
            >
              {"Done"}
            </th>
          </tr>
        </thead>
        <tbody>
        <tr key={11}>
            <th className={
                'KanbanBoardView-header-cell-team-or-stories ' +
                ("teamOrStory.className" || '')}>
                {"Team 1"}
            </th>
            <td key={21}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
                
            </td>
            <td key={22}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
                <Stickys />
            </td>
            <td key={23}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
                
            </td>
            <td key={24}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
              
            </td>
        </tr>
        <tr key={12}>
            <th className={
                'KanbanBoardView-header-cell-team-or-stories ' +
                ("teamOrStory.className" || '')}>
                {"Team 2"}
            </th>
            <td key={25}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
              
            </td>
            <td key={26}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
               
            </td>
            <td key={27}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
               
            </td>
            <td key={28}
                className={
                    ("teamOrStory.className" || '') + ' ' +
                    ("taskStatus.className" || '')}>
               
            </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default KanbanBoardView;
