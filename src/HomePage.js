import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'
function HomePage() {
  return (
    <div>

      {/* Hero Section */}
      <header className="hero bg-primary text-white text-center py-4">
        <div className="container">
          <h1 className="display-4">Welcome to TicketTune</h1>
          <p className="lead">Explore our Concert Booking.</p>
          <a className="btn btn-light btn-lg" href="#" role="button">Learn More</a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://images.alphacoders.com/130/1309668.jpg" className="card-img-top" alt="Feature 1" width="150" height="414"/>
                <div className="card-body">
                  <h5 className="card-title">Gay</h5>
                  <p className="card-text">ค้นพบประสบการณ์เกย์ได้ที่นี่</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://images3.alphacoders.com/132/1320717.png" className="card-img-top" alt="Feature 2" width="150" height="414" />
                <div className="card-body">
                  <h5 className="card-title">ใครถาม???</h5>
                  <p className="card-text">คนถามอยู่ไหน???</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://images3.alphacoders.com/132/thumbbig-1327504.webp" className="card-img-top" alt="Feature 3" width="150" height="414"/>
                <div className="card-body">
                  <h5 className="card-title">ประเทศไทย</h5>
                  <p className="card-text">รักลุงตู่</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

    </div>
  );
}

export default HomePage;
