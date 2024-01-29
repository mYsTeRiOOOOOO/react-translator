
import TxtChange from "./Translate";
import TransLateInfo from "./ViewTranslate";
import { useState } from "react";

export default function TranslatePage(){
    
    let [transalted , setTranslated] = useState({
        txtChange : "hello"
    });


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

    return(
        <div>
            <TxtChange update={updateInfo} langDt={detLang} findLang={toLangg} />
            <TransLateInfo info={transalted} langdt={detected} langto={tolang} />
        </div>
    )
}