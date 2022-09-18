import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";
import { Auth } from "aws-amplify";
import React, { useState, useEffect } from "react";

function Home({ playlists }) {
  const [user, setUser] = useState({ attributes: { name: "" } });
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  return (
    <div>
      <Head>
        <title>Playlist Curator</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
      </Head>
      <h1 className="text-center">
        Hello {user.attributes.name}👋! <br></br>I am Milo, your Playlist
        Curator.
      </h1>
      <br></br>
      <div className="d-flex justify-content-center">
        <div className="card w-25">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/23/09/58/birds-2672101_960_720.jpg"
            className="card-Image-top"
            alt="..."
          ></img>
          <div className="card-body">
            <p className="card-text">
              In <Link href="/playlists">here</Link>, you have a variety of
              playlists to pick from, based on your preference!<br></br>
              Be merry and sing along 🙂
            </p>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="card w-25">
          <img
            src="https://cdn.pixabay.com/photo/2015/01/29/11/36/mobile-616012_960_720.jpg"
            className="card-img-top"
            width="100%" height="100%" layout="responsive" objectFit="contain"
          ></img>
          <div className="card-body">
            <p className="card-text">
              To customize, choose from the{" "}
              <Link href="/songs">listed songs</Link> to make your own playlist!
            </p>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp;
        <div className="card w-25">
          <img
            src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg"
            className="card-img-top"
            width="100%" height="100%" layout="responsive" objectFit="contain"
          ></img>
          <div className="card-body">
            <p className="card-text">
              To create, something fresh from scratch, create an empty{" "}
              <Link href="/playlists/create">playlist</Link>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
