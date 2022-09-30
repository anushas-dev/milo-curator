
import React, { useState } from "react";
import { API, graphqlOperation } from "aws-amplify"
import { createPlaylist } from "../../src/graphql/mutations"


export default function CreateNewPlaylist() {
  const [playlist_name, setPlaylistName] = useState("");
  const [playlist_id, setPlaylistId] = useState("");
  const [new_playlist, setplaylistCreated] = useState("");

  const postPlaylist = async () => {
    const response = API.graphql(graphqlOperation(createPlaylist, { input: { id: playlist_id, name: playlist_name } }));
    setplaylistCreated((await response).data.createPlaylist.name)
    window.alert(new_playlist + " is created!")
  }

  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center">Create Playlist</h2>
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
                  🎼 Playlist Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="song-name"
                  aria-describedby="song-name"
                  value={playlist_name}
                  onChange={(e) => setPlaylistName(e.target.value)}
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
