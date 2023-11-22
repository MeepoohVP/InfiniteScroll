import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
function Card(props) {
  const [descript, setDescript] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const response = await axios.get(
      `https://api.sampleapis.com/codingresources/codingResources`
    );
    setItems([...items, ...response.data]);
    setPage(page + 1);
  };

     
  return (
    <>
      <InfiniteScroll
      style={{ margin: "10px" }}
      pageStart={1}
      loadMore={fetchData}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
      useWindow={false}
      
    ><div className="showcard">
    
      {items.map((item) => (
        <div className="card" key={item.id}>
        <div className="description">{item.description}</div>
        <div className="topics">{item.topics}</div>
        {/* <div>length = {data.length}</div> */}
      </div>
      ))}</div></InfiniteScroll>
    </>
  );
}
export default Card;
