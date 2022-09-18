import { Amplify, Auth } from "aws-amplify";
import { Link, withAuthenticator } from "@aws-amplify/ui-react";
import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "../src/aws-exports";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
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
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <nav className="navbar bg-dark justify-content-end">
        {user ? (
          <button
            className="btn btn-sm btn-info right"
            onClick={async () => {
              await Auth.signOut();
              setUser(null);
            }}
          >
            Sign Out
          </button>
        ) : (
          <Link href="/">Sign In</Link>
        )}
        <div>&nbsp;&nbsp;</div>
      </nav>
      <br></br>
      <div className="d-flex justify-content-start">
        &nbsp; &nbsp;{" "}
        <Link href="/">
          <button className="btn btn-sm btn-dark">🏠 Home</button>
        </Link>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

export default withAuthenticator(MyApp, { includeGreetings: true });
