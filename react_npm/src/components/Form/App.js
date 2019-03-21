import React from "react";

import { Provider } from "react-redux";

import Posts from "./Posts";
import Postform from "./Postform";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
};
export default App;
