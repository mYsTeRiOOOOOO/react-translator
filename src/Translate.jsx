import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import BasicSelect from './languageSelect';
import fullLogo from './Logo.png';
import "./navbar.css";

// update is a param passed from TranslateBox to get data from this file 

export default function TxtChange({update , langDt , findLang , oldtext}){

     let [text , setText] = useState("");
     const [language, setLanguage] = useState(""); // language detection
     const [newTxt , setNewTxt] = useState("");   // change to which language 
     
////////////----- Styles -----////////////////////


     let field = {
      display:"flex",
    justifyContent:"center",
  };
  
  let btnS = {
    marginTop:"15px",
    backgroundColor:"none",
    height:"40px",
    borderRadius:"20px",
    width:"100px",
    fontSize:"18px",
    border:"1px solid grey",
    marginBottom:"15px"
  }

     let abc = {color:"black" , 
     paddingTop:"15px",

    };

    ////////////---API REQUESTS---////////////

    let fromLang = `${language}`;
    let toLang = `${newTxt}`; 

    const API_KEY = `AIzaSyCl7e-PtgtOlUivLqHBtYBbIJ9IYUY-lGg`;
    
    // let link = `https://translation.googleapis.com/language/translate/v2/detect?key=${API_KEY}`;

    let link = 'https://translation.googleapis.com/language/translate/v2/detect';
        link += `?key=${API_KEY}`;
        link += `&q=${encodeURIComponent(text)}`;

    let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    url += '&q=' + encodeURI(text);
    url += `&source=${fromLang}`;
    url += `&target=${toLang}`;
    
    let info = async () => {
      try {
        let response = await fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        let result = await response.json();
        console.log("check results ",result);
    
        let ResultRes = {
          txtChange : result.data.translations[0].translatedText,
        }
    
        // Now you can access the translated text from the result object
        if (result.data && result.data.translations && result.data.translations.length > 0) {
          console.log("Translated Text:", result.data.translations[0].translatedText);
          return ResultRes;
        } else {
          console.error("No translation found in the response");
        }
      } catch (error) {
        console.error("Error during translation request:", error.message);
      }
    };

    ///////////////////---Translation Req---/////////////////

    let detection = async () => {
      try {
        let responseD = await fetch(link, {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        });
    
        if (!responseD.ok) {
          throw new Error(`HTTP error! Status: ${responseD.status}`);
        }
    
        let result = await responseD.json();
        console.log(result);

        let resultLang = {
          fromLang : result.data.detections[0][0].language
        }
    
        // Now you can access the detected language from the result object
        if (result.data && result.data.detections && result.data.detections.length > 0) {
          console.log("Detected Language:", result.data.detections[0][0].language);
         langDt(resultLang);
          return resultLang;
        } else {
          console.error("No language detection found in the response");
        }
      } catch (error) {
        console.error("Error during language detection request:", error.message);
      }
    };
    

      const handleData = (event) => {
        setText(event.target.value);
        let olddata = {text : event.target.value}
        console.log("here is the old data",olddata);
        oldtext(olddata);
      };


     let updateLang = (newInf)=>{
        setLanguage(newInf);
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          // Update text
          let newInf = await info();
          setText("");
          update(newInf);
      
          // Detect language
          let newLang = await detection();
          updateLang(newLang);
          setLanguage(newLang.fromLang);
          // setNewTxt(""); // Not sure where this should come from, you might want to set it based on the UI or some other condition.
          console.log(language); // Now you should get the correct language value
          console.log(newLang);


        } catch (error) {
          console.error("Error during submission:", error.message);
        }

      };

      let newTxtLang = (newInf)=>{
        console.log(newInf);
        setNewTxt(newInf);
        findLang(newInf);
      }




    return (
        <div>
      <form onSubmit={handleSubmit}>
      <div className='Tlogo'>
      <img className='lOGOimg' src={fullLogo} alt="hahaa" />
    </div>
        <div className='txtfield' style={field}>
        <label htmlFor="tData" style={abc} >Enter Text here</label>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="tData"
          onChange={handleData}
          value={text}
          label="Text"
          variant="outlined"
        />
        <br />
        <br /></div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <BasicSelect langData={newTxtLang}/>
        <button type="submit" style={btnS}>Submit</button>
      </form>
    </div>

    )
}