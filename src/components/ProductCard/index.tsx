import { Product, ProductType } from '@/libs/api'
import Image from 'next/image'
// 這邊用 SVG 比較好，但需要另外設定，所以先用 PNG
import affirmIcon from './black_logo-transparent_bg.png'
import { format } from 'date-fns/format'

export interface ProductCardProps {
    data: Product
    priority?: boolean
}

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value)
}

// 正常的情況會用 t('productType', { context: product.type }) 來取得對應的字串
// 這邊是在沒有 i18n 的情況下，直接寫死
const productTypeText = (type: ProductType) => {
    return type === ProductType.Prebuilt ? 'Prebuilt PC' : 'Custom PC'
}

export default function ProductCard({ data, priority }: ProductCardProps) {
    return (
        <div className="shadow-card rounded-card bg-white">
            <div className="px-5 py-3 md:px-6 md:py-4">
                <span className="border border-ibp-dark-grey text-ibp-dark-grey text-[8px] md:text-xs font-bold rounded-full py-1 px-2">{productTypeText(data.type)}</span>
                <Image className="mx-auto mt-2 w-[172px] md:w-[230px]" alt={`Image of ${data.name}`} src={data.image} width={230} height={230} priority={priority} />
                <span className="block mt-4 mb-5 md:mb-6 text-base md:text-2xl bold">{data.name}</span>
                <div className="flex flex-col gap-2 text-xs">
                    <span>{data.os}</span>
                    <span>{data.cpu}</span>
                    <span>{data.gpu}</span>
                    <span>{data.storage}</span>
                    <span>{data.memory}</span>
                </div>
            </div>
            <div className="px-5 pt-3 pb-6 md:px-6 md:pt-4 md:pb-8 bg-ibp-grey">
                <span className="uppercase px-2 py-1 rounded-full bg-ibp-red text-white text-[11px] md:text-sm">save {formatCurrency(data.listPrice - data.retailPrice)}</span>
                <div className="mt-2">
                    <span className="text-xl md:text-3xl bold">{formatCurrency(data.listPrice)}</span>
                    <span className="line-through text-ibp-dark-grey text-xs md:text-lg inline-block ml-2">{formatCurrency(data.retailPrice)}</span>
                    <p className="text-xs md:text-xl">Starting at <span className="text-ibp-blue">{formatCurrency((data.retailPrice / data.installmentPeriod))}/mo</span> with <Image className="inline-block -mt-[6px] h-3 md:h-4 w-auto" alt="Affirm Logo" height={16} src={affirmIcon} /></p>
                </div>
                <div className="flex mt-4">
                    <div className="flex flex-col flex-1">
                        <span className="text-xs md:text-2xl bold">Free Shipping</span>
                        <span className="text-xs md:text-sm">{format(data.deliveryDate, 'EEEE, LLL d')}</span>
                    </div>
                    <button className="text-sm md:text-base border border-ibp-red rounded-full text-ibp-red px-5 py-3">{data.type === ProductType.Prebuilt ? 'Buy Now' : 'Customize'}</button>
                </div>
            </div>
        </div>
    )
}