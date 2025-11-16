import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/inicio/styles.css';
import logo from '../assets/inicio/logosf2.png';
import lana from '../assets/inicio/lana.jpg';
import aguja from '../assets/inicio/agujas.jpg';
import boton from '../assets/inicio/botones.jpg';
import bg1 from '../assets/inicio/bg1.jpg';
import bg2 from '../assets/inicio/bg2.jpeg';
import bg3 from '../assets/inicio/bg3.jpg';

export default function Inicio() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-gallery').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="inicio-container">
      <section className="hero-section position-relative overflow-hidden" style={{ minHeight: '600px' }}>
        <div id="heroCarousel" className="carousel slide carousel-fade position-absolute top-0 start-0 w-100 h-100" data-bs-ride="carousel" data-bs-interval="4000">
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img 
                src={bg1} 
                className="d-block w-100 h-100 object-fit-cover" 
                alt="Hilados y lanas"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
            </div>
            <div className="carousel-item h-100">
              <img 
                src={bg2} 
                className="d-block w-100 h-100 object-fit-cover" 
                alt="Telas y textiles"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
            </div>
            <div className="carousel-item h-100">
              <img 
                src={bg3}  
                className="d-block w-100 h-100 object-fit-cover" 
                alt="Accesorios de costura"
              />
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}></div>
            </div>
          </div>
        </div>
        <div className="container position-relative" style={{ zIndex: 10, paddingTop: '80px', paddingBottom: '80px' }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-white mb-4">Mercería Amelia</h1>
              <p className="lead text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                Todo para tus proyectos de costura, tejido y manualidades. 
                Encuentra los mejores hilados, telas y accesorios de calidad.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Ver Productos
                </button>
                <button className="btn btn-outline-light btn-lg px-4 py-2">
                  Ofertas Especiales
                </button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div>
                <div className="card-body cardfondo text-center p-0">
                  <img src={logo} className="img-fluid rounded cardfondo" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#faf8f5', padding: '100px 0' }}>
        <div className="container">
          <div className="text-center mb-5 fade-in-gallery">
            <h2 style={{ fontSize: '3rem', color: '#8b5a3c', marginBottom: '20px', letterSpacing: '4px', fontFamily: 'Georgia, serif' }}>
              Nuestra Colección Completa
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#a67c52', maxWidth: '600px', margin: '0 auto' }}>
              Explora nuestra selección cuidadosamente curada de materiales de alta calidad
            </p>
          </div>

          <div className="row g-4 mb-5">
            {/* Card 1 - Hilos */}
            <div className="col-md-4">
              <div className="gallery-card fade-in-gallery">
                <div className="gallery-card-image">
                  <img src={lana} alt="Hilos" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gallery-card-content">
                  <span className="gallery-category">Hilos</span>
                  <h3 className="gallery-title">Hilo de Coser de Algodón</h3>
                  <p className="gallery-description">
                    Esencial para cualquier proyecto de costura a mano o a máquina. Está compuesto de algodón 100% de alta calidad, lo que lo hace resistente y suave al tacto.
                  </p>
                  <div className="gallery-features">
                    <span className="feature-badge">100% Algodón</span>
                    <span className="feature-badge">Resistente</span>
                    <span className="feature-badge">Suave</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gallery-card fade-in-gallery">
                <div className="gallery-card-image">
                  <img src={aguja} alt="Agujas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gallery-card-content">
                  <span className="gallery-category">Herramientas</span>
                  <h3 className="gallery-title">Agujas para Coser a Mano</h3>
                  <p className="gallery-description">
                    Son un conjunto de agujas de diferentes longitudes y grosores (finas para telas delicadas, gruesas para tejidos de punto o alfombras).
                  </p>
                  <div className="gallery-features">
                    <span className="feature-badge">Variedad</span>
                    <span className="feature-badge">Duraderas</span>
                    <span className="feature-badge">Profesional</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="gallery-card fade-in-gallery">
                <div className="gallery-card-image">
                  <img src={boton} alt="Botones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="gallery-card-content">
                  <span className="gallery-category">Botones</span>
                  <h3 className="gallery-title">Botones de Plástico Liso</h3>
                  <p className="gallery-description">
                    Los botones más comunes y versátiles que existen. Suelen ser de plástico liso, en colores básicos (blanco, negro, marrón, azul marino, beige) y con 4 agujeros para coserlos.
                  </p>
                  <div className="gallery-features">
                    <span className="feature-badge">Versátil</span>
                    <span className="feature-badge">Colores básicos</span>
                    <span className="feature-badge">Duradero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-primary btn-lg px-5">
              Ver Todos los Productos
            </button>
          </div>
        </div>

        <div className="bg-white py-5 mt-5">
          <div className="container">
            <div className="text-center mb-5 fade-in-gallery">
              <h2 style={{ fontSize: '2.5rem', color: '#8b5a3c', marginBottom: '20px', letterSpacing: '3px', fontFamily: 'Georgia, serif' }}>
                Paleta de Colores
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#5c4033', marginBottom: '40px' }}>
                Encuentra el tono perfecto entre nuestra amplia gama de colores
              </p>
            </div>
            <div className="d-flex justify-content-center flex-wrap gap-4 fade-in-gallery">
              {[
                { color: '#e74c3c', label: 'Rojo' },
                { color: '#3498db', label: 'Azul' },
                { color: '#2ecc71', label: 'Verde' },
                { color: '#f39c12', label: 'Naranja' },
                { color: '#9b59b6', label: 'Morado' },
                { color: '#e91e63', label: 'Rosa' }
              ].map((item, index) => (
                <div key={index} className="thread-spool-container">
                  <div className="thread-spool-body">
                    <div className="thread-line" style={{ background: item.color, top: '25%' }}></div>
                    <div className="thread-line" style={{ background: item.color, top: '45%', opacity: 0.8 }}></div>
                    <div className="thread-line" style={{ background: item.color, top: '65%' }}></div>
                  </div>
                  <div className="thread-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #f5e6d3 0%, #faf8f5 100%)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="text-center mb-5 fade-in-gallery">
            <h2 style={{ fontSize: '3rem', color: '#8b5a3c', marginBottom: '20px', letterSpacing: '4px', fontFamily: 'Georgia, serif' }}>
              Proceso Artesanal
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#a67c52', maxWidth: '600px', margin: '0 auto' }}>
              De la selección a la creación: tu proyecto paso a paso
            </p>
          </div>

          <div className="timeline-thread"></div>

          <div className="timeline-container">
            {[
              {
                step: '01',
                icon: '🎯',
                title: 'Selección',
                description: 'Elige entre nuestra amplia variedad de materiales premium. Asesoramiento personalizado para tu proyecto.',
                color: '#d4a574',
                side: 'left'
              },
              {
                step: '02',
                icon: '✂️',
                title: 'Preparación',
                description: 'Corta, mide y organiza tus materiales. Herramientas profesionales a tu disposición.',
                color: '#e8b4b8',
                side: 'right'
              },
              {
                step: '03',
                icon: '🧵',
                title: 'Creación',
                description: 'Dale vida a tu proyecto. Técnicas tradicionales combinadas con innovación moderna.',
                color: '#a8c69f',
                side: 'left'
              },
              {
                step: '04',
                icon: '✨',
                title: 'Acabado',
                description: 'Los detalles finales marcan la diferencia. Perfección en cada puntada.',
                color: '#c49563',
                side: 'right'
              }
            ].map((item, index) => (
              <div key={index} className={`timeline-item timeline-${item.side} fade-in-gallery`}>
                <div className="timeline-content" style={{ borderColor: item.color }}>
                  <div className="timeline-step" style={{ background: item.color }}>{item.step}</div>
                  <div className="timeline-icon" style={{ fontSize: '3rem' }}>{item.icon}</div>
                  <h3 className="timeline-title" style={{ color: item.color }}>{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <div className="timeline-decoration" style={{ background: item.color }}></div>
                </div>
                <div className="timeline-needle" style={{ background: item.color }}>
                  <div className="needle-eye"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="background-needles">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="floating-needle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`
            }}>
              ✂️
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold text-1 mb-4">Sobre la Tienda de Costura</h2>
              <p className="text-muted mb-4">
                Somos tu aliado en todos tus proyectos creativos. 
                Ofrecemos productos de calidad, asesoramiento especializado y un ambiente acogedor 
                para amantes de las manualidades.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Productos de primera calidad
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Asesoramiento personalizado
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Envíos a todo el país
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Talleres y cursos especializados
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="about-image bg-secondary rounded text-center text-white mt-4 mt-lg-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.7306657834115!2d-68.1630261351001!3d-16.508577777745042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf9f3ccb20f7%3A0x1546d703d9cf36a9!2s12%20de%20Octubre%2C%20El%20Alto!5e1!3m2!1ses-419!2sbo!4v1762741155813!5m2!1ses-419!2sbo" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-light">
        <div className="container-fluid fondoF p-5">
          <div className="row g-4">
            <div className="col-md-6">
              <h5 className="fw-bold mb-3 text-light">Mercería Amelia</h5>
              <p className="text-light">
                Tu tienda de confianza para hilados, telas y accesorios de costura.
              </p>
              <div className="social-icons mt-4">
                <a href="#" className="me-3 hover-icon">
                  <i className="bi bi-facebook fs-5 text-white"></i>
                </a>
                <a href="#" className="me-3 hover-icon">
                  <i className="bi bi-instagram fs-5 text-white"></i>
                </a>
                <a href="#" className="me-3 hover-icon">
                  <i className="bi bi-whatsapp fs-5 text-white"></i>
                </a>
                <a href="#" className="hover-icon">
                  <i className="bi bi-envelope fs-5 text-white"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <h6 className="fw-bold mb-3 text-brown-light">Contacto</h6>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-geo-alt me-2 text-brown-light"></i>
                  <span>Zona 12 de Octubre Calle Raul Salmon entre calle 4 y calle 3</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone me-2 text-brown-light"></i>
                  <span>+591 11223344</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-whatsapp me-2 text-brown-light"></i>
                  <span>+591 11223344</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope me-2 text-brown-light"></i>
                  <span>info@merceriacamelia.com</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-clock me-2 text-brown-light"></i>
                  <span>Lun-Vie: 9:00-21:00 Sáb: 9:00-16:00</span>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4 border-secondary" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-white mb-2 mb-md-0">
                &copy; 2025 La Caja de Costura. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <a href="#" className="text-white text-decoration-none me-3 hover-text">
                  Términos y Condiciones
                </a>
                <a href="#" className="text-white text-decoration-none hover-text">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}