let questions = [];
let index = 0;
let score = 0;

function startQuiz(subject){

let data = {
physics: physics,
chemistry: chemistry,
bangla: bangla,
english: english
};

if(!data[subject] || data[subject].length === 0){
    alert("No questions found!");
    return;
}

questions = data[subject].sort(()=>0.5 - Math.random());

document.getElementById("menu").style.display="none";
document.getElementById("quiz").style.display="block";

index=0;
score=0;

loadQuestion();
}

function loadQuestion(){

if(index >= questions.length){
document.getElementById("question").innerHTML="🎉 Quiz Finished!";
document.getElementById("answers").innerHTML="";
return;
}

let q = questions[index];

document.getElementById("progress").innerText = "Question "+(index+1);
document.getElementById("question").innerText=q.q;

let ansDiv=document.getElementById("answers");
ansDiv.innerHTML="";

q.a.forEach((ans,i)=>{
let btn=document.createElement("button");
btn.innerText=ans;
btn.onclick=()=>checkAnswer(i);
ansDiv.appendChild(btn);
});
}

function checkAnswer(i){

let q = questions[index];

if(i===q.c){
score++;
document.getElementById("result").innerText="✅ সঠিক";
}else{
document.getElementById("result").innerText="❌ ভুল! "+q.a[q.c];
}

document.getElementById("score").innerText=score;

index++;

setTimeout(()=>{
document.getElementById("result").innerText="";
loadQuestion();
},1000);
  }
