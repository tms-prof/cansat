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
      "https://script.google.com/macros/s/AKfycbwAU_VrAUj3Wk1bm2P2qV108vx8RNlkJuUkU1AvhyqrjS5S7Y1eX2QmrzkJImNdeaXNrA/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      alert("Enviado com sucesso!" + result);
    } catch (err) {
      alert("Erro ao enviar." + err);
    }
  };

  return (
    <form className="forms" onSubmit={handleSubmit}>
      <input name="nome" onChange={handleChange} placeholder="Nome" />
      <br />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <br />
      <textarea
        name="mensagem"
        onChange={handleChange}
        placeholder="Mensagem"
      />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
