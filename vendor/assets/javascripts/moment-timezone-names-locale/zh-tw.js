// moment-timezone-localization for lang code: zh_Hant

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
      { value: "Africa/Abidjan", name: "阿比讓", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "阿克拉", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "阿迪斯阿貝巴",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "阿爾及爾", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "阿斯瑪拉", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "巴馬科", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "班吉", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "班竹", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "比紹", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "布蘭太爾", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "布拉柴維爾",
        id: "Africa/Brazzaville"
      },
      { value: "Africa/Bujumbura", name: "布松布拉", id: "Africa/Bujumbura" },
      { value: "Africa/Cairo", name: "開羅", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "卡薩布蘭卡",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "休達", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "柯那克里", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "達喀爾", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "沙蘭港",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "吉布地", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "杜阿拉", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "阿尤恩", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "自由城", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "嘉柏隆里", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "哈拉雷", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "約翰尼斯堡",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "朱巴", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "坎帕拉", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "喀土穆", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "基加利", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "金夏沙", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "拉哥斯", id: "Africa/Lagos" },
      { value: "Africa/Libreville", name: "自由市", id: "Africa/Libreville" },
      { value: "Africa/Lome", name: "洛美", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "羅安達", id: "Africa/Luanda" },
      { value: "Africa/Lubumbashi", name: "盧本巴希", id: "Africa/Lubumbashi" },
      { value: "Africa/Lusaka", name: "路沙卡", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "馬拉博", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "馬普托", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "馬賽魯", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "墨巴本", id: "Africa/Mbabane" },
      { value: "Africa/Mogadishu", name: "摩加迪休", id: "Africa/Mogadishu" },
      { value: "Africa/Monrovia", name: "蒙羅維亞", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "奈洛比", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "恩賈梅納", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "尼亞美", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "諾克少", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "瓦加杜古",
        id: "Africa/Ouagadougou"
      },
      { value: "Africa/Porto-Novo", name: "波多諾佛", id: "Africa/Porto-Novo" },
      { value: "Africa/Sao_Tome", name: "聖多美", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "的黎波里", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "突尼斯", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "溫得和克", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "艾達克", id: "America/Adak" },
      { value: "America/Anchorage", name: "安克拉治", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "安奎拉", id: "America/Anguilla" },
      { value: "America/Antigua", name: "安地卡", id: "America/Antigua" },
      { value: "America/Araguaina", name: "阿拉圭那", id: "America/Araguaina" },
      {
        value: "America/Argentina/La_Rioja",
        name: "拉略哈",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "里奧加耶戈斯",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "薩爾塔",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "聖胡安",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "聖路易",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "吐庫曼",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "烏斯懷亞",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "荷屬阿魯巴", id: "America/Aruba" },
      { value: "America/Asuncion", name: "亞松森", id: "America/Asuncion" },
      { value: "America/Bahia", name: "巴伊阿", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "巴伊亞班德拉斯",
        id: "America/Bahia_Banderas"
      },
      { value: "America/Barbados", name: "巴貝多", id: "America/Barbados" },
      { value: "America/Belem", name: "貝倫", id: "America/Belem" },
      { value: "America/Belize", name: "貝里斯", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "白朗薩布隆",
        id: "America/Blanc-Sablon"
      },
      { value: "America/Boa_Vista", name: "保維斯塔", id: "America/Boa_Vista" },
      { value: "America/Bogota", name: "波哥大", id: "America/Bogota" },
      { value: "America/Boise", name: "波夕", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "布宜諾斯艾利斯",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "劍橋灣",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "格蘭場",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "坎昆", id: "America/Cancun" },
      { value: "America/Caracas", name: "卡拉卡斯", id: "America/Caracas" },
      { value: "America/Catamarca", name: "卡塔馬卡", id: "America/Catamarca" },
      { value: "America/Cayenne", name: "開雲", id: "America/Cayenne" },
      { value: "America/Cayman", name: "開曼群島", id: "America/Cayman" },
      { value: "America/Chicago", name: "芝加哥", id: "America/Chicago" },
      { value: "America/Chihuahua", name: "奇華華", id: "America/Chihuahua" },
      {
        value: "America/Coral_Harbour",
        name: "阿蒂科肯",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "哥多華", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "哥斯大黎加",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "克雷斯頓", id: "America/Creston" },
      { value: "America/Cuiaba", name: "古雅巴", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "庫拉索", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "丹馬沙文",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "道森", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "道森克里克",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "丹佛", id: "America/Denver" },
      { value: "America/Detroit", name: "底特律", id: "America/Detroit" },
      { value: "America/Dominica", name: "多米尼克", id: "America/Dominica" },
      { value: "America/Edmonton", name: "艾德蒙吞", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "艾魯內佩", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "薩爾瓦多",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "納爾遜堡",
        id: "America/Fort_Nelson"
      },
      { value: "America/Fortaleza", name: "福塔力莎", id: "America/Fortaleza" },
      { value: "America/Glace_Bay", name: "格雷斯貝", id: "America/Glace_Bay" },
      { value: "America/Godthab", name: "努克", id: "America/Godthab" },
      { value: "America/Goose_Bay", name: "鵝灣", id: "America/Goose_Bay" },
      {
        value: "America/Grand_Turk",
        name: "大特克島",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "格瑞納達", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "瓜地洛普",
        id: "America/Guadeloupe"
      },
      { value: "America/Guatemala", name: "瓜地馬拉", id: "America/Guatemala" },
      { value: "America/Guayaquil", name: "瓜亞基爾", id: "America/Guayaquil" },
      { value: "America/Guyana", name: "蓋亞那", id: "America/Guyana" },
      { value: "America/Halifax", name: "哈里法克斯", id: "America/Halifax" },
      { value: "America/Havana", name: "哈瓦那", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "埃莫西約",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "印第安那州諾克斯",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "印第安那州馬倫哥",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "印第安那州彼得堡",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "印第安那州泰爾城",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "印第安那州維威",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "印第安那州溫森斯",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "印第安那州威納馬克",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "印第安那波里斯",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "伊奴維克", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "伊魁特", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "牙買加", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "胡胡伊", id: "America/Jujuy" },
      { value: "America/Juneau", name: "朱諾", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "肯塔基州蒙地卻羅",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "克拉倫代克",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "拉巴斯", id: "America/La_Paz" },
      { value: "America/Lima", name: "利馬", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "洛杉磯",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "路易斯維爾",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "下太子區",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "馬瑟歐", id: "America/Maceio" },
      { value: "America/Managua", name: "馬拿瓜", id: "America/Managua" },
      { value: "America/Manaus", name: "瑪瑙斯", id: "America/Manaus" },
      { value: "America/Marigot", name: "馬里戈特", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "馬丁尼克",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "馬塔莫羅斯",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "馬薩特蘭", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "門多薩", id: "America/Mendoza" },
      { value: "America/Menominee", name: "美諾米尼", id: "America/Menominee" },
      { value: "America/Merida", name: "梅里達", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "梅特拉卡特拉",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "墨西哥市",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "密啟崙", id: "America/Miquelon" },
      { value: "America/Moncton", name: "蒙克頓", id: "America/Moncton" },
      { value: "America/Monterrey", name: "蒙特瑞", id: "America/Monterrey" },
      {
        value: "America/Montevideo",
        name: "蒙特維多",
        id: "America/Montevideo"
      },
      { value: "America/Montserrat", name: "蒙哲臘", id: "America/Montserrat" },
      { value: "America/Nassau", name: "拿索", id: "America/Nassau" },
      { value: "America/New_York", name: "紐約", id: "America/New_York" },
      { value: "America/Nipigon", name: "尼皮岡", id: "America/Nipigon" },
      { value: "America/Nome", name: "諾姆", id: "America/Nome" },
      { value: "America/Noronha", name: "諾倫哈", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "北達科他州布由拉",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "北達科他州中心",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "北達科他州紐沙倫",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "奧希納加", id: "America/Ojinaga" },
      { value: "America/Panama", name: "巴拿馬", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "潘尼爾東",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "巴拉馬利波",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "鳳凰城", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "太子港",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "西班牙港",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "維留港",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "波多黎各",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "蓬塔阿雷納斯",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "雨河鎮",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "蘭今灣",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "雷西非", id: "America/Recife" },
      { value: "America/Regina", name: "里賈納", id: "America/Regina" },
      { value: "America/Resolute", name: "羅斯魯特", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "里約布蘭",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "聖伊薩貝爾",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "聖塔倫", id: "America/Santarem" },
      { value: "America/Santiago", name: "聖地牙哥", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "聖多明哥",
        id: "America/Santo_Domingo"
      },
      { value: "America/Sao_Paulo", name: "聖保羅", id: "America/Sao_Paulo" },
      {
        value: "America/Scoresbysund",
        name: "伊托科爾托米特",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "錫特卡", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "聖巴托洛繆島",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "聖約翰", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "聖基茨", id: "America/St_Kitts" },
      { value: "America/St_Lucia", name: "聖露西亞", id: "America/St_Lucia" },
      { value: "America/St_Thomas", name: "聖托馬斯", id: "America/St_Thomas" },
      { value: "America/St_Vincent", name: "聖文森", id: "America/St_Vincent" },
      {
        value: "America/Swift_Current",
        name: "斯威夫特卡倫特",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "德古斯加巴",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "杜里", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "珊德灣",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "提華納", id: "America/Tijuana" },
      { value: "America/Toronto", name: "多倫多", id: "America/Toronto" },
      { value: "America/Tortola", name: "托爾托拉", id: "America/Tortola" },
      { value: "America/Vancouver", name: "溫哥華", id: "America/Vancouver" },
      {
        value: "America/Whitehorse",
        name: "懷特霍斯",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "溫尼伯", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "雅庫塔", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "耶洛奈夫",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "凱西", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "戴維斯", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "杜蒙杜比爾",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "麥覺理",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "莫森", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "麥克默多",
        id: "Antarctica/McMurdo"
      },
      { value: "Antarctica/Palmer", name: "帕麥", id: "Antarctica/Palmer" },
      { value: "Antarctica/Rothera", name: "羅瑟拉", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "昭和基地", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "綽爾", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "沃斯托克", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "隆意耳拜恩",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "亞丁", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "阿拉木圖", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "安曼", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "阿那底", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "阿克套", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "阿克托比", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "阿什哈巴特", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "阿特勞", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "巴格達", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "巴林", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "巴庫", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "曼谷", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "巴爾瑙爾", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "貝魯特", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "比什凱克", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "汶萊", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "加爾各答", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "赤塔", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "喬巴山", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "可倫坡", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "大馬士革", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "達卡", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "帝力", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "杜拜", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "杜桑貝", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "法馬古斯塔", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "加薩", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "赫布隆", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "香港", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "科布多", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "伊爾庫次克", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "雅加達", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "加亞布拉", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "耶路撒冷", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "喀布爾", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "堪察加", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "喀拉蚩", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "加德滿都", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "堪地加", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "克拉斯諾亞爾斯克",
        id: "Asia/Krasnoyarsk"
      },
      { value: "Asia/Kuala_Lumpur", name: "吉隆坡", id: "Asia/Kuala_Lumpur" },
      { value: "Asia/Kuching", name: "古晉", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "科威特", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "澳門", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "馬加丹", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "馬卡沙爾", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "馬尼拉", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "馬斯開特", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "尼古西亞", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "新庫茲涅茨克",
        id: "Asia/Novokuznetsk"
      },
      { value: "Asia/Novosibirsk", name: "新西伯利亞", id: "Asia/Novosibirsk" },
      { value: "Asia/Omsk", name: "鄂木斯克", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "烏拉爾", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "金邊", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "坤甸", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "平壤", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "卡達", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "克孜勒奧爾達", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "仰光", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "利雅德", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "胡志明市", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "庫頁島", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "撒馬爾罕", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "首爾", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "上海", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "新加坡", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "中科雷姆斯克",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "台北", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "塔什干", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "第比利斯", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "德黑蘭", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "廷布", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "東京", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "托木斯克", id: "Asia/Tomsk" },
      { value: "Asia/Ulaanbaatar", name: "烏蘭巴托", id: "Asia/Ulaanbaatar" },
      { value: "Asia/Urumqi", name: "烏魯木齊", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "烏斯內拉", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "永珍", id: "Asia/Vientiane" },
      { value: "Asia/Vladivostok", name: "海參崴", id: "Asia/Vladivostok" },
      { value: "Asia/Yakutsk", name: "雅庫次克", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "葉卡捷林堡",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "葉里溫", id: "Asia/Yerevan" },
      { value: "Atlantic/Azores", name: "亞速爾群島", id: "Atlantic/Azores" },
      { value: "Atlantic/Bermuda", name: "百慕達", id: "Atlantic/Bermuda" },
      { value: "Atlantic/Canary", name: "加納利", id: "Atlantic/Canary" },
      {
        value: "Atlantic/Cape_Verde",
        name: "維德角",
        id: "Atlantic/Cape_Verde"
      },
      { value: "Atlantic/Faeroe", name: "法羅群島", id: "Atlantic/Faeroe" },
      { value: "Atlantic/Madeira", name: "馬得拉群島", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "雷克雅維克",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "南喬治亞",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "聖赫勒拿島",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "史坦利", id: "Atlantic/Stanley" },
      {
        value: "Australia/Adelaide",
        name: "阿得雷德",
        id: "Australia/Adelaide"
      },
      {
        value: "Australia/Brisbane",
        name: "布利斯班",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "布羅肯希爾",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "克黎", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "達爾文", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "尤克拉", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "荷巴特", id: "Australia/Hobart" },
      { value: "Australia/Lindeman", name: "林德曼", id: "Australia/Lindeman" },
      {
        value: "Australia/Lord_Howe",
        name: "豪勳爵島",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "墨爾本",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "伯斯", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "雪梨", id: "Australia/Sydney" },
      { value: "Etc/UTC", name: "世界標準時間UTC", id: "Etc/UTC" },
      { value: "Europe/Amsterdam", name: "阿姆斯特丹", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "安道爾", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "阿斯特拉罕", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "雅典", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "貝爾格勒", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "柏林", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "布拉提斯拉瓦",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "布魯塞爾", id: "Europe/Brussels" },
      { value: "Europe/Bucharest", name: "布加勒斯特", id: "Europe/Bucharest" },
      { value: "Europe/Budapest", name: "布達佩斯", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "布辛根", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "基西紐", id: "Europe/Chisinau" },
      { value: "Europe/Copenhagen", name: "哥本哈根", id: "Europe/Copenhagen" },
      {
        value: "Europe/Dublin",
        name: "愛爾蘭標準時間都柏林",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "直布羅陀", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "根息島", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "赫爾辛基", id: "Europe/Helsinki" },
      { value: "Europe/Isle_of_Man", name: "曼島", id: "Europe/Isle_of_Man" },
      { value: "Europe/Istanbul", name: "伊斯坦堡", id: "Europe/Istanbul" },
      { value: "Europe/Jersey", name: "澤西島", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "加里寧格勒",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "基輔", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "基洛夫", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "里斯本", id: "Europe/Lisbon" },
      { value: "Europe/Ljubljana", name: "盧比安納", id: "Europe/Ljubljana" },
      { value: "Europe/London", name: "英國夏令時間倫敦", id: "Europe/London" },
      { value: "Europe/Luxembourg", name: "盧森堡", id: "Europe/Luxembourg" },
      { value: "Europe/Madrid", name: "馬德里", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "馬爾他", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "瑪麗港", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "明斯克", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "摩納哥", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "莫斯科", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "奧斯陸", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "巴黎", id: "Europe/Paris" },
      { value: "Europe/Podgorica", name: "波多里察", id: "Europe/Podgorica" },
      { value: "Europe/Prague", name: "布拉格", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "里加", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "羅馬", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "沙馬拉", id: "Europe/Samara" },
      { value: "Europe/San_Marino", name: "聖馬利諾", id: "Europe/San_Marino" },
      { value: "Europe/Sarajevo", name: "塞拉耶佛", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "薩拉托夫", id: "Europe/Saratov" },
      { value: "Europe/Simferopol", name: "辛非洛浦", id: "Europe/Simferopol" },
      { value: "Europe/Skopje", name: "史高比耶", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "索菲亞", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "斯德哥爾摩", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "塔林", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "地拉那", id: "Europe/Tirane" },
      {
        value: "Europe/Ulyanovsk",
        name: "烏里揚諾夫斯克",
        id: "Europe/Ulyanovsk"
      },
      { value: "Europe/Uzhgorod", name: "烏茲哥洛", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "瓦都茲", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "梵蒂岡", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "維也納", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "維爾紐斯", id: "Europe/Vilnius" },
      { value: "Europe/Volgograd", name: "伏爾加格勒", id: "Europe/Volgograd" },
      { value: "Europe/Warsaw", name: "華沙", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "札格瑞布", id: "Europe/Zagreb" },
      { value: "Europe/Zaporozhye", name: "札波羅結", id: "Europe/Zaporozhye" },
      { value: "Europe/Zurich", name: "蘇黎世", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "安塔那那利弗",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "查戈斯", id: "Indian/Chagos" },
      { value: "Indian/Christmas", name: "聖誕島", id: "Indian/Christmas" },
      { value: "Indian/Cocos", name: "科科斯群島", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "科摩羅群島", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "凱爾蓋朗島", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "馬埃島", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "馬爾地夫", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "模里西斯", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "馬約特島", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "留尼旺島", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "阿皮亞", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "奧克蘭", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "布干維爾",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "查坦", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "復活島", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "埃法特", id: "Pacific/Efate" },
      {
        value: "Pacific/Enderbury",
        name: "恩得伯理島",
        id: "Pacific/Enderbury"
      },
      { value: "Pacific/Fakaofo", name: "法考福", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "斐濟", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "富那富提", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "加拉巴哥群島",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "甘比爾群島", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "瓜達康納爾島",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "關島", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "檀香山", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "強斯頓", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "基里地馬地島",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "科斯瑞", id: "Pacific/Kosrae" },
      { value: "Pacific/Kwajalein", name: "瓜加林島", id: "Pacific/Kwajalein" },
      { value: "Pacific/Majuro", name: "馬朱諾", id: "Pacific/Majuro" },
      {
        value: "Pacific/Marquesas",
        name: "馬可薩斯島",
        id: "Pacific/Marquesas"
      },
      { value: "Pacific/Midway", name: "中途島", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "諾魯", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "紐埃島", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "諾福克", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "諾美亞", id: "Pacific/Noumea" },
      { value: "Pacific/Pago_Pago", name: "巴哥巴哥", id: "Pacific/Pago_Pago" },
      { value: "Pacific/Palau", name: "帛琉", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "皮特肯群島", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "波納佩", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "莫士比港",
        id: "Pacific/Port_Moresby"
      },
      { value: "Pacific/Rarotonga", name: "拉羅湯加", id: "Pacific/Rarotonga" },
      { value: "Pacific/Saipan", name: "塞班", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "大溪地", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "塔拉瓦", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "東加塔布島",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "楚克", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "威克", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "瓦利斯", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
