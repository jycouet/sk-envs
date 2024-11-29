import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  console.log("Envs?", env);
  return {};
}) satisfies PageServerLoad;
