import { useEffect } from "react";
import { useState } from "react";

const Blog = () => {

  const [data, setData] = useState([]);

  const [pageIndex, setPageIndex] = useState(1);

  console.log("Data", data);

  const perProductData = 3;

  // Pagination

  let lastindex = pageIndex * perProductData;
  let firstindex = lastindex - perProductData;

  let productDataList = data.slice(firstindex, lastindex);

  console.log(productDataList);

  async function API() {
    let res = await fetch("https://api.escuelajs.co/api/v1/products");
    let result = await res.json();
    setData(result);
  }


  useEffect(() => {
    API();
  }, [])

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-around">

        {productDataList.map((item) => {
          return (
            <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-500 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg h-32 mx-auto"
                  src={item.images}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-400 dark:text-white line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
      <div className="flex justify-center">
        <button
          className="btn"
          onClick={() => setPageIndex((prev) => prev - 1)}
          disabled={firstindex <= 0}
        >
          Prev
        </button>
        <span className="btn">{pageIndex}</span>
        <button
          className="btn"
          onClick={() => setPageIndex((next) => next + 1)}
          disabled={lastindex >= data.length}
        >
          Next  
        </button>
      </div>
    </div>
  );
};


export default Blog