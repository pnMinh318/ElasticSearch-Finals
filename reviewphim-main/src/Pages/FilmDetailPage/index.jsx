import React, { useEffect, useState } from "react";
import FilmDetail from "../../Layouts/FilmDetail";
import Home from "../../Layouts/Home";
import axios from "axios";
import { Container } from "react-bootstrap";
import callApi from "../../api/callApi";
import { useParams } from "react-router-dom";
function FilmDetailPage(props) {

  const [filmList, setFilmList] = useState([]);
  const { id } = useParams();

  const getFilmList = async () => {
    const res = await callApi(`blogs/${id}`, 'GET')
    console.log(res.data.documents)
    setFilmList(res.data.documents)
  }
  console.log(id)

  useEffect(() => {
    getFilmList()
  }, [id]);

  return (
    <Container>
      <Home />
      {filmList.length > 0 && <FilmDetail filmList={filmList[0]} />}
    </Container>
  );
}

export default FilmDetailPage;
