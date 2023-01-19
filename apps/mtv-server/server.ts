import fastify from "fastify";
import cors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { appRouter } from "./routers/_app";
import { allMtvs } from "./fakeData";

const server = fastify({
  maxParamLength: 5000,
});

server.register(cors);
server.register(fastifyTRPCPlugin, {
  prefix: "/trpc",
  trpcOptions: { router: appRouter },
});

// ancien type de routes
server.get("/api/getAll", async (request, reply) => {
  reply.status(200).send(allMtvs);
});

server.get("/api/getById/:id", async (request, reply) => {
  const params: any = request.params;
  const mtvId = params?.id;
  const MTV = allMtvs.find((x) => x.id === Number(mtvId));
  reply.status(200).send(MTV);
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
