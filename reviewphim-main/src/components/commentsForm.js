import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import callApi from "../api/callApi";
function CommentsForm({
  handlePostCmt,
  handleEditCmt,
  currentUserId,
  selectedCommentContent,
}) {
  const [textCmt, setTextCmt] = useState(
    selectedCommentContent ? selectedCommentContent._source.content : ""
  );

  const handleSubmitForm = () => {
    if (selectedCommentContent) {
      handleEditCmt(textCmt, selectedCommentContent._id);
    } else {
      handlePostCmt(textCmt);
      setTextCmt("");
    }
  };

  return (
    <>
      <Form className="mt-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{ fontSize: "24px", fontWeight: "bold" }}>
            {selectedCommentContent ? "Chỉnh sửa" : "Bình luận"}
          </Form.Label>
          <Form.Control
            value={textCmt}
            as="textarea"
            rows={3}
            onChange={(e) => setTextCmt(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        disabled={textCmt === "" ? true : false}
        variant="primary"
        onClick={() => handleSubmitForm(textCmt)}
        style={{ marginBottom: "20px" }}
      >
        {selectedCommentContent ? "Chỉnh sửa" : "Bình luận"}
      </Button>
    </>
  );
}

export default CommentsForm;
