function cambiarFechaCopyright() {
        let año = new Date().getFullYear();
        let textoFooter = document.getElementById('texto-copyright');
        textoFooter.textContent = `© ${año} Juan José Valero Durán. Todos los derechos reservados.`;
    }

window.onload = cambiarFechaCopyright;