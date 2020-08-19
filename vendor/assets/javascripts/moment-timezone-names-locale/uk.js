// moment-timezone-localization for lang code: uk

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
      { value: "Africa/Abidjan", name: "Абіджан", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "Аккра", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "Аддис-Абеба",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "Алжир", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "Асмера", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "Бамако", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "Банґі", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "Банжул", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "Бісау", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "Блантайр", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "Браззавіль",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "Бужумбура", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "Каїр", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "Касабланка",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "Сеута", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "Конакрі", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "Дакар", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "Дар-ес-Салам",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "Джібуті", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "Дуала", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "Ель-Аюн", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "Фрітаун", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "Ґабороне", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "Хараре", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "Йоганнесбурґ",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "Джуба", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "Кампала", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "Хартум", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "Кігалі", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "Кіншаса", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "Лаґос", id: "Africa/Lagos" },
      {
        value: "Africa/Libreville",
        name: "Лібревіль",
        id: "Africa/Libreville"
      },
      { value: "Africa/Lome", name: "Ломе", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "Луанда", id: "Africa/Luanda" },
      {
        value: "Africa/Lubumbashi",
        name: "Лубумбаші",
        id: "Africa/Lubumbashi"
      },
      { value: "Africa/Lusaka", name: "Лусака", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "Малабо", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "Мапуту", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "Масеру", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "Мбабане", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "Моґадішо", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "Монровія", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "Найробі", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "Нджамена", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "Ніамей", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "Нуакшотт", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "Уаґадуґу",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "Порто-Ново",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "Сан-Томе", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "Тріполі", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "Туніс", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "Віндгук", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "Адак", id: "America/Adak" },
      { value: "America/Anchorage", name: "Анкоридж", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "Анґілья", id: "America/Anguilla" },
      { value: "America/Antigua", name: "Антиґуа", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "Араґуаіна",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "Ла-Ріоха",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "Ріо-Ґальєґос",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "Сальта",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "Сан-Хуан",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "Сан-Луїс",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "Тукуман",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "Ушуая",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "Аруба", id: "America/Aruba" },
      { value: "America/Asuncion", name: "Асунсьйон", id: "America/Asuncion" },
      { value: "America/Bahia", name: "Байя", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "Баїя Бандерас",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "Барбадос", id: "America/Barbados" },
      { value: "America/Belem", name: "Белен", id: "America/Belem" },
      { value: "America/Belize", name: "Беліз", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "Блан-Саблон",
        id: "America/Blanc-Sablon"
      },
      {
        value: "America/Boa_Vista",
        name: "Боа-Віста",
        id: "America/Boa_Vista"
      },
      { value: "America/Bogota", name: "Боґота", id: "America/Bogota" },
      { value: "America/Boise", name: "Бойсе", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "Буенос-Айрес",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "Кеймбрідж-Бей",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "Кампу-Ґранді",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "Канкун", id: "America/Cancun" },
      { value: "America/Caracas", name: "Каракас", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "Катамарка",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "Каєнна", id: "America/Cayenne" },
      {
        value: "America/Cayman",
        name: "Кайманові Острови",
        id: "America/Cayman"
      },
      { value: "America/Chicago", name: "Чікаґо", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "Чіуауа", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "Атікокан",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "Кордова", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "Коста-Ріка",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "Крестон", id: "America/Creston" },
      { value: "America/Cuiaba", name: "Куяба", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "Кюрасао", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "Денмарксхавн",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "Доусон", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "Доусон-Крік",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "Денвер", id: "America/Denver" },
      { value: "America/Detroit", name: "Детройт", id: "America/Detroit" },
      { value: "America/Dominica", name: "Домініка", id: "America/Dominica" },
      { value: "America/Edmonton", name: "Едмонтон", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "Ейрунепе", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "Сальвадор",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "Форт Нельсон",
        id: "America/Fort_Nelson"
      },
      {
        value: "America/Fortaleza",
        name: "Форталеза",
        id: "America/Fortaleza"
      },
      {
        value: "America/Glace_Bay",
        name: "Ґлейс-Бей",
        id: "America/Glace_Bay"
      },
      { value: "America/Godthab", name: "Нуук", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "Ґус-Бей", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "Ґранд-Терк",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "Ґренада", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "Ґваделупа",
        id: "America/Guadeloupe"
      },
      {
        value: "America/Guatemala",
        name: "Ґватемала",
        id: "America/Guatemala"
      },
      { value: "America/Guayaquil", name: "Ґуаякіль", id: "America/Guayaquil" },
      { value: "America/Guyana", name: "Ґайана", id: "America/Guyana" },
      { value: "America/Halifax", name: "Галіфакс", id: "America/Halifax" },
      { value: "America/Havana", name: "Гавана", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "Ермосільйо",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "Нокс, Індіана",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "Маренго, Індіана",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "Пітерсберг, Індіана",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "Телл-Сіті, Індіана",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "Вівей, Індіана",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "Вінсенс, Індіана",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "Вінамак, Індіана",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "Індіанаполіс",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "Інувік", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "Ікалуїт", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "Ямайка", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "Жужуй", id: "America/Jujuy" },
      { value: "America/Juneau", name: "Джуно", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "Монтіселло, Кентуккі",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "Кралендейк",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "Ла-Пас", id: "America/La_Paz" },
      { value: "America/Lima", name: "Ліма", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "Лос-Анджелес",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "Луїсвілл",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "Лоуер-Принсес-Квотер",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "Масейо", id: "America/Maceio" },
      { value: "America/Managua", name: "Манаґуа", id: "America/Managua" },
      { value: "America/Manaus", name: "Манаус", id: "America/Manaus" },
      { value: "America/Marigot", name: "Маріґо", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "Мартініка",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "Матаморос",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "Масатлан", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "Мендоса", id: "America/Mendoza" },
      { value: "America/Menominee", name: "Меноміні", id: "America/Menominee" },
      { value: "America/Merida", name: "Меріда", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "Метлакатла",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "Мехіко",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "Мікелон", id: "America/Miquelon" },
      { value: "America/Moncton", name: "Монктон", id: "America/Moncton" },
      { value: "America/Monterrey", name: "Монтерей", id: "America/Monterrey" },
      {
        value: "America/Montevideo",
        name: "Монтевідео",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "Монтсеррат",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "Насау", id: "America/Nassau" },
      { value: "America/New_York", name: "Нью-Йорк", id: "America/New_York" },
      { value: "America/Nipigon", name: "Ніпігон", id: "America/Nipigon" },
      { value: "America/Nome", name: "Ном", id: "America/Nome" },
      { value: "America/Noronha", name: "Норонья", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "Бʼюла, Північна Дакота",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "Сентр, Північна Дакота",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "Нью-Салем, Північна Дакота",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "Охінаґа", id: "America/Ojinaga" },
      { value: "America/Panama", name: "Панама", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "Панґніртанґ",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "Парамарибо",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "Фінікс", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "Порт-о-Пренс",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "Порт-оф-Спейн",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "Порту-Велью",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "Пуерто-Ріко",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "Пунта-Аренас",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "Рейні-Рівер",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "Ренкін-Інлет",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "Ресіфі", id: "America/Recife" },
      { value: "America/Regina", name: "Реджайна", id: "America/Regina" },
      { value: "America/Resolute", name: "Резольют", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "Ріо-Бранко",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "Санта-Ісабель",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "Сантарен", id: "America/Santarem" },
      { value: "America/Santiago", name: "Сантьяґо", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "Санто-Домінґо",
        id: "America/Santo_Domingo"
      },
      {
        value: "America/Sao_Paulo",
        name: "Сан-Паулу",
        id: "America/Sao_Paulo"
      },
      {
        value: "America/Scoresbysund",
        name: "Іттоккортоорміут",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "Сітка", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "Сен-Бартелемі",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "Сент-Джонс", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "Сент-Кіттс", id: "America/St_Kitts" },
      { value: "America/St_Lucia", name: "Сент-Люсія", id: "America/St_Lucia" },
      {
        value: "America/St_Thomas",
        name: "Сент-Томас",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "Сент-Вінсент",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "Свіфт-Каррент",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "Теґусіґальпа",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "Туле", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "Тандер-Бей",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "Тіхуана", id: "America/Tijuana" },
      { value: "America/Toronto", name: "Торонто", id: "America/Toronto" },
      { value: "America/Tortola", name: "Тортола", id: "America/Tortola" },
      { value: "America/Vancouver", name: "Ванкувер", id: "America/Vancouver" },
      {
        value: "America/Whitehorse",
        name: "Вайтгорс",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "Вінніпеґ", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "Якутат", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "Єллоунайф",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "Кейсі", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "Девіс", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "Дюмон-дʼЮрвіль",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "Маккуорі",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "Моусон", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "Мак-Мердо",
        id: "Antarctica/McMurdo"
      },
      { value: "Antarctica/Palmer", name: "Палмер", id: "Antarctica/Palmer" },
      { value: "Antarctica/Rothera", name: "Ротера", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "Сьова", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "Тролл", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "Восток", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "Лонґйїр",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "Аден", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "Алмати", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "Амман", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "Анадир", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "Актау", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "Актобе", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "Ашгабат", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "Атирау", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "Багдад", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "Бахрейн", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "Баку", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "Банґкок", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "Барнаул", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "Бейрут", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "Бішкек", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "Бруней", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "Колката", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "Чита", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "Чойбалсан", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "Коломбо", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "Дамаск", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "Дакка", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "Ділі", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "Дубай", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "Душанбе", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "Фамагуста", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "Газа", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "Хеврон", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "Гонконґ", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "Ховд", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "Іркутськ", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "Джакарта", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "Джайпур", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "Єрусалим", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "Кабул", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "Камчатка", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "Карачі", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "Катманду", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "Хандига", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "Красноярськ",
        id: "Asia/Krasnoyarsk"
      },
      {
        value: "Asia/Kuala_Lumpur",
        name: "Куала-Лумпур",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "Кучінґ", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "Кувейт", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "Макао", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "Магадан", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "Макассар", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "Маніла", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "Маскат", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "Нікосія", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "Новокузнецьк",
        id: "Asia/Novokuznetsk"
      },
      {
        value: "Asia/Novosibirsk",
        name: "Новосибірськ",
        id: "Asia/Novosibirsk"
      },
      { value: "Asia/Omsk", name: "Омськ", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "Орал", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "Пномпень", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "Понтіанак", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "Пхеньян", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "Катар", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "Кизилорда", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "Янґон", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "Ер-Ріяд", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "Хошимін", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "Сахалін", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "Самарканд", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "Сеул", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "Шанхай", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "Сінґапур", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "Середньоколимськ",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "Тайбей", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "Ташкент", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "Тбілісі", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "Тегеран", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "Тхімпху", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "Токіо", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "Томськ", id: "Asia/Tomsk" },
      { value: "Asia/Ulaanbaatar", name: "Улан-Батор", id: "Asia/Ulaanbaatar" },
      { value: "Asia/Urumqi", name: "Урумчі", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "Усть-Нера", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "Вʼєнтьян", id: "Asia/Vientiane" },
      {
        value: "Asia/Vladivostok",
        name: "Владивосток",
        id: "Asia/Vladivostok"
      },
      { value: "Asia/Yakutsk", name: "Якутськ", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "Єкатеринбург",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "Єреван", id: "Asia/Yerevan" },
      {
        value: "Atlantic/Azores",
        name: "Азорські Острови",
        id: "Atlantic/Azores"
      },
      { value: "Atlantic/Bermuda", name: "Бермуди", id: "Atlantic/Bermuda" },
      {
        value: "Atlantic/Canary",
        name: "Канарські Острови",
        id: "Atlantic/Canary"
      },
      {
        value: "Atlantic/Cape_Verde",
        name: "Кабо-Верде",
        id: "Atlantic/Cape_Verde"
      },
      {
        value: "Atlantic/Faeroe",
        name: "Фарерські Острови",
        id: "Atlantic/Faeroe"
      },
      { value: "Atlantic/Madeira", name: "Мадейра", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "Рейкʼявік",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "Південна Джорджія",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "Острів Святої Єлени",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "Стенлі", id: "Atlantic/Stanley" },
      {
        value: "Australia/Adelaide",
        name: "Аделаїда",
        id: "Australia/Adelaide"
      },
      {
        value: "Australia/Brisbane",
        name: "Брісбен",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "Брокен-Хілл",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "Каррі", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "Дарвін", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "Евкла", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "Гобарт", id: "Australia/Hobart" },
      {
        value: "Australia/Lindeman",
        name: "Ліндеман",
        id: "Australia/Lindeman"
      },
      {
        value: "Australia/Lord_Howe",
        name: "Лорд-Хау",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "Мельбурн",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "Перт", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "Сідней", id: "Australia/Sydney" },
      {
        value: "Etc/UTC",
        name: "за всесвітнім координованим часом",
        id: "Etc/UTC"
      },
      { value: "Europe/Amsterdam", name: "Амстердам", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "Андорра", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "Астрахань", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "Афіни", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "Белґрад", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "Берлін", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "Братислава",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "Брюссель", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "Бухарест", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "Будапешт", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "Бюзінген", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "Кишинів", id: "Europe/Chisinau" },
      {
        value: "Europe/Copenhagen",
        name: "Копенгаґен",
        id: "Europe/Copenhagen"
      },
      {
        value: "Europe/Dublin",
        name: "за літнім часом в ІрландіїДублін",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "Ґібралтар", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "Ґернсі", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "Гельсінкі", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "Острів Мен",
        id: "Europe/Isle_of_Man"
      },
      { value: "Europe/Istanbul", name: "Стамбул", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "Джерсі", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "Калінінград",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "Київ", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "Кіров", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "Лісабон", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "Любляна", id: "Europe/Ljubljana" },
      {
        value: "Europe/London",
        name: "за літнім часом у Великій БританіїЛондон",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "Люксембурґ",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "Мадрид", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "Мальта", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "Марієгамн", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "Мінськ", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "Монако", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "Москва", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "Осло", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "Париж", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "Подгориця", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "Прага", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "Рига", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "Рим", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "Самара", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "Сан-Маріно",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "Сараєво", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "Саратов", id: "Europe/Saratov" },
      {
        value: "Europe/Simferopol",
        name: "Сімферополь",
        id: "Europe/Simferopol"
      },
      { value: "Europe/Skopje", name: "Скопʼє", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "Софія", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "Стокгольм", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "Таллінн", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "Тирана", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "Ульяновськ", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "Ужгород", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "Вадуц", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "Ватикан", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "Відень", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "Вільнюс", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "Волгоград", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "Варшава", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "Заґреб", id: "Europe/Zagreb" },
      {
        value: "Europe/Zaporozhye",
        name: "Запоріжжя",
        id: "Europe/Zaporozhye"
      },
      { value: "Europe/Zurich", name: "Цюріх", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "Антананаріву",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "Чаґос", id: "Indian/Chagos" },
      {
        value: "Indian/Christmas",
        name: "Острів Різдва",
        id: "Indian/Christmas"
      },
      { value: "Indian/Cocos", name: "Кокосові Острови", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "Комори", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "Керґелен", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "Махе", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "Мальдіви", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "Маврікій", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "Майотта", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "Реюньйон", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "Апіа", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "Окленд", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "Буґенвіль",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "Чатем", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "Острів Пасхи", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "Ефате", id: "Pacific/Efate" },
      {
        value: "Pacific/Enderbury",
        name: "Ендербері",
        id: "Pacific/Enderbury"
      },
      { value: "Pacific/Fakaofo", name: "Факаофо", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "Фіджі", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "Фунафуті", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "Ґалапаґос",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "Ґамбʼєр", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "Ґуадалканал",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "Ґуам", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "Гонолулу", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "Джонстон", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "Кірітіматі",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "Косрае", id: "Pacific/Kosrae" },
      {
        value: "Pacific/Kwajalein",
        name: "Кваджалейн",
        id: "Pacific/Kwajalein"
      },
      { value: "Pacific/Majuro", name: "Маджуро", id: "Pacific/Majuro" },
      {
        value: "Pacific/Marquesas",
        name: "Маркізькі острови",
        id: "Pacific/Marquesas"
      },
      { value: "Pacific/Midway", name: "Мідвей", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "Науру", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "Ніуе", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "Норфолк", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "Нумеа", id: "Pacific/Noumea" },
      {
        value: "Pacific/Pago_Pago",
        name: "Паго-Паго",
        id: "Pacific/Pago_Pago"
      },
      { value: "Pacific/Palau", name: "Палау", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "Піткерн", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "Понапе", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "Порт-Морсбі",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "Раротонґа",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "Сайпан", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "Таїті", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "Тарава", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "Тонґатапу",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "Чуук", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "Вейк", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "Уолліс", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
