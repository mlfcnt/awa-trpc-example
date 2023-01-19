import { useQuery } from "@tanstack/react-query";
import { trpc } from "./utils/trpc";

const baseUrl = "http://localhost:8080/api";

export const useAllMtvs = () =>
  useQuery(["getAllMtvs"], async () => {
    const res = await fetch(`${baseUrl}/getAll`);
    return res.json();
  });

export const useMTVById = (mtvId: string) =>
  useQuery(["getMTV", mtvId], async () => {
    const res = await fetch(`${baseUrl}/getById/${mtvId}`);
    return res.json();
  });

// ctrl + click sur .getAll (ou .mtv) pour etre redirigé vers le server 👇
export const useAllMtvsWithTRPC = () => trpc.mtv.getAll.useQuery();
export const useMTVByIdWithTRPC = (mtvId: number) =>
  trpc.mtv.getById.useQuery({
    mtvId,
    // mtvId: '1' 👉 Type 'string' is not assignable to type 'number'
    // id: 2 👉 'id' does not exist in type '{ mtvId: number; }
  });
