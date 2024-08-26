'use client'

import ProductCard from '@/components/ProductCard';
import { Product } from '@/libs/api';
import { useDeviceType } from '@/libs/responsive';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

function Button({ children, onClick }: PropsWithChildren<{ onClick?: () => void }>) {
  return (
    <button onClick={onClick} className="flex aspect-square w-11 items-center justify-center bg-white shadow-btn">{children}</button>

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
      <div className="relative z-10 hidden justify-end gap-3 md:flex">
        <Button onClick={prev}><FontAwesomeIcon icon={faChevronLeft} /></Button>
        <Button onClick={next}><FontAwesomeIcon icon={faChevronRight} /></Button>
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