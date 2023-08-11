import { CommonService } from "./services";
import { ACTION_TYPES } from "./actionTypes";
import { COMPONENT_STATUS } from "../../common";

// const getNavigation = (params) => {
//   return (dispatch) => {
//     dispatch({
//       type: ACTION_TYPES.GET_NAVIGATION,
//       payload: { status: COMPONENT_STATUS.LOADING },
//     });
//     CommonService.apiGetNavigation(params)
//       .then((res) => {
//         if (res && res.data) {
//           dispatch({
//             type: ACTION_TYPES.GET_NAVIGATION,
//             payload: {
//               status: COMPONENT_STATUS.SUCCESS,
//               data: res.data,
//               total: 20,
//             },
//           });
//         } else {
//           dispatch({
//             type: ACTION_TYPES.GET_NAVIGATION,
//             payload: { status: COMPONENT_STATUS.ERROR },
//           });
//         }
//       })
//       .catch((error) => {
//         dispatch({
//           type: ACTION_TYPES.GET_NAVIGATION,
//           payload: { status: COMPONENT_STATUS.ERROR },
//         });
//       });
//   };
// };

export const CommonActions = {
};
