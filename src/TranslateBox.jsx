
import TxtChange from "./Translate";
import TransLateInfo from "./ViewTranslate";
import { useState } from "react";

export default function TranslatePage(){
    
    let [transalted , setTranslated] = useState({
        txtChange : "hello"
    });

    let [originalTxt , setOriginalTxt] = useState({
        text:"Your Text here"
    });

    let [selectName , setSelectName] = useState("");

    let orgnlText = (newinf)=>{
        setOriginalTxt(newinf);
        console.log("here the old text ",newinf);
    }


    // detected language receiving 

    let[detected , setDetected] = useState({
        fromLang : "en"
    });

    let [tolang , setTolang] = useState({
        toLang :"fr"
    })

    let detLang = (newinf)=>{
       setDetected(newinf);
       console.log(newinf);
    }

    let toLangg = (newInf)=>{
        console.log("here it is ",newInf);
        setTolang(newInf);
    }

/////////////////////////////////////////////////////////////

    const updateInfo = (newInf)=>{
        console.log(newInf);
        setTranslated(newInf);
    }

    // const updateLang = (newLang)=>{
    //     console.log(newLang);
    //     setLanguage(newLang);
    // }

    // getting langName 

    let nameLang = (newinf)=>{
        setSelectName(newinf);
        console.log("almost done", selectName);
    }

    return(
        <div>
            <TxtChange update={updateInfo} langDt={detLang} findLang={toLangg} oldtext={orgnlText} SelectedLang = {nameLang} />
            <TransLateInfo info={transalted} langdt={detected} langto={tolang} text={originalTxt}  langLabel = {selectName}/>
        </div>
    )
}