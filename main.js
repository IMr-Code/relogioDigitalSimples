const conteiner = document.querySelector('.conteiner');
const t = document.querySelector('.conteiner span');

document.addEventListener('DOMContentLoaded',()=>{

     var corpo = document.querySelector('#corpo');

     console.log('A pagina carregou!');

try{
     let mode_shose = localStorage.getItem('boardColor');
     
     if(mode_shose != null){
        
           if(mode_shose == 'noturno'){

                corpo.style.backgroundColor = 'black';
                t.style.color = 'white';
                conteiner.style.borderColor = 'white';


            }else{

                corpo.style.backgroundColor = 'white';
                t.style.color = 'black';
                conteiner.style.borderColor = 'black';

            }
     }

}catch{

            console.log('Erro ao mudar a cor do background da pagina');

    }
});

function changeMode(e){

    let mode = e;
    console.log(mode);

    if (mode == 'claro'){

        corpo.style.backgroundColor = 'white';
        t.style.color = 'black';
        conteiner.style.borderColor = 'black';
        localStorage.setItem('boardColor','claro');
    }

    if(mode == 'noturno'){

        corpo.style.backgroundColor = 'black';
        t.style.color = 'white';
        conteiner.style.borderColor = 'white';
        localStorage.setItem('boardColor','noturno');

    }

}

function showTime(){
    
    const DATA = new Date();
    let hora = DATA.getHours();
    let minuto = DATA.getMinutes();
    let segundo = DATA.getSeconds();

    t.innerHTML = hora + ' : ' + minuto + ' : ' + segundo;

   // console.log(hora, ' : ', minuto, ' : ', segundo);
}

function loop(){

    showTime();
    requestAnimationFrame(loop)
}

loop();