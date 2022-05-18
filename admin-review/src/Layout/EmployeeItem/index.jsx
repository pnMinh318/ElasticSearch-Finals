import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmployeeItem({ item, handleDeleteEmployee }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <tr >
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.emailId}</td>
            <td>
                <Button
                    className="mr-10"
                    variant="primary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={`update/${item.id}`}>
                        Update
                    </Link>
                </Button>
                <Button onClick={handleShow}
                    className="ml-10"
                    variant="danger">
                    Delete
                </Button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this employee?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => handleDeleteEmployee(item.id)}
                    >
                        Delete employee
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    )
}

export default EmployeeItem

