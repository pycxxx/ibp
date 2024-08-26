'use client'

import ProductCard from '@/components/ProductCard';
import { Product } from '@/libs/api';
import { useDeviceType } from '@/libs/responsive';
import { PropsWithChildren, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

function Button({ children, onClick }: PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <button onClick={onClick} className="w-11 bg-white aspect-square flex items-center justify-center shadow-btn">{children}</button>

  )
}


export default function ProductsSliderClient({ products }: { products: Array<Product> }) {
  const { isMobile } = useDeviceType()
  const [swiper, setSwiper] = useState<SwiperClass>()

  // button 太簡單，沒必要用 useCallback
  const prev = () => swiper?.slidePrev()
  const next = () => swiper?.slideNext()

  return (
    <div className="flex flex-col gap-5">
      <div className="gap-3 justify-end relative z-10 hidden md:flex">
        <Button onClick={prev}>prev</Button>
        <Button onClick={next}>next</Button>
      </div>
      <Swiper
        onSwiper={setSwiper}
        className="product-slider w-full"
        spaceBetween={16}
        slidesPerView={isMobile ? 1 : 4}
      >
        {products.map((product, i) => (
          <SwiperSlide key={product.id}>
            <ProductCard data={product} priority={i < 4} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}