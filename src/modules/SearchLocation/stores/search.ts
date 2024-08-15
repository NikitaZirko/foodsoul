import {ref, reactive} from 'vue';
import {defineStore} from 'pinia';
import {useSearch} from '@/services/api';
import {debounce} from '@/utils/debounce';

export const useSearchStore = defineStore('search', () => {
	//const count = ref(0)

	const sendRequest = debounce(async (e: Event): Promise<void> => {
		const {isFetching, error, data} = await useSearch((e.target as HTMLInputElement).value);
	}, 300);

	return {
        sendRequest
    };
});
