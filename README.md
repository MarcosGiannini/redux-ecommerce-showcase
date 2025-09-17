# 🛒 Redux E-commerce Showcase

> Una aplicación de carrito de la compra limpia y moderna construida para demostrar el manejo avanzado de estado global en React utilizando Redux Toolkit y TypeScript.

![GIF de la aplicación en funcionamiento](URL_DEL_GIF_AQUI)

---

## 🚀 Demo en Vivo

Puedes probar la aplicación desplegada aquí: [**Enlace a la Demo en Vercel**](URL_DE_VERCEL_AQUI)

---

## 🛠️ Tecnologías Utilizadas

* **React** - Librería para la interfaz de usuario.
* **TypeScript** - Para un código robusto y tipado.
* **Redux Toolkit** - Para una gestión de estado predecible y eficiente.
* **React-Redux** - Para conectar Redux con los componentes de React.
* **Vite** - Herramienta de desarrollo y empaquetado ultra-rápida.
* **Tailwind CSS** - Para un diseño moderno y utility-first.

---

## ✨ Características Principales

* **Estado Global Centralizado:** Toda la lógica del carrito (items, precio total) se maneja en el Store de Redux.
* **Dispatch de Acciones:** Interacción del usuario (clic en "Añadir al Carrito") que despacha acciones para mutar el estado.
* **Selección de Estado en Tiempo Real:** Los componentes de la UI se suscriben al estado con `useSelector` y se re-renderizan automáticamente cuando los datos cambian.
* **Tipado de Extremo a Extremo:** Seguridad de tipos desde las acciones de Redux hasta las props de los componentes de React.

---

## ⚙️ Cómo Ejecutar el Proyecto en Local

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/MarcosGiannini/redux-ecommerce-showcase.git](https://github.com/MarcosGiannini/redux-ecommerce-showcase.git)
    ```
2.  **Navega al directorio del proyecto:**
    ```bash
    cd redux-ecommerce-showcase
    ```
3.  **Instala las dependencias:**
    ```bash
    npm install
    ```
4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
5.  Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.