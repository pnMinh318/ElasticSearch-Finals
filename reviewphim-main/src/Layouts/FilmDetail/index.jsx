import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import callApi from "../../api/callApi";
import NavContent from "../NavContent";
import "./style.css";
import Comment from "../../components/comments";
import CommentsForm from "../../components/commentsForm";

function FilmDetail({ filmList }) {
  const [listCmt, setListCmt] = useState([]);

  let userId = localStorage.getItem("userId");
  let fullname = localStorage.getItem("fullname");
  const handlePostCmt = async (content) => {
    if (userId && fullname) {
      const newCom = {
        userId: userId,
        fullname: fullname,
        content: content,
      };
      // debugger;
      const res = await callApi(`comments/blogs/${filmList._id}`, "POST", {
        ...newCom,
      });
      if (res.data.message) {
        alert("Thêm thành công!");
      }
    } else {
      alert("Cần đăng nhập để bình luận");
    }
    getCmtByBlogId();
  };
  const handleEditCmt = async (content, cmtId) => {
    if (userId && fullname) {
      const updateCom = {
        content: content,
      };
      const res = await callApi(`comments/${cmtId}`, "PUT", {
        ...updateCom,
      });
      if (res.data.message) {
        alert("Sửa thành công!");
      }
    } else {
      alert("Cần đăng nhập để bình luận");
    }
    getCmtByBlogId();
  };
  const handleDeleteCmt = async (id) => {
    if (window.confirm("Bạn có muốn xóa?")) {
      const res = await callApi(`comments/${id}`, "DELETE");
      if (res.data.message) {
        alert("Xóa thành công!");
      }
      getCmtByBlogId();
      console.log(res);
    }
  };

  const getCmtByBlogId = async () => {
    const res = await callApi(`comments/blogs/${filmList._id}`, "GET");
    setListCmt(res.data.documents);
  };

  useEffect(() => {
    if (filmList._id) getCmtByBlogId();
  }, [filmList]);
  return (
    <>
      <div className="film-detail">
        <div className="content">
          <div className="film-title">
            {/* Review phim Eternals (2021) – Du lịch xuyên thời gian không gian sau dịch */}
            {filmList._source.title}
          </div>
          <img
            className="film-img"
            src={filmList._source.image}
            alt="film-img"
          />
          <div className="film-desc">
            <div className="film-time">
              <span className="film-info">Thời lượng: </span>
              {filmList._source.movie.duration}
            </div>
            <div className="film-director">
              <span className="film-info">Đạo diễn: </span>
              {filmList._source.movie.director}
            </div>
            <div className="film-actor">
              <span className="film-info">Diễn viên: </span>
              {filmList._source.movie.actor}
            </div>
            <div className="film-national">
              <span className="film-info">Quốc gia: </span>
              {filmList._source.movie.country}
            </div>
            <div className="film-category">
              <span className="film-info">Thể loại: </span>
              {filmList._source.movie.genre}
            </div>
            <div className="film-release">
              <span className="film-info">Khởi chiếu: </span>
              {filmList._source.movie.premiere}
            </div>
          </div>
          <div className="film-review">
            {/* <iframe width="100%" height="384" src="https://www.youtube.com/embed/NbEchSaNzYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {/* <p className="film-text">
                        Cốt truyện: Eternals là những người có năng lực siêu phàm được cử đến các hành tinh, trong đó có trái đất để chống lại loại Deviant nguy hiểm từ 5000 năm trước công nguyên. Sau khi thực hiện xong nhiệm vụ, họ chia nhau ra ở khắp nơi trên trái và sống cuộc đời của mình. Cho đến một ngày nọ, loại Deviant bỗng dưng xuất hiện với nhiều đặc điểm kỳ lạ và mục tiêu tấn công của chúng bây giờ không phải là con người nữa mà chính là các Eternals. Thực hư của chuyện này là như thế nào và các Eternals phải làm gì? Xem phim để có câu trả lời các bạn nha.
                    </p> */}
            <img
              src={filmList._source.content[0].sectionContent}
              className="film-img"
              alt="img-phim"
            />
            <p
              className="film-text"
              dangerouslySetInnerHTML={{
                __html: filmList._source.content[1].sectionContent,
              }}
            ></p>
            <p
              className="film-text"
              dangerouslySetInnerHTML={{
                __html: filmList._source.content[2].sectionContent,
              }}
            ></p>
            {/* <iframe width="560" height="315" src={filmList.content[3].sectionContent} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </div>
          <div className="film-desc">
            <span style={{ fontSize: "20px", color: "red" }}>
              Thang điểm đánh giá
            </span>
            {filmList._source.ratingScale.map((item, index) => (
              <div key={index} className="film-time">
                <span className="film-info">{item.name}: </span>
                {item.rating}
              </div>
            ))}
          </div>
        </div>
        <NavContent />
      </div>
      <CommentsForm handlePostCmt={handlePostCmt}></CommentsForm>
      {listCmt?.reverse().map((item, index) => (
        <Comment
          comment={item}
          key={item._id + index}
          handleDeleteCmt={handleDeleteCmt}
          handleEditCmt={handleEditCmt}
          currentUserId={userId}
        ></Comment>
      ))}
    </>
  );
}

export default FilmDetail;
