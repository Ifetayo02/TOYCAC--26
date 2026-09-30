export const HOUSES = ["Abubakr", "Alli", "Umar", "Uthman"] as const;

export const formatHouseNumber = (house: string, count: number) =>
  `${house} ${String(count).padStart(3, "0")}`;

// Given the sorted-or-unsorted list of numbers currently active in a house,
// returns the smallest positive integer not already in use — this is what
// lets a freed-up number (e.g. "002") get reused immediately, even if it
// wasn't the most recently assigned one.
export const smallestAvailable = (active: number[]): number => {
  const used = new Set(active);
  let n = 1;
  while (used.has(n)) n++;
  return n;
};