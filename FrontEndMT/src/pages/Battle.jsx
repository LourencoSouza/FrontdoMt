import './Battle.css'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Batalha(){

const location=useLocation();

const jogador=
location.state?.jogador;

const inimigo=
location.state?.inimigo;

const partidaId=
location.state?.partidaId;

const [ataques,setAtaques]=
useState([]);

const [historico,setHistorico]=
useState([]);

const [vidaJogador,setVidaJogador]=
useState(100);

const [vidaInimigo,setVidaInimigo]=
useState(100);

useEffect(()=>{

fetch(
"http://localhost:8081/ataque"
)

.then(res=>res.json())

.then(data=>{

let filtrados=[];

if(jogador.id===1)
filtrados=data.slice(0,2);

if(jogador.id===2)
filtrados=data.slice(2,4);

if(jogador.id===3)
filtrados=data.slice(4,6);

if(jogador.id===4)
filtrados=data.slice(6,8);

if(jogador.id===5)
filtrados=data.slice(8,10);

if(jogador.id===6)
filtrados=data.slice(10,12);

setAtaques(
filtrados
);

})

.catch(console.log);

},[jogador]);

async function atacar(
ataque
){

try{

const response=
await fetch(

"http://localhost:8081/partida/atacar",

{

method:"POST",

headers:{
"Content-Type":
"application/json"
},

body:
JSON.stringify({

partidaId,
ataqueId:
ataque.id

})

}

);

const resultado=
await response.json();

console.log(
"==========="
);

console.log(
"RESPOSTA ATAQUE"
);

console.log(
resultado
);

console.log(
"==========="
);

setHistorico(

prev=>

[

...prev,

`${jogador.nome} usou ${ataque.nome}`

]

);

}

catch(err){

console.log(err);

alert(
"Erro ao atacar"
);

}

}

return(

<div className="fbody">

<div className="log">

<p className="Titulo">

Registro de Batalha

</p>

{

historico.map(

(item,index)=>

<p key={index}>

{item}

</p>

)

}

</div>

<div className="StatsJogador">

<div className="infosJogador">

<h2>

{jogador?.nome}

</h2>

<p>

HP:
{vidaJogador}

</p>

</div>

</div>

<div className="jogador">

<img
src={`imagens/personagens/${jogador.nome}eggs.png`}
alt=""
/>

</div>

<div className="StatsRival">

<div className="infosRival">

<h2>

{inimigo?.nome}

</h2>

<p>

HP:
{vidaInimigo}

</p>

</div>

</div>

<div className="rival">

<img
src={`imagens/personagens/${inimigo.nome}eggs.png`}
alt=""
/>

</div>

<div className="AtkBar">

{

ataques.map(

(ataque)=>(

<button

key={ataque.id}

className="ataque"

onClick={()=>
atacar(
ataque
)
}

>

{ataque.nome}

</button>

)

)

}

</div>

<div className="DescBar">

<div className="descricao">

Escolha um ataque

</div>

</div>

</div>

)

}

export default Batalha