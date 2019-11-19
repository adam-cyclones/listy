import { Priority } from '../types/types';

const p = new Map<number, Priority>();
p.set(1, 'meh');
p.set(2, 'important');
p.set(3, 'life changing');

export function getPriorityName(level: 1 | 2 | 3) {
  return p.get(level)
}