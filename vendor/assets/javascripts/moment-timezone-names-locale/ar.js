// moment-timezone-localization for lang code: ar

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
      { value: "Africa/Abidjan", name: "أبيدجان", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "أكرا", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "أديس أبابا",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "الجزائر", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "أسمرة", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "باماكو", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "بانغوي", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "بانجول", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "بيساو", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "بلانتاير", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "برازافيل",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "بوجومبورا", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "القاهرة", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "الدار البيضاء",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "سيتا", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "كوناكري", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "داكار", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "دار السلام",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "جيبوتي", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "دوالا", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "العيون", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "فري تاون", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "غابورون", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "هراري", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "جوهانسبرغ",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "جوبا", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "كامبالا", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "الخرطوم", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "كيغالي", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "كينشاسا", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "لاغوس", id: "Africa/Lagos" },
      { value: "Africa/Libreville", name: "ليبرفيل", id: "Africa/Libreville" },
      { value: "Africa/Lome", name: "لومي", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "لواندا", id: "Africa/Luanda" },
      { value: "Africa/Lubumbashi", name: "لومبباشا", id: "Africa/Lubumbashi" },
      { value: "Africa/Lusaka", name: "لوساكا", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "مالابو", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "مابوتو", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "ماسيرو", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "مباباني", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "مقديشيو", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "مونروفيا", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "نيروبي", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "نجامينا", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "نيامي", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "نواكشوط", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "واغادوغو",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "بورتو نوفو",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "ساو تومي", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "طرابلس", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "تونس", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "ويندهوك", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "أداك", id: "America/Adak" },
      { value: "America/Anchorage", name: "أنشوراج", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "أنغويلا", id: "America/Anguilla" },
      { value: "America/Antigua", name: "أنتيغوا", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "أروجوانيا",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "لا ريوجا",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "ريو جالييوس",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "سالطا",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "سان خوان",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "سان لويس",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "تاكمان",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "أشوا",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "أروبا", id: "America/Aruba" },
      { value: "America/Asuncion", name: "أسونسيون", id: "America/Asuncion" },
      { value: "America/Bahia", name: "باهيا", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "باهيا بانديراس",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "بربادوس", id: "America/Barbados" },
      { value: "America/Belem", name: "بلم", id: "America/Belem" },
      { value: "America/Belize", name: "بليز", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "بلانك-سابلون",
        id: "America/Blanc-Sablon"
      },
      {
        value: "America/Boa_Vista",
        name: "باو فيستا",
        id: "America/Boa_Vista"
      },
      { value: "America/Bogota", name: "بوغوتا", id: "America/Bogota" },
      { value: "America/Boise", name: "بويس", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "بوينوس أيرس",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "كامبرديج باي",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "كومبو جراند",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "كانكون", id: "America/Cancun" },
      { value: "America/Caracas", name: "كاراكاس", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "كاتاماركا",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "كايين", id: "America/Cayenne" },
      { value: "America/Cayman", name: "كايمان", id: "America/Cayman" },
      { value: "America/Chicago", name: "شيكاغو", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "تشيواوا", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "كورال هاربر",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "كوردوبا", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "كوستاريكا",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "كريستون", id: "America/Creston" },
      { value: "America/Cuiaba", name: "كيابا", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "كوراساو", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "دانمرك شافن",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "داوسان", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "داوسن كريك",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "دنفر", id: "America/Denver" },
      { value: "America/Detroit", name: "ديترويت", id: "America/Detroit" },
      { value: "America/Dominica", name: "دومينيكا", id: "America/Dominica" },
      { value: "America/Edmonton", name: "ايدمونتون", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "ايرونبي", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "السلفادور",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "فورت نيلسون",
        id: "America/Fort_Nelson"
      },
      {
        value: "America/Fortaleza",
        name: "فورتاليزا",
        id: "America/Fortaleza"
      },
      { value: "America/Glace_Bay", name: "جلاس باي", id: "America/Glace_Bay" },
      { value: "America/Godthab", name: "غودثاب", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "جوس باي", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "غراند ترك",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "غرينادا", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "غوادلوب",
        id: "America/Guadeloupe"
      },
      {
        value: "America/Guatemala",
        name: "غواتيمالا",
        id: "America/Guatemala"
      },
      {
        value: "America/Guayaquil",
        name: "غواياكويل",
        id: "America/Guayaquil"
      },
      { value: "America/Guyana", name: "غيانا", id: "America/Guyana" },
      { value: "America/Halifax", name: "هاليفاكس", id: "America/Halifax" },
      { value: "America/Havana", name: "هافانا", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "هيرموسيلو",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "كونكس",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "مارنجو",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "بيترسبرغ",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "مدينة تل، إنديانا",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "فيفاي",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "فينسينس",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "ويناماك",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "إنديانابوليس",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "اينوفيك", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "اكويلت", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "جامايكا", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "جوجو", id: "America/Jujuy" },
      { value: "America/Juneau", name: "جوني", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "مونتيسيلو",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "كرالنديك",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "لا باز", id: "America/La_Paz" },
      { value: "America/Lima", name: "ليما", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "لوس انجلوس",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "لويس فيل",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "حي الأمير السفلي",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "ماشيو", id: "America/Maceio" },
      { value: "America/Managua", name: "ماناغوا", id: "America/Managua" },
      { value: "America/Manaus", name: "ماناوس", id: "America/Manaus" },
      { value: "America/Marigot", name: "ماريغوت", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "المارتينيك",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "ماتاموروس",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "مازاتلان", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "ميندوزا", id: "America/Mendoza" },
      { value: "America/Menominee", name: "مينوميني", id: "America/Menominee" },
      { value: "America/Merida", name: "ميريدا", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "ميتلاكاتلا",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "مكسيكو سيتي",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "مكويلون", id: "America/Miquelon" },
      { value: "America/Moncton", name: "وينكتون", id: "America/Moncton" },
      { value: "America/Monterrey", name: "مونتيري", id: "America/Monterrey" },
      {
        value: "America/Montevideo",
        name: "مونتفيديو",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "مونتسيرات",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "ناسو", id: "America/Nassau" },
      { value: "America/New_York", name: "نيويورك", id: "America/New_York" },
      { value: "America/Nipigon", name: "نيبيجون", id: "America/Nipigon" },
      { value: "America/Nome", name: "نوم", id: "America/Nome" },
      { value: "America/Noronha", name: "نوروناه", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "بيولا، داكوتا الشمالية",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "سنتر",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "نيو ساليم",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "أوجيناجا", id: "America/Ojinaga" },
      { value: "America/Panama", name: "بنما", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "بانجينتينج",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "باراماريبو",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "فينكس", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "بورت أو برنس",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "بورت أوف سبين",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "بورتو فيلو",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "بورتوريكو",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "بونتا أريناز",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "راني ريفر",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "رانكن انلت",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "ريسيف", id: "America/Recife" },
      { value: "America/Regina", name: "ريجينا", id: "America/Regina" },
      { value: "America/Resolute", name: "ريزولوت", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "ريوبرانكو",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "سانتا إيزابيل",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "سانتاريم", id: "America/Santarem" },
      { value: "America/Santiago", name: "سانتياغو", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "سانتو دومينغو",
        id: "America/Santo_Domingo"
      },
      {
        value: "America/Sao_Paulo",
        name: "ساو باولو",
        id: "America/Sao_Paulo"
      },
      {
        value: "America/Scoresbysund",
        name: "سكورسبيسند",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "سيتكا", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "سانت بارتيليمي",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "سانت جونس", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "سانت كيتس", id: "America/St_Kitts" },
      { value: "America/St_Lucia", name: "سانت لوشيا", id: "America/St_Lucia" },
      {
        value: "America/St_Thomas",
        name: "سانت توماس",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "سانت فنسنت",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "سوفت كارنت",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "تيغوسيغالبا",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "ثيل", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "ثندر باي",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "تيخوانا", id: "America/Tijuana" },
      { value: "America/Toronto", name: "تورونتو", id: "America/Toronto" },
      { value: "America/Tortola", name: "تورتولا", id: "America/Tortola" },
      { value: "America/Vancouver", name: "فانكوفر", id: "America/Vancouver" },
      {
        value: "America/Whitehorse",
        name: "وايت هورس",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "وينيبيج", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "ياكوتات", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "يلونيف",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "كاساي", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "دافيز", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "دي مونت دو روفيل",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "ماكواري",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "ماوسون", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "ماك موردو",
        id: "Antarctica/McMurdo"
      },
      { value: "Antarctica/Palmer", name: "بالمير", id: "Antarctica/Palmer" },
      { value: "Antarctica/Rothera", name: "روثيرا", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "سايووا", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "ترول", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "فوستوك", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "لونجيربين",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "عدن", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "ألماتي", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "عمان", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "أندير", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "أكتاو", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "أكتوب", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "عشق آباد", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "أتيراو", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "بغداد", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "البحرين", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "باكو", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "بانكوك", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "بارناول", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "بيروت", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "بشكيك", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "بروناي", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "كالكتا", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "تشيتا", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "تشوبالسان", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "كولومبو", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "دمشق", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "دكا", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "ديلي", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "دبي", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "دوشانبي", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "فاماغوستا", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "غزة", id: "Asia/Gaza" },
      {
        value: "Asia/Hebron",
        name: "هيبرون (مدينة الخليل)",
        id: "Asia/Hebron"
      },
      { value: "Asia/Hong_Kong", name: "هونغ كونغ", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "هوفد", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "ايركيتسك", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "جاكرتا", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "جايابيورا", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "القدس", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "كابول", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "كامتشاتكا", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "كراتشي", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "كاتماندو", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "خانديجا", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "كراسنويارسك",
        id: "Asia/Krasnoyarsk"
      },
      {
        value: "Asia/Kuala_Lumpur",
        name: "كوالا لامبور",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "كيشينج", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "الكويت", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "ماكاو", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "مجادن", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "ماكسار", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "مانيلا", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "مسقط", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "نيقوسيا", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "نوفوكوزنتسك",
        id: "Asia/Novokuznetsk"
      },
      { value: "Asia/Novosibirsk", name: "نوفوسبيرسك", id: "Asia/Novosibirsk" },
      { value: "Asia/Omsk", name: "أومسك", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "أورال", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "بنوم بنه", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "بونتيانك", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "بيونغ يانغ", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "قطر", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "كيزيلوردا", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "رانغون", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "الرياض", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "مدينة هو تشي منة", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "سكالين", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "سمرقند", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "سول", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "شنغهاي", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "سنغافورة", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "سريدنكوليمسك",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "تايبيه", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "طشقند", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "تبليسي", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "طهران", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "تيمفو", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "طوكيو", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "تومسك", id: "Asia/Tomsk" },
      { value: "Asia/Ulaanbaatar", name: "آلانباتار", id: "Asia/Ulaanbaatar" },
      { value: "Asia/Urumqi", name: "أرومكي", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "أوست نيرا", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "فيانتيان", id: "Asia/Vientiane" },
      { value: "Asia/Vladivostok", name: "فلاديفوستك", id: "Asia/Vladivostok" },
      { value: "Asia/Yakutsk", name: "ياكتسك", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "يكاترنبيرج",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "يريفان", id: "Asia/Yerevan" },
      { value: "Atlantic/Azores", name: "أزورس", id: "Atlantic/Azores" },
      { value: "Atlantic/Bermuda", name: "برمودا", id: "Atlantic/Bermuda" },
      { value: "Atlantic/Canary", name: "كناري", id: "Atlantic/Canary" },
      {
        value: "Atlantic/Cape_Verde",
        name: "الرأس الأخضر",
        id: "Atlantic/Cape_Verde"
      },
      { value: "Atlantic/Faeroe", name: "فارو", id: "Atlantic/Faeroe" },
      { value: "Atlantic/Madeira", name: "ماديرا", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "ريكيافيك",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "جورجيا الجنوبية",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "سانت هيلينا",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "استانلي", id: "Atlantic/Stanley" },
      { value: "Australia/Adelaide", name: "أديليد", id: "Australia/Adelaide" },
      {
        value: "Australia/Brisbane",
        name: "برسيبان",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "بروكن هيل",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "كوري", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "دارون", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "أوكلا", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "هوبارت", id: "Australia/Hobart" },
      {
        value: "Australia/Lindeman",
        name: "ليندمان",
        id: "Australia/Lindeman"
      },
      {
        value: "Australia/Lord_Howe",
        name: "لورد هاو",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "ميلبورن",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "برثا", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "سيدني", id: "Australia/Sydney" },
      { value: "Etc/UTC", name: "التوقيت العالمي المنسق", id: "Etc/UTC" },
      { value: "Europe/Amsterdam", name: "أمستردام", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "أندورا", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "أستراخان", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "أثينا", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "بلغراد", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "برلين", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "براتيسلافا",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "بروكسل", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "بوخارست", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "بودابست", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "بوسنغن", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "تشيسيناو", id: "Europe/Chisinau" },
      { value: "Europe/Copenhagen", name: "كوبنهاغن", id: "Europe/Copenhagen" },
      {
        value: "Europe/Dublin",
        name: "توقيت أيرلندا الرسميدبلن",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "جبل طارق", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "غيرنزي", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "هلسنكي", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "جزيرة مان",
        id: "Europe/Isle_of_Man"
      },
      { value: "Europe/Istanbul", name: "إسطنبول", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "جيرسي", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "كالينجراد",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "كييف", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "كيروف", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "لشبونة", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "ليوبليانا", id: "Europe/Ljubljana" },
      {
        value: "Europe/London",
        name: "توقيت بريطانيا الصيفيلندن",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "لوكسمبورغ",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "مدريد", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "مالطة", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "ماريهامن", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "مينسك", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "موناكو", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "موسكو", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "أوسلو", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "باريس", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "بودغوريكا", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "براغ", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "ريغا", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "روما", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "سمراء", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "سان مارينو",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "سراييفو", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "ساراتوف", id: "Europe/Saratov" },
      {
        value: "Europe/Simferopol",
        name: "سيمفروبول",
        id: "Europe/Simferopol"
      },
      { value: "Europe/Skopje", name: "سكوبي", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "صوفيا", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "ستوكهولم", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "تالين", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "تيرانا", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "أوليانوفسك", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "أوزجرود", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "فادوز", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "الفاتيكان", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "فيينا", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "فيلنيوس", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "فولوجراد", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "وارسو", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "زغرب", id: "Europe/Zagreb" },
      { value: "Europe/Zaporozhye", name: "زابوروزي", id: "Europe/Zaporozhye" },
      { value: "Europe/Zurich", name: "زيورخ", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "أنتاناناريفو",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "تشاغوس", id: "Indian/Chagos" },
      { value: "Indian/Christmas", name: "كريسماس", id: "Indian/Christmas" },
      { value: "Indian/Cocos", name: "كوكوس", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "جزر القمر", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "كيرغويلين", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "ماهي", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "المالديف", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "موريشيوس", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "مايوت", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "ريونيون", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "أبيا", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "أوكلاند", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "بوغانفيل",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "تشاثام", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "استر", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "إيفات", id: "Pacific/Efate" },
      { value: "Pacific/Enderbury", name: "اندربيرج", id: "Pacific/Enderbury" },
      { value: "Pacific/Fakaofo", name: "فاكاوفو", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "فيجي", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "فونافوتي", id: "Pacific/Funafuti" },
      { value: "Pacific/Galapagos", name: "جلاباجوس", id: "Pacific/Galapagos" },
      { value: "Pacific/Gambier", name: "جامبير", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "غوادالكانال",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "غوام", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "هونولولو", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "جونستون", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "كيريتي ماتي",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "كوسرا", id: "Pacific/Kosrae" },
      { value: "Pacific/Kwajalein", name: "كواجالين", id: "Pacific/Kwajalein" },
      { value: "Pacific/Majuro", name: "ماجورو", id: "Pacific/Majuro" },
      { value: "Pacific/Marquesas", name: "ماركيساس", id: "Pacific/Marquesas" },
      { value: "Pacific/Midway", name: "ميدواي", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "ناورو", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "نيوي", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "نورفولك", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "نوميا", id: "Pacific/Noumea" },
      {
        value: "Pacific/Pago_Pago",
        name: "باغو باغو",
        id: "Pacific/Pago_Pago"
      },
      { value: "Pacific/Palau", name: "بالاو", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "بيتكيرن", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "باناب", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "بور مورسبي",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "راروتونغا",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "سايبان", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "تاهيتي", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "تاراوا", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "تونغاتابو",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "ترك", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "واك", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "واليس", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
