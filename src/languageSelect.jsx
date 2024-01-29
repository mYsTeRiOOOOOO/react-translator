import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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


export default function BasicSelect({langData}) {
  const [language, setLanguage] = React.useState('');

  const handleChange = (event) => {
    setLanguage(event.target.value);

    let newLang = event.target.value; // for tranferring data from this file to another file    
    langData(newLang);  // langData is a func defined in the other file where u want to transferr data 
  };

 

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Language</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Select Language"
          onChange={handleChange}
        >
          {/* Use the language options to populate MenuItems */}
          {languageOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
