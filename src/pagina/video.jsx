import React, { useEffect } from 'react';

export default function Video() {
  useEffect(() => {
    // Importar Bootstrap JS dinámicamente
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet"
      />
      
      <div className="container py-5">
        <h1 className="text-center mb-5">Videos Explicativos</h1>
        
        {/* Carrusel de Videos */}
        <div id="videoCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#videoCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Video 1"></button>
            <button type="button" data-bs-target="#videoCarousel" data-bs-slide-to="1" aria-label="Video 2"></button>
          </div>
          
          <div className="carousel-inner">
            {/* Video 1 */}
            <div className="carousel-item active">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/odN3uYWjwUU" 
                  title="DiagramaContexto" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
            
            {/* Video 2 - Reemplaza con tu segundo código de inserción */}
            <div className="carousel-item">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/ZoNVRtqkaCc" 
                  title="Video 2" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enlaces */}
        <div className="mt-5 ps-3">
          <h5 className="mb-3 text-muted">Enlaces directos</h5>
          <div className="d-flex flex-column gap-2">
            <a 
              href="https://app.diagrams.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none text-dark"
              style={{ fontSize: '0.95rem' }}
            > 
              → Diagram IO   (video 1)
            </a>
            <a 
              href="https://excalidraw.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-decoration-none text-dark"
              style={{ fontSize: '0.95rem' }}
            >
              → Excalidraw  (video 2)
            </a>
          </div>
        </div>
      </div>
    </>
  );
}