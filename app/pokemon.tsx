"use client";

import useSWR from "swr";
import { getPokemon } from "./data";

export function Pokemon() {
  const { data } = useSWR("pikachu", getPokemon);

  // As we always provide the Pokemon in the parent
  // component via `fallback`, there's no need to
  // handle the loading state here.
  // To make TypeScript happy, let's add a guard.
  if (!data) throw new Error("Data must be available.");

  return (
    <div>
      <img src={data.image} height={200} alt={data.name} />
      <h2>I'm {data.name}</h2>
    </div>
  );
}
