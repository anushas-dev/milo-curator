import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import { createSong } from "../../src/graphql/mutations";

export default function CreateNewPlaylist() {
  const [song_name, setSongName] = useState("");
  const [playlist_id, setPlaylistId] = useState("");
  const [new_song, setCreatedSong] = useState("")
  async function postPlaylist() {
    const response = await API.graphql({
      query: createSong,
      variables: {
        input: {
          id: (Math.floor((Math.random() * 100) + 1)).toString(),
          title: song_name.toString(),
          playlistSongsId: playlist_id.toString()
        },
      },
    });
    setCreatedSong((await response).data.createSong.title)
    console.log(response)
  }

  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center">Add Song to Existing Playlist</h2>
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <form className="form-control w-75 justify-content-center">
          <div>
            <div className="form-check">
              <div className="input-group mb-3">
                <span className="input-group-text" id="song-id">
                  🎶 Playlist Id
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="song-id"
                  aria-describedby="song-id"
                  value={playlist_id}
                  onChange={(e) => setPlaylistId(e.target.value)}
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <span className="input-group-text" id="song-name">
                  🎼 Song Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="song-name"
                  aria-describedby="song-name"
                  value={song_name}
                  onChange={(e) => setSongName(e.target.value)}
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="btn btn-sm btn-info" onClick={postPlaylist}>
                  Submit
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
