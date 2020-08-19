// moment-timezone-localization for lang code: ru

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
      { value: "Africa/Abidjan", name: "Абиджан", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "Аккра", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "Аддис-Абеба",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "Алжир", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "Асмэра", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "Бамако", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "Банги", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "Банжул", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "Бисау", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "Блантайр", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "Браззавиль",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "Бужумбура", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "Каир", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "Касабланка",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "Сеута", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "Конакри", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "Дакар", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "Дар-эс-Салам",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "Джибути", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "Дуала", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "Эль-Аюн", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "Фритаун", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "Габороне", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "Хараре", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "Йоханнесбург",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "Джуба", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "Кампала", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "Хартум", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "Кигали", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "Киншаса", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "Лагос", id: "Africa/Lagos" },
      {
        value: "Africa/Libreville",
        name: "Либревиль",
        id: "Africa/Libreville"
      },
      { value: "Africa/Lome", name: "Ломе", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "Луанда", id: "Africa/Luanda" },
      {
        value: "Africa/Lubumbashi",
        name: "Лубумбаши",
        id: "Africa/Lubumbashi"
      },
      { value: "Africa/Lusaka", name: "Лусака", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "Малабо", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "Мапуту", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "Масеру", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "Мбабане", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "Могадишо", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "Монровия", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "Найроби", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "Нджамена", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "Ниамей", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "Нуакшот", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "Уагадугу",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "Порто-Ново",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "Сан-Томе", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "Триполи", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "Тунис", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "Виндхук", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "Адак", id: "America/Adak" },
      { value: "America/Anchorage", name: "Анкоридж", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "Ангилья", id: "America/Anguilla" },
      { value: "America/Antigua", name: "Антигуа", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "Арагуаина",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "Ла-Риоха",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "Рио-Гальегос",
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
        name: "Сан-Луис",
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
      { value: "America/Asuncion", name: "Асунсьон", id: "America/Asuncion" },
      { value: "America/Bahia", name: "Баия", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "Баия-де-Бандерас",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "Барбадос", id: "America/Barbados" },
      { value: "America/Belem", name: "Белен", id: "America/Belem" },
      { value: "America/Belize", name: "Белиз", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "Бланк-Саблон",
        id: "America/Blanc-Sablon"
      },
      {
        value: "America/Boa_Vista",
        name: "Боа-Виста",
        id: "America/Boa_Vista"
      },
      { value: "America/Bogota", name: "Богота", id: "America/Bogota" },
      { value: "America/Boise", name: "Бойсе", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "Буэнос-Айрес",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "Кеймбридж-Бей",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "Кампу-Гранди",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "Канкун", id: "America/Cancun" },
      { value: "America/Caracas", name: "Каракас", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "Катамарка",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "Кайенна", id: "America/Cayenne" },
      { value: "America/Cayman", name: "Острова Кайман", id: "America/Cayman" },
      { value: "America/Chicago", name: "Чикаго", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "Чиуауа", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "Корал-Харбор",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "Кордова", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "Коста-Рика",
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
        name: "Доусон-Крик",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "Денвер", id: "America/Denver" },
      { value: "America/Detroit", name: "Детройт", id: "America/Detroit" },
      { value: "America/Dominica", name: "Доминика", id: "America/Dominica" },
      { value: "America/Edmonton", name: "Эдмонтон", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "Эйрунепе", id: "America/Eirunepe" },
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
        name: "Глейс-Бей",
        id: "America/Glace_Bay"
      },
      { value: "America/Godthab", name: "Нуук", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "Гус-Бей", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "Гранд-Терк",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "Гренада", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "Гваделупа",
        id: "America/Guadeloupe"
      },
      {
        value: "America/Guatemala",
        name: "Гватемала",
        id: "America/Guatemala"
      },
      { value: "America/Guayaquil", name: "Гуаякиль", id: "America/Guayaquil" },
      { value: "America/Guyana", name: "Гайана", id: "America/Guyana" },
      { value: "America/Halifax", name: "Галифакс", id: "America/Halifax" },
      { value: "America/Havana", name: "Гавана", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "Эрмосильо",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "Нокс, Индиана",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "Маренго, Индиана",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "Питерсберг, Индиана",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "Телл-Сити",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "Вевей, Индиана",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "Винсеннес",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "Уинамак",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "Индианаполис",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "Инувик", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "Икалуит", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "Ямайка", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "Жужуй", id: "America/Jujuy" },
      { value: "America/Juneau", name: "Джуно", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "Монтиселло, Кентукки",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "Кралендейк",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "Ла-Пас", id: "America/La_Paz" },
      { value: "America/Lima", name: "Лима", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "Лос-Анджелес",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "Луисвилл",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "Лоуэр-Принсес-Куортер",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "Масейо", id: "America/Maceio" },
      { value: "America/Managua", name: "Манагуа", id: "America/Managua" },
      { value: "America/Manaus", name: "Манаус", id: "America/Manaus" },
      { value: "America/Marigot", name: "Мариго", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "Мартиника",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "Матаморос",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "Масатлан", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "Мендоса", id: "America/Mendoza" },
      { value: "America/Menominee", name: "Меномини", id: "America/Menominee" },
      { value: "America/Merida", name: "Мерида", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "Метлакатла",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "Мехико",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "Микелон", id: "America/Miquelon" },
      { value: "America/Moncton", name: "Монктон", id: "America/Moncton" },
      {
        value: "America/Monterrey",
        name: "Монтеррей",
        id: "America/Monterrey"
      },
      {
        value: "America/Montevideo",
        name: "Монтевидео",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "Монтсеррат",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "Нассау", id: "America/Nassau" },
      { value: "America/New_York", name: "Нью-Йорк", id: "America/New_York" },
      { value: "America/Nipigon", name: "Нипигон", id: "America/Nipigon" },
      { value: "America/Nome", name: "Ном", id: "America/Nome" },
      { value: "America/Noronha", name: "Норонья", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "Бойла, Северная Дакота",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "Центр, Северная Дакота",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "Нью-Сейлем, Северная Дакота",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "Охинага", id: "America/Ojinaga" },
      { value: "America/Panama", name: "Панама", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "Пангниртунг",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "Парамарибо",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "Финикс", id: "America/Phoenix" },
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
        name: "Пуэрто-Рико",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "Пунта-Аренас",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "Рейни-Ривер",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "Ранкин-Инлет",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "Ресифи", id: "America/Recife" },
      { value: "America/Regina", name: "Реджайна", id: "America/Regina" },
      { value: "America/Resolute", name: "Резольют", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "Риу-Бранку",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "Санта-Изабел",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "Сантарен", id: "America/Santarem" },
      { value: "America/Santiago", name: "Сантьяго", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "Санто-Доминго",
        id: "America/Santo_Domingo"
      },
      {
        value: "America/Sao_Paulo",
        name: "Сан-Паулу",
        id: "America/Sao_Paulo"
      },
      {
        value: "America/Scoresbysund",
        name: "Скорсбисунн",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "Ситка", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "Сен-Бартелеми",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "Сент-Джонс", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "Сент-Китс", id: "America/St_Kitts" },
      { value: "America/St_Lucia", name: "Сент-Люсия", id: "America/St_Lucia" },
      {
        value: "America/St_Thomas",
        name: "Сент-Томас",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "Сент-Винсент",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "Свифт-Керрент",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "Тегусигальпа",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "Туле", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "Тандер-Бей",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "Тихуана", id: "America/Tijuana" },
      { value: "America/Toronto", name: "Торонто", id: "America/Toronto" },
      { value: "America/Tortola", name: "Тортола", id: "America/Tortola" },
      { value: "America/Vancouver", name: "Ванкувер", id: "America/Vancouver" },
      {
        value: "America/Whitehorse",
        name: "Уайтхорс",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "Виннипег", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "Якутат", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "Йеллоунайф",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "Кейси", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "Дейвис", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "Дюмон-д’Юрвиль",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "Маккуори",
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
      { value: "Antarctica/Syowa", name: "Сёва", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "Тролль", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "Восток", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "Лонгйир",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "Аден", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "Алматы", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "Амман", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "Анадырь", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "Актау", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "Актобе", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "Ашхабад", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "Атырау", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "Багдад", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "Бахрейн", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "Баку", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "Бангкок", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "Барнаул", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "Бейрут", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "Бишкек", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "Бруней", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "Калькутта", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "Чита", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "Чойбалсан", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "Коломбо", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "Дамаск", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "Дакка", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "Дили", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "Дубай", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "Душанбе", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "Фамагуста", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "Газа", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "Хеврон", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "Гонконг", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "Ховд", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "Иркутск", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "Джакарта", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "Джаяпура", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "Иерусалим", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "Кабул", id: "Asia/Kabul" },
      {
        value: "Asia/Kamchatka",
        name: "Петропавловск-Камчатский",
        id: "Asia/Kamchatka"
      },
      { value: "Asia/Karachi", name: "Карачи", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "Катманду", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "Хандыга", id: "Asia/Khandyga" },
      { value: "Asia/Krasnoyarsk", name: "Красноярск", id: "Asia/Krasnoyarsk" },
      {
        value: "Asia/Kuala_Lumpur",
        name: "Куала-Лумпур",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "Кучинг", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "Кувейт", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "Макао", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "Магадан", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "Макасар", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "Манила", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "Маскат", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "Никосия", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "Новокузнецк",
        id: "Asia/Novokuznetsk"
      },
      {
        value: "Asia/Novosibirsk",
        name: "Новосибирск",
        id: "Asia/Novosibirsk"
      },
      { value: "Asia/Omsk", name: "Омск", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "Уральск", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "Пномпень", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "Понтианак", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "Пхеньян", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "Катар", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "Кызылорда", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "Янгон", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "Эр-Рияд", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "Хошимин", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "о-в Сахалин", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "Самарканд", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "Сеул", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "Шанхай", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "Сингапур", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "Среднеколымск",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "Тайбэй", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "Ташкент", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "Тбилиси", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "Тегеран", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "Тхимпху", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "Токио", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "Томск", id: "Asia/Tomsk" },
      { value: "Asia/Ulaanbaatar", name: "Улан-Батор", id: "Asia/Ulaanbaatar" },
      { value: "Asia/Urumqi", name: "Урумчи", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "Усть-Нера", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "Вьентьян", id: "Asia/Vientiane" },
      {
        value: "Asia/Vladivostok",
        name: "Владивосток",
        id: "Asia/Vladivostok"
      },
      { value: "Asia/Yakutsk", name: "Якутск", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "Екатеринбург",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "Ереван", id: "Asia/Yerevan" },
      {
        value: "Atlantic/Azores",
        name: "Азорские о-ва",
        id: "Atlantic/Azores"
      },
      {
        value: "Atlantic/Bermuda",
        name: "Бермудские о-ва",
        id: "Atlantic/Bermuda"
      },
      {
        value: "Atlantic/Canary",
        name: "Канарские о-ва",
        id: "Atlantic/Canary"
      },
      {
        value: "Atlantic/Cape_Verde",
        name: "Кабо-Верде",
        id: "Atlantic/Cape_Verde"
      },
      {
        value: "Atlantic/Faeroe",
        name: "Фарерские о-ва",
        id: "Atlantic/Faeroe"
      },
      { value: "Atlantic/Madeira", name: "Мадейра", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "Рейкьявик",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "Южная Георгия",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "о-в Святой Елены",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "Стэнли", id: "Atlantic/Stanley" },
      {
        value: "Australia/Adelaide",
        name: "Аделаида",
        id: "Australia/Adelaide"
      },
      {
        value: "Australia/Brisbane",
        name: "Брисбен",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "Брокен-Хилл",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "Керри", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "Дарвин", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "Юкла", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "Хобарт", id: "Australia/Hobart" },
      {
        value: "Australia/Lindeman",
        name: "Линдеман",
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
      { value: "Australia/Sydney", name: "Сидней", id: "Australia/Sydney" },
      {
        value: "Etc/UTC",
        name: "Всемирное координированное время",
        id: "Etc/UTC"
      },
      { value: "Europe/Amsterdam", name: "Амстердам", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "Андорра", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "Астрахань", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "Афины", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "Белград", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "Берлин", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "Братислава",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "Брюссель", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "Бухарест", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "Будапешт", id: "Europe/Budapest" },
      {
        value: "Europe/Busingen",
        name: "Бюзинген-на-Верхнем-Рейне",
        id: "Europe/Busingen"
      },
      { value: "Europe/Chisinau", name: "Кишинев", id: "Europe/Chisinau" },
      {
        value: "Europe/Copenhagen",
        name: "Копенгаген",
        id: "Europe/Copenhagen"
      },
      {
        value: "Europe/Dublin",
        name: "Ирландия, стандартное времяДублин",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "Гибралтар", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "Гернси", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "Хельсинки", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "о-в Мэн",
        id: "Europe/Isle_of_Man"
      },
      { value: "Europe/Istanbul", name: "Стамбул", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "Джерси", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "Калининград",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "Киев", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "Киров", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "Лиссабон", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "Любляна", id: "Europe/Ljubljana" },
      {
        value: "Europe/London",
        name: "Великобритания, летнее времяЛондон",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "Люксембург",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "Мадрид", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "Мальта", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "Мариехамн", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "Минск", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "Монако", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "Москва", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "Осло", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "Париж", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "Подгорица", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "Прага", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "Рига", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "Рим", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "Самара", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "Сан-Марино",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "Сараево", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "Саратов", id: "Europe/Saratov" },
      {
        value: "Europe/Simferopol",
        name: "Симферополь",
        id: "Europe/Simferopol"
      },
      { value: "Europe/Skopje", name: "Скопье", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "София", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "Стокгольм", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "Таллин", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "Тирана", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "Ульяновск", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "Ужгород", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "Вадуц", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "Ватикан", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "Вена", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "Вильнюс", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "Волгоград", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "Варшава", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "Загреб", id: "Europe/Zagreb" },
      {
        value: "Europe/Zaporozhye",
        name: "Запорожье",
        id: "Europe/Zaporozhye"
      },
      { value: "Europe/Zurich", name: "Цюрих", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "Антананариву",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "Чагос", id: "Indian/Chagos" },
      {
        value: "Indian/Christmas",
        name: "о-в Рождества",
        id: "Indian/Christmas"
      },
      { value: "Indian/Cocos", name: "Кокосовые о-ва", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "Коморы", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "Кергелен", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "Маэ", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "Мальдивы", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "Маврикий", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "Майотта", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "Реюньон", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "Апиа", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "Окленд", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "Бугенвиль",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "Чатем", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "о-в Пасхи", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "Эфате", id: "Pacific/Efate" },
      {
        value: "Pacific/Enderbury",
        name: "о-в Эндербери",
        id: "Pacific/Enderbury"
      },
      { value: "Pacific/Fakaofo", name: "Факаофо", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "Фиджи", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "Фунафути", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "Галапагосские о-ва",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "о-ва Гамбье", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "Гуадалканал",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "Гуам", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "Гонолулу", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "Джонстон", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "Киритимати",
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
        name: "Маркизские о-ва",
        id: "Pacific/Marquesas"
      },
      { value: "Pacific/Midway", name: "о-ва Мидуэй", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "Науру", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "Ниуэ", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "Норфолк", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "Нумеа", id: "Pacific/Noumea" },
      {
        value: "Pacific/Pago_Pago",
        name: "Паго-Паго",
        id: "Pacific/Pago_Pago"
      },
      { value: "Pacific/Palau", name: "Палау", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "Питкэрн", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "Понпеи", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "Порт-Морсби",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "Раротонга",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "Сайпан", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "Таити", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "Тарава", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "Тонгатапу",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "Трук", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "Уэйк", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "Уоллис", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
