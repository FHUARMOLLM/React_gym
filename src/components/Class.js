import React from 'react';

const Class = () => {
  return (
    <section className="class section" id="class">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <h6 data-aos="fade-up">Obtén un cuerpo perfecto</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">Nuestras clases</h2>
          </div>
          <div className="mt-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="400">
            <div className="class-thumb">
              <img src="./images/class/yoga-class.jpg" className="img-fluid" alt="Class" />
              <div className="class-info">
                <h3 className="mb-1">Yoga</h3>
                <span><strong>Trainers:</strong> Mary, Tom</span>
                <span className="class-price">$50</span>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="mt-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
            <div className="class-thumb">
              <img src="./images/class/crossfit-class.jpg" className="img-fluid" alt="Class" />
              <div className="class-info">
                <h3 className="mb-1">Crossfit</h3>
                <span><strong>Trainers:</strong> Mary, Mike</span>
                <span className="class-price">$75</span>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="mt-3 col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <div className="class-thumb">
              <img src="./images/class/cardio-class.jpg" className="img-fluid" alt="Class" />
              <div className="class-info">
                <h3 className="mb-1">Cardio</h3>
                <span><strong>Trainers:</strong> Alice, Bob</span>
                <span className="class-price">$45</span>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Class;

