import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-kqnztc2883imuiqu.us.auth0.com"
    clientId="hsoWvTP6krHedktIQCEdemXR7E3L8501"
    authorizationParams={{
      redirectUri: window.location.origin,
    }}
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);

serviceWorker.unregister();
