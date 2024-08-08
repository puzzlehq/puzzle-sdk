import { useState } from 'react';
export function useAsyncAction() {
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    return { data, error, loading, setData, setError, setLoading };
}
