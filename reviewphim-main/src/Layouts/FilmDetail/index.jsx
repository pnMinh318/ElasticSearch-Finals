import React from 'react';
import { Button, Dropdown, DropdownButton, Figure } from 'react-bootstrap';
import './style.css';
import data from '../../blogEndgame.json';
import NavContent from '../NavContent';

function FilmDetail(props) {

    console.log(data)
    return (
        <div className="film-detail">
            <div className="content">
                <div className="film-title">
                    {/* Review phim Eternals (2021) – Du lịch xuyên thời gian không gian sau dịch */}
                    {data.title}
                </div>
                <img
                    className="film-img" src={data.image}
                    alt="film-img" />
                <div className="film-desc">
                    <div className="film-time">
                        <span className='film-info'>Thời lượng: </span>
                        {data.movie.duration}
                    </div>
                    <div className="film-director">
                        <span className='film-info'>Đạo diễn: </span>
                        {data.movie.director}
                    </div>
                    <div className="film-actor">
                        <span className='film-info'>Diễn viên: </span>
                        {data.movie.actor}
                    </div>
                    <div className="film-national">
                        <span className='film-info'>Quốc gia: </span>
                        {data.movie.country}
                    </div>
                    <div className="film-category">
                        <span className='film-info'>Thể loại: </span>
                        {data.movie.genre}
                    </div>
                    <div className="film-release">
                        <span className='film-info'>Khởi chiếu: </span>
                        {data.movie.premiere}
                    </div>
                </div>
                <div className="film-review">

                    {/* <iframe width="100%" height="384" src="https://www.youtube.com/embed/NbEchSaNzYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    {/* <p className="film-text">
                        Cốt truyện: Eternals là những người có năng lực siêu phàm được cử đến các hành tinh, trong đó có trái đất để chống lại loại Deviant nguy hiểm từ 5000 năm trước công nguyên. Sau khi thực hiện xong nhiệm vụ, họ chia nhau ra ở khắp nơi trên trái và sống cuộc đời của mình. Cho đến một ngày nọ, loại Deviant bỗng dưng xuất hiện với nhiều đặc điểm kỳ lạ và mục tiêu tấn công của chúng bây giờ không phải là con người nữa mà chính là các Eternals. Thực hư của chuyện này là như thế nào và các Eternals phải làm gì? Xem phim để có câu trả lời các bạn nha.
                    </p> */}
                    <img src={data.content[0].sectionContent} className="film-img" />
                    <p className="film-text">
                        {data.content[1].sectionContent}
                    </p>
                    <p className="film-text">
                        {data.content[2].sectionContent}
                    </p>
                    <iframe width="560" height="315" src={data.content[3].sectionContent} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="film-desc">
                    <span style={{ fontSize: '20px', color: 'red' }}>Thang điểm đánh giá</span>
                    {data.ratingScale.map((item, index) => (
                        <div className="film-time">
                            <span className='film-info'>{item.name}: </span>
                            {item.rating}
                        </div>
                    ))}
                </div>
            </div>
            <NavContent />

        </div>
    );
}

export default FilmDetail;