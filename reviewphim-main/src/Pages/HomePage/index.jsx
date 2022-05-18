import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Home from '../../Layouts/Home';
import Slider from '../../Layouts/Slider';
import TopContent from '../../Layouts/TopContent';
import axios from "axios";
import callApi from '../../api/callApi';

function HomePage(props) {
    const [filmList, setFilmList] = useState([]);
    const [keyWord, setKeyWord] = useState('');

    const getFilmList = async () => {
        const res = await callApi('blogs', 'GET')
        console.log(res.data.documents)
        setFilmList(res.data.documents)
    }

    const getFilmListBySearch = async () => {
        if (keyWord) {
            const res = await callApi(`blogs/search?keyword=${keyWord}`, 'GET')
            console.log(res.data.documents.hits.hits)
            setFilmList(res.data.documents.hits.hits)
        }
    }

    useEffect(() => {
        if (!keyWord) {
            getFilmList();
        }
        else {
            getFilmListBySearch();

        }
    }, [keyWord]);

    const handleSearch = (input) => {
        setKeyWord(input)
        // console.log(input)
    }
    return (
        <Container>
            <Home handleSearch={handleSearch} />
            {/* <Slider /> */}
            <TopContent filmList={filmList} />
        </Container>
    );
}

export default HomePage;