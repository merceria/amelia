import React from 'react';
import logo from '../assets/POO/poo.jpg';
import '../assets/POO/styles.css';

export default function POO() {
  return (
    <div className="poo-wrapper">
      <div className="poo-container">

        <header className="poo-header">
          <h1 className="poo-main-title">Paradigma Orientado a Objetos</h1>
          <p className="poo-main-subtitle">Análisis y Diseño del Sistema</p>
        </header>

        <section className="poo-section">
          <div className="poo-card">
            <div className="poo-card-header">
              <svg className="poo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              <h2 className="poo-card-title">Diagrama de Clases del Sistema</h2>
            </div>
            
            <div className="poo-card-body">
              <div className="poo-diagram-wrapper">
                <img 
                  src={logo} 
                  className="poo-diagram-img"
                  alt="Diagrama de Clases - Paradigma Orientado a Objetos"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}