'use client'

import ProductCard from '@/components/ProductCard';
import { Product } from '@/libs/api';
import { useDeviceType } from '@/libs/responsive';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductsSliderClient({ products }: { products: Array<Product> }) {
    const { isMobile } = useDeviceType()

    return (
        <Swiper
    className="product-slider"
      spaceBetween={16}
      slidesPerView={isMobile ? 1 : 4}
    >
        {products.map((product, i) => (
            <SwiperSlide key={product.id}>
                <ProductCard data={product} priority={i < 4} />
                </SwiperSlide>
        ))}
    </Swiper>
    )
}