import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-md-10" data-aos="fade-up" data-aos-delay={400}>
          <div className="row justify-content-center mt-5">
            <div className="col-md-8 text-center">
              <h1>Happy Buying Online</h1>
              <p className="mb-0">Don St, Brooklyn, New York</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;