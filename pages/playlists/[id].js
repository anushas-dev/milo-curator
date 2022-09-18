import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { getPlaylist, listPlaylists } from "../../src/graphql/queries";

export default function ViewPlaylists({ playlist }) {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h3>Playlist Not Found</h3>
          &nbsp; &nbsp;
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center">
          <div className="card w-25">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/24/17/13/mugs-459324_960_720.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <p className="card-text d-flex justify-content-center">
                <Link href="/">
                  <button className="btn btn-dark btn-sm">Return Home</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h2 className="d-flex justify-content-center">Playlist Details</h2>
      </div>
      <br />
      <br></br>
      <div className="d-flex justify-content-center">
        <div className="card w-25">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/12/08/headphones-2591890_960_720.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <div className="card-text">
              <ul key={playlist}>
                <li>Playlist Id: {playlist.id}</li>
                <li>Playlist name: {playlist.name}</li>
              </ul>
            </div>
            <div>
              <ul>
                {" "}
                <strong>Songs:</strong>
                {playlist.songs.items.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await API.graphql(graphqlOperation(listPlaylists))
  const playlistIds = response.data.listPlaylists.items.map((playlist) => {
    return { params: { id: playlist.id } };
  });
  return { paths: playlistIds, fallback: false };
}


export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await API.graphql(graphqlOperation(getPlaylist, {id: id}))
  const data = response.data.getPlaylist;
  return {
    props: {
      playlist: data,
    },
    revalidate: 30,
  };
}