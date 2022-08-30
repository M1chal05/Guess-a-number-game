

let submitBtn = document.getElementById("submit")



let randomNumber = Math.ceil(Math.random()*200)


let triesNumber = 0



submitBtn.addEventListener("click", function(){

        let guessNumber = document.querySelector("input").value
        document.querySelector("input").focus()
        

        triesNumber = triesNumber + 1


    
        if(guessNumber == randomNumber){
        document.querySelector(".alert").classList.add("guessed-right")
        document.getElementById("tries").textContent = "It took you " + triesNumber + " tries."

        document.getElementById("resetBtn").addEventListener("click", function(){
            location.reload()
        })
        }
        else{
        document.querySelector("input").value = ""
        wrongPopUp()
        }
    })





    document.addEventListener('keydown', checkIfRight)



    function checkIfRight(event){
        if(event.keyCode == 13){
        
            let guessNumber = document.querySelector("input").value
        
            triesNumber = triesNumber + 1
        
            if(guessNumber == randomNumber){
                document.querySelector(".alert").classList.add("guessed-right")
                document.getElementById("tries").textContent = "It took you " + triesNumber + " tries."
        
                document.removeEventListener('keydown', checkIfRight)
                
                document.getElementById("resetBtn").addEventListener("click", function(){
                    location.reload()
                })
            }
            else{
                document.querySelector("input").value = ""
                wrongPopUp()
            }}}





    function wrongPopUp(){
        let screenWidth = window.innerWidth - 90
        let screenHeight = window.innerHeight - 90

        function genRandomX(min, max){return Math.round(Math.random() * (max - min + 1)) + min}
        let randomPosX = genRandomX(50, screenWidth)

        function genRandomY(min,max){return Math.round(Math.random() * (max - min + 1)) + min}
        let randomPosY = genRandomY(50, screenHeight)


        
        let wrongAns = document.getElementById("wrongAns")
        wrongAns.style.top = randomPosY + "px"
        wrongAns.style.left = randomPosX + "px"


        let randomRotate = Math.round(Math.random()*120) - 60
        wrongAns.style.transform = "rotate(" + randomRotate + "deg)"

        wrongAns.style.display = "inline-block"
     }


