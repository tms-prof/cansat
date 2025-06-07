import React, { useState } from "react";

export default function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((dados) => ({
      ...dados,
      [name]: value,
    }));
  };

  return (
    <form
      action="https://script.google.com/macros/s/AKfycbwVHFtDzaez9w8ydTNExihzZ_vIx89K0_6SUAZpdYN1yKXQlA6RXLi5SjPwrrjqjEhS/exec"
      method="POST"
      target="_blank" // abre nova aba após envio, evita recarregar página
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "400px",
      }}
    >
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Mensagem:
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}
