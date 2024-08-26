export enum ProductType {
    Prebuilt = 'prebuilt',
    Custom = 'custom',
}

export interface Product {
    id: string
    image: string
    type: ProductType
    name: string
    os: string
    cpu: string
    gpu: string
    storage: string
    memory: string
    listPrice: number
    retailPrice: number
    deliveryDate: string
    installmentPeriod: number
}