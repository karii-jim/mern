import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

function Editar() {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState("")
    const [apPaterno, setapPaterno] = useState("")
    const [apMaterno, setapMaterno] = useState("")
    const [nBoleta, setnBoleta] = useState("")
    const { id } = useParams();

    useEffect(() => {
        obtenerUsuarioPorId()
    }, [])

    const obtenerUsuarioPorId = async () => {
        const response = await axios.get(`http://localhost:4000/obtenerRegistro/${id}`)
        setNombre(response.data.nombre)
        setapPaterno(response.data.apPaterno)
        setapMaterno(response.data.apMaterno)
        setnBoleta(response.data.nBoleta)


    }


    const actualizarUsuario = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:4000/editarRegistro/${id}`, {
                nombre,
                apPaterno,
                apMaterno,
                nBoleta
            })
            navigate("/Listar")
        } catch (error) {
            console.log(error)
        }

    }
    return (


            <div class="fondo">

                <div class="abs-center">

                    <form onSubmit={actualizarUsuario} >
                        <div class="row">
                            <h1>Voto Electronico</h1>
                            <div class="form-group row">
                                <div class="form-group row">
                                    <label for="Nombre" class="col-form-label">Nombres: </label>
                                    <input type="Nombre" class="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" ></input>
                                </div>
                                <div class="form-group row">
                                    <label for="apellidoP" class="col-form-label">Apellido Paterno: </label>
                                    <input type="Nombre" class="form-control" value={apPaterno} onChange={(e) => setapPaterno(e.target.value)} id="nombre" ></input>
                                </div>
                                <div class="form-group row">
                                    <label for="Nombre" class="col-form-label">Apellido Materno: </label>
                                    <input type="Nombre" class="form-control" value={apMaterno} onChange={(e) => setapMaterno(e.target.value)} id="nombre" ></input>
                                </div>
                                <div class="form-group row">
                                    <label for="Nombre" class="col-form-label">Numero de Boleta: c</label>
                                    <input type="Nombre" class="form-control" value={nBoleta} onChange={(e) => setnBoleta(e.target.value)} id="nombre" ></input>
                                </div>


                            </div>

                        </div>
                        <br></br>
                        <button type="submit" class="btn btn-primary">Actualizar</button>
                    </form>

                </div>

            </div>
           
    )
}
export default Editar;