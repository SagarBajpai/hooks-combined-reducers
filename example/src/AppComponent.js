import React, { useEffect, useContext } from "react";
import { StateContext, DispatchContext } from "./StateManagement/Context";

function AppComponent() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  console.log("state : ", state);
  useEffect(() => {
    dispatch({ type: "CHANGE_ACCESS", value: 1 });
  }, []);
  return <div>Hello There!</div>;
}

export default AppComponent;
