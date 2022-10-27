function dothis(){ 
    return Math.floor(Math.random()*100)}


let randomNumber= dothis()
let guess=0


function buttonClick(){
    console.log(randomNumber)
    inputBox=document.getElementById("guessField")
    guess= +inputBox.value
    jumbo=document.getElementById("display-4")
    paragraph=document.getElementById("lead")
    event.preventDefault()
    console.log(guess, randomNumber)
    if (guess<randomNumber){
        jumbo.innerHTML="Guess higher"
        paragraph.innerHTML="What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target."
        }
    else if (guess>randomNumber){
        jumbo.innerHTML="guess lower"
        paragraph.innerHTML=" I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker."}
        
    else if (guess ===randomNumber){
        jumbo.innerHTML="You did it"
        paragraph.innerHTML="As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands."
        }
 
    return
}

// function anotherclicker(){
//     inputBox=document.getElementByClassName("guessSubmit").value
//     console.log(inputBox)
// }