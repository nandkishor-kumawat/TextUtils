import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleOnChange = (e) => setText(e.target.value);

    const toUppercase = () => setText(text.toUpperCase());

    const toLowercase = () => setText(text.toLowerCase());

    const toCamelCase = () => {
        let newText = text.split(/.s!@#$%/);
        console.log(newText)
    }

    const toCapitalized = () => {
        let lowerCase = text.toLowerCase();
        let regex = /([^.!?]+[!?.\d\s]+)/g;
        let sentences = lowerCase.match(regex);
        console.log(sentences)
    }

    const clearText = () => setText("");

    const removeExtraSpaces = () => setText(text.split(/[ ]+/).join(" "));

    const copyText = () => navigator.clipboard.writeText(text);

    return (
        <div className='container'  style={{backgroundColor:props.mode === "light"?"white":"#042743",color:props.mode === "light"?"#042743":"white"}}>
            <h1 className='my-3'>Enter text to analyze</h1>
            <div className="my-3"><textarea value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor:props.mode === "light"?"white":"#13466e",color:props.mode === "light"?"black":"white"}} id="myBox" rows="8"></textarea></div>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toUppercase}>Convert to UpperCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toLowercase}>Convert to LowerCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toCamelCase}>Convert to CamelCase</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={toCapitalized}>Convert to Capitalized</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={clearText}>Clear Text</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length === 0} type="button" className="btn btn-primary m-1" onClick={copyText}>Copy Text</button>

            <div className="container my-3">
                <h3>Your Text Info</h3>
                <p style={{color:"#857f7f"}}>{text.split(/\s+/).filter(element=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p style={{color:"#857f7f"}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h3>Preview</h3>
                <p style={{color:"#857f7f"}}>{text.length === 0? "Write Something to preview":text}</p>
            </div>
        </div>
    )
}
