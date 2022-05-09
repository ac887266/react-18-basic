import axios from "axios";
import { useState } from "react";

function FirstComponent() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const update = debounce(function (e) {
    console.log(e.target.value);
    setName(e.target.value);
    getData(e.target.value);
  }, 1000);

  const getData = (value) => {
    axios.get(`https://api.github.com/users/${value}`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setData(res.data);
      }
    });
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          e.persist();
          update(e);
        }}
      />
      {data && (
        <>
          <div style={{ padding: 10 }}>
            <img
              src={data.avatar_url}
              alt=""
              style={{ height: "10%", width: "10%" }}
            />
          </div>
        </>
      )}

      {data ? (data.name ? data.name : "" + " Node id = " + data.node_id) : ""}
      <div>Bio: {data ? (data.bio ? data.bio : "") : ""}</div>
    </div>
  );
}

export default FirstComponent;
