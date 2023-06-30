export interface IProductsStore {
    loading: boolean,
    saving: boolean,
    error?: string | null,
    products: IProduct[] | null,
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: string;
    date_revision: string;
}