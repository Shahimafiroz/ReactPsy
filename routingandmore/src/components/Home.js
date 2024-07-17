import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Shahima Firoz Khan</h1>
      <h1>Home Page</h1>
      <img
        src="https://cdn.hashnode.com/res/hashnode/image/upload/v1686033107937/VlNzBHBNL.png"
        alt="Trees"
        height="200"
      />
      <p>
        A framework is a structured set of tools and conventions that simplifies
        software development by providing a pre-defined structure and ready-made
        components for building applications. Express.js is a framework on top
        of Node.js, simplifying server-side web development with JavaScript.
        Express.js is like the blueprint for building a car on top of the engine
        (Node.js). It provides a structured set of tools and conventions for
        building web applications, simplifying tasks like handling web requests,
        routing, and middleware management. Developers use Express.js to build
        web applications efficiently on the Node.js runtime, just as builders
        follow a blueprint to construct a car on an engine-powered vehicle.
        Express.js was created by TJ Holowaychuk and was first released in 2010.
        It was designed to work as a web application framework on top of
        Node.js, simplifying server-side web development with JavaScript.
      </p>
      <button>
        <Link to="/about">Go To About</Link>
      </button>
    </div>
  );
}

export default Home;
