import './App.css';
import { useState, useEffect } from 'react';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'



function App() {
  const defaultLocale = navigator.language
  console.log(defaultLocale);
  const [lang, setLang] = useState(localStorage.getItem("lang") ? localStorage.getItem("lang") : defaultLocale )

  const messages = {
    "tr-TR": {title:"Merhaba Dünya",
  description: "{count} yeni mesaj!"},
    "en-US": {title: "Hello World",
  description: "You have {count} messages!"}}


  useEffect(() => {
    localStorage.setItem("lang",lang)
  },[lang])

  return (
    <div className="App">
     <IntlProvider locale={lang} messages={messages[lang]}>
        <FormattedMessage id='title'/>
        
        <p>
          <FormattedMessage id='description' values={{count:9}}></FormattedMessage>
        </p>
        
        <br />
        <br />
        <button onClick={() => setLang("tr-TR") }>TR</button>
        <button onClick={() => setLang("en-US") }>EN</button>
     </IntlProvider>
    </div>
  );
}

export default App;
