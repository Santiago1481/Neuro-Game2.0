document.addEventListener('DOMContentLoaded',()=>{

    
    
    document.querySelector('.devuelta').addEventListener('click',function(){
        if(window.confirm('seguro que quiere regresar')){
            window.location.href = '../../inicio/inicio.html';
        }
    })

    setTimeout(()=>{
        window.location.href = '../../jugar/indexJugar.html'
    },8500)

})