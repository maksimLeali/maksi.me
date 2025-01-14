export type ColorKeys =
  | "primary"
  | "primary-shade"
  | "primary-light"
  | "primary-dark"
  | "secondary"
  | "secondary-shade"
  | "secondary-light"
  | "secondary-dark"
  | "tertiary"
  | "tertiary-shade"
  | "tertiary-light"
  | "tertiary-dark"
  | "black"
  | "black-light"
  | "black-dark"
  | "white-light"
  | "white"
  | "white-dark"
  | "gray"
  | "gray-light"
  | "gray-dark"
  | "success"
  | "success-dark"
  | "success-light"
  | "danger"
  | "danger-dark"
  | "danger-light"
  | "glass-dark"
  | "glass"
  | "glass-light";

export const colors: Record<ColorKeys, string> = {
  "primary": "var(--primary)",
  "primary-shade": "var(--primary-shade)",
  "primary-light": "var(--primary-light)",
  "primary-dark": "var(--primary-dark)",
  "secondary": "var(--secondary)",
  "secondary-shade": "var(--secondary-shade)",
  "secondary-light": "var(--secondary-light)",
  "secondary-dark": "var(--secondary-dark)",
  "tertiary": "var(--tertiary)",
  "tertiary-shade": "var(--tertiary-shade)",
  "tertiary-light": "var(--tertiary-light)",
  "tertiary-dark": "var(--tertiary-dark)",
  "black": "var(--black)",
  "black-light": "var(--black-light)",
  "black-dark": "var(--black-dark)",
  "white-light": "var(--white-light)",
  "white": "var(--white)",
  "white-dark": "var(--white-dark)",
  "gray": "var(--gray)",
  "gray-light": "var(--gray-light)",
  "gray-dark": "var(--gray-dark)",
  "success": "var(--success)",
  "success-dark": "var(--success-dark)",
  "success-light": "var(--success-light)",
  "danger": "var(--danger)",
  "danger-dark": "var(--danger-dark)",
  "danger-light": "var(--danger-light)",
  "glass-dark": "var(--glass-dark)",
  "glass": "var(--glass)",
  "glass-light": "var(--glass-light)"
};

export function isColorKey(key: string): key is ColorKeys {
  return Object.keys(colors).includes(key);
}
