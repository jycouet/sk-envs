import { env } from "$env/dynamic/private";
import { HELLO, NEW_ENV_IN_UI } from "$env/static/private";
import { PUBLIC_ENV1 } from "$env/static/public";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  console.log("Envs?", env);
  return {
    HELLO,
    PUBLIC_ENV1,
    NEW_ENV_IN_UI,
  };
}) satisfies PageServerLoad;
