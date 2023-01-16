import React, { useEffect, useState } from "react";
import axios from "axios";
import Editar from "./Editar";
import { Link } from "react-router-dom";

function Listar() {
    const [usuarios, setUsuarios] = useState([])

    const elementoUsuario = usuarios.map((usuarios, i) => (

        <div class="col-4 mt-4">
            <div class="card" key={i}>
                <img src="/images/perfil.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Nombre: {usuarios.nombre}</p>
                    <p class="card-text">Id_electoral:{usuarios._id}</p>
                    <p class="card-text">Curp: {usuarios.Curp}</p>
                    <p class="card-text">Edad: {usuarios.Edad}</p>
                    <p class="card-text">Telefono: {usuarios.Telefono}</p>
                </div>
                <div class="card-footer">
                    <div class="row justify-content-md-center">
                        <div class="col-md-auto">
                            <Link to={`../editar/${usuarios._id}`} className="button is-info is-small mr-1">Editar</Link>
                        </div>
                        <div class="col-md-auto">
                            <button class="btn btn-success" onClick={() => eliminarUsuario(usuarios._id)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    useEffect(() => {
        getUsuarios()
    }, [])
    const getUsuarios = async () => {
        const response = await axios.get("http://localhost:4000/obtenerRegistros")
        setUsuarios(response.data)
    }
    const eliminarUsuario = async (id) => {
        try {
            await axios.get(`http://localhost:4000/eliminarRegistro/${id}`)
            getUsuarios()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div class="fondo">
            <h1 className='welcome'>Padrón Electoral</h1>
            <br></br>
            <br></br>
            <br></br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col" >Apellido Paterno</th>
                        <th scope="col" >Apellido Materno</th>
                        <th scope="col">Numero de Boleta</th>
                        <th scope="col" >Eliminar</th>
                        <th scope="col" >Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario, i) => (
                            <tr key={usuario._id}>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apPaterno}</td>
                                <td>{usuario.apMaterno}</td>
                                <td>{usuario.nBoleta}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => eliminarUsuario(usuario._id)}>Eliminar</button></td>
                                <td> <Link to={`../Editar/${usuario._id}`} className="button is-info is-small mr-1 ">Editar</Link></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    )

}
export default Listar;  
