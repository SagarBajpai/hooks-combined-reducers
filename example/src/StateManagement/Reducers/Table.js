const initialStates = {
  tableBodyDropdown: { id: null, value: "Accepted" },
  tableData: [],
  order: "asc",
  orderBy: "",
  selected: [],
  dense: false,
  selectedRowToEdit: "",
  page: 1,
  rowsPerPage: 10,
  tableCurrentPageNumber: 1,
  tableTotalPages: 1,
  pagination: { totalPages: 1, currentPage: 1 },
};

const tableState = {
  tableBodyDropdown: { id: null, value: "Accepted" },
  tableData: [],
  order: "asc",
  orderBy: "",
  selected: [],
  dense: false,
  selectedRowToEdit: "",
  page: 1,
  rowsPerPage: 10,
  tableCurrentPageNumber: 1,
  tableTotalPages: 1,
  pagination: { totalPages: 1, currentPage: 1 },
};

const tableReducer = (state, action) => {
  switch (action.type) {
    case "RESET_STATES":
      return initialStates;
    case "TABLE_DROPDOWN":
      return {
        ...state,
        tableBodyDropdown: { id: action.id, value: action.value.value },
      };
    case "TABLE_CHECK_BOXES":
      return {
        ...state,
        selected: action.value,
      };
    case "PAGINATION":
      return {
        ...state,
        pagination: {
          totalPages: state.pagination.totalPages,
          currentPage: action.value.currentPage,
        },
      };
    default:
      return state;
  }
};
export { tableState, tableReducer };
