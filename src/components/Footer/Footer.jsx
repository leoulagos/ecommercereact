import React from 'react';
import './Footer.css'; // 

export default function Footer () {
    return (
        <footer className="pie_de_pagina">
            <div className="contenido_pie_de_pagina">
                <div className="seccion_pie_de_pagina sobre_nosotros">
                    <h2 className="texto_logo">PCUP - Computacion & Electronica</h2>
                    <p>Tu tienda de confianza para todo lo relacionado con computadoras y accesorios.</p>
                    <p>Calidad y servicio al cliente son nuestras prioridades.</p>
                </div>
                <div className="seccion_pie_de_pagina enlaces">
                    <h3>Enlaces Rapidos</h3>
                    <ul>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div className="seccion_pie_de_pagina redes_sociales">
                    <h3>Redes Sociales</h3>
                    <div className="iconos_sociales">
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="pie_de_pagina_inferior">
                <p>&copy; 2024 PCUP | Todos los derechos reservados</p>
            </div>
        </footer>

    );
};

