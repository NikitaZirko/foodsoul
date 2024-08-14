type Callback = (e: Event) => void;

const debounce = (cb: Callback, ms = 0) => {
	let timeoutId: ReturnType<typeof setTimeout>;

	return (e: Event) => {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => cb(e), ms);
	};
};

export {debounce};