import * as React from 'react';
import "./viewbox.css";

import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';

export default function TransLateBox({ info , langdt , langto, text , langLabel}) {
  if (!info || !info.txtChange) {
    // Handle the case where info or info.txtChange is undefined
    return null; // or render a placeholder or loading state
  }

// language detection 

const languageOptions = [
  { label: 'Corsican', value: 'co' },
  { label: 'Croatian', value: 'hr' },
  { label: 'Czech', value: 'cs' },
  { label: 'Danish', value: 'da' },
  { label: 'Dhivehi', value: 'dv' },
  { label: 'Dogri', value: 'doi' },
  { label: 'Dutch', value: 'nl' },
  { label: 'English', value: 'en' },
  { label: 'Esperanto', value: 'eo' },
  { label: 'Estonian', value: 'et' },
  { label: 'Ewe', value: 'ee' },
  { label: 'Filipino (Tagalog)', value: 'fil' },
  { label: 'Finnish', value: 'fi' },
  { label: 'French', value: 'fr' },
  { label: 'Frisian', value: 'fy' },
  { label: 'Galician', value: 'gl' },
  { label: 'Georgian', value: 'ka' },
  { label: 'German', value: 'de' },
  { label: 'Greek', value: 'el' },
  { label: 'Guarani', value: 'gn' },
  { label: 'Gujarati', value: 'gu' },
  { label: 'Haitian Creole', value: 'ht' },
  { label: 'Hausa', value: 'ha' },
  { label: 'Hawaiian', value: 'haw' },
  { label: 'Hebrew', value: 'he' },
  { label: 'Hindi', value: 'hi' },
  { label: 'Hmong', value: 'hmn' },
  { label: 'Hungarian', value: 'hu' },
  { label: 'Icelandic', value: 'is' },
  { label: 'Igbo', value: 'ig' },
  { label: 'Ilocano', value: 'ilo' },
  { label: 'Indonesian', value: 'id' },
  { label: 'Irish', value: 'ga' },
  { label: 'Italian', value: 'it' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Javanese', value: 'jv' },
  { label: 'Kannada', value: 'kn' },
  { label: 'Kazakh', value: 'kk' },
  { label: 'Khmer', value: 'km' },
  { label: 'Kinyarwanda', value: 'rw' },
  { label: 'Konkani', value: 'gom' },
  { label: 'Korean', value: 'ko' },
  { label: 'Krio', value: 'kri' },
  { label: 'Kurdish', value: 'ku' },
  { label: 'Kurdish (Sorani)', value: 'ckb' },
  { label: 'Kyrgyz', value: 'ky' },
  { label: 'Lao', value: 'lo' },
  { label: 'Latin', value: 'la' },
  { label: 'Latvian', value: 'lv' },
  { label: 'Lingala', value: 'ln' },
  { label: 'Lithuanian', value: 'lt' },
  { label: 'Luganda', value: 'lg' },
  { label: 'Luxembourgish', value: 'lb' },
  { label: 'Macedonian', value: 'mk' },
  { label: 'Maithili', value: 'mai' },
  { label: 'Malagasy', value: 'mg' },
  { label: 'Malay', value: 'ms' },
  { label: 'Malayalam', value: 'ml' },
  { label: 'Maltese', value: 'mt' },
  { label: 'Maori', value: 'mi' },
  { label: 'Marathi', value: 'mr' },
  { label: 'Meiteilon (Manipuri)', value: 'mni-Mtei' },
  { label: 'Mizo', value: 'lus' },
  { label: 'Mongolian', value: 'mn' },
  { label: 'Myanmar (Burmese)', value: 'my' },
  { label: 'Nepali', value: 'ne' },
  { label: 'Norwegian', value: 'no' },
  { label: 'Nyanja (Chichewa)', value: 'ny' },
  { label: 'Odia (Oriya)', value: 'or' },
  { label: 'Oromo', value: 'om' },
  { label: 'Pashto', value: 'ps' },
  { label: 'Persian', value: 'fa' },
  { label: 'Polish', value: 'pl' },
  { label: 'Portuguese (Portugal, Brazil)', value: 'pt' },
  { label: 'Punjabi', value: 'pa' },
  { label: 'Quechua', value: 'qu' },
  { label: 'Romanian', value: 'ro' },
  { label: 'Russian', value: 'ru' },
  { label: 'Samoan', value: 'sm' },
  { label: 'Sanskrit', value: 'sa' },
  { label: 'Scots Gaelic', value: 'gd' },
  { label: 'Sepedi', value: 'nso' },
  { label: 'Serbian', value: 'sr' },
  { label: 'Sesotho', value: 'st' },
  { label: 'Shona', value: 'sn' },
  { label: 'Sindhi', value: 'sd' },
  { label: 'Sinhala (Sinhalese)', value: 'si' },
  { label: 'Slovak', value: 'sk' },
  { label: 'Slovenian', value: 'sl' },
  { label: 'Somali', value: 'so' },
  { label: 'Spanish', value: 'es' },
  { label: 'Sundanese', value: 'su' },
  { label: 'Swahili', value: 'sw' },
  { label: 'Swedish', value: 'sv' },
  { label: 'Tagalog (Filipino)', value: 'tl' },
  { label: 'Tajik', value: 'tg' },
  { label: 'Tamil', value: 'ta' },
  { label: 'Tatar', value: 'tt' },
  { label: 'Telugu', value: 'te' },
  { label: 'Thai', value: 'th' },
  { label: 'Tigrinya', value: 'ti' },
  { label: 'Tsonga', value: 'ts' },
  { label: 'Turkish', value: 'tr' },
  { label: 'Turkmen', value: 'tk' },
  { label: 'Twi (Akan)', value: 'ak' },
  { label: 'Ukrainian', value: 'uk' },
  { label: 'Urdu', value: 'ur' },
  { label: 'Uyghur', value: 'ug' },
  { label: 'Uzbek', value: 'uz' },
  { label: 'Vietnamese', value: 'vi' },
  { label: 'Welsh', value: 'cy' },
  { label: 'Xhosa', value: 'xh' },
  { label: 'Yiddish', value: 'yi' },
  { label: 'Yoruba', value: 'yo' },
  { label: 'Zulu', value: 'zu' },
];


function getLanguageNameByCode(code) {
  const language = languageOptions.find(option => option.value === code);
  return language ? language.label : code;
}

  const detectedLangName = getLanguageNameByCode(langdt.fromLang);
 

  console.log(detectedLangName);



  return (
    <div className='viewcards' style={{display:"flex" }}>

      <div className='card1'>
        <div className='cardstart'>
          <h3>What's on your mind</h3>
          <p>With automatic language detection,<br /> you can effortlessly translate text <br /> into your preferred language. Just <br /> enter your text, and our tool <br /> will intelligently identify your <br /> language and seamlessly <br /> translate it into the  language <br /> of your choice. </p>
        </div>
        <div className='cardend'></div>
      </div>

      <div className='card2'>
        <div className='cardstart'>
        <h2><b>Translation</b></h2>
        <p id='from' >Detected Lang</p>
        <span id='To' className='spanLang'><u><b>"{detectedLangName}"</b></u></span>
       <br /> <br /><p><SwapVerticalCircleIcon/></p>
        <p  id='from'>To</p>
        <span id='To' className='spanLang'><u><b>{langLabel}{info.isSubmitted ? `${langto.toLang}` : langto.toLang || JSON.stringify(langto)}</b></u></span> 
        </div>
        </div>

        <div className='card3'>
          <div className='textEnt'>
            <div className='oldText'>
              <p>{text.text}</p>
            </div>
            <div> <span id='IconVert'><SwapVerticalCircleIcon/></span><hr id='hr'/></div>
            <div className='newText'>{info.txtChange}</div>
          </div>
        </div>
</div>
  );
}
