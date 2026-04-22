export const PALETTE = {
  paper: "#E8ECEF",
  surface: "#DDE1E5",
  inkPrimary: "#2C3E50",
  inkSecondary: "#3D5166",
  inkMuted: "#6B7E8E",
  blueprint: "#3498DB",
  blueprintSoft: "#D6EAFA",
  statusDot: "#E74C3C",
} as const;

export type PaletteKey = keyof typeof PALETTE;
