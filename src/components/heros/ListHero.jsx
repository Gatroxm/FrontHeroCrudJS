import React, { useEffect } from 'react'
import { deleteHero, getHeros } from '../../selectors/heroService'

export const ListHero = () => {

    

    const [heroes, setHeroes] = React.useState([])  // estado inicial de heroes
    useEffect(() => {
        if(localStorage.getItem("heroes")){
            localStorage.removeItem("heroes");
        }
        getHeros().then(data => {
            console.log(data)
            if(data.data.ok){
                localStorage.setItem('heroes', JSON.stringify(data.data.heroes))
                setHeroes(data.data.heroes)
            }
        })
    }, [])
    
    const handleClick = (heroId) => {
        deleteHero(heroId).then(data => {
            if(data.data.ok){
                setHeroes(heroes.filter(hero => hero.id !== heroId))
            }
        })
    }
  return (
    <div className="p-0 p-lg-5 mb-0 mb-lg-4 bg-light rounded-3">
        <div className="container-fluid py-0 py-lg-5">
            <a href="./create" className="btn btn-success">Crear</a>
            <h1 className="display-5 fw-bold">Listado de Heroes</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <td>#</td>
                        <th>Nombre</th>
                        <th>Super Poder</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {heroes.map((hero, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{hero.nombre}</td>
                            <td>{hero.poder}</td>
                            <td>
                                <a className="btn btn-primary" href={`./edit/${hero.id}`} >Editar</a>
                                <a className="btn btn-info text-white" href={`./view/${hero.id}`} >Ver</a>
                                <button className="btn btn-danger" onClick={(event) =>
                              handleClick(hero.id)
                            } >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    </div>
  )
}
