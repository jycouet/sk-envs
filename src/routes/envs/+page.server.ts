import { env } from "$env/dynamic/private";
import { HELLO } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  console.log("Envs?", env);
  return {
    HELLO,
  };
}) satisfies PageServerLoad;
