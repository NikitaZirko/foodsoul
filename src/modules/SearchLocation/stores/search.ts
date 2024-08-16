import {ref, computed} from 'vue';
import type { Ref } from 'vue'
import {defineStore, skipHydrate} from 'pinia';
import {useSearch} from '@/services/api';
import {debounce} from '@/utils/debounce';

interface DataRequest{
    isFetching: Ref<boolean>,
    error: Ref<any>,
    data: Ref<unknown>
}

export const useSearchStore = defineStore('search', () => {

	const result = ref<DataRequest>({
        isFetching: ref(false),
		error: ref(null),
		data: ref(null)
    });

    const sendRequest = debounce(async (e: Event): Promise<void> => {
        const {isFetching, error, data} = await useSearch((e.target as HTMLInputElement).value);
        result.value.isFetching = isFetching.value;
        result.value.error = error.value;
        result.value.data = computed(() => typeof data.value === 'string' ? JSON.parse(data.value) : data);
    }, 300);

	return {
        sendRequest,
        result: skipHydrate(result),
    };
});
