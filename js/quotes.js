const quotes = [
    {
        quote: "탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다.",
        author: "몽테뉴",
},
{
    quote: "프로에게서 자기 수련과 극기심을 배워라.",
    author: "카우틸랴"
},
{
    quote: "겉으로 보기에 무척 연약해 보이는 모든 것이 바로 힘이다.",
    author: "파스칼"
},
{
    quote: "확실한 일을 실행할 힘은 누구나 가지고 있다.",
    author: "괴테"
},
{
    quote: "타인의 대한 존경은 처세법의 제일 조건이다.",
    author: "아미엘"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;