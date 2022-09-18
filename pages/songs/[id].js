import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { getSong, listSongs } from "../../src/graphql/queries";

export default function ViewPlaylists({ song }) {
  const router = useRouter();
  const { id } = router.query;
  if (router.isFallback) {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <h3>Song Not Found</h3>
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
        <h2 className="d-flex justify-content-center">Song Details</h2>
      </div>
      <br />
      <br></br>
      <div className="d-flex justify-content-center">
        <div className="card w-25">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/11/01/23/painted-guitar-1087209_960_720.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <div className="card-text">
              <ul key={song}>
                <li>Song Id: {song.id}</li>
                <li>Song name: {song.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await API.graphql(graphqlOperation(listSongs))
  const songIds = response.data.listSongs.items.map((song) => {
    return { params: { id: song.id } };
  });
  return { paths: songIds, fallback: false };
}


export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await API.graphql(graphqlOperation(getSong, {id: id}))
  const data = response.data.getSong;
  return {
    props: {
      song: data,
    },
    revalidate: 30,
  };
}