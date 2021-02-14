const wrapper = document.getElementById("quest-wrapper");

let totalBall = 0;
let ball = 0;
let currentNumber = 0;
let check = 0;

const quest = [
    {
        q: "Кто построил статистический табулятор?",
        a1: {txt: "Герман Холлерит", w: 1},
        a2: {txt: "Чарльз Беббидж", w: 0},
        a3: {txt: "Клод Шеннон", w: 0},
        a4: {txt: "Ванневер Буш", w: 0}  
    },
    {
        q: "Какое у вас состояние разума?2",
        a1: {txt: "Очень очень", w: 1},
        a2: {txt: "Очень не очень", w: 0},
        a3: {txt: "Не очень очень", w: 0},
        a4: {txt: "Очень но ночень очень", w: 0}
    },
    {
        q: "Какое у вас состояние разума?3",
        a1: {txt: "Очень очень", w: 1},
        a2: {txt: "Очень не очень", w: 0},
        a3: {txt: "Не очень очень", w: 0},
        a4: {txt: "Очень но ночень очень", w: 0}
   },
]

const showQ = (num) => {
    if (num < quest.length)
    {div.innerHTML = `<p class="question h6 list-group-item card-title mx-3 mb-0 mt-3    text-white bg-secondary">`+quest[num].q+`</p>
    <div class="card-body">
                <p><label class="ans text-secondary list-group-item" value="`+quest[num].a1.w+`"><input class="point form-check-input me-2" name="1" value="`+quest[num].a1.w+`" type="radio" >`+quest[num].a1.txt+`</label> </p>
                <p><label class="ans text-secondary list-group-item" value="`+quest[num].a2.w+`"><input class="point form-check-input me-2" name="1" value="`+quest[num].a2.w+`" type="radio">`+quest[num].a2.txt+`</label></p>
                <p><label class="ans text-secondary list-group-item" value="`+quest[num].a3.w+`"><input class="point form-check-input me-2" name="1" value="`+quest[num].a3.w+`" type="radio">`+quest[num].a3.txt+`</label></p>
                <p><label class="ans text-secondary list-group-item" value="`+quest[num].a4.w+`"><input class="point form-check-input me-2" name="1" value="`+quest[num].a4.w+`" type="radio">`+quest[num].a4.txt+`</label></p>
                <p><label class="ans text-secondary list-group-item" value="0"><input class="point form-check-input me-2" name="1" type="radio"  >Пропустить</label></p>
                <p id="answer1" class="btn btn-lg btn-outline-primary" >Ответить</p>
                </div>`;
                currentNumber = currentNumber + 1;
                totalBall = totalBall + Number(ball);} else {
                    totalBall = totalBall + Number(ball);
                    ball =0;
                    div.innerHTML = `<p class="question"> Тест завершен. </p><p>Вы набрали: <b style ="color: red">`+totalBall+`</></p>`
                }
                
}

const nextQ = (event) => {
    if (event.target.id == 'answer1' && check >0) {
        console.log(event.target);
        showQ(currentNumber);
        check = 0;
    } else if ((event.target.className == 'ans text-secondary list-group-item') || (event.target.className == 'point form-check-input me-2')) {
        ball = event.target.getAttribute('value');
        check = 1;
    } else if (event.target.id == 'answer1' && check ==   0){
        alert('Выберите вариант ответа')
    };
} ;

let div = document.createElement('div');
div.className = "msg";
showQ(0);
const answer = document.getElementById('answer1');
wrapper.append(div);
document.addEventListener("click", nextQ);