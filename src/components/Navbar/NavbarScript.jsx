import React, { useEffect } from 'react';

export default function NavbarScript() {
    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar');

        const handleToggle = () => {
            navbar.classList.toggle('active');
        };

        menuToggle.addEventListener('click', handleToggle);

        // Limpieza del evento cuando el componente se desmonta

        return () => {
            menuToggle.removeEventListener('click', handleToggle);
        };
    }, []);

    return null; // ¿
};


