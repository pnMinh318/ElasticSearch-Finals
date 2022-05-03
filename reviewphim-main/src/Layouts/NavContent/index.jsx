import React from 'react';
import { Button, Figure } from 'react-bootstrap';

function NavContent(props) {
    return (
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
    );
}

export default NavContent;