// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../../mtv-server/routers/_app";
export const trpc = createTRPCReact<AppRouter>();
