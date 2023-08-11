import ReducerRegistry from "../../base/redux/ReducerRegistry";
import { ACTION_TYPES } from "./actionTypes";

const initState = {
  metaList: {
    status: "",
    data: {},
  },
  metaDetails: {
    statusDetails: "",
    dataDetails: {},
  },
  metaSearch: {
    statusSearch: "",
    dataSearch: {},
    keyword: "",
  },
  metaCategory: {
    category: "",
  },
};

ReducerRegistry.register("meta", (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_META_LIST: {
      return {
        ...state,
        metaList: {
          ...state.metaList,
          ...action.payload,
        },
      };
    }
    case ACTION_TYPES.GET_META_DETAILS: {
      return {
        ...state,
        metaDetails: {
          ...state.metaDetails,
          ...action.payload,
        },
      };
    }
    case ACTION_TYPES.SEARCH_META: {
      return {
        ...state,
        metaSearch: {
          ...state.metaSearch,
          ...action.payload,
        },
      };
    }
    case ACTION_TYPES.SEARCH_KEYWORD: {
      return {
        ...state,
        metaSearch: {
          ...state.metaSearch,
          ...action.payload,
        },
      };
    }
    case ACTION_TYPES.META_CATEGORY: {
      return {
        ...state,
        metaCategory: {
          ...state.metaCategory,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
});
