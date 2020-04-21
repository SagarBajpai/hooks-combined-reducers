const hooksCombinedReducers = (combinedReducers) => {
  // Here we have are  Global State
  const state = Object.keys(combinedReducers).reduce((acc, key) => {
    return { ...acc, [key]: combinedReducers[key][0] };
  });

  // Here we have are Global Dispatch Function
  const dispatch = (action) => {
    Object.keys(combinedReducers)
      .map((key) => combinedReducers[key][1])
      .forEach((fn) => fn(action));
  };
  return [state, dispatch];
};
export default hooksCombinedReducers;

