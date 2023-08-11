import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/configStore";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = (state) => useSelector(state, shallowEqual);
