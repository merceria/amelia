// MA.jsx
import { useState } from 'react';
import logo from '../assets/MA/dc.jpg';
import '../assets/MA/styles.css';

export default function MA() {
  const [activeCategory, setActiveCategory] = useState('cliente');

  return (
    <div className="ma-wrapper">
      <div className="ma-container">

        <header className="ma-header">
          <div className="ma-header-decoration"></div>
          <h1 className="ma-main-title">Modelo Ambiental</h1>
          <p className="ma-main-subtitle">Sistema de Gestión de Ventas - Análisis Estructurado</p>
        </header>

        <section className="ma-section">
          <div className="ma-card">
            <div className="ma-card-header">
              <svg className="ma-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="ma-card-title">Declaración de Propósito</h2>
            </div>
            <div className="ma-card-body">
              <div className="ma-purpose-grid">
                <div className="ma-purpose-item">
                  <p className="ma-purpose-text">
                    <span className="ma-purpose-badge ma-badge-blue">¿Qué?</span>
                    <span><strong>Sistema de ventas para una Mercería</strong> el cual se enfoca en vender lanas e hilos y una variedad de estambres.</span>
                  </p>
                </div>
                <div className="ma-purpose-item">
                  <p className="ma-purpose-text">
                    <span className="ma-purpose-badge ma-badge-teal">¿Cómo?</span>
                    <span>Registrando los productos, gestionando inventario y facilitando transacciones de compra y venta.</span>
                  </p>
                </div>
                <div className="ma-purpose-item">
                  <p className="ma-purpose-text">
                    <span className="ma-purpose-badge ma-badge-green">¿Dónde?</span>
                    <svg className="ma-location-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span><strong>Mercería Calderon</strong> - Zona 12 de Octubre Calle Raul Salmon entre calle 4 y calle 3</span>
                  </p>
                </div>
              </div>
              <div className="ma-objective">
                <svg className="ma-objective-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <div>
                  <strong className="ma-objective-title">Objetivo del Sistema</strong>
                  <p className="ma-objective-text">
                    Realizar el modelo ambiental, bajo el paradigma de análisis estructurado un sistema de ventas de hilados que permite el registro, compra, venta y gestión de productos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ma-section">
          <div className="ma-card">
            <div className="ma-card-header">
              <svg className="ma-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <h2 className="ma-card-title">Diagrama de Contexto</h2>
            </div>
            
            <div className="ma-card-body">
              <div className="ma-diagram-wrapper">
                <img 
                  src={logo} 
                  className="ma-diagram-img"
                  alt="Diagrama de Contexto - Sistema de Ventas"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="ma-section">
          <div className="ma-card">
            <div className="ma-card-header">
              <svg className="ma-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h2 className="ma-card-title">Lista de Acontecimientos</h2>
            </div>
            
            <div className="ma-card-body">
              <div className="ma-tabs-container">
                <button 
                  className={`ma-tab-button ${activeCategory === 'cliente' ? 'ma-tab-active' : ''}`}
                  onClick={() => setActiveCategory('cliente')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                  <span>Cliente</span>
                </button>
                
                <button 
                  className={`ma-tab-button ${activeCategory === 'vendedor' ? 'ma-tab-active' : ''}`}
                  onClick={() => setActiveCategory('vendedor')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <span>Vendedor</span>
                </button>
                
                <button 
                  className={`ma-tab-button ${activeCategory === 'proveedor' ? 'ma-tab-active' : ''}`}
                  onClick={() => setActiveCategory('proveedor')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 3h15v13H1zM16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
                    <circle cx="5.5" cy="18.5" r="2.5"/>
                    <circle cx="18.5" cy="18.5" r="2.5"/>
                  </svg>
                  <span>Proveedor</span>
                </button>
              </div>

              <div className="ma-tab-content">
                {activeCategory === 'cliente' && (
                  <div className="ma-event-card">
                    <div className="ma-event-card-header ma-client-header">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                      <h3>Eventos del Cliente</h3>
                    </div>
                    <ul className="ma-event-list">
                      <li className="ma-event">
                        <span className="ma-event-number">01</span>
                        <p>Cliente se registra en el sistema, el sistema confirma el registro del cliente</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">02</span>
                        <p>Cliente inicia sesión, el sistema valida la sesión</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">03</span>
                        <p>Cliente cierra sesión</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">04</span>
                        <p>Cliente selecciona un producto</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">05</span>
                        <p>Cliente solicita pagar un producto, el sistema le muestra métodos de pago</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">06</span>
                        <p>Cliente ingresa sus datos personales</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">07</span>
                        <p>Cliente paga producto, el sistema genera la factura</p>
                      </li>
                    </ul>
                  </div>
                )}

                {activeCategory === 'vendedor' && (
                  <div className="ma-event-card">
                    <div className="ma-event-card-header ma-seller-header">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2"/>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                      </svg>
                      <h3>Eventos del Vendedor</h3>
                    </div>
                    <ul className="ma-event-list">
                      <li className="ma-event">
                        <span className="ma-event-number">01</span>
                        <p>Vendedor inicia sesión</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">02</span>
                        <p>Vendedor cierra sesión</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">03</span>
                        <p>Vendedor registra una venta</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">04</span>
                        <p>Vendedor actualiza el stock</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">05</span>
                        <p>Vendedor genera una factura</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">06</span>
                        <p>Vendedor consulta reportes de ventas, el sistema le muestra el reporte de ventas</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">07</span>
                        <p>Vendedor consulta reporte de pedido, el sistema muestra reportes del pedido</p>
                      </li>
                    </ul>
                  </div>
                )}

                {activeCategory === 'proveedor' && (
                  <div className="ma-event-card">
                    <div className="ma-event-card-header ma-supplier-header">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 3h15v13H1zM16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
                        <circle cx="5.5" cy="18.5" r="2.5"/>
                        <circle cx="18.5" cy="18.5" r="2.5"/>
                      </svg>
                      <h3>Eventos del Proveedor</h3>
                    </div>
                    <ul className="ma-event-list">
                      <li className="ma-event">
                        <span className="ma-event-number">01</span>
                        <p>Proveedor envía datos de nuevos productos, el sistema envía pedidos de reposición</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">02</span>
                        <p>Proveedor envía precios y disponibilidad</p>
                      </li>
                      <li className="ma-event">
                        <span className="ma-event-number">03</span>
                        <p>El sistema envía comprobante de compra/pago</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}