const initialStates = {
  displayOverlay: { visible: false, data: { name: "", id: null } },
};

const generalState = {
  displayOverlay: { visible: false, data: { name: "", id: null } },
};

const generalReducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATES":
      return initialStates;
    case "DISPLAY_OVERLAY":
      return {
        ...state,
        displayOverlay: {
          visible: action.value.visible,
          data: action.value.data,
        },
      };

    default:
      return state;
  }
};
export { generalState, generalReducer };
