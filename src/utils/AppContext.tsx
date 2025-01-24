import { FaqItems } from "../components/landing-page/faq/faq";
import {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useContext,
} from "react";
interface State {
  openFaqs: boolean[];
}
interface Action {
  type: string;
  payload?: number | string;
}
type Dispatch = (action: Action) => void;
interface AppProviderProps {
  children: ReactNode;
}
const initialState = {openFaqs: FaqItems.map(()=>false)};
const AppStateContext = createContext<State | undefined>(undefined);
const AppDispathContext = createContext<Dispatch | undefined>(undefined);
const AppReducer = (state: State, action: Action) => {
  const { type,payload } = action;
  switch (type) {
    case "TOGGLE_FAQ": {
      const updatedFaqs = [...state.openFaqs]
      updatedFaqs[payload as number] = !updatedFaqs[payload as number];
      return { ...state, openFaqs: updatedFaqs};
    }
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
