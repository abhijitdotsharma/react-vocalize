//create context
import React, { useState, useEffect} from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.continuous = true;
mic.interimResults = true;
mic.lang = 'en-US';

const useVoice = () => {

    const [isRecording, setIsRecording] = useState(false);
    const [voiceNote, setVoiceNote] = useState('')

    function recordHandler() {
        if (isRecording) {
            mic.start();

        } else {
            mic.stop();
        }

        mic.onresult = (event) => {
            console.log(event)
            const transcript = Array.from(event.results)
                .map((result) => {
                    // SpeechRecognitionResult from the SpeechRecognitionResultList
                    // return SpeechRecognitionResultAlternative
                    return result[0]
                })
                .map((result) => {
                    // SpeechRecognitionResultAlternativeItem
                    // return item.transcript  
                    return result.transcript
                })
                .join('')
            setVoiceNote(transcript)
        }
    }
    //runs each time on start/stop btn click
    useEffect(() => {
        recordHandler()
    }, [isRecording])


    return { isRecording, setIsRecording, voiceNote, setVoiceNote }
}

export {useVoice}