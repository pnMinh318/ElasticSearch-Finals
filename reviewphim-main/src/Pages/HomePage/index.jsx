import React from 'react';
import { Container } from 'react-bootstrap';
import Home from '../../Layouts/Home';
import Slider from '../../Layouts/Slider';
import TopContent from '../../Layouts/TopContent';

function HomePage(props) {
    return (
        <Container>
            <Home />
            <Slider />
            <TopContent />
        </Container>
    );
}

export default HomePage;