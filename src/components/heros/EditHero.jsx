import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { updateHero } from '../../selectors/heroService';

export const EditHero = () => {
  const params = useParams();
  const navigate = useNavigate();
  let defaultValues = {
    nombre: "",
    poder: "",
    description: ""
  };
  const getData =() => {

    const heros = JSON.parse(localStorage.getItem("heroes"));
    const heroById = heros.find(
      (resp) => resp.id === parseFloat(params.id)
    );
    return heroById;
  }
  defaultValues = getData();
  const [formValues, handleInputChange] = useForm({
    nombre: defaultValues.nombre,
    poder: defaultValues.poder,
    description: defaultValues.description
  });
  const { nombre, poder, description } = formValues;
  const handleEdit = (e) => {
    e.preventDefault();
    const hero = {
      id: parseFloat(params.id),
      nombre,
      poder,
      description
    }
    updateHero(hero).then((data) => {
      console.log(data)
      if(data.data.ok){
        navigate("../heros/list");
      }
    });
  }
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Editar Heroe {nombre}</h1>
        <form onSubmit={handleEdit}>
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
  )
}
