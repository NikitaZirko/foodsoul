import { createFetch } from "@vueuse/core";

const BASE_URL: string = 'https://nominatim.openstreetmap.org/';

const useHttp = createFetch({
	baseUrl: BASE_URL,
	fetchOptions: {
        mode: 'no-cors'
	},
});

const useSearch = (query: string) => useHttp(`search?format=jsonv2&q=${query}`);

export {useSearch}
