# hooksCombinedReducers React Hook

[![Github issues](https://img.shields.io/github/issues/SagarBajpai/hooks-combined-reducers)](https://github.com/SagarBajpai/hooks-combined-reducers/issues) 
[![Github forks](https://img.shields.io/github/forks/SagarBajpai/hooks-combined-reducers)](https://github.com/SagarBajpai/hooks-combined-reducers) 
[![Github stars](https://img.shields.io/github/stars/SagarBajpai/hooks-combined-reducers)](https://github.com/SagarBajpai/hooks-combined-reducers/stargazers) 
[![Github license](https://img.shields.io/github/license/SagarBajpai/hooks-combined-reducers)](https://github.com/SagarBajpai/hooks-combined-reducers/blob/master/LICENSE.md) 
[![Twitter](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FSagarBajpai%2Fhooks-combined-reducers)](https://twitter.com/sagarbajpai_)

Its a custom hook to combine all your useReducer hooks in return for one global state container with one dispatch function. You can use it at the top-level component & it will pass a dispatch and state functions down with the help of React's Context API with Provider and Consumer (or useContext).

## Installation

`npm install hooks-combined-reducers`

## Usage

Create a global dispatch function and state object by initializing multiple `useReducer` hooks in `hookCombinedReducers`:

Inside some file named as `Context.js`:
```
import React, { useReducer } from "react";
import hooksCombinedReducers from 'hooks-combined-reducers';
import { tableState, tableReducer } from "../StateManagement/Reducers/Table";

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

function HookProvider(props) {
  const [state, dispatch] = hooksCombinedReducers({
    table: useReducer(tableReducer, tableState),
  });
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {props.children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}
export { HookProvider };
```

Inside root file `App.js` :
```
import React from 'react';
import { CounterProvider } from "./Context";
import AppComponent from "./AppComponent";

function App(){
  return (
    <CounterProvider>
      <AppComponent />
    </CounterProvider>
  )
}

export default App;
```

Inside some component with name `AppComponent.js`:

```
import React, { useEffect, useContext } from "react";
import { StateContext, DispatchContext } from "./Context";

function AppComponent() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: "CHANGE_ACCESS", value: 1 });
  }, []);
  return <div>Hello There!</div>;
}

export default AppComponent;

```

## Contribute

* `git clone https://github.com/SagarBajpai/hooks-combined-reducers.git`
* `cd hooks-combined-reducers`
* `npm install`

## Want to know the developer behind this package? 
[LinkedIn](https://www.linkedin.com/in/sagarbajpai/)
[Facebook](https://www.facebook.com/cameraluvssagar/)
[Twitter](https://twitter.com/sagarbajpai_)
