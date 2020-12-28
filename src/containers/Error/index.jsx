import React from "react";
import erroricon from "../../assets/img/404.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./style.css";
function Error() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <div className="errorcontainer">
            <img src={erroricon} alt="" className="error__icon" />
            <p className="error__title">Rất tiếc Putolata không tìm thấy.</p>
            <p className="error__text">
              Chúng tớ không tìm thấy thứ bạn muốn, hãy thử lại lần nữa với từ
              khóa khác nhé!
            </p>
            <Link to="/" className="normallink">
              Hoặc bạn có thể quay về trang chủ
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;
