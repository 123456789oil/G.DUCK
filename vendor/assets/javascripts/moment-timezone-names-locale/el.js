// moment-timezone-localization for lang code: el

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
      { value: "Africa/Abidjan", name: "Αμπιτζάν", id: "Africa/Abidjan" },
      { value: "Africa/Accra", name: "Άκρα", id: "Africa/Accra" },
      {
        value: "Africa/Addis_Ababa",
        name: "Αντίς Αμπέμπα",
        id: "Africa/Addis_Ababa"
      },
      { value: "Africa/Algiers", name: "Αλγέρι", id: "Africa/Algiers" },
      { value: "Africa/Asmera", name: "Ασμάρα", id: "Africa/Asmera" },
      { value: "Africa/Bamako", name: "Μπαμάκο", id: "Africa/Bamako" },
      { value: "Africa/Bangui", name: "Μπανγκί", id: "Africa/Bangui" },
      { value: "Africa/Banjul", name: "Μπανζούλ", id: "Africa/Banjul" },
      { value: "Africa/Bissau", name: "Μπισάου", id: "Africa/Bissau" },
      { value: "Africa/Blantyre", name: "Μπλαντάιρ", id: "Africa/Blantyre" },
      {
        value: "Africa/Brazzaville",
        name: "Μπραζαβίλ",
        id: "Africa/Brazzaville"
      },
      {
        value: "Africa/Bujumbura",
        name: "Μπουζουμπούρα",
        id: "Africa/Bujumbura"
      },
      { value: "Africa/Cairo", name: "Κάιρο", id: "Africa/Cairo" },
      {
        value: "Africa/Casablanca",
        name: "Καζαμπλάνκα",
        id: "Africa/Casablanca"
      },
      { value: "Africa/Ceuta", name: "Θέουτα", id: "Africa/Ceuta" },
      { value: "Africa/Conakry", name: "Κόνακρι", id: "Africa/Conakry" },
      { value: "Africa/Dakar", name: "Ντακάρ", id: "Africa/Dakar" },
      {
        value: "Africa/Dar_es_Salaam",
        name: "Νταρ Ες Σαλάμ",
        id: "Africa/Dar_es_Salaam"
      },
      { value: "Africa/Djibouti", name: "Τζιμπουτί", id: "Africa/Djibouti" },
      { value: "Africa/Douala", name: "Ντουάλα", id: "Africa/Douala" },
      { value: "Africa/El_Aaiun", name: "Ελ Αγιούν", id: "Africa/El_Aaiun" },
      { value: "Africa/Freetown", name: "Φρίταουν", id: "Africa/Freetown" },
      { value: "Africa/Gaborone", name: "Γκαμπορόνε", id: "Africa/Gaborone" },
      { value: "Africa/Harare", name: "Χαράρε", id: "Africa/Harare" },
      {
        value: "Africa/Johannesburg",
        name: "Γιοχάνεσμπουργκ",
        id: "Africa/Johannesburg"
      },
      { value: "Africa/Juba", name: "Τζούμπα", id: "Africa/Juba" },
      { value: "Africa/Kampala", name: "Καμπάλα", id: "Africa/Kampala" },
      { value: "Africa/Khartoum", name: "Χαρτούμ", id: "Africa/Khartoum" },
      { value: "Africa/Kigali", name: "Κιγκάλι", id: "Africa/Kigali" },
      { value: "Africa/Kinshasa", name: "Κινσάσα", id: "Africa/Kinshasa" },
      { value: "Africa/Lagos", name: "Λάγκος", id: "Africa/Lagos" },
      {
        value: "Africa/Libreville",
        name: "Λιμπρεβίλ",
        id: "Africa/Libreville"
      },
      { value: "Africa/Lome", name: "Λομέ", id: "Africa/Lome" },
      { value: "Africa/Luanda", name: "Λουάντα", id: "Africa/Luanda" },
      {
        value: "Africa/Lubumbashi",
        name: "Λουμπουμπάσι",
        id: "Africa/Lubumbashi"
      },
      { value: "Africa/Lusaka", name: "Λουζάκα", id: "Africa/Lusaka" },
      { value: "Africa/Malabo", name: "Μαλάμπο", id: "Africa/Malabo" },
      { value: "Africa/Maputo", name: "Μαπούτο", id: "Africa/Maputo" },
      { value: "Africa/Maseru", name: "Μασέρου", id: "Africa/Maseru" },
      { value: "Africa/Mbabane", name: "Μπαμπάνε", id: "Africa/Mbabane" },
      {
        value: "Africa/Mogadishu",
        name: "Μογκαντίσου",
        id: "Africa/Mogadishu"
      },
      { value: "Africa/Monrovia", name: "Μονρόβια", id: "Africa/Monrovia" },
      { value: "Africa/Nairobi", name: "Ναϊρόμπι", id: "Africa/Nairobi" },
      { value: "Africa/Ndjamena", name: "Ντζαμένα", id: "Africa/Ndjamena" },
      { value: "Africa/Niamey", name: "Νιαμέι", id: "Africa/Niamey" },
      { value: "Africa/Nouakchott", name: "Νουακσότ", id: "Africa/Nouakchott" },
      {
        value: "Africa/Ouagadougou",
        name: "Ουαγκαντούγκου",
        id: "Africa/Ouagadougou"
      },
      {
        value: "Africa/Porto-Novo",
        name: "Πόρτο-Νόβο",
        id: "Africa/Porto-Novo"
      },
      { value: "Africa/Sao_Tome", name: "Σάο Τομέ", id: "Africa/Sao_Tome" },
      { value: "Africa/Tripoli", name: "Τρίπολη", id: "Africa/Tripoli" },
      { value: "Africa/Tunis", name: "Τύνιδα", id: "Africa/Tunis" },
      { value: "Africa/Windhoek", name: "Βίντχουκ", id: "Africa/Windhoek" },
      { value: "America/Adak", name: "Άντακ", id: "America/Adak" },
      { value: "America/Anchorage", name: "Άνκορατζ", id: "America/Anchorage" },
      { value: "America/Anguilla", name: "Ανγκουίλα", id: "America/Anguilla" },
      { value: "America/Antigua", name: "Αντίγκουα", id: "America/Antigua" },
      {
        value: "America/Araguaina",
        name: "Αραγκουάινα",
        id: "America/Araguaina"
      },
      {
        value: "America/Argentina/La_Rioja",
        name: "Λα Ριόχα",
        id: "America/Argentina/La_Rioja"
      },
      {
        value: "America/Argentina/Rio_Gallegos",
        name: "Ρίο Γκαγιέγκος",
        id: "America/Argentina/Rio_Gallegos"
      },
      {
        value: "America/Argentina/Salta",
        name: "Σάλτα",
        id: "America/Argentina/Salta"
      },
      {
        value: "America/Argentina/San_Juan",
        name: "Σαν Χουάν",
        id: "America/Argentina/San_Juan"
      },
      {
        value: "America/Argentina/San_Luis",
        name: "Σαν Λούις",
        id: "America/Argentina/San_Luis"
      },
      {
        value: "America/Argentina/Tucuman",
        name: "Τουκουμάν",
        id: "America/Argentina/Tucuman"
      },
      {
        value: "America/Argentina/Ushuaia",
        name: "Ουσουάια",
        id: "America/Argentina/Ushuaia"
      },
      { value: "America/Aruba", name: "Αρούμπα", id: "America/Aruba" },
      { value: "America/Asuncion", name: "Ασουνσιόν", id: "America/Asuncion" },
      { value: "America/Bahia", name: "Μπαΐα", id: "America/Bahia" },
      {
        value: "America/Bahia_Banderas",
        name: "Μπαΐα ντε Μπαντέρας",
        id: "America/Bahia_Banderas"
      },
      {
        value: "America/Barbados",
        name: "Μπαρμπέιντος",
        id: "America/Barbados"
      },
      { value: "America/Belem", name: "Μπελέμ", id: "America/Belem" },
      { value: "America/Belize", name: "Μπελίζ", id: "America/Belize" },
      {
        value: "America/Blanc-Sablon",
        name: "Μπλαν Σαμπλόν",
        id: "America/Blanc-Sablon"
      },
      {
        value: "America/Boa_Vista",
        name: "Μπόα Βίστα",
        id: "America/Boa_Vista"
      },
      { value: "America/Bogota", name: "Μπογκοτά", id: "America/Bogota" },
      { value: "America/Boise", name: "Μπόιζι", id: "America/Boise" },
      {
        value: "America/Buenos_Aires",
        name: "Μπουένος Άιρες",
        id: "America/Buenos_Aires"
      },
      {
        value: "America/Cambridge_Bay",
        name: "Κέμπριτζ Μπέι",
        id: "America/Cambridge_Bay"
      },
      {
        value: "America/Campo_Grande",
        name: "Κάμπο Γκράντε",
        id: "America/Campo_Grande"
      },
      { value: "America/Cancun", name: "Κανκούν", id: "America/Cancun" },
      { value: "America/Caracas", name: "Καράκας", id: "America/Caracas" },
      {
        value: "America/Catamarca",
        name: "Καταμάρκα",
        id: "America/Catamarca"
      },
      { value: "America/Cayenne", name: "Καγιέν", id: "America/Cayenne" },
      { value: "America/Cayman", name: "Κέιμαν", id: "America/Cayman" },
      { value: "America/Chicago", name: "Σικάγο", id: "America/Chicago" },
      {
        value: "America/Chihuahua",
        name: "Τσιουάουα",
        id: "America/Chihuahua"
      },
      {
        value: "America/Coral_Harbour",
        name: "Ατικόκαν",
        id: "America/Coral_Harbour"
      },
      { value: "America/Cordoba", name: "Κόρδοβα", id: "America/Cordoba" },
      {
        value: "America/Costa_Rica",
        name: "Κόστα Ρίκα",
        id: "America/Costa_Rica"
      },
      { value: "America/Creston", name: "Κρέστον", id: "America/Creston" },
      { value: "America/Cuiaba", name: "Κουιαμπά", id: "America/Cuiaba" },
      { value: "America/Curacao", name: "Κουρασάο", id: "America/Curacao" },
      {
        value: "America/Danmarkshavn",
        name: "Ντανμαρκσάβν",
        id: "America/Danmarkshavn"
      },
      { value: "America/Dawson", name: "Ντόσον", id: "America/Dawson" },
      {
        value: "America/Dawson_Creek",
        name: "Ντόσον Κρικ",
        id: "America/Dawson_Creek"
      },
      { value: "America/Denver", name: "Ντένβερ", id: "America/Denver" },
      { value: "America/Detroit", name: "Ντιτρόιτ", id: "America/Detroit" },
      { value: "America/Dominica", name: "Ντομίνικα", id: "America/Dominica" },
      { value: "America/Edmonton", name: "Έντμοντον", id: "America/Edmonton" },
      { value: "America/Eirunepe", name: "Εϊρουνεπέ", id: "America/Eirunepe" },
      {
        value: "America/El_Salvador",
        name: "Ελ Σαλβαδόρ",
        id: "America/El_Salvador"
      },
      {
        value: "America/Fort_Nelson",
        name: "Φορτ Νέλσον",
        id: "America/Fort_Nelson"
      },
      {
        value: "America/Fortaleza",
        name: "Φορταλέζα",
        id: "America/Fortaleza"
      },
      {
        value: "America/Glace_Bay",
        name: "Γκλέις Μπέι",
        id: "America/Glace_Bay"
      },
      { value: "America/Godthab", name: "Νουούκ", id: "America/Godthab" },
      {
        value: "America/Goose_Bay",
        name: "Γκους Μπέι",
        id: "America/Goose_Bay"
      },
      {
        value: "America/Grand_Turk",
        name: "Γκραντ Τουρκ",
        id: "America/Grand_Turk"
      },
      { value: "America/Grenada", name: "Γρενάδα", id: "America/Grenada" },
      {
        value: "America/Guadeloupe",
        name: "Γουαδελούπη",
        id: "America/Guadeloupe"
      },
      {
        value: "America/Guatemala",
        name: "Γουατεμάλα",
        id: "America/Guatemala"
      },
      {
        value: "America/Guayaquil",
        name: "Γκουαγιακίλ",
        id: "America/Guayaquil"
      },
      { value: "America/Guyana", name: "Γουιάνα", id: "America/Guyana" },
      { value: "America/Halifax", name: "Χάλιφαξ", id: "America/Halifax" },
      { value: "America/Havana", name: "Αβάνα", id: "America/Havana" },
      {
        value: "America/Hermosillo",
        name: "Ερμοσίγιο",
        id: "America/Hermosillo"
      },
      {
        value: "America/Indiana/Knox",
        name: "Νοξ, Ιντιάνα",
        id: "America/Indiana/Knox"
      },
      {
        value: "America/Indiana/Marengo",
        name: "Μαρένγκο, Ιντιάνα",
        id: "America/Indiana/Marengo"
      },
      {
        value: "America/Indiana/Petersburg",
        name: "Πίτερσμπεργκ, Ιντιάνα",
        id: "America/Indiana/Petersburg"
      },
      {
        value: "America/Indiana/Tell_City",
        name: "Τελ Σίτι, Ιντιάνα",
        id: "America/Indiana/Tell_City"
      },
      {
        value: "America/Indiana/Vevay",
        name: "Βιβέι, Ιντιάνα",
        id: "America/Indiana/Vevay"
      },
      {
        value: "America/Indiana/Vincennes",
        name: "Βανσέν, Ιντιάνα",
        id: "America/Indiana/Vincennes"
      },
      {
        value: "America/Indiana/Winamac",
        name: "Γουίναμακ, Ιντιάνα",
        id: "America/Indiana/Winamac"
      },
      {
        value: "America/Indianapolis",
        name: "Ιντιανάπολις",
        id: "America/Indianapolis"
      },
      { value: "America/Inuvik", name: "Ινούβικ", id: "America/Inuvik" },
      { value: "America/Iqaluit", name: "Ικαλούιτ", id: "America/Iqaluit" },
      { value: "America/Jamaica", name: "Τζαμάικα", id: "America/Jamaica" },
      { value: "America/Jujuy", name: "Χουχούι", id: "America/Jujuy" },
      { value: "America/Juneau", name: "Τζούνο", id: "America/Juneau" },
      {
        value: "America/Kentucky/Monticello",
        name: "Μοντιτσέλο, Κεντάκι",
        id: "America/Kentucky/Monticello"
      },
      {
        value: "America/Kralendijk",
        name: "Κράλεντικ",
        id: "America/Kralendijk"
      },
      { value: "America/La_Paz", name: "Λα Παζ", id: "America/La_Paz" },
      { value: "America/Lima", name: "Λίμα", id: "America/Lima" },
      {
        value: "America/Los_Angeles",
        name: "Λος Άντζελες",
        id: "America/Los_Angeles"
      },
      {
        value: "America/Louisville",
        name: "Λούιβιλ",
        id: "America/Louisville"
      },
      {
        value: "America/Lower_Princes",
        name: "Lower Prince’s Quarter",
        id: "America/Lower_Princes"
      },
      { value: "America/Maceio", name: "Μασεϊό", id: "America/Maceio" },
      { value: "America/Managua", name: "Μανάγκουα", id: "America/Managua" },
      { value: "America/Manaus", name: "Μανάους", id: "America/Manaus" },
      { value: "America/Marigot", name: "Μαριγκό", id: "America/Marigot" },
      {
        value: "America/Martinique",
        name: "Μαρτινίκα",
        id: "America/Martinique"
      },
      {
        value: "America/Matamoros",
        name: "Ματαμόρος",
        id: "America/Matamoros"
      },
      { value: "America/Mazatlan", name: "Μαζατλάν", id: "America/Mazatlan" },
      { value: "America/Mendoza", name: "Μεντόζα", id: "America/Mendoza" },
      { value: "America/Menominee", name: "Μενομίνε", id: "America/Menominee" },
      { value: "America/Merida", name: "Μέριδα", id: "America/Merida" },
      {
        value: "America/Metlakatla",
        name: "Μετλακάτλα",
        id: "America/Metlakatla"
      },
      {
        value: "America/Mexico_City",
        name: "Πόλη του Μεξικού",
        id: "America/Mexico_City"
      },
      { value: "America/Miquelon", name: "Μικελόν", id: "America/Miquelon" },
      { value: "America/Moncton", name: "Μόνκτον", id: "America/Moncton" },
      { value: "America/Monterrey", name: "Μοντερέι", id: "America/Monterrey" },
      {
        value: "America/Montevideo",
        name: "Μοντεβιδέο",
        id: "America/Montevideo"
      },
      {
        value: "America/Montserrat",
        name: "Μονσεράτ",
        id: "America/Montserrat"
      },
      { value: "America/Nassau", name: "Νασάου", id: "America/Nassau" },
      { value: "America/New_York", name: "Νέα Υόρκη", id: "America/New_York" },
      { value: "America/Nipigon", name: "Νιπιγκόν", id: "America/Nipigon" },
      { value: "America/Nome", name: "Νόμε", id: "America/Nome" },
      { value: "America/Noronha", name: "Νορόνια", id: "America/Noronha" },
      {
        value: "America/North_Dakota/Beulah",
        name: "Μπέουλα, Βόρεια Ντακότα",
        id: "America/North_Dakota/Beulah"
      },
      {
        value: "America/North_Dakota/Center",
        name: "Σέντερ, Βόρεια Ντακότα",
        id: "America/North_Dakota/Center"
      },
      {
        value: "America/North_Dakota/New_Salem",
        name: "Νιου Σέιλεμ, Βόρεια Ντακότα",
        id: "America/North_Dakota/New_Salem"
      },
      { value: "America/Ojinaga", name: "Οχινάγκα", id: "America/Ojinaga" },
      { value: "America/Panama", name: "Παναμάς", id: "America/Panama" },
      {
        value: "America/Pangnirtung",
        name: "Πανγκνίρτουνγκ",
        id: "America/Pangnirtung"
      },
      {
        value: "America/Paramaribo",
        name: "Παραμαρίμπο",
        id: "America/Paramaribo"
      },
      { value: "America/Phoenix", name: "Φοίνιξ", id: "America/Phoenix" },
      {
        value: "America/Port-au-Prince",
        name: "Πορτ-ο-Πρενς",
        id: "America/Port-au-Prince"
      },
      {
        value: "America/Port_of_Spain",
        name: "Πορτ οφ Σπέιν",
        id: "America/Port_of_Spain"
      },
      {
        value: "America/Porto_Velho",
        name: "Πόρτο Βέλιο",
        id: "America/Porto_Velho"
      },
      {
        value: "America/Puerto_Rico",
        name: "Πουέρτο Ρίκο",
        id: "America/Puerto_Rico"
      },
      {
        value: "America/Punta_Arenas",
        name: "Πούντα Αρένας",
        id: "America/Punta_Arenas"
      },
      {
        value: "America/Rainy_River",
        name: "Ρέινι Ρίβερ",
        id: "America/Rainy_River"
      },
      {
        value: "America/Rankin_Inlet",
        name: "Ράνκιν Ίνλετ",
        id: "America/Rankin_Inlet"
      },
      { value: "America/Recife", name: "Ρεσίφε", id: "America/Recife" },
      { value: "America/Regina", name: "Ρετζίνα", id: "America/Regina" },
      { value: "America/Resolute", name: "Ρέζολουτ", id: "America/Resolute" },
      {
        value: "America/Rio_Branco",
        name: "Ρίο Μπράνκο",
        id: "America/Rio_Branco"
      },
      {
        value: "America/Santa_Isabel",
        name: "Σάντα Ιζαμπέλ",
        id: "America/Santa_Isabel"
      },
      { value: "America/Santarem", name: "Σανταρέμ", id: "America/Santarem" },
      { value: "America/Santiago", name: "Σαντιάγκο", id: "America/Santiago" },
      {
        value: "America/Santo_Domingo",
        name: "Άγιος Δομίνικος",
        id: "America/Santo_Domingo"
      },
      {
        value: "America/Sao_Paulo",
        name: "Σάο Πάολο",
        id: "America/Sao_Paulo"
      },
      {
        value: "America/Scoresbysund",
        name: "Σκορεσμπίσουντ",
        id: "America/Scoresbysund"
      },
      { value: "America/Sitka", name: "Σίτκα", id: "America/Sitka" },
      {
        value: "America/St_Barthelemy",
        name: "Άγιος Βαρθολομαίος",
        id: "America/St_Barthelemy"
      },
      { value: "America/St_Johns", name: "Σεν Τζονς", id: "America/St_Johns" },
      { value: "America/St_Kitts", name: "Σεν Κιτς", id: "America/St_Kitts" },
      {
        value: "America/St_Lucia",
        name: "Αγία Λουκία",
        id: "America/St_Lucia"
      },
      {
        value: "America/St_Thomas",
        name: "Άγιος Θωμάς",
        id: "America/St_Thomas"
      },
      {
        value: "America/St_Vincent",
        name: "Άγιος Βικέντιος",
        id: "America/St_Vincent"
      },
      {
        value: "America/Swift_Current",
        name: "Σουίφτ Κάρεντ",
        id: "America/Swift_Current"
      },
      {
        value: "America/Tegucigalpa",
        name: "Τεγκουσιγκάλπα",
        id: "America/Tegucigalpa"
      },
      { value: "America/Thule", name: "Θούλη", id: "America/Thule" },
      {
        value: "America/Thunder_Bay",
        name: "Θάντερ Μπέι",
        id: "America/Thunder_Bay"
      },
      { value: "America/Tijuana", name: "Τιχουάνα", id: "America/Tijuana" },
      { value: "America/Toronto", name: "Τορόντο", id: "America/Toronto" },
      { value: "America/Tortola", name: "Τορτόλα", id: "America/Tortola" },
      {
        value: "America/Vancouver",
        name: "Βανκούβερ",
        id: "America/Vancouver"
      },
      {
        value: "America/Whitehorse",
        name: "Γουάιτχορς",
        id: "America/Whitehorse"
      },
      { value: "America/Winnipeg", name: "Γουίνιπεγκ", id: "America/Winnipeg" },
      { value: "America/Yakutat", name: "Γιακούτατ", id: "America/Yakutat" },
      {
        value: "America/Yellowknife",
        name: "Γέλοουναϊφ",
        id: "America/Yellowknife"
      },
      { value: "Antarctica/Casey", name: "Κάσεϊ", id: "Antarctica/Casey" },
      { value: "Antarctica/Davis", name: "Ντέιβις", id: "Antarctica/Davis" },
      {
        value: "Antarctica/DumontDUrville",
        name: "Ντιμόν ντ’ Ουρβίλ",
        id: "Antarctica/DumontDUrville"
      },
      {
        value: "Antarctica/Macquarie",
        name: "Μακουάρι",
        id: "Antarctica/Macquarie"
      },
      { value: "Antarctica/Mawson", name: "Μόσον", id: "Antarctica/Mawson" },
      {
        value: "Antarctica/McMurdo",
        name: "Μακμέρντο",
        id: "Antarctica/McMurdo"
      },
      { value: "Antarctica/Palmer", name: "Πάλμερ", id: "Antarctica/Palmer" },
      { value: "Antarctica/Rothera", name: "Ρόθερα", id: "Antarctica/Rothera" },
      { value: "Antarctica/Syowa", name: "Σίοβα", id: "Antarctica/Syowa" },
      { value: "Antarctica/Troll", name: "Τρολ", id: "Antarctica/Troll" },
      { value: "Antarctica/Vostok", name: "Βόστοκ", id: "Antarctica/Vostok" },
      {
        value: "Arctic/Longyearbyen",
        name: "Λόνγκιεαρμπιεν",
        id: "Arctic/Longyearbyen"
      },
      { value: "Asia/Aden", name: "Άντεν", id: "Asia/Aden" },
      { value: "Asia/Almaty", name: "Αλμάτι", id: "Asia/Almaty" },
      { value: "Asia/Amman", name: "Αμμάν", id: "Asia/Amman" },
      { value: "Asia/Anadyr", name: "Αναντίρ", id: "Asia/Anadyr" },
      { value: "Asia/Aqtau", name: "Ακτάου", id: "Asia/Aqtau" },
      { value: "Asia/Aqtobe", name: "Ακτόμπε", id: "Asia/Aqtobe" },
      { value: "Asia/Ashgabat", name: "Ασχαμπάτ", id: "Asia/Ashgabat" },
      { value: "Asia/Atyrau", name: "Aτιράου", id: "Asia/Atyrau" },
      { value: "Asia/Baghdad", name: "Βαγδάτη", id: "Asia/Baghdad" },
      { value: "Asia/Bahrain", name: "Μπαχρέιν", id: "Asia/Bahrain" },
      { value: "Asia/Baku", name: "Μπακού", id: "Asia/Baku" },
      { value: "Asia/Bangkok", name: "Μπανγκόκ", id: "Asia/Bangkok" },
      { value: "Asia/Barnaul", name: "Μπαρναούλ", id: "Asia/Barnaul" },
      { value: "Asia/Beirut", name: "Βυρητός", id: "Asia/Beirut" },
      { value: "Asia/Bishkek", name: "Μπισκέκ", id: "Asia/Bishkek" },
      { value: "Asia/Brunei", name: "Μπρουνέι", id: "Asia/Brunei" },
      { value: "Asia/Calcutta", name: "Καλκούτα", id: "Asia/Calcutta" },
      { value: "Asia/Chita", name: "Τσιτά", id: "Asia/Chita" },
      { value: "Asia/Choibalsan", name: "Τσοϊμπαλσάν", id: "Asia/Choibalsan" },
      { value: "Asia/Colombo", name: "Κολόμπο", id: "Asia/Colombo" },
      { value: "Asia/Damascus", name: "Δαμασκός", id: "Asia/Damascus" },
      { value: "Asia/Dhaka", name: "Ντάκα", id: "Asia/Dhaka" },
      { value: "Asia/Dili", name: "Ντίλι", id: "Asia/Dili" },
      { value: "Asia/Dubai", name: "Ντουμπάι", id: "Asia/Dubai" },
      { value: "Asia/Dushanbe", name: "Ντουσάνμπε", id: "Asia/Dushanbe" },
      { value: "Asia/Famagusta", name: "Αμμόχωστος", id: "Asia/Famagusta" },
      { value: "Asia/Gaza", name: "Γάζα", id: "Asia/Gaza" },
      { value: "Asia/Hebron", name: "Χεβρώνα", id: "Asia/Hebron" },
      { value: "Asia/Hong_Kong", name: "Χονγκ Κονγκ", id: "Asia/Hong_Kong" },
      { value: "Asia/Hovd", name: "Χοβντ", id: "Asia/Hovd" },
      { value: "Asia/Irkutsk", name: "Ιρκούτσκ", id: "Asia/Irkutsk" },
      { value: "Asia/Jakarta", name: "Τζακάρτα", id: "Asia/Jakarta" },
      { value: "Asia/Jayapura", name: "Τζαγιαπούρα", id: "Asia/Jayapura" },
      { value: "Asia/Jerusalem", name: "Ιερουσαλήμ", id: "Asia/Jerusalem" },
      { value: "Asia/Kabul", name: "Καμπούλ", id: "Asia/Kabul" },
      { value: "Asia/Kamchatka", name: "Καμτσάτκα", id: "Asia/Kamchatka" },
      { value: "Asia/Karachi", name: "Καράτσι", id: "Asia/Karachi" },
      { value: "Asia/Katmandu", name: "Κατμαντού", id: "Asia/Katmandu" },
      { value: "Asia/Khandyga", name: "Χαντίγκα", id: "Asia/Khandyga" },
      {
        value: "Asia/Krasnoyarsk",
        name: "Κρασνογιάρσκ",
        id: "Asia/Krasnoyarsk"
      },
      {
        value: "Asia/Kuala_Lumpur",
        name: "Κουάλα Λουμπούρ",
        id: "Asia/Kuala_Lumpur"
      },
      { value: "Asia/Kuching", name: "Κουτσίνγκ", id: "Asia/Kuching" },
      { value: "Asia/Kuwait", name: "Κουβέιτ", id: "Asia/Kuwait" },
      { value: "Asia/Macau", name: "Μακάο", id: "Asia/Macau" },
      { value: "Asia/Magadan", name: "Μαγκαντάν", id: "Asia/Magadan" },
      { value: "Asia/Makassar", name: "Μακασάρ", id: "Asia/Makassar" },
      { value: "Asia/Manila", name: "Μανίλα", id: "Asia/Manila" },
      { value: "Asia/Muscat", name: "Μασκάτ", id: "Asia/Muscat" },
      { value: "Asia/Nicosia", name: "Λευκωσία", id: "Asia/Nicosia" },
      {
        value: "Asia/Novokuznetsk",
        name: "Νοβοκουζνέτσκ",
        id: "Asia/Novokuznetsk"
      },
      {
        value: "Asia/Novosibirsk",
        name: "Νοβοσιμπίρσκ",
        id: "Asia/Novosibirsk"
      },
      { value: "Asia/Omsk", name: "Ομσκ", id: "Asia/Omsk" },
      { value: "Asia/Oral", name: "Οράλ", id: "Asia/Oral" },
      { value: "Asia/Phnom_Penh", name: "Πνομ Πενχ", id: "Asia/Phnom_Penh" },
      { value: "Asia/Pontianak", name: "Πόντιανακ", id: "Asia/Pontianak" },
      { value: "Asia/Pyongyang", name: "Πιονγκγιάνγκ", id: "Asia/Pyongyang" },
      { value: "Asia/Qatar", name: "Κατάρ", id: "Asia/Qatar" },
      { value: "Asia/Qyzylorda", name: "Κιζιλορντά", id: "Asia/Qyzylorda" },
      { value: "Asia/Rangoon", name: "Ρανγκούν", id: "Asia/Rangoon" },
      { value: "Asia/Riyadh", name: "Ριάντ", id: "Asia/Riyadh" },
      { value: "Asia/Saigon", name: "Πόλη Χο Τσι Μινχ", id: "Asia/Saigon" },
      { value: "Asia/Sakhalin", name: "Σαχαλίνη", id: "Asia/Sakhalin" },
      { value: "Asia/Samarkand", name: "Σαμαρκάνδη", id: "Asia/Samarkand" },
      { value: "Asia/Seoul", name: "Σεούλ", id: "Asia/Seoul" },
      { value: "Asia/Shanghai", name: "Σανγκάη", id: "Asia/Shanghai" },
      { value: "Asia/Singapore", name: "Σιγκαπούρη", id: "Asia/Singapore" },
      {
        value: "Asia/Srednekolymsk",
        name: "Σρεντνεκολίμσκ",
        id: "Asia/Srednekolymsk"
      },
      { value: "Asia/Taipei", name: "Ταϊπέι", id: "Asia/Taipei" },
      { value: "Asia/Tashkent", name: "Τασκένδη", id: "Asia/Tashkent" },
      { value: "Asia/Tbilisi", name: "Τιφλίδα", id: "Asia/Tbilisi" },
      { value: "Asia/Tehran", name: "Τεχεράνη", id: "Asia/Tehran" },
      { value: "Asia/Thimphu", name: "Θίμφου", id: "Asia/Thimphu" },
      { value: "Asia/Tokyo", name: "Τόκιο", id: "Asia/Tokyo" },
      { value: "Asia/Tomsk", name: "Τομσκ", id: "Asia/Tomsk" },
      {
        value: "Asia/Ulaanbaatar",
        name: "Ουλάν Μπατόρ",
        id: "Asia/Ulaanbaatar"
      },
      { value: "Asia/Urumqi", name: "Ουρούμτσι", id: "Asia/Urumqi" },
      { value: "Asia/Ust-Nera", name: "Ουστ-Νερά", id: "Asia/Ust-Nera" },
      { value: "Asia/Vientiane", name: "Βιεντιάν", id: "Asia/Vientiane" },
      {
        value: "Asia/Vladivostok",
        name: "Βλαδιβοστόκ",
        id: "Asia/Vladivostok"
      },
      { value: "Asia/Yakutsk", name: "Γιακούτσκ", id: "Asia/Yakutsk" },
      {
        value: "Asia/Yekaterinburg",
        name: "Αικατερινούπολη",
        id: "Asia/Yekaterinburg"
      },
      { value: "Asia/Yerevan", name: "Ερεβάν", id: "Asia/Yerevan" },
      { value: "Atlantic/Azores", name: "Αζόρες", id: "Atlantic/Azores" },
      { value: "Atlantic/Bermuda", name: "Βερμούδες", id: "Atlantic/Bermuda" },
      { value: "Atlantic/Canary", name: "Κανάρια", id: "Atlantic/Canary" },
      {
        value: "Atlantic/Cape_Verde",
        name: "Πράσινο Ακρωτήριο",
        id: "Atlantic/Cape_Verde"
      },
      { value: "Atlantic/Faeroe", name: "Φερόες", id: "Atlantic/Faeroe" },
      { value: "Atlantic/Madeira", name: "Μαδέρα", id: "Atlantic/Madeira" },
      {
        value: "Atlantic/Reykjavik",
        name: "Ρέυκιαβικ",
        id: "Atlantic/Reykjavik"
      },
      {
        value: "Atlantic/South_Georgia",
        name: "Νότια Γεωργία",
        id: "Atlantic/South_Georgia"
      },
      {
        value: "Atlantic/St_Helena",
        name: "Αγ. Ελένη",
        id: "Atlantic/St_Helena"
      },
      { value: "Atlantic/Stanley", name: "Στάνλεϊ", id: "Atlantic/Stanley" },
      {
        value: "Australia/Adelaide",
        name: "Αδελαΐδα",
        id: "Australia/Adelaide"
      },
      {
        value: "Australia/Brisbane",
        name: "Μπρισμπέιν",
        id: "Australia/Brisbane"
      },
      {
        value: "Australia/Broken_Hill",
        name: "Μπρόκεν Χιλ",
        id: "Australia/Broken_Hill"
      },
      { value: "Australia/Currie", name: "Κάρι", id: "Australia/Currie" },
      { value: "Australia/Darwin", name: "Ντάργουιν", id: "Australia/Darwin" },
      { value: "Australia/Eucla", name: "Γιούκλα", id: "Australia/Eucla" },
      { value: "Australia/Hobart", name: "Χόμπαρτ", id: "Australia/Hobart" },
      {
        value: "Australia/Lindeman",
        name: "Λίντεμαν",
        id: "Australia/Lindeman"
      },
      {
        value: "Australia/Lord_Howe",
        name: "Λορντ Χάου",
        id: "Australia/Lord_Howe"
      },
      {
        value: "Australia/Melbourne",
        name: "Μελβούρνη",
        id: "Australia/Melbourne"
      },
      { value: "Australia/Perth", name: "Περθ", id: "Australia/Perth" },
      { value: "Australia/Sydney", name: "Σίδνεϊ", id: "Australia/Sydney" },
      { value: "Etc/UTC", name: "Συντονισμένη Παγκόσμια Ώρα", id: "Etc/UTC" },
      { value: "Europe/Amsterdam", name: "Άμστερνταμ", id: "Europe/Amsterdam" },
      { value: "Europe/Andorra", name: "Ανδόρα", id: "Europe/Andorra" },
      { value: "Europe/Astrakhan", name: "Αστραχάν", id: "Europe/Astrakhan" },
      { value: "Europe/Athens", name: "Αθήνα", id: "Europe/Athens" },
      { value: "Europe/Belgrade", name: "Βελιγράδι", id: "Europe/Belgrade" },
      { value: "Europe/Berlin", name: "Βερολίνο", id: "Europe/Berlin" },
      {
        value: "Europe/Bratislava",
        name: "Μπρατισλάβα",
        id: "Europe/Bratislava"
      },
      { value: "Europe/Brussels", name: "Βρυξέλλες", id: "Europe/Brussels" },
      {
        value: "Europe/Bucharest",
        name: "Βουκουρέστι",
        id: "Europe/Bucharest"
      },
      { value: "Europe/Budapest", name: "Βουδαπέστη", id: "Europe/Budapest" },
      { value: "Europe/Busingen", name: "Μπίσινγκεν", id: "Europe/Busingen" },
      { value: "Europe/Chisinau", name: "Κισινάου", id: "Europe/Chisinau" },
      {
        value: "Europe/Copenhagen",
        name: "Κοπεγχάγη",
        id: "Europe/Copenhagen"
      },
      {
        value: "Europe/Dublin",
        name: "Χειμερινή ώρα ΙρλανδίαςΔουβλίνο",
        id: "Europe/Dublin"
      },
      { value: "Europe/Gibraltar", name: "Γιβραλτάρ", id: "Europe/Gibraltar" },
      { value: "Europe/Guernsey", name: "Γκέρνζι", id: "Europe/Guernsey" },
      { value: "Europe/Helsinki", name: "Ελσίνκι", id: "Europe/Helsinki" },
      {
        value: "Europe/Isle_of_Man",
        name: "Νήσος του Μαν",
        id: "Europe/Isle_of_Man"
      },
      {
        value: "Europe/Istanbul",
        name: "Κωνσταντινούπολη",
        id: "Europe/Istanbul"
      },
      { value: "Europe/Jersey", name: "Τζέρσεϊ", id: "Europe/Jersey" },
      {
        value: "Europe/Kaliningrad",
        name: "Καλίνινγκραντ",
        id: "Europe/Kaliningrad"
      },
      { value: "Europe/Kiev", name: "Κίεβο", id: "Europe/Kiev" },
      { value: "Europe/Kirov", name: "Κίροφ", id: "Europe/Kirov" },
      { value: "Europe/Lisbon", name: "Λισαβόνα", id: "Europe/Lisbon" },
      {
        value: "Europe/Ljubljana",
        name: "Λιουμπλιάνα",
        id: "Europe/Ljubljana"
      },
      {
        value: "Europe/London",
        name: "Θερινή ώρα ΒρετανίαςΛονδίνο",
        id: "Europe/London"
      },
      {
        value: "Europe/Luxembourg",
        name: "Λουξεμβούργο",
        id: "Europe/Luxembourg"
      },
      { value: "Europe/Madrid", name: "Μαδρίτη", id: "Europe/Madrid" },
      { value: "Europe/Malta", name: "Μάλτα", id: "Europe/Malta" },
      { value: "Europe/Mariehamn", name: "Μάριεχαμν", id: "Europe/Mariehamn" },
      { value: "Europe/Minsk", name: "Μινσκ", id: "Europe/Minsk" },
      { value: "Europe/Monaco", name: "Μονακό", id: "Europe/Monaco" },
      { value: "Europe/Moscow", name: "Μόσχα", id: "Europe/Moscow" },
      { value: "Europe/Oslo", name: "Όσλο", id: "Europe/Oslo" },
      { value: "Europe/Paris", name: "Παρίσι", id: "Europe/Paris" },
      {
        value: "Europe/Podgorica",
        name: "Ποντγκόριτσα",
        id: "Europe/Podgorica"
      },
      { value: "Europe/Prague", name: "Πράγα", id: "Europe/Prague" },
      { value: "Europe/Riga", name: "Ρίγα", id: "Europe/Riga" },
      { value: "Europe/Rome", name: "Ρώμη", id: "Europe/Rome" },
      { value: "Europe/Samara", name: "Σαμάρα", id: "Europe/Samara" },
      {
        value: "Europe/San_Marino",
        name: "Άγιος Μαρίνος",
        id: "Europe/San_Marino"
      },
      { value: "Europe/Sarajevo", name: "Σαράγεβο", id: "Europe/Sarajevo" },
      { value: "Europe/Saratov", name: "Σαράτοφ", id: "Europe/Saratov" },
      {
        value: "Europe/Simferopol",
        name: "Συμφερόπολη",
        id: "Europe/Simferopol"
      },
      { value: "Europe/Skopje", name: "Σκόπια", id: "Europe/Skopje" },
      { value: "Europe/Sofia", name: "Σόφια", id: "Europe/Sofia" },
      { value: "Europe/Stockholm", name: "Στοκχόλμη", id: "Europe/Stockholm" },
      { value: "Europe/Tallinn", name: "Ταλίν", id: "Europe/Tallinn" },
      { value: "Europe/Tirane", name: "Τίρανα", id: "Europe/Tirane" },
      { value: "Europe/Ulyanovsk", name: "Ουλιάνοφσκ", id: "Europe/Ulyanovsk" },
      { value: "Europe/Uzhgorod", name: "Ούζχοροντ", id: "Europe/Uzhgorod" },
      { value: "Europe/Vaduz", name: "Βαντούζ", id: "Europe/Vaduz" },
      { value: "Europe/Vatican", name: "Βατικανό", id: "Europe/Vatican" },
      { value: "Europe/Vienna", name: "Βιέννη", id: "Europe/Vienna" },
      { value: "Europe/Vilnius", name: "Βίλνιους", id: "Europe/Vilnius" },
      {
        value: "Europe/Volgograd",
        name: "Βόλγκοκραντ",
        id: "Europe/Volgograd"
      },
      { value: "Europe/Warsaw", name: "Βαρσοβία", id: "Europe/Warsaw" },
      { value: "Europe/Zagreb", name: "Ζάγκρεμπ", id: "Europe/Zagreb" },
      {
        value: "Europe/Zaporozhye",
        name: "Ζαπορόζιε",
        id: "Europe/Zaporozhye"
      },
      { value: "Europe/Zurich", name: "Ζυρίχη", id: "Europe/Zurich" },
      {
        value: "Indian/Antananarivo",
        name: "Ανταναναρίβο",
        id: "Indian/Antananarivo"
      },
      { value: "Indian/Chagos", name: "Τσάγκος", id: "Indian/Chagos" },
      {
        value: "Indian/Christmas",
        name: "Νήσος Χριστουγέννων",
        id: "Indian/Christmas"
      },
      { value: "Indian/Cocos", name: "Κόκος", id: "Indian/Cocos" },
      { value: "Indian/Comoro", name: "Κομόρο", id: "Indian/Comoro" },
      { value: "Indian/Kerguelen", name: "Κεργκελέν", id: "Indian/Kerguelen" },
      { value: "Indian/Mahe", name: "Μάχε", id: "Indian/Mahe" },
      { value: "Indian/Maldives", name: "Μαλδίβες", id: "Indian/Maldives" },
      { value: "Indian/Mauritius", name: "Μαυρίκιος", id: "Indian/Mauritius" },
      { value: "Indian/Mayotte", name: "Μαγιότ", id: "Indian/Mayotte" },
      { value: "Indian/Reunion", name: "Ρεϊνιόν", id: "Indian/Reunion" },
      { value: "Pacific/Apia", name: "Απία", id: "Pacific/Apia" },
      { value: "Pacific/Auckland", name: "Όκλαντ", id: "Pacific/Auckland" },
      {
        value: "Pacific/Bougainville",
        name: "Μπουγκενβίλ",
        id: "Pacific/Bougainville"
      },
      { value: "Pacific/Chatham", name: "Τσάταμ", id: "Pacific/Chatham" },
      { value: "Pacific/Easter", name: "Νήσος Πάσχα", id: "Pacific/Easter" },
      { value: "Pacific/Efate", name: "Εφάτε", id: "Pacific/Efate" },
      {
        value: "Pacific/Enderbury",
        name: "Έντερμπερι",
        id: "Pacific/Enderbury"
      },
      { value: "Pacific/Fakaofo", name: "Φακαόφο", id: "Pacific/Fakaofo" },
      { value: "Pacific/Fiji", name: "Φίτζι", id: "Pacific/Fiji" },
      { value: "Pacific/Funafuti", name: "Φουναφούτι", id: "Pacific/Funafuti" },
      {
        value: "Pacific/Galapagos",
        name: "Γκαλάπαγκος",
        id: "Pacific/Galapagos"
      },
      { value: "Pacific/Gambier", name: "Γκάμπιερ", id: "Pacific/Gambier" },
      {
        value: "Pacific/Guadalcanal",
        name: "Γκουανταλκανάλ",
        id: "Pacific/Guadalcanal"
      },
      { value: "Pacific/Guam", name: "Γκουάμ", id: "Pacific/Guam" },
      { value: "Pacific/Honolulu", name: "Χονολουλού", id: "Pacific/Honolulu" },
      { value: "Pacific/Johnston", name: "Τζόνστον", id: "Pacific/Johnston" },
      {
        value: "Pacific/Kiritimati",
        name: "Κιριτιμάτι",
        id: "Pacific/Kiritimati"
      },
      { value: "Pacific/Kosrae", name: "Κόσραϊ", id: "Pacific/Kosrae" },
      {
        value: "Pacific/Kwajalein",
        name: "Κουατζαλέιν",
        id: "Pacific/Kwajalein"
      },
      { value: "Pacific/Majuro", name: "Ματζούρο", id: "Pacific/Majuro" },
      { value: "Pacific/Marquesas", name: "Μαρκέζας", id: "Pacific/Marquesas" },
      { value: "Pacific/Midway", name: "Μίντγουεϊ", id: "Pacific/Midway" },
      { value: "Pacific/Nauru", name: "Ναούρου", id: "Pacific/Nauru" },
      { value: "Pacific/Niue", name: "Νιούε", id: "Pacific/Niue" },
      { value: "Pacific/Norfolk", name: "Νόρφολκ", id: "Pacific/Norfolk" },
      { value: "Pacific/Noumea", name: "Νουμέα", id: "Pacific/Noumea" },
      {
        value: "Pacific/Pago_Pago",
        name: "Πάγκο Πάγκο",
        id: "Pacific/Pago_Pago"
      },
      { value: "Pacific/Palau", name: "Παλάου", id: "Pacific/Palau" },
      { value: "Pacific/Pitcairn", name: "Πίτκερν", id: "Pacific/Pitcairn" },
      { value: "Pacific/Ponape", name: "Πονάπε", id: "Pacific/Ponape" },
      {
        value: "Pacific/Port_Moresby",
        name: "Πορτ Μόρεσμπι",
        id: "Pacific/Port_Moresby"
      },
      {
        value: "Pacific/Rarotonga",
        name: "Ραροτόνγκα",
        id: "Pacific/Rarotonga"
      },
      { value: "Pacific/Saipan", name: "Σαϊπάν", id: "Pacific/Saipan" },
      { value: "Pacific/Tahiti", name: "Ταϊτή", id: "Pacific/Tahiti" },
      { value: "Pacific/Tarawa", name: "Ταράουα", id: "Pacific/Tarawa" },
      {
        value: "Pacific/Tongatapu",
        name: "Τονγκατάπου",
        id: "Pacific/Tongatapu"
      },
      { value: "Pacific/Truk", name: "Τσουκ", id: "Pacific/Truk" },
      { value: "Pacific/Wake", name: "Γουέικ", id: "Pacific/Wake" },
      { value: "Pacific/Wallis", name: "Γουάλις", id: "Pacific/Wallis" }
    ];
  };

  return moment;
});
