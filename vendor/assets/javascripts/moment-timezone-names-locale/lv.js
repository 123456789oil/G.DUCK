// moment-timezone-localization for lang code: lv

(function(global, factory) {
  typeof exports === "object" &&
  typeof module !== "undefined" &&
  typeof require === "function"
    ? factory(require("../moment"))
    : typeof define === "function" && define.amd
    ? define(["../moment"], factory)
    : factory(global.moment);
})(this, function(moment) {
  "use strict";

  moment.tz.localizedNames = function() {
    return [
      { value: "Africa/Abidjan", name: "Abidžana", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "Akra", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "Adisabeba",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "Alžīra", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "Asmara", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "Bamako", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "Bangi", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "Bandžula", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "Bisava", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "Blantaira", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "Brazavila",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "Bužumbura", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "Kaira", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "Kasablanka",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "Seuta", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "Konakri", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "Dakara", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "Dāresalāma",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "Džibutija", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "Duala", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "Ajūna", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "Frītauna", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "Gaborone", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "Harare", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "Johannesburga",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "Džūba", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "Kampala", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "Hartūma", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "Kigali", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "Kinšasa", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "Lagosa", id: "Africa/Lagos" },
      {
        value: "Africa/Libreville",
        name: "Librevila",
        id: "Africa/Libreville"
      },
      { value: "Africa/Lome", name: "Lome", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "Luanda", id: "Africa/Luanda" },
      {
        value: "Africa/Lubumbashi",
        name: "Lubumbaši",
        id: "Africa/Lubumbashi"
      },
      { value: "Africa/Lusaka", name: "Lusaka", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "Malabo", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "Maputu", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "Maseru", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "Mbabane", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "Mogadīšo", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "Monrovija", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "Nairobi", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "Ndžamena", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "Niameja", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "Nuakšota", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "Vagadugu",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "Portonovo",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "Santome", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "Tripole", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "Tunisa", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "Vindhuka", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "Adaka", id: "America/Adak" },
      { value: "America/Anchorage", name: "Ankurāža", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "Angilja", id: "America/Anguilla" },
      { value: "America/Antigua", name: "Antigva", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "Aragvaina",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "Larjoha",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "Riogaljegosa",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "Salta",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "Sanhuana",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "Sanluisa",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "Tukumana",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "Ušuaja",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "Aruba", id: "America/Aruba" },
      { value: "America/Asuncion", name: "Asunsjona", id: "America/Asuncion" },
      { value: "America/Bahia", name: "Baija", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "Bajabanderasa",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "Barbadosa", id: "America/Barbados" },
      { value: "America/Belem", name: "Belena", id: "America/Belem" },
      { value: "America/Belize", name: "Beliza", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "Blansablona",
        id: "America/Blanc-Sablon"
      },
      { value: "America/Boa_Vista", name: "Boavista", id: "America/Boa_Vista" },
      { value: "America/Bogota", name: "Bogota", id: "America/Bogota" },
      { value: "America/Boise", name: "Boisisitija", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "Buenosairesa",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "Kembridžbeja",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "Kampugrandi",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "Kankuna", id: "America/Cancun" },
      { value: "America/Caracas", name: "Karakasa", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "Katamarka",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "Kajenna", id: "America/Cayenne" },
      { value: "America/Cayman", name: "Kaimanu salas", id: "America/Cayman" },
      { value: "America/Chicago", name: "Čikāga", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "Čivava", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "Atikokana",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "Kordova", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "Kostarika",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "Krestona", id: "America/Creston" },
      { value: "America/Cuiaba", name: "Kujaba", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "Kirasao", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "Denmārkšavna",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "Dousona", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "Dousonkrīka",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "Denvera", id: "America/Denver" },
      { value: "America/Detroit", name: "Detroita", id: "America/Detroit" },
      { value: "America/Dominica", name: "Dominika", id: "America/Dominica" },
      { value: "America/Edmonton", name: "Edmontona", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "Eirunepe", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "Salvadora",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "Fortnelsona",
        id: "America/Fort_Nelson"
      },
      {
        value: "America/Fortaleza",
        name: "Fortaleza",
        id: "America/Fortaleza"
      },
      {
        value: "America/Glace_Bay",
        name: "Gleisbeja",
        id: "America/Glace_Bay"
      },
      { value: "America/Godthab", name: "Nūka", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "Gūsbeja", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "Grandtkērka",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "Grenāda", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "Gvadelupa",
        id: "America/Guadeloupe"
      },
      {
        value: "America/Guatemala",
        name: "Gvatemala",
        id: "America/Guatemala"
      },
      {
        value: "America/Guayaquil",
        name: "Gvajakila",
        id: "America/Guayaquil"
      },
      { value: "America/Guyana", name: "Gajāna", id: "America/Guyana" },
      { value: "America/Halifax", name: "Helifeksa", id: "America/Halifax" },
      { value: "America/Havana", name: "Havana", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "Ermosiljo",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "Noksa, Indiāna",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "Marengo, Indiāna",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "Pītersbērga, Indiāna",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "Telsitija, Indiāna",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "Vīveja, Indiāna",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "Vinsensa, Indiāna",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "Vinamaka, Indiāna",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "Indianapolisa",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "Inuvika", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "Ikaluita", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "Jamaika", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "Huhuja", id: "America/Jujuy" },
      { value: "America/Juneau", name: "Džuno", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "Montičelo, Kentuki",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "Krālendeika",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "Lapasa", id: "America/La_Paz" },
      { value: "America/Lima", name: "Lima", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "Losandželosa",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "Lūivila",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "Louerprinseskvotera",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "Masejo", id: "America/Maceio" },
      { value: "America/Managua", name: "Managva", id: "America/Managua" },
      { value: "America/Manaus", name: "Manausa", id: "America/Manaus" },
      { value: "America/Marigot", name: "Merigota", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "Martinika",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "Matamorosa",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "Masatlana", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "Mendosa", id: "America/Mendoza" },
      { value: "America/Menominee", name: "Menominī", id: "America/Menominee" },
      { value: "America/Merida", name: "Merida", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "Metlakatla",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "Mehiko",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "Mikelona", id: "America/Miquelon" },
      { value: "America/Moncton", name: "Monktona", id: "America/Moncton" },
      {
        value: "America/Monterrey",
        name: "Monterreja",
        id: "America/Monterrey"
      },
      {
        value: "America/Montevideo",
        name: "Montevideo",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "Montserrata",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "Naso", id: "America/Nassau" },
      { value: "America/New_York", name: "Ņujorka", id: "America/New_York" },
      { value: "America/Nipigon", name: "Nipigona", id: "America/Nipigon" },
      { value: "America/Nome", name: "Noma", id: "America/Nome" },
      { value: "America/Noronha", name: "Noroņa", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "Bjula, Ziemeļdakota",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "Sentera, Ziemeļdakota",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "Ņūseilema, Ziemeļdakota",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "Ohinaga", id: "America/Ojinaga" },
      { value: "America/Panama", name: "Panama", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "Pannirtuna",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "Paramaribo",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "Fīniksa", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "Portoprensa",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "Portofspeina",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "Portuveļu",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "Puertoriko",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "Puntaarenasa",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "Reinirivera",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "Rankininleta",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "Resifi", id: "America/Recife" },
      { value: "America/Regina", name: "Ridžaina", id: "America/Regina" },
      { value: "America/Resolute", name: "Rezolūta", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "Riobranko",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "Santaisabela",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "Santarena", id: "America/Santarem" },
      { value: "America/Santiago", name: "Santjago", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "Santodomingo",
        id: "America/Santo_Domingo"
      },
      { value: "America/Sao_Paulo", name: "Sanpaulu", id: "America/Sao_Paulo" },
      {
        value: "America/Scoresbysund",
        name: "Itokortormita",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "Sitka", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "Senbartelmī",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "Sentdžonsa", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "Sentkitsa", id: "America/St_Kitts" },
      { value: "America/St_Lucia", name: "Sentlūsija", id: "America/St_Lucia" },
      {
        value: "America/St_Thomas",
        name: "Sentomasa",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "Sentvinsenta",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "Sviftkarenta",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "Tegusigalpa",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "Tule", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "Tanderbeja",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "Tihuana", id: "America/Tijuana" },
      { value: "America/Toronto", name: "Toronto", id: "America/Toronto" },
      { value: "America/Tortola", name: "Tortola", id: "America/Tortola" },
      {
        value: "America/Vancouver",
        name: "Vankūvera",
        id: "America/Vancouver"
      },
      {
        value: "America/Whitehorse",
        name: "Vaithorsa",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "Vinipega", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "Jakutata", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "Jelounaifa",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "Keisi", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "Deivisa", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "Dimondirvila",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "Makvori",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "Mosona", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "Makmerdo",
        id: "Antarctica/McMurdo"
      },
      { value: "Antarctica/Palmer", name: "Pālmera", id: "Antarctica/Palmer" },
      { value: "Antarctica/Rothera", name: "Rotera", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "Šova", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "Trolla", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "Vostoka", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "Longjērbīene",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "Adena", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "Almati", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "Ammāna", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "Anadira", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "Aktau", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "Aktebe", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "Ašgabata", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "Atirau", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "Bagdāde", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "Bahreina", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "Baku", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "Bangkoka", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "Barnaula", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "Beirūta", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "Biškeka", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "Bruneja", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "Kalkāta", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "Čita", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "Čoibalsana", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "Kolombo", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "Damaska", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "Daka", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "Dili", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "Dubaija", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "Dušanbe", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "Famagusta", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "Gaza", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "Hebrona", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "Honkonga", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "Hovda", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "Irkutska", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "Džakarta", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "Džajapura", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "Jeruzaleme", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "Kabula", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "Kamčatka", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "Karāči", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "Katmandu", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "Handiga", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "Krasnojarska",
        id: "Asia/Krasnoyarsk"
      },
      {
        value: "Asia/Kuala_Lumpur",
        name: "Kualalumpura",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "Kučina", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "Kuveita", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "Makao", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "Magadana", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "Makasara", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "Manila", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "Maskata", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "Nikosija", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "Novokuzņecka",
        id: "Asia/Novokuznetsk"
      },
      {
        value: "Asia/Novosibirsk",
        name: "Novosibirska",
        id: "Asia/Novosibirsk"
      },
      { value: "Asia/Omsk", name: "Omska", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "Orala", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "Pnompeņa", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "Pontianaka", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "Phenjana", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "Katara", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "Kizilorda", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "Ranguna", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "Rijāda", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "Hošimina", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "Sahalīna", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "Samarkanda", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "Seula", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "Šanhaja", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "Singapūra", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "Sredņekolimska",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "Taibei", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "Taškenta", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "Tbilisi", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "Teherāna", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "Thimphu", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "Tokija", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "Tomska", id: "Asia/Tomsk" },
      { value: "Asia/Ulaanbaatar", name: "Ulanbatora", id: "Asia/Ulaanbaatar" },
      { value: "Asia/Urumqi", name: "Urumči", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "Ustjņera", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "Vjenčana", id: "Asia/Vientiane" },
      {
        value: "Asia/Vladivostok",
        name: "Vladivostoka",
        id: "Asia/Vladivostok"
      },
      { value: "Asia/Yakutsk", name: "Jakutska", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "Jekaterinburga",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "Erevāna", id: "Asia/Yerevan" },
      { value: "Atlantic/Azores", name: "Azoru salas", id: "Atlantic/Azores" },
      { value: "Atlantic/Bermuda", name: "Bermuda", id: "Atlantic/Bermuda" },
      {
        value: "Atlantic/Canary",
        name: "Kanāriju salas",
        id: "Atlantic/Canary"
      },
      {
        value: "Atlantic/Cape_Verde",
        name: "Kaboverde",
        id: "Atlantic/Cape_Verde"
      },
      { value: "Atlantic/Faeroe", name: "Fēru salas", id: "Atlantic/Faeroe" },
      { value: "Atlantic/Madeira", name: "Madeira", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "Reikjavika",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "Dienviddžordžija",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "Sv.Helēnas sala",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "Stenli", id: "Atlantic/Stanley" },
      {
        value: "Australia/Adelaide",
        name: "Adelaida",
        id: "Australia/Adelaide"
      },
      {
        value: "Australia/Brisbane",
        name: "Brisbena",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "Brokenhila",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "Kari", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "Dārvina", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "Jukla", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "Hobārta", id: "Australia/Hobart" },
      {
        value: "Australia/Lindeman",
        name: "Lindemana",
        id: "Australia/Lindeman"
      },
      {
        value: "Australia/Lord_Howe",
        name: "Lordhava",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "Melburna",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "Pērta", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "Sidneja", id: "Australia/Sydney" },
      {
        value: "Etc/UTC",
        name: "Universālais koordinētais laiks",
        id: "Etc/UTC"
      },
      { value: "Europe/Amsterdam", name: "Amsterdama", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "Andora", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "Astrahaņa", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "Atēnas", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "Belgrada", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "Berlīne", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "Bratislava",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "Brisele", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "Bukareste", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "Budapešta", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "Bīzingene", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "Kišiņeva", id: "Europe/Chisinau" },
      {
        value: "Europe/Copenhagen",
        name: "Kopenhāgena",
        id: "Europe/Copenhagen"
      },
      {
        value: "Europe/Dublin",
        name: "Īrijas ziemas laiksDublina",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "Gibraltārs", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "Gērnsija", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "Helsinki", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "Menas sala",
        id: "Europe/Isle_of_Man"
      },
      { value: "Europe/Istanbul", name: "Stambula", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "Džērsija", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "Kaļiņingrada",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "Kijeva", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "Kirova", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "Lisabona", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "Ļubļana", id: "Europe/Ljubljana" },
      {
        value: "Europe/London",
        name: "Lielbritānijas vasaras laiksLondona",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "Luksemburga",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "Madride", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "Malta", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "Mariehamna", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "Minska", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "Monako", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "Maskava", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "Oslo", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "Parīze", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "Podgorica", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "Prāga", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "Rīga", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "Roma", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "Samara", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "Sanmarīno",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "Sarajeva", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "Saratova", id: "Europe/Saratov" },
      {
        value: "Europe/Simferopol",
        name: "Simferopole",
        id: "Europe/Simferopol"
      },
      { value: "Europe/Skopje", name: "Skopje", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "Sofija", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "Stokholma", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "Tallina", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "Tirāna", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "Uļjanovska", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "Užhoroda", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "Vaduca", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "Vatikāns", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "Vīne", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "Viļņa", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "Volgograda", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "Varšava", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "Zagreba", id: "Europe/Zagreb" },
      {
        value: "Europe/Zaporozhye",
        name: "Zaporožje",
        id: "Europe/Zaporozhye"
      },
      { value: "Europe/Zurich", name: "Cīrihe", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "Antananarivu",
        id: "Indian/Antananarivo"
      },
      {
        value: "Indian/Chagos",
        name: "Čagosu arhipelāgs",
        id: "Indian/Chagos"
      },
      {
        value: "Indian/Christmas",
        name: "Ziemsvētku sala",
        id: "Indian/Christmas"
      },
      {
        value: "Indian/Cocos",
        name: "Kokosu (Kīlinga) sala",
        id: "Indian/Cocos"
      },
      { value: "Indian/Comoro", name: "Komoras", id: "Indian/Comoro" },
      {
        value: "Indian/Kerguelen",
        name: "Kergelēna sala",
        id: "Indian/Kerguelen"
      },
      { value: "Indian/Mahe", name: "Mae", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "Maldīvija", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "Maurīcija", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "Majota", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "Reinjona", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "Apija", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "Oklenda", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "Bugenvila sala",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "Četema", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "Lieldienu sala", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "Efate", id: "Pacific/Efate" },
      {
        value: "Pacific/Enderbury",
        name: "Enderberija",
        id: "Pacific/Enderbury"
      },
      { value: "Pacific/Fakaofo", name: "Fakaofo", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "Fidži", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "Funafuti", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "Galapagu salas",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "Gambjē salas", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "Gvadalkanala",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "Guama", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "Honolulu", id: "Pacific/Honolulu" },
      {
        value: "Pacific/Johnston",
        name: "Džonstona atols",
        id: "Pacific/Johnston"
      },
      {
        value: "Pacific/Kiritimati",
        name: "Kirisimasi",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "Kosraja", id: "Pacific/Kosrae" },
      {
        value: "Pacific/Kwajalein",
        name: "Kvadžaleina",
        id: "Pacific/Kwajalein"
      },
      { value: "Pacific/Majuro", name: "Madžuro", id: "Pacific/Majuro" },
      {
        value: "Pacific/Marquesas",
        name: "Marķīza salas",
        id: "Pacific/Marquesas"
      },
      { value: "Pacific/Midway", name: "Midvejs", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "Nauru", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "Niue", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "Norfolka", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "Numea", id: "Pacific/Noumea" },
      { value: "Pacific/Pago_Pago", name: "Pagopago", id: "Pacific/Pago_Pago" },
      { value: "Pacific/Palau", name: "Palau", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "Pitkērna", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "Ponpeja", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "Portmorsbi",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "Rarotonga",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "Saipana", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "Taiti", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "Tarava", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "Tongatapu",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "Čūka", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "Veika sala", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "Volisa", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
