import { router } from "../trpc";
import { mtvRouter } from "./mtv";

export type AppRouter = typeof appRouter;

export const appRouter = router({
  mtv: mtvRouter, // put procedures under "mtv" namespace
});
