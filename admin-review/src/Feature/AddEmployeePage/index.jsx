import React from 'react';
import { Container } from 'react-bootstrap';
import AddEmployee from '../../Layout/AddEmployee';
import RequestApi from '../../Utils/RequestApi';

function AddEmployeePage() {
    return (
        <Container>
            <AddEmployee />
        </Container>
    )
}

export default AddEmployeePage