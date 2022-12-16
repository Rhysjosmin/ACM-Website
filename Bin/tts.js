function speak(Text){
    var msg = new SpeechSynthesisUtterance();
        msg.text = Text;

        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10]; 
        msg.volume = 1; // From 0 to 1
        msg.rate = 1; // From 0.1 to 10
        msg.pitch = 2; // From 0 to 2

        msg.lang = 'hi';


        window.speechSynthesis.speak(msg);
}