import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./en.json"
import mm from "./mm.json"
import jp from "./jp.json"

i18n.use(initReactI18next).init({

    resources: {

        en: {
            translation: en
        },

        mm: {
            translation: mm
        },

        jp: {
            translation: jp
        }

    },

    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }

})

export default i18n