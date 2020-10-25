import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/show" component={StreamShow} />
        <Route exact path="/streams/edit" component={StreamEdit} />
        <Route exact path="/streams/delete" component={StreamDelete} />
      </BrowserRouter>
    </div>
  );
};

export default App;
