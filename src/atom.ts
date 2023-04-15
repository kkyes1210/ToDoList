import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  check: boolean; //Todo List에서는 true, Work Done에서는 false
}

interface IToDoState {
  [key: string]: IToDo[];
}

export const toDoState = atom<IToDoState>({
  key: "toDo",
  default: {
    "Todo List": [],
    "Work Done": [],
  },
});
