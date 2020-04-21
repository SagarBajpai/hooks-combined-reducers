import React, { useReducer } from "react";
import hooksCombinedReducers from 'hooks-combined-reducers';
import { tableState, tableReducer } from "../StateManagement/Reducers/Table";
import {
  autoSuggestState,
  autoSuggestReducer,
} from "../StateManagement/Reducers/AutoSuggest";
import { routeState, routeReducer } from "../StateManagement/Reducers/Route";
import {
  generalState,
  generalReducer,
} from "../StateManagement/Reducers/General";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function CounterProvider(props) {
  const [state, dispatch] = hooksCombinedReducers({
    general: useReducer(generalReducer, generalState),
    route: useReducer(routeReducer, routeState),
    table: useReducer(tableReducer, tableState),
    autoSuggest: useReducer(autoSuggestReducer, autoSuggestState),
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
export { CounterProvider };
