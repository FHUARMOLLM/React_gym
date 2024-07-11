import React from 'react';

const Schedule = () => {
  return (
    <section className="schedule section" id="schedule">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <h6 data-aos="fade-up">Nuestro Horario</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">Horarios de Clases</h2>
          </div>
          <div className="col-lg-2 col-12 text-center">
            <h6 data-aos="fade-up" data-aos-delay="300">Domingo</h6>
          </div>
          <div className="col-lg-2 col-12 text-center">
            <h6 data-aos="fade-up" data-aos-delay="400">Lunes</h6>
          </div>
          <div className="col-lg-2 col-12 text-center">
            <h6 data-aos="fade-up" data-aos-delay="500">Martes</h6>
          </div>
          <div className="col-lg-2 col-12 text-center">
            <h6 data-aos="fade-up" data-aos-delay="600">Miércoles</h6>
          </div>
          <div className="col-lg-2 col-12 text-center">
            <h6 data-aos="fade-up" data-aos-delay="700">Jueves</h6>
          </div>
          <div className="col-lg-2 col-12 text-center">
            <h6 data-aos="fade-up" data-aos-delay="800">Viernes</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

