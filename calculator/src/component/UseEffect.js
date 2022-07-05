import React, { useState } from "react";

const useEffectHook = () => {
  const [ressourceType, setResourceType] = useState("posts");
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{ressourceType}</h1>
    </>
  );
};

export default useEffectHook;
