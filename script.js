let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=4 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }
    else{speak("Good Evening Sir")

    }
}
window.addEventListener('load',()=>{
    wishme()
})


let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    if(message.includes("hello") ||message.includes("hey")){
        speak("hello, sir what can i help you?")
    }
    else if(message.includes("who are you")){
        speak(" hi i am calyx a  virtual assistant created by Binayak Chopra")
    }
    else if(message.includes("who is your creator")){
        speak("Binayak Chopra is my creator")
    }
    else if(message.includes("who is Binayak Chopra")){
        speak("Binayak Chopra is my creator")
    }
    else if(message.includes("open youtube")){

        
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.co.in/")
    }
    
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }

    else if(message.includes("open spotify")){
        speak("opening spotify")
        window.open("https://open.spotify.com/")
    }
    else if(message.includes("open chatgpt")){
        speak("opening chatgpt")
        window.open("https://chatgpt.com/?ref=dotcom")
    }
    else if(message.includes("open netflix")){
        speak("opening netflix")
        window.open("https://www.netflix.com/in/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }

    else{
       let finaltext= "this is what i  found on internet regarding" + message.replace("calyx","") || message.replace("calyx","")
        speak( finaltext)
        window.open(`https://www.google.co.in/search?q=${message.replace("caylx","")||message.replace("calyx","")}`)
    }
}




