# Instrucciones para ejecutar las automatizaciones de cypress

Este documento explica los pasos para clonar el repositorio de automatizaciones en cypress, instalar las dependencias y ejecutar los test.

## Pasos para Clonar el Repositorio

### 1. **Tener git instalado**

Primero, necesitas tener **Git** instalado en tu computadora. Si aún no lo tienes, sigue estos pasos:

- **Windows/Mac/Linux:**
    - Dirígete a [https://git-scm.com/downloads](https://git-scm.com/downloads) y descarga el instalador para tu sistema operativo.
    - Durante la instalación, asegúrate de seleccionar la opción para agregar Git al PATH.

### 2. **Obtén la URL del Repositorio**

- Ve al repositorio de GitHub https://github.com/LuisMHB/project-automation
- Haz clic en el botón verde **Code** ubicado en la parte superior derecha del repositorio.
- Copia la URL del repositorio. Puede ser una URL **HTTPS** o **SSH**, dependiendo de tu preferencia y configuración de acceso:

    - **HTTPS:** `https://github.com/username/repository-name.git`
    - **SSH:** `git@github.com:username/repository-name.git`

### 3. **Abre la Terminal o la Consola de Comandos**

Dependiendo de tu sistema operativo:

- **Windows:** Abre Git Bash o la Terminal de Windows.
- **Mac/Linux:** Abre la aplicación de Terminal.

### 4. **Clona el Repositorio**

En la terminal, navega a la carpeta donde quieres clonar el repositorio y ejecuta el siguiente comando, reemplazando la URL con la que copiaste:


git clone https://github.com/LuisMHB/project-automation.git



# Instalación de Dependencias para Cypress

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados en tu máquina:

1. **Node.js**: Cypress requiere Node.js. Puedes descargarlo desde [https://nodejs.org](https://nodejs.org).
2. **npm**: npm se instala automáticamente con Node.js.

Para verificar si tienes Node.js y npm instalados, ejecuta los siguientes comandos en tu terminal:


node -v y
npm -v


## Ejecutar y seguir cada paso descrito a continuación

1. Ejecuta el siguiente comando en tu terminal para inicializar un proyecto en la carpeta actual. Esto generará un archivo `package.json`:


npm init

2. Agrega Cypress como una dependencia de desarrollo con el siguiente comando:

npm install cypress --save-dev --force


3. Instala el plugin cypress-plugin-api, que será útil para probar endpoints:

npm i cypress-plugin-api


4. Abre el Test Runner de Cypress con este comando:

npx cypress open


5. Selecciona la opción E2E Testing en el Test Runner de Cypress y haz clic en Continuar.

6. Elige un navegador compatible desde la lista proporcionada por Cypress y haz clic en Start E2E Testing para comenzar.

7. En la sección Specs, selecciona el archivo automationExercise.cy.js. El primer caso de prueba se ejecutará automáticamente.

8. Regresa a la sección Specs. Selecciona el archivo testEndpoints.cy.js. El segundo caso de prueba se ejecutará automáticamente.
