// moment-timezone-localization for lang code: th

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
      { value: "Africa/Abidjan", name: "อาบีจาน", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "อักกรา", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "แอดดิสอาบาบา",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "แอลเจียร์", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "แอสมารา", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "บามาโก", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "บังกี", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "บันจูล", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "บิสเซา", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "แบลนไทร์", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "บราซซาวิล",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "บูจุมบูรา", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "ไคโร", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "คาสซาบลางก้า",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "เซวตา", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "โกนากรี", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "ดาการ์", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "ดาร์เอสซาลาม",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "จิบูตี", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "ดูอาลา", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "เอลไอย์อุง", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "ฟรีทาวน์", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "กาโบโรเน", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "ฮาราเร", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "โจฮันเนสเบอร์ก",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "จูบา", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "คัมพาลา", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "คาร์ทูม", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "คิกาลี", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "กินชาซา", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "ลากอส", id: "Africa/Lagos" },
      {
        value: "Africa/Libreville",
        name: "ลีเบรอวิล",
        id: "Africa/Libreville"
      },
      { value: "Africa/Lome", name: "โลเม", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "ลูอันดา", id: "Africa/Luanda" },
      {
        value: "Africa/Lubumbashi",
        name: "ลูบัมบาชิ",
        id: "Africa/Lubumbashi"
      },
      { value: "Africa/Lusaka", name: "ลูซากา", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "มาลาโบ", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "มาปูโต", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "มาเซรู", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "อัมบาบาเน", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "โมกาดิชู", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "มันโรเวีย", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "ไนโรเบีย", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "เอ็นจาเมนา", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "นีอาเมย์", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "นูแอกชอต", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "วากาดูกู",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "ปอร์โต-โนโว",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "เซาตูเม", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "ตรีโปลี", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "ตูนิส", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "วินด์ฮุก", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "เอดัก", id: "America/Adak" },
      {
        value: "America/Anchorage",
        name: "แองเคอเรจ",
        id: "America/Anchorage"
      },
      { value: "America/Anguilla", name: "แองกิลลา", id: "America/Anguilla" },
      { value: "America/Antigua", name: "แอนติกา", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "อารากัวนา",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "ลาริโอจา",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "ริโอกาลเลกอส",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "ซัลตา",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "ซานฮวน",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "ซันลูอิส",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "ทูคูแมน",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "อูชูเอีย",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "อารูบา", id: "America/Aruba" },
      { value: "America/Asuncion", name: "อะซุนซิออง", id: "America/Asuncion" },
      { value: "America/Bahia", name: "บาเยีย", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "บาเอียบันเดรัส",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "บาร์เบโดส", id: "America/Barbados" },
      { value: "America/Belem", name: "เบเลง", id: "America/Belem" },
      { value: "America/Belize", name: "เบลีซ", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "บลังค์-ซาบลอน",
        id: "America/Blanc-Sablon"
      },
      { value: "America/Boa_Vista", name: "บัววีชตา", id: "America/Boa_Vista" },
      { value: "America/Bogota", name: "โบโกตา", id: "America/Bogota" },
      { value: "America/Boise", name: "บอยซี", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "บัวโนสไอเรส",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "อ่าวแคมบริดจ์",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "กัมปูกรันดี",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "แคนคุน", id: "America/Cancun" },
      { value: "America/Caracas", name: "คาราคัส", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "กาตามาร์กา",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "กาแยน", id: "America/Cayenne" },
      { value: "America/Cayman", name: "เคย์แมน", id: "America/Cayman" },
      { value: "America/Chicago", name: "ชิคาโก", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "ชีวาวา", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "คอรัลฮาร์เบอร์",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "คอร์โดบา", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "คอสตาริกา",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "เครสตัน", id: "America/Creston" },
      { value: "America/Cuiaba", name: "กุยาบา", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "คูราเซา", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "ดานมาร์กสฮาวน์",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "ดอว์สัน", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "ดอว์สัน ครีก",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "เดนเวอร์", id: "America/Denver" },
      { value: "America/Detroit", name: "ดีทรอยต์", id: "America/Detroit" },
      { value: "America/Dominica", name: "โดมินิกา", id: "America/Dominica" },
      { value: "America/Edmonton", name: "เอดมันตัน", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "เอรูเนเป", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "เอลซัลวาดอร์",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "ฟอร์ตเนลสัน",
        id: "America/Fort_Nelson"
      },
      {
        value: "America/Fortaleza",
        name: "ฟอร์ตาเลซา",
        id: "America/Fortaleza"
      },
      { value: "America/Glace_Bay", name: "เกลซเบย์", id: "America/Glace_Bay" },
      { value: "America/Godthab", name: "กอดแธบ", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "กูสเบย์", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "แกรนด์เติร์ก",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "เกรนาดา", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "กวาเดอลูป",
        id: "America/Guadeloupe"
      },
      {
        value: "America/Guatemala",
        name: "กัวเตมาลา",
        id: "America/Guatemala"
      },
      { value: "America/Guayaquil", name: "กัวยากิล", id: "America/Guayaquil" },
      { value: "America/Guyana", name: "กายอานา", id: "America/Guyana" },
      { value: "America/Halifax", name: "แฮลิแฟกซ์", id: "America/Halifax" },
      { value: "America/Havana", name: "ฮาวานา", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "เอร์โมซีโย",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "นอกซ์, อินดีแอนา",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "มาเรงโก, อินดีแอนา",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "ปีเตอร์สเบิร์ก, อินดีแอนา",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "เทลล์ซิตี, อินดีแอนา",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "วีเวย์, อินดีแอนา",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "วินเซนเนส, อินดีแอนา",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "วินาแมค, อินดีแอนา",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "อินเดียแนโพลิส",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "อินูวิก", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "อีกวาลิต", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "จาเมกา", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "จูจิว", id: "America/Jujuy" },
      { value: "America/Juneau", name: "จูโน", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "มอนติเซลโล, เคนตักกี",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "คราเลนดิจค์",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "ลาปาซ", id: "America/La_Paz" },
      { value: "America/Lima", name: "ลิมา", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "ลอสแองเจลิส",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "ลูส์วิลล์",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "โลเวอร์พรินซ์ ควอเตอร์",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "มาเซโอ", id: "America/Maceio" },
      { value: "America/Managua", name: "มานากัว", id: "America/Managua" },
      { value: "America/Manaus", name: "มาเนาส์", id: "America/Manaus" },
      { value: "America/Marigot", name: "มาริโกต์", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "มาร์ตินีก",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "มาตาโมรอส",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "มาซาทลาน", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "เมนดูซา", id: "America/Mendoza" },
      { value: "America/Menominee", name: "เมโนมินี", id: "America/Menominee" },
      { value: "America/Merida", name: "เมรีดา", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "เมทลากาตละ",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "เม็กซิโกซิตี",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "มีเกอลง", id: "America/Miquelon" },
      { value: "America/Moncton", name: "มองตัน", id: "America/Moncton" },
      {
        value: "America/Monterrey",
        name: "มอนเตร์เรย์",
        id: "America/Monterrey"
      },
      {
        value: "America/Montevideo",
        name: "มอนเตวิเดโอ",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "มอนเซอร์รัต",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "แนสซอ", id: "America/Nassau" },
      { value: "America/New_York", name: "นิวยอร์ก", id: "America/New_York" },
      { value: "America/Nipigon", name: "นิปิกอน", id: "America/Nipigon" },
      { value: "America/Nome", name: "นอม", id: "America/Nome" },
      { value: "America/Noronha", name: "โนรอนฮา", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "โบลาห์, นอร์ทดาโคตา",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "เซนเตอร์, นอร์ทดาโคตา",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "นิวเซเลม, นอร์ทดาโคตา",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "โอจินากา", id: "America/Ojinaga" },
      { value: "America/Panama", name: "ปานามา", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "พางนีทัง",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "ปารามาริโบ",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "ฟินิกซ์", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "ปอร์โตแปรงซ์",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "พอร์ทออฟสเปน",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "ปอร์ตูเวลโย",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "เปอโตริโก",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "ปุนตาอาเรนัส",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "เรนนี่ริเวอร์",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "แรงกินอินเล็ต",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "เรซีเฟ", id: "America/Recife" },
      { value: "America/Regina", name: "ริไจนา", id: "America/Regina" },
      { value: "America/Resolute", name: "เรโซลูท", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "รีโอบรังโก",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "ซานตาอิซาเบล",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "ซันตาเรม", id: "America/Santarem" },
      { value: "America/Santiago", name: "ซันติอาโก", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "ซานโต โดมิงโก",
        id: "America/Santo_Domingo"
      },
      { value: "America/Sao_Paulo", name: "เซาเปาลู", id: "America/Sao_Paulo" },
      {
        value: "America/Scoresbysund",
        name: "สกอเรสไบซันด์",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "ซิตกา", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "เซนต์บาร์เธเลมี",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "เซนต์จอนส์", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "เซนต์คิตส์", id: "America/St_Kitts" },
      {
        value: "America/St_Lucia",
        name: "เซนต์ลูเซีย",
        id: "America/St_Lucia"
      },
      {
        value: "America/St_Thomas",
        name: "เซนต์โธมัส",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "เซนต์วินเซนต์",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "สวิฟต์เคอร์เรนต์",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "เตกูซิกัลปา",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "ทูเล", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "ทันเดอร์เบย์",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "ทิฮัวนา", id: "America/Tijuana" },
      { value: "America/Toronto", name: "โทรอนโต", id: "America/Toronto" },
      { value: "America/Tortola", name: "ตอร์โตลา", id: "America/Tortola" },
      {
        value: "America/Vancouver",
        name: "แวนคูเวอร์",
        id: "America/Vancouver"
      },
      {
        value: "America/Whitehorse",
        name: "ไวต์ฮอร์ส",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "วินนิเพก", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "ยากูทัต", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "เยลโลว์ไนฟ์",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "เคซีย์", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "เดวิส", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "ดูมองต์ดูร์วิลล์",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "แมคควอรี",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "มอว์สัน", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "แมคมัวโด",
        id: "Antarctica/McMurdo"
      },
      {
        value: "Antarctica/Palmer",
        name: "พาล์เมอร์",
        id: "Antarctica/Palmer"
      },
      { value: "Antarctica/Rothera", name: "โรธีรา", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "ไซโยวา", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "โทรล", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "วอสตอค", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "ลองเยียร์เบียน",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "เอเดน", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "อัลมาตี", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "อัมมาน", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "อานาดีร์", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "อัคตาอู", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "อัคโทบี", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "อาชกาบัต", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "อทีราว", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "แบกแดด", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "บาห์เรน", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "บากู", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "กรุงเทพ", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "บาร์เนาว์", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "เบรุต", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "บิชเคก", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "บรูไน", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "โกลกาตา", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "ชิตา", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "ชอยบาลซาน", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "โคลัมโบ", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "ดามัสกัส", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "ดากา", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "ดิลี", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "ดูไบ", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "ดูชานเบ", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "แฟมากุสตา", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "กาซา", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "เฮบรอน", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "ฮ่องกง", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "ฮอฟด์", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "อีร์คุตสค์", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "จาการ์ตา", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "จายาปุระ", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "เยรูซาเลม", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "คาบูล", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "คามชัตกา", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "การาจี", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "กาตมันดุ", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "ฮันดืยกา", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "ครัสโนยาร์สก์",
        id: "Asia/Krasnoyarsk"
      },
      {
        value: "Asia/Kuala_Lumpur",
        name: "กัวลาลัมเปอร์",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "กูชิง", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "คูเวต", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "มาเก๊า", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "มากาดาน", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "มากัสซาร์", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "มะนิลา", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "มัสกัต", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "นิโคเซีย", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "โนโวคุซเนตสค์",
        id: "Asia/Novokuznetsk"
      },
      {
        value: "Asia/Novosibirsk",
        name: "โนโวซิบิร์สก์",
        id: "Asia/Novosibirsk"
      },
      { value: "Asia/Omsk", name: "โอมสก์", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "ออรัล", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "พนมเปญ", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "พอนเทียนัก", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "เปียงยาง", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "กาตาร์", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "ไคซีลอร์ดา", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "ย่างกุ้ง", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "ริยาร์ด", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "นครโฮจิมินห์", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "ซาคาลิน", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "ซามาร์กานด์", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "โซล", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "เซี่ยงไฮ้", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "สิงคโปร์", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "ซเรดเนคโคลิมสก์",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "ไทเป", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "ทาชเคนต์", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "ทบิลิซิ", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "เตหะราน", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "ทิมพู", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "โตเกียว", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "ตอมสค์", id: "Asia/Tomsk" },
      {
        value: "Asia/Ulaanbaatar",
        name: "อูลานบาตอร์",
        id: "Asia/Ulaanbaatar"
      },
      { value: "Asia/Urumqi", name: "อุรุมชี", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "อุสต์เนรา", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "เวียงจันทน์", id: "Asia/Vientiane" },
      {
        value: "Asia/Vladivostok",
        name: "วลาดิโวสต็อก",
        id: "Asia/Vladivostok"
      },
      { value: "Asia/Yakutsk", name: "ยาคุตสค์", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "ยีคาเตอรินเบิร์ก",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "เยเรวาน", id: "Asia/Yerevan" },
      { value: "Atlantic/Azores", name: "อาซอเรส", id: "Atlantic/Azores" },
      { value: "Atlantic/Bermuda", name: "เบอร์มิวดา", id: "Atlantic/Bermuda" },
      { value: "Atlantic/Canary", name: "คะเนรี", id: "Atlantic/Canary" },
      {
        value: "Atlantic/Cape_Verde",
        name: "เคปเวิร์ด",
        id: "Atlantic/Cape_Verde"
      },
      { value: "Atlantic/Faeroe", name: "แฟโร", id: "Atlantic/Faeroe" },
      { value: "Atlantic/Madeira", name: "มาเดรา", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "เรคยาวิก",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "เซาท์ จอร์เจีย",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "เซนต์เฮเลนา",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "สแตนลีย์", id: "Atlantic/Stanley" },
      {
        value: "Australia/Adelaide",
        name: "แอดิเลด",
        id: "Australia/Adelaide"
      },
      {
        value: "Australia/Brisbane",
        name: "บริสเบน",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "โบรกเคนฮิลล์",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "คูร์รี", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "ดาร์วิน", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "ยูคลา", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "โฮบาร์ต", id: "Australia/Hobart" },
      {
        value: "Australia/Lindeman",
        name: "ลินดีแมน",
        id: "Australia/Lindeman"
      },
      {
        value: "Australia/Lord_Howe",
        name: "ลอร์ดโฮว์",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "เมลเบิร์น",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "เพิร์ท", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "ซิดนีย์", id: "Australia/Sydney" },
      { value: "Etc/UTC", name: "เวลาสากลเชิงพิกัด", id: "Etc/UTC" },
      { value: "Europe/Amsterdam", name: "อัมสเตอดัม", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "อันดอร์รา", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "แอสตราคาน", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "เอเธนส์", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "เบลเกรด", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "เบอร์ลิน", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "บราติสลาวา",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "บรัสเซลส์", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "บูคาเรส", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "บูดาเปส", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "บุสซิงเง็น", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "คีชีเนา", id: "Europe/Chisinau" },
      {
        value: "Europe/Copenhagen",
        name: "โคเปนเฮเกน",
        id: "Europe/Copenhagen"
      },
      {
        value: "Europe/Dublin",
        name: "เวลามาตรฐานไอร์แลนด์ดับบลิน",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "ยิบรอลตาร์", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "เกิร์นซีย์", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "เฮลซิงกิ", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "เกาะแมน",
        id: "Europe/Isle_of_Man"
      },
      { value: "Europe/Istanbul", name: "อิสตันบูล", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "เจอร์ซีย์", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "คาลินิงกราด",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "เคียฟ", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "คิรอฟ", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "ลิสบอน", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "ลูบลิยานา", id: "Europe/Ljubljana" },
      {
        value: "Europe/London",
        name: "เวลาฤดูร้อนอังกฤษลอนดอน",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "ลักเซมเบิร์ก",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "มาดริด", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "มอลตา", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "มารีฮามน์", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "มินสก์", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "โมนาโก", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "มอสโก", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "ออสโล", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "ปารีส", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "พอดกอรีตซา", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "ปราก", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "ริกา", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "โรม", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "ซามารา", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "ซานมารีโน",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "ซาราเยโว", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "ซาราทอฟ", id: "Europe/Saratov" },
      {
        value: "Europe/Simferopol",
        name: "ซิมเฟอโรโปล",
        id: "Europe/Simferopol"
      },
      { value: "Europe/Skopje", name: "สโกเปีย", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "โซเฟีย", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "สตอกโฮล์ม", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "ทาลลินน์", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "ติรานา", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "อะลิยานอฟ", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "อัซโกร็อด", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "วาดุซ", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "วาติกัน", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "เวียนนา", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "วิลนีอุส", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "วอลโกกราด", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "วอร์ซอ", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "ซาเกร็บ", id: "Europe/Zagreb" },
      { value: "Europe/Zaporozhye", name: "ซาโปโรซี", id: "Europe/Zaporozhye" },
      { value: "Europe/Zurich", name: "ซูริค", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "อันตานานาริโว",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "ชากัส", id: "Indian/Chagos" },
      { value: "Indian/Christmas", name: "คริสต์มาส", id: "Indian/Christmas" },
      { value: "Indian/Cocos", name: "โคโคส", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "โคโมโร", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "แกร์เกอลอง", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "มาเอ", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "มัลดีฟส์", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "มอริเชียส", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "มาโยเต", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "เรอูนียง", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "อาปีอา", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "โอคแลนด์", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "บูเกนวิลล์",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "แชทัม", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "อีสเตอร์", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "เอฟาเต", id: "Pacific/Efate" },
      {
        value: "Pacific/Enderbury",
        name: "เอนเดอร์เบอรี",
        id: "Pacific/Enderbury"
      },
      { value: "Pacific/Fakaofo", name: "ฟาเคาโฟ", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "ฟิจิ", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "ฟูนะฟูตี", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "กาลาปาโกส",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "แกมเบียร์", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "กัวดัลคานัล",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "กวม", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "โฮโนลูลู", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "จอห์นสตัน", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "คิริทิมาตี",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "คอสไร", id: "Pacific/Kosrae" },
      { value: "Pacific/Kwajalein", name: "ควาจาเลน", id: "Pacific/Kwajalein" },
      { value: "Pacific/Majuro", name: "มาจูโร", id: "Pacific/Majuro" },
      {
        value: "Pacific/Marquesas",
        name: "มาร์เคซัส",
        id: "Pacific/Marquesas"
      },
      { value: "Pacific/Midway", name: "มิดเวย์", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "นาอูรู", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "นีอูเอ", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "นอร์ฟอล์ก", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "นูเมอา", id: "Pacific/Noumea" },
      {
        value: "Pacific/Pago_Pago",
        name: "ปาโก ปาโก",
        id: "Pacific/Pago_Pago"
      },
      { value: "Pacific/Palau", name: "ปาเลา", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "พิตแคร์น", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "โปนาเป", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "พอร์ตมอร์สบี",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "ราโรตองกา",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "ไซปัน", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "ตาฮีตี", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "ตาระวา", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "ตองกาตาปู",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "ทรัก", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "เวก", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "วาลลิส", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
