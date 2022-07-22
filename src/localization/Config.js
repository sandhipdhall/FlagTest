import I18n from 'i18n-js';
import english from './Languages/en';

/**
 * A method for selected language.
 * @getCurrentSelectedLanguage
 *
 * @summary This method returns selected language file.
 *
 */
function getCurrentSelectedLanguage() {
  // All other translations for the app goes to the respective language file:
  I18n.translations.en = english;

  // For Multilanguage support in future use this senario
  // switch (languageCode) {
  //   case 'en':
  //     I18n.translations.en = english;
  //     break;
  //   default:
  //     I18n.translations.en = english;
  // }
}

/**
 * A method for get locale language text.
 * @getLocalizedText
 *
 * @summary This method will provide a locale text.
 *
 */
export function getLocalizedText(text, params = {}) {
  // console.log('text', text);
  // For Multilanguage support in future use this senario
  //const languageCode = I18n.locale.substr(0, 2);
  getCurrentSelectedLanguage();
  return I18n.t(text, params);
}
