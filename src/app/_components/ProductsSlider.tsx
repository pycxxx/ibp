import ProductCard from "@/components/ProductCard"
import Slider from "@/components/Slider"
import { getProducts } from "@/libs/api"

export default async function ProductsSlider() {
    const products = await getProducts(6)

    return (
        <Slider>
            {products.map(product => (
                <ProductCard key={product.id} data={product} />
            ))}
        </Slider>
    )
}