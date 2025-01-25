import React from "react";
import { useLoaderData , Link } from "react-router-dom";

const Career = () => {
    
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1>This is Career Page</h1>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li className="bg-amber-400">
                <Link className="underline" to="/">{item.title}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export const CareerLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

export default Career;