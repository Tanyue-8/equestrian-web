'use client';
// SSG配置：构建时生成静态页面
export const dynamic = 'force-static';


import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

type LocaleKey = 'zh' | 'en' | 'ja' | 'ko' | 'es' | 'de' | 'ar';

const i18n: Record<LocaleKey, {
  h1: string; heroSub: string;
  addressLabel: string; addressLine1: string; addressLine2: string;
  emailLabel: string; whatsappHint: string;
  hoursLabel: string; hoursLine1: string; hoursLine2: string;
  channelsLabel: string;
  channels: { icon: string; label: string; desc: string }[];
  formTitle: string;
  labelName: string; placeholderName: string;
  labelContact: string; placeholderContact: string;
  labelCountry: string; countryPlaceholder: string; countries: string[];
  labelIndustry: string; industryPlaceholder: string; industries: string[];
  labelProduct: string; products: string[];
  labelMessage: string; placeholderMessage: string;
  submitBtn: string; submitNote: string;
  alertRequired: string; alertSuccess: string;
  scenarios: { label: string; emoji: string }[];
}> = {
  zh: {
    h1: '\u8054\u7cfb\u6211\u4eec', heroSub: '\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u9700\u6c42\uff0c\u6211\u4eec\u627f\u8bba24\u5c0f\u65f6\u5185\u56de\u590d',
    addressLabel: '\u603b\u90e8\u5730\u5740', addressLine1: '\u5e7f\u4e1c\u7701\u4e1c\u839e\u5e02\u5be5\u6b65\u9547\u836f\u52d2\u5927\u5706\u857812\u53f72\u68cb703\u5ba4', addressLine2: '\u6beb\u90bb\u5e7f\u5dde\u3001\u6df1\u5733\uff0c\u9ad8\u9435\u7ea61\u5c0f\u65f6',
    emailLabel: '\u90ae\u7bb1', whatsappHint: '\u70b9\u51fb\u76f4\u63a5\u53d1\u8d77\u5bf9\u8bdd',
    hoursLabel: '\u5de5\u4f5c\u65f6\u95f4', hoursLine1: '\u5468\u4e00\u81f3\u5468\u4e94 9:00-18:00 (GMT+8)', hoursLine2: '\u7ebf\u4e0a\u8be2\u76d87\u57294\u5c0f\u65f6\u63a5\u6536',
    channelsLabel: '\u8054\u7cfb\u6e20\u9053',
    channels: [{ icon: '\ud83d\udccb', label: '\u8be2\u76d8\u8868\u5355', desc: '\u586b\u5199\u4e0b\u65b9\u8868\u5355 \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: '\u5373\u65f6\u6c9f\u901a' }, { icon: '\u2709\ufe0f', label: '\u90ae\u4ef6', desc: '\u76f4\u63a5\u8054\u7cfb\u56e2\u961f' }],
    formTitle: '\u83b7\u53d6\u62a5\u4ef7',
    labelName: '\u59d3\u540d *', placeholderName: '\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d',
    labelContact: '\u90ae\u7bb1 / WhatsApp *', placeholderContact: '\u8bf7\u8f93\u5165\u90ae\u7bb1\u6216WhatsApp\u53f7\u7801',
    labelCountry: '\u56fd\u5bb6/\u5730\u533a *', countryPlaceholder: '\u8bf7\u9009\u62e9', countries: ['\u4e2d\u56fd\u5927\u9646', '\u4e2d\u56fd\u9999\u6e2f', '\u82f1\u56fd', '\u7f8e\u56fd', '\u6fb3\u5927\u5229\u4e9a', '\u5fb7\u56fd', '\u65e5\u672c', '\u97e9\u56fd', '\u963f\u8054\u914c', '\u5176\u4ed6'],
    labelIndustry: '\u884c\u4e1a *', industryPlaceholder: '\u8bf7\u9009\u62e9', industries: ['\u9a6c\u672f\u4ff1\u4e50\u90e8', '\u5b66\u6821\u6559\u80b2', '\u5eb7\u590d\u6cbb\u7597', '\u8d5b\u9a6c\u9a91\u5e08', '\u4f53\u9a8c\u573a\u9986', '\u5bb6\u5ead\u4e2a\u4eba', '\u5176\u4ed6'],
    labelProduct: '\u611f\u5174\u8da3\u7684\u4ea7\u54c1', products: ['\u672a\u786e\u5b9a / \u9700\u8981\u63a8\u8350', '\u5168\u90e8\u4ea7\u54c1', 'Horse-MS30P \u4e13\u4e1a\u4e09\u9879\u8d5b', 'Pony-MS30 \u667a\u80fd\u6559\u5b66', 'Racehorse-MS20 \u7ade\u901f'],
    labelMessage: '\u7559\u8a00', placeholderMessage: '\u5982\uff1a\u573a\u9986\u9762\u79ef\u3001\u5b66\u5458\u89c4\u6a21\u3001\u671f\u671b\u914d\u7f6e\u6570\u91cf\u3001\u9884\u8ba1\u91c7\u8d2d\u65f6\u95f4\u7b49...',
    submitBtn: '\u63d0\u4ea4\u8be2\u76d8', submitNote: '\u6211\u4eec\u627f\u8bba24\u5c0f\u65f6\u5185\u56de\u590d\uff0c\u8282\u5047\u65e5\u4ea6\u6709\u54cd\u5e94',
    alertRequired: '\u8bf7\u586b\u5199\u5fc5\u586b\u9879\uff08\u59d3\u540d\u3001\u8054\u7cfb\u65b9\u5f0f\u3001\u56fd\u5bb6\u3001\u884c\u4e1a\uff09', alertSuccess: '\u611f\u8c22\u60a8\u7684\u8be2\u76d8\uff01\u6211\u4eec\u5c06\u572824\u5c0f\u65f6\u5185\u4e0e\u60a8\u8054\u7cfb\u3002',
    scenarios: [{ label: '\u4ff1\u4e50\u90e8\u91c7\u8d2d', emoji: '\ud83c\udfc7' }, { label: '\u5b66\u6821\u914d\u7f6e', emoji: '\ud83c\udfeb' }, { label: '\u5eb7\u590d\u5f15\u8fdb', emoji: '\ud83c\udfe5' }, { label: '\u9a91\u5e08\u8bad\u7ec3', emoji: '\ud83c\udfc6' }, { label: '\u5c55\u89c8\u6d3b\u52a8', emoji: '\ud83c\udfa4' }, { label: '\u5bb6\u5ead / \u4e2a\u4eba\u8d2d\u4e70', emoji: '\ud83c\udfe0' }],
  },
  en: {
    h1: 'Contact Us', heroSub: 'Tell us your needs \u2014 we promise to reply within 24 hours',
    addressLabel: 'Headquarters', addressLine1: 'Room 703, Building 2, No.12 Yaoyuan Street, Liaobao Town, Dongguan, Guangdong, China', addressLine2: 'Adjacent to Guangzhou & Shenzhen, ~1hr by high-speed rail',
    emailLabel: 'Email', whatsappHint: 'Click to start a conversation',
    hoursLabel: 'Business Hours', hoursLine1: 'Mon\u2013Fri 9:00\u201318:00 (GMT+8)', hoursLine2: 'Online enquiries received 24/7',
    channelsLabel: 'Contact Channels',
    channels: [{ icon: '\ud83d\udccb', label: 'Enquiry Form', desc: 'Fill in the form below \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: 'Instant messaging' }, { icon: '\u2709\ufe0f', label: 'Email', desc: 'Contact the team directly' }],
    formTitle: 'Get a Quote',
    labelName: 'Name *', placeholderName: 'Enter your name',
    labelContact: 'Email / WhatsApp *', placeholderContact: 'Enter your email or WhatsApp number',
    labelCountry: 'Country / Region *', countryPlaceholder: 'Select', countries: ['Mainland China', 'Hong Kong', 'United Kingdom', 'United States', 'Australia', 'Germany', 'Japan', 'South Korea', 'UAE', 'Other'],
    labelIndustry: 'Industry *', industryPlaceholder: 'Select', industries: ['Equestrian Club', 'School / Education', 'Rehabilitation', 'Racing / Jockey', 'Experience Venue', 'Home / Personal', 'Other'],
    labelProduct: 'Product Interest', products: ['Undecided / Need Recommendation', 'All Products', 'Horse-MS30P Professional', 'Pony-MS30 Education', 'Racehorse-MS20 Racing'],
    labelMessage: 'Message', placeholderMessage: 'E.g. venue size, number of students, quantity needed, expected purchase timeline...',
    submitBtn: 'Submit Enquiry', submitNote: 'We promise to reply within 24 hours, including holidays',
    alertRequired: 'Please fill in all required fields (Name, Contact, Country, Industry)', alertSuccess: 'Thank you for your enquiry! We will contact you within 24 hours.',
    scenarios: [{ label: 'Club Purchase', emoji: '\ud83c\udfc7' }, { label: 'School Setup', emoji: '\ud83c\udfeb' }, { label: 'Rehabilitation', emoji: '\ud83c\udfe5' }, { label: 'Jockey Training', emoji: '\ud83c\udfc6' }, { label: 'Exhibition Event', emoji: '\ud83c\udfa4' }, { label: 'Home / Personal', emoji: '\ud83c\udfe0' }],
  },
  ja: {
    h1: '\u304a\u554f\u3044\u5408\u308f\u305b', heroSub: '\u30cb\u30fc\u30ba\u3092\u304a\u77e5\u3089\u305b\u304f\u3060\u3055\u3044\u300224\u6642\u9593\u4ee5\u5185\u306b\u8fd4\u4fe1\u3044\u305f\u3057\u307e\u3059',
    addressLabel: '\u672c\u793e\u6240\u5728\u5730', addressLine1: '\u4e2d\u56fd\u5e83\u6771\u7701\u6771\u839e\u5e02\u5be5\u6b65\u9547\u85ac\u52d2\u5927\u5713\u885712\u53f72\u68df703\u5ba4', addressLine2: '\u5e83\u5dde\u30fb\u6df1\u5733\u306b\u8fd1\u63a5\u3002\u65b0\u5e79\u7dda\u3067\u7d041\u6642\u9593',
    emailLabel: '\u30e1\u30fc\u30eb', whatsappHint: '\u30af\u30ea\u30c3\u30af\u3057\u3066\u3054\u9023\u7d61\u304f\u3060\u3055\u3044',
    hoursLabel: '\u55b6\u696d\u6642\u9593', hoursLine1: '\u6708\u301c\u91d1 9:00\u301318:00 (GMT+8)', hoursLine2: '\u304a\u554f\u3044\u5408\u308f\u305b\u306f24\u6642\u9593365\u65e5\u53d7\u4ed8',
    channelsLabel: '\u9023\u7d61\u65b9\u6cd5',
    channels: [{ icon: '\ud83d\udccb', label: '\u304a\u554f\u3044\u5408\u308f\u305b\u30d5\u30a9\u30fc\u30e0', desc: '\u4e0b\u8a18\u30d5\u30a9\u30fc\u30e0\u306b\u8a18\u5165 \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: '\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30c1\u30e3\u30c3\u30c8' }, { icon: '\u2709\ufe0f', label: '\u30e1\u30fc\u30eb', desc: '\u30c1\u30fc\u30e0\u306b\u76f4\u63a5\u9023\u7d61' }],
    formTitle: '\u8996\u5bdf\u304a\u7533\u3057\u8fbc\u307f',
    labelName: '\u304a\u540d\u524d *', placeholderName: '\u304a\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044',
    labelContact: '\u30e1\u30fc\u30eb / WhatsApp *', placeholderContact: '\u30e1\u30fc\u30eb\u307e\u305f\u306fWhatsApp\u756a\u53f7\u3092\u5165\u529b',
    labelCountry: '\u56fd / \u5730\u57df *', countryPlaceholder: '\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044', countries: ['\u4e2d\u56fd\u672c\u571f', '\u9999\u6e2f', '\u82f1\u56fd', '\u7c73\u56fd', '\u30aa\u30fc\u30b9\u30c8\u30e9\u30ea\u30a2', '\u30c9\u30a4\u30c4', '\u65e5\u672c', '\u97d3\u56fd', '\u30a2\u30e9\u30d6\u9996\u9577\u56fd\u9023\u90a6', '\u305d\u306e\u4ed6'],
    labelIndustry: '\u696d\u7a2e *', industryPlaceholder: '\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044', industries: ['\u9a6c\u8853\u30af\u30e9\u30d6', '\u5b66\u6821\u30fb\u6559\u80b2', '\u30ea\u30cf\u30d3\u30ea', '\u7af6\u99ac\u30fb\u9a0e\u624b', '\u4f53\u9a13\u65bd\u8a2d', '\u30db\u30fc\u30e0\u30fb\u500b\u4eba', '\u305d\u306e\u4ed6'],
    labelProduct: '\u95a2\u5fc3\u306e\u3042\u308b\u88fd\u54c1', products: ['\u672a\u5b9a / \u63a8\u5968\u5e0c\u671b', '\u5168\u8ca3\u54c1', 'Horse-MS30P \u30d7\u30ed', 'Pony-MS30 \u6559\u80b2', 'Racehorse-MS20 \u7af6\u99ac'],
    labelMessage: '\u30e1\u30c3\u30bb\u30fc\u30b8', placeholderMessage: '\u4f8b\uff1a\u65bd\u8a2d\u306e\u5927\u304d\u3055\u3001\u751f\u5f92\u6570\u3001\u5fc5\u8981\u53f0\u6570\u3001\u5c0e\u5165\u4e88\u5b9a\u6642\u671f\u306a\u3069',
    submitBtn: '\u304a\u554f\u3044\u5408\u308f\u305b\u3092\u9001\u4fe1\u3059\u308b', submitNote: '24\u6642\u9593\u4ee5\u5185\u306b\u8fd4\u4fe1\u3044\u305f\u3057\u307e\u3059\u3002\u795d\u795d\u65e5\u3082\u5bfe\u5fdc\u3057\u3066\u304a\u308a\u307e\u3059',
    alertRequired: '\u5fc5\u9808\u9805\u76ee\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044', alertSuccess: '\u304a\u554f\u3044\u5408\u308f\u305b\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff0124\u6642\u9593\u4ee5\u5185\u306b\u3054\u9023\u7d61\u3044\u305f\u3057\u307e\u3059',
    scenarios: [{ label: '\u30af\u30e9\u30d6\u8cfc\u5165', emoji: '\ud83c\udfc7' }, { label: '\u5b66\u6821\u5c0e\u5165', emoji: '\ud83c\udfeb' }, { label: '\u30ea\u30cf\u30d3\u30ea', emoji: '\ud83c\udfe5' }, { label: '\u9a0e\u624b\u8a13\u7df4', emoji: '\ud83c\udfc6' }, { label: '\u5c55\u793a\u30a4\u30d9\u30f3\u30c8', emoji: '\ud83c\udfa4' }, { label: '\u30db\u30fc\u30e0\u30fb\u500b\u4eba', emoji: '\ud83c\udfe0' }],
  },
  ko: {
    h1: '\uc5f0\ub77d\ud558\uae30', heroSub: '\ud544\uc694\ud558\uc2e0 \ub0b4\uc6a9\uc744 \uc54c\ub824\uc8fc\uc138\uc694. 24\uc2dc\uac04 \uc774\ub0b4 \ub2f5\ubcc0 \uc57d\uc18d\ub4dc\ub9bd\ub2c8\ub2e4',
    addressLabel: '\ubcf8\uc0ac \uc8fc\uc18c', addressLine1: '\uc911\uad6d \uad11\ub465\uc131 \ub3d9\uad00\uc2dc \ub8cc\ubd80\uc9c4 \uc57d\ub799\ub300\uc6d0\uac00 12\ud638 2\ub3d9 703\ud638', addressLine2: '\uad11\uc800\uc6b0\u00b7\uc2ec\uc9fc\uc640 \uc778\uc811. \uace0\uc18d\uccca\ub3c4 \uc57d 1\uc2dc\uac04',
    emailLabel: '\uc774\uba54\uc77c', whatsappHint: '\ud074\ub9ad\ud558\uc5ec \ub300\ud654 \uc2dc\uc791',
    hoursLabel: '\uc5c5\ubb34 \uc2dc\uac04', hoursLine1: '\uc6d4\uff5e\uae08 9:00\uff5e18:00 (GMT+8)', hoursLine2: '\uc628\ub77c\uc778 \ubb38\uc758 24\uc2dc\uac04 365\uc77c \uc811\uc218',
    channelsLabel: '\uc5f0\ub77d \ucc44\ub110',
    channels: [{ icon: '\ud83d\udccb', label: '\ubb38\uc758 \uc591\uc2dd', desc: '\uc544\ub798 \uc591\uc2dd \uc791\uc131 \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: '\uc2e4\uc2dc\uac04 \ub300\ud654' }, { icon: '\u2709\ufe0f', label: '\uc774\uba54\uc77c', desc: '\ud300\uc5d0 \uc9c1\uc811 \uc5f0\ub77d' }],
    formTitle: '\uacac\uc801 \uc694\uccad',
    labelName: '\uc774\ub984 *', placeholderName: '\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694',
    labelContact: '\uc774\uba54\uc77c / WhatsApp *', placeholderContact: '\uc774\uba54\uc77c \ub610\ub294 WhatsApp \ubc88\ud638 \uc785\ub825',
    labelCountry: '\uad6d\uac00 / \uc9c0\uc5ed *', countryPlaceholder: '\uc120\ud0dd', countries: ['\uc911\uad6d \ubcf8\ud1a0', '\ud64d\ucf69', '\uc601\uad6d', '\ubbf8\uad6d', '\ud638\uc8fc', '\ub3c5\uc77c', '\uc77c\ubcf8', '\ud55c\uad6d', '\uc544\ub78d\uc5d0\ubbf8\ub9ac\ud2b8', '\uae30\ud0c0'],
    labelIndustry: '\uc5c5\uc885 *', industryPlaceholder: '\uc120\ud0dd', industries: ['\uc2b9\ub9c8 \ud074\ub7fd', '\ud559\uad50 / \uad50\uc721', '\uc7ac\ud65c', '\uacbd\ub9c8 / \uae30\uc218', '\uccb4\ud5d8 \ud589\uc0ac\uc7a5', '\ud648 / \uac1c\uc778', '\uae30\ud0c0'],
    labelProduct: '\uad00\uc2ec \uc81c\ud488', products: ['\ubbf8\uc815 / \ucd94\ucc9c \uc6d0\ud568', '\uc804\uccb4 \uc81c\ud488', 'Horse-MS30P \ud504\ub85c\ud398\uc154\ub110', 'Pony-MS30 \uad50\uc721', 'Racehorse-MS20 \uacbd\ub9c8'],
    labelMessage: '\uba54\uc2dc\uc9c0', placeholderMessage: '\uc608: \uc2dc\uc124 \ud06c\uae30, \ud559\uc0dd \uc218, \ud544\uc694 \ub300\uc218, \ub3c4\uc785 \uc608\uc815 \uc2dc\uae30 \ub4f1',
    submitBtn: '\ubb38\uc758 \uc81c\uc636', submitNote: '24\uc2dc\uac04 \uc774\ub0b4 \ub2f5\ubcc0. \ud734\uc77c\uc5d0\ub3c4 \ub300\uc751',
    alertRequired: '\ud544\uc218 \ud56d\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694', alertSuccess: '\ubb38\uc758\ud574 \uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4! 24\uc2dc\uac04 \uc774\ub0b4 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4.',
    scenarios: [{ label: '\ud074\ub7fd \uad6c\ub9e4', emoji: '\ud83c\udfc7' }, { label: '\ud559\uad50 \ub3c4\uc785', emoji: '\ud83c\udfeb' }, { label: '\uc7ac\ud65c', emoji: '\ud83c\udfe5' }, { label: '\uae30\uc218 \ud6c8\ub828', emoji: '\ud83c\udfc6' }, { label: '\uc804\uc2dc \ud589\uc0ac', emoji: '\ud83c\udfa4' }, { label: '\ud648 / \uac1c\uc778', emoji: '\ud83c\udfe0' }],
  },
  es: {
    h1: 'Cont\u00e1ctenos', heroSub: 'Cu\u00e9ntenos sus necesidades \u2014 prometemos responder en 24 horas',
    addressLabel: 'Sede Central', addressLine1: 'Hab. 703, Edif. 2, N\u00ba12 Calle Yaoyuan, Liaobao, Dongguan, Guangdong, China', addressLine2: 'Cerca de Guangzhou y Shenzhen, ~1h en tren de alta velocidad',
    emailLabel: 'Correo Electr\u00f3nico', whatsappHint: 'Haga clic para iniciar una conversaci\u00f3n',
    hoursLabel: 'Horario Comercial', hoursLine1: 'Lun\u2013Vie 9:00\u201318:00 (GMT+8)', hoursLine2: 'Consultas en l\u00ednea recibidas 24/7',
    channelsLabel: 'Canales de Contacto',
    channels: [{ icon: '\ud83d\udccb', label: 'Formulario', desc: 'Complete el formulario \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: 'Chat instant\u00e1neo' }, { icon: '\u2709\ufe0f', label: 'Email', desc: 'Contacte al equipo' }],
    formTitle: 'Solicitar Presupuesto',
    labelName: 'Nombre *', placeholderName: 'Ingrese su nombre',
    labelContact: 'Email / WhatsApp *', placeholderContact: 'Ingrese su email o n\u00famero de WhatsApp',
    labelCountry: 'Pa\u00eds / Regi\u00f3n *', countryPlaceholder: 'Seleccionar', countries: ['China Continental', 'Hong Kong', 'Reino Unido', 'Estados Unidos', 'Australia', 'Alemania', 'Jap\u00f3n', 'Corea del Sur', 'Emiratos \u00c1rabes', 'Otro'],
    labelIndustry: 'Sector *', industryPlaceholder: 'Seleccionar', industries: ['Club Ecuestre', 'Escuela / Educaci\u00f3n', 'Rehabilitaci\u00f3n', 'Carreras / Jockey', 'Local de Experiencia', 'Hogar / Personal', 'Otro'],
    labelProduct: 'Producto de Inter\u00e9s', products: ['Sin decidir / Necesito recomendaci\u00f3n', 'Todos los productos', 'Horse-MS30P Profesional', 'Pony-MS30 Educaci\u00f3n', 'Racehorse-MS20 Carreras'],
    labelMessage: 'Mensaje', placeholderMessage: 'Ej: tama\u00f1o del local, n\u00famero de alumnos, cantidad requerida, plazo de compra...',
    submitBtn: 'Enviar Consulta', submitNote: 'Prometemos responder en 24 horas, incluidos festivos',
    alertRequired: 'Por favor complete todos los campos obligatorios', alertSuccess: '\u00a1Gracias por su consulta! Nos pondremos en contacto en 24 horas.',
    scenarios: [{ label: 'Compra para Club', emoji: '\ud83c\udfc7' }, { label: 'Instalaci\u00f3n Escolar', emoji: '\ud83c\udfeb' }, { label: 'Rehabilitaci\u00f3n', emoji: '\ud83c\udfe5' }, { label: 'Entrenamiento Jockey', emoji: '\ud83c\udfc6' }, { label: 'Evento Exposici\u00f3n', emoji: '\ud83c\udfa4' }, { label: 'Hogar / Personal', emoji: '\ud83c\udfe0' }],
  },
  de: {
    h1: 'Kontakt', heroSub: 'Schildern Sie uns Ihren Bedarf \u2014 wir versprechen eine Antwort innerhalb von 24 Stunden',
    addressLabel: 'Hauptsitz', addressLine1: 'Zi. 703, Geb. 2, Nr. 12 Yaoyuan-Stra\u00dfe, Liaobao, Dongguan, Guangdong, China', addressLine2: 'In der N\u00e4he von Guangzhou & Shenzhen, ~1 Std. mit dem Hochgeschwindigkeitszug',
    emailLabel: 'E-Mail', whatsappHint: 'Klicken um ein Gespr\u00e4ch zu starten',
    hoursLabel: 'Gesch\u00e4ftszeiten', hoursLine1: 'Mo\u2013Fr 9:00\u201318:00 (GMT+8)', hoursLine2: 'Online-Anfragen werden 24/7 entgegengenommen',
    channelsLabel: 'Kontaktkan\u00e4le',
    channels: [{ icon: '\ud83d\udccb', label: 'Anfrageformular', desc: 'Formular ausf\u00fcllen \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: 'Sofort-Chat' }, { icon: '\u2709\ufe0f', label: 'E-Mail', desc: 'Team direkt kontaktieren' }],
    formTitle: 'Angebot Anfordern',
    labelName: 'Name *', placeholderName: 'Ihren Namen eingeben',
    labelContact: 'E-Mail / WhatsApp *', placeholderContact: 'E-Mail oder WhatsApp-Nummer eingeben',
    labelCountry: 'Land / Region *', countryPlaceholder: 'Ausw\u00e4hlen', countries: ['Festlandchina', 'Hongkong', 'Vereinigtes K\u00f6nigreich', 'USA', 'Australien', 'Deutschland', 'Japan', 'S\u00fcdkorea', 'VAE', 'Sonstiges'],
    labelIndustry: 'Branche *', industryPlaceholder: 'Ausw\u00e4hlen', industries: ['Reitclub', 'Schule / Bildung', 'Rehabilitation', 'Rennsport / Jockey', 'Erlebnisst\u00e4tte', 'Privat / Heim', 'Sonstiges'],
    labelProduct: 'Produktinteresse', products: ['Nicht entschieden / Empfehlung gew\u00fcnscht', 'Alle Produkte', 'Horse-MS30P Professional', 'Pony-MS30 Bildung', 'Racehorse-MS20 Rennsport'],
    labelMessage: 'Nachricht', placeholderMessage: 'Z.B. Raumgr\u00f6\u00dfe, Sch\u00fclerzahl, ben\u00f6tigte Ger\u00e4teanzahl, geplanter Kaufzeitraum...',
    submitBtn: 'Anfrage Senden', submitNote: 'Wir versprechen eine Antwort innerhalb von 24 Stunden, auch an Feiertagen',
    alertRequired: 'Bitte f\u00fcllen Sie alle Pflichtfelder aus', alertSuccess: 'Vielen Dank f\u00fcr Ihre Anfrage! Wir melden uns innerhalb von 24 Stunden.',
    scenarios: [{ label: 'Club-Kauf', emoji: '\ud83c\udfc7' }, { label: 'Schulausstattung', emoji: '\ud83c\udfeb' }, { label: 'Rehabilitation', emoji: '\ud83c\udfe5' }, { label: 'Jockey-Training', emoji: '\ud83c\udfc6' }, { label: 'Messe / Event', emoji: '\ud83c\udfa4' }, { label: 'Privat / Heim', emoji: '\ud83c\udfe0' }],
  },
  ar: {
    h1: '\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', heroSub: '\u0623\u062e\u0628\u0631\u0646\u0627 \u0628\u0627\u062d\u062a\u064a\u0627\u062c\u0627\u062a\u0643 \u2014 \u0646\u0639\u062f \u0628\u0627\u0644\u0631\u062f \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629',
    addressLabel: '\u0627\u0644\u0645\u0642\u0631 \u0627\u0644\u0631\u0626\u064a\u0633\u064a', addressLine1: '\u063a\u0631\u0641\u0629 703\u060c \u0645\u0628\u0646\u0649 2\u060c \u0634\u0627\u0631\u0639 \u064a\u0627\u0648\u064a\u0648\u0627\u0646 12\u060c \u0644\u064a\u0627\u0648\u0628\u0627\u0648\u060c \u062f\u0648\u0646\u063a\u0648\u0627\u0646\u060c \u063a\u0648\u0627\u0646\u063a\u062f\u0648\u0646\u063a\u060c \u0627\u0644\u0635\u064a\u0646', addressLine2: '\u0628\u0627\u0644\u0642\u0631\u0628 \u0645\u0646 \u063a\u0648\u0627\u0646\u063a\u0632\u0648 \u0648\u0634\u064a\u0646\u062c\u0647\u0646\u060c \u0633\u0627\u0639\u0629 \u0628\u0627\u0644\u0642\u0637\u0627\u0631 \u0627\u0644\u0633\u0631\u064a\u0639',
    emailLabel: '\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a', whatsappHint: '\u0627\u0636\u063a\u0637 \u0644\u0628\u062f\u0621 \u0645\u062d\u0627\u062f\u062b\u0629',
    hoursLabel: '\u0633\u0627\u0639\u0627\u062a \u0627\u0644\u0639\u0645\u0644', hoursLine1: '\u0627\u0644\u0627\u062b\u0646\u064a\u0646\u2013\u0627\u0644\u062c\u0645\u0639\u0629 9:00\u201318:00 (GMT+8)', hoursLine2: '\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0627\u062a \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a \u0645\u0642\u0628\u0648\u0644\u0629 24/7',
    channelsLabel: '\u0642\u0646\u0648\u0627\u062a \u0627\u0644\u062a\u0648\u0627\u0635\u0644',
    channels: [{ icon: '\ud83d\udccb', label: '\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631', desc: '\u0627\u0645\u0644\u0623 \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0623\u062f\u0646\u0627\u0647 \u2192' }, { icon: '\ud83d\udcac', label: 'WhatsApp', desc: '\u062f\u0631\u062f\u0634\u0629 \u0641\u0648\u0631\u064a\u0629' }, { icon: '\u2709\ufe0f', label: '\u0627\u0644\u0628\u0631\u064a\u062f', desc: '\u062a\u0648\u0627\u0635\u0644 \u0645\u0628\u0627\u0634\u0631\u0629' }],
    formTitle: '\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631',
    labelName: '\u0627\u0644\u0627\u0633\u0645 *', placeholderName: '\u0623\u062f\u062e\u0644 \u0627\u0633\u0645\u0643',
    labelContact: '\u0627\u0644\u0628\u0631\u064a\u062f / WhatsApp *', placeholderContact: '\u0623\u062f\u062e\u0644 \u0628\u0631\u064a\u062f\u0643 \u0623\u0648 \u0631\u0642\u0645 WhatsApp',
    labelCountry: '\u0627\u0644\u062f\u0648\u0644\u0629 / \u0627\u0644\u0645\u0646\u0637\u0642\u0629 *', countryPlaceholder: '\u0627\u062e\u062a\u0631', countries: ['\u0627\u0644\u0635\u064a\u0646 \u0627\u0644\u0628\u0631\u064a\u0629', '\u0647\u0648\u0646\u063a \u0643\u0648\u0646\u063a', '\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629', '\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629', '\u0623\u0633\u062a\u0631\u0627\u0644\u064a\u0627', '\u0623\u0644\u0645\u0627\u0646\u064a\u0627', '\u0627\u0644\u064a\u0627\u0628\u0627\u0646', '\u0643\u0648\u0631\u064a\u0627 \u0627\u0644\u062c\u0646\u0648\u0628\u064a\u0629', '\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a', '\u063a\u064a\u0631\u0647\u0627'],
    labelIndustry: '\u0627\u0644\u0642\u0637\u0627\u0639 *', industryPlaceholder: '\u0627\u062e\u062a\u0631', industries: ['\u0646\u0627\u062f\u064a \u0641\u0631\u0648\u0633\u064a\u0629', '\u0645\u062f\u0631\u0633\u0629 / \u062a\u0639\u0644\u064a\u0645', '\u062a\u0623\u0647\u064a\u0644', '\u0633\u0628\u0627\u0642 / \u062c\u0648\u0643\u064a', '\u0645\u0646\u0634\u0623\u0629 \u062a\u062c\u0631\u0628\u064a\u0629', '\u0645\u0646\u0632\u0644 / \u0634\u062e\u0635\u064a', '\u063a\u064a\u0631\u0647\u0627'],
    labelProduct: '\u0627\u0644\u0645\u0646\u062a\u062c \u0627\u0644\u0645\u0647\u062a\u0645 \u0628\u0647', products: ['\u063a\u064a\u0631 \u0645\u062d\u062f\u062f / \u0623\u062d\u062a\u0627\u062c \u062a\u0648\u0635\u064a\u0629', '\u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a', 'Horse-MS30P \u0627\u062d\u062a\u0631\u0627\u0641\u064a', 'Pony-MS30 \u062a\u0639\u0644\u064a\u0645\u064a', 'Racehorse-MS20 \u0633\u0628\u0627\u0642'],
    labelMessage: '\u0631\u0633\u0627\u0644\u0629', placeholderMessage: '\u0645\u062b\u0644: \u062d\u062c\u0645 \u0627\u0644\u0645\u0646\u0634\u0623\u0629\u060c \u0639\u062f\u062f \u0627\u0644\u0637\u0644\u0627\u0628\u060c \u0627\u0644\u0643\u0645\u064a\u0629 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629\u060c \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a...',
    submitBtn: '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631', submitNote: '\u0646\u0639\u062f \u0628\u0627\u0644\u0631\u062f \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629\u060c \u0628\u0645\u0627 \u0641\u064a \u0630\u0644\u0643 \u0623\u064a\u0627\u0645 \u0627\u0644\u0639\u0637\u0644',
    alertRequired: '\u064a\u0631\u062c\u0649 \u0645\u0644\u0621 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0625\u0644\u0632\u0627\u0645\u064a\u0629', alertSuccess: '\u0634\u0643\u0631\u064b\u0627 \u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631\u0643! \u0633\u0646\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u062e\u0644\u0627\u0644 24 \u0633\u0627\u0639\u0629.',
    scenarios: [{ label: '\u0634\u0631\u0627\u0621 \u0644\u0644\u0646\u0627\u062f\u064a', emoji: '\ud83c\udfc7' }, { label: '\u062a\u062c\u0647\u064a\u0632 \u0645\u062f\u0631\u0633\u0629', emoji: '\ud83c\udfeb' }, { label: '\u062a\u0623\u0647\u064a\u0644', emoji: '\ud83c\udfe5' }, { label: '\u062a\u062f\u0631\u064a\u0628 \u062c\u0648\u0643\u064a', emoji: '\ud83c\udfc6' }, { label: '\u0641\u0639\u0627\u0644\u064a\u0629 \u0645\u0639\u0631\u0636', emoji: '\ud83c\udfa4' }, { label: '\u0645\u0646\u0632\u0644 / \u0634\u062e\u0635\u064a', emoji: '\ud83c\udfe0' }],
  },
};

export default function ContactPage() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [country, setCountry] = useState('');
  const [industry, setIndustry] = useState('');
  const [product, setProduct] = useState('未确定');
  const [message, setMessage] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  // CSS 常量
  const colors = {
    black: '#0A1E3F',
    blue: '#C9A84C',
    blueDeep: '#B8832E',
    grayBg: '#F5F0E8',
    text: '#1C2333',
    textLight: '#5A6478',
    textLighter: '#9BA5B5',
    border: '#E0D8C8',
  };

  const locale = useLocale() as LocaleKey;
  const t = i18n[locale] ?? i18n.en;
  const isRTL = locale === 'ar';

  // 强制设置导航栏为深色背景
  useEffect(() => {
    document.body.classList.add('contact-page');
    document.body.setAttribute('data-page', 'contact');
    return () => {
      document.body.classList.remove('contact-page');
      document.body.removeAttribute('data-page');
    };
  }, []);

  const scenarios = t.scenarios;
  const channels = t.channels;

  const handleSubmit = async () => {
    if (!name || !contact || !country || !industry) {
      alert(t.alertRequired);
      return;
    }
    
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          country,
          industry,
          product,
          message,
          scenario: selectedScenario,
          locale,
        }),
      });
      
      if (response.ok) {
        alert(t.alertSuccess);
        // 清空表单
        setName('');
        setContact('');
        setCountry('');
        setIndustry('');
        setProduct('未确定');
        setMessage('');
        setSelectedScenario(null);
      } else {
        alert('提交失败，请稍后再试');
      }
    } catch (error) {
      console.error('提交错误:', error);
      alert('提交失败，请检查网络连接');
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: '联系模拟马® | 获取报价',
            description: '联系广东探月教育设备有限公司获取专业马术模拟器报价和解决方案，24小时内回复。',
            url: 'https://www.equestrian-simulators.com/contact',
            mainEntity: {
              '@type': 'Organization',
              name: '广东探月教育设备有限公司',
              alternateName: '模拟马®',
              url: 'https://www.equestrian-simulators.com',
              email: 'info@equestrian-simulators.com',
              address: { '@type': 'PostalAddress', 'addressCountry': 'CN', 'addressRegion': 'Guangdong' },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
                availableLanguage: ['Chinese', 'English'],
                areaServed: 'Worldwide'
              }
            }
          }),
        }}
      />

      <style>{`
        body.contact-page nav {
          background: #0A1E3F !important;
        }
      `}</style>

      <main dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section
          style={{
            background: colors.grayBg,
            padding: 'calc(120px + 44px) 40px 80px',
            textAlign: 'center',
            marginBottom: 0,
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              fontWeight: 700,
              color: colors.black,
              marginBottom: '8px',
              letterSpacing: '-0.5px',
              margin: '0 0 8px 0',
            }}
          >
            {t.h1}
          </h1>
          <p style={{ fontSize: '16px', color: colors.textLight, margin: 0 }}>
            {t.heroSub}
          </p>
        </section>

        {/* Main Content */}
        <section
          style={{
            background: '#FFFFFF',
            padding: '80px 40px',
            marginTop: 0,
          }}
        >
          <div
            id="contact-main-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr',
              gap: '60px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {/* Left Column - Contact Info */}
            <div>
              {/* Info Cards */}
              <div>
                {/* Address Card */}
                <div
                  style={{
                    background: colors.grayBg,
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '16px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: colors.textLight,
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {t.addressLabel}
                  </h4>
                  <p style={{ fontSize: '15px', color: colors.text, lineHeight: 1.6, margin: '0 0 4px 0' }}>
                    {t.addressLine1}
                  </p>
                  <p style={{ fontSize: '12px', color: colors.textLighter, margin: 0 }}>
                    {t.addressLine2}
                  </p>
                </div>

                {/* Email Card */}
                <div
                  style={{
                    background: colors.grayBg,
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '16px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: colors.textLight,
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {t.emailLabel}
                  </h4>
                  <a
                    href="mailto:info@equestrian-simulators.com"
                    style={{ color: colors.blue, fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}
                  >
                    info@equestrian-simulators.com
                  </a>
                </div>

                {/* WhatsApp Card */}
                <div
                  style={{
                    background: colors.grayBg,
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '16px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: colors.textLight,
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    WhatsApp
                  </h4>
                  <a
                    href="https://wa.me/8613112886222"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: colors.blue, fontWeight: 500, fontSize: '15px', textDecoration: 'none', display: 'block' }}
                  >
                    +86 131 1288 6222
                  </a>
                  <p style={{ color: colors.textLighter, fontSize: '13px', margin: '4px 0 0 0' }}>
                    {t.whatsappHint}
                  </p>
                </div>

                {/* Working Hours Card */}
                <div
                  style={{
                    background: colors.grayBg,
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '16px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      color: colors.textLight,
                      marginBottom: '8px',
                      margin: '0 0 8px 0',
                    }}
                  >
                    {t.hoursLabel}
                  </h4>
                  <p style={{ fontSize: '15px', color: colors.text, lineHeight: 1.6, margin: '0 0 4px 0' }}>
                    {t.hoursLine1}
                  </p>
                  <p style={{ color: colors.textLighter, fontSize: '13px', margin: 0 }}>
                    {t.hoursLine2}
                  </p>
                </div>
              </div>

              {/* Contact Channels */}
              <div>
                <h5
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    color: colors.textLight,
                    margin: '24px 0 12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.channelsLabel}
                </h5>
                <div
                  id="contact-channels-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                  }}
                >
                  {channels.map((channel, index) => (
                    <div
                      key={index}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        border: '1px solid #E0D8C8',
                        padding: '20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = colors.blue;
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(201,168,76,0.3)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = colors.border;
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>{channel.icon}</div>
                      <div
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: colors.black,
                          marginBottom: '4px',
                        }}
                      >
                        {channel.label}
                      </div>
                      <div style={{ fontSize: '12px', color: colors.textLight }}>{channel.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Inquiry Form */}
            <div
              style={{
                background: colors.grayBg,
                borderRadius: '16px',
                padding: '48px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: colors.black,
                  marginBottom: '24px',
                  margin: '0 0 24px 0',
                }}
              >
                {t.formTitle}
              </h3>

              {/* Scenario Tags */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {scenarios.map((scenario) => (
                    <button
                      key={scenario.label}
                      onClick={() => setSelectedScenario(scenario.label)}
                      style={{
                        padding: '6px 14px',
                        background: selectedScenario === scenario.label ? colors.blue : '#FFFFFF',
                        border: `1px solid ${selectedScenario === scenario.label ? colors.blue : colors.border}`,
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: selectedScenario === scenario.label ? '#fff' : colors.text,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        if (selectedScenario !== scenario.label) {
                          e.currentTarget.style.borderColor = colors.blue;
                        }
                      }}
                      onMouseLeave={e => {
                        if (selectedScenario !== scenario.label) {
                          e.currentTarget.style.borderColor = colors.border;
                        }
                      }}
                    >
                      {scenario.emoji} {scenario.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Name */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: colors.textLight,
                      marginBottom: '6px',
                      fontWeight: 700,
                    }}
                  >
                    {t.labelName}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.placeholderName}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E0D8C8',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: colors.text,
                      background: '#fff',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.3)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Contact */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: colors.textLight,
                      marginBottom: '6px',
                      fontWeight: 700,
                    }}
                  >
                    {t.labelContact}
                  </label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder={t.placeholderContact}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E0D8C8',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: colors.text,
                      background: '#fff',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.3)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Country */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: colors.textLight,
                      marginBottom: '6px',
                      fontWeight: 700,
                    }}
                  >
                    {t.labelCountry}
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E0D8C8',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: colors.text,
                      background: '#fff',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.3)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">{t.countryPlaceholder}</option>
                    {t.countries.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Industry */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: colors.textLight,
                      marginBottom: '6px',
                      fontWeight: 700,
                    }}
                  >
                    {t.labelIndustry}
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E0D8C8',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: colors.text,
                      background: '#fff',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.3)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">{t.industryPlaceholder}</option>
                    {t.industries.map((ind) => <option key={ind} value={ind}>{ind}</option>)}
                  </select>
                </div>

                {/* Product Interest */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: colors.textLight,
                      marginBottom: '6px',
                      fontWeight: 700,
                    }}
                  >
                    {t.labelProduct}
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E0D8C8',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: colors.text,
                      background: '#fff',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.3)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {t.products.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '16px' }}>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      color: colors.textLight,
                      marginBottom: '6px',
                      fontWeight: 700,
                    }}
                  >
                    {t.labelMessage}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.placeholderMessage}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #E0D8C8',
                      borderRadius: '8px',
                      fontSize: '15px',
                      color: colors.text,
                      background: '#fff',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                      height: '100px',
                      boxSizing: 'border-box',
                    }}
                    onFocus={e => {
                      e.currentTarget.style.borderColor = colors.blue;
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.3)';
                    }}
                    onBlur={e => {
                      e.currentTarget.style.borderColor = colors.border;
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  style={{
                    width: '100%',
                    padding: '14px',
                    background: colors.blue,
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = colors.blueDeep;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = colors.blue;
                  }}
                >
                  {t.submitBtn}
                </button>

                {/* Submit Note */}
                <div
                  style={{
                    fontSize: '12px',
                    color: colors.textLighter,
                    marginTop: '12px',
                    textAlign: 'center',
                  }}
                >
                  {t.submitNote}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}