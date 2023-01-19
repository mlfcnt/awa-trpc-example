import {
  useAllMtvs,
  useAllMtvsWithTRPC,
  useMTVById,
  useMTVByIdWithTRPC,
} from "../api";

export const Mtvs = () => {
  const { data: allMTVs } = useAllMtvs();
  const { data: mtvById } = useMTVById("1");
  const { data: allMTVsWithTRPC } = useAllMtvsWithTRPC();
  const { data: mtvByIdWithTRPC } = useMTVByIdWithTRPC(1);

  console.log(mtvById);

  return (
    <div>
      <h2>All mtvs (vanilla)</h2>
      {(allMTVs || []).map((mtv: any /* non typé */) => (
        <p key={mtv.id}>{mtv.name}</p>
      ))}
      <h2>All mtvs (trpc)</h2>
      {(allMTVsWithTRPC || []).map((mtv) => (
        <p key={mtv.id}>{mtv.name}</p>
      ))}
      <h2>MTV by id (vanilla)</h2>
      <p>{mtvById?.name}</p> {/* non typé donc app crash si pas le ? */}
      <h2>MTV by id (tRPC)</h2>
      <p>{mtvByIdWithTRPC?.name}</p> {/* typé donc erreur ts si pas le ? */}
    </div>
  );
};
