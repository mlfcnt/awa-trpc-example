import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { httpBatchLink } from "@trpc/client";
import "./App.css";
import { trpc } from "./utils/trpc";
import { Mtvs } from "./components/mtvs";

function App() {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:8080/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>AWA</h1>
          <Mtvs />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
