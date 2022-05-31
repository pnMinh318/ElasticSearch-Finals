import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CommentsForm from "./commentsForm";
function Comment({ comment, handleDeleteCmt, currentUserId, handleEditCmt }) {
  const [actionMode, setActionMode] = useState({});
  const onDelete = (commentId) => {
    if (currentUserId !== comment._source.userId)
      alert("Bạn không thể xóa comment người khác");
    else {
      handleDeleteCmt(commentId);
    }
  };

  return (
    <>
      {!actionMode.type ? (
        <Row>
          <Col className="mb-4">
            <div className="content-cmt d-flex flex-column">
              <div className="title-name">
                {comment._source.fullname}
                <span style={{ fontSize: "15px", float: "right" }}>
                  {
                    new Date(comment._source.createdAt)
                      .toISOString()
                      .split("T")[0]
                  }
                </span>
              </div>
              <div className="content-text d-flex justify-content-between ">
                <textarea
                  value={comment._source.content}
                  disabled
                  style={{
                    border: "none",
                    width: "80%",
                    maxHeight: "35px",
                    minHeight: "35px",
                  }}
                />
                <div>
                  {currentUserId === comment._source.userId && (
                    <>
                      <span
                        onClick={() => {
                          setActionMode({ type: "edit", payload: comment });
                        }}
                        style={{
                          fontSize: "15px",
                          float: "right",
                          marginRight: "20px",
                          cursor: "pointer",
                        }}
                      >
                        Chỉnh sửa
                      </span>
                      <span
                        onClick={() => onDelete(comment._id)}
                        style={{
                          fontSize: "15px",
                          float: "right",
                          marginRight: "20px",
                          cursor: "pointer",
                        }}
                      >
                        Xóa
                      </span>
                    </>
                  )}
                  {actionMode?.type === "edit" && (
                    <>
                      <CommentsForm currentUserId={currentUserId} />
                      <span onClick={() => setActionMode({})}> Hủy</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <>
          <CommentsForm
            currentUserId={currentUserId}
            selectedCommentContent={actionMode?.payload}
            handleEditCmt={handleEditCmt}
          ></CommentsForm>
          <Button
            variant="secondary"
            onClick={() => {
              setActionMode({});
            }}
            style={{ marginBottom: "20px" }}
          >
            Hủy
          </Button>
        </>
      )}
    </>
  );
}

export default Comment;
