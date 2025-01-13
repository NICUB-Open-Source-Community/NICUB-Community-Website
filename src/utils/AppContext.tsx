import {navItems} from "../components/navigation/navbar/navItems";
import {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useContext,
} from "react";
interface State {
  navItems: typeof navItems;
}
interface Action {
  type: string;
  payload?: string;
}
type Dispatch = (action: Action) => void;
interface AppProviderProps {
  children: ReactNode;
}
const initialState = {navItems:  navItems};
const AppStateContext = createContext<State | undefined>(undefined);
const AppDispathContext = createContext<Dispatch | undefined>(undefined);
const AppReducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "SET_ACTIVE_NAV":
      return { ...state, activeNavItem: "hala"};
    default:
      return state;
  }
};
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    AppReducer,
    initialState
  );
  return (
    <AppStateContext.Provider value={state}>
      <AppDispathContext.Provider value={dispatch}>
        {children}
      </AppDispathContext.Provider>
    </AppStateContext.Provider>
  );  
};
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context)
    throw new Error("useAppState must be used within a AppProvider");
  return context;
};
export const useAppDispatch = () => {
  const context = useContext(AppDispathContext);
  if (!context)
    throw new Error("useSignInDispatch must be used within a DashboardProvider");
  return context;
};
