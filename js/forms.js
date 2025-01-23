let Tempo = 0;
let primeiro = 0;
let segundo = 0;
let terceiro = 0;
let quarto = 0;
let porcentagem = 0;
// criei três variáveis para ajudar para quem ler consiguer entender, elas são
// primeiro, segundo, terceiro e quarto porém dava para fazer só com uma e chamar ela de valor

if ('#primeiraSemFalemais'){
    // Primeiro faço o cálculo do Sem falemais
     Tempo = 20;
     Tempo *= 1.90; 
     primeiro = Tempo;
     console.log(Tempo) 
     // O if faz a verificação se o tempo é positivo, porém eu pensei na ideia se 
     // a relação de origem e destino existe na tabela 
     if(Tempo > 0){
     document.querySelector('#primeiraSemFalemais').textContent = formatarMoeda(primeiro);
    //  Fazendo com o plano faleMais
    Tempo = 20 - 30;
    // faço a verificação se o tempo é maior que zero para determinar 
    // se o plano cobre a ligação
    if(Tempo > 0 ){
        Tempo *= 1.90;
        // O tempo faz um papel de valor e minutos, fiz isso para aproveitar a váriavel
        porcentagem = Tempo * 0.10;
        primeiro =  Tempo + porcentagem  
        document.querySelector('#primeiraComFalemais').textContent = formatarMoeda(primeiro); 
    }else{
        primeiro = 0;
        document.querySelector('#primeiraComFalemais').textContent = formatarMoeda(primeiro); 
    }
    // Esse else funciona caso não exista origem e destino 
    // entre os DDD
} else{
    document.querySelector('#primeiraSemFalemais').textContent = "-";
    document.querySelector('#primeiraComFalemais').textContent = "-"; 
}
    
// os outros codigos tem a mesma função então não estão comentados como o primeiro


}  if ('#segundoSemFalemais'){
    Tempo = 80;
    Tempo *= 1.70; 
    segundo = Tempo;
    console.log(Tempo)
    if(Tempo > 0){
    document.querySelector('#segundoSemFalemais').textContent = formatarMoeda(segundo);
     //  Fazendo com o plano faleMais
    Tempo = 80 - 60;
    if(Tempo > 0 ){
         Tempo *= 1.70;
         porcentagem = Tempo * 0.10;
         segundo =  Tempo + porcentagem    
        document.querySelector('#segundoComFalemais').textContent = formatarMoeda(segundo);
    }else{
        segundo = 0;
        document.querySelector('#segundoComFalemais').textContent = formatarMoeda(segundo);
    }
}  else {
    document.querySelector('#segundoSemFalemais').textContent = "-";
    document.querySelector('#segundoComFalemais').textContent = "-";
}
      

}   if ('#terceiraSemFalemais'){ 
    Tempo = 200;
    Tempo *= 1.90; 
    terceiro = Tempo;
    console.log(Tempo)  
    if(Tempo > 0){
    document.querySelector('#terceiroSemFalemais').textContent = formatarMoeda(terceiro); 
       //  Fazendo com o plano faleMais
     Tempo = 200 - 120;
     if(Tempo > 0 ){
        Tempo *= 1.90;
        porcentagem = Tempo * 0.10;
        terceiro =  Tempo + porcentagem 
        document.querySelector('#terceiroComFalemais').textContent = formatarMoeda(terceiro); 
     }else{
         terceiro = 0;
         document.querySelector('#terceiroComFalemais').textContent = formatarMoeda(terceiro); 
     }
    } else{
        document.querySelector('#terceiroSemFalemais').textContent = "-";
        document.querySelector('#terceiroComFalemais').textContent = "-"; 
    }
    
        
}

if ('#quartoSemFalemais'){ 
    Tempo = 100;
    Tempo *= 0; 
    quarto = Tempo;
    console.log(Tempo)  
    if(Tempo > 0){
    document.querySelector('#quartoSemFalemais').textContent = formatarMoeda(quarto);  
        //  Fazendo com o plano faleMais
        Tempo = 200 - 30;
        if(Tempo > 0 ){
           Tempo *= 0;
           porcentagem = Tempo * 0.10;
           quarto =  Tempo + porcentagem; 
           document.querySelector('#quartoComFalemais').textContent = formatarMoeda(quarto);    
        }else{
            quarto = 0;
            document.querySelector('#quartoComFalemais').textContent = formatarMoeda(quarto); 
        }

    } else{
        document.querySelector('#quartoSemFalemais').textContent = "-"; 
        document.querySelector('#quartoComFalemais').textContent = "-"; 
    }
       
} 


  
