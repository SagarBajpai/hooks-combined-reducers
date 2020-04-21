import React, { useEffect, useContext } from "react";
import { StateContext, DispatchContext } from "./StateManagement/Context";

function AppComponent() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  useEffect(() => {
    dispatch({ type: "TABLE_CHECK_BOXES", value: "yo yo" });
  }, []);
  return <div>Hello There!</div>;
}

export default AppComponent;
