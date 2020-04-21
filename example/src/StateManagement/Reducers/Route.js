const routeState = {
  ROLES: ["greatadmin", "mpsadmin", "mpsuser"],
  USER_DETAILS: {},
  ACCESS_DENIED: -1, // status : 1 - Access Granted; 0 - Access Denied; -1 : Default Status
  CURRENT_ROUTE_DETAILS: {
    name: "Dashboard",
    link: "/dashboard",
  },
  headerTitle: "My Price",
};

const routeReducer = (state, action) => {
  switch (action.type) {
    case "USER_DETAILS": {
      return {
        ...state,
        USER_DETAILS: action.value,
      };
    }
    case "ACCESS_DENIED": {
      return {
        ...state,
        ACCESS_DENIED: action.value,
      };
    }
    case "CHANGE_ROUTE":
      return {
        ...state,
        CURRENT_ROUTE_DETAILS: {
          name: action.value.name,
          link: action.value.link,
        },
      };
    case "SET_HEADER_TITLE":
      return {
        ...state,
        headerTitle: action.value,
      };
    default:
      return state;
  }
};
export { routeState, routeReducer };
