import React                  from 'react';
import { connect }            from 'react-redux';
import { withRouter,
         RouteChildrenProps } from 'react-router';
import Drawer                 from '@material-ui/core/Drawer';
import Divider                from '@material-ui/core/Divider';
import TableChartIcon         from '@material-ui/icons/TableChart';
import List                   from '@material-ui/core/List';
import ListItem               from '@material-ui/core/ListItem';
import ListItemIcon           from '@material-ui/core/ListItemIcon';
import ListItemText           from '@material-ui/core/ListItemText';
import { makeStyles }         from '@material-ui/core/styles';
import useMediaQuery          from '@material-ui/core/useMediaQuery';
import { KanbanBoardState }   from '../types';
import { mapDispatchToProps,
         mapStateToProps,
         KanbanBoardActions } from '../dispatchers/KanbanBoardDispatcher';



type AppDrawerProps = KanbanBoardState & KanbanBoardActions & RouteChildrenProps<{}>;


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(6) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(6) + 1,
        },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


const AppDrawer: React.FC<AppDrawerProps> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [textInputOpen, setTextInputOpen] = React.useState({
        open: false,
        title: '',
        message: '',
        fieldLabel: '',
        value: '',
        validator: (value: string) => value.trim().length <= 0
    });
    const matchesPrint = useMediaQuery('print');



    function handleChangeView(viewName: string, id: string) {
        if (id === props.activeBoardId) {
            props.history.push(`/${viewName}/${id}`);
        }
    }

    //let currentView = getCurrentView(props.history);
    let currentView = 'kanban';

    return (
        <>
            {!matchesPrint ?
                <Drawer>
                    <Divider />
                    <List>
                        {/* settings */}
                        <ListItem button
                                selected={currentView === 'kanban' || currentView === ''}
                                onClick={ev => handleChangeView('kanban', props.activeBoardId)}>
                            <ListItemIcon><TableChartIcon /></ListItemIcon>
                            {open ? <ListItemText primary="Kanban" /> : <></>}
                        </ListItem>
                    </List>
                </Drawer> :
                <></>
            }
        </>
    );
}
export default (withRouter(connect(mapStateToProps, mapDispatchToProps)(AppDrawer) as any) as any) as React.FC;
