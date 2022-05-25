import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import callApi from "../api/callApi";

function LoginModal() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState({});

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    let x = localStorage.getItem("userId");
    let y = localStorage.getItem("fullname");
    setUserLogin({ user: x, fullname: y });
  }, []);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleLogin = async (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const res = await callApi("users/login", "POST", {
      username: username,
      password: password,
    });
    if (res.data?.user) {
      const user = res.data.user;
      localStorage.setItem("userId", user.id.toString());
      localStorage.setItem("fullname", user.fullname.toString());
      setAlertMessage({ variant: "success", message: res.data.message });
    } else {
      setAlertMessage({ variant: "danger", message: res.data.message });
    }
    setShowAlert(true);
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };
  const handleLogout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("fullname");
    setUserLogin({});
  };
  return !userLogin.fullname ? (
    <>
      <Button
        variant="primary"
        onClick={handleShowModal}
      >
        Login
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                ref={usernameRef}
                type="text"
                placeholder="Enter your username"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Username</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="Enter your password"
                autoFocus
              />
            </Form.Group>
          </Form>
          {showAlert && (
            <Alert variant={alertMessage.variant}>{alertMessage.message}</Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleLogin(e)}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  ) : (
    <>
      <div>{userLogin?.fullname}</div>
      <a style={{ cursor: "pointer" }} onClick={() => handleLogout()}>
        Logout
      </a>
    </>
  );
}

export default LoginModal;
