import { Suspense } from 'react';
import ProductsSlider from './_components/ProductsSlider';

export default function Home() {
  return (
    <main className="p-4">
      {/* 如果有要用 streaming 的方式的話，這邊應該用 skeleton 之類的東西 */}
      <Suspense fallback={<div>loading...</div>}>
        <ProductsSlider />
      </Suspense>
    </main>
  );
}
