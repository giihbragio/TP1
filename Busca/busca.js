//RENOMEAR O ARQUIVO PARA "jsrataria.js"
let input = document.getElementById('input')
let output = document.getElementById('output')
let butao = document.getElementById('butao')
butao.addEventListener("click",function(){
  mudavalor(input.value)
})

let pagina = {nihônio:"Nh.html",
tenesso:"Tn.html",
moscóvio:"Mv.html",
oganessônio:"Og.html"
}

 function mudavalor(string) {
   let j = input.value.toLocaleLowerCase()
  if(j in pagina){
    location.href = pagina[j];
  }
  else{
    output.classList.remove("escondido");
    //output.value = "Nenhum item Encontrado"
  }
}
  $( function() {
    let availableTags = [
      "nihônio",
      "tenesso",
      "moscóvio",
      "oganessônio"
    ];
    $( "#input" ).autocomplete({
      source: availableTags,
    });
  } );

  output.value.addEventListener("click",mudavalor);
