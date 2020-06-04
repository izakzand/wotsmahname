// Based of https://nl.wikipedia.org/wiki/ISO_3166-1
const countryDatabase = {
    PR: "Puerto Rico",
    PS: "Palestina",
    PT: "Portugal",
    PW: "Palau",
    PY: "Paraguay",
    QA: "Qatar",
    AD: "Andorra",
    AE: "Verenigde Arabische Emiraten",
    AF: "Afghanistan",
    AG: "Antigua en Barbuda",
    AI: "Anguilla",
    AL: "Albanië",
    AM: "Armenië",
    AO: "Angola",
    AQ: "Antarctica",
    AR: "Argentinië",
    AS: "Amerikaans-Samoa",
    AT: "Oostenrijk",
    RE: "Réunion",
    AU: "Australië",
    AW: "Aruba",
    AX: "Åland",
    AZ: "Azerbeidzjan",
    RO: "Roemenië",
    BA: "Bosnië en Herzegovina",
    BB: "Barbados",
    RS: "Servië",
    BD: "Bangladesh",
    BE: "België",
    RU: "Rusland",
    BF: "Burkina Faso",
    BG: "Bulgarije",
    RW: "Rwanda",
    BH: "Bahrein",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint-Barthélemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    SA: "Saoedi-Arabië",
    BQ: "Caribisch Nederland",
    SB: "Salomonseilanden",
    BR: "Brazilië",
    SC: "Seychellen",
    BS: "Bahama's",
    SD: "Soedan",
    BT: "Bhutan",
    SE: "Zweden",
    BV: "Bouveteiland",
    SG: "Singapore",
    BW: "Botswana",
    SH: "Sint-Helena, Ascension en Tristan da Cunha",
    SI: "Slovenië",
    SJ: "Spitsbergen en Jan Mayen",
    BY: "Wit-Rusland",
    BZ: "Belize",
    SK: "Slowakije",
    SL: "Sierra Leone",
    SM: "San Marino",
    SN: "Senegal",
    SO: "Somalië",
    CA: "Canada",
    SR: "Suriname",
    CC: "Cocoseilanden",
    SS: "Zuid-Soedan",
    CD: "Congo-Kinshasa",
    ST: "Sao Tomé en Principe",
    SV: "El Salvador",
    CF: "Centraal-Afrikaanse Republiek",
    CG: "Congo-Brazzaville",
    SX: "Sint Maarten",
    CH: "Zwitserland",
    CI: "Ivoorkust",
    SY: "Syrië",
    SZ: "Swaziland",
    CK: "Cookeilanden",
    CL: "Chili",
    CM: "Kameroen",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    TC: "Turks- en Caicoseilanden",
    TD: "Tsjaad",
    TF: "Franse Zuidelijke en Antarctische Gebieden",
    CU: "Cuba",
    CV: "Kaapverdië",
    TG: "Togo",
    CW: "Curaçao",
    TH: "Thailand",
    CX: "Christmaseiland",
    CY: "Cyprus",
    TJ: "Tadzjikistan",
    TK: "Tokelau",
    CZ: "Tsjechië",
    TL: "Oost-Timor",
    TM: "Turkmenistan",
    TN: "Tunesië",
    TO: "Tonga",
    TR: "Turkije",
    TT: "Trinidad en Tobago",
    DE: "Duitsland",
    TV: "Tuvalu",
    TW: "Taiwan",
    DJ: "Djibouti",
    TZ: "Tanzania",
    DK: "Denemarken",
    DM: "Dominica",
    DO: "Dominicaanse Republiek",
    UA: "Oekraïne",
    UG: "Oeganda",
    DZ: "Algerije",
    UM: "Kleine afgelegen eilanden van de Verenigde Staten",
    EC: "Ecuador",
    US: "Verenigde Staten",
    EE: "Estland",
    EG: "Egypte",
    EH: "Westelijke Sahara",
    UY: "Uruguay",
    UZ: "Oezbekistan",
    VA: "Vaticaanstad",
    ER: "Eritrea",
    VC: "Saint Vincent en de Grenadines",
    ES: "Spanje",
    ET: "Ethiopië",
    VE: "Venezuela",
    VG: "Britse Maagdeneilanden",
    VI: "Amerikaanse Maagdeneilanden",
    VN: "Vietnam",
    VU: "Vanuatu",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falklandeilanden",
    FM: "Micronesia",
    FO: "Faeröer",
    FR: "Frankrijk",
    WF: "Wallis en Futuna",
    GA: "Gabon",
    GB: "Verenigd Koninkrijk",
    WS: "Samoa",
    GD: "Grenada",
    GE: "Georgië",
    GF: "Frans-Guyana",
    GG: "Guernsey",
    GH: "Ghana",
    GI: "Gibraltar",
    GL: "Groenland",
    GM: "Gambia",
    GN: "Guinee",
    GP: "Guadeloupe",
    GQ: "Equatoriaal-Guinea",
    GR: "Griekenland",
    GS: "Zuid-Georgia en de Zuidelijke Sandwicheilanden",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinee-Bissau",
    GY: "Guyana",
    HK: "Hongkong",
    HM: "Heard en McDonaldeilanden",
    HN: "Honduras",
    HR: "Kroatië",
    HT: "Haïti",
    YE: "Jemen",
    HU: "Hongarije",
    ID: "Indonesië",
    YT: "Mayotte",
    IE: "Ierland",
    IL: "Israël",
    IM: "Man",
    IN: "India",
    IO: "Brits Indische Oceaanterritorium",
    ZA: "Zuid-Afrika",
    IQ: "Irak",
    IR: "Iran",
    IS: "IJsland",
    IT: "Italië",
    ZM: "Zambia",
    JE: "Jersey",
    ZW: "Zimbabwe",
    JM: "Jamaica",
    JO: "Jordanië",
    JP: "Japan",
    KE: "Kenia",
    KG: "Kirgizië",
    KH: "Cambodja",
    KI: "Kiribati",
    KM: "Comoren",
    KN: "Saint Kitts en Nevis",
    KP: "Noord-Korea",
    KR: "Zuid-Korea",
    KW: "Koeweit",
    KY: "Kaaimaneilanden",
    KZ: "Kazachstan",
    LA: "Laos",
    LB: "Libanon",
    LC: "Saint Lucia",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LR: "Liberia",
    LS: "Lesotho",
    LT: "Litouwen",
    LU: "Luxemburg",
    LV: "Letland",
    LY: "Libië",
    MA: "Marokko",
    MC: "Monaco",
    MD: "Moldavië",
    ME: "Montenegro",
    MF: "Sint-Maarten",
    MG: "Madagaskar",
    MH: "Marshalleilanden",
    MK: "Noord-Macedonië",
    ML: "Mali",
    MM: "Myanmar",
    MN: "Mongolië",
    MO: "Macau",
    MP: "Noordelijke Marianen",
    MQ: "Martinique",
    MR: "Mauritanië",
    MS: "Montserrat",
    MT: "Malta",
    MU: "Mauritius",
    MV: "Maldiven",
    MW: "Malawi",
    MX: "Mexico",
    MY: "Maleisië",
    MZ: "Mozambique",
    NA: "Namibië",
    NC: "Nieuw-Caledonië",
    NE: "Niger",
    NF: "Norfolk",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Nederland",
    NO: "Noorwegen",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    NZ: "Nieuw-Zeeland",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PF: "Frans-Polynesië",
    PG: "Papoea-Nieuw-Guinea",
    PH: "Filipijnen",
    PK: "Pakistan",
    PL: "Polen",
    PM: "Saint-Pierre en Miquelon",
    PN: "Pitcairneilanden"
};