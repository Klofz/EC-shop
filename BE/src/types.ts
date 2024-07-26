export interface Merch {
  id: string;
  title: string;
  description: string;
  price: string;
  tags_array: FilterTag[];
  img_url: string;
  merch_url: string;
}

export type FilterTag = string;

export interface FilterObject {
  name: string;
  value: FilterTag;
}
