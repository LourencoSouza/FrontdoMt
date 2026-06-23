import './Select.css'

function Select() {
  return (
    <>
    <div className="FullBg">


        <div className="PlayerCard">
        {/*Chamada de API para a primeira escolha de personagem (Do jogador), aqui é onde fica a foto, então tem que fazer uma "lib"
        pra colocar uma foto de acordo com o nome ou ID do personagem selecionado*/}
        <img src='imagens/personagens/Sasukeggs.png' alt="" />
        </div>  

        <div className="versus">
            <img src='imagens/background/Versus.png' alt="" />
        </div>

        <div className="personagens">
            <div className="selecoes">
                <div className="personagem"></div>
                <div className="personagem"></div>
                <div className="personagem"></div>
                <div className="personagem"></div>
                <div className="personagem"></div>
                <div className="personagem"></div>
                
            </div>
        </div>  


        <div className="EnemyCard">
        {/*Chamada de API para a segunda escolha de personagem (Do inimigo), aqui é onde fica a foto, então tem que fazer uma "lib"
        pra colocar uma foto de acordo com o nome ou ID do personagem selecionado*/}
        <img src='imagens/personagens/Naruteggs.png' alt="" />
        </div>
    </div>
    </>
  );
}

export default Select;