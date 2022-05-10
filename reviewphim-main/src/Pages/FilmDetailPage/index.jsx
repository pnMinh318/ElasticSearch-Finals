import React, { useEffect, useState } from "react";
import FilmDetail from "../../Layouts/FilmDetail";
import Home from "../../Layouts/Home";
import axios from "axios";
import { Container } from "react-bootstrap";
import callApi from "../../api/callApi";
function FilmDetailPage(props) {

  const [filmList, setFilmList] = useState([]);
  const getFilmList = async () => {
    const res = await callApi('blogs', 'GET')
    console.log(res.data.documents)
    setFilmList(res.data.documents)
  }

  useEffect(() => {
    getFilmList()
  }, []);

  return (
    <Container>
      <Home />
      {filmList.length > 0 && <FilmDetail filmList={filmList[0]} />}
    </Container>
  );
}

export default FilmDetailPage;
