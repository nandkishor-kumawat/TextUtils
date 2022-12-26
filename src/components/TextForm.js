import React, { useState } from 'react'

export default function TextForm() {
    const [text, setText] = useState("")

    const handleOnChange = (e) => setText(e.target.value);

    const toUppercase = () => setText(text.toUpperCase());

    const toLowercase = () => setText(text.toLowerCase());

    const toCamelCase = () => {
        let newText = text.split(/.s!@#$%/);
        console.log(newText)
    }

    const toCapitalized = () => {

    }

    const clearText = () => setText("");

    const removeExtraSpaces = () => setText(text.split(/[ ]+/).join(" "));

    const copyText = () => navigator.clipboard.writeText(text);

    return (
        <div className='container'>
            <h1 className='my-3'>Enter text to analyze</h1>
            <div className="my-3"><textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea></div>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toUppercase}>Convert to UpperCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toLowercase}>Convert to LowerCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toCamelCase}>Convert to CamelCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toCapitalized}>Convert to Capitalized</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={copyText}>Copy Text</button>

            <div className="container my-3">
                <h3>Your Text Info</h3>
                <p>{text.split(/\s+/).filter(element=>{return element.length!==0}).length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length === 0? "Write Something to preview":text}</p>
            </div>
        </div>
    )
}
