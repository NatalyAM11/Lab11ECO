//constantes
const name=document.getElementById('name');
const status=document.getElementById('status');
const bPublicar=document.getElementById('bPublicar');
const estadoContainer=document.getElementById('estadoContainer');
//const comentarioCont=document.getElementById('components/ListaEstado/comentarioCont');

//Database
const database= firebase.database();

let coments;

let arrayC=[];

publicar=()=>{

    if(name.value=== '' && status.value===''){
        alert ("Hay un espacio vacio");
        return;
    }

    let referencia=database.ref('estados/').push();
    //creamos el estado
    objetoEstado={
        nombre:name.value,
        publicacion:status.value,
        //comentario: lista.getText,
    }

    referencia.set(objetoEstado);
   
}


bPublicar.addEventListener('click',publicar);


//Traemos los estados del firebase
database.ref('estados').on('value',
    function(data){

    estadoContainer.innerHTML='';
    

    data.forEach(
    
    estadoo=>{ 

    let valor= estadoo.val();
    let lista= new ListaEstado(valor);

    estadoContainer.appendChild(lista.render());


    //console.log(lista.getText());

   /* let coment= lista.render.comentarioCont;
    arrayComentarios.push(coment);*/

    /*name.value='';
    status.value='';*/

    });


    });