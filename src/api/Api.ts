//Implementing the Api endpoints from the docs

const TVSHOWANDCASTDATA = "https://api.tvmaze.com/shows/143?embed=cast";
const TVSHOWEPISODES = " https://api.tvmaze.com/shows/143/episodes?specials=1";

export async function getTvShowAndCastData() {
  const res = await fetch(TVSHOWANDCASTDATA);
  return res.json;
}

export async function getTvShowEpisodes() {
  const res = await fetch(TVSHOWEPISODES);	
  return res.json;
}
