/**
 * Make all properties in T required
 */
export type Required<T> = {
  [P in keyof T]-?: T[P]
};

/**
 * Make all properties in T optional
 */
export type Partial<T> = {
  [P in keyof T]?: T[P];
};

// Adding the readonly Mapped Type Modifier

export type Readonly<T> = {
  +readonly [P in keyof T]: T[P];
};

// Removing the readonly Mapped Type Modifier

export type Mutable<T> = {
  -readonly[P in keyof T]: T[P];
};