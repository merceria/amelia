import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../assets/inicio/styles.css';

export default function Inicio() {
  return (
    <div className="inicio-container">
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-brown mb-4">Mercería Creativa</h1>
              <p className="lead text-muted mb-4">
                Todo para tus proyectos de costura, tejido y manualidades. 
                Encuentra los mejores hilados, telas y accesorios de calidad.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-primary btn-lg px-4 py-2">
                  Ver Productos
                </button>
                <button className="btn btn-outline-primary btn-lg px-4 py-2">
                  Ofertas Especiales
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image bg-secondary rounded p-5 text-center text-white mt-4 mt-lg-0">
                <i className="bi bi-scissors display-1"></i>
                <p className="mt-3">Imagen de productos de mercería</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-section py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-brown">Nuestras Categorías</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">🧶</div>
                  <h5 className="card-title fw-bold mt-3">Hilados</h5>
                  <p className="card-text text-muted">
                    Lanas, hilos de algodón, acrílicos y mezclas para todo tipo de proyectos
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">✂️</div>
                  <h5 className="card-title fw-bold mt-3">Telas</h5>
                  <p className="card-text text-muted">
                    Amplia variedad de telas por metro: algodón, lino, seda y más
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">🪡</div>
                  <h5 className="card-title fw-bold mt-3">Accesorios</h5>
                  <p className="card-text text-muted">
                    Agujas, cierres, botones, cintas y todo lo necesario para tus creaciones
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body text-center p-4">
                  <div className="category-icon display-1 text-brown">📚</div>
                  <h5 className="card-title fw-bold mt-3">Patrones</h5>
                  <p className="card-text text-muted">
                    Guías, patrones y consejos para tus proyectos de costura y tejido
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-brown">Productos Destacados</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="product-image bg-secondary rounded-top d-flex align-items-center justify-content-center text-white" style={{height: '200px'}}>
                  <i className="bi bi-droplet display-4"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Lana Merino Extra Fina</h5>
                  <p className="card-text text-muted">
                    Lana 100% merino de la más alta calidad para tus proyectos más especiales.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 text-primary mb-0">$12.990</span>
                    <button className="btn btn-outline-primary btn-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="product-image bg-secondary rounded-top d-flex align-items-center justify-content-center text-white" style={{height: '200px'}}>
                  <i className="bi bi-grid-3x3 display-4"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Tela de Algodón Estampada</h5>
                  <p className="card-text text-muted">
                    Hermosas telas de algodón con diseños exclusivos para tus creaciones.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 text-primary mb-0">$8.500/m</span>
                    <button className="btn btn-outline-primary btn-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="product-image bg-secondary rounded-top d-flex align-items-center justify-content-center text-white" style={{height: '200px'}}>
                  <i className="bi bi-tools display-4"></i>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bold">Kit de Agujas de Tejer</h5>
                  <p className="card-text text-muted">
                    Set completo de agujas de diferentes medidas para todos tus proyectos.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 text-primary mb-0">$15.990</span>
                    <button className="btn btn-outline-primary btn-sm">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary btn-lg px-5">
              Ver Todos los Productos
            </button>
          </div>
        </div>
      </section>

      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold text-brown mb-4">Sobre Mercería Creativa</h2>
              <p className="text-muted mb-4">
                Con más de 15 años en el mercado, somos tu aliado en todos tus proyectos creativos. 
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
              <div className="about-image bg-secondary rounded p-5 text-center text-white mt-4 mt-lg-0">
                <i className="bi bi-shop display-1"></i>
                <p className="mt-3">Imagen de nuestra tienda</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}