import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <h6 data-aos="fade-up">Ponte en contacto</h6>
            <h2 data-aos="fade-up" data-aos-delay="200">Contactanos</h2>
          </div>
          <div className="col-lg-8 col-12 mx-auto" data-aos="fade-up" data-aos-delay="300">
            <form action="#" method="post" className="contact-form" role="form">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <input type="text" className="form-control" name="name" placeholder="Nombre completo" required />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <input type="email" className="form-control" name="email" placeholder="Correo electrónico" required />
                </div>
                <div className="col-lg-12 col-12">
                  <textarea className="form-control" rows="6" name="message" placeholder="Mensaje" required></textarea>
                </div>
                <div className="col-lg-3 col-12 mx-auto">
                  <button type="submit" className="form-control" id="submit-button" name="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

