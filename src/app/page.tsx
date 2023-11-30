import { getData, getUserData } from "@/utils";

export default async function Home() {
  const data = await getData();
  const userData = await getUserData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(data)}
      <br />
      {JSON.stringify(userData)}
    </main>
  );
}
