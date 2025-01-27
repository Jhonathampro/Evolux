
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    
        let origem = document.querySelector('#origem').value;
        let destino = document.querySelector('#destino').value;
        let plano = document.querySelector('#plano').value;
        let minuto = document.querySelector('#minuto').value;
        const minutoFixo = minuto;
        let comFale = 0;
        let semFale = 0;
        let porcentagem = 0;
        let tempo = 0;

        if(origem == '011' && destino == '016'){
            // sem o palno falemais
             semFale = minutoFixo * 1.90;
             // aqui pego o plano dogitado pelo usuário
                if(plano == 'FaleMais30'){
                    tempo = 30;
                } else if(plano == 'FaleMais60'){
                    tempo = 60;
                } else if(plano == 'FaleMais120'){
                    tempo = 120;
                }
                // nessa parte faço o minuto digitado pelo usuário menos o plano selecionado 
               minuto -= tempo;
               // aqui vejo se o minuto é positivo 
                if(minuto > 0){
                    // faço o novo minuto
                    minuto *= 1.90;
                    // faço a nova porcentagem
                    porcentagem = minuto * 0.10;
                    // faço o novo minoto mais a porcentagem
                    comFale =  minuto + porcentagem; 
                } else  { 
                // esse caso o plano cubra o tempo da ligação
                comFale = 0;
                
             }
             const tr = document.createElement('tr');
             tr.innerHTML = `
             <td>${origem}</td>
             <td>${destino}</td>
             <td>${plano}</td>
             <td>${minutoFixo}</td>
             <td>${formatarMoeda(comFale)}</td>
             <td>${formatarMoeda(semFale)}</td>
    
            
             
             `;
             
             document.querySelector('#historico').appendChild(tr);
     
     
          this.reset();
              
    }   else if(origem == '016' && destino == '011'){
        semFale = minutoFixo * 2.90;
           if(plano == 'FaleMais30'){
               tempo = 30;
           } else if(plano == 'FaleMais60'){
               tempo = 60;
           } else if(plano == 'FaleMais120'){
               tempo = 120;
           }
           minuto -= tempo;
           if(minuto > 0){
               minuto *= 2.90;
               porcentagem = minuto * 0.10;
               comFale =  minuto + porcentagem; 
           } else { 
           comFale = 0;
           
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${origem}</td>
        <td>${destino}</td>
        <td>${plano}</td>
        <td>${minutoFixo}</td>
        <td>${formatarMoeda(comFale)}</td>
        <td>${formatarMoeda(semFale)}</td>
    
       
        
        `;
        
        document.querySelector('#historico').appendChild(tr);


     this.reset();

    } else if(origem == '011' && destino == '017'){
        semFale = minutoFixo * 1.70;
           if(plano == 'FaleMais30'){
               tempo = 30;
           } else if(plano == 'FaleMais60'){
               tempo = 60;
           } else if(plano == 'FaleMais120'){
               tempo = 120;
           }
          minuto -= tempo;
           if(minuto > 0){
               minuto *= 1.70;
               porcentagem = minuto * 0.10;
               comFale =  minuto + porcentagem; 
           } else  { 
           comFale = 0;
        }
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${origem}</td>
        <td>${destino}</td>
        <td>${plano}</td>
        <td>${minutoFixo}</td>
        <td>${formatarMoeda(comFale)}</td>
        <td>${formatarMoeda(semFale)}</td>
    
       
        
        `;
        
        document.querySelector('#historico').appendChild(tr);


     this.reset();

   } else if(origem == '017' && destino == '011'){
    semFale = minutoFixo * 2.70;
       if(plano == 'FaleMais30'){
           tempo = 30;
       } else if(plano == 'FaleMais60'){
           tempo = 60;
       } else if(plano == 'FaleMais120'){
           tempo = 120;
       }
      minuto -= tempo;
  
       if(minuto > 0){
           minuto *= 2.70;
           porcentagem = minuto * 0.10;
           comFale =  minuto + porcentagem; 
       } else { 
       comFale = 0;
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${origem}</td>
    <td>${destino}</td>
    <td>${plano}</td>
    <td>${minutoFixo}</td>
    <td>${formatarMoeda(comFale)}</td>
    <td>${formatarMoeda(semFale)}</td>
    
   
    
    `;
    
    document.querySelector('#historico').appendChild(tr);


 this.reset();

} else if(origem == '011' && destino == '018'){
    semFale = minutoFixo * 0.90;
       if(plano == 'FaleMais30'){
           tempo = 30;
       } else if(plano == 'FaleMais60'){
           tempo = 60;
       } else if(plano == 'FaleMais120'){
           tempo = 120;
       }
       minuto -= tempo;
       if(minuto > 0){
           minuto *= 0.90;
           porcentagem = minuto * 0.10;
           comFale =  minuto + porcentagem; 
       } else { 
       comFale = 0;
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${origem}</td>
    <td>${destino}</td>
    <td>${plano}</td>
    <td>${minutoFixo}</td>
    <td>${formatarMoeda(comFale)}</td>
    <td>${formatarMoeda(semFale)}</td>
    
    
   
    
    `;
    
    document.querySelector('#historico').appendChild(tr);


 this.reset();

} else if(origem == '018' && destino == '011'){
    semFale = minutoFixo * 1.90;
       if(plano == 'FaleMais30'){
           tempo = 30;
       } else if(plano == 'FaleMais60'){
           tempo = 60;
       } else if(plano == 'FaleMais120'){
           tempo = 120;
       }
       minuto -= tempo;
       if(minuto > 0){
           minuto *= 1.90;
           porcentagem = minuto * 0.10;
           comFale =  minuto + porcentagem; 
       } else { 
       comFale = 0;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${origem}</td>
    <td>${destino}</td>
    <td>${plano}</td>
    <td>${minutoFixo}</td>
    <td>${formatarMoeda(comFale)}</td>
    <td>${formatarMoeda(semFale)}</td>
    
   

    `;
    
    document.querySelector('#historico').appendChild(tr);


 this.reset();

 } else {

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${origem}</td>
    <td>${destino}</td>
    <td>${plano}</td>
    <td>${minutoFixo}</td>
    <td>${'-'}</td>
    <td>${'-'}</td>
    
    
    `;
    
    document.querySelector('#historico').appendChild(tr);


 this.reset();

 }


})

  
