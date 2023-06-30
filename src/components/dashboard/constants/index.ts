export enum ProductKey {
    logo = 'logo',
    name = 'name',
    description = 'description',
    date_release = 'date_release',
    date_revision = 'date_revision'
}

const COLUMN_TO_TITLE: { [Key in ProductKey]: string } = {
    [ProductKey.logo]: 'Logo',
    [ProductKey.name]: 'Nombre del producto',
    [ProductKey.description]: 'Descripción',
    [ProductKey.date_release]: 'Fecha de liberación',
    [ProductKey.date_revision]: 'Fecha de reestructuración',
}

export const DASHBOARD_COLUMNS = [
    { title: COLUMN_TO_TITLE[ProductKey.logo], key: ProductKey.logo },
    { title: COLUMN_TO_TITLE[ProductKey.name], key: ProductKey.name },
    { title: COLUMN_TO_TITLE[ProductKey.description], key: ProductKey.description },
    { title: COLUMN_TO_TITLE[ProductKey.date_release], key: ProductKey.date_release },
    { title: COLUMN_TO_TITLE[ProductKey.date_revision], key: ProductKey.date_revision },
];