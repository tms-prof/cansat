import { useState } from "react";

export default function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwVHFtDzaez9w8ydTNExihzZ_vIx89K0_6SUAZpdYN1yKXQlA6RXLi5SjPwrrjqjEhS/exec";

    const form = new FormData();
    form.append("nome", formData.nome);
    form.append("email", formData.email);
    form.append("mensagem", formData.mensagem);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        alert("Enviado com sucesso!");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        alert("Erro ao enviar: " + response.statusText);
      }
    } catch (err) {
      alert("Erro ao enviar: " + err.message);
    }
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <input
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <br />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <textarea
        name="mensagem"
        value={formData.mensagem}
        onChange={handleChange}
        placeholder="Mensagem"
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
