import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Home from '../../Layouts/Home';
import Slider from '../../Layouts/Slider';
import TopContent from '../../Layouts/TopContent';
import axios from "axios";
import callApi from '../../api/callApi';

function HomePage(props) {
    const [filmList, setFilmList] = useState([]);
    const getFilmList = async () => {
        const res = await callApi('blogs', 'GET')
        console.log(res.data.documents)
        setFilmList(res.data.documents)
    }

    const getFilmListBySearch = async () => {
        const res = await callApi(`blogs/search?keyword=${'joker'}`, 'GET')
        console.log(res.data.documents)
        setFilmList(res.data.documents)
    }

    useEffect(() => {
        // getFilmList();
        getFilmListBySearch();
    }, []);
    return (
        <Container>
            <Home />
            <Slider />
            {/* <TopContent filmList={filmList} /> */}
        </Container>
    );
}

export default HomePage;