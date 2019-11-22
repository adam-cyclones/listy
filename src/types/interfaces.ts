import { PriorityN } from "./types";

export interface Item {
  body: string;
  id: number;
  priority: PriorityN;
}

export interface List {
  id: number;
  title: string;
  items: Item[];
}
