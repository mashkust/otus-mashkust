interface IValuet {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export type ObjValuet = Record<string, IValuet>;

export interface IValuets {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: ObjValuet;
}

export interface IGenerateCard {
  valuets: IValuets;
  value: string;
}

export interface IGenerateTag {
  element: HTMLDivElement | HTMLSelectElement;
  text: string;
  key?: string;
}

export interface IGenerateOption {
  select: HTMLSelectElement;
  valute: ObjValuet;
}
