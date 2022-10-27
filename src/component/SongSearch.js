import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setlyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      console.log(artistUrl);
      console.log(songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes);
      setBio(artistRes);
      setlyric(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };
  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
