import { useEffect, useState } from "react";
import { getRandomUser } from "./service";
import type { CrewMember } from "./types";

export function useRandomUser(count = 20) {
  const [crew, setCrew] = useState<CrewMember[]>([]);

  useEffect(() => {
    getRandomUser(count).then(setCrew);
  }, [count]);

  return { crew };
}