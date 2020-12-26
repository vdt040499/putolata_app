import React from 'react';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import slogan from '../../assets/img/slogan.png';
import logo from '../../assets/img/logo.png';
import './style.css';

function Footer() {
    return (
        <div className="footer__container">
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="footer__slogan">
                                <img src={logo} className='logopic' alt=""/>
                                <img src={slogan} className='sloganpic' alt=""/>
                            </div>
                            <div className="footer__info">
                                <p className="footer__infobasic">Phone: 0934567899</p>
                                <p className="footer__infobasic">Email : nhom19@gm.uit.edu.vn</p>
                                <p className="footer__infobasic">Địa chỉ : Số 1 Hàn Thuyên, KP6, Phường Linh Trung, Quận Thủ Đức, TPHCM</p>
                            </div>
                        </Col>

                        {/* <Col md={2}>
                        
                        </Col> */}

                        <Col md={2}>
                            <div className="footer__adveninfo">
                                <p className="footer__title">Hỗ trợ</p>
                                <button className="footer__infoadven">FAQ</button>
                                <button className="footer__infoadven">Liên hệ</button>
                                <button className="footer__infoadven">Chính sách</button>
                            </div>
                        </Col>

                        <Col md={2}>
                            <div className="footer__adveninfo">
                                <p className="footer__title">Mạng xã hội</p>
                                <button className="footer__infoadven">Twitter</button>
                                <button className="footer__infoadven">Facebook</button>
                                <button  className="footer__infoadven">Instagram</button>
                            </div>
                        </Col>

                        <Col md={2}>
                            <div className="footer__adveninfo">
                                <p className="footer__title">Kết nối</p>
                                <button className="footer__infoadven">Đăng ký</button>
                                <button className="footer__infoadven">Đăng nhập</button>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__copyright">
                <p className="footer__copyinfo">© Copyright Nhóm 19 - Đây là website được xây dung cho mục đích giáo dục, không có thông tin nào ở đây là thật.</p>
            </div>
        </div>
    );
}

export default Footer;