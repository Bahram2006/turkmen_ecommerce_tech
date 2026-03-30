import { products } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function ProductsPage() {
  return <ProductGrid products={products} />;
}