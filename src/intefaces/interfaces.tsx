export interface CurrencyMask {
  (value: string): string;
}

export interface Iprops {
  currencyMask: CurrencyMask;
  months: string[];
}
