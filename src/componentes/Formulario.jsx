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

  const handleSubmit = () => {
    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        mensagem: "",
      });
    }, 1000); // tempo para garantir que o envio ocorra
  };

  return (
    <form
      action="https://script.google.com/macros/s/AKfycbwBYZLyTJRP5mOIQQpgNitoSIZLQAv0lPpLM6nsqHnH3xKH5PPP8WDoU9r0Ti2gWfrnzA/exec"
      method="POST"
      //target="_blank" // abre nova aba após envio, evita recarregar página
      onSubmit={handleSubmit}
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
