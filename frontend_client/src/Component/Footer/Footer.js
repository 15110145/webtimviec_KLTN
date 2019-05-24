import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <h2 className="footer-heading mb-4">Thông tin</h2>
                <p>Trường đại học Sư phạm kỹ thuật TPHCM</p>
                <p></p>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Điều hướng</h2>
                <ul className="list-unstyled">
                  <li><a href="#">Trang chủ</a></li>
                  <li><a href="#">Tất cả công việc</a></li>
                  <li><a href="#">Nhà tuyển dụng</a></li>
                  <li><a href="#">Thông tin</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Theo dõi chúng tôi</h2>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin" /></a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <form action="#" method="post">
              <div className="input-group mb-3">
                <input type="text" className="form-control border-secondary text-white bg-transparent" placeholder="Tìm công việc" aria-label="Enter Email" aria-describedby="button-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary text-white" type="button" id="button-addon2">Tìm</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Wesite © Tìm việc nhanh | Đồ án tốt nghiệp <i className="icon-heart" aria-hidden="true" /> Thành viên <a href="https://colorlib.com" target="_blank">Sơn - Tuấn</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;