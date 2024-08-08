//
import { Product } from "@/types";

const categoryFilter = (
  productArr: Product[],
  filterCategories: string[]
): Product[] => {
  if (filterCategories.length === 0) {
    return productArr;
  }

  const filteredProducts = productArr.filter((product) => {
    return product.categories?.some((category) =>
      filterCategories.includes(category.id)
    );
  });

  return filteredProducts;
};

const brandFilter = (productArr: Product[], brands: string[]): Product[] => {
  if (brands.length == 0) {
    return productArr;
  }

  const filteredProducts = productArr.filter((product) =>
    product.brand?.id ? brands.includes(product.brand.id) : false
  );

  return filteredProducts;
};

const filtersUtility = {
  categoryFilter,
  brandFilter,
};

export default filtersUtility;
