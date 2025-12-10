import '../assets/contacto/styles.css';

export default function Contacto() {
  const integrantes = [
    "Quispe Choque Ivone    (MODELO AMBIENTAL, RECOPILACION INFORME)",
    "Angulo Balboa Brian    (PAGINA, MARCO TEORICO, VIDEO)",
    "Guadalajara Rojar Omir Nick    (PARADIGMA ORIENTADO A OBJETOS, DICCIONARIO DE DATOS)",
    "Maraza Cantuta Elian David     (DICCIONARIO DE DATOS)",
    "Cruz Saavedra Victor Adrian    (DIAGRAMA GENERAL, DIAGRAMA DE FLUJO DE DATOS,DIAGRAMA DE TRANSICION DE ESTADOS)",
  ];

  return (
    <div className="contacto-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h1 className="contacto-titulo text-center mb-4">Contacto</h1>
            
            <div className="contacto-grupo-card card shadow-sm">
              <div className="card-body p-4">
                <h2 className="contacto-grupo-titulo text-center mb-4">
                  GRUPO 1: INTEGRANTES
                </h2>
                <ol className="contacto-lista-integrantes list-group list-group-numbered">
                  {integrantes.map((integrante, index) => (
                    <li key={index} className="contacto-item-integrante list-group-item">
                      {integrante}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}