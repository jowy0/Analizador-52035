Analizador Sintáctico
Este proyecto es un analizador léxico, sintáctico e intérprete de un sublenguaje de JavaScript. Fue desarrollado con ANTLR4 y Node.js.

🧠 Características del proyecto

✅ Verifica si la entrada es válida.

🌲 Muestra el árbol de derivación.

📄 Genera una tabla de tokens.

🧮 Interpreta y ejecuta el código si es válido.

📁 Estructura del proyecto

1-Clonar el repositorio 
git clone https://github.com/jowy0/Analizador-52035.git
cd Analizador-52035

2-Instalar Dependencias

npm install
Generar los archivos de ANTLR 

java -jar "antlr-4.13.2-complete (3).jar" -Dlanguage=JavaScript -visitor -o generated javas.g4

Ejecutar el analizador con un archivo de entrada

node index.js
