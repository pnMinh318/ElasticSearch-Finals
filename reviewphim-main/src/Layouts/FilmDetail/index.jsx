import React from 'react';
import { Button, Dropdown, DropdownButton, Figure } from 'react-bootstrap';
import './style.css';

function FilmDetail(props) {
    return (
        <div className="film-detail">
            <div className="content">
                <div className="film-title">
                    Review phim Eternals (2021) – Du lịch xuyên thời gian không gian sau dịch
                </div>
                <img
                    className="film-img" src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Eternals-2021-05-min.jpg"
                    alt="film-img" />
                <div className="film-desc">
                    <div className="film-time">
                        <span className='film-info'>Thời lượng: </span>
                        156 phút
                    </div>
                    <div className="film-director">
                        <span className='film-info'>Đạo diễn: </span>
                        Chloé Zhao
                    </div>
                    <div className="film-actor">
                        <span className='film-info'>Diễn viên: </span>
                        Gemma Chan, Richard Madden, Angelina Jolie
                    </div>
                    <div className="film-national">
                        <span className='film-info'>Quốc gia: </span>
                        Mỹ
                    </div>
                    <div className="film-category">
                        <span className='film-info'>Thể loại: </span>
                        Giả tưởng, Hành động, Phiêu lưu
                    </div>
                    <div className="film-release">
                        <span className='film-info'>Khởi chiếu: </span>
                        03/12/2021
                    </div>
                </div>
                <div className="film-review">
                    {/* <iframe width="560" height="315" src="https://youtu.be/NbEchSaNzYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <iframe width="100%" height="384" src="https://www.youtube.com/embed/NbEchSaNzYs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="film-text">
                        Cốt truyện: Eternals là những người có năng lực siêu phàm được cử đến các hành tinh, trong đó có trái đất để chống lại loại Deviant nguy hiểm từ 5000 năm trước công nguyên. Sau khi thực hiện xong nhiệm vụ, họ chia nhau ra ở khắp nơi trên trái và sống cuộc đời của mình. Cho đến một ngày nọ, loại Deviant bỗng dưng xuất hiện với nhiều đặc điểm kỳ lạ và mục tiêu tấn công của chúng bây giờ không phải là con người nữa mà chính là các Eternals. Thực hư của chuyện này là như thế nào và các Eternals phải làm gì? Xem phim để có câu trả lời các bạn nha.
                    </p>
                </div>
            </div>
            <div className="notification">
                <div className="noti-title">
                    ĐỪNG BỎ LỠ THÔNG TIN !
                </div>
                <div className="noti-text">
                    Cùng với hơn 1000 Thành viên nhận những thông tin mới nhất của Ottel Review được gửi qua email hàng tuần.
                </div>
                <input type="text"
                    placeholder="Email Address"
                    className="noti-input" />
                <Button className='noti-btn' variant="danger">
                    Đăng Ký
                </Button>
                {/* <DropdownButton id="dropdown-basic-button" title="Chọn chuyên mục">
                    <Dropdown.Item href="#/action-2">Phim trong tháng</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Phim hay nhất</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Nhân vật</Dropdown.Item>
                </DropdownButton> */}
                <div className="noti-title">
                    NHIỀU NGƯỜI ĐỌC
                </div>
                <Figure className="noti-item">
                    <Figure.Image
                        width={80}
                        height={80}
                        alt="171x180"
                        src="https://ghienreview.com/wp-content/uploads/2021/12/Ghien-review-Dont-Look-up-02-min.jpg"
                    />
                    <Figure.Caption className="noti-caption">
                        Review phim Don’t look up – Đừng nhìn lên: Châm biếm sâu cay xã hội
                    </Figure.Caption>
                </Figure>
                <Figure className="noti-item">
                    <Figure.Image
                        width={80}
                        height={80}
                        alt="171x180"
                        src="https://ghienreview.com/wp-content/uploads/2021/12/Ghien-review-Resident-Evil-Quy-du-troi-day-04-min.jpg"
                    />
                    <Figure.Caption className="noti-caption">
                        Review phim Resident Evil: Quỷ dữ trỗi dậy – Phim hạng B mờ nhạt
                    </Figure.Caption>
                </Figure>
                <Figure className="noti-item">
                    <Figure.Image
                        width={80}
                        height={80}
                        alt="171x180"
                        src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Ma-tran-4-02-min.jpg"
                    />
                    <Figure.Caption className="noti-caption">
                        Review phim Ma trận 4: Hồi sinh – Dài dòng, chậm chạp và thiếu sức hút
                    </Figure.Caption>
                </Figure>
                <Figure className="noti-item">
                    <Figure.Image
                        width={80}
                        height={80}
                        alt="171x180"
                        src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Spiderman-no-way-home-04-min.jpg"
                    />
                    <Figure.Caption className="noti-caption">
                        Review phim Spider-man No way home – Tri ân hình tượng Người nhện
                    </Figure.Caption>
                </Figure>
                <Figure className="noti-item">
                    <Figure.Image
                        width={80}
                        height={80}
                        alt="171x180"
                        src="https://ghienreview.com/wp-content/uploads/2021/11/Ghien-review-Red-Notice-01.jpg"
                    />
                    <Figure.Caption className="noti-caption">
                        Review phim Red Notice (2021): Nhìn dàn cast là đủ biết phim hay
                    </Figure.Caption>
                </Figure>
            </div>
        </div>
    );
}

export default FilmDetail;