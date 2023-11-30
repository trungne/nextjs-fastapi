import { getData } from "@/utils";

export async function GET(request: Request) {
  const data = await getData();
  return Response.json(data);
}
