import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import { createPlaylist } from "../../src/graphql/mutations";

export default function CreateNewPlaylist() {
  const [playlist_name, setPlaylistName] = useState("");
  const [playlist_id, setPlaylistId] = useState("");
  async function postPlaylist() {
    const response = await API.graphql({
      query: createPlaylist,
      variables: {
        input: {
          id: playlist_id.toString(),
          name: playlist_name.toString(),
        },
      },
    });
    console.log(response)
    if (response.data.createPlaylist.id.length > 0) {
      window.alert(playlist_name + " Created Successfully!");
    } else {
      window.alert(playlist_name + " couldn't be created!");
    }
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
