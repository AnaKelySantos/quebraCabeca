const grid = document.querySelector('.grid')
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')


const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',    
]




const createElement =(tag, className)=>{

    const element = document.createElement(tag)
    element.className = className
    return element

}

let firstCard =''
let secondCard=''

const checkEndGame = () =>{
    const disabledCards = document.querySelectorAll('.disabled-card')
    if (disabledCards.length == 20) {
        clearInterval(this.loop)
       alert(`Parabéns ${spanPlayer.innerHTML}! seu tempo foi: ${timer.innerHTML}`)
        
    }

  
        
}

const checkCards = () => {

const firstCharacter = firstCard.getAttribute('data-character')
const secondCharacter = secondCard.getAttribute('data-character')

if (firstCharacter == secondCharacter) {
    
firstCard.firstChild.classList.add('disabled-card')
secondCard.firstChild.classList.add('disabled-card')

firstCard =''
secondCard=''

checkEndGame()

}else{

setTimeout(()=>{

firstCard.classList.remove('reveal-card')
secondCard.classList.remove('reveal-card')
firstCard =''
secondCard=''
},500)
}

}

const revealCard= ({target}) =>{
   // console.log(target.parentNode)

if (target.parentNode.className.includes('reveal-card')) {

   
return
}

if (firstCard == '') {
    target.parentNode.classList.add('reveal-card')
    firstCard = target.parentNode
}else if(secondCard ==''){
    target.parentNode.classList.add('reveal-card')
    secondCard = target.parentNode
    checkCards()
}

//target.parentNode.classList.add('reveal-card')
}

const createCard = (character) =>{
    const card =createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('${character}.png')`

    //card.className = 'card'
   // front.className = 'face front'
   //back.className = 'face back'

    card.appendChild(front)
    card.appendChild(back)

   // grid.appendChild(card)

   card.addEventListener('click', revealCard)

    card.setAttribute('data-character', character)

   return card
}
//createCard()

const loadGame = () =>{

    const duplicateCharacters = [ ...characters, ...characters]

    const shuffledArdArray = duplicateCharacters.sort(()=>  Math.random()- 0.5)
    
  

    shuffledArdArray.forEach((character)=>{
        
        const card = createCard(character);
        grid.appendChild(card)
        
       
    })

    
    //console.log(characters)
}

const startTimer = () =>{

  this.loop = setInterval(()=>{

            const currentTime = Number(timer.innerHTML) 
            timer.innerHTML = currentTime + 1

    }, 1000)

}

window.onload = ()=>{
    
    spanPlayer.innerHTML =localStorage.getItem('player')
    startTimer()
    loadGame()
}


