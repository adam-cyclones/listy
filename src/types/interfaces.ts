export type Priority =
  'life changing' |
  'important' |
  'meh';

export interface Item {
  body: string;
  date: string;
  id: number;
  index: number;
  priority: Priority
}

export interface List {
  title: string;
  items: Item[];
}