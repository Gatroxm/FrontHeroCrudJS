import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/heroService";

export const ViewHero = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [hero, setHeroes] = useState({})
  let defaultValues = {
    nombre: "",
    poder: "",
    description: ""
  }
  useEffect(() => {
    getHeroById(parseFloat(params.id)).then((data) => {
      if (data.data.ok) {
        console.log(data.data.heroe)
        setHeroes(data.data.heroe[0])
      }
    });
  },[])
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Detalle de Heroes</h1>
        <ul className="list-grou">
            <li className="list-group-item"><strong>Nombre :</strong> {hero.nombre}</li>
            <li className="list-group-item"><strong>Descripcion :</strong> {hero.description}</li>
            <li className="list-group-item"><strong>Super Poder :</strong> {hero.poder}</li>
        </ul>
      </div>
    </div>
  );
};
