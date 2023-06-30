const {
    VITE_API_DOMAIN,
} = import.meta.env

const trim = (value: string) => {
    return (value || '').trim();
};

export const API_DOMAIN = trim(VITE_API_DOMAIN);
