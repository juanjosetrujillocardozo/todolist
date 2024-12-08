/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos de la carpeta src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Azul personalizado para botones y enlaces
        secondary: '#fbbf24', // Amarillo personalizado
        background: '#f9fafb', // Fondo claro
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Soporte para estilos predeterminados de formularios
  ],
};
