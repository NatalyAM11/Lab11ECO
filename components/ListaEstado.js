let objetoComentario;
let arrayComentDef=[];
let elComentario;
class ListaEstado{
    
    constructor(estado){
        this.estado=estado;
        
    }
    
    render=()=>{

    
    let component=document.createElement('div');
    component.className='filaEstado'
    
    let nombreCont=document.createElement('div');
    nombreCont.className='nameFilaEstado'
    nombreCont.innerHTML = (
        "@"+ this.estado.nombre
    );
    
    let estadoCont=document.createElement('div'); 
    estadoCont.innerHTML=(
        this.estado.publicacion
    );

    let inputComent=document.createElement('input');
    inputComent.innerHTML=(
        InputEvent.innerHTML='Escribe un comentario'
    );

    let bComentar=document.createElement('button');
    bComentar.innerHTML=(
    bComentar.innerHTML='Comentar'
    );


 
    let comentariosCont=document.createElement('div');
    comentariosCont.className='comentarios'
   
       

    bComentar.addEventListener('click',
    ()=>{
       // var arrayComentarios=[];
       //arrayComentarios.push(inputComent.value +'\n');
        
        //alert(arrayComentarios);

        //comentariosCont.innerHTML=(arrayComentarios +'\n');
        //inputComent.value;

        
    let referencia=database.ref('Comentarios/').push();

    //creamos el comentario
    objetoComentario={
        dueñoEstado:this.estado.nombre,
        Texto:inputComent.value,
    }
    //Lo enviamos a database
    referencia.set(objetoComentario);


    }
    );

      //recibimos los datos de database
      database.ref('Comentarios').on('value',
      function(data){
  
          var arrayComentarios=[];
          
  
      data.forEach(
      
      comentarioo=>{ 
          arrayComentarios.push(comentarioo.val().Texto);
          arrayComentDef=arrayComentarios;
      });
  
      arrayComentDef.forEach(comentario=>{
      elComentario=comentario;
          
      }); 
    
    if(elComentario!=null){
        comentariosCont.innerHTML=(elComentario);
    }
      
    
      console.log(arrayComentDef);
      });
      

  
    component.appendChild(estadoCont);
    component.appendChild(nombreCont);
    component.appendChild(inputComent);
    component.appendChild(bComentar);
    component.appendChild(comentariosCont);
  
    
    return component;
    }


   
    
    
    }