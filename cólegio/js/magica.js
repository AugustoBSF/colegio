// dom
const calcular= document.querySelector('#calcular')
const resultado= document.querySelector('#resultado')
const NomeUsuario= document.querySelector('#nomeUsuario')



// eventos 
calcular.addEventListener('click',()=>
{
    
   let nota1= Number(document.querySelector('#nota1').value)
   let nota2= Number(document.querySelector('#nota2').value)
   let nota3= Number(document.querySelector('#nota3').value)
    

    media= (nota1 + nota2 + nota3)/3
    
    resultado.textContent= `${NomeUsuario.value} sua média é ${media.toFixed(1)}`
    
    
}
)



// funçoes