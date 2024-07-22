import { useEffect, useState } from "react";

export default function useFetch(url, initialData) {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        const abortController = new AbortController();

        async function fetchData() {
            try {
                const response = await fetch(url, { signal: abortController.signal });
                const result = await response.json();
                setData(result);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted')
                } else {
                    // handle other errors
                    console.error("Fetch error: ", error);
                }
            }
        }

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url]);

    return data;
}