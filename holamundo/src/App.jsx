import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    edad: "",
    fechaNacimiento: "",
    experiencia: 5,
    terminos: false,
    lenguajes: [],
    modalidad: "presencial",
    pais: "",
    comentarios: "",
    foto: "",
    colorFavorito: "#2563eb"
  });

  const [resumen, setResumen] = useState(null);
  const [errorCorreo, setErrorCorreo] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === "lenguajes") {
      setFormData((prev) => ({
        ...prev,
        lenguajes: checked
          ? [...prev.lenguajes, value]
          : prev.lenguajes.filter((lenguaje) => lenguaje !== value)
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    if (name === "correo") {
      setErrorCorreo("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo.trim());

    if (!correoValido) {
      setErrorCorreo("Ingresa un correo electrónico válido.");
      return;
    }

    setErrorCorreo("");
    setResumen({ ...formData, foto: formData.foto || "Sin foto de perfil" });
  };

  return (
    <main className="app-shell">
      <section className="form-card">
        <h1>Registro de estudiante</h1>
        <p className="subtitle">Completa tus datos para crear tu perfil.</p>

        <form onSubmit={handleSubmit} className="student-form">
          <label>
            Nombre
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
          </label>

          <label>
            Correo electrónico
            <input type="email" name="correo" value={formData.correo} onChange={handleChange} />
          </label>

          <label>
            Contraseña
            <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} />
          </label>

          <label>
            Edad
            <input type="number" name="edad" min="1" max="120" value={formData.edad} onChange={handleChange} />
          </label>

          <label>
            Fecha de nacimiento
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} />
          </label>

          <label className="range-field">
            <span>Nivel de experiencia: {formData.experiencia}/10</span>
            <input type="range" name="experiencia" min="1" max="10" value={formData.experiencia} onChange={handleChange} />
          </label>

          <label className="checkbox-row">
            <input type="checkbox" name="terminos" checked={formData.terminos} onChange={handleChange} />
            Acepto los términos y condiciones
          </label>

          <fieldset>
            <legend>Lenguajes que conoces</legend>
            <label className="checkbox-row">
              <input type="checkbox" name="lenguajes" value="JavaScript" checked={formData.lenguajes.includes("JavaScript")} onChange={handleChange} />
              JavaScript
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="lenguajes" value="Python" checked={formData.lenguajes.includes("Python")} onChange={handleChange} />
              Python
            </label>
            <label className="checkbox-row">
              <input type="checkbox" name="lenguajes" value="Java" checked={formData.lenguajes.includes("Java")} onChange={handleChange} />
              Java
            </label>
          </fieldset>

          <fieldset>
            <legend>Modalidad</legend>
            <label className="radio-row">
              <input type="radio" name="modalidad" value="presencial" checked={formData.modalidad === "presencial"} onChange={handleChange} />
              Presencial
            </label>
            <label className="radio-row">
              <input type="radio" name="modalidad" value="virtual" checked={formData.modalidad === "virtual"} onChange={handleChange} />
              Virtual
            </label>
          </fieldset>

          <label>
            País
            <select name="pais" value={formData.pais} onChange={handleChange}>
              <option value="">Selecciona un país</option>
              <option value="Colombia">Colombia</option>
              <option value="México">México</option>
              <option value="España">España</option>
              <option value="Argentina">Argentina</option>
            </select>
          </label>

          <label>
            Comentarios
            <textarea name="comentarios" rows="4" value={formData.comentarios} onChange={handleChange} />
          </label>

          <label>
            Foto de perfil
            <input type="file" name="foto" onChange={(event) => {
              const archivo = event.target.files[0];
              setFormData((prev) => ({ ...prev, foto: archivo ? archivo.name : "" }));
            }} />
          </label>

          <label>
            Color favorito
            <input type="color" name="colorFavorito" value={formData.colorFavorito} onChange={handleChange} />
          </label>

          {errorCorreo && <p className="error-text">{errorCorreo}</p>}

          <button type="submit" disabled={!formData.terminos}>
            Enviar
          </button>
        </form>
      </section>

      {resumen && (
        <section className="summary-card">
          <h2>Resumen del registro</h2>
          <ul>
            <li><strong>Nombre:</strong> {resumen.nombre}</li>
            <li><strong>Correo:</strong> {resumen.correo}</li>
            <li><strong>Edad:</strong> {resumen.edad}</li>
            <li><strong>Fecha de nacimiento:</strong> {resumen.fechaNacimiento}</li>
            <li><strong>Experiencia:</strong> {resumen.experiencia}/10</li>
            <li><strong>Aceptó términos:</strong> {resumen.terminos ? "Sí" : "No"}</li>
            <li><strong>Lenguajes:</strong> {resumen.lenguajes.length ? resumen.lenguajes.join(", ") : "Ninguno"}</li>
            <li><strong>Modalidad:</strong> {resumen.modalidad}</li>
            <li><strong>País:</strong> {resumen.pais}</li>
            <li><strong>Comentarios:</strong> {resumen.comentarios || "Sin comentarios"}</li>
            <li><strong>Foto:</strong> {resumen.foto}</li>
            <li><strong>Color favorito:</strong> {resumen.colorFavorito}</li>
          </ul>
        </section>
      )}
    </main>
  );
}

export default App;
