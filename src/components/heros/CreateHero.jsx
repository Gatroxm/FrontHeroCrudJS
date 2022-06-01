import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { createHero } from "../../selectors/heroService";

export const CreateHero = () => {
  const navigate = useNavigate();
  const [formValues, handleInputChange] = useForm({
    nombre: "",
    poder: "",
    description: ""
  });
  const { nombre, poder, description } = formValues;
  const handleCreate = (e) => {
    e.preventDefault();
    createHero(formValues).then((data) => {
      if(data.data.ok){
        navigate("../");
      }
    });
  }
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Crear Heroe</h1>
        <form onSubmit={handleCreate}>
          <div className="form-group mb-3">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="nombre"
              className="form-control"
              placeholder="Nombre"
              value={nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="superPoder">Super Poder</label>
            <input
              type="text"
              id="superPoder"
              name="poder"
              className="form-control"
              placeholder="Super Poder"
              value={poder}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description">Descripcion</label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-control"
              placeholder="Descripcion"
              value={description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
