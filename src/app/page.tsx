import { Suspense } from 'react';
import ProductsSlider from './_components/ProductsSlider';

export default function Home() {
  return (
    <main className="p-4">
      {/* 如果有要用 streaming 的方式的話，這邊應該用 skeleton 之類的東西 */}
      <div className="hidden md:block">
        <h1 className="font-bold mb-2 text-center text-5xl">Best Seller Gaming PC</h1>
        <h2 className="font-bold text-center text-3xl">Prebuilt & Custom</h2>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <ProductsSlider />
      </Suspense>
    </main>
  );
}
