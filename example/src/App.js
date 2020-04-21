import React from 'react';
import { CounterProvider } from "./StateManagement/Context";
import AppComponent from "./AppComponent";

function App(){
  return (
    <CounterProvider>
      <AppComponent />
    </CounterProvider>
  )
}

export default App;



