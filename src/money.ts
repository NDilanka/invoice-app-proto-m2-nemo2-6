export type Line = { amount: number };

const CURRENCY_DECIMALS: Record<string, number> = {
  // 0 decimal places
  BYN: 0,
  CLP: 0,
  CRC: 0,
  DJF: 0,
  GNF: 0,
  HUF: 0,
  ISK: 0,
  JPY: 0,
  KMF: 0,
  KRW: 0,
  LAK: 0,
  MGA: 0,
  PYG: 0,
  RWF: 0,
  UGX: 0,
  VND: 0,
  VUV: 0,
  XAF: 0,
  XOF: 0,
  XPF: 0,

  // 3 decimal places
  BHD: 3,
  IQD: 3,
  JOD: 3,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  TND: 3,
};

function getCurrencyDecimals(currency: string): number {
  return CURRENCY_DECIMALS[currency] ?? 2;
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = getCurrencyDecimals(currency);
  return sum.toFixed(decimals);
}