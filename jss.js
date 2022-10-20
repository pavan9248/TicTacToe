let turn="X"
let gameover=false;
let ting=new Audio("ting.mp3");
let game=new Audio("gameover.mp3");
let music=new Audio("music.mp3");
music.play();
const changeTurn=()=>
{
    return turn=="X"?"0":"X";
}
const checkWin = ()=>
{
    let boxtext=document.getElementsByClassName('text');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText==boxtext[e[2]].innerText)&&boxtext[e[0]].innerText!=''&&boxtext[e[1]].innerText!=''&&boxtext[e[2]].innerText!='')
          {   document.querySelector('.info').innerText=boxtext[e[1]].innerText+" Won the game!!!"
             gameover=true;
             const imag=document.querySelector(".image");
             imag.classList.add("adv");
                game.play();
        }
    })

}
let boxes=document.getElementsByClassName("boxtype");
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.text');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === '')
        boxtext.innerText=turn;
        turn=changeTurn();
        ting.play();
        checkWin();
        if(!gameover)
        document.getElementsByClassName('info')[0].innerText="Turn for "+ turn;
    })    
});

reset.addEventListener('click',()=>{
    let boxes=document.querySelectorAll('.text');
    Array.from(boxes).forEach(element=>{
        element.innerText = ""
    });
    const imag=document.querySelector(".image");
    imag.classList.remove("adv");
    turn='X';
    document.getElementsByClassName('info')[0].innerText="Turn for "+ turn;
})