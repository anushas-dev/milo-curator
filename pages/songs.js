import Link from "next/link";
import "@aws-amplify/ui-react/styles.css";
import { API, graphqlOperation } from "aws-amplify";
import { listSongs } from "../src/graphql/queries";

export async function getStaticProps() {
  const res = await API.graphql(graphqlOperation(listSongs));
  const data = res.data.listSongs.items;
  return { props: { songs: data }, revalidate: 30 };
}

export default function ShowSongs({ songs }) {
  return (
    <div>
      <br></br>
      &nbsp; &nbsp;&nbsp;
      <Link href="/songs/create">
        <button className="btn btn-sm btn-dark justify-content-end">
          Add New song
        </button>
      </Link>
      <div className="d-flex justify-content-center">
        <h2>Songs</h2>
      </div>
      <br></br>
      <div className="d-flex justify-content-center">
        <table className="table table-hover w-75">
          <thead>
            <tr>
              <th scope="col">Song Id</th>
              <th scope="col">Song Name</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((item, index) => (
              <tr scope="row" key={index}>
                <td>
                  <Link href={`/songs/${item.id}`}>{item.id}</Link>
                </td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
