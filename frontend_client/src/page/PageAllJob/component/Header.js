import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-md-10" data-aos="fade-up" data-aos-delay={400}>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8 text-center">
              <h1>Tất cả công việc</h1>
            </div>
          </div>
        </div>
        <div className="form-search-wrap mb-3" data-aos="fade-up" data-aos-delay={200}>
          <form method="post">
            <div className="row align-items-center">
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-5">
                <input type="text" className="form-control rounded" placeholder="Tìm công việc..." />
              </div>
              <div className="col-lg-12 mb-4 mb-xl-0 col-xl-4">
                <div className="select-wrap">
                  <span className="icon"><span className="icon-keyboard_arrow_down" /></span>
                  <select className="form-control rounded">
                    <option selected>Thành phố ...</option>
                    <option value="1" >demo</option>
                    <option value="2" >demo</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-xl-3 ml-auto text-right">
                <input className="btn btn-primary btn-block rounded" defaultValue="Tìm kiếm" />
              </div>
            </div>
          </form>
        </div>
      </div>
      
    );
  }
}

export default Header;