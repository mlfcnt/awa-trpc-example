import { allMtvs } from "../fakeData";
import { publicProcedure, router } from "../trpc";
import z from "zod";

export const mtvRouter = router({
  getAll: publicProcedure.query(() => allMtvs),
  getById: publicProcedure
    .input(
      z.object({
        mtvId: z.number(),
      })
    )
    .query(({ input }) => allMtvs.find((x) => x.id === input.mtvId)),
});
