import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    const token = "your_api_token";
    try {
      const response = await axios.get(
        `https://cors-proxy-superhero-api.onrender.com/${token}/getByName/${name}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {data && (
        <div>
          <Image url={data.image.url} />
          <Stats stats={data.stats} />
        </div>
      )}
    </div>
  );
};

export default App;
