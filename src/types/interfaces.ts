import { Priority } from './types';

export interface Item {
  body: string;
  date: {
    created: string
  };
  id: number;
  index: number;
  priority: number
}

export interface List {
  title: string;
  items: Item[];
}