// moment-timezone-localization for lang code: fa

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
      { value: "Africa/Abidjan", name: "آبیجان", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "اکرا", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "آدیس آبابا",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "الجزیره", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "اسمره", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "باماکو", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "بانگی", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "بانجول", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "بیسائو", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "بلانتیره", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "برازویل",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "بوجومبورا", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "قاهره", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "کازابلانکا",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "سبته", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "کوناکری", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "داکار", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "دارالسلام",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "جیبوتی", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "دوآلا", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "العیون", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "فری‌تاون", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "گابورون", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "هراره", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "ژوهانسبورگ",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "جوبا", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "کامپالا", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "خارطوم", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "کیگالی", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "کینشاسا", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "لاگوس", id: "Africa/Lagos" },
      { value: "Africa/Libreville", name: "لیبرویل", id: "Africa/Libreville" },
      { value: "Africa/Lome", name: "لومه", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "لواندا", id: "Africa/Luanda" },
      {
        value: "Africa/Lubumbashi",
        name: "لوبومباشی",
        id: "Africa/Lubumbashi"
      },
      { value: "Africa/Lusaka", name: "لوزاکا", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "مالابو", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "ماپوتو", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "ماسرو", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "مبابانه", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "موگادیشو", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "مونروویا", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "نایروبی", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "انجامنا", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "نیامی", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "نوآکشوت", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "اوآگادوگو",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "پورتو نووو",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "سائوتومه", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "طرابلس", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "شهر تونس", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "ویندهوک", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "ایدک", id: "America/Adak" },
      { value: "America/Anchorage", name: "انکوریج", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "آنگوئیلا", id: "America/Anguilla" },
      { value: "America/Antigua", name: "آنتیگوا", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "آراگواینا",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "لاریوخا",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "ریوگالگوس",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "سالتا",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "سن‌خوان",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "سن‌لوئیس",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "توکومن",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "اوشوایا",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "اروبا", id: "America/Aruba" },
      { value: "America/Asuncion", name: "آسونسیون", id: "America/Asuncion" },
      { value: "America/Bahia", name: "بایا", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "باهیا باندراس",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "باربادوس", id: "America/Barbados" },
      { value: "America/Belem", name: "بلم", id: "America/Belem" },
      { value: "America/Belize", name: "بلیز", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "بلان‐سابلون",
        id: "America/Blanc-Sablon"
      },
      {
        value: "America/Boa_Vista",
        name: "بوئاویستا",
        id: "America/Boa_Vista"
      },
      { value: "America/Bogota", name: "بوگوتا", id: "America/Bogota" },
      { value: "America/Boise", name: "بویسی", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "بوئنوس‌آیرس",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "کمبریج‌بی",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "کمپو گرانده",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "کانکون", id: "America/Cancun" },
      { value: "America/Caracas", name: "کاراکاس", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "کاتامارکا",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "کاین", id: "America/Cayenne" },
      { value: "America/Cayman", name: "کیمن", id: "America/Cayman" },
      { value: "America/Chicago", name: "شیکاگو", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "چیواوا", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "اتکوکان",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "کوردووا", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "کاستاریکا",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "کرستون", id: "America/Creston" },
      { value: "America/Cuiaba", name: "کویاوا", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "کوراسائو", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "دانمارکس‌هاون",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "داوسن", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "داوسن کریک",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "دنور", id: "America/Denver" },
      { value: "America/Detroit", name: "دیترویت", id: "America/Detroit" },
      { value: "America/Dominica", name: "دومینیکا", id: "America/Dominica" },
      { value: "America/Edmonton", name: "ادمونتون", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "ایرونپه", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "السالوادور",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "فورت نلسون",
        id: "America/Fort_Nelson"
      },
      { value: "America/Fortaleza", name: "فورتالزا", id: "America/Fortaleza" },
      { value: "America/Glace_Bay", name: "گلیس‌بی", id: "America/Glace_Bay" },
      { value: "America/Godthab", name: "نووک", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "گوس‌بی", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "گراند تورک",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "گرنادا", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "گوادلوپ",
        id: "America/Guadeloupe"
      },
      { value: "America/Guatemala", name: "گواتمالا", id: "America/Guatemala" },
      { value: "America/Guayaquil", name: "گوایاکیل", id: "America/Guayaquil" },
      { value: "America/Guyana", name: "گویان", id: "America/Guyana" },
      { value: "America/Halifax", name: "هلیفکس", id: "America/Halifax" },
      { value: "America/Havana", name: "هاوانا", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "ارموسیو",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "ناکس، ایندیانا",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "مارنگو، ایندیانا",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "پیترزبرگ، ایندیانا",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "تل‌سیتی، ایندیانا",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "ویوی، ایندیانا",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "وینسنس، اندیانا",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "ویناماک، ایندیانا",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "ایندیاناپولیس",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "اینوویک", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "ایکلوئت", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "جامائیکا", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "خوخوی", id: "America/Jujuy" },
      { value: "America/Juneau", name: "جونو", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "مانتیسلو، کنتاکی",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "کرالندیک",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "لاپاز", id: "America/La_Paz" },
      { value: "America/Lima", name: "لیما", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "لوس‌آنجلس",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "لوئیزویل",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "بخش شاهزاده‌‌نشین پایین",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "ماسیو", id: "America/Maceio" },
      { value: "America/Managua", name: "ماناگوا", id: "America/Managua" },
      { value: "America/Manaus", name: "ماناوس", id: "America/Manaus" },
      { value: "America/Marigot", name: "ماریگات", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "مارتینیک",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "ماتاموروس",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "ماساتلان", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "مندوسا", id: "America/Mendoza" },
      { value: "America/Menominee", name: "منامینی", id: "America/Menominee" },
      { value: "America/Merida", name: "مریدا", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "متالاکاتلا",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "مکزیکوسیتی",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "میکلون", id: "America/Miquelon" },
      { value: "America/Moncton", name: "مانکتون", id: "America/Moncton" },
      { value: "America/Monterrey", name: "مونتری", id: "America/Monterrey" },
      {
        value: "America/Montevideo",
        name: "مونته‌ویدئو",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "مونتسرات",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "ناسائو", id: "America/Nassau" },
      { value: "America/New_York", name: "نیویورک", id: "America/New_York" },
      { value: "America/Nipigon", name: "نیپیگان", id: "America/Nipigon" },
      { value: "America/Nome", name: "نوم", id: "America/Nome" },
      { value: "America/Noronha", name: "نورونیا", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "بیولا، داکوتای شمالی",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "سنتر، داکوتای شمالی",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "نیوسالم، داکوتای شمالی",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "اخیناگا", id: "America/Ojinaga" },
      { value: "America/Panama", name: "پاناما", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "پانگنیرتونگ",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "پاراماریبو",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "فینکس", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "پورتوپرنس",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "پورت‌آواسپین",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "پورتوولیو",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "پورتوریکو",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "پونتا آرناس",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "رینی‌ریور",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "خلیجک رنکین",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "ریسیفی", id: "America/Recife" },
      { value: "America/Regina", name: "رجاینا", id: "America/Regina" },
      { value: "America/Resolute", name: "رزولوت", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "ریوبرانکو",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "سانتا ایزابل",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "سنتارم", id: "America/Santarem" },
      { value: "America/Santiago", name: "سانتیاگو", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "سانتو دومینگو",
        id: "America/Santo_Domingo"
      },
      {
        value: "America/Sao_Paulo",
        name: "سائوپائولو",
        id: "America/Sao_Paulo"
      },
      {
        value: "America/Scoresbysund",
        name: "اسکورسبیسوند",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "سیتکا", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "سنت بارتلمی",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "سنت جان", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "سنت کیتس", id: "America/St_Kitts" },
      { value: "America/St_Lucia", name: "سنت لوسیا", id: "America/St_Lucia" },
      {
        value: "America/St_Thomas",
        name: "سنت توماس",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "سنت وینسنت",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "سویفت‌کارنت",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "تگوسیگالپا",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "تول", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "تاندربی",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "تیخوانا", id: "America/Tijuana" },
      { value: "America/Toronto", name: "تورنتو", id: "America/Toronto" },
      { value: "America/Tortola", name: "تورتولا", id: "America/Tortola" },
      { value: "America/Vancouver", name: "ونکوور", id: "America/Vancouver" },
      {
        value: "America/Whitehorse",
        name: "وایت‌هورس",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "وینیپگ", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "یاکوتات", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "یلونایف",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "کیسی", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "دیویس", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "دومون دورویل",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "مکواری",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "ماوسون", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "مک‌موردو",
        id: "Antarctica/McMurdo"
      },
      { value: "Antarctica/Palmer", name: "پالمر", id: "Antarctica/Palmer" },
      { value: "Antarctica/Rothera", name: "روترا", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "شووا", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "ترول", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "وستوک", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "لانگ‌یربین",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "عدن", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "آلماتی", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "عمّان", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "آنادیر", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "آقتاو", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "آقتوبه", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "عشق‌آباد", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "آتیراو", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "بغداد", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "بحرین", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "باکو", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "بانکوک", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "بارنائول", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "بیروت", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "بیشکک", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "برونئی", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "کلکته", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "چیتا", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "چویبالسان", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "کلمبو", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "دمشق", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "داکا", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "دیلی", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "دبی", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "دوشنبه", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "فاماگوستا", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "غزه", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "الخلیل", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "هنگ‌کنگ", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "خوود", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "ایرکوتسک", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "جاکارتا", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "جایاپورا", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "اورشلیم", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "کابل", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "کامچاتکا", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "کراچی", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "کاتماندو", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "خاندیگا", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "کراسنویارسک",
        id: "Asia/Krasnoyarsk"
      },
      {
        value: "Asia/Kuala_Lumpur",
        name: "کوالالامپور",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "کوچینگ", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "کویت", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "ماکائو", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "ماگادان", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "ماکاسار", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "مانیل", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "مسقط", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "نیکوزیا", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "نوووکوزنتسک",
        id: "Asia/Novokuznetsk"
      },
      {
        value: "Asia/Novosibirsk",
        name: "نووسیبیریسک",
        id: "Asia/Novosibirsk"
      },
      { value: "Asia/Omsk", name: "اومسک", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "اورال", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "پنوم‌پن", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "پونتیاناک", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "پیونگ‌یانگ", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "قطر", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "قیزیل‌اوردا", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "یانگون", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "ریاض", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "هوشی‌مین‌سیتی", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "ساخالین", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "سمرقند", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "سئول", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "شانگهای", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "سنگاپور", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "اسردنکولیمسک",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "تایپه", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "تاشکند", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "تفلیس", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "تهران", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "تیمفو", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "توکیو", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "تومسک", id: "Asia/Tomsk" },
      {
        value: "Asia/Ulaanbaatar",
        name: "اولان‌باتور",
        id: "Asia/Ulaanbaatar"
      },
      { value: "Asia/Urumqi", name: "ارومچی", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "اوست نرا", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "وینتیان", id: "Asia/Vientiane" },
      {
        value: "Asia/Vladivostok",
        name: "ولادی‌وستوک",
        id: "Asia/Vladivostok"
      },
      { value: "Asia/Yakutsk", name: "یاکوتسک", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "یکاترینبرگ",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "ایروان", id: "Asia/Yerevan" },
      { value: "Atlantic/Azores", name: "آزور", id: "Atlantic/Azores" },
      { value: "Atlantic/Bermuda", name: "برمودا", id: "Atlantic/Bermuda" },
      { value: "Atlantic/Canary", name: "قناری", id: "Atlantic/Canary" },
      {
        value: "Atlantic/Cape_Verde",
        name: "کیپ‌ورد",
        id: "Atlantic/Cape_Verde"
      },
      { value: "Atlantic/Faeroe", name: "فارو", id: "Atlantic/Faeroe" },
      { value: "Atlantic/Madeira", name: "مادیرا", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "ریکیاویک",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "جورجیای جنوبی",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "سنت هلنا",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "استانلی", id: "Atlantic/Stanley" },
      { value: "Australia/Adelaide", name: "آدلاید", id: "Australia/Adelaide" },
      {
        value: "Australia/Brisbane",
        name: "بریسبین",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "بروکن‌هیل",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "کوری", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "داروین", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "اوکلا", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "هوبارت", id: "Australia/Hobart" },
      { value: "Australia/Lindeman", name: "لیندمن", id: "Australia/Lindeman" },
      {
        value: "Australia/Lord_Howe",
        name: "لردهاو",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "ملبورن",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "پرت", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "سیدنی", id: "Australia/Sydney" },
      { value: "Etc/UTC", name: "زمان هماهنگ جهانی", id: "Etc/UTC" },
      { value: "Europe/Amsterdam", name: "آمستردام", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "آندورا", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "آستراخان", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "آتن", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "بلگراد", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "برلین", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "براتیسلاوا",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "بروکسل", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "بخارست", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "بوداپست", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "بازنگن", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "کیشیناو", id: "Europe/Chisinau" },
      { value: "Europe/Copenhagen", name: "کپنهاگ", id: "Europe/Copenhagen" },
      {
        value: "Europe/Dublin",
        name: "وقت عادی ایرلنددوبلین",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "جبل‌الطارق", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "گرنزی", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "هلسینکی", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "جزیرهٔ من",
        id: "Europe/Isle_of_Man"
      },
      { value: "Europe/Istanbul", name: "استانبول", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "جرزی", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "کالینینگراد",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "کیف", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "کیروف", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "لیسبون", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "لیوبلیانا", id: "Europe/Ljubljana" },
      {
        value: "Europe/London",
        name: "وقت تابستانی بریتانیالندن",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "لوکزامبورگ",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "مادرید", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "مالت", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "ماریه‌هامن", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "مینسک", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "موناکو", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "مسکو", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "اسلو", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "پاریس", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "پادگاریتسا", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "پراگ", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "ریگا", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "رم", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "سامارا", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "سان‌مارینو",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "سارایوو", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "ساراتوف", id: "Europe/Saratov" },
      { value: "Europe/Simferopol", name: "سیمفروپل", id: "Europe/Simferopol" },
      { value: "Europe/Skopje", name: "اسکوپیه", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "صوفیه", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "استکهلم", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "تالین", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "تیرانا", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "اولیانوفسک", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "اوژگورود", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "فادوتس", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "واتیکان", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "وین", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "ویلنیوس", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "ولگاگراد", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "ورشو", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "زاگرب", id: "Europe/Zagreb" },
      {
        value: "Europe/Zaporozhye",
        name: "زاپوروژیا",
        id: "Europe/Zaporozhye"
      },
      { value: "Europe/Zurich", name: "زوریخ", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "آنتاناناریوو",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "شاگوس", id: "Indian/Chagos" },
      { value: "Indian/Christmas", name: "کریسمس", id: "Indian/Christmas" },
      { value: "Indian/Cocos", name: "کوکوس", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "کومورو", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "کرگولن", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "ماهه", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "مالدیو", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "موریس", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "مایوت", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "رئونیون", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "آپیا", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "اوکلند", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "بوگنویل",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "چتم", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "ایستر", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "افاته", id: "Pacific/Efate" },
      { value: "Pacific/Enderbury", name: "اندربری", id: "Pacific/Enderbury" },
      { value: "Pacific/Fakaofo", name: "فاکائوفو", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "فیجی", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "فونافوتی", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "گالاپاگوس",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "گامبیر", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "گوادال‌کانال",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "گوام", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "هونولولو", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "جانستون", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "کریتیماتی",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "کوسرای", id: "Pacific/Kosrae" },
      { value: "Pacific/Kwajalein", name: "کواجیلین", id: "Pacific/Kwajalein" },
      { value: "Pacific/Majuro", name: "ماجورو", id: "Pacific/Majuro" },
      { value: "Pacific/Marquesas", name: "مارکوزه", id: "Pacific/Marquesas" },
      { value: "Pacific/Midway", name: "میدوی", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "نائورو", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "نیوئه", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "نورفولک", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "نومئا", id: "Pacific/Noumea" },
      { value: "Pacific/Pago_Pago", name: "پاگوپاگو", id: "Pacific/Pago_Pago" },
      { value: "Pacific/Palau", name: "پالائو", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "پیت‌کرن", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "پانپی", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "پورت‌مورزبی",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "راروتونگا",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "سایپان", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "تاهیتی", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "تاراوا", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "تونگاتاپو",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "چوک", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "ویک", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "والیس", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
