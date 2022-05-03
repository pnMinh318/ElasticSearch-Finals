import React, { useEffect, useState } from "react";
import FilmDetail from "../../Layouts/FilmDetail";
import Home from "../../Layouts/Home";
import axios from "axios";
function FilmDetailPage(props) {
  const [filmList, setFilmList] = useState([]);

  const fetchData = async () => {
    // const { data } = await axios.get("/api/blogs/");
    // console.log(data);
    // setFilmList(data.documents);
  };
  useEffect(() => {
    // fetchData();
  }, []);

  useEffect(() => {
    // if (filmList.length > 0) console.log(filmList);
  }, [filmList]);

  return (
    <div>
      <Home />
      <FilmDetail />
    </div>
  );
}

export default FilmDetailPage;
