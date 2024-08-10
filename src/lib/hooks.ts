import { useDispatch, useSelector, useStore } from "react-redux";
import { AppDispatch, AppStore, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useDispatch.withTypes<RootState>();
export const useAppStore = useDispatch.withTypes<AppStore>();
