"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type InitialStateProps = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

interface ContextProps {
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  isClicked: InitialStateProps;
  setIsClicked: Dispatch<SetStateAction<InitialStateProps>>;
  handleClick: (clicked: string) => void;
}

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext({} as ContextProps);

interface IStateProviderProps {
  children: React.ReactNode;
}

export const StateProvider: React.FC<IStateProviderProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
