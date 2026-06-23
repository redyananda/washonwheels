import { useCallback, useEffect, useState } from "react";
import { getRandomUser } from "./service";
import type { CrewMember } from "./types";

export function useRandomUser(count = 20) {
  const [crew, setCrew] = useState<CrewMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(() => {
    return getRandomUser(count)
      .then(setCrew)
      .catch((err) =>
        setError(err instanceof Error ? err.message : "Terjadi kesalahan."),
      )
      .finally(() => setLoading(false));
  }, [count]);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    load();
  }, [load]);

  useEffect(() => {
    load();
  }, [load]);

  return { crew, loading, error, refetch };
}