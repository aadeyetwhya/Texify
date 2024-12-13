import React from 'react'
import { useState } from 'react'
import './Textarea.css'

function Textarea() {
  const [text, setText] = useState("")

  let wordCount = 0;

  let charaterCount = text.length;
  let word = text.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i] != "") {
      wordCount += 1;
    }
  }

  const handleChange = (e) => {
    console.log(e)
    setText(e.target.value)
    //hndle word count and charater count

  }

  const alternatingCase = () => {
    let sentence = ""
    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        sentence = sentence + text[i].toLowerCase()
      }else{

        sentence = sentence + text[i].toUpperCase();
      }

    }
    setText(sentence)
  }

  return (
    <div className='wholeSection'>
      <textarea name="" id="" className="textArea" onChange={(e) => handleChange(e)} value={text}></textarea>
      <button className="btn" onClick={() => word!=""&&setText(text.toUpperCase())}>Convert To Uppercase</button>
      <button className="btn" onClick={() => word!=""&&setText(text.toLowerCase())}>Convert To LowerCase</button>

      <button className="btn" onClick={() => setText("")}>Clear</button>

      <button className="btn" onClick={alternatingCase}>Convert To Alternative case</button>
      <button className="btn" onClick={()=>{navigator.clipboard.writeText(text)}}>Copy Text</button>

      <h1 style={{marginTop:'70px'}}>Text Summary:</h1>
      <p>{wordCount} words and {charaterCount} charaters</p>
      <br />
      <h1>Preview:</h1>
      <p>{text}</p>

    </div>
  )
}

export default Textarea
