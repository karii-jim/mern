import React, { useState } from "react";
import { Navigate } from "react-router";
import axios from 'axios'

function Agregar() {
    const [nombre, setnombre] = useState("")
    const [apPaterno, setapPaterno] = useState("")
    const [apMaterno, setapMaterno] = useState("")
    const [nBoleta, setnBoleta] = useState(0)

    const guardarRegistro = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/agregarRegistro", {
                nombre,
                apPaterno,
                apMaterno,
                nBoleta,
            })
            //navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div class="fondo">
            <div class="abs-center">
                <form onSubmit={guardarRegistro}>
                    <br></br>
                    <h1>Registro E-Voting</h1>

                    <div class="form-group row">
                        <div class="form-group row">
                            <label for="Nombre" class="col-form-label">Nombres: </label>
                            <input type="Nombre" class="form-control" value={nombre} onChange={(e) => setnombre(e.target.value)} id="nombre" ></input>
                        </div>
                        <div class="form-group row ">
                            <label for="apPaterno" class="col-form-label">Apellido Paterno:</label>
                            <input type="apPaterno" class="form-control" value={apPaterno} onChange={(e) => setapPaterno(e.target.value)} id="apPaterno" ></input>
                        </div>
                        <div class="form-group row ">
                            <label for="apPaterno" class="col-form-label">Apellido Materno:</label>
                            <input type="apPaterno" class="form-control" value={apMaterno} onChange={(e) => setapMaterno(e.target.value)} id="apMaterno" ></input>
                        </div>
                        <div class="form-group row ">
                            <label for="apPaterno" class="col-form-label">Numero de Boleta:</label>
                            <input type="apPaterno" class="form-control" value={nBoleta} onChange={(e) => setnBoleta(e.target.value)} id="nBoleta"></input>
                        </div>

                    </div>
                    <div>
                        <br></br>
                    <button type="submit" class="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Agregar;