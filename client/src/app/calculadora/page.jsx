

"use client";

import { useState } from "react";

export default function App() {
  const [monto, setMonto] = useState(300000);
  const [tasa, setTasa] = useState(10);
  const [plazo, setPlazo] = useState(18);
  const [mostrarTabla, setMostrarTabla] = useState(false);

  // Interés mensual
  const interesMensual = tasa / 100 / 12;

  // Fórmula de cuota mensual
  const cuota =
    (monto * interesMensual) /
    (1 - Math.pow(1 + interesMensual, -plazo));

  const totalPagar = cuota * plazo;
  const totalInteres = totalPagar - monto;

  // Generar tabla
  const generarTabla = () => {
    const tabla = [];
    let saldo = monto;

    for (let i = 1; i <= plazo; i++) {
      const interes = saldo * interesMensual;
      const capital = cuota - interes;
      saldo -= capital;

      tabla.push({
        num: i,
        cuota: cuota,
        interes: interes,
        capital: capital,
        saldo: saldo < 0 ? 0 : saldo,
      });
    }
    return tabla;
  };

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Calculadora de Préstamos 💰✨
      </h1>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        {/* Monto */}
        <div className="bg-white p-4 rounded-xl shadow">
          <label className="font-semibold block mb-1">💲 Monto del Préstamo</label>

          <input
            type="number"
            value={monto}
            min={1000}
            onChange={(e) => setMonto(Number(e.target.value))}
            className="block p-2 border rounded w-full"
          />

          <p className="text-sm text-green-600 font-semibold mt-1">
            {monto.toLocaleString("es-DO", {
              style: "currency",
              currency: "DOP",
            })}
          </p>
        </div>

        {/* Tasa */}
        <div className="bg-white p-4 rounded-xl shadow">
          <label className="font-semibold block mb-1">% Tasa Anual</label>

          <input
            type="number"
            value={tasa}
            min={0}
            onChange={(e) => setTasa(Number(e.target.value))}
            className="block p-2 border rounded w-full"
          />

          <p className="text-sm text-pink-600 font-semibold mt-1">
            {tasa}% anual
          </p>
        </div>

        {/* Plazo */}
        <div className="bg-white p-4 rounded-xl shadow">
          <label className="font-semibold block mb-1">📆 Plazo (meses)</label>

          <input
            type="number"
            value={plazo}
            min={1}
            onChange={(e) => setPlazo(Number(e.target.value))}
            className="block p-2 border rounded w-full"
          />

          <p className="text-sm text-purple-600 font-semibold mt-1">
            {plazo} meses
          </p>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold">Cuota Mensual 📅</h3>
          <p className="text-2xl mt-2">
            {cuota.toLocaleString("es-DO", {
              style: "currency",
              currency: "DOP",
            })}
          </p>
        </div>

        <div className="bg-pink-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold">Total a Pagar 💲</h3>
          <p className="text-2xl mt-2">
            {totalPagar.toLocaleString("es-DO", {
              style: "currency",
              currency: "DOP",
            })}
          </p>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold">Total Intereses %</h3>
          <p className="text-2xl mt-2">
            {totalInteres.toLocaleString("es-DO", {
              style: "currency",
              currency: "DOP",
            })}
          </p>
        </div>
      </div>

      {/* Botón */}
      <button
        onClick={() => setMostrarTabla(!mostrarTabla)}
        className="mt-8 px-4 py-2 bg-red-600 text-white rounded-lg text-center mx-auto block text-sm hover:bg-red-700 duration-200"
      >
        {mostrarTabla ? "Ocultar Tabla 🔽" : "Ver Tabla de Amortización 📊"}
      </button>

      {/* Tabla */}
      {mostrarTabla && (
        <table className="w-full mt-10 border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="p-2 border">N°</th>
              <th className="p-2 border">Cuota 💸</th>
              <th className="p-2 border">Interés 💖</th>
              <th className="p-2 border">Capital 💜</th>
              <th className="p-2 border">Saldo 💙</th>
            </tr>
          </thead>

          <tbody>
            {generarTabla().map((fila) => (
              <tr key={fila.num}>
                <td className="p-2 border text-center">{fila.num}</td>

                <td className="p-2 border text-green-600 font-semibold">
                  {fila.cuota.toLocaleString("es-DO", {
                    style: "currency",
                    currency: "DOP",
                  })}
                </td>

                <td className="p-2 border text-pink-500 font-semibold">
                  {fila.interes.toLocaleString("es-DO", {
                    style: "currency",
                    currency: "DOP",
                  })}
                </td>

                <td className="p-2 border text-purple-500 font-semibold">
                  {fila.capital.toLocaleString("es-DO", {
                    style: "currency",
                    currency: "DOP",
                  })}
                </td>

                <td className="p-2 border text-blue-500 font-semibold">
                  {fila.saldo.toLocaleString("es-DO", {
                    style: "currency",
                    currency: "DOP",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
