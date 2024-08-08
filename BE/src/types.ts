//

export interface Product {
  id: string;
  name: string;
  units: number;
  price: number;
  categories?: Product_Category_wTyped[];
  variants?: Variant_With_Existence[];
  images: string[];
  brand?: Brand | null;
}

export interface Variant_Category {
  id: string;
  name: string;
}

export interface Variant {
  id: string;
  name: string;
  variantCategory: Variant_Category;
}

export interface Product_Category {
  id: string;
  name: string;
  parentId?: string | null;
}

export interface Brand {
  id: string;
  name: string;
}

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Cumbersome and annoying type specifities:

export interface Variant_With_Existence extends Pick<Variant, "id"> {
  name?: string;
  units: number;
}

export interface Product_Category_wTyped extends Pick<Product_Category, "id"> {
  name?: string;
}
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
// Old Types:
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
