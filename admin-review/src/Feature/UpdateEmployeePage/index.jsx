import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UpdateEmployee from "../../Layout/UpdateEmployee";
import { getBlogDetail } from "../../Utils/blogsAPI";
import RequestApi from "../../Utils/RequestApi";

function UpdateEmployeePage() {
  const [blogDetail, setBlogDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) getBlogByID(id);
  }, [id]);

  const getBlogByID = async (id) => {
    const { data } = await getBlogDetail(id);
    setBlogDetail(data.documents[0]);
    // console.log(data.documents[0])
  };
  const handleUpdateEmployee = async (data) => {

  };




  return (
    <Container>
      {blogDetail &&
        <UpdateEmployee
          id={id}
          blogDetail={blogDetail}
        />
      }
    </Container>
  );
}

export default UpdateEmployeePage;
