"use client";

import { getData } from "@/utils";
import { useQuery } from "react-query";

export default function ClientPage() {
  const query = useQuery({
    queryFn: getData,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>React Query</h1>
      {query.isError && <p>Error</p>}
      {query.isLoading && <p>Loading...</p>}
      {query.isSuccess && <p>{JSON.stringify(query.data)}</p>}
    </main>
  );
}
