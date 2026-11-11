export interface Voice {
  id: string;
  label: string;
  group: string;
  lang: string;
  tld: string;
  voice: string;
}

export const voices: Voice[] = [
  { id: "en-us", label: "American", group: "English", lang: "en", tld: "com", voice: "en-US-AvaNeural" },
  { id: "en-uk", label: "British", group: "English", lang: "en", tld: "co.uk", voice: "en-GB-SoniaNeural" },
  { id: "en-ng", label: "Nigerian", group: "English", lang: "en", tld: "com.ng", voice: "en-NG-EzinneNeural" },
  { id: "en-in", label: "Indian", group: "English", lang: "en", tld: "co.in", voice: "en-IN-NeerjaNeural" },
  { id: "en-au", label: "Australian", group: "English", lang: "en", tld: "com.au", voice: "en-AU-NatashaNeural" },
  { id: "es-es", label: "Spanish, Spain", group: "Other languages", lang: "es", tld: "es", voice: "es-ES-ElviraNeural" },
  { id: "es-mx", label: "Spanish, Mexico", group: "Other languages", lang: "es", tld: "com.mx", voice: "es-MX-DaliaNeural" },
  { id: "fr-fr", label: "French", group: "Other languages", lang: "fr", tld: "fr", voice: "fr-FR-DeniseNeural" },
  { id: "pt-br", label: "Portuguese, Brazil", group: "Other languages", lang: "pt", tld: "com.br", voice: "pt-BR-FranciscaNeural" },
  { id: "de-de", label: "German", group: "Other languages", lang: "de", tld: "de", voice: "de-DE-KatjaNeural" },
  { id: "it-it", label: "Italian", group: "Other languages", lang: "it", tld: "it", voice: "it-IT-ElsaNeural" },
  { id: "ar", label: "Arabic", group: "Other languages", lang: "ar", tld: "com", voice: "ar-EG-SalmaNeural" },
  { id: "hi", label: "Hindi", group: "Other languages", lang: "hi", tld: "co.in", voice: "hi-IN-SwaraNeural" },
  { id: "zh", label: "Mandarin", group: "Other languages", lang: "zh-CN", tld: "com", voice: "zh-CN-XiaoxiaoNeural" },
  { id: "ja", label: "Japanese", group: "Other languages", lang: "ja", tld: "com", voice: "ja-JP-NanamiNeural" },
];

export const voiceGroups = ["English", "Other languages"];
