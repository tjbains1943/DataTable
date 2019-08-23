import records from "../../utils/transformData";

// Constants
const TOGGLE_STATS = "landingPage/TOGGLE_STATS";
const UPDATE_RECORDS = "landingPage/UPDATE_RECORDS";
const UPDATE_SHOW_SNACKBAR = "landingPage/UPDATE_SHOW_SNACKBAR";
const UPDATE_FILTERS = "landingPage/UPDATE_FILTERS";
const UPDATE_FILTER_RECORDS = "landingPage/UPDATE_FILTER_RECORDS";

// Action Creators
export const showStats = showStats => ({
  type: TOGGLE_STATS,
  showStats,
});

export const updateRecordValues = newRecords => ({
  type: UPDATE_RECORDS,
  newRecords,
});

export const updateFilteredRecords = newRecords => ({
  type: UPDATE_FILTER_RECORDS,
  newRecords,
});

export const updateShowSnackbar = showSnackBar => ({
  type: UPDATE_SHOW_SNACKBAR,
  showSnackBar,
});
export const updateFilters = newFilters => ({
  type: UPDATE_FILTERS,
  newFilters,
});

const getBudget = records => {
  let budget = 0;
  for (let x = 0; x < records.length; x++) {
    if (!isNaN(records[x].budget)) {
      budget += Number(records[x].budget);
    }
  }
  return budget.toFixed(2);
};

// Initial State
const initialState = {
  records,
  showStats: false,
  searchFilters: {},
  showSnackBar: false,
  initialRecords: records,
  totalBudget: getBudget(records),
};

// Reducer
export default function dataTable(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER_RECORDS:
      return {
        ...state,
        records: action.newRecords,
        totalBudget: getBudget(action.newRecords),
      };
    case UPDATE_SHOW_SNACKBAR:
      return {
        ...state,
        showSnackBar: action.showSnackBar,
      };
    case TOGGLE_STATS:
      return {
        ...state,
        showStats: action.showStats,
      };

    case UPDATE_RECORDS:
      return {
        ...state,
        records: action.newRecords,
        initialRecords: action.newRecords,
        totalBudget: getBudget(action.newRecords),
        showSnackBar: true,
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        searchFilters: action.newFilters,
      };
    default:
      return state;
  }
}
