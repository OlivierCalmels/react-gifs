/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  render() {
    const gifs = [
      { id: "26FxypSnWsXS69nTW" },
      { id: "ZYCPezSSUTswFL9QcZ" },
      { id: "ecf05e47q0jl0axc7ynqs3cs3wranziidkpdrojpxkr8uoaf" },
      { id: "9LFBOD8a1Ip2M" },
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected_gif">
            <Gif id="26FxypSnWsXS69nTW" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
