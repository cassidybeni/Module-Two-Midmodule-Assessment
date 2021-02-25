document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelector('#roll-dice')
    let dice = ['⚀','⚁','⚂','⚃','⚄','⚅']

    btn.addEventListener('click', () => {

        let input = Number(document.querySelector('#number-of-dice').value)
        let dicePara = document.querySelector('#dice-para')
        let sumPara = document.querySelector('#sum-para')

        let str = ""
        for(let i = 0; i < input; i++){
            str += dice[Math.floor(Math.random() * dice.length)]
            dicePara.innerText = str  
            
        }
        
        let sum = 0
        for(let i = 0; i < str.length; i++){
            if(str[i].includes(dice[0])){
                sum++
            } else if(str[i].includes(dice[1])){
                sum += 2
            } else if(str[i].includes(dice[2])){
                sum += 3
            } else if(str[i].includes(dice[3])){
                sum += 4
            } else if(str[i].includes(dice[4])){
                sum += 5
            } else if(str[i].includes(dice[5])){
                sum += 6
            }
        }
        let ul = document.querySelector('#history-list')
        let li = document.createElement('li')
        li.innerText = `${dicePara.innerText} = ${sum}`
        ul.appendChild(li)
        sumPara.innerText = `Sum = ${sum}` 
    })
})