import type { NextRequest } from "next/server";
import { getTopTracks } from "../../../lib/lastfm";
import { isValidPeriod } from "../../../lib/utils";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period");
  const limit = searchParams.get("limit");

  if (
    !isValidPeriod(period) ||
    (limit && isNaN(Number(limit))) ||
    (limit && Number(limit) < 1)
  ) {
    return new Response("Invalid URL", {
      status: 400,
    });
  }

  const topTracks = !limit
    ? await getTopTracks(period)
    : await getTopTracks(period, Number(limit));

  return new Response(JSON.stringify(topTracks), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}