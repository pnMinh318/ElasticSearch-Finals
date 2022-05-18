import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";
import { deleteBlog, getBlogsList } from "../../Utils/blogsAPI";
import EmployeeItem from "../EmployeeItem";

function ListEmployee({ blogList = [] }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogList);
  }, [blogList]);

  const handleDeleteBlog = async (id) => {
    try {
      const res = await deleteBlog(id);
      console.log(res);
      if (res.status === 200) {
        alert("DELETE SUCCESSFUL");
      } else {
        alert("DELETE FAILED");
      }
      //   getListEmploy();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div
        className="title"
        style={{
          fontSize: "30px",
          marginTop: "50px",
          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        Danh Sách Bài Viết
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Thời lượng</th>
            <th>Đạo diễn</th>
            <th>Quốc gia</th>
            <th>Diễn viên</th>
            <th>Thể loại</th>
            <th>Khởi chiếu</th>
            <th>Điều khiển</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog, index) => {
            let movieDetail = { ...blog._source.movie };

            return (
              <tr key={blog._id}>
                <th>{movieDetail.name}</th>
                <th>{movieDetail.duration}</th>
                <th>{blog._source.author}</th>
                <th>{movieDetail.country}</th>
                <th>{movieDetail.actor}</th>
                <th>{movieDetail.genre}</th>
                <th>{movieDetail.premiere}</th>
                <td style={{ display: "flex" }}>
                  <Link to={`/blog/${blog._id}`}>
                    <Button
                      className="mr-10"
                      variant="primary"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Update
                    </Button>
                  </Link>
                  <Button
                    className="ml-10"
                    variant="danger"
                    onClick={(e) => {
                      handleDeleteBlog(blog._id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default ListEmployee;
