import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { useState } from "react";
import { listPlaylists } from "../src/graphql/queries";


export async function getStaticProps() {
  const res = await API.graphql(graphqlOperation(listPlaylists)) ;
  const data = res.data.listPlaylists.items;
  return { props: { playlists: data }, revalidate: 30 };
}

export default function ShowPlaylists({playlists}) {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <h2>Playlists</h2>
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <table className="table table-hover w-75">
          <thead>
            <tr>
              <th scope="col">Playlist Id</th>
              <th scope="col">Playlist Name</th>
            </tr>
          </thead>
          <tbody>
            {playlists.map((item, index) => (
              <tr scope="row" key={index}>
                <td>
                  <Link href={`/playlists/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
