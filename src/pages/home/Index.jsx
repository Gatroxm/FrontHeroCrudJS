import React from 'react'

export const Index = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">App Hero</h1>
        <p className="col-md-8 fs-4">Aplicación crud de heroes conetada con MySql
            <br />
            <span>Se ejecuta en el proyecto de front end  
            <code> npm i</code> y <code>npm start</code> para así ejecutar el programa
            </span>
            <br/>
            <span> en el proyecto de backend se ejecutara <code>npm i </code>, <code>npm start</code> y <code>tsc --watch</code> para así ejecutar el programa, la base de datos se encuentra alojada en el folder <strong>DB</strong> con elnombre <code>npde_db.sql</code> la configuración de las conecciones a la base de datos se encuentra en el folder <code>src/mysql/mysql.ts</code> en donde podran cambiar las credenciales por defecto</span>
        </p>
        <button className="btn btn-primary btn-lg" type="button">Ver Listado</button>
      </div>
    </div>
  )
}
