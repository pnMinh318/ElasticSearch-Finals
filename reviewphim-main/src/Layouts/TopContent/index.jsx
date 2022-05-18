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
        </div>
    );
}

export default TopContent;