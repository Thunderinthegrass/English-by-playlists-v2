const wordRusText = document.querySelectorAll('.word__rus-text');
const wordEngMask1 = document.querySelectorAll('.word-eng__mask');

let lesson1Rus = [
	"Я работаю",
	"Мы работаем",
	"Они работают",
	"Ты работаешь",
	"Я работаю здесь",
	"Я учусь",
	"Я понимаю",
	"Я понимаю тебя",
	"Я знаю это",
	"Я знаю это очень хорошо",
	"Я живу в России",
	"Я говорю по-английски",
	"Я хожу в школу",
	"Я хожу на работу",
	"У меня есть брат",
	"У меня есть идея",
	"У меня есть сестра",
	"У меня есть машина",
	"Я думаю так",
	"Я вижу это",
	"Мне нужно это",
	"Я помню это",
	"Я помню это очень хорошо",
	"Мы понимаем тебя",
	"Мы говорим по-английски",
	"Ты знаешь это",
	"Ты видишь это",
	"Они помогают мне",
	"Они идут на работу",
	"Мы помним это",
	"Ты говоришь по-английски очень хорошо",
	"Мы живём здесь",
	"Я живу в этом городе",
	"Мы живём в этой стране",
]

const wordEngText = document.querySelectorAll('.word__eng-text');

let lesson1Eng = [
	"i work",
	"we work",
	"they work",
	"you work",
	"i work here",
	"i study",
	"i understand",
	"i understand you",
	"i know it",
	"i know it very well",
	"i live in russia",
	"i speak English",
	"i go to school",
	"i go to work",
	"i have a brother",
	"i have an idea",
	"i have a sister",
	"i have a car",
	"i think so",
	"i see it",
	"i want it",
	"i remember it",
	"i remember it very well",
	"we understand you",
	"we speak english",
	"you know it",
	"you see it",
	"they help me",
	"they go to work",
	"we remember it",
	"you speak english very well",
	"we leave here",
	"i leave in this city",
	"we leave in this country",
]

for (let i = 0; i < wordRusText.length; i++) {
	wordRusText[i].textContent = lesson1Rus[i];
	wordEngMask1[i].textContent = lesson1Eng[i];
}


let lesson1EngMask = [];
//переводит первую букву массива lesson5__1Eng в верхний регистр
lesson1Eng.forEach(elem => {
	let z = elem[0].toUpperCase();
	elem[0] = z;
	lesson1EngMask.push(z + elem.slice(1));
})




for (let i = 0; i < wordRusText.length; i++) {
	wordRusText[i].textContent = lesson1Rus[i];
	wordEngMask1[i].textContent = lesson1EngMask[i];

	//если много букв в строке, уменьшает line-height
	if (lesson1Rus[i].length > 43) {
		// console.log(lesson5__1Rus[i].length);
		// console.log(i);
		// console.log(wordRusText[i].textContent);
		wordRus[i].classList.add('lh-min');
	}
}


//ввод перевода
document.querySelector('.result-btn').onclick = () => {
	let inpEng = document.querySelectorAll('.inp-eng');
	let corrAnswer = 0;
	let numPhrases = inpEng.length;

	for (let k = 0; k < lesson1Eng.length; k++) {
		let val = inpEng[k].value;
		val = val.toLowerCase();
		val = val.trim();

		if (val == lesson1Eng[k]) {
			corrAnswer += 1;
			inpEng[k].classList.remove('mistake');
			inpEng[k].classList.add('correctly');
		}
		else {
			inpEng[k].classList.remove('correctly');
			inpEng[k].classList.add('mistake');
		}
	}
	console.log(numPhrases);
	console.log(corrAnswer);
	console.log(lesson1Eng[11]);
	let result = (100 / numPhrases) * corrAnswer;
	result = Math.round(result);
	console.log(`урок усвоен на ${result} %`);
	document.querySelector('.result').innerHTML = `Урок усвоен на ${result} %`;
}