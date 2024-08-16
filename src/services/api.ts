import { createFetch } from "@vueuse/core";

const BASE_URL: string = 'https://nominatim.openstreetmap.org/';

const useHttp = createFetch({
	baseUrl: BASE_URL,
});

const useSearch = (query: string) => useHttp(`search?format=jsonv2&q=${query}`, {
    onFetchError(ctx) {   
        ctx.error = new Error('Error fetch')
        return ctx
    },
});

export {useSearch}
