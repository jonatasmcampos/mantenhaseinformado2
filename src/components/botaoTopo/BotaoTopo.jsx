import './BotaoTopo.css'
import { useState } from 'react'

export default function BotaoTopo(){

    const [esconderBotao, setEsconderBotao] = useState(false);

    function exibirBotao(){
        (window.scrollY > 200) ? setEsconderBotao(true) : setEsconderBotao(false)
    }
    document.addEventListener("scroll", exibirBotao)

    return (
        <>
        { esconderBotao && 
            <a href='#topo' id='botao' className='btn-topo'>
                <i class="fa fa-arrow-alt-circle-up"></i>
            </a>}
        </>
    )
}