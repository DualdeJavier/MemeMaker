import { useState } from "react"
import './App.css'
import html2canvas from "html2canvas"

export function App(){

    const [linea1, setlinea1] = useState('')
    const [linea2, setlinea2] = useState('')
    const [imagen, setImagen] = useState('')

    const onChangeLinea1 = function (evento){
        setlinea1(evento.target.value)
    }
    const onChangeLinea2 = function (evento){
        setlinea2(evento.target.value)
    }
    const onChangeImagen = function (evento){
        setImagen(evento.target.value)
    }
    const onClickExportar = function (evento){
        alert("EXPORTAR")
        html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img
    link.click();

});
    }


    return(
        <div className='App'>
            <select onChange={onChangeImagen}>
                <option value="bob">Bob Square</option>
                <option value="Engañe">Pinguin</option>
                <option value="Je">jocking</option>
                <option value="life">Life meme</option>
                <option value="nani">Sorpresa</option>
                <option value="sudor">Hard Choise</option>
                <option value="x-men">X-Men</option>
            </select> <br />
            <input onChange={onChangeLinea1} type='text' placeholder='Línea 1' /> <br />
            <input onChange={onChangeLinea2} type='text' placeholder='Línea 2' /> <br />
            <button onClick={onClickExportar}>Exportar</button>

            <div className="meme" id="meme">
                <span>{linea1}</span> <br />
                <span>{linea2}</span> <br />
                <img src={"/img/" + imagen + ".png"} />
            </div>

        </div>
    )
}
