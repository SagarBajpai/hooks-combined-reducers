const autoSuggestState = {
  options: [],
  selected: {}
};

const autoSuggestReducer = (state, action) => {
  switch (action.type) {
    case "AUTO_SUGGESTION_OPTIONS":
      return {
        ...state,
        options: action.value
      };
    case "AUTO_SUGGESTION_SELECTED_OPTION":
      return {
        ...state,
        selected: action.value
      };
    default:
      return state;
  }
};
export { autoSuggestState, autoSuggestReducer };
