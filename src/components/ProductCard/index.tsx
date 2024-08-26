import { Product, ProductType } from '@/libs/api'
import Image from 'next/image'
import AffirmIcon from './icon-affirm.svg'
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
    <div className="rounded-card bg-white shadow-card">
      <div className="px-5 py-3 md:px-6 md:py-4">
        <span className="rounded-full border border-ibp-dark-grey px-2 py-1 text-[8px] font-bold text-ibp-dark-grey md:text-xs">{productTypeText(data.type)}</span>
        <Image className="mx-auto mt-2 w-[172px] md:w-[230px]" alt={`Image of ${data.name}`} src={data.image} width={230} height={230} priority={priority} />
        <span className="font-bold mb-5 mt-4 block text-base md:mb-6 md:text-2xl">{data.name}</span>
        <div className="flex flex-col gap-2 text-xs">
          <span>{data.os}</span>
          <span>{data.cpu}</span>
          <span>{data.gpu}</span>
          <span>{data.storage}</span>
          <span>{data.memory}</span>
        </div>
      </div>
      <div className="bg-ibp-grey px-5 pb-6 pt-3 md:px-6 md:pb-8 md:pt-4">
        <span className="rounded-full bg-ibp-red px-2 py-1 text-[11px] uppercase text-white md:text-sm">save {formatCurrency(data.listPrice - data.retailPrice)}</span>
        <div className="mt-2">
          <span className="font-bold text-xl md:text-3xl">{formatCurrency(data.listPrice)}</span>
          <span className="ml-2 inline-block text-xs text-ibp-dark-grey line-through md:text-lg">{formatCurrency(data.retailPrice)}</span>
          <p className="text-xs md:text-xl">Starting at <span className="text-ibp-blue">{formatCurrency((data.retailPrice / data.installmentPeriod))}/mo</span> with <AffirmIcon className="-mt-[6px] inline-block h-7 w-auto md:h-10" alt="Affirm Logo" /></p>
        </div>
        <div className="mt-4 flex">
          <div className="flex flex-1 flex-col">
            <span className="font-bold text-xs md:text-2xl">Free Shipping</span>
            <span className="text-xs md:text-sm">{format(data.deliveryDate, 'EEEE, LLL d')}</span>
          </div>
          <button className="rounded-full border border-ibp-red px-5 py-2 text-sm text-ibp-red md:text-base">{data.type === ProductType.Prebuilt ? 'Buy Now' : 'Customize'}</button>
        </div>
      </div>
    </div>
  )
}