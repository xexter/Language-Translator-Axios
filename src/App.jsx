import { useEffect, useState } from 'react';
import './App.css';
import InputLanguage from './Components/InputLanguage/InputLanguage';
import TextInput from './Components/TextInput/TextInput';
import axios from 'axios';

function App() {
  const [languages, setLanguages] = useState([]);
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [textInput, setTextInput] = useState("");
  const [translatedText, setTranslatedText] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getLanguage();
  }, []);

  async function getLanguage() {
    const options = {
      method: 'GET',
      url: 'https://text-translator2.p.rapidapi.com/getLanguages',
      headers: {
        'x-rapidapi-key': '5f3133c79fmsh450e78c2188c691p1a7c61jsn86da0bea5c4e',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setLanguages(response.data.data.languages);
    } catch (error) {
      console.error(error);
    }
  }

  async function translate() {
    
    if (sourceLanguage === targetLanguage) {
      setError("Source and target languages cannot be the same.");
      return;
    }
    if (!sourceLanguage || !targetLanguage || !textInput) {
      setError("Please fill out all fields.");
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setError("Source and target languages cannot be the same.");
      return;
    }

    setError(""); // Clear any previous errors

    const data = new FormData();
    data.append('source_language', sourceLanguage);
    data.append('target_language', targetLanguage);
    data.append('text', textInput);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'x-rapidapi-key': 'a5fd3e080emshd7a183ebbe31cccp13319djsn2c76851ffcde',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      },
      data: data
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error("Translation error", error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="main-div">
      <h1 className="title">Language Translator</h1>
      <InputLanguage label="Source Language" languages={languages} onInput={(value) => setSourceLanguage(value)} />
      <InputLanguage label="Target Language" languages={languages} onInput={(value) => setTargetLanguage(value)} />
      <TextInput label="Text Input" onInput={(value) => setTextInput(value)} />
      {error && <p className="error">{error}</p>}
      <button className="translate-button" onClick={translate}>
        Translate
      </button>
      {translatedText && <p className="translated-text">{translatedText}</p>}
    </div>
  );
}

export default App;