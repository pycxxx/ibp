import { getProducts } from '@/libs/api'
import ProductsSliderClient from './client'

export interface ProductsSliderProps {
    num?: number
}

export default async function ProductsSlider({ num = 6 }: ProductsSliderProps) {
    const products = await getProducts(num)

    return <ProductsSliderClient products={products} />
}