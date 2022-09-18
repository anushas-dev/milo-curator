import { API, graphqlOperation } from "aws-amplify";
import React, { useState} from "react";
import { createSong } from "../../src/graphql/mutations";

export default function CreateNewSong() {
  const [song_name, setSongName] = useState("");
  const [song_id, setSongId] = useState("");
  const songDetails = {
    id: song_id,
    title: song_name,
  };
  async function postSong() {
    const response = await API.graphql(
      graphqlOperation(createSong, { input: songDetails })
    );
    if (response.data.createSong.length > 0) {
      window.alert(song_name + " is created successfully!");
    } else {
      window.alert(song_name + " could not be created!");
    }
  }

  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center">Create Song</h2>
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <form className="form-control w-75 justify-content-center">
          <div>
            <div className="form-check">
              <div className="input-group mb-3">
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
                <span className="input-group-text" id="song-id">
                  🎶 Song Id
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  aria-label="song-id"
                  aria-describedby="song-id"
                  value={song_id}
                  onChange={(e) => setSongId(e.target.value)}
                />
                &nbsp; &nbsp; &nbsp; &nbsp;
                <button className="btn btn-sm btn-info" onClick={postSong}>
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
