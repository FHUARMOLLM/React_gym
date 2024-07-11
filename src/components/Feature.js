import React from 'react';

const Feature = () => {
  return (
    <section className="feature" id="feature">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
            <h2 className="mb-3 text-white" data-aos="fade-up">¿Nuevo en el gimnasio?</h2>
            <h6 className="mb-4 text-white" data-aos="fade-up">Tu membresía es gratis durante 2 meses ($62.50 por mes)</h6>
            <p data-aos="fade-up" data-aos-delay="200">Gymso es una plantilla HTML gratuita de Tooplate para tu sitio web comercial. Diseño de Bootstrap v4.2.1. Puedes utilizarlo libremente.</p>
            <a href="#" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300">Conviértete en miembro hoy</a>
          </div>
          <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
            <div className="about-working-hours">
              <h2 className="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Horario de trabajo</h2>
              <strong className="d-block" data-aos="fade-up" data-aos-delay="600">Domingo: Cerrado</strong>
              <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Lunes - Viernes</strong>
              <p data-aos="fade-up" data-aos-delay="800">7:00 AM - 10:00 PM</p>
              <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Sábado</strong>
              <p data-aos="fade-up" data-aos-delay="800">6:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
