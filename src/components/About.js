import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Hola, somos Gymso</h2>
            <p data-aos="fade-up" data-aos-delay="400">No está permitido redistribuir este archivo ZIP descargable de la plantilla HTML en ningún sitio de colección de plantillas. Está permitido usar esta plantilla para tus sitios web personales o empresariales.</p>
            <p data-aos="fade-up" data-aos-delay="500">Si tienes alguna pregunta sobre la plantilla HTML de Gymso Fitness, puedes contactar a Tooplate inmediatamente. Gracias.</p>
          </div>
          <div className="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
            <div className="team-thumb">
              <img src="./images/team/team-image.jpg" className="img-fluid" alt="Trainer" />
              <div className="team-info d-flex flex-column">
                <h3>Mary Yan</h3>
                <span>Instructora de Yoga</span>
                <ul className="social-icon mt-3">
                  <li><a href="#" className="fa fa-twitter"></a></li>
                  <li><a href="#" className="fa fa-instagram"></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="800">
            <div className="team-thumb">
              <img src="./images/team/team-image01.jpg" className="img-fluid" alt="Trainer" />
              <div className="team-info d-flex flex-column">
                <h3>Catherina</h3>
                <span>Entrenadora corporal</span>
                <ul className="social-icon mt-3">
                  <li><a href="#" className="fa fa-instagram"></a></li>
                  <li><a href="#" className="fa fa-facebook"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

