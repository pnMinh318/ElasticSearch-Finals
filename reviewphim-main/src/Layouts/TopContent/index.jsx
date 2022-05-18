import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopContent({ filmList }) {
    return (
        <div className="top-content">
            {filmList.map((item, index) => (
                <Card key={index} className="top-item" style={{ width: '24%' }}>
                    <Link to={`details/${item._id}`}>
                        <Card.Img
                            variant="top"
                            src={`${item._source.image}`}
                            className="item-img"
                        />
                    </Link>
                    <Card.Body>
                        <Card.Title>{item._source.title}</Card.Title>
                        <Card.Text>
                            Thời lượng: {item._source.movie.duration}
                            Đạo diễn: {item._source.movie.director}
                            Diễn viên:{item._source.movie.actor}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
            {/* <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2022/01/Ghienreview-Sing-2-Dau-truong-am-nhac-2-01-min-1536x864.jpg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim Sing 2 – Đấu trường âm nhạc 2: Dễ thương và bùng cháy</Card.Title>
                    <Card.Text>
                        Thời lượng: 110 phút Đạo diễn: Garth Jennings Diễn viên: Tori Kelly, Matthew McConaughey, Scarlett...
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2022/01/Ghienreview-Ghostbusters-Biet-doi-san-ma-02-min.jpg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim Ghostbusters (2021): Khá thú vị để cả gia đình cùng xem</Card.Title>
                    <Card.Text>
                        Thời lượng: 124 phút Đạo diễn: Jason Reitman Diễn viên: Mckenna Grace, Logan Kim, Paul...
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Ma-tran-4-02-min.jpg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim Ma trận 4: Hồi sinh – Dài dòng, chậm chạp và thiếu sức hút</Card.Title>
                    <Card.Text>
                        Thời lượng: 148 phút Đạo diễn: Lana Wachowski Diễn viên: Keanu Reeves, Carrie-Anne Moss, Jessica...
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Am-thuat-xac-song-san-moi-02.jpeg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim Ám thuật: Xác sống săn mồi – Không hay như trailer</Card.Title>
                    <Card.Text>
                        Thời lượng: 110 phút Đạo diễn: Yong-wan Kim Diễn viên: Ji-won Uhm, Ji-so Jung Quốc...
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-Eternals-2021-05-min.jpg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim Eternals (2021) – Du lịch xuyên thời gian không gian sau dịch</Card.Title>
                    <Card.Text>
                        Thời lượng: 156 phút Đạo diễn: Chloé Zhao Diễn viên: Gemma Chan, Richard Madden, Angelina...
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2021/12/Ghienreview-The-Last-Duel-04-min.jpg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim The Last Duel – Trận đấu cuối cùng: Hư danh của hiệp sĩ</Card.Title>
                    <Card.Text>
                        Thời lượng: 152 phút Đạo diễn: Ridley Scott Diễn viên: Matt Damon, Adam Driver, Jodie...
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="top-item" style={{ width: '24%' }}>
                <Card.Img
                    variant="top"
                    src="https://ghienreview.com/wp-content/uploads/2021/12/Ghien-review-Money-Heist-Season-5-phan-2-01-min.jpg"
                    className="item-img"
                />
                <Card.Body>
                    <Card.Title>Review phim Money Heist season 5 phần 2: Kết hơi ảo nhưng cảm xúc</Card.Title>
                    <Card.Text>
                        Thời lượng: 5 tập; 50 phút/tập Sáng tạo: Álex Pina Diễn viên: Úrsula Corberó, Álvaro Morte, Itziar...
                    </Card.Text>
                </Card.Body>
            </Card> */}
        </div>
    );
}

export default TopContent;