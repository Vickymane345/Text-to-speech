export interface Voice {
  id: string;
  label: string;
  group: string;
  lang: string;
  tld: string;
}

export const voices: Voice[] = [
  { id: "en-us", label: "American", group: "English", lang: "en", tld: "com" },
  { id: "en-uk", label: "British", group: "English", lang: "en", tld: "co.uk" },
  { id: "en-ng", label: "Nigerian", group: "English", lang: "en", tld: "com.ng" },
  { id: "en-in", label: "Indian", group: "English", lang: "en", tld: "co.in" },
  { id: "en-au", label: "Australian", group: "English", lang: "en", tld: "com.au" },
  { id: "es-es", label: "Spanish, Spain", group: "Other languages", lang: "es", tld: "es" },
  { id: "es-mx", label: "Spanish, Mexico", group: "Other languages", lang: "es", tld: "com.mx" },
  { id: "fr-fr", label: "French", group: "Other languages", lang: "fr", tld: "fr" },
  { id: "pt-br", label: "Portuguese, Brazil", group: "Other languages", lang: "pt", tld: "com.br" },
  { id: "de-de", label: "German", group: "Other languages", lang: "de", tld: "de" },
  { id: "it-it", label: "Italian", group: "Other languages", lang: "it", tld: "it" },
  { id: "ar", label: "Arabic", group: "Other languages", lang: "ar", tld: "com" },
  { id: "hi", label: "Hindi", group: "Other languages", lang: "hi", tld: "co.in" },
  { id: "zh", label: "Mandarin", group: "Other languages", lang: "zh-CN", tld: "com" },
  { id: "ja", label: "Japanese", group: "Other languages", lang: "ja", tld: "com" },
];

export const voiceGroups = ["English", "Other languages"];
