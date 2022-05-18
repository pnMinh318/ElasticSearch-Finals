import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ListEmployee from "../../Layout/ListEmployee";
import { deleteBlog, getBlogsList } from "../../Utils/blogsAPI";
import RequestApi from "../../Utils/RequestApi";

function EmployeePage() {
  const [blogList, setblogList] = useState([]);

  const getBlogs = async () => {
    const { data } = await getBlogsList();
    console.log(data);
    setblogList(data.documents);
    //return data; // array
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <ListEmployee blogList={blogList} key={"list"} />
    </div>
  );
}

export default EmployeePage;
