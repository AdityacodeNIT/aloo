
import React, {useState} from 'react'

export default function TextForm(props) {
 { const handleUpClick=()=>{
      let newtext=text.toUpperCase();
      setText(newtext);
      props.showAlert("Text is converted in Upper case")
   }
  const handleLowClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showAlert("Text is converted in lower case")
   }
  const handleClrClick=()=>{
      let newtext=("");
      setText(newtext);
      props.showAlert("All clear")
   }
  const handleonChange=(Event)=>{
      setText(Event.target.value);
   }
  const handleExtraSpaces=()=>{
      let newText=text.split(/[  ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces are clear")
   }
  const capitalizeWord=()=>{
     let mText=text.split(" ").map(capitalize);
        function capitalize(value){
             return value.charAt(0).toUpperCase()+ value.slice(1);
          }
     setText(mText.join(" "));
     props.showAlert("First letter of all the word are capitalize")
   }

  const words=()=> {
      const a =text.split(/\s+/)
      let size=a.length;
      let b=0;
      for(let i=0; i<a.length;i++){
           if(a[i]==="") {
               b++;
             }
        }
      return size-b;
    }
   const trim=()=>{
        let newText=text.split(/[  ]+/)
        let b=newText.join("")
        return b.length
    }
   const [text, setText] = useState('');
  
  return (
  <>  
  <div className="container" style={{color:props.backgroundColo==='light'?'black':'white'}}>
        <div className="mb-3">    
            <h1>Parmarth Word Counter Enter the text</h1>  
              <textarea id="myBox" className="form-control"  onChange={handleonChange} value={text} rows="8"
              style={{backgroundColor:props.backgroundColo==='dark'?'#2B3035':'white',color:props.backgroundColo==='dark'?'white':'black'}}></textarea>
        </div>
        <div className="btn-group btn-group-xs">
              <button className="btn btn-primary btn-sm" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary btn-sm mx-3" disabled={text.length===0} onClick={handleLowClick}>Convert to Lowercase</button>
              <button className="btn btn-primary  btn-sm x-3" disabled={text.length===0}  onClick={handleClrClick}>Clear</button>
              <button className="btn btn-primary btn-sm  mx-3"  disabled={text.length===0} onClick={ handleExtraSpaces}>Clear extra spaces</button>
              <button className="btn btn-primary btn-sm mx-3" disabled={text.length===0} onClick={ capitalizeWord}>capitalize</button>
        </div>
    </div>
        <div className="container my-3" style={{color:props.backgroundColo==='light'?'black':'white'}}>
                 <h1>Your text summary</h1>
                 <h3>{words()} word and {trim()} characters</h3>
                 <h3>{0.003*words()} Minutes to read </h3>
                 <h2>Preview</h2>
                 <h4>{text.length>0?text:"Nothing to preview"}</h4>
        </div>
      </>
   );
 }
}
