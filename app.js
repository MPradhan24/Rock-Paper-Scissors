let userScore = 0;
let compScore = 0;

/*CACHING THE DOM, bringing these elements in for future use*/

/* variables to store html dom elements, elements in that html document like button, classes, etc */
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
//query selector for classes
// getElementBy____ will return all that match, query selector will return only 1st element that matches
let scoreBoard_div = document.querySelector(".score-board");//return 1st element matching score-board
let result_p = document.querySelector(".result>p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

/*END OF CACHING THE DOM */


function getCompChoice(){
    let choices = ["r","p","s"];
    let randomChoice=Math.floor(Math.random()*3);//random no. b/w 0 and 3
    return choices[randomChoice];
}

function convertToWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
}
function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;   //innerHTML will give string inside those tags(or within that element)
    compScore_span.innerHTML = compScore;
    /*Using back ticks is ES6, you can concatenate normally also with + sign like in Java */
    const smallUserWord = "user".fontsize(3).sub();//subscript, sup() for superscript
    const smallCompWord = "comp".fontsize(3).sub();//subscript
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You WIN!! :) `;//emoji through extension :'+'fire'+': without the plus
    let option = document.getElementById(user);
    option.classList.add("green-glow");// classList returns an array of all classes on that element (got by id)
    setTimeout(function(){option.classList.remove("green-glow")},400); //2nd argument is time in ms as to when 1st argument function is applied
}

function lose(user, comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();//subscript, sup() for superscript
    const smallCompWord = "comp".fontsize(3).sub();//subscript
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} loses to ${convertToWord(comp)}${smallCompWord}. You LOST!! :( `;
    let option = document.getElementById(user);
    option.classList.add("red-glow");// classList returns an array of all classes on that element (got by id)
    //es6 () => {} is equiv to function(){}
    setTimeout(() => {option.classList.remove("red-glow")},400); //2nd argument is time in ms as to when 1st argument function is applied
}

function draw(user, comp){
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();//subscript, sup() for superscript
    const smallCompWord = "comp".fontsize(3).sub();//subscript
    result_p.innerHTML=`${convertToWord(user)}${smallUserWord} equals ${convertToWord(comp)}${smallCompWord}. It's a DRAW!! :| `;
    let option = document.getElementById(user);
    option.classList.add("gray-glow");// classList returns an array of all classes on that element (got by id)
    setTimeout(function(){option.classList.remove("gray-glow")},400); //2nd argument is time in ms as to when 1st argument function is applied
}

function game(userChoice){
    let compChoice = getCompChoice();
    switch(userChoice+compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){   //es5
        game("r");
    });

    paper_div.addEventListener('click',() => game("p"));    //es6, no need of {} for 1 liner

    scissors_div.addEventListener('click',() => { game("s"); });    //es6
}

main();//calling main()