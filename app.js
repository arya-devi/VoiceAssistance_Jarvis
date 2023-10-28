const btn = document.querySelector('.talk')
const content = document.querySelector('.content')

function speak(text) {  
    const text_speak = new SpeechSynthesisUtterance(text)

    text_speak.rate = 1
    text_speak.volume = 1
    text_speak.pitch = 2

    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    var day = new Date()
    var hour = day.getHours()
    if(hour>=0 && hour<12){
        speak("Good Morning sir!")
    }else if(hour>=12 && hour<=17){
        speak("Good Afternoon sir!")
    }else{
        speak("Good Evening sir!")
    }
}

window.addEventListener('load',() => {
    speak("initializing JARVIS...")
    wishMe()
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex
    const transcript = event.results[currentIndex][0].transcript
    content.textContent = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener('click',() => {
    content.textContent = "Listening..."
    recognition.start()
})

function takeCommand(message) {
    if(message.includes('hey') || message.includes('hello')) {
        speak("Hello sir how may i help you")
    }
    else if(message.includes('open google')) {
        window.open('https://www.google.co.in/')
        speak("Opening Google")
    }
    else if(message.includes('your name') || message.includes('who are you')){
        speak("hey,iam jarvis,whats your good name")
    }
    else if(message.includes('iam') || message.includes('my name')){
        speak("oohhh thats sounds good")
    }
    else if(message.includes('open youtube')) {
        window.open('https://www.youtube.com/')
        speak("opening youtube")
    }
    else if(message.includes('open instagram')) {
        window.open('https://www.instagram.com/')
        speak("opening instagram")
    }
    else if(message.includes('open github')) {
        window.open('https://github.com/arya-devi')
        speak("opening github")
    }
    else if(message.includes('open portfolio')) {
        window.open('https://arya-devi.github.io/Portfolio/')
        speak("opening portfolio")
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes ('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank")
        const finalText = "This is what i found on internet regarding" + message
        speak(finalText)
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,"_blank")
        const finalText = "This is what i found on wikipedia regarding" + message
        speak(finalText)
    }
    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "The time is " + time
        speak(finalText)
    }
    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = "The date is " + date
        speak(finalText)
    }
    else if(message.includes('calculator')) {
       window.open('Calculator:///')
       const finalText = "opening calculator"
        speak(finalText)
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`,"_blank")
        const finalText = "I found some information for" + message + "on google"
        speak(finalText)
        }
    }


