# Calculadora de Préstamos y Tabla de Amortización 📊💰

Este proyecto es una aplicación web desarrollada con **Next.js**, **React** y **JavaScript**, que permite calcular la **cuota mensual** de un préstamo, el **total a pagar**, los **intereses generados**, y genera automáticamente una **tabla de amortización completa**, siguiendo el sistema francés.

---

## 🚀 Funcionalidades

✔ Cálculo de cuota mensual usando fórmula financiera  
✔ Cálculo de total a pagar y total de intereses  
✔ Generación dinámica de tabla de amortización mes a mes  
✔ Botón para mostrar / ocultar la tabla  
✔ Formato de moneda RD$ con comas  
✔ Interfaz moderna usando Tailwind CSS  
✔ 100% funcional y listo para presentación

---

## 🧮 Fórmulas utilizadas

### **Interés mensual**
\[
\text{interésMensual} = \frac{\text{tasaAnual}}{100 \times 12}
\]

---

### **Cuota mensual (Sistema Francés – Fórmula de Anualidades)**
\[
\text{cuota} =
\frac{monto \times i}{1 - (1 + i)^{-n}}
\]

Donde:  
- **monto** → cantidad prestada  
- **i** → interés mensual  
- **n** → plazo en meses  

---

### **Por cada mes**
- Interés = saldo × interés mensual  
- Capital amortizado = cuota − interés  
- Nuevo saldo = saldo anterior − capital  

Estas fórmulas están implementadas exactamente dentro del código.

---

## 🧑‍💻 Tecnologías utilizadas

- Next.js  
- React (useState)  
- JavaScript  
- Tailwind CSS  
- HTML / CSS  

---

## 📂 Cómo ejecutar el proyecto localmente

Asegúrate de tener instalado **Node.js 16+**.

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO

 ### 2️⃣ Instalar dependencias
npm install

  ### 3️⃣ Ejecutar en modo desarrollo
npm run dev
Abrir en el navegador:
👉 http://localhost:3000

## 📸 Capturas de pantalla

### Vista Principal
![Home](public/screenshots/home.png)

### Resultados del Cálculo
![Calculo](public/screenshots/calculo.png)

### Tabla de Amortización
![Tabla](public/screenshots/tabla.png)

✨ Autor

Yeivi Lorenzo De Óleo – Proyecto Final de Programación Web 2025