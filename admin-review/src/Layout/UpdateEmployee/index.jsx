import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import { Button, Container } from "react-bootstrap";
import InputField from "../InputField";
import { useParams } from "react-router-dom";
import { getBlogDetail, updateBlog } from "../../Utils/blogsAPI";

//truyền từ cái này
// tao log dc cái

function UpdateEmployee({ blogDetail, id }) {
  const source = blogDetail._source;
  const movie = blogDetail._source.movie;
  const rating = blogDetail._source.ratingScale; // duoc r do
  const content = blogDetail._source.content; // duoc r do
  console.log(movie.duration); // duoc r do
  return (
    <Container className="mb-5">
      <div
        style={{
          fontSize: "30px",
          marginTop: "50px",
          marginBottom: "50px",
          fontWeight: "bold",
        }}
      >
        Thêm bài viết {blogDetail._source.author}
      </div>
      <Formik
        initialValues={{
          title: source.title || "",
          image: source.image || "",
          name: movie.name || "",
          duration: movie.duration || "",
          director: movie.director || "",
          actor: movie.actor || "",
          country: movie.country || "",
          genre: movie.genre || "",
          premiere: movie.premiere || "",
          content0: content[0].sectionContent || "",
          content1: content[1].sectionContent || "",
          content2: content[2].sectionContent || "",
          content3: content[3].sectionContent || "",
          ratingIMBD: rating[0].rating || "",
          ratingMastascore: rating[1].rating || "",
          ratingRotensTomato: rating[2].rating || "",
          author: source.author || "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Trường này bắt buộc"),
          image: Yup.string().required("Trường này bắt buộc"),
          name: Yup.string().required("Trường này bắt buộc"),
          duration: Yup.string(),
          director: Yup.string().required("Trường này bắt buộc"),
          actor: Yup.string().required("Trường này bắt buộc"),
          country: Yup.string().required("Trường này bắt buộc"),
          genre: Yup.string().required("Trường này bắt buộc"),
          premiere: Yup.string().required("Trường này bắt buộc"),
          content0: Yup.string().required("Trường này bắt buộc"),
          content1: Yup.string().required("Trường này bắt buộc"),
          content2: Yup.string().required("Trường này bắt buộc"),
          content3: Yup.string().required("Trường này bắt buộc"),
          ratingIMBD: Yup.string().required("Trường này bắt buộc"),
          ratingMastascore: Yup.string().required("Trường này bắt buộc"),
          ratingRotensTomato: Yup.string().required("Trường này bắt buộc"),
          author: Yup.string().required("Trường này bắt buộc"),
        })}
        onSubmit={(values) => {
          console.log(values);
          updateBlog(id, {
            title: values.title,
            image: values.image,
            movie: {
              name: values.name,
              duration: values.duration,
              director: values.director,
              actor: values.actor,
              country: values.country,
              genre: values.genre,
              premiere: values.premiere,
            },
            content: [
              {
                order: 0,
                type: "image",
                sectionContent: values.content0,
              },
              {
                order: 1,
                type: "image",
                sectionContent: values.content1,
              },
              {
                order: 2,
                type: "image",
                sectionContent: values.content2,
              },
              {
                order: 3,
                type: "image",
                sectionContent: values.content3,
              },
            ],
            ratingScale: [
              {
                name: "IMBD",
                rating: values.ratingIMBD,
              },
              {
                name: "Mastascore",
                rating: values.ratingMastascore,
              },
              {
                name: "Rotens Tomato",
                rating: values.ratingRotensTomato,
              },
            ],
            author: values.author,
          });
        }}
      >
        {(formik) => (
          <Form>
            <InputField
              name="title"
              type="text"
              placeholder="Title phim"
              label="Title phim"
            />
            <InputField
              name="image"
              type="text"
              placeholder="Ảnh phim (Đường dẫn)"
              label="Ảnh phim (Đường dẫn)"
            />
            <InputField
              name="name"
              type="text"
              placeholder="Tên phim"
              label="Tên phim"
            />
            <InputField
              name="duration"
              type="text"
              placeholder="Thời lượng phim"
              label="Thời lượng phim"
            />
            <InputField
              name="director"
              type="text"
              placeholder="Đạo diễn phim"
              label="Đạo diễn phim"
            />
            <InputField
              name="actor"
              type="text"
              placeholder="Diễn viên phim"
              label="Diễn viên phim"
            />
            <InputField
              name="country"
              type="text"
              placeholder="Quốc gia"
              label="Quốc gia"
            />
            <InputField
              name="genre"
              type="text"
              placeholder="Thể loại phim"
              label="Thể loại phim"
            />
            <InputField
              name="premiere"
              type="text"
              placeholder="Ngày công chiếu"
              label="Ngày công chiếu"
            />
            <InputField
              name="content0"
              type="text"
              placeholder="Nội dung bài viết"
              label="Nội dung bài viết"
            />
            <InputField
              name="content1"
              type="text"
              placeholder="Nội dung bài viết"
              label="Nội dung bài viết"
            />
            <InputField
              name="content2"
              type="text"
              placeholder="Nội dung bài viết"
              label="Nội dung bài viết"
            />
            <InputField
              name="content3"
              type="text"
              placeholder="Nội dung bài viết"
              label="Nội dung bài viết"
            />
            <InputField
              name="ratingIMBD"
              type="text"
              placeholder="Điểm IMBD"
              label="Điểm IMBD"
            />
            <InputField
              name="ratingMastascore"
              type="text"
              placeholder="Điểm Mastascore"
              label="Điểm Mastascore"
            />
            <InputField
              name="ratingRotensTomato"
              type="text"
              placeholder="Điểm Rotens Tomato"
              label="Điểm Rotens Tomato"
            />
            <InputField
              name="author"
              type="text"
              placeholder="Tác giả bài viết"
              label="Tác giả bài viết"
            />

            <Button className="mr-10" variant="primary" type="submit">
              Cập nhật bài viết
            </Button>
            <Button className="ml-10" variant="secondary">
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/list"
              >
                Trở về
              </Link>
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default UpdateEmployee;
