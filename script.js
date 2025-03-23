function startListening() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    
    recognition.onstart = function() {
        document.getElementById("output").value = "Listening...";
    };

    recognition.onresult = function(event) {
        let voiceInput = event.results[0][0].transcript;
        document.getElementById("output").value = voiceInput;

        try {
            let result = eval(voiceInput);
            document.getElementById("output").value = voiceInput + " = " + result;
        } catch (error) {
            document.getElementById("output").value = "Invalid Input!";
        }
    };

    recognition.start();
}
