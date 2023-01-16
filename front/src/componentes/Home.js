import React from 'react';

function Home() {
  return (
    <div className='homes'>
      <div className='columnas'>
        <div class="row" >
          <div class="col">
            <div className='columnaizquierda'>
              <div className="Logotipo">
                <img src="/images/ine2.png"></img>
                <h1 className='welcome'>Voto electronico</h1>
              </div>
            </div>
          </div>

          <div class="col">
            <form className='columnaderecha'>
              <div>
                <label className='login' for="exampleInputUsuario">Usuario:</label>
                <input type="text" class="form-control"></input>
              </div>
              <div>
                <label className="login" for="exampleInputContraseña">Contraseña:</label>
                <input type="password" class="form-control"></input>
                <div className='boton'>
                  <button type="submit" class="btn btn-light">Ingresar sesión</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;