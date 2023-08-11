import ReducerRegistry from "../../base/redux/ReducerRegistry";
import { ACTION_TYPES } from "./actionTypes";
import { COMPONENT_STATUS } from "../../common";
const initState = {
  // listNavigation: {
  //   status: "",
  //   data: [],
  //   total: 0,
  // },
};

ReducerRegistry.register("common", (state = initState, action) => {
  switch (action.type) {
    // case ACTION_TYPES.GET_NAVIGATION: {
    //   return {
    //     ...state,
    //     listNavigation: {
    //       ...state.listNavigation,
    //       ...action.payload,
    //     },
    //   };
    // }
    default:
      return state;
  }
});
