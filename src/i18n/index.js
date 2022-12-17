import { createI18n } from "vue-i18n";
import en from './en.json'
import km from './km.json'


const messages = {
    en: en,
    km: km,
  }

  const lang = localStorage.getItem('lang')  || 'en';
  
  // 2. Create i18n instance with options
  const i18n = createI18n({
    locale: lang || 'en', // set locale
    fallbackLocale: 'km', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })

  export default i18n;