// Función para cambiar de sección
const menuItems = document.querySelectorAll('.sidebar .menu ul li a');
const sections = document.querySelectorAll('.main-content section');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        // Eliminar la clase 'active' de todos los elementos del menú
        menuItems.forEach(i => i.classList.remove('active'));
        // Agregar la clase 'active' al item seleccionado
        e.target.classList.add('active');
        
        // Ocultar todas las secciones
        sections.forEach(section => section.classList.add('hidden'));
        
        // Mostrar la sección correspondiente
        const sectionId = e.target.getAttribute('href').substring(1);
        const selectedSection = document.getElementById(sectionId);
        selectedSection.classList.remove('hidden');
    });
});
