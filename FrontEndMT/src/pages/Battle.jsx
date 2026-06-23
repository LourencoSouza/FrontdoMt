import './Battle.css'

function Batalha(){
    return(
        <>
        <div className="fbody">
            <div className="log"><p className='Titulo'>Registro de Batalha:</p></div>
            <div className="StatsJogador">
                <div className="infosJogador"></div>
            </div>
            <div className="jogador"></div>
            <div className="StatsRival">
                <div className="infosRival"></div>
            </div>
            <div className="rival"></div>
        <div className="AtkBar">
            <div className="ataque"></div>
            {/* Usar .map pra colocar os dois ataques do personagem um do lado do outro */}
        </div>
        <div className="DescBar">
            <div className="descricao"></div>
        </div>
        </div>
        </>
    )
}

export default Batalha;