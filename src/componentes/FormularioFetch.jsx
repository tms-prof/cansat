import React, { useState } from "react";

export default function FormularioFetch() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwBYZLyTJRP5mOIQQpgNitoSIZLQAv0lPpLM6nsqHnH3xKH5PPP8WDoU9r0Ti2gWfrnzA/exec",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        setFormData("Enviado com sucesso!");
        form.reset();
      } else {
        setFormData("Erro no envio.");
      }
    } catch (error) {
      console.error(error);
      setFormData("Erro de rede.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Seu nome" required />
      <input name="email" type="email" placeholder="Seu email" required />
      <textarea name="mensagem"></textarea>
      <button type="submit">Enviar</button>
      <p>{formData}</p>
    </form>
  );
}
