import React, { useState } from 'react'
import Error from "./Error"
import PropTypes from "prop-types"

export default function Formulario({busqueda,guardarBusqueda,guardarConsultar}) {


    const [error,guardarError]=useState(false);

    //extraer ciudad y pais

    const {ciudad , pais} = busqueda

    //func que coloca los elementos en el state

    const handleChange = e =>{
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // Cuando el usuario envia el form
    const handeSubmit =e =>{
        e.preventDefault();

        //validar
        if(ciudad.trim()=== "" || pais.trim() === ""){
            guardarError(true);
            return;
        }
        guardarError(false)

        guardarConsultar(true)
        //pasarlo al componente principal
    }
  
    return (
        <form
            onSubmit={handeSubmit}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/>: null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            
            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un País --</option>     
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">País: </label>

            </div>

            <div className="input-field col s12">
                <button
                    types="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima
                </button>
            </div>
        </form>
    )
}

Formulario.propTypes={
    busqueda:PropTypes.object.isRequired,
    guardarBusqueda:PropTypes.func.isRequired,
    guardarConsultar:PropTypes.func.isRequired
}
