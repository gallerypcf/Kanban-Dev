import { createStore,
    combineReducers, 
    applyMiddleware,
    compose,
    Store,
    AnyAction }             from 'redux';
import { createHashHistory }     from 'history';
import { connectRouter,
    routerMiddleware }      from 'connected-react-router';
import { AppState }              from './KanbanBoard/types';
import { getKanbanBoardReducer } from './KanbanBoard/states/KanbanBoardState';
import { getAppEventsReducer }   from './KanbanBoard/states/AppEventsState';



export const history = createHashHistory({
hashType: 'slash',
});


let store: Store<AppState, AnyAction> = null as any;


export function getConstructedAppStore() {
return store;
}


export default async function getAppStore() {
if (!store) {
   store = createStore(
       combineReducers<AppState>({
           router: connectRouter(history),
           kanbanBoard: await getKanbanBoardReducer(),
           appEvents: await getAppEventsReducer(),
       }),
       compose(
           applyMiddleware(
               routerMiddleware(history),
           ),
       ),
   );
}
return store;
}
