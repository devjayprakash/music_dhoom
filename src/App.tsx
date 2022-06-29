import * as React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NowPlaying from "./pages/NowPlaying";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Switch>
          <Route component={NowPlaying} path={"/"} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
