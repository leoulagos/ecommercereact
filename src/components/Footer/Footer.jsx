import React from 'react';
import './Footer.css'; // 

export default function Footer () {
    return (
        <footer class="pie_de_pagina">
            <div class="contenido_pie_de_pagina">
                <div class="seccion_pie_de_pagina sobre_nosotros">
                    <h2 class="texto_logo">PCUP - Computacion & Electronica</h2>
                    <p>Tu tienda de confianza para todo lo relacionado con computadoras y accesorios.</p>
                    <p>Calidad y servicio al cliente son nuestras prioridades.</p>
                </div>
                <div class="seccion_pie_de_pagina enlaces">
                    <h3>Enlaces Rapidos</h3>
                    <ul>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div class="seccion_pie_de_pagina redes_sociales">
                    <h3>Redes Sociales</h3>
                    <div class="iconos_sociales">
                        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div class="pie_de_pagina_inferior">
                <p>&copy; 2024 PCUP | Todos los derechos reservados</p>
            </div>
        </footer>

    );
};

