import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Job extends Component {
  render() {
    return (
      <div className="col-lg-12 block" >
        <div className="d-block d-md-flex listing">
          <a href="#" className="img d-block" style={{ backgroundImage: 'url("images/img_1.jpg")' }} />
          <div className="lh-content">
           <Link to = "/info-job"> <span className="category">NodeJS</span></Link>
            <h3>Nhà tuyển dụng:<Link to="#"> FPT</Link></h3>
            <address>Địa chỉ: Đà Nẵng</address>
            <p className="mb-0">
              <span className="review">Hạn nộp hồ sơ: 2019-09-09</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Job;