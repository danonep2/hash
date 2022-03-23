var boxes = [0,0,0,0,0,0,0,0,0]
var boxesid = ['a1','b1','c1','a2','b2','c2','a3','b3','c3']
var boxcolor = ['rgb(255,255,255)','rgb(0,0,0)']
player = 0;
F = 0
vTeste = 0
const teste = document.getElementsByClassName('box');

function resetgame(){
    boxes = [0,0,0,0,0,0,0,0,0]
    for(i = 0; i < 9; i++){
        teste[i].style.backgroundColor = 'rgba(0,0,0,.2)';
        teste[i].style.cursor = "pointer"

    }
    player =  0;
    F = 0;
}

function boxclick(box){
    boxnow = boxes[box]
    boxnowid = boxesid[box]
    if(boxnow == 0 && F == 0){
        boxes[box] = player+1
        document.getElementById(boxnowid).style.backgroundColor = boxcolor[player];
        document.getElementById(boxnowid).style.cursor = "default"
        playerWinTest()
    }
}

function playerWinTest(){
    x = player + 1
    //H
    if(boxes[0] == x && boxes[1] == x && boxes[2] == x){F = 1}
    if(boxes[3] == x && boxes[4] == x && boxes[5] == x){F = 1}
    if(boxes[6] == x && boxes[7] == x && boxes[8] == x){F = 1}

    //V
    if(boxes[0] == x && boxes[3] == x && boxes[6] == x){F = 1}
    if(boxes[1] == x && boxes[4] == x && boxes[7] == x){F = 1}
    if(boxes[2] == x && boxes[5] == x && boxes[8] == x){F = 1}

    //D
    if(boxes[0] == x && boxes[4] == x && boxes[8] == x){F = 1}
    if(boxes[2] == x && boxes[4] == x && boxes[6] == x){F = 1}

    //V
    vTeste = 0
    for(v = 0;v < 9;v++){
        if(boxes[v] == 0 && vTeste == 0){
            vTeste++
        }
    }

    
    if(vTeste == 0 && F == 0){
        document.getElementById("winplayer").innerHTML = `Deu Velha!!!`
        document.getElementById("winbg").style.display = "grid"
        F = 1
    }
    else if(F == 1){    
        document.getElementById("winplayer").innerHTML = `O jogador ${player + 1} ganhou!`
        document.getElementById("winbg").style.display = "grid"
    }
    
    if(player == 0){player++}
    else{player--}
}


function closeBox(){
        resetgame()
        document.getElementById("winbg").style.display = "none"
}
