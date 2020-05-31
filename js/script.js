
var margemT = 400;
var margemE = 100;

$("#campo").keydown(function(evento) {
    if(margemE >= 900 && margemT <= 300) {
  
        alert("Parabéns!!");
        $("#cachorro").css("margin-left", "400px");
        $("#cachorro").css("margin-left", "100px");
        
    } else  {
  
        if (evento.which == 37 && margemE > 10) {
            // quando o usuário pressiona seta para esquerda
           
            $("#cachorro").css("margin-left", margemE+"px");
            margemE = margemE - 50;
        }

        if(evento.which == 38 && margemT > 10) {
            // quando usuário pressiona seta para cima
             
            $("#cachorro").css("margin-top", margemT+"px");
            margemT = margemT - 50;
            
        }

        if(evento.which == 39 && margemE <= 900) {
            // quando usuário pressiona seta para direita
                 
            $("#cachorro").css("margin-left", margemE+"px");
            margemE = margemE + 50;
            
        }

        if(evento.which == 40 && margemT <= 400) {
            // quando usuário pressiona seta para baixo
         
            $("#cachorro").css("margin-top", margemT+"px");
            margemT = margemT + 50;
        }   
    }
});
 
