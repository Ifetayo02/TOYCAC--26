export const HOUSES = ["Abubakr", "Alli", "Umar", "Uthman"] as const;

export const formatHouseNumber = (house: string, count: number) =>
  `${house} ${String(count).padStart(3, "0")}`;
