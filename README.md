# react-vocalize

A custom React hook for real-time speech-to-text transcription using the browser's Speech Recognition API. 

 ## Published in npm
 
 [npm package](https://www.npmjs.com/package/react-vocalize)

 ## Working

 `useVoice` is a React hook that enables a React component to access a transcript of speech input from the user's microphone.


 The hook utilizes the **Web Speech API**, which is supported by most modern browsers. This version of the hook requires **React 16.8** or higher to utilize React hooks.

 ## Additional Information
 * [Basic Usage](#basic-usage)



 ## Basic Usage

 A basic example of a react component using this hook is : 
 ``` js
 import React from 'react';
 import {useVoice} from 'react-vocalize';

 const MyComponent = () => {
    const {
        isRecording,
        setIsRecording,
        voiceNote
    } = useVoice();
 }

 return (
    <div>
        <p>IsRecording : {isRecording? 'yes': 'no'}</p>
        <button onClick={() => setIsRecording(prev => !prev)}> Mic </button>
        <div>{voiceNote}</div>
    </div>
 )
 ```

