const question = [{
    "que":"which is a markup language ?",
    "a": "html",
    "b": "javacript",
    "c": "python",
    "d": "css",
    "correct": "a"


},
{
    "que":"first pm of india ?",
    "a": "jl",
    "b": "subhas",
    "c": "mg",
    "d": "atlb",
    "correct": "a"

},{
    "que":"which is a markup language ?",
    "a": "html",
    "b": "javacript",
    "c": "python",
    "d": "css",
    "correct": "a"

},
{
    "que":"which is a markup language ?",
    "a": "html",
    "b": "javacript",
    "c": "python",
    "d": "css",
    "correct": "a"

}
]
let index = 0
let total = question.length
let right = 0 , wrong  = 0;
const queBox = document.getElementById("quesBox")
const optioninputs = document.querySelectorAll(".options")
const loadquestion = () =>{
    if(index == total){
        return endWQuiz()
    }
    reset();
    
    const data = question[index]
    queBox.innerText =   `${index + 1}) ${data.que}`;
    optioninputs[0].nextElementSibling.innerHTML = data.a;
    optioninputs[1].nextElementSibling.innerHTML = data.b;
    optioninputs[2].nextElementSibling.innerHTML = data.c;
    optioninputs[3].nextElementSibling.innerHTML = data.d;
     

}
const SubmitQuiz =() => {
    const data = question[index]
    const ans = getAnswer()
    if(ans ==  data.correct){
        right ++;

    } else {
        wrong++;
    }
    index ++;
    loadquestion()
    return ;

}
const getAnswer = () => {
    let answer;
    optioninputs.forEach(
        (inputs) => {
            if(inputs.checked){
                answer = inputs.value
            } else {
                console.log("no")
            }

        }
    )
    return answer
}
const reset = () => {
    optioninputs.forEach(
        (inputs) => {
            inputs.checked = false

        }
    )

}
const endWQuiz = () =>{
    document.getElementById("main").innerHTML = `
    
     <h3>Thank you</h3>
     <h2> ${right}/${total} are correct</h2
     
`;
}


loadquestion();