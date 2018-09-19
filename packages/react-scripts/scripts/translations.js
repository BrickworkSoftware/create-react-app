'use strict';
const path = require('path');
const paths = require('../config/paths');
const manageTranslations = require('react-intl-translations-manager').default;
const asiagoMessages = path.resolve(paths.asiagoPath, 'dist/messages');

manageTranslations({
  messagesDirectory: asiagoMessages,
  translationsDirectory: 'src/i18n/messages/',
  languages: [
    // any language you need
    'ca_ES',
    'cs_CZ',
    'da_DK',
    'de_DE',
    'el_GR',
    'en_CA',
    'en_GB',
    'en_US',
    'es_ES',
    'es_LA',
    'fr_CA',
    'fr_FR',
    'hu_HU',
    'it_IT',
    'ja_JA',
    'ko_KR',
    'nl_NL',
    'no_NO',
    'pl_PL',
    'pt_BR',
    'pt_PT',
    'ru_RU',
    'sv_SE',
    'th_TH',
    'tr_TR',
    'zh_CN',
    'zh_HK',
    'zh_TW',
  ],
});
