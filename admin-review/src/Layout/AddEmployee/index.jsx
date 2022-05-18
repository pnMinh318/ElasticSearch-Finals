import { Form, Formik } from "formik";
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import RequestApi from '../../Utils/RequestApi';
import InputField from '../InputField';




function AddEmployee(props) {

    return (
        <Container className="mb-5">

            <div style={{ fontSize: '30px', marginTop: '50px', marginBottom: '50px', fontWeight: 'bold' }}>
                Thêm bài viết
            </div>
            <Formik
                initialValues={{
                    title: "",
                    image: "",
                    name: "",
                    duration: "",
                    director: "",
                    actor: "",
                    country: "",
                    genre: "",
                    premiere: "",
                    content0: "",
                    content1: "",
                    content2: "",
                    content3: "",
                    content4: "",
                    ratingIMBD: "",
                    ratingMastascore: "",
                    ratingRotensTomato: "",
                    author: "",
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required('Trường này bắt buộc'),
                    image: Yup.string().required('Trường này bắt buộc'),
                    name: Yup.string().required('Trường này bắt buộc'),
                    duration: Yup.string().required('Trường này bắt buộc'),
                    director: Yup.string().required('Trường này bắt buộc'),
                    actor: Yup.string().required('Trường này bắt buộc'),
                    country: Yup.string().required('Trường này bắt buộc'),
                    genre: Yup.string().required('Trường này bắt buộc'),
                    premiere: Yup.string().required('Trường này bắt buộc'),
                    content0: Yup.string().required('Trường này bắt buộc'),
                    content1: Yup.string().required('Trường này bắt buộc'),
                    content2: Yup.string().required('Trường này bắt buộc'),
                    content3: Yup.string().required('Trường này bắt buộc'),
                    ratingIMBD: Yup.string().required('Trường này bắt buộc'),
                    ratingMastascore: Yup.string().required('Trường này bắt buộc'),
                    ratingRotensTomato: Yup.string().required('Trường này bắt buộc'),
                    author: Yup.string().required('Trường này bắt buộc'),
                })}
                onSubmit={async (values) => {
                    try {
                        await RequestApi('http://localhost:5000/api/blogs', 'POST', {
                            title: values.title,
                            image: values.image,
                            movie: {
                                name: values.name,
                                duration: values.duration,
                                director: values.director,
                                actor: values.actor,
                                country: values.country,
                                genre: values.genre,
                                premiere: values.premiere
                            },
                            content: [
                                {
                                    order: 0,
                                    type: 'image',
                                    sectionContent: values.content0
                                },
                                {
                                    order: 1,
                                    type: 'image',
                                    sectionContent: values.content1
                                },
                                {
                                    order: 2,
                                    type: 'image',
                                    sectionContent: values.content2
                                },
                                {
                                    order: 3,
                                    type: 'image',
                                    sectionContent: values.content3
                                }
                            ],
                            ratingScale: [
                                {
                                    name: 'IMBD',
                                    rating: values.ratingIMBD
                                },
                                {
                                    name: 'Mastascore',
                                    rating: values.ratingMastascore
                                },
                                {
                                    name: 'Rotens Tomato',
                                    rating: values.ratingRotensTomato
                                }

                            ],
                            author: values.author
                        })
                    }
                    catch (err) {
                        console.log(err);
                    }
                }}
            >
                {(formik) => (
                    <Form>
                        <InputField name="title" type="text" placeholder="Title phim" label="Title phim" />
                        <InputField name="image" type="text" placeholder="Ảnh phim (Đường dẫn)" label="Ảnh phim (Đường dẫn)" />
                        <InputField name="name" type="text" placeholder="Tên phim" label="Tên phim" />
                        <InputField name="duration" type="text" placeholder="Thời lượng phim" label="Thời lượng phim" />
                        <InputField name="director" type="text" placeholder="Đạo diễn phim" label="Đạo diễn phim" />
                        <InputField name="actor" type="text" placeholder="Diễn viên phim" label="Diễn viên phim" />
                        <InputField name="country" type="text" placeholder="Quốc gia" label="Quốc gia" />
                        <InputField name="genre" type="text" placeholder="Thể loại phim" label="Thể loại phim" />
                        <InputField name="premiere" type="text" placeholder="Ngày công chiếu" label="Ngày công chiếu" />
                        <InputField name="content0" type="text" placeholder="Nội dung bài viết" label="Nội dung bài viết" />
                        <InputField name="content1" type="text" placeholder="Nội dung bài viết" label="Nội dung bài viết" />
                        <InputField name="content2" type="text" placeholder="Nội dung bài viết" label="Nội dung bài viết" />
                        <InputField name="content3" type="text" placeholder="Nội dung bài viết" label="Nội dung bài viết" />
                        <InputField name="ratingIMBD" type="text" placeholder="Điểm IMBD" label="Điểm IMBD" />
                        <InputField name="ratingMastascore" type="text" placeholder="Điểm Mastascore" label="Điểm Mastascore" />
                        <InputField name="ratingRotensTomato" type="text" placeholder="Điểm Rotens Tomato" label="Điểm Rotens Tomato" />
                        <InputField name="author" type="text" placeholder="Tác giả bài viết" label="Tác giả bài viết" />

                        <Button className="mr-10" variant="primary" type="submit">
                            Thêm bài viết
                        </Button>
                        <Button className="ml-10" variant="secondary">
                            <Link style={{ color: 'white', textDecoration: 'none' }} to="/list">
                                Trở về
                            </Link>
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}

export default AddEmployee;