const p = new Map();
p.set(1, "Life Changing");
p.set(2, "Important");
p.set(3, "Meh");

export function getPriorityName(level: 1 | 2 | 3) {
  return p.get(level);
}
