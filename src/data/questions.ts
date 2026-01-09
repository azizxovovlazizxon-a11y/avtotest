import type { Question } from '../types'

// Real questions extracted from Avto Test PRO database
// Total: 1110 questions in 111 bilets

export const questions: Question[] = [
  {
    "id": 1,
    "biletId": 1,
    "text": "Qaysi avtomobil uchun bu belgilarning ta’sir oralig’ida to’xtashga ruxsat etiladi?",
    "options": [
      "Qizilga",
      "Ikkala avtomobilga",
      "Hech qaysi biriga",
      "\"Nogiron\" taniqlik belgisi bo’lgan sariq avtomobilga"
    ],
    "correctAnswer": 3,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i1_1.webp",
    "explanation": "YHQ 1-ilovasi 3.27: Ushbu Qoidalarning 176-bandiga binoan \"Nogiron\" tanish belgisi bilan belgilangan avtomobillar va kajavali mototsikllarni boshqarayotgan nogiron haydovchilar 3.2, 3.3 va 3.28 belgilari talablaridan chetga chiqishlari mumkin. 7.18 belgi bo’lganda 3.27 belgisining ta’sir doirasida to’xtashga ruxsat etiladi."
  },
  {
    "id": 2,
    "biletId": 1,
    "text": "Qaysi yo’naltirgichlar bo’ylab harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat \"А\" yo’nalish bo’ylab",
      "Faqat \"Б\" yo’nalish bo’ylab",
      "Faqat \"В\" yo’nalish bo’ylab",
      "Faqat \"А\" va \"Г\" yo’nalishlari bo’ylab",
      "Faqat \"Г\" yo’nalish bo’ylab"
    ],
    "correctAnswer": 3,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i1_2.webp",
    "explanation": "YHQ 1-ilovasi 4.1.1 \"Harakatlanish to’g’riga\". Yo'lning qismi boshlanishida o'rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o'ng tomonda joylashgan hovlilarga va yo'lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 3,
    "biletId": 1,
    "text": "Tibbiyot qutichasi va o’t o’chirgichi bo’lmagan qanday transport vositalaridan foydalanish taqiqlanadi?",
    "options": [
      "Faqat M1 toifali transport vositasi",
      "Faqat M2; M3; N1 toifali transport vositasi",
      "Faqat N2; N3 toifali transport vositasi",
      "Barcha yuqorida ko’rsatilgan toifalar"
    ],
    "correctAnswer": 3,
    "category": "Transport vositasi konstruksiyasining boshqa qismlari",
    "explanation": "YHQ 3-ilovasi 7.10-bandiga asosan: Transport vositalari quyidagilar bilan jihozlanmagan bo’lsa ulardan foydalanish taqiqlanadi:\nM2, M3 toifadagi — favqulodda holatlarda oynani sindirish uchun foydalaniladigan bolg’acha, tibbiyot qutichasi, 2 ta o’t o’chirgich (bittasi haydovchining kabinasida, ikkinchisi — yo’lovchilar salonida), majburiy to’xtaganini bildiruvchi belgi (yoki miltillovchi qizil chiroq) va nur qaytargichli kamzul (jilet);\nM1, N1, N2, N3 toifadagi, mikroavtobus va g’ildirakli traktorlarda tibbiyot qutichasi, o’t o’chirgich, majburiy to’xtaganligini bildiruvchi belgi (yoki miltillovchi qizil chiroq) va nur qaytargichli kamzul (jilet);\nM3, N2, N3 toifadagi — o’zi yurib ketishidan saqlovchi, g’ildirak diametriga muvofiq (kamida ikkita) tirgak;\nO toifadagi, traktorlar, aravalar va boshqa o’ziyurar mashinalarda — tashqi nur qaytargichlar;\nkajavali mototsikllarda — tibbiyot qutichasi,\nmajburiy to’xtaganligini bildiruvchi belgi."
  },
  {
    "id": 4,
    "biletId": 1,
    "text": "Chorrahadan birinchi bo’lib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Sariq avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 3,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i1_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 5,
    "biletId": 1,
    "text": "Harakatlanish taqiqlangan:",
    "options": [
      "Qizil va oq avtomobillarga",
      "Ko’k, yashil va oq avtomobillarga",
      "Oq, ko’k va sariq avtomobillarga"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i1_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi:\nQo’llari yon tomonga uzatilganda yoki tushirilganda:\nchap va o’ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o’tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi.\no’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi.\nQo’lini yuqoriga ko’targanda:\nushbu Qoidalarning 42-bandida ko’rsatilganidan boshqa hollarda transport vositalari va piyodalarning barcha yo’nalishlarda harakatlanishi taqiqlanadi;\ntartibga soluvchi haydovchi va piyodalarga tushunarli bo’lgan boshqa ishoralarni ham berishi mumkin. Ishoralar yaxshi ko’rinishi uchun tartibga soluvchi jezl yoki yorug’lik qaytaradigan qizil rangli moslamalarni qo’llashi mumkin. Shuningdek, tartibga soluvchi o’z faoliyatini maxsus moslama (tumba) ustida turib olib borishi mumkin."
  },
  {
    "id": 6,
    "biletId": 1,
    "text": "Qaysi transport vositasining haydovchisi chorrahadan birinchi bo’lib o’tadi?",
    "options": [
      "Avtomobil va avtobus haydovchisi",
      "Tramvay haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Maxsus transport vositalarining imtiyozlari",
    "imageUrl": "/images/questions/i1_6.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning taqiqlovchi qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning ko’rsatkichli yashil ishorasi yo’nalishida harakatlanayotgan haydovchi boshqa yo’nalishlardan harakatlanayotgan transport vositalariga yo’l berishi kerak."
  },
  {
    "id": 7,
    "biletId": 1,
    "text": "Shu joyda to’xtab turishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i1_7.webp",
    "explanation": "YHQ 13-bobi 91-bandiga asosan: qatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 8,
    "biletId": 1,
    "text": "Haydovchi harakatlanishni boshlashdan oldin qanday amallarni bajarishi kerak?",
    "options": [
      "Transport vositasining sozligini va to’la jihozlanganligini tekshirishi",
      "Harakatlanish boshlanishi xavfsiz bo’lishiga va harakatning boshqa ishtirokchilariga xalaqit bermasligiga ishonch hosil qilishi",
      "Tegishli yo’nalishdagi burilishning yorug’lik ko’rsatkichi bilan ishora berishi",
      "Sanab o’tilgan barcha harakatlarni bajarishi"
    ],
    "correctAnswer": 1,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 53-bandiga asosan: Haydovchi harakatlanishni boshlash, manyovr qilish (qayta tizilish, burilish, qayrilib olish, quvib o'tish va aylanib o’tish) va to'xtashdan oldin bajarilayotgan manyovr boshqa yo’l harakati qatnashchilarini harakatlanishiga xavf tug’dirmasligi kerak."
  },
  {
    "id": 9,
    "biletId": 1,
    "text": "Umurtqa pog’onasining ko’krak sohasi shikastlangan jabrlanuvchini transportda qanday tashish kerak?",
    "options": [
      "Qattiq taxtada orqasi bilan yotgan holda",
      "Yumshoq to’shamada orqasi bilan yotgan holda",
      "Qattiq taxtada yoni bilan yotgan holda"
    ],
    "correctAnswer": 0,
    "category": "Yo'l-transport hodisasi sodir bo'lganda haydovchining majburiyatlari",
    "explanation": "Umurtqa pag’onasi shikastlanganda orqa (umurtqa) miyani jarohatlanishidan saqlab qolish uchun umurtqa pag’onalarining bir-biriga nisbatan siljishini oldini olish muhimdir. Umirtqaning minimal qo’zg’alishini ta’minlash uchun jarohatlangan kishini qattiq tekistlikka joylashtirib, uning harakatini imkon darajasida cheklash lozim."
  },
  {
    "id": 10,
    "biletId": 1,
    "text": "Bunday taniqlik belgisi bilan belgilanadigan transport vositasi:",
    "options": [
      "Og’ir vaznli va yirik o’lchamli yuklarni tashuvchi",
      "Uzunligi yuk bilan yoki yuksiz 20 metrdan ortiq bo’lgan transport vositasi",
      "Furgon yukxonasida odamlarni tashuvchi"
    ],
    "correctAnswer": 1,
    "category": "Yuk tashish",
    "imageUrl": "/images/questions/i1_10.webp",
    "explanation": "YHQ 29-bobi 176-bandiga asosan: “Uzun o’lchamli transport vositasi” — yukli va yuksiz uzunligi 20 metrdan oshadigan transport vositasining, ikki yoki undan ko’proq tirkamali avtopoyezdlarning orqasida — kengligi 40 millimetr bo’lgan qizil hoshiyali, o’lchami 1200x200 millimetr bo’lgan, sariq rangli, nur qaytaruvchi to’rtburchak shaklidagi belgi."
  },
  {
    "id": 11,
    "biletId": 2,
    "text": "Yoqilgan zarg’aldoq rangli yalt-yalt etuvchi chiroq-mayoqcha harakatlanish uchun imtiyoz beradimi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 6-bobi 28-bandiga asosan: Zarg’aldoq yoki sariq rangli yalt-yalt etuvchi mayoqchalar transport vositalarida quyidagi hollarda yoqilgan bo’lishi kerak:\nyo'lda qurilish, ta’mirlash yoki tozalash ishlari olib borilayotganda, shuningdek, shikastlangan, nosoz transport vositalarini ortishda, tashishda;\nyo’l harakatida qatnashayotgan, gabarit o’lchamlari ushbu Qoidalarning 164-bandida belgilangandan ortiq bo’lgan, shuningdek, og’ir vazn va katta hajmli hamda xavfli yuklarni tashiyotgan transport vositalarini kuzatib borishda;\nportlovchi, tez alangalanadigan, radioaktiv moddalarni va zaharli darajasi o’ta yuqori bo’lgan moddalarni tashishda;\numumiy foydalanishdagi transport vositasi yo’llarida velosipedchilarning tashkiliy jamlanmasini kuzatib borishda.\nYoqilgan zarg’aldoq va (yoki) sariq rangli mayoqcha harakatlanishda imtiyoz bermaydi va yo’l harakatining boshqa qatnashchilarini faqat xavf haqida ogohlantiradi."
  },
  {
    "id": 12,
    "biletId": 2,
    "text": "Quyidagi belgilar qaysi yo’nalishlarda harakatlanishga ruxsat beradi?",
    "options": [
      "Faqat chapga",
      "Faqat to’g’riga",
      "Faqat o’ngga",
      "To’g’riga, o’ngga va qayrilib olishga"
    ],
    "correctAnswer": 3,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i2_2.webp",
    "explanation": "YHQ 1-ilovasi 3.2. bandi: \"Harakatlanish taqiqlangan\". Barcha transport vositalarining harakatlanishi taqiqlanishini bildiradi. 7.3.1— 7.3.3. \"Ta’sir yo’nalishlari\". Chorraha oldida o'rnatilgan belgining ta’sir yo'nalishini yoki bevosita yo'l yaqinida joylashgan manzillarga harakatlanish yo'nalishini ko’rsatadi."
  },
  {
    "id": 13,
    "biletId": 2,
    "text": "Mazkur chiziq nima haqida ogohlantiradi?",
    "options": [
      "Transport vositalarining majburiy to’xtash joyiga yaqinlashayotganligini",
      "\"To’xtamasdan harakatlanish taqiqlangan\" belgisi bilan birga qo’llanilganda, haydovchini \"To’xtash\" chizig’iga yaqinlashayotganligini",
      "Transport vositasi piyodalarga yo’l berishi kerak bo’lgan joyni ko’rsatadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i2_3.webp",
    "explanation": "YHQ 2-ilovasi: 1.21 (\"STOP\" — To'xtang! yozuvi) — 2.5 belgisi bilan birga qo’llanilganda haydovchini 1.12 chizig’iga yaqinlashayotganligi haqida ogohlantiradi."
  },
  {
    "id": 14,
    "biletId": 2,
    "text": "Avtomagistralda quyidagilar taqiqlanadi:",
    "options": [
      "Qayrilib olish va ajratuvchi mintaqaning texnologik uzilish joylariga kirish",
      "Orqaga harakatlanish",
      "\"To’xtab turish joyi\" yoki \"Dam olish joyi\" belgilari bo’lgan maxsus maydonchalardan tashqari joyda to’xtash",
      "Yuqoridagi barcha holatlar"
    ],
    "correctAnswer": 3,
    "category": "Avtomagistrallarda harakatlanish",
    "explanation": "YHQ 19-bobi 121-bandi: Avtomagistrallarda quyidagilar taqiqlanadi:\npiyodalar, uy hayvonlari, ot-aravalar, velosipedlar, individual harakatlanish vositalari, skuterlar, mopedlar, traktorlar va o’ziyurar uskunalar, texnik tavsifnomasiga yoki holatiga ko’ra tezligi soatiga 40 kilometrdan kam bo’lgan transport vositalarining harakatlanishi;\nyuk avtomobillariga yo’lning chetki chap qatorida harakatlanishi;\n5.15 yoki 6.11 yo’l belgilari bilan belgilangan maxsus to’xtab turish maydonchalaridan boshqa joylarda to’xtash;\najratuvchi mintaqaning texnologik uzilish joylariga kirish va ularda qayrilib olish;\norqaga harakatlanish;\ntransport vositasini o’rganish uchun boshqarish."
  },
  {
    "id": 15,
    "biletId": 2,
    "text": "Qaysi transport vositasi haydovchisi to’g’riga harakatlanish huquqiga ega?",
    "options": [
      "Avtobus va mototsikl haydovchilari",
      "Yengil va yuk avtomobillari haydovchilari",
      "Yengil avtomobil haydovchisi"
    ],
    "correctAnswer": 2,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i2_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining o’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 16,
    "biletId": 2,
    "text": "Qaysi transport vositasining haydovchisi yo’l berish kerak?",
    "options": [
      "Avtomobil haydovchisi",
      "Tramvay haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i2_6.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo'shimcha tarmoqning yo’naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo’l berishi kerak."
  },
  {
    "id": 17,
    "biletId": 2,
    "text": "Transport vositasini orqaga harakatlantirish paytida haydovchi qanday talablarni bajarishi kerak?",
    "options": [
      "Harakatning boshqa ishtirokchilariga xalaqit bermaslik. Harakat xavfsizligini ta’minlash uchun zarur bo’lsa, boshqa shaxslar yordamidan foydalanish",
      "Boshqa shaxslar yordamidan foydalanish",
      "Transport vositasida tumanga qarshi orqa chiroqlar bo’lsa, ularni yoqish",
      "Gabarit chiroqlarini yoqish"
    ],
    "correctAnswer": 0,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 63-bandiga asosan: Transport vositasini orqaga harakatlantirishda haydovchi yo’l harakati xavfsizligini ta’minlashi va boshqa yo’l harakati qatnashchilariga xalaqit bermasligi shart. Zarurat tug’ilganda haydovchi boshqa shaxslarning yordamidan foydalanishi kerak."
  },
  {
    "id": 18,
    "biletId": 2,
    "text": "Yo’lning qarama-qarshi harakat yo’nalishi tomoniga chiqish qachon taqiqlanadi?",
    "options": [
      "Ikki tomonlama harakatli, 4 ta yoki undan ko’p tasmali yo’llarda",
      "Ikki tomonlama harakatli, qarama-qarshi yo’nalishdagi transport vositalari oqimlari ikkita uzluksiz chiziqlar bilan ajratilgan 4 ta tasmali yo’llarda",
      "Yuqoridagi barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Yo'lning qatnov qismida transport vositalarining joylashuvi",
    "explanation": "YHQ 10-bobi 65-bandiga asosan: To'rt va undan ortiq tasmali, harakat ikki tomonlama bo’lgan yo’llarda qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan tasmalarga chiqish taqiqlanadi.\nYHQ 2-ilovasi 1-bobi beshinchi va o’ttiz to'rtinchi xatboshlariga asosan: 1.3 — to’rt va undan ortiq harakatlanish tasmasi bo'lgan yo’llarda qarama-qarshi yo’nalishdagi transport vositalari oqimini ajratadi; 1.3 yotiq chizig’ini bosib o’tish taqiqlanadi."
  },
  {
    "id": 19,
    "biletId": 2,
    "text": "Qaysi holatda egri yo’lda harakatlanayotgan avtomobil turg’unligi ta’minlanadi?",
    "options": [
      "Uzatma ulangan holatda",
      "Uzatma ajratilgan holatda",
      "Tezlik oshirilganda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Egri yo'l (burilish)da harakatlanayotgan avtomobilda markazdan qochirma kuch vujudga keladi. Burilish o’ng tomonga bo'lgan holda siz qarama-qarshi yo'nalishda harakatlanish bo’lagiga, chap tomonga bo'lsa, yo'l yoqasi yoki uning tashqarisiga chiqib ketishingiz ehtimoli mavjud. Uzatma ajratilgan holatda avtomobil o'zi harakatlanib, uni boshqarish murakkablashadi. Shu bois, burilishga yaqin masofa qolganda, uning tikligini va tezligingizni baholab, uzatma mexanizmini ajratmay harakatni davom ettiring."
  },
  {
    "id": 20,
    "biletId": 2,
    "text": "Qaysi shartlarda transport vositalaridan foydalanish taqiqlanadi?",
    "options": [
      "Gidravlik tormoz tizimidan suyuqlik oqayotgan bo’lsa",
      "Ishchi tormoz tizimi ishlamayotgan bo’lsa",
      "Kompressor pnevmatik tormoz tizimida o’rnatilgan bosimni ta’minlay olmagan holatda",
      "Ko’rsatilgan barcha holatlarda"
    ],
    "correctAnswer": 3,
    "category": "Tormoz tizimlari",
    "explanation": "YHQ 3-ilovasi 1-bo’limining 1.3 va 1.4-bandlariga asosan, transport vositalaridan foydalanish taqiqlanadi: Gidravlik tormoz yuritmasining zichligi (germetikligi) buzilgan bo'lsa.\nDvigatel ishlamay turganda pnevmatik yoki pnevmogidravlik tormoz yuritmasining zichligini buzilishi, boshqaruv qismlari ulanmaganda — 30 daqiqada, ulanganida — 15 daqiqada tizimdagi havo bosimini 0,05 MP dan Ко\"рда pasayishiga sabab bo’lsa, g’ildiraklardagi tormoz kameralaridan siqilgan havo chiqayotgan bo’lsa.\nYHQ 2-bobi 12-bandining uchinchi xatboshisiga asosan: tormoz tizimi, rul boshqaruvi ishlamayotgan, ulagich moslamasi (avtopoezd tarkibida) nosoz bo’lgan, qorong’i vaqtda yoki yetarlicha ko’rinmaydigan sharoitda — old chiroqlar va orqa gabarit chiroqlari bo'lmagan yoki yonmayotgan, yomg’ir, qor yog'ayotgan vaqtda haydovchi tomonidagi oyna tozalagich ishlamayotgan transport vositalarini boshqarish taqiqlanadi."
  },
  {
    "id": 21,
    "biletId": 3,
    "text": "Haydovchi yo’lakay yo’nalishda kimga transport vositasini taqdim etishi shart?",
    "options": [
      "Yo’l xizmati xodimlariga",
      "Tibbiyot xodimlariga zudlik bilan tibbiy yordamga muxtoj bo'lgan fuqarolarni davolash-profilaktika muassasasiga olib borish uchun"
    ],
    "correctAnswer": 1,
    "category": "Haydovchilarning umumiy majburiyatlari",
    "explanation": "YHQ 2-bobi 11-bandidagi 3) punktining ikkinchi xatboshisiga asosan, quyidagi hollarda transport vositasini foydalanish uchun taqdim etishi: yo’lakay yo’nalishda tibbiy yordam ko’rsatishga ketayotgan tibbiyot xodimlariga hamda zudlik bilan tibbiy yordamga muhtoj bo'lgan fuqarolarni davolash-profilaktika muassasasiga olib borish uchun."
  },
  {
    "id": 22,
    "biletId": 3,
    "text": "Qaysi yo’nalishlarda harakatlanishga ruxsat etilgan?",
    "options": [
      "Faqat \"Б\"",
      "Faqat \"А\"",
      "\"А\" ва \"Б\"",
      "\"А\", \"Б\", \"B\" va \"Г\"",
      "\"A\", \"B\" va \"B\""
    ],
    "correctAnswer": 2,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i3_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining to’qqizinchi xatboshisiga asosan: 4.1.1 belgisi yo’lning qismi boshlanishiga о’гпаtilsа, unga yaqin chorrahagacha amal qilinadi. Belgi o'ng tomonda joylashgan hovli va boshqa yondosh hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 23,
    "biletId": 3,
    "text": "Qaysi belgi qarama-qarshi harakatlanishning ustunligini bildiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Imtiyoz belgilari",
    "imageUrl": "/images/questions/i3_3.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’limining o’ninchi xatboshisiga asosan: 2.6. \"Ro’para harakatlanishning ustunligi\". Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo’lning tor qismiga kirish taqiqlanadi. Haydovchi yo'lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 24,
    "biletId": 3,
    "text": "Qaysi belgi Qoidalarning aholi punktlarida harakatlanish tartibini belgilaydigan talablari bekor qilinishini ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Imtiyoz belgilari",
    "imageUrl": "/images/questions/i3_4.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining qirq birinchi xatboshisiga asosan: 5.23. \"Aholi punktining oxiri\". Ushbu Qoidalarning aholi punktlarida harakatlanish tartib-talablari bekor qilingan joyni bildiradi."
  },
  {
    "id": 25,
    "biletId": 3,
    "text": "O’ngga burilganda shu belgi bilan belgilangan tasmaga o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar tasma qolgan harakat qismidan yotiq uzluksiz chiziq bilan ajratilmagan bo'lsa, ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Yo‘nalishli transport vositalari uchun alohida ajratilgan tasmasi bor yo‘l orqali harakatlanish",
    "imageUrl": "/images/questions/i3_5.webp",
    "explanation": "YHQ 22-bobi 132-bandining ikkinchi va uchinchi xatboshlariga asosan: Agar 5.9 yo’l belgisi bilan belgilangan tasma qatnov qismining boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan bo’lsa, burilmoqchi bo’layotgan transport vositalari bu tasmaga qayta tizilishlari kerak.\nShuningdek, bunday joylarda yo’nalishli transport vositalarining harakatiga xalaqit bermaslik sharti bilan yo’lga chiqish, qatnov qismining chetki o’ng tomonida yo’lovchilarni chiqarish va tushirish uchun bu bo’lakka o’tishga ruxsat etiladi."
  },
  {
    "id": 26,
    "biletId": 3,
    "text": "Transport vositalari chorrahadan quyidagi tartibda o’tadilar:",
    "options": [
      "Tramvay va avtobus, yengil avtomobil",
      "Tramvay, yengil avtomobil, avtobus",
      "Yengil avtomobil, tramvay va avtobus"
    ],
    "correctAnswer": 2,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i3_6.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo'shimcha tarmoqning yo’'naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo'nalishlarda harakatlanayotgan transport vositalariga yo’l berishi kerak.\nYHQ 15-bobi 101-bandining ikkinchi xatboshisiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo'shimcha tarmog’ining yo’naltirgichli yashil ishorasi yo'nalishida harakatlanayotgan tramvay boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 27,
    "biletId": 3,
    "text": "Avtomobilning qaysi g’ildiraklari \"sirpanib\" tormozlanishga ko'proq moyil?",
    "options": [
      "Orqa g’ildiraklar",
      "Oldingi g’ildiraklar"
    ],
    "correctAnswer": 0,
    "category": "Tormoz tizimlari",
    "explanation": "Inersiya kuchi ta’siri ostida tormozlash vaqtida о’qlarga tushadigan og’irlik qayta taqsimlanishi ro'y beradi. Old o’qqa nisbatan og’irlik ko’payadi, orqa o'qqa nisbatan kamayadi. Tormozlash sur’ati qanchalik baland bo’lsa, o’qlarga tushadigan og’irlik qayta taqsimlanishi sezilarliroq bo’ladi. Orqa o’qdan og’irlik kamayishi bilan g’ildirakni yo'lga bosuvchi kuch kamayadi, shu sababli g’ildirakning sirg'anishi (aylanmasdan siljishi) va avtomobilning surilib ketishi ehtimoli yuzaga keladi. Old o'qda og’irlik ko'payishi g’ildirakni yo'lga bosish kuchini ko’paytiradi, shu sababli, sirg’alish ehtimoli kamayadi."
  },
  {
    "id": 28,
    "biletId": 3,
    "text": "Qaysi transport vositalarini qatnov qismining chetida ikki qator qo’yish mumkin?",
    "options": [
      "Kajavasiz mototsikllar, mopedlar va velosipedlar",
      "Kajavali mototsikllar",
      "\"Nogiron\" taniqlik belgisi bo’lgan yengil avtomobillar",
      "Ruxsat etilgan to’la vazni 3,5 tonnadan kam bo’lgan, bevosita trotuarlar bo’ylab joylashgan savdo va boshqa korxonalarga xizmat qiluvchi yuk avtomobillari"
    ],
    "correctAnswer": 0,
    "category": "To'xtash va to'xtab turish",
    "explanation": "YHQ 13-bobi 89-bandining birinchi xatboshisiga asosan: Transport vositalarini yo'lning qatnov qismida bir qator qilib, qatnov qismi chetiga parallel ravishda kajavasi bo’lmagan ikki g'ildirakli transport vositalarini ikki qator qilib qo’yishga ruxsat etiladi."
  },
  {
    "id": 29,
    "biletId": 3,
    "text": "Qo’l jarohatlanganda kiyim qanday tartibda kiydiriladi?",
    "options": [
      "Kiyim avval jarohatlangan qo'lga, so’ngra sog’iga kiydiriladi",
      "Kiyim ikkala qo’lga baravar kiydiriladi",
      "Kiyim avval sog’ qo'lga, so’ngra jarohatlangan qo’lga kiydiriladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Shikastlangan qo’l yoki oyoqni majburiy harakatga solmasdan, kiyim kiydirish imkonini yaratish uchun avval kiyim shikastlangan, so'ngra shikastlanmagan qo'l yoki oyoqqa ehtiyotlik bilan kiydiriladi."
  },
  {
    "id": 30,
    "biletId": 3,
    "text": "Yuk transport vositasiga shunday joylashtirilishi kerakki, u:",
    "options": [
      "Yukxona devorlaridan baland chiqmasligi kerak",
      "Shovqin hosil qilmasligi, chang ko’tarmasligi va atrof-muhitni ifloslantirmasligi kerak",
      "Transport vositasining orqa o’lchamidan 0,8 metrdan ortiq chiqib turmasligi kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 162-bandining beshinchi xatboshisiga asosan, quyidagi shartlarga amal qilinganda yuk tashishga yo’l qo’yiladi: shovqin solmasa, chang ko’tarmasa, yo'lni va atrof-muhitni iflos qilmasa."
  },
  {
    "id": 31,
    "biletId": 4,
    "text": "Mazkur yo’l belgisi nimani bildiradi?",
    "options": [
      "Yo’lning trotuar yoki piyodalar yo’lkasi bo’lgan qismini",
      "Yo’lning piyodalar o’tish joyi bo’lgan qismini"
    ],
    "correctAnswer": 1,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i4_1.webp",
    "explanation": "YHQ 1-ilovasi 1.20. \"Piyodalar o’tish joyi\". 5.16.1, 5.16.2 belgilari va (yoki) 1.14.1 — 1.14.3 chiziqlari bilan belgilangan piyodalar o'tish joyini bildiradi."
  },
  {
    "id": 32,
    "biletId": 4,
    "text": "Qaysi transport vositalariga to’xtab turishga ruxsat etilgan?",
    "options": [
      "Faqat mototsiklga",
      "Faqat yuk avtomobiliga",
      "Faqat yengil avtomobilga",
      "Yengil avtomobil va mototsiklga",
      "Barcha transport vositalariga"
    ],
    "correctAnswer": 3,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i4_2.webp",
    "explanation": "YHQ 1-ilovasi 3.28. bandi \"To’xtab turish taqiqlangan\". Transport vositalarining to'xtab turishi taqiqlanadi (xizmat vazifasini bajarayotgan xodimga biriktirilgan ko'k yoki qizil yoxud Ко’К va qizil rangli yaltiroq mayoqchasi bilan jihozlangan hamda maxsus rangli bo’yoq sxemalar va yozuvlar bilan belgilangan transport vositalari bundan mustasno). 7.4.1— 7.4.10. \"Transport vositasining turi\". Belgining ta’siri joriy etilgan transport vositalari turini ko'rsatadi."
  },
  {
    "id": 33,
    "biletId": 4,
    "text": "Ushbu yo’l belgisi nima haqida ogohlantiradi?",
    "options": [
      "Bir izli temir yo’l kesishmasiga yaqinlashayotganligi haqida",
      "Shlagbaum bilan jihozlanmagan bir izli temir yo’l kesishmasi borligidan",
      "Shlagbaum bilan jihozlanmagan ikki izli temir yo’l kesishmasi borligidan"
    ],
    "correctAnswer": 1,
    "category": "Temir yo'l kesishmalari orqali harakatlanish",
    "imageUrl": "/images/questions/i4_3.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limining beshinchi yettinchi xatboshlariga asosan: 1.3.1. \"Bir izli temir yo'l\". 1.3.1. — bir izli temir yo'l, belgisi shlagbaum bilan jihozlanmagan temir yo’l kesishmasi oldida o’rnatiladi."
  },
  {
    "id": 34,
    "biletId": 4,
    "text": "Yashil avtomobil chorrahadan nechinchi bo’lib o’tadi?",
    "options": [
      "Ikkinchi",
      "Birinchi"
    ],
    "correctAnswer": 0,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i4_4.webp",
    "explanation": "YHQ 1-ilovasi 99-bandi: Svetoforning ruxsat etuvchi ishorasida chapga burilayotgan yoki qayrilib olayotgan relssiz transport vositasining haydovchisi qarama-qarshi tomondan to’g’riga harakatlanayotgan va o'ngga burilayotgan transport vositalariga yo'l berishi shart. Tramvay haydovchilari ham ushbu Qoidaga amal qilishlari kerak. 2.1. \"Asosiy yo'l\". Harakat tartibga solinmagan chorrahalarda oldin o’tish huquqini beradi. Belgi asosiy yo'l boshiga va chorrahalarning bevosita oldiga o'rnatiladi."
  },
  {
    "id": 35,
    "biletId": 4,
    "text": "Qaysi transport vositasiga harakatlanish ruxsat etiladi?",
    "options": [
      "Mototsiklga",
      "Yuk avtomobiliga",
      "Avtobusga",
      "Yengil avtomobilga",
      "Yengil va yuk avtomobillariga"
    ],
    "correctAnswer": 3,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i4_5.webp",
    "explanation": "YHQ 7-bobi 38-bandi: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi:\nQo’llari yon tomonga uzatilganda yoki tushirilganda:\nchap va o’ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o’tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi.\no’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 36,
    "biletId": 4,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Mototsikl haydovchisi",
      "Avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i4_6.webp",
    "explanation": "YHQ 15-bobi 100-bandi: Svetoforning taqiqlovchi qizil yoki sariq ishorasi bilan bir vaqtda yongan qo'shimcha tarmoqning ko’rsatkichli yashil ishorasi yo'nalishida harakatlanayotgan haydovchi boshqa yo’nalishlardan harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 37,
    "biletId": 4,
    "text": "Harakat ikki tomonlama bo’lgan, uch tasmali yo’lda Siz o’ngga burilishingiz zarur. Ushbu harakatni qaysi tasmadan amalga oshirasiz?",
    "options": [
      "O’ng tasmadan",
      "O’rta tasmadan",
      "O’ng yoki o’rta tasmadan",
      "O’rta tasmadan, lekin faqat o’ng tasma band bo’lganda"
    ],
    "correctAnswer": 0,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 10-bobi 66-bandi: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig'i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo'nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo'nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 38,
    "biletId": 4,
    "text": "Qaysi joylarda transport vositalariga qatnov qismining chetiga burchak ostida to’xtab turishga ruxsat etiladi?",
    "options": [
      "Har bir yo’nalishda ikkitadan bo’lagi bo’lgan yo’llarda",
      "Har bir yo’nalishda uchta va undan ko’p bo’lagi bo’lgan yo’llarda",
      "Faqat bir tomonlama harakatli yo’llarda",
      "Yo’lning qatnov qismi kengaygan joylarda boshqa yo'l harakati qatnashchilariga xalaqit bermaslik sharti bilan"
    ],
    "correctAnswer": 3,
    "category": "To'xtash va to'xtab turish",
    "explanation": "YHQ 13-bobi 89-bandi: Transport vositalarini yo'lning qatnov qismida bir qator qilib, qatnov qismi chetiga yo’l harakatining boshqa qatnashchilariga xalaqit bermaslik sharti bilan faqat parallel ravishda, kajavasi bo’lmagan ikki g’ildirakli transport vositalarini ikki qator qilib qo’yishga ruxsat etiladi. Qatnov qismining ayrim kengaytirilib qatnov qismidan ajratilgan joylarida yo’l harakatining boshqa qatnashchilariga xalaqit bermaslik sharti bilan boshqacha tartibda qo'yishga ham ruxsat etiladi."
  },
  {
    "id": 39,
    "biletId": 4,
    "text": "Suyak singanda qotirib bog’lash uchun nimadan shina sifatida foydalanish eng qulay?",
    "options": [
      "Bint",
      "Gazmol",
      "Taxta bo’lagi"
    ],
    "correctAnswer": 2,
    "category": "Yo'l-transport hodisasi sodir bo'lganda haydovchining majburiyatlari",
    "explanation": "Suyaklar singanda shikastlanganda qo'l yoki oyoqni har qanday qattiq vosita yordamida mustahkamlab, harakatsizlantirish (immobilizatsiya qilish) lozim."
  },
  {
    "id": 40,
    "biletId": 4,
    "text": "Kunning qorong’i vaqtida sun’iy yoritilmagan yo’llarda yoki yetarli ko’rinmaslik sharoitida yonmaydigan orqa gabarit chiroglari bilan to’xtab turish yoki ta’mirlash joyiga borishga ruxsat etiladimi?",
    "options": [
      "Alohida ehtiyotkorlik bilan borishga ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Haydovchilarning umumiy majburiyatlari",
    "explanation": "YHQ 2-bobi 12-bandining uchinchi xatboshisiga asosan: tormoz tizimi, rul boshqaruvi ishlamayotgan, ulagich moslamasi (avtopoyezd tarkibida) nosoz bo’lgan, sutkaning qorong’i vaqtida yoki ko’rinish cheklangan vaziyatlarda yonmaydigan fara chiroqlari va orqa gabarit fara chiroqlari, yomg’ir yoki qor yog'ayotgan vaqtda oyna tozalagich ishlamaydigan transport vositasini boshqarish taqiqlanadi."
  },
  {
    "id": 41,
    "biletId": 5,
    "text": "Sanab o’tilgan hollarning qaysi birida haydovchi o’zining transport vositasini ichki ishlar xodimi ixtiyoriga berishi shart?",
    "options": [
      "Barcha hollarda",
      "Kechiktirib bo’lmaydigan xizmat vazifalarini bajarish uchun",
      "Ish joyiga borish uchun"
    ],
    "correctAnswer": 1,
    "category": "Haydovchilarning umumiy majburiyatlari",
    "explanation": "YHQ 2-bob 11-bandi Transport vositasining haydovchisi quyidagilarga majburdir: z) quyidagi hollarda foydalanish uchun transport vositasini berishi shart:\nIIO, Milliy gvardiya, Davlat xavfsizlik xizmati va o’zbekiston Respublikasi Prezidenti davlat xavfsizlik xizmati organlari xodimlariga qonunchilik hujjatlarida belgilangan xollarda kechiktirib bo’lmaydigan xizmat vazifalarini bajarish uchun, shuningdek, yo’l-transport hodisasi tufayli shikastlangan yoki nosoz transport vositalarini olib ketish (shatakka olish) uchun (faqat yuk avtomobilidan);\nyo’lakay yo’nalishda kechiktirib bo’lmaydigan tibbiy yordam ko’rsatishga ketayotgan tibbiyot xodimlariga hamda zudlik bilan tibbiy yordamga muhtoj bo’lgan fuqarolarni davolash-profilaktika muassasasiga olib borish uchun.\nXorijiy davlatlarning diplomatik, konsullik vakolatxonalariga va boshqa vakolatxonalariga hamda xalqaro tashkilotlarga tegishli transport vositalari, shuningdek yong’in uchirish, konvoy, inkassator xizmatlarining transport vositalaridan foydalanishga yo’l qo’yilmaydi.\nTransport vositasidan foydalangan shaxs haydovchi talab qilganda yo’l varaqasiga yurilgan vaqtni, bosib o’tilgan masofani, o’z ismi-familiyasi, mansabi, ish joyi nomini, yo’l varaqasi bo’lmagan taqdirda, belgilangan tartibda ma’lumot yoki xabar yozib berishi kerak.\nTransport vositalarini tekshirish yoki undan foydalanish huquqiga ega bo’lgan shaxslar haydovchining talabiga muvofiq o’z xizmat guvohnomasini ko’rsatishi shart.\nXizmat vaqtida haydovchiga yetkazilgan moddiy va ma’naviy zarar uning talabiga ko’ra qonunchilik hujjatlarida belgilangan tartibda tiklab beriladi."
  },
  {
    "id": 42,
    "biletId": 5,
    "text": "Qaysi transport vositasining haydovchisi birinchi navbatda harakatlanish huquqiga ega?",
    "options": [
      "Yuk avtomobili haydovchisi",
      "Avtobus haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Imtiyoz belgilari",
    "imageUrl": "/images/questions/i5_2.webp",
    "explanation": "YHQ 1-ilovasi 2-bob, 2.6. bandi: \"Ro’para harakatlanishning ustunligi\". Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo’lning tor qismiga kirish taqiqlanadi. Haydovchi yo'lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 43,
    "biletId": 5,
    "text": "Qaysi belgi transport vositalarining belgida ko’rsatilgandan kam oraliq masofada harakatlanishini taqiqlaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Taqiqlovchi belgilar",
    "imageUrl": "/images/questions/i5_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bobning 3.16. bandi: 3.16. \"Eng kam oraliq\". Belgida ko'rsatilganidan kam bo’ylama oraliq masofada harakatlanish taqiqlanadi."
  },
  {
    "id": 44,
    "biletId": 5,
    "text": "Mazkur holatda avtobusning chorrahaga kirishiga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar avtobus belgilangan yo’nalish bo’yicha harakatlanayotgan bo’lsa ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i5_4.webp",
    "explanation": "YHQ 14-bobi 97-bandi: Haydovchi tirbandlik tufayli majburiy to'xtab, ko'ndalang yo’nalishdagi transport vositalarining harakatlanishiga to'sqinlik tug’diradigan bo'lsa, chorrahaga kirishi, agar to’xtash chizig'i yoki 5.33 yo’l belgisidan o'tib bo’lgan haydovchiga esa qatnov qismlari kesishmasiga kirishi taqiqlanadi."
  },
  {
    "id": 45,
    "biletId": 5,
    "text": "Ko’rsatilgan vaziyatda qaysi tasmadan o’ngga burilish lozim?",
    "options": [
      "Faqat ikkinchi tasmadan",
      "Faqat \"A\" chizig’i bilan belgilangan o’ng chekkadagi tasmadan"
    ],
    "correctAnswer": 1,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i5_5.webp",
    "explanation": "YHQ 5-bobi 132-bandi: Yo’nalishli transport vositalarining harakatlanishi uchun 5.9, 5.10.1 — 5.10.3 yo’l belgilari bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to’xtashi taqiqlanadi. Agar 5.9 yo’l belgisi bilan belgilangan tasma qatnov qismining boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan bo'lsa, burilmoqchi bo’layotgan transport vositalari bu tasmaga qayta tizilishlari kerak. Shuningdek, bunday joylarda yo’nalishli transport vositalarining harakatiga xalaqit bermaslik sharti bilan yo’lga chiqish, qatnov qismining chetki o'ng tomonida yo’lovchilarni chiqarish va tushirish uchun bu bo’lakka o’tishga ruxsat etiladi."
  },
  {
    "id": 46,
    "biletId": 5,
    "text": "Tartibga soluvchining mazkur ishorasi quyidagini bildiradi:",
    "options": [
      "Ko’k, yashil avtomobillarga harakatlanishga ruxsat etiladi. Qizil, sariq, oq avtomobillarga taqiqlanadi",
      "Ko’k, qizil, yashil avtomobillarga harakatlanishga ruxsat etiladi. Sariq, oq avtomobillarga taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i5_6.webp",
    "explanation": "YHQ 7-bobi 38-bandi: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi: O'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o'tishga ruxsat etiladi."
  },
  {
    "id": 47,
    "biletId": 5,
    "text": "Aholi punktlaridan tashqarida yengil avtomobillarning qanday eng katta tezlik bilan harakatlanishiga ruxsat etiladi?",
    "options": [
      "110 km/s",
      "100 km/s",
      "90 km/s",
      "80 km/s",
      "70 km/s"
    ],
    "correctAnswer": 1,
    "category": "Harakatlanish tezligi",
    "explanation": "YHQ 11-bobi 79-bandi: Aholi punktlaridan tashqarida:\nyengil avtomobillarga va ruxsat etilgan to’liq vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga tezlikni soatiga 100 kilometrdan oshirmasdan;\nshaharlararo qatnaydigan avtobuslarga va mikroavtobuslarga tezlikni soatiga 90 kilometrdan oshirmasdan;\nboshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to’liq vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan;\ntirkamali yuk avtomobillariga tezlikni soatiga 70 kilometrdan oshirmasdan harakatlanish ruxsat etiladi."
  },
  {
    "id": 48,
    "biletId": 5,
    "text": "Chorrahada aylanma harakatlanish tashkil qilingan. Siz yaqinlashib kelayotgan yo’lning qatnov qismi ikkita harakat bo’lagiga ega. Chorrahaga kirishda burilish uchun Siz qaysi tasmani egallashingiz lozim?",
    "options": [
      "O’ng tasmani",
      "Chap tasmani",
      "O’ng yoki chap tasmani"
    ],
    "correctAnswer": 2,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 56-bandi: Haydovchi, aylanma harakatlanish tashkil qilingan chorrahalarga kirish uchun burilishdan boshqa barcha hollarda, haydovchi o’ngga, chapga burilishi yoki qayrilib olishdan oldinroq shu yo’nalishda harakatlanishi uchun mo’ljallangan qatnov qismining eng chetki holatni egallashi shart."
  },
  {
    "id": 49,
    "biletId": 5,
    "text": "Siz qiyalikda svetoforning ruxsat beruvchi ishorasini kutib to’xtadingiz. Bunda avtomobilni joyida tutib turishning eng yaxshi usuli:",
    "options": [
      "To’xtab turish tormozi bilan",
      "Birinchi uzatma ulangan holda ulovchini joydan jilmay aylantirish hisobiga",
      "Yurgizgich o’chirilib, past uzatma ulangan holda",
      "Ishchi tormoz bilan"
    ],
    "correctAnswer": 0,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "explanation": "Ishchi (asosiy) tormoz avtomobil harakatlanishi vaqtida doimiy foydalanishga mo’ljallangan va haydovchiga avtomobil harakatini har xil intensivlikda sekinlashtirish yoki uni to'xtatish uchun xizmat qiladi. To'xtab turish tormozi avtomobilni uzoq muddatli to’xtash yoki to’xtab turish vaqtida o’z-o’zidan harakatlanib ketishidan saqlab qolish uchun mo’ljallangan."
  },
  {
    "id": 50,
    "biletId": 5,
    "text": "Qaysi hollarda velosipedchilarga qatnov qismining o’ng chekkasidan chiqishga yo’l qo’yiladi?",
    "options": [
      "Yuk ortib ketayotganda",
      "Ruxsat etilgan hollarda chapga burilish yoki qayrilib olish uchun",
      "Ikkala sanab o’tilgan hollarda"
    ],
    "correctAnswer": 1,
    "category": "Velosiped, moped va aravalar harakatlanishiga, shuningdek hayvonlarni haydab otishga doir qoshimcha talablar",
    "explanation": "YHQ 28-bobi 166-bandi: Velosipedlar, individual harakatlanish vositalari, mopedlar, aravalar, miniladigan yoki yuk ortiladigan hayvonlarning yo’lning chetki o’ng bo’lagida imkoni boricha o’ng tomonidan bir qator bo’lib harakatlanishiga yo’l qo’yiladi. Agar piyodalarga xalaqit bermasa, yo’l yoqasidan harakatlanishga ham ruxsat etiladi.\nYo’lning qatnov qismida harakatlanishda velosipedchilar, individual harakatlanish vositalari, aravalar jamlanmasi, miniladigan yoki yuk ortiladigan hayvonlar guruhlari va haydab ketilayotgan hayvonlar to’dasi yo’l harakati xavfsizligini ta’minlaydigan hamda ularni quvib o’tishni osonlashtiradigan guruhlarga bo’linishi kerak. \nIzoh: qatnov qismining chap bo’lagiga faqat chapga burilish va qayrilib olish uchun o’tishga ruxsat etiladi."
  },
  {
    "id": 51,
    "biletId": 6,
    "text": "Piyodalarga yo’lni piyodalar o’tish joyidan tashqarida kesib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Yo’lning qatnov qismi chetiga nisbatan to’g’ri burchak ostida, uning ikkala tomoni yaxshi ko’rinib turadigan, ko’rinish masofasida o’tish joyi yoki chorraha bo’lmasa, ajratuvchi mintaqasiz va to’siqsiz yo’llarda kesib o’tishga ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Piyodalarning majburiyatlari",
    "explanation": "YHQ 4-bobi 17-bandi: Piyodalar yo'lning qatnov qismini piyodalar o'tish joylaridan, shuningdek, yer osti va yer usti o’tish joylaridan, ular bo’lmaganda esa chorrahalarda trotuar chiziqlari yoki yo'l yoqasi bo’ylab kesib o’tishlari kerak. Piyodalarga ko’rinadigan oraliqda o’tish joyi yoki chorraha bo'lmasa, ajratuvchi mintaqasiz va to’siqsiz yo'llardan yo’lning ikki tomoni yaxshi ko'rinadigan joyidan, qatnov qismining chetiga nisbatan to’g’ri burchak ostida kesib o’tish ruxsat etiladi."
  },
  {
    "id": 52,
    "biletId": 6,
    "text": "Bu joyda hovliga burilishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i6_2.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limi 1.11 belgisi: faqat bir tomondan qayta tizilishga ruxsat etilgan yo’l qismlarida, bir yo'nalishdagi yoki qarama-qarshi kelayotgan transport oqimlarini ajratadi;\nqayrilib olish, to'xtash maydonchalari va shunga o’xshashlarga kirish-chiqish joylarida harakatlanish faqat bir yo’nalishda ruxsat etilganligini ko’rsatadi."
  },
  {
    "id": 53,
    "biletId": 6,
    "text": "Ushbu belgilar aholi punktlarida xavfli yo’l qismi boshlanishidan qancha masofa oldin o’rnatiladi?",
    "options": [
      "15-25 m",
      "25-50 m",
      "50-100 m",
      "100-130 m",
      "150-300 m"
    ],
    "correctAnswer": 2,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i6_3.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limi: 1.1, 1.2, 1.5 — 1.32 ogohlantiruvchi belgilari aholi punktlarida xavfli joydan 50 — 100 metr, aholi punktlaridan tashqarida esa 150 — 300 metr oldin o’rnatiladi. Zaruriyat bo'lganda, bu belgilar 7.1.1 qo'shimcha axborot belgisida ko’rsatilgan boshqa masofada ham o’rnatilishi mumkin."
  },
  {
    "id": 54,
    "biletId": 6,
    "text": "Avtomagistralda shatakka olishga ruxsat etiladimi?",
    "options": [
      "50 km/s tezlik bilan ruxsat etilgan",
      "Taqiqlanadi ",
      "Faqat qisman ortish usuli bilan yoki qattiq ulagich bilan ruxsat etiladi",
      "Egiluvchan tirkagich bilan ruxsat etiladi",
      "Istalgan usulda ruxsat etilgan"
    ],
    "correctAnswer": 4,
    "category": "Avtomagistrallarda harakatlanish",
    "explanation": "YHQ 24-bobi 145-bandi: Shatakka olish quyidagi holatlarda taqiqlanadi:\nrul boshqaruvi ishlamayotgan transport vositalarini (qisman ortish usuli bilan shatakka olish bundan mustasno);\nikki va undan ko’p transport vositalarini;\nshatakka olingan va shatakka olgan transport vositalarining ulagich bilan birga umumiy uzunligi 20 metrdan ortiq bo’lsa;\nishchi tormoz tizimi ishlamayotgan transport vositasining haqiqiy vazni shatakka olgan transport vositasining haqiqiy vaznining yarmidan ortiq bo’lsa (haqiqiy vazni kam bo’lgan bunday transport vositasini faqat qattiq ulagich bilan yoki qisman ortish usuli bilan shatakka olishga yo’l qo’yiladi);\nikki g’ildirakli mototsikl, elektromototsikl, moped, skuter va individual harakatlanish vositalari bilan, shuningdek, bunday mototsikl, elektromototsikl, moped, skuter va individual harakatlanish vositalarini;\nyo’l yaxmalak, sirpanchiq bo’lgan hollarda egiluvchan ulagichda."
  },
  {
    "id": 55,
    "biletId": 6,
    "text": "Belgilangan yo’nalish bo’ylab harakatlanayotgan avtobus haydovchisi ushbu sharoitda yo’l berishi kerakmi?",
    "options": [
      "Kerak",
      "Kerak emas",
      "Kerak emas, chunki u to’g’riga ketmoqda"
    ],
    "correctAnswer": 0,
    "category": "Yo‘nalishli transport vositalari uchun alohida ajratilgan tasmasi bor yo‘l orqali harakatlanish",
    "imageUrl": "/images/questions/i6_5.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo'l berishi shart. Bu qoidaga tramvay haydovchilari ham o'zaro amal qilishlari kerak. Bunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 56,
    "biletId": 6,
    "text": "Qaysi transport vositalariga harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat qizil avtomobilga",
      "Barcha transport vositalariga",
      "Qizil, ko’k va yashil avtomobillarga"
    ],
    "correctAnswer": 2,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i6_6.webp",
    "explanation": "YHQ 7-bobi 38-bandi: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi:\nQo’llari yon tomonga uzatilganda yoki tushirilganda:\nchap va o’ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o’tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi.\no’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 57,
    "biletId": 6,
    "text": "Tirkamali yengil avtomobillarga yo’lning shu yo’l belgisi o’rnatilgan qismida qanday eng katta tezlik bilan harakatlanishga ruxsat etiladi?",
    "options": [
      "60 km/s",
      "70 km/s",
      "80 km/s",
      "100 km/s",
      "110 km/s"
    ],
    "correctAnswer": 2,
    "category": "Harakatlanish tezligi",
    "imageUrl": "/images/questions/i6_7.webp",
    "explanation": "YHQ 11-bobi 79-bandining uchinchi xatboshisiga asosan: Aholi punktlaridan tashqarida:\nyengil avtomobillarga va ruxsat etilgan to’liq vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga tezlikni soatiga 100 kilometrdan oshirmasdan;\nshaharlararo qatnaydigan avtobuslarga va mikroavtobuslarga tezlikni soatiga 90 kilometrdan oshirmasdan;\nboshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to’liq vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan;\ntirkamali yuk avtomobillariga tezlikni soatiga 70 kilometrdan oshirmasdan harakatlanish ruxsat etiladi."
  },
  {
    "id": 58,
    "biletId": 6,
    "text": "Qaysi holda Qoidalar ogohlantirish ishorasini berishni talab qilmaydi?",
    "options": [
      "Qatnov qismining chekkasida to’xtash oldidan",
      "\"Xavfli burilish\" belgisi bilan belgilangan yo’lning egri burilish joyi oldidan",
      "Qo’shni harakat bo’lagiga o’tish oldidan"
    ],
    "correctAnswer": 1,
    "category": "Ogohlantiruvchi belgilar",
    "explanation": "YHQ 1-ilovasi 1-bo’limining 1.11.1, 1.11.2. \"Xavfli burilish\" yo'l belgilari bilan belgilangan yo'llarning burilishi oldida. Chorraha va yo’l kesishmalarining YHQ 1-ilovasi 4-bo’limining 4.1.2. \"Harakatlanish o’ngga\" va 4.1.3. \"Harakatlanish chapga\" belgilari o'rnatilgan tomondan chorrahaga kirib kelayotganda. Chorrahada aylanma harakat tashkil qilingan bo’lsa, chorrahaga kirishda Qoidalar ogohlantirish ishorasini berishni talab qilmaydi."
  },
  {
    "id": 59,
    "biletId": 6,
    "text": "Ushbu yo’l belgisi nimani bildiradi?",
    "options": [
      "Belgida ko’rsatilgandan ortiq yuk ko’taruvchi yuk avtomobillari va transport vositalari tarkibi (tirkamali yuk avtomobillari)ning harakat qilishi taqiqlanadi",
      "Umumiy haqiqiy vazni (yo’lovchilar va yuk vaznini qo’shgan holda) belgida ko’rsatilgandan ortiq bo’lgan transport vositalari, shu jumladan, tirkamali transport vositalarining harakat qilishi taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Taqiqlovchi belgilar",
    "imageUrl": "/images/questions/i6_9.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining o'n uchinchi xatboshisiga asosan: 3.11. \"Vazn cheklangan\". Haqiqiy umumiy vazni belgida ko’rsatilganidan ortiq bo'lgan transport vositalarining, shuningdek transport vositalari tarkiblarining harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 60,
    "biletId": 6,
    "text": "M2; M3 toifali avtotransport vositalari shina protektorlari naqshlarining qoldiq balandligi kamida qancha bo’lishi kerak?",
    "options": [
      "0,8 mm",
      "1,2 mm",
      "1,6 mm",
      "2 mm",
      "2,5 mm"
    ],
    "correctAnswer": 3,
    "category": "G'ildirak va shinalar",
    "explanation": "5.1. Shina protektori naqshlarining qoldiq balandligi N2, N3, O3, O4 toifadagi avtotransport vositalari uchun — 1,0 mm dan kam bo’lsa;\nM1, N1, O1, O2 toifadagi avtotransport vositalari uchun — 1,6 mm dan, kam bo’lsa;\nM2, M3 toifadagi avtotransport vositalari uchun — 2,0 mm dan kam bo’lsa;\nMototsikl, elektromototsikl, moped va skuterlar uchun — 0,8 mm dan kam bo’lsa.\nIzoh: tirkamalar shinasi naqshlarining qoldiq balandligi shatakchi transport vositasi shinalari uchun belgilangan me’yor kabidir."
  },
  {
    "id": 61,
    "biletId": 7,
    "text": "Qaysi javobda yo’lovchilar uchun chiqish va tushish maydonchasi bo’lmagan sharoitdagi yo’lovchilar chiqish va tushish joylari to’liq ko’rsatilgan?",
    "options": [
      "Qatnov qismi yoki trotuar tomonidan",
      "Trotuar tomonidan",
      "Yo’l yoqasida yoki qatnov qismi tomonidan",
      "Trotuar yoki yo’l yoqasi tomonidan"
    ],
    "correctAnswer": 3,
    "category": "Yo'lovchilarning majburiyatlari",
    "explanation": "YHQ 5-bobi 23-bandiga asosan: Yo’lovchilar transport vositasiga Faqatu to'la to’xtagandan so'ng trotuar yoki yo’l yoqasi tomondan chiqishga va tushishga majburdirlar. Yo’lovchilarning transport vositalaridan trotuar yoki yo'l yoqasi tomondan tushishi yoki ularga chiqishining iloji bo’lmagan hollarda, agar bu harakat xavf tug’dirmasa yoki boshqa yo'l harakati qatnashchilariga xalaqit bermasa yo’lning qatnov qismi tomonidan amalga oshirilishi mumkin."
  },
  {
    "id": 62,
    "biletId": 7,
    "text": "Qaysi javobda ruxsat etilgan harakatlanish yo'nalishlari to’g’ri ko’rsatilgan?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\"",
      "\"А\" ва \"Б\"",
      "\"А\" ва \"В\""
    ],
    "correctAnswer": 3,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i7_2.webp",
    "explanation": "YHQ 1-ilovasi 3-Bo’limi: 3.18.1. \"O’ngga burilish taqiqlangan\" belgisi qatnov qismining qaysi kesishmasi oldiga o’rnatilsa, shu kesishmaga tatbiq etiladi."
  },
  {
    "id": 63,
    "biletId": 7,
    "text": "Ushbu yo’l belgisi qo’shimcha axborot belgisi bilan nimani bildiradi?",
    "options": [
      "Ruxsat etilgan to’la vazni 3,5 tonnadan ortiq transport vositalarining to’xtab turish joyi ko'rsatkich qatnov qismining chetida baland to’siq, toshi borligini bildiradi",
      "Transport vositalarining to’xtab turish joyiga avtomobilni ko’rsatilgan usulda qo’yish taqiqlanadi",
      "Yengil avtomobillar, mototsikllar, mopedlar va skuterlarni qo’yish usuli"
    ],
    "correctAnswer": 2,
    "category": "Qo'shimcha axborot belgilari",
    "imageUrl": "/images/questions/i7_3.webp",
    "explanation": "YHQ 1-ilovasi 13-bob. To’xtash va to'xtab turish: \nQatnov qismiga chegaradosh trotuar chetida faqat yengil avtomobillar, mototsikllar, elektromototsikllar, mopedlar, skuterlar, velosipedlar va individual harakatlanish vositalariga to’xtab turishga 5.15 yo’l belgisi bilan birga 7.6.2, 7.6.3, 7.6.6 — 7.6.9 qo’shimcha axborot belgilaridan biri o’rnatilgan joylarda ruxsat etiladi.\n7.6.1 — 7.6.9. “Transport vositasini to’xtab turish joyiga qo’yish usuli”. 7.6.1 barcha turdagi transport vositalarini to’xtab turishi uchun yo’lning qatnov qismida, trotuar yoniga qo’yish usulini, 7.6.2 — 7.6.9 trotuar yonidagi to’xtab turish joyiga yengil avtomobillar, mototsikllar, mopedlar va skuterlarni qo’yish usulini bildiradi."
  },
  {
    "id": 64,
    "biletId": 7,
    "text": "Belgilangan yo’nalish bo’yicha harakatlanayotgan yo'nalishli transport vositalarining haydovchilari piyodalar o’tish joyidan tashqarida oq hassa bilan ishora berayotgan ko’zi ojiz piyodalarni o’tkazib yuborishlari kerakmi?",
    "options": [
      "Barcha hollarda o’tkazib yuborishlari kerak",
      "O’tkazib yuborishlari kerak emas"
    ],
    "correctAnswer": 0,
    "category": "Yo‘nalishli transport vositalari uchun alohida ajratilgan tasmasi bor yo‘l orqali harakatlanish",
    "explanation": "YHQ 17-bobi 113-bandiga asosan: Barcha hollarda, shu jumladan, piyodalar o’tish joylaridan tashqarida ham haydovchi oq hassa bilan ishora berayotgan ko’zi ojiz piyoda(lar)ni o’tkazib yuborishi kerak."
  },
  {
    "id": 65,
    "biletId": 7,
    "text": "Transport vositalari chorrahadan quyidagi tartibda o’tadilar:",
    "options": [
      "Mototsikl, tramvay va avtomobil",
      "Tramvay, mototsikl, avtomobil",
      "Tramvay va avtomobil, mototsikl"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i7_5.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada ikkinchi darajali yo’ldan harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga ularning keyingi harakatlanish yo’nalishidan qat’iy nazar, yo’l berishi kerak.\nBunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’iy nazar, teng ahamiyatli yo’lda bir yo’nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega."
  },
  {
    "id": 66,
    "biletId": 7,
    "text": "Harakatlanish kimga ruxsat etilgan?",
    "options": [
      "Barcha transport vositalariga",
      "Mototsiklga",
      "Avtomobil va mototsiklga"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i7_6.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining \no’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;"
  },
  {
    "id": 67,
    "biletId": 7,
    "text": "Qaysi yo’nalishda harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat chapga",
      "To’g’riga va o’ngga",
      "Faqat o’ngga",
      "Faqat to’g’riga"
    ],
    "correctAnswer": 0,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i7_7.webp",
    "explanation": "YHQ 3. Taqiqlovchi belgilar: 3.1. \"Kirish taqiqlangan\". Barcha transport vositalarining kirishi taqiqlanishini bildiradi."
  },
  {
    "id": 68,
    "biletId": 7,
    "text": "Agar transport vositasi o’lchamlari kattaligidan yoki boshqa sabablarga ko’ra chetki holatda burilishni bajara olmagan bo’lsa, bu qoidadan chetga chiqqan holda burilishga yo’l qo’yiladimi?",
    "options": [
      "Yo’l qo’yilmaydi",
      "Yo’l qo’yiladi, agar bu boshqa transport vositalariga xalaqit bermasa, harakat xavfsizligini ta’minlab, talablardan chetga chiqishi mumkin",
      "Aholi punktidan tashqaridagi yo’llarda yo’l qo’yiladi",
      "Yo’l qo’yiladi, lekin faqat chorrahada emas"
    ],
    "correctAnswer": 1,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 58-bandiga asosan: Agar transport vositasi o’zining gabaritlari (eng katta tashqi o'lchamlari) yoki boshqa sabablarga ko’ra (eng chekka tasmalardagi tirbandliklar bundan mustasno) Qoidalarning 56-bandi talablariga muvofiq burilishni bajara olmasa, harakat xavfsizligini ta’minlagan holda, boshqa transport vositalariga xalaqit bermasdan, talablardan chetga chiqishiga yo'l qo’yiladi. 56. Aylanma harakatlanish tashkil qilingan chorrahalarga kirish uchun burilishdan boshqa barcha hollarda, haydovchi o'ngga, chapga burilishi yoki qayrilib olishdan oldinroq shu yo’nalishda harakatlanishi uchun mo’ljallangan qatnov qismining eng chetki holatni egallashi shart."
  },
  {
    "id": 69,
    "biletId": 7,
    "text": "Qattiq ulagich transport vositalari orasida qanchadan ortiq bo’lmagan masofani ta’minlashi kerak?",
    "options": [
      "2 m",
      "3 m",
      "4 m",
      "5 m",
      "6 m"
    ],
    "correctAnswer": 2,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24-bobi 144-bandiga asosan: Egiluvchan ulagich bilan shatakka olishda shatakka olgan va shatakka olingan transport vositalari o’rtasidagi masofa 4 — 6 metr oralig'ida bo’lishi, qattiq ulagich yordamida shatakka olishda esa 4 metrdan ko'p bo’lmasligi kerak."
  },
  {
    "id": 70,
    "biletId": 7,
    "text": "Velosipedchilarga trotuarda harakatlanishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Piyodalar bo’lmaganda ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Velosiped, moped va aravalar harakatlanishiga, shuningdek hayvonlarni haydab otishga doir qoshimcha talablar",
    "explanation": "YHQ 28-bobi 166-bandining birinchi xatboshisiga asosan: Velosipedlar, individual harakatlanish vositalari, mopedlar, aravalar, miniladigan yoki yuk ortiladigan hayvonlarning yo’lning chetki o’ng bo’lagida imkoni boricha o’ng tomonidan bir qator bo’lib harakatlanishiga yo’l qo’yiladi. Agar piyodalarga xalaqit bermasa, yo’l yoqasidan harakatlanishga ham ruxsat etiladi."
  },
  {
    "id": 71,
    "biletId": 8,
    "text": "Shatakka olingan avtomobilda odamlarni tashishga ruxsat etiladimi?",
    "options": [
      "Avtobusda ruxsat etiladi",
      "Yengil avtomobilda ruxsat etiladi",
      "Qattiq ulagichda shatakka olingan yuk avtomobili yukxonasida ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24-bobi 143-bandiga asosan: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo’li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi.\n159. Odamlarni tashish quyidagi hollarda taqiqlanadi: bolalarni yuk avtomobillarining yukxonasida;\ntransport vositasining kabinasidan tashqarida (odam tashish uchun mo’ljallangan bortli yuk yoki furgon-yuk xonali avtomobillar bundan mustasno);\nTraktorlar va boshqa o’ziyurar uskunalar, yuk tashiladigan tirkamalar, tirkama-uycha, yuk mototsikllari, elektromototsikllar, mopedlar va skuterlar yukxonasida;\nMototsikllar, elektromototsikllar, mopedlar va skuterlarning konstruksiyasida ko’zda tutilgan joylardan tashqarida;\n12 yoshga to'lmagan bolalarni mototsiklning orqa o’rindig’ida, shuningdek bolalarni ushlab turuvchi maxsus qurilma o’rnatilmagan transport vositasining old o’rindig’ida;\nodam soni transport vositasining texnik tavsifnomasida ko’zda tutilgan miqdordan ortiq bo’lganda. Bunda transport vositasining haqiqiy vazni uni ishlab chiqargan korxona belgilagan ruxsat etilgan vazndan oshmasligi kerak."
  },
  {
    "id": 72,
    "biletId": 8,
    "text": "Bu joyda quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar quvib o'tilayotgan transportning tezligi 40 km/ soatdan kam bo’lsa ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Quvib o'tish",
    "imageUrl": "/images/questions/i8_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma oltinchi xatboshisiga asosan: 3.22. \"Yuk avtomobillarida quvib o’tish taqiqlangan\". To'liq vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillarida barcha transport vositalarini quvib o’tish taqiqlanishini bildiradi (soatiga 40 km dan kam tezlikda harakatlanayotgan transport vositasi, traktor, ot-arava, velosiped bundan mustasno).\nYHQ 1-ilovasi 7-bo'limining ikkinchi xatboshisiga asosan: 7.1.1. \"Obyektgacha bo'lgan masofa\". Belgidan yo’lning xavfli joyi, yo'l harakatiga tegishli cheklovlar kiritiladigan joyi yoki harakat yo’nalishi bo'yicha oldindagi muayyan joygacha bo'lgan masofani ko’rsatadi."
  },
  {
    "id": 73,
    "biletId": 8,
    "text": "Qaysi belgi \"T\" simon chorrahada harakatlanish yo'nalishini ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i8_3.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limi: 1.31.3. \"Burilishning yo'nalishi\". T-simon chorrahada yoki yo'l ayrilishlarida harakatlanish yo’nalishini, ta’mirlanayotgan yo’l qismini aylanib o’tish yo'nalishini bildiradi."
  },
  {
    "id": 74,
    "biletId": 8,
    "text": "Oldida transport vositasi to’xtab turgan tartibga solinmaydigan piyodalar o’tish joyiga yaqinlashib kelmoqdasiz. Siz nima qilishingiz kerak?",
    "options": [
      "Piyodalar o’tish joyidan o’tish",
      "Piyodalar o’tish joyidan to’xtamasdan o’tish, lekin alohida ehtiyotkorlik bilan",
      "Harakatni davom ettirish, lekin to’xtab turgan transport vositasi oldida piyodalar yo’qligiga ishonch hosil qilgan holda",
      "Albatta to’xtash, piyodalar paydo bo’lsa, ularni o’tkazib yuborish"
    ],
    "correctAnswer": 2,
    "category": "Piyodalarning otish joylari va yonalishli transport vositalarining bekatlari",
    "explanation": "YHQ 17-bobi 110-bandi: Agar tartibga solinmagan piyodalar o’tish joyi oldida transport vositasi harakatini sekinlashtirsa yoki to’xtasa, qo'shni tasmalarda harakatlanayotgan boshqa haydovchilar bu transport vositasi oldida ртуода (lаг) yo'qligiga ishonch hosil qilganlaridan so'nggina harakatlanishni davom ettirishlari mumkin."
  },
  {
    "id": 75,
    "biletId": 8,
    "text": "Qaysi transport vositalariga harakatlanish ruxsat etiladi?",
    "options": [
      "Yashil, ko’k va qora avtomobillarga",
      "Qizil, sariq va yashil avtomobillarga",
      "Yashil, ko’k va qizil"
    ],
    "correctAnswer": 2,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i8_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi: O'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o'tishga ruxsat etiladi."
  },
  {
    "id": 76,
    "biletId": 8,
    "text": "Transport vositalari chorrahadan quyidagi tartibda o’tadilar:",
    "options": [
      "Tramvay, avtobus va yengil avtomobil",
      "Avtobus, yengil avtomobil, tramvay",
      "Yengil avtomobil, tramvay, avtobus"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i8_6.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo'l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi."
  },
  {
    "id": 77,
    "biletId": 8,
    "text": "Qanday hollarda quvib o’tish taqiqlanadi?",
    "options": [
      "Tartibga solingan chorrahalarda",
      "Ko’priklarda, yo’l o’tkazgichlarda, estakadalarda va ularning ostida",
      "Piyodalar o’tish joylarida",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Quvib o'tish",
    "explanation": "YHQ 12-bobi 86-bandiga asosan: Quvib o’tish quyidagi hollarda taqiqlanadi:\ntartibga solingan chorrahalarda;\ntartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;\nko’priklarda, yo’l o’tkazgichlarda, estakadalarda va ularning ostida;\npiyodalar o’tish joylarida;\ntemir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda;\nquvib yoki aylanib o’tayotgan transport vositalarini;\ntepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;\n3.20 va 3.22 yo’l belgilari ta’sir oralig’ida."
  },
  {
    "id": 78,
    "biletId": 8,
    "text": "Kunduzgi vaqtda yaqinni yorituvchi fara chirog'ini yoqish ogohlantirish ishorasi bo’ladimi?",
    "options": [
      "Bo’ladi",
      "Bo’lmaydi"
    ],
    "correctAnswer": 0,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 44-bandiga asosan, quyidagilar ogohlantiruvchi ishoralar hisoblanadi: burilishni ko'rsatadigan miltillovchi chiroq yoki qo’l bilan beriladigan ishoralar;\ntovushli ishoralar;\nchiroqlarning yoqib o’chirilishi;\nkunduz kuni yaqinni yorituvchi chiroqlarning yoqilishi."
  },
  {
    "id": 79,
    "biletId": 8,
    "text": "Agar g’ildiraklardagi tortish kuchi yo’l bilan tishlashish kuchidan ortiq bo’lsa:",
    "options": [
      "Yurgizgich o’chib qoladi",
      "Ulagich detallarining yemirilishi ortadi",
      "Yetakchi g’ildiraklar o'rnidan jilmay aylanadi"
    ],
    "correctAnswer": 2,
    "category": "G'ildirak va shinalar",
    "explanation": "Joydan qo’zg’alayotgan vaqtda katta inersiya kuchi vujudga keladi va uni bartaraf qilish uchun yetaklovchi g’ildiraklarga katta tortish kuchini qo’shish lozim. Gorizontal yo'lda katta bo’lmagan tezlikda bir tekis harakat paytida qarshilik kuchi katta emas va uni bartaraf qilish uchun kamroq bortish kuchi yetarli. Ko'proq tortilganda boshqaruvchi g’ildiraklar o’rnidan jilmay aylanadi."
  },
  {
    "id": 80,
    "biletId": 8,
    "text": "Qayd etilgan qaysi hollarda transport vositalarini ekspluatatsiya qilishga ruxsat etiladi?",
    "options": [
      "Qo’shaloq shinalar orasiga xavf-xatar tug’diruvchi begona jismlar tiqilib qolgan",
      "Shina o’lchamlari yoki cheklangan og’irlik transport vositasining turiga mos kelmaydi",
      "M1; M2, M3 toifali 1 klass avtotransport vositalarining oldingi o’qiga 1 klassda ta’mirlangan shinalar qo’yilgan",
      "Barcha sanab o’tilgan hollarda ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Haydovchilarning umumiy majburiyatlari",
    "explanation": "YHQ 3-ilovasi 5-Bо’limining 5.7-bandiga asosan: М1, M2, МЗ toifalarni I klassidagi avtotransport vositalarini oldingi o’qiga, МЗ toifani II va III klassidagi avtotransport vositalarini o'rta va orqa o’qlariga ikkinchi ta’mirlash klassi bo'yicha qayta tiklangan shinalar o'rnatilgan bo'lsa foydalanish taqiqlanadi."
  },
  {
    "id": 81,
    "biletId": 9,
    "text": "Qaysi transport vositalariga ko’rsatilgan yo’nalishlar bo’yicha harakatlanishga ruxsat etiladi?",
    "options": [
      "Avtomobil haydovchisiga",
      "Avtomobil va mototsikl haydovchisi",
      "Tramvay va avtomobil haydovchisiga"
    ],
    "correctAnswer": 2,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i9_1.webp",
    "explanation": "YHQ 7-bobi 32-bandiga asosan: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doira shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi. Agar tegishli yo’l belgisi bilan qayrilib olish taqiqlanmagan bo'lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo’shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi. Qo'shimcha tarmoqdagi ishora o’chirilgan bo'lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi."
  },
  {
    "id": 82,
    "biletId": 9,
    "text": "Avtomobillarga qaysi yo’nalishda harakatlanishga ruxsat etiladi?",
    "options": [
      "Qizil avtomobilga - to’g’riga, ko’k avtomobilga - to’g’riga va chapga",
      "Qizil va ko’k avtomobilga - to’g’riga",
      "Qizil avtomobilga – to’g’riga, ko’kka - chapga va qayrilib olishga"
    ],
    "correctAnswer": 2,
    "category": "Yo'lning qatnov qismida transport vositalarining joylashuvi",
    "imageUrl": "/images/questions/i9_2.webp",
    "explanation": "YHQ 10-bobi 67-bandining uchinchi xatboshisiga asosan: Bir yo’nalishdagi uch va undan ortiq tasmali har qanday yo’lda chetki chap qatorni harakat serqatnovligi sababli boshqa bo’laklar band bo’lgan hollarda, shuningdek, quvib o’tish, chapga burilish yoki qayrilib olishga, yuk avtomobillariga faqat chapga burilish yoki qayrilib olish uchun chetki chap qatorni egallashga ruxsat etiladi.\nBoshqa hollarda yuk avtomobillariga yo’lning chetki chap qatorida harakatlanish taqiqlanadi."
  },
  {
    "id": 83,
    "biletId": 9,
    "text": "Ushbu holatda quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar quvib o’tilayotgan transport vositasi 40 km/ soadan kam tezlik bilan harakatlanayotgan bo’lsa, ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Quvib o'tish",
    "imageUrl": "/images/questions/i9_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining uchinchi xatboshisiga asosan: 1.1 — qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo'lning xavfli joylaridagi harakatlanish bo’lagi chegarasini bildiradi; yo’lning kirish taqiqlangan qismi chegarasini belgilaydi;\ntransport vositalarining to'xtab turish joyi chegarasini hamda avtomagistral qatoriga kiritilmagan yo'lning qatnov qismi chegarasini bildiradi.\nYHQ 2-ilovasi 1-bo’limining o'ttiz to’rtinchi xatboshisiga asosan: 1.1 va 1.3 chiziqlarini bosib o’tish taqiqlanadi, qatnov qismining chetini bildirish uchun qo’llanilgan 1.1 chizig’i bundan mustasno."
  },
  {
    "id": 84,
    "biletId": 9,
    "text": "Ushbu svetofor qaysi harakatlanishni tartibga solish uchun qo’llanadi?",
    "options": [
      "Qatnov qismining butun kengligi bo’yicha",
      "Qatnov qismidagi harakatlanish yo’nalishi qarama qarshi tomonga o’zgaradigan tasmalar bo’yicha",
      "Faqat belgilangan yo’nalishdagi transport vositalari uchun mo’ljallangan tasma bo’yicha"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i9_4.webp",
    "explanation": "YHQ 7-bobi 35-bandiga asosan: Qatnov qismidagi harakatlanish yo’nalishi qarama-qarshi tomonga o’zgarishi mumkin bo’lgan tasmalarida transport vositalarining harakatlanishini tartibga solish uchun X-simon qizil ishorali va pastga yo’nalgan ko’rsatkich ko’rinishidagi yashil ishorali reversiv svetoforlar qo’llaniladi. Bu ishoralar qaysi tasma ustiga o’rnatilgan bo’lsa, unda harakatlanishni taqiqlaydi yoki harakatlanishga ruxsat beradi.\nIkki tomoni 1.9 yo’l chizig’i bilan belgilangan tasma ustiga o’rnatilgan va ishoralari o’chirilgan reversiv svetofor shu tasmaga kirishni taqiqlaydi."
  },
  {
    "id": 85,
    "biletId": 9,
    "text": "Transport vositalari chorrahadan quyidagi tartibda o’tadilar:",
    "options": [
      "Qizil avtomobil, tramvay, yashil, ko’k avtomobil",
      "Tramvay, qizil, ko’k, yashil avtomobil",
      "Tramvay, qizil, yashil, ko’k avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i9_5.webp",
    "explanation": "YHQ 16-bobi 104-Bandiga asosan: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo'nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 86,
    "biletId": 9,
    "text": "Ko’rsatilgan avtotsisternalardan qaysi biri burilishda ag’darilib ketish xavfi kamroq, turg’unroq?",
    "options": [
      "Suyuqlik bilan 75 foizgacha to’ldirilgani",
      "Suyuqlik bilan to’liq to’ldirilgani"
    ],
    "correctAnswer": 1,
    "category": "Yuk tashish",
    "imageUrl": "/images/questions/i9_6.webp",
    "explanation": "Yuk avtomobilining muvozanati yo’qolishiga mahkamlanmagan yuk sabab bo’ladi. Burilishdagi harakat vaqtida mahkamlanmagan yuk, yuk platformasidan ko'chib, bortlariga urilishi va avtomobilning ag’darilishiga sabab bo’lishi mumkin. O’xshash holat suyuq yuk ortgan sisternali avtomobillari harakatlanishida ham yuzaga keladi. Suyuq yuk ortgan avtomobillarning burilishlarda harakatlanishi jarayonida yukning bir bortdan ikkinchi bortga ko’chishi yuzaga keladi. Suyuq yuk tebranib bortlarga urilishi natijasida avtomobilning muvozanati yo’qolishiga olib keladi."
  },
  {
    "id": 87,
    "biletId": 9,
    "text": "Shunday yo’l belgisi bo’lgan yo’l qismlarida ruxsat etilgan to’la vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga qanday eng katta tezlik bilan harakat qilishga ruxsat etiladi?",
    "options": [
      "110 km/s",
      "70 km/s",
      "100 km/s",
      "90 km/s",
      "60 km/s"
    ],
    "correctAnswer": 2,
    "category": "Harakatlanish tezligi",
    "imageUrl": "/images/questions/i9_7.webp",
    "explanation": "YHQ 11-bobi 79-bandining birinchi xatboshisiga asosan, aholi punktlaridan tashqarida: yengil avtomobillarga va ruxsat etilgan to'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga tezlikni soatiga 100 kilometrdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 88,
    "biletId": 9,
    "text": "To’xtagan transport vositasi bilan yotiq sidirg’a chiziq orasidagi masofa qancha bo’lganida to’xtash taqiqlanadi?",
    "options": [
      "6 m",
      "5,5 m",
      "4 m",
      "3,5 m",
      "2,5 m"
    ],
    "correctAnswer": 4,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i9_8.webp",
    "explanation": "YHQ 13-bobi 91-bandining to’rtinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: to'xtagan transport vositasi bilan sidirg’a chiziq (qatnov qismining chetini belgilovchi chiziqdan tashqari), ajratuvchi mintaqa yoki qatnov qismining qarama-qarshi cheti orasidagi masofa 3 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 89,
    "biletId": 9,
    "text": "Harakat tezligi ikki marta oshganda, tormozlanish yo’li necha marta ortadi?",
    "options": [
      "Tormoz yo’li harakat tezligiga bog’liq emas",
      "Uch marta",
      "To’rt marta",
      "Ikki marta"
    ],
    "correctAnswer": 2,
    "category": "Harakatlanish tezligi",
    "explanation": "Tormoz yo’li kattaligini quyidagi formula orqali aniqlash mumkin: 5=ke*va^2/2gp bunda\nS - tormoz yo’li;\nke – avtomobilning ushbu yo’lda mumkin qadar haqiqiy sekinlashishi nazariy sekinlashishdan necha barobar kamligini ko'rsatuvchi tormozlanish samaradorligi koeffitsienti;\nva – avtomobil harakatining boshlang’ich tezligi;\nр - shinaning yo'l bilan tishlashish koeffitsienti.\nUshbu formuladan ko’rinadiki, tormoz yo’lining kattaligi tormozlanishdan avval harakatlanayotgan avtomobil tezligi kvadratiga nisbatan mutanosibdir. Shu bois harakat tezligi ikki barobar ko’paysa, tormoz yo’li to'rt barobar ko’payadi."
  },
  {
    "id": 90,
    "biletId": 9,
    "text": "Bir tirkamali avtopoyezdning qanday eng katta uzunligida DYHXX ruxsatisiz harakatlanishga yo’l qo’yiladi?",
    "options": [
      "16 m",
      "18 m",
      "20 m",
      "22 m",
      "24 m"
    ],
    "correctAnswer": 2,
    "category": "Yuk tashish",
    "explanation": "YHQ 27-bobi 164-bandining birinchi xatboshisiga asosan: O’ta og’ir, katta o’lchamli va xavfli yuklarni tashishda gabarit o'lchamlari yukli yoki yuksiz holda eni bo’yicha 2,55 (refrijeratorlar va izotermik kuzovlar uchun — 2,6) metrdan va balandligi bo'yicha yo’l sathidan 4 metrdan, uzunligi bo'yicha yakka avtotransport vositasi uchun — 12 metrdan, tirkama uchun — 12 metrdan, yarimtirkamali avtopoezd uchun — 20 metrdan, tirkamali avtopoezd uchun — 20 metrdan ortiq bo'lgan yoki yuki transport vositasining oldi va orqa nuqtasidan 2 metrdan ortiq chiqib turgan transport vositalarining harakatlanishi belgilangan tartibda DYHXX bilan kelishilgan bo’lishi kerak."
  },
  {
    "id": 91,
    "biletId": 10,
    "text": "Qizil avtomobilning haydovchisi miltillovchi chiroq-mayoqchali va maxsus tovushli ishora yoqilgan transport vositasi yaqinlashib kelayotganda nima qilishi kerak?",
    "options": [
      "Harakat bo’lagini o’zgartirmasdan to’xtashi va majburiy to’xtash chiroqlarini yoqishi",
      "Tezlikni pasaytirishi va boshqa qatorga o’tish bilan bog’lik keskin manyovrlarga yo’l qo’ymasdan harakatni davom ettirishi",
      "Yo’l berishi"
    ],
    "correctAnswer": 2,
    "category": "Maxsus transport vositalarining imtiyozlari",
    "imageUrl": "/images/questions/i10_1.webp",
    "explanation": "YHQ 6-bobi 26-bandiga asosan: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi."
  },
  {
    "id": 92,
    "biletId": 10,
    "text": "Mazkur belgi bilan belgilangan hududda qanday cheklovlar o’rnatilgan?",
    "options": [
      "Harakat tezligini 5 km/s dan oshmasligi kerakligini bildiradi",
      "Transport vositalarini boshqarishni o’rgatish",
      "Kirib, chiqib ketish harakati taqiqlanadi",
      "Yengil avtomobillarni tunda to’xtab turishini taqiqlaydi"
    ],
    "correctAnswer": 1,
    "category": "Turar joy dahalarida harakatlanish",
    "imageUrl": "/images/questions/i10_2.webp",
    "explanation": "YHQ 20-bobi 124-bandining birinchi xatboshisiga asosan, turar joy dahalarida quyidagilar taqiqlanadi: mexanik transport vositalarini boshqarishni o’rgatish."
  },
  {
    "id": 93,
    "biletId": 10,
    "text": "Qaysi belgi teng ahamiyatli yo’llar kesishish chorrahasiga yaqinlashib kelayotganlik haqida ogohlantiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 4,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i10_3.webp",
    "explanation": "YHQ 1-ilovasining 1-Bo’limining o'n birinchi xatboshisiga asosan: 1.6. \"Teng ahamiyatli yo’llar kesishuvi\"."
  },
  {
    "id": 94,
    "biletId": 10,
    "text": "Svetoforning taqiqlovchi ishorasida va shlagbaum ochiq bo’lganda haydovchi nima qilishi kerak?",
    "options": [
      "Yaqinlashib kelayotgan poyezd yo’qligiga shaxsan ishonch hosil qilishi va kesishmadan o’tishi kerak",
      "Shlagbaumning holatiga asoslangan holda kesishmadan o’tishi kerak",
      "Shlagbaumgacha 10 metrdan yaqin bo’lmagan masofada to’xtash",
      "To’xtash chizig’i oldida, \"To’xtamasdan harakatlanish taqiqlangan\" belgisi oldida, agar ular yo’q bo’lsa shlagbaumgacha 5 metrdan yaqin bo’lmagan masofada to’xtash"
    ],
    "correctAnswer": 3,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "explanation": "YHQ 18-bobi 118-bandining ikkinchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: shlagbaum holatidan qat’i nazar, svetoforning taqiqlovchi ishorasida.\nYHQ 18-bobi 119-bandiga asosan: Kesishma orqali harakatlanish taqiqlangan hollarda haydovchi to’xtash chizig’i, 2.5 yo'l belgisi yoki svetofor oldida, ular bo’lmaganda shlagbaumga kamida 5 metr, shlagbaum bo’lmaganda esa birinchi temir yo'l iziga kamida 10 metr qolganda to’xtashi kerak."
  },
  {
    "id": 95,
    "biletId": 10,
    "text": "Chorrahadan ikkinchi bo’lib kim o’tadi?",
    "options": [
      "Tramvay",
      "Qizil avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i10_5.webp",
    "explanation": "YHQ 16-bobi 104-Bandiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo'nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 96,
    "biletId": 10,
    "text": "Qanday hollarda haydovchisi bo’lmagan transport vositalarini shatakka olish mumkin?",
    "options": [
      "Barcha hollarda",
      "Egiluvchan yoki qattiq ulagichda shatakka olishda",
      "Qattiq ulagichning tuzilishi shatakka olingan transport vositalarini shatakka olgan transport vositalarining izidan harakatlanishini ta’minlaganda",
      "Qattiq ulagichda shatakka olishda"
    ],
    "correctAnswer": 2,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24-bobi 142-bandiga asosan: Qattiq yoki egiluvchan ulagich yordamida shatakka olish shatakka olingan transport vositasining rul boshqaruvida haydovchi bo’lgandagina amalga oshirilishi kerak, to'g’ri chiziq bo’ylab harakatlanganda qattiq ulagichning konstruksiyasi shatakka olingan transport vositasini shatakka olgan transport vositasining izidan borishini ta’minlaydigan hollar bundan mustasno."
  },
  {
    "id": 97,
    "biletId": 10,
    "text": "Bu yerda quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Quvib o'tish",
    "imageUrl": "/images/questions/i10_7.webp",
    "explanation": "YHQ 12-bobi 86-bandining oltinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: tepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;"
  },
  {
    "id": 98,
    "biletId": 10,
    "text": "Qaysi ishoralar ogohlantiruvchi hisoblanadi?",
    "options": [
      "Burilishni ko’rsatadigan miltillovchi chiroq yoki qo’l bilan beriladigan ishoralar",
      "Tovushli ishoralar",
      "Fara chiroqlarini yoqib-o’chirilishi va kunduzgi vaqtda yaqinni yorituvchi fara chirog’ining yoqilishi",
      "Sanab o’tilgan barcha ishoralar"
    ],
    "correctAnswer": 3,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 44-bandiga asosan, quyidagilar ogohlantiruvchi ishoralar hisoblanadi: burilishni ko'rsatadigan miltillovchi chiroq yoki qo’l bilan beriladigan ishoralar;\ntovushli ishoralar; chiroqlarning yoqib o’chirilishi;\nkunduz kuni yaqinni yorituvchi chiroqlarning yoqilishi."
  },
  {
    "id": 99,
    "biletId": 10,
    "text": "Boshqarishni o’rgatishdagi transport vositasi qanday jihozlangan bo’lishi kerak?",
    "options": [
      "Qoidalarning talablariga asosan, taniqlik belgilari bilan",
      "Ulagich (ssepleniye) va ishchi tormozining qo’shimcha tepkilari bilan",
      "O’rgatuvchi uchun orqani ko’rsatuvchi ko'zgu bilan",
      "Sanab o’tilgan barcha jihozlar va belgilar bilan"
    ],
    "correctAnswer": 3,
    "category": "Transport vositalarini boshqarishni orgatish",
    "explanation": "YHQ 25-bobi 150-bandiga asosan: Boshqarishni o’rgatish uchun mo’ljallangan mexanik transport vositalari “Boshqarishni o’rgatish transport vositasi” taniqlik belgisi va o’rgatuvchi uchun ulagich (ssepleniye) va tormozning qo’shimcha tepkilari, orqani ko’rsatuvchi ko’zgu hamda ushbu transport vositalarining harakat yo’nalishini nazorat qilish imkonini beradigan GPS qurilmalari bilan jihozlanishi kerak."
  },
  {
    "id": 100,
    "biletId": 10,
    "text": "Sanab o’tilgan holatlarning qaysilarida transport vositasidan foydalanish taqiqlanadi?",
    "options": [
      "Pnevmatik tormoz yuritmasining manometri ishlamaydi",
      "Mototsiklning boshqaruv dempferi nosoz",
      "M1 toifasidagi transport vositasining rul boshqarmasi lyuft yig’indisi 10 gradusdan ortiq",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Tormoz tizimlari",
    "explanation": "YHQ 3-ilovasi 1-bo’limining 1.5-bandiga asosan: Pnevmatik yoki pnevmogidravlik tormoz yuritmasining manometri ishlamasa foydalanish taqiqlanadi.\nYHQ 3-ilovasi 2-bo’limining 2.1 va 2.3-bandlariga asosan: Boshqaruv qurilmasidagi lyuft yig’indisi reglament (qat’iy belgilangan) sharoitlardagi sinovlarda quyidagi ko’rsatkichdan katta bo'lmasligi kerak: M1 - 10%\nM2, M3, N1 - 20%\nN2, N3 - 25%."
  },
  {
    "id": 101,
    "biletId": 11,
    "text": "Avtomobil qaysi yo’nalishlarda harakatlanishi mumkin?",
    "options": [
      "Faqat o’ngga",
      "To’xtash va svetoforning yashil chirog’ini kutish",
      "Faqat to’g’riga",
      "Barcha yo’nalishlar bo’yicha"
    ],
    "correctAnswer": 3,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i11_1.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining o'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonidan qatnov qismini kesib o'tishga ruxsat etiladi."
  },
  {
    "id": 102,
    "biletId": 11,
    "text": "Bu belgi nimani bildiradi?",
    "options": [
      "Ro’paradan kelayotgan transport vositalariga nisbatan birinchi o’tish huquqini beradi",
      "Haydovchi ro’paradan harakatlanayotgan transport vositalariga yo’l berishi kerak",
      "Bir tomonlama harakatli yo’l qatnov qismi tamom bo’lganligini bildiradi"
    ],
    "correctAnswer": 1,
    "category": "Imtiyoz belgilari",
    "imageUrl": "/images/questions/i11_2.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’limining o’ninchi xatboshisiga asosan: 2.6. \"Ro’para harakatlanishning ustunligi\". Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo’lning tor qismiga kirish taqiqlanadi. Haydovchi yo'lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 103,
    "biletId": 11,
    "text": "Haydovchiga belgilangan trayektoriya bo’yicha harakatlanib, manyovrlar bajarishga ruxsat berilganmi?",
    "options": [
      "\"A\" bo’yicha ruxsat etilgan",
      "\"Б\" bo’yicha ruxsat etilgan",
      "Ikkovi bo’yicha ham ruxsat etilgan"
    ],
    "correctAnswer": 2,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i11_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yettinchi, sakkizinchi va o’ttiz beshinchi xatboshlariga asosan: 1.5 — ikki yoki uch tasmali yo’llarda qarama-qarshi yo’nalishlarda harakatlanayotgan transport vositalari oqimlarini ajratadi; bir yo’nalishda harakatlanish uchun mo’ljallangan ikki yoki undan ko’proq tasmali yo’llarda tasmalarning chegaralarini va bir yo’nalishdagi harakatlanish bo’lagi bilan velosiped bo’lagi chegarasini bildiradi;\n1.6 (yaqinlashish chizig’i — har bir chiziq uzunligi ular orasidagi masofadan uch barobar katta bo’lgan uzuq-uzuq chiziq) — qarama-qarshi yoki bir yo’nalishda harakatlanayotgan transport vositalari oqimlarini ajratuvchi 1.1 yoki 1.11 chizig’iga yaqinlashayotganlik haqida ogohlantiradi;\nYHQ 2-ilovasi 1-bo’limining o’ttiz beshinchi xatboshisiga asosan: 1.2, 1.5 — 1.8 chiziqlarini istalgan tomondan bosib o'tish mumkin."
  },
  {
    "id": 104,
    "biletId": 11,
    "text": "Ushbu svetofor qaysi yo’nalishda harakatlanishni taqiqlaydi?",
    "options": [
      "Faqat chapga",
      "To’g’riga va chapga",
      "To’g’riga va o’ngga",
      "Faqat o’ngga"
    ],
    "correctAnswer": 0,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i11_4.webp",
    "explanation": "YHQ 7-bobi 36-bandiga asosan: Tramvaylarning hamda maxsus ajratilgan tasma bo’ylab harakatlanayotgan boshqa yo’nalishli transport vositalarining harakatlanishini tartibga solish uchun “T” harfi ko’rinishida joylashgan to’rtta doirasimon oq rang ishorali svetoforlar qo’llanilishi mumkin.\nYuqoridagi bir yoki bir nechta va pastki ishora bir vaqtning o’zida yonganda, harakatlanishga ruxsat etiladi. Ulardan chapdagisi chapga, o’ngdagisi o’ngga, o’rtadagisi to’g’riga yurishga ruxsat beradi. Pastdagi ishora o’chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi."
  },
  {
    "id": 105,
    "biletId": 11,
    "text": "Qizil avtomobil:",
    "options": [
      "Ko’k avtomobilga nisbatan ustunlikka ega, chunki asosiy yo’ldan ketmoqda",
      "Ko’k avtomobilga nisbatan ustunlikka ega, chunki aylanma harakatli yo’ldan ketmoqda",
      "Chorrahaga o’ng tomondan yaqinlashib kelgan ko’k avtomobilga yo’l berishi kerak"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i11_5.webp",
    "explanation": "YHQ 14-bobi 98-bandi: Aylanma harakatlanish chorrahasida harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga) ega."
  },
  {
    "id": 106,
    "biletId": 11,
    "text": "Yetarli ko’rinmaslik sharoitida yo’lning yoritilmagan qismida to’xtagan yoki to’xtab turgan mexanik transport vositasining haydovchisi bajarishi kerak:",
    "options": [
      "Tumanga qarshi faralarni yoki yaqinni yoritish faralarini yoqishi",
      "Faralarning uzoqni yoritish chiroqlarini yoqishi",
      "Gabarit chiroqlarini yoqishi"
    ],
    "correctAnswer": 2,
    "category": "To'xtash va to'xtab turish",
    "explanation": "YHQ 23-bobi 136-bandiga asosan: Qorong’i vaqtda yo’lning yoritilmagan qismida, shuningdek yetarlicha ko’rinmaydigan sharoitda to’xtagan yoki to’xtab turgan transport vositasida gabarit chiroqlari yoqilgan bo’lishi kerak."
  },
  {
    "id": 107,
    "biletId": 11,
    "text": "Transport vositasi qachon faqat o’ng chetki qatoridan harakatlanishi kerak?",
    "options": [
      "Og’ir vaznli va yirik o’lchamli yuklarni tashishda",
      "Agar haydovchi o’zini betob his qilsa",
      "Agar harakatlanish vaqtida mahkamlangan yuk bo’shashib ketsa",
      "Transport vositasi texnikaviy sabablarga ko’ra 40 km/s.dan ortiq tezlikda yura olmasa"
    ],
    "correctAnswer": 3,
    "category": "Harakatlanish tezligi",
    "explanation": "YHQ 10-bobi 68-bandiga asosan: Tezligini soatiga 40 kilometrdan oshirishi mumkin bo’lmagan yoki texnik sabablarga ko’ra tezligini bundan oshira olmaydigan transport vositalari aylanib o’tish, quvib o’tish, chapga burilish yoki qayrilib olish uchun qayta tizilishdan yoki ruxsat etilgan hollarda yo’lning chap tomonida to’xtashdan boshqa hollarda faqat chetki o’ng qatorida harakatlanishlari kerak."
  },
  {
    "id": 108,
    "biletId": 11,
    "text": "Ogohlantirish ishorasini berish haydovchiga birinchi harakatlanish huquqini beradimi?",
    "options": [
      "Bermaydi",
      "Manyovrni tugatish vaqtida beradi",
      "Manyovrni boshlash vaqtida beradi",
      "Hamma hollarda beradi"
    ],
    "correctAnswer": 0,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 46-bandining uchinchi xatboshisiga asosan: Ogohlantiruvchi ishora berish haydovchiga oldin o’tish huquqini bermaydi va uni zaruriy ehtiyot choralarini ko'rish mas’uliyatidan ozod etmaydi."
  },
  {
    "id": 109,
    "biletId": 11,
    "text": "Qoidalarga ko’ra shatakka olish vaqtida bir-biriga ulangan transport vositalari tarkibining qanday umumiy uzunligiga yo’l qo’yiladi?",
    "options": [
      "20 m",
      "21 m",
      "22 m",
      "23 m",
      "24 m"
    ],
    "correctAnswer": 0,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24 bobi 145-bandning 3-xatboshiga asosan, Shatakka olish quyidagi holatlarda taqiqlanadi: rul boshqaruvi ishlamayotgan transport vositalarini (qisman ortish usuli bilan shatakka olish bundan mustasno);\nikki va undan ko’p transport vositalarini; shatakka olingan va shatakka olgan transport vositalarining ulagich bilan birga umumiy uzunligi 20 metrdan ortiq bo’lsa."
  },
  {
    "id": 110,
    "biletId": 11,
    "text": "Qoidalar bo’yicha necha yoshdan boshlab yengil avtomobilni boshqarishga ruxsat etiladi?",
    "options": [
      "14 yoshdan",
      "16 yoshdan",
      "18 yoshdan"
    ],
    "correctAnswer": 2,
    "category": "Transport vositalarini boshqarishni orgatish",
    "explanation": "YHQ 25-bobi 149-bandiga asosan: O’rganuvchi o'quv muddati yakunida \"A\" toifadagi avtomototransport vositalarini boshqarish huquqiga ega bo’lishi uchun — 16 yoshga, \"V\" va \"S\" toifalari uchun — 18 yoshga, \"D\" toifasi hamda tramvay va trolleybuslarni boshqarish uchun 21 yoshga to'lgan bo’lishi kerak."
  },
  {
    "id": 111,
    "biletId": 12,
    "text": "Qaysi hollarda bir yo’nalishda harakatlanish uchun uchtadan kam tasmasi bo’lgan yo’lda to’xtash va to’xtab turish taqiqlanadi?",
    "options": [
      "Ko’priklarda, estakadalarda va yo’l o’tkazgichda",
      "Ko’priklar, estakadalar va yo’l o’tkazgich ostida",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "To'xtash va to'xtab turish",
    "explanation": "YHQ 13-bobi 91-bandiga asosan: Quyidagilarda to’xtash taqiqlanadi: tramvay yo’llarida, shuningdek, bevosita ularga yaqinroqda tramvaylar harakatlanishiga xalaqit beradigan hollarda;\ntemir yo’l kesishmalarida;\ntunnellarda;\nbir yo'nalishda harakatlanish uchun uchtadan kam tasmaga ega bo’lgan ko’prik, yo'l o’tkazgich va estakadalarning ustida;\nko’prik, yo’l o’tkazgich va estkadalarning ostida (tegishli yo’l belgilari bilan to’xtab turish ruxsat berilgan yo’l qismlari bundan mustasno);"
  },
  {
    "id": 112,
    "biletId": 12,
    "text": "Haydovchi tormozlanishda boshlangan avtomobilning sirpanib ketishini to’xtatish uchun bajarishi kerak",
    "options": [
      "Boshlangan tormozlashni to’xtatish",
      "Uzgichni ajratishi",
      "Tormoz tepkisini oxirigacha bosishi",
      "Uzgichni ajratishi va to’xtab turish tormozi bilan tormozlashi"
    ],
    "correctAnswer": 0,
    "category": "Tormoz tizimlari",
    "explanation": "Avtomobilning sirpanchiq yo'lda surilish va orqa g’ildiraklarining blokirovkasi sababli tormozlashda vujudga keladi. Bu holda birinchi navbatda surilish sababini bartaraf etish, ya’ni boshlangan tormozlanishni to'xtatish lozim. Keyinchalik rul chambaragini surilish tomon burib, harakat yo’nalishini to’g’rilab olish mumkin."
  },
  {
    "id": 113,
    "biletId": 12,
    "text": "Haydovchiga transport vositalarining to’xtab turish joylari chegarasini bildiradigan uzluksiz chiziqni kesib o’tishga ruxsat etiladimi?",
    "options": [
      "To’xtash uchun ruxsat etiladi",
      "Taqiqlanadi",
      "Kirish va chiqish uchun ruxsat etiladi",
      "Hamma hollarda ruxsat etiladi, agar to’xtab turish joyida boshqa transport vositalari yo’q bo’lsa"
    ],
    "correctAnswer": 1,
    "category": "Yotiq chiziqlar",
    "imageUrl": "/images/questions/i12_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining uchinchi va o’ttiz to’rtinchi xatboshlariga asosan: 1.1— qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo'lning xavfli joylaridagi harakatlanish bo’lagi chegarasini bildiradi; yo’lning kirish taqiqlangan qismi chegarasini belgilaydi;\ntransport vositalarining to’xtab turish joyi chegarasini hamda avtomagistral qatoriga kiritilmagan yo'lning qatnov qismi chegarasini bildiradi. 1.1 va 1.3 chiziqlarini bosib o’tish taqiqlanadi, qatnov qismining chetini bildirish uchun qo'llanilgan 1.1 chizig'i bundan mustasno."
  },
  {
    "id": 114,
    "biletId": 12,
    "text": "Yopiq shlagbaum oldida turgan transport vositalarini aylanib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi, agar ro’paradan kelayotgan transport vositalari yo’q bo’lsa",
      "Faqat yon kajavasiz mototsikllarga ruxsat etiladi",
      "Agar aylanib o’tayotgan transport vositasining tezligi 8 km/soatdan kam bo’lsa taqiqlanadi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 3,
    "category": "Temir yo'l kesishmalari orqali harakatlanish",
    "explanation": "YHQ 18-bobi 118-bandining yettinchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: kesishma oldida turgan transport vositalarini qarama-qarshi harakatlanish bo’lagiga chiqib aylanib o’tish."
  },
  {
    "id": 115,
    "biletId": 12,
    "text": "Chorrahadan uchinchi bo’lib qaysi avtomobil o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Sariq avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i12_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 116,
    "biletId": 12,
    "text": "Haydovchi piyodalarga qachon yo’l berishi kerak?",
    "options": [
      "Hovlidan yo’lga chiqishda",
      "Yo’ldan hovliga kirishda",
      "Yonilg’i shoxobchasidan yo’lga chiqishda",
      "To’xtab turish joyidan yo’lga chiqishda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 4,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 54-bandiga asosan: Yondosh hududlardan yo’lga chiqayotgan haydovchi unda harakatlanayotgan transport vositalari va piyodalarga, shuningdek yo'ldan chiqishda harakat yo’nalishini kesib o’tayotgan piyodalar va velosipedchilarga yo'l berishi kerak."
  },
  {
    "id": 117,
    "biletId": 12,
    "text": "Ko’rsatilgan holatda yengil avtomobilga to’xtab turishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i12_7.webp",
    "explanation": "YHQ 13-bobi 91-bandining o'ninchi xatboshisiga asosan, quyidagi joy va holatlarda to'xtash taqiqlanadi: transport vositasi svetofor ishoralari, yo’l belgilarini boshqa haydovchilardan to’sib qo’yadigan, boshqa transport vositalarining harakatlanishiga (kirish va chiqishiga) imkon qoldirmaydigan yoki piyodalarning harakatiga xalaqit beradigan joylarda."
  },
  {
    "id": 118,
    "biletId": 12,
    "text": "Yuk tashish taqiqlanadi, agar:",
    "options": [
      "Yuk enining chekka nuqtasi oldingi yoki orqa gabarit chirog’ining tashqi chekkasidan 0,4 metrdan ortiq chiqib tursa",
      "Yuk transport vositasining gabaritlaridan 1 metrdan ortiq chiqib tursa",
      "Tashilayotgan yuk vazni shu transport vositasi uchun ishlab chiqargan korxona belgilagan kattalikdan ortiq bo’lsa",
      "Barcha aytilgan hollarda"
    ],
    "correctAnswer": 2,
    "category": "Yuk tashish",
    "explanation": "YHQ 27-bobi 160-bandiga asosan: Tashilayotgan yukning vazni va o’qlarga tushadigan og’irlik miqdorining taqsimlanishi ishlab chiqargan korxona tomonidan ushbu transport vositasi uchun belgilangan miqdordan oshmasligi kerak."
  },
  {
    "id": 119,
    "biletId": 12,
    "text": "Avtomobilning yon tomonga sirpanib ketishi nima sababdan ro’y berishi mumkin?",
    "options": [
      "Faqat birdaniga keskin burilish sababli",
      "Faqat birdaniga keskin tormozlash sababli",
      "Birdaniga keskin tezlik olish va keskin tormozlash sababli",
      "Hamma sanab o’tilgan hollarda"
    ],
    "correctAnswer": 3,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "Avtomobilning yon tomonga sirpanib ketishiga quydagi omillar sababli ro’y beradi: avtomobil rulini birdaniga keskin burish, keskin tormozlash hamda avtomobil tezligini keskin oshirish."
  },
  {
    "id": 120,
    "biletId": 12,
    "text": "N2; N3 toifadagi avtotransport vositalarining boshqaruv qurilmasida qanday eng katta umumiy lyuft yig’indisiga yo’l qo’yiladi?",
    "options": [
      "16°",
      "20°",
      "25°",
      "26°",
      "30°"
    ],
    "correctAnswer": 2,
    "category": "Boshqaruv qurilmasi",
    "explanation": "YHQ 3-ilovasi 2-bo’limining 2.1-bandiga asosan: Boshqaruv qurilmasidagi lyuft yig'indisi reglament (qat’iy belgilangan) sharoitlardagi sinovlarda quyidagi ko’rsatkichdan katta bo'lmasligi kerak."
  },
  {
    "id": 121,
    "biletId": 13,
    "text": "Chorrahani ikkinchi bo’lib kesib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i13_1.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 122,
    "biletId": 13,
    "text": "Qaysi transport vositalarining haydovchilari qoidani buzib to’xtadi?",
    "options": [
      "Faqat \"A\"",
      "Faqat \"Б\"",
      "Faqat \"В\"",
      "\"Б\" va \"В\"",
      "\"A\" va \"Б\""
    ],
    "correctAnswer": 4,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i13_2.webp",
    "explanation": "YHQ 13-bobi 88-bandining birinchi va uchinchi xatboshlariga asosan: Transport vositalariga yo’lning o'ng tomoni yoqasida, u bo’lmaganda esa qatnov qismining chetida va ushbu Qoidalarning 89-bandida ko’rsatilgan hollarda trotuarda to'xtash va to'xtab turishga ruxsat etiladi. Ruxsat etilgan to'la vazni 3,5 tonnadan ko’p bo'lgan yuk avtomobillari bir tomonlama harakatli yo'llarning chap tomonida faqat yuk ortish va tushirish uchun to’xtashlari mumkin.\nYHQ 13-bobi 89-bandining birinchi xatboshisiga asosan: Transport vositalarini yo’lning qatnov qismida bir qator qilib, qatnov qismi chetiga parallel ravishda kajavasi bo’lmagan ikki g'ildirakli transport vositalarini ikki qator qilib qo’yishga ruxsat etiladi."
  },
  {
    "id": 123,
    "biletId": 13,
    "text": "Qaysi belgi kesib o’tgan yo’llarda harakatlanayotgan transport vositalariga yo’l berishni yuklaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Imtiyoz belgilari",
    "imageUrl": "/images/questions/i13_3.webp",
    "explanation": "YHQ 1-ilovasi 2-Bo’limining yettinchi xatboshisiga asosan: 2.4. \"Yo’l bering!\". Haydovchi kesib o’tilayotgan yo’ldan, harakatlanayotgan transport vositasiga yo'l berishi kerak."
  },
  {
    "id": 124,
    "biletId": 13,
    "text": "Temir yo’l kesishmasida umumiy xatar ishorasi sifatida quyidagi ishoralar turkumi xizmat qiladi:",
    "options": [
      "Ikkita uzun va ikkita qisqa tovush ishoralari",
      "Bitta uzun va uchta qisqa tovush ishoralari",
      "Uchta uzun va uchta qisqa tovush ishoralari",
      "Uchta uzun va bitta qisqa tovush ishorasi"
    ],
    "correctAnswer": 1,
    "category": "Temir yo'l kesishmalari orqali harakatlanish",
    "explanation": "YHQ 18-bobi 120-bandining yettinchi xatboshisiga asosan: Umumiy xatar ishorasi bo’lib, berilgan bitta uzun va uchta qisqa tovush seriyasi xizmat qiladi."
  },
  {
    "id": 125,
    "biletId": 13,
    "text": "Qaysi javobda chorrahadan o’tish tartibi to’g’ri ko’rsatilgan?",
    "options": [
      "Avtobus, avtomobil, velosiped",
      "Avtomobil, avtobus, velosiped",
      "Velosiped, avtobus, avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i13_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 126,
    "biletId": 13,
    "text": "Haydovchi orqa g’ildiraklari yetakchi bo’lgan avtomobilning orqa o’qi sirpanib ketishi boshlanganida to’xtatish uchun nima qilishi kerak?",
    "options": [
      "Boshqaruv rulini sirpanishga qarama-qarshi tomonga burish",
      "Boshqaruv rulini sirpanish boshlanayotgan tomonga burish",
      "Tormoz tepkisini bosish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i13_6.webp",
    "explanation": "Orqa o’qi yetakchi bo'lgan avtomobillarda sirpanchiq yo'lda sirpanish holati rul chambaragini birdan (keskin) burish natijasida kelib chiqadi. Bu holda rul chambaragini tez, biroq ravonlik bilan sirpanish tomon burib, sirpanish tugashini kutmasdan, rul chambaragiga oldinroq ta’sir etgan holda avtomobil yo’nalishini to’g’irlab olish lozim."
  },
  {
    "id": 127,
    "biletId": 13,
    "text": "Ko’rsatilgan holatda o’zib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Quvib o'tish",
    "imageUrl": "/images/questions/i13_7.webp",
    "explanation": "YHQ umumiy qoidalar: O’zib ketish — transport vositasining o’tayotgan transport vositasining tezligidan yuqori tezlikda o’zib ketish. \nYHQ 12-bobi 86-bandining to’rtinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: temir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda."
  },
  {
    "id": 128,
    "biletId": 13,
    "text": "Haydovchi aholi punktlaridan tashqaridagi yo’lda quvib o’tilayotgan haydovchining e’tiborini jalb etish uchun fara chiroqlarini o’chirib yoqish va tovush ishorasi berishni qo’llab to’g’ri qildimi?",
    "options": [
      "Noto’g’ri",
      "To’g’ri"
    ],
    "correctAnswer": 1,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 48-bandining birinchi xatboshisiga asosan, tovushli ishoralar faqat quyidagi hollarda qo’llanilishi mumkin: aholi punktlaridan tashqarida boshqa haydovchilarni quvib o’tish haqida ogohlantirish uchun.\nYHQ 8-bobi 49-bandiga asosan: Quvib o’tish haqida tovushli ishora o'rniga yoki u bilan birga chiroqlarni yoqib-o’chirib, ogohlantirish ishorasini ham berish mumkin."
  },
  {
    "id": 129,
    "biletId": 13,
    "text": "Shikastlangan kishining o’mrov suyagi singanda nima qilish kerak?",
    "options": [
      "Singan joyga sovuq kompress qo’yish, bint bilan tarangroq bog’lash",
      "Qo’ltiq sohasiga taxtakach qo’yish va to’g’rilab qo’yilgan qo’lini gavdasiga qo’shib bint bilan bog’lash",
      "Paxta yoki bint o’ramasini qo’ltiq sohasiga qo’yib tirsagidan bukilgan qo'lini gavdasiga qo’shib bint bilan bog’lash"
    ],
    "correctAnswer": 2,
    "category": "Qo‘l jarohatlari",
    "explanation": "Qon tomirlari o'mrov ostidagi arteriya (ko'ktomir) va nervlarning shikastlanishiga olib kelishi mumkin bo'lgan singan o’mrov suyagining siljishiga yo'l qo'ymaslik uchun to’g’ri burchak ostida qo’ltiq sohasiga paxta yoki bint o'’ramasini qo’yib, tirsagidan bukilgan qo’lni, gavdasiga qo’shib bint bilan bog’lash lozim."
  },
  {
    "id": 130,
    "biletId": 13,
    "text": "Yengil avtomobilda tumanga qarshi faralarning nechtasini o’rnatishga ruxsat etiladi?",
    "options": [
      "Ikkita",
      "To’rtta",
      "Haydovchining hohishiga ko’ra"
    ],
    "correctAnswer": 0,
    "category": "Tashqi yoritqichlar",
    "explanation": "YHQ 3-ilovasi 3-bo’limining 3.1-bandiga asosan: Tashqi yoritqichlar soni, turi, joylashuvi va ishlash tartibi transport vositasining konstruksiyasi talabiga mos kelmasa foydalanish taqiqlanadi. Ishlab chiqarilishi to'xtatilgan yengil avtomobillarga boshqa turdagi va rusumdagi transport vositalarining tashqi yoritqichlarini o’rnatishga ruxsat etiladi.\nIzoh: Mototsikl, mopedlar bitta, boshqa transport vositalari esa ikkita tumanga qarshi faralar bilan jihozlangan bo’lishi mumkin."
  },
  {
    "id": 131,
    "biletId": 14,
    "text": "Sonning yumshoq to’qimalari lat yeganda birinchi tibbiy yordam qanday ko’rsatiladi?",
    "options": [
      "Lat yegan joyni qattiq bog’lash, 15-20 daqiqaga muz solingan xalta qo’yish, oyoqni yuqori ko’tarish, tinch qo’yish",
      "Lat yegan oyoqni tarang qilib (pastdan yuqoriga) bog’lash, singandagi kabi shina qo’yish, bir stakan choyga yarim choy qoshig’ida ichimlik soda solib ichirish, kasalxonaga jo’natish",
      "Oyoqqa yumshoq predmet qo’yish"
    ],
    "correctAnswer": 0,
    "category": "Oyoq jarohatlari",
    "explanation": "Shikastlangan qo'l yoki oyoqni baland holatda saqlamoq va ichki qon quyilishini oldini olish uchun mumkin qadar tarang bog’ich bog'lash lozim. Shikastlangan joyga 15-20 daqiqa muz qo’yiladi (sovutish uchun sovuq kompress, muzli xalta, sovuq suv va boshqalar ishlatilishi mumkin). Og’riqni qoldirish uchun shikastlangan organga harakatsizlik sharoiti yaratiladi."
  },
  {
    "id": 132,
    "biletId": 14,
    "text": "Agar yo’l boshlanishida ushbu belgi turgan bo’lsa, qatnov qismining chap chetidagi tasmaga o’tish mumkinmi?",
    "options": [
      "Chapga burilish uchun mumkin",
      "Quvib o’tish uchun mumkin, agar ro’paradan harakatlanish bo’lmasa va tasma qatnov qismining qolgan tasmalaridan uzuq-uzuq chizig’i bilan ajratilgan bo’lsa",
      "Hech qanday holatda mumkin emas"
    ],
    "correctAnswer": 2,
    "category": "Yo'nalishli transport vositalarining imtiyozlari",
    "imageUrl": "/images/questions/i14_2.webp",
    "explanation": "YHQ 22-bobi 132-bandining birinchi xatboshisiga asosan: Yo’nalishli transport vositalarining harakatlanishi uchun 5.9, 5.10.1 — 5.10.3 yo’l belgilari bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to’xtashi taqiqlanadi. \nShuningdek, bunday joylarda yo’nalishli transport vositalarining harakatiga xalaqit bermaslik sharti bilan yo’lga chiqish, qatnov qismining chetki o’ng tomonida yo’lovchilarni chiqarish va tushirish uchun bu bo’lakka o’tishga ruxsat etiladi."
  },
  {
    "id": 133,
    "biletId": 14,
    "text": "Qarama-qarshi yo’nalishdagi transportlar oqimi ikkita sidirg’a chiziqlar bilan ajratilgan yo’l nechta harakatlanish tasmaga ega?",
    "options": [
      "Ikkita",
      "Ikkita yoki uchta",
      "Uchta",
      "To’rtta va undan ko’p tasmaga"
    ],
    "correctAnswer": 3,
    "category": "Yotiq chiziqlar",
    "imageUrl": "/images/questions/i14_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining beshinchi xatboshisiga asosan: 1.3 — to’rt va undan ortiq harakatlanish bo'lagi bo'lgan yo’llarda qarama-qarshi yo'nalishdagi transport vositalari oqimini ajratadi."
  },
  {
    "id": 134,
    "biletId": 14,
    "text": "Qaysi transport vositalariga harakatlanish uchun ruxsat berilgan?",
    "options": [
      "Yengil va yuk avtomobillariga",
      "Mototsiklga, yengil va yuk avtomobillariga",
      "Yengil avtomobilga va mototsiklga"
    ],
    "correctAnswer": 2,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i14_4.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining o'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonidan qatnov qismini kesib o'tishga ruxsat etiladi."
  },
  {
    "id": 135,
    "biletId": 14,
    "text": "Avtomobillar chorrahadan quyidagi tartibda o’tadilar:",
    "options": [
      "Ko’k, yashil, qizil",
      "Ko’k, yashil bilan bir vaqtda qizil",
      "Yashil, qizil, ko’k bilan bir vaqtda"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i14_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 136,
    "biletId": 14,
    "text": "Sirpanchiq yo’lda orqa yetakchi avtomobil uchun tormozlashning qaysi usuli xavfsiz to’xtashni ta’minlaydi?",
    "options": [
      "Ulagichni uzmasdan tormoz tepkisini keskin bosish",
      "Ulagichni uzmasdan tormoz tepkisini ko’plab marta uzuq-uzuq bosish va qo’yib yuborish",
      "Ulagichni uzgan holda tormozlash"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i14_6.webp",
    "explanation": "Sirpanchiq yo’lda to’xtatish tepkisini uzuq-uzuq bosib, uzatma va ilashish mexanizmini ajratmay, dvigatel orqali tormozlanishni qo'llab va g’ildiraklarning blokirovkasi (aylanmasdan sirpanishi) ga yo'l qo’ymagan holda to’xtash lozim."
  },
  {
    "id": 137,
    "biletId": 14,
    "text": "Transport vositasining bitta o’qiga har xil naqshli shinalarni o’rnatishga ruxsat etiladimi?",
    "options": [
      "Faqat oldingi o’qiga ruxsat etiladi",
      "Oldingi yetakchi ko'prikli avtomobilning faqat orqa o’qiga ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "G'ildirak va shinalar",
    "explanation": "YHQ 3-ilovasi 5-bo’limining 5.5-bandiga asosan: Transport vositasining bitta o'qiga har xil o’lchamli va konstruksiyali (dioganal va radial, kamerali va kamerasiz), har xil naqshli, sovuqqa chidamli va chidamsiz, yangi va qayta tiklangan, yangi va protektor naqshi chuqurlashtirilgan shinalar o'rnatilgan bo'lsa taqiqlanadi."
  },
  {
    "id": 138,
    "biletId": 14,
    "text": "Quvib o’tishda faralarning uzoqni yorituvchi chiroqlaridan ogohlantiruvchi ishora sifatida foydalanish mumkinmi?",
    "options": [
      "Hamma holda mumkin",
      "Mumkin, agar bu boshqa haydovchilarning ko’zini qamashtirmasa, shu jumladan, orqani ko’rish ko’zgusi orqali ham",
      "Mumkin emas",
      "Aholi punktidan tashqaridagi yo’llarda mumkin"
    ],
    "correctAnswer": 1,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 44-bandiga asosan, quyidagilar ogohlantiruvchi ishoralar hisoblanadi: burilishni ko'rsatadigan miltillovchi chiroq yoki qo’l bilan beriladigan ishoralar;\ntovushli ishoralar;\nchiroqlarning yoqib o’chirilishi;\nkunduz kuni yaqinni yorituvchi chiroqlarning yoqilishi."
  },
  {
    "id": 139,
    "biletId": 14,
    "text": "Shatakka olish taqiqlanadi:",
    "options": [
      "Yaxmalakda, qattiq ulagich bilan",
      "Yon kajavasi yo’q mototsikllarni",
      "Yon kajavasi bor mototsikllarni",
      "Ulagich bilan birga transport vositalarining umumiy uzunligi 20 metr bo’lganda"
    ],
    "correctAnswer": 1,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24-bobi 145-bandining beshinchi xatboshisiga asosan, shatakka olish quyidagi holatlarda taqiqlanadi: kajavasiz mototsikllar bilan, shuningdek bunday mototsikllarni."
  },
  {
    "id": 140,
    "biletId": 14,
    "text": "Quyidagi qaysi belgilar ogohlantiruvchi belgilar jumlasiga kiradi?",
    "options": [
      "Ikkinchidan boshqa barchasi",
      "Uchinchidan boshqa barchasi",
      "Hammasi"
    ],
    "correctAnswer": 2,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i14_10.webp",
    "explanation": "YHQ 1-ilovasi 1-Bo’limidagi 1.7. \"Aylanma harakatlanish bilan kesishuv\", 1.12.1. \"Xavfli burilishlar\", 1.31.1. \"Burilishning yo'nalishi\", 1.18.2. \"Yo’lning torayishi\" (o’ngga torayish) hamda 1.11.1. \"Xavfli burilish\" (o'ngga) belgilari ogohlantiruvchi belgilar jumlasiga kiradi."
  },
  {
    "id": 141,
    "biletId": 15,
    "text": "Chorraha oldida bu belgi o’rnatilgan bo’lsa, haydovchi qanday yo’l tutishi kerak?",
    "options": [
      "Kesishadigan yo’lda transport vositalari bo’lmasa chorrahadan to’xtamay o’tishi",
      "Chorrahadan o’tishda, ayniqsa, xushyor bo’lishi",
      "Kesishadigan yo’l bo’ylab harakatlanayotgan transport vositalariga yo’l berish uchun to’xtash chizig’ida to’xtab, u yo’q bo’lsa kesib o’tiladigan qatnov qismi chetida to’xtashi"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i15_1.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’lim sakkizinchi va to'qqizinchi xatboshlariga asosan: 2.5. \"To’xtamasdan harakatlanish taqiqlangan\". To’xtash chizig'i oldida, agar u bo'lmasa, kesib o’tiladigan qatnov qismining chetida to’xtamasdan harakatlanish taqiqlanadi. Haydovchi kesib o’tilayotgan yo’ldan, asosiy yo’ldan harakatlanayotgan transport vositalariga yo’l berishi kerak. Bu belgi temir yo’l kesishmasi yoki karantin maskanidan oldin o’rnatilishi mumkin. Bunday hollarda haydovchi to’xtash chizig’i oldida, u bo’lmasa, belgi oldida to’xtashi kerak."
  },
  {
    "id": 142,
    "biletId": 15,
    "text": "Qaysi yo’nalishda harakatlanish taqiqlanadi?",
    "options": [
      "O’ngga birinchi yo’lga",
      "O’ngga ikkinchi yo’lga",
      "O’ngga birinchi va ikkinchi yo’llarga"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i15_2.webp",
    "explanation": "YHQ 1-ilovasi 3-Bо’limining yigirma birinchi va qirq ikkinchi xatboshlariga asosan: 3.18.1. \"O’ngga burilish taqiqlangan\" yo’l belgisi hisoblanadi. 3.18.1 belgisi qatnov qismlarining qaysi kesishmasi oldiga o’rnatilsa, shu kesishmaga tatbiq etiladi."
  },
  {
    "id": 143,
    "biletId": 15,
    "text": "Yotiq chiziqning uzluksiz sariq chizig’i nimani bildiradi?",
    "options": [
      "Transport vositalarining to’xtashi taqiqlangan joyni",
      "Belgilangan yo’nalishli transport vositalari uchun va taksi to’xtashiga ruxsat berilgan joyni",
      "Transport vositalarining to’xtab turishi taqiqlangan joyni"
    ],
    "correctAnswer": 0,
    "category": "Yotiq chiziqlar",
    "imageUrl": "/images/questions/i15_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo’llaniladi hamda yo’lning qatnov qismi chetiga yoki yo’l chetidagi to’siq ustidan chiziladi."
  },
  {
    "id": 144,
    "biletId": 15,
    "text": "Qaysi yo’nalishga harakatlanish ruxsat berilgan?",
    "options": [
      "To’g’riga",
      "O’ngga birinchi yo’lga",
      "O’ngga ikkinchi yo’lga",
      "O’ngga birinchi va ikkinchi yo’llarga"
    ],
    "correctAnswer": 1,
    "category": "Svetofor va tartibga soluvchining ishoralari",
    "imageUrl": "/images/questions/i15_4.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, O’NG QO’LI OLDINGA UZATILGANDA, chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda, oldi tomonidan barcha transport vositalariga faqat o’ngga\nharakatlanishga ruxsat etiladi. Orqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi. Piyodalarga tartibga soluvchining orqa tomonidan qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 145,
    "biletId": 15,
    "text": "Transport vositalari chorrahadan qanday tartibda o’tadilar?",
    "options": [
      "Qizil; ko’k sariq bilan bir vaqtda; yashil",
      "Sariq yashil bilan bir vaqtda; qizil; ko’k",
      "Qizil; yashil; ko’k sariq bilan bir vaqtda"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i15_5.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan, teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, keyingi harakat yo'nalishidan qat’i nazar, asosiy yo'ldan kelayotgan transport vositasiga ikkinchi darajali yo’ldan kelayotgan transport vositasining haydovchisi yo'l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan, chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’lda qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek, ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 146,
    "biletId": 15,
    "text": "Haydovchi manyovrni bajarishda burilish ko’rsatkichlari bilan yorug’lik ishorasini har doim ham berishi kerakmi?",
    "options": [
      "Har doim berishi kerak",
      "Kerak emas, agar harakatlanishning boshqa qatnashchilarini chalg’itishi mumkin bo’lsa",
      "Kerak, zaruriy ehtiyot choralarini ko’rgan holda"
    ],
    "correctAnswer": 1,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 8-bobi 46-bandining ikkinchi xatboshisiga asosan: Ishoralar boshqa yo’l harakati ishtirokchilarini chalg’itmasligi kerak."
  },
  {
    "id": 147,
    "biletId": 15,
    "text": "Suratlarning qaysi birida quvib o’tish ko’rsatilgan?",
    "options": [
      "\"A\"",
      "\"Б\"",
      "\"А\" ва \"Б\""
    ],
    "correctAnswer": 0,
    "category": "Quvib o'tish",
    "imageUrl": "/images/questions/i15_7.webp",
    "explanation": "Quvib o’tish — bir yoki bir nechta transport vositalarini qarama-qarshi yo'nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib, so'ngra ilgari egallagan qatoriga qaytib o’tish bilan bog'liq bo’lgan o’zib ketish."
  },
  {
    "id": 148,
    "biletId": 15,
    "text": "Haydovchi o’z joyidan ketishi yoki transport vositasini qoldirishi mumkin, agar:",
    "options": [
      "U yurgizgichni o’chirgan va avtomobilning to’xtab turish tormoz tizimini ulagan bo’lsa",
      "U yurgizgichni o’chirgan va orqaga siljib ketishga qarshi xavfsizlik buferini o’rnatgan bo’lsa",
      "U transport vositasining o’z-o’zidan harakatlanishi yoki undan haydovchi yo’q vaqtda foydalanishga yo’l qo’ymaydigan zaruriy choralarni ko’rgan bo’lsa"
    ],
    "correctAnswer": 2,
    "category": "To'xtash va to'xtab turish",
    "explanation": "YHQ 13-bobi 95-bandiga asosan: Transport vositasining o’z-o’zidan harakatlanib ketishini yoki o'zi yo'qligida undan foydalanishni istisno qiladigan zarur ehtiyot choralarini ko’rgandan keyingina haydovchi o’z joyini tashlab ketishi yoki transport vositasini qoldirishi mumkin."
  },
  {
    "id": 149,
    "biletId": 15,
    "text": "Son suyagi uchdan birining pastki qismi singanda, jarohatlangan odamni transportda tashish uchun taxtakach qanday qo’yiladi?",
    "options": [
      "Taxtakachni sonning butun uzunligicha tos-sondan tizza bo’g’inigacha qo’yib, singan joy bint bilan qattiq bog’lab qo’yiladi",
      "Ikkita taxtakach oyoqning ichki va tashqi tomonidan qo’yiladi: bittasini oyoq to’pig’idan qo’ltiqosti chuqurigacha, ikkinchisini to’piqdan chovgacha",
      "Ikkita taxtakach oyoqning ikki tomonidan to’piqdan sonning yuqorigi uchdan bir qismigacha (singan joydan 15-20 sm yuqorigacha) qo’yiladi"
    ],
    "correctAnswer": 1,
    "category": "Oyoq jarohatlari",
    "explanation": "Son suyagi singan holda ikkita taxtakach: biri - tashqari tarafda oyoq kaftidan to qo’ltiqosti chuqurigacha, boshqasi - ichki tarafda oyoq kaftidan to chovgacha qo’yiladi. Son suyagi singan holda immobilizatsiya vositasi bo'lmasa, shikastlangan oyoq sog’ oyoqqa mahkamlanib qo’yiladi. Mahkamlovchi bog’ich singan suyakni siljitmasligi va jabrlanuvchiga qo’shimcha og’riq yetkazmasligi lozim. Mahkamlovchi bog’ich oyoqning sog’ qismiga bog’lanadi."
  },
  {
    "id": 150,
    "biletId": 15,
    "text": "To’xtab turish tormoz tizimi qanchadan kam bo’lgan qiyaliqda M toifadagi avtotransport vositalarini harakatsiz xolatda ushlab tura olmasa, bu transport vositalaridan foydalanish taqiqlanadi.",
    "options": [
      "18%",
      "20%",
      "24%",
      "25%"
    ],
    "correctAnswer": 3,
    "category": "Tormoz tizimlari",
    "explanation": "YHQ 3-ilovasi 1-bo'limining 1.6-bandiga asosan, to'xtab turish tormoz tizimi transport vositalarini quyidagi joylarda harakatsiz holatda ushlab tura olmasa: M toifa uchun 25 foizdan kam bo’lsa foydalanish taqiqlanadi.\nIzoh: To'xtab turish tormoz tizimi sinovdan o’tkazilayotgan dvigatel transmissiyadan ajratilgan bo’lishi kerak."
  },
  {
    "id": 151,
    "biletId": 16,
    "text": "Qisman ortish usuli bilan avtomobilni shatakka olishda yo’lovchilar qayerda bo’lishlari mumkin?",
    "options": [
      "Har ikki avtomobilning kabinasida",
      "Shatakka oluvchi avtomobilning kabinasida",
      "Shatakka olingan avtomobilning kabinasida",
      "Shatakka oluvchi avtomobilning kuzovida"
    ],
    "correctAnswer": 1,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24-bobi 143-bandiga asosan: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo’li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 152,
    "biletId": 16,
    "text": "Qaysi javobda ruxsat berilgan harakat yo’nalishi to’g’ri ko’rsatilgan?",
    "options": [
      "Faqat orqaga burilish",
      "To’g’riga va orqaga burilish",
      "Faqat to’g’riga"
    ],
    "correctAnswer": 2,
    "category": "Buyuruvchi belgilar",
    "imageUrl": "/images/questions/i16_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo'limining o'ttiz yettinchi (oxirgi) xatboshisiga asosan: Vaqtinchalik (ko’chma tirgakdagi) va doimiy belgilari ma’no jihatidan bir-biriga zid kelgan hollarda haydovchilar vaqtincha o’rnatilgan belgilarga amal qilishlari kerak."
  },
  {
    "id": 153,
    "biletId": 16,
    "text": "\"To’xtash taqiqlangan\" belgisi bilan birga bordyurning usti bo’ylab uzluksiz sariq chiziq chizilgan joyda yo’lovchilarni tushirishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Belgilangan yo’nalishdagi transport vositalari yo’q bo’lganda ruxsat etiladi",
      "Faqat belgilangan yo’nalishdagi transport vositalariga ruxsat etiladi"
    ],
    "correctAnswer": 3,
    "category": "Odam tashish",
    "imageUrl": "/images/questions/i16_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo’llaniladi hamda yo’lning qatnov qismi chetiga yoki yo'l chetidagi to'siq ustidan chiziladi.\nYHQ 1-ilovasi 3-bo’limining o'ttiz sakkizinchi xatboshisiga asosan: 3.27 belgisiga amal qilish yo’nalishli transport vositalariga ta’sir qilmaydi."
  },
  {
    "id": 154,
    "biletId": 16,
    "text": "Temir yo’l izlarini qayerda kesib o’tishga ruxsat etiladi?",
    "options": [
      "Ko’rinish ikkala yo’nalishda 1000 metrdan kam bo’lmagan joylarda",
      "Haydovchining nuqtai nazaricha eng qulay joylarda",
      "Kesib o’tish uchun belgilab qo’yilgan joylarda",
      "Temir yo’l bekatiga 1000 metrdan kam bo’lmagan masofada"
    ],
    "correctAnswer": 2,
    "category": "Temir yo'l kesishmalari orqali harakatlanish",
    "explanation": "YHQ 18-bobi 116-bandiga asosan: Transport vositalarining haydovchilari temir yo’llarni faqat temir yo’l kesishmalari orqali poezd (lokomotiv, drezina) larga yo’l berib kesib o’tishlari mumkin."
  },
  {
    "id": 155,
    "biletId": 16,
    "text": "Chorrahadan ikkinchi bo’lib o’tadi:",
    "options": [
      "Yashil avtomobil sariq bilan bir vaqtda",
      "Qizil avtomobil",
      "Ko’k avtomobil sariq bilan bir vaqtda"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i16_5.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan, teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, keyingi harakat yo'nalishidan qat’i nazar, asosiy yo'ldan harakatlanayotgan transport vositasiga ikkinchi darajali yo’ldan kelayotgan transport vositasining haydovchisi yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan, chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’lda qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek, ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 156,
    "biletId": 16,
    "text": "Qaysi holda avtomobilning ag’anab ketishiga qarshi turg’unligi ortadi?",
    "options": [
      "Og’irlik markazi o’ngga siljiganda",
      "Og’irlik markazi balandda joylashganda",
      "Og’irlik markazi pastda joylashganda"
    ],
    "correctAnswer": 2,
    "category": "Yuk tashish",
    "imageUrl": "/images/questions/i16_6.webp",
    "explanation": "Burilishlarda yo’lovchisi va yuki bo’lmagan avtomobillar ko’proq muvozanat saqlab qoladi, chunki bunday avtomobilda og’irlik markazi eng pastda joylashgan bo’lib, eng kam ag’darilish jihatiga ega bo’ladi."
  },
  {
    "id": 157,
    "biletId": 16,
    "text": "Hamma tasmalar band bo’lgan serqatnov harakatlanish vaqtida qayrilib olishga ruxsat etiladimi?",
    "options": [
      "Istalgan paytda ruxsat etiladi",
      "Faqat harakatlanish uchun tasmalari uchtadan kam bo’lmagan yo’llarda ruxsat etiladi",
      "Taqiqlanadi",
      "Faqat chorrahalarda ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Yo'lning qatnov qismida transport vositalarining joylashuvi",
    "explanation": "YHQ 10-bobi 67-bandining uchinchi xatboshisiga asosan: Bir yo’nalishdagi uch va undan ortiq tasmali har qanday yo’lda chetki chap qatorni harakat serqatnovligi sababli boshqa bo’laklar band bo’lgan hollarda, shuningdek, quvib o’tish, chapga burilish yoki qayrilib olishga, yuk avtomobillariga faqat chapga burilish yoki qayrilib olish uchun chetki chap qatorni egallashga ruxsat etiladi."
  },
  {
    "id": 158,
    "biletId": 16,
    "text": "Haydovchi qayta tizilishdan va harakatlanish yo’nalishini o’zgartirishdan oldin nima qilishi zarur?",
    "options": [
      "Ushbu manyovr xavfsiz bo’lishiga va harakatlanishning boshqa qatnashchilariga xalaqit bermasligiga ishonch hosil qilishi",
      "Chapga burilish haqida ogohlantirish ishorasi berishi va hech kimga xalaqit bermasligi haqida ishonch hosil qilishi",
      "Aholi punktidan tashqarida tovush ishora berishi",
      "Ko’rsatilgan barcha harakatlarni bajarishi"
    ],
    "correctAnswer": 0,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 53-bandiga asosan: Haydovchi harakatlanishni boshlash, yo’nalishni o’zgartirish (qayta tizilish, burilish, qayrilib olish, quvib o'tish va aylanib o’tish) va to’xtashdan oldin bajarilayotgan manyovr xavfsiz ekanligiga va boshqa harakat qatnashchilariga xalaqit bermasligiga ishonch hosil qilishi kerak."
  },
  {
    "id": 159,
    "biletId": 16,
    "text": "Tos suyaklari singanda birinchi yordam qanday ko’rsatiladi?",
    "options": [
      "Zararlangan joyni qattiq bog’lash, shikastlanganni yarim o’tirgan holatga keltirish",
      "Shikastlanganni qattiq yuzaga orqasi bilan yotqizish, zararlangan joylarga qaynoq isitgich qo’yish",
      "Shikastlanganni qattiq tekis yuzaga yotqizish, bukilgan va ikki tomonga kerilgan tizzalarining bo’g’inlari ostiga g’o’la shaklida o’ram qo’yish"
    ],
    "correctAnswer": 2,
    "category": "Oyoq jarohatlari",
    "explanation": "Tos suyagi singanda jabrlanuvchi tekislikka yotqiziladi, oyoqlarni tizzalarida bukib, tagiga valik (g’o’la shakldagi o’ram) qo’yiladi. Shu holatda jabrlanuvchi davolash muassasasiga olib boriladi."
  },
  {
    "id": 160,
    "biletId": 16,
    "text": "Sanab o’tilgan shartlarning qaysi birida transport vositasidan foydalanish taqiqlanadi?",
    "options": [
      "Oyna tozalagichlar belgilangan tartibda ishlamaydi",
      "Ishlatilgan gazlarni chiqarish tizimi nosoz",
      "Ishlab chiqargan korxona tomonidan ko’zda tutilgan orqa himoya vositasi loyto’sgich va sachratmagichlar bo’lmasa",
      "Sanab o’tilgan hamma sharoitlarda"
    ],
    "correctAnswer": 3,
    "category": "Oyna tozalagich va oyna yuvgichlar",
    "explanation": "YHQ 3-ilovasi 4-Bo’limining 4.1-bandiga asosan: Oyna tozalagich belgilangan tartibda ishlamayotgan bo’lsa taqiqlanadi. YHQ 3-ilovasi 6-Bo’limining 6.3-bandiga asosan: ishlab chiqarilgan gazlarni chiqarib tashlash tizimi buzuq bo’lsa taqiqlanadi. YHQ 3-ilovasi 7-Bo’limining 7.7-bandiga asosan: transport vositasi konstruksiyasida ko'zda tutilgan orqa himoya vositasi, loy to’sgich va sachratmagichlar bo’lmasa."
  },
  {
    "id": 161,
    "biletId": 17,
    "text": "Qaysi belgi yo’l qismida maxsus avtomatlashtirilgan foto va video qayd etish texnika vositalari o’rnatilganligi xaqida axborot beradi?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i17_1.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining ellik to'qqizinchi xatboshisiga asosan: 5.41. \"Foto- va video qayd etish\" belgisi, maxsus avtomatlashtirilgan foto va video qayd etish texnika vositalari o'rnatilgani haqida axorot beradi."
  },
  {
    "id": 162,
    "biletId": 17,
    "text": "Qaysi yo’nalishlarda harakatlanish taqiqlanadi?",
    "options": [
      "Chapga va o’nga",
      "To’g’riga va orqa burilish yo’nalishida",
      "Faqat to’g’riga",
      "Hamma yo’nalishlarda"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i17_2.webp",
    "explanation": "YHQ 1-ilovasining 3-bo’limi 3.2 belgi talabiga asosan, \"Harakatlanish taqiqlangan\" belgisi barcha transport vositalarining harakatlanishi taqiqlanishini bildiradi. YHQ 1-ilovasining 7- bo’limidagi 7.3.1-7.3.3 qo’shimcha axborot belgilariga muvofiq, \"Ta’sir yo’nalishlari\" chorraha oldida o’rnatilgan belgilarning ta’sir yo’nalishini ko’rsatadi."
  },
  {
    "id": 163,
    "biletId": 17,
    "text": "Qaysi belgi garbarit uzunligi belgisida ko’rsatilganidan uzunroq bo’lgan transport vositalarining harakatlanishini taqiqlaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Taqiqlovchi belgilar",
    "imageUrl": "/images/questions/i17_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining o’n yettinchi xatboshisiga asosan: 3.15. \"Cheklangan uzunlik\". Gabarit uzunligi (yuk bilan yoki yuksiz) belgida ko’rsatilganidan ortiq bo'lgan transport vositalari (transport vositalari tarkiblari)ning harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 164,
    "biletId": 17,
    "text": "Suratdagi tasvirlangan holatda haydovchi nima qilishi lozim?",
    "options": [
      "Bekatda (yo’l o’rtasida) turgan bir xil yo’nalishdagi tramvayga borayotgan yoki undan kelayotgan piyodalarga yo’l berish",
      "To’xtash va tramvay eshiklari yopilgandan keyin harakatlanishni boshlash",
      "Tezlikni zarur bo’lganda darhol to’xtash imkonini beradigan darajagacha pasaytirib harakatni davom ettirish"
    ],
    "correctAnswer": 0,
    "category": "Piyodalarning otish joylari va yonalishli transport vositalarining bekatlari",
    "imageUrl": "/images/questions/i17_4.webp",
    "explanation": "YHQ 17-bobi 114-bandiga asosan: Agar yo’lovchilarni tushirish yoki chiqarish qatnov qismida yoki unda joylashgan maydonchada amalga oshirilayotgan bo'lsa, haydovchi bekatda to'xtagan yo’nalishli transport vositasi eshiklari tomon borayotgan yoki undan kelayotgan piyoda(lar)ga yo’l berishi kerak."
  },
  {
    "id": 165,
    "biletId": 17,
    "text": "Chorrahadan ikkinchi bo’lib qaysi avtomobil o’tadi?",
    "options": [
      "Oq avtomobil sariq bilan bir vaqtda",
      "Qizil avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i17_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan, chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’lda qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek, ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 166,
    "biletId": 17,
    "text": "Kunning qorong’i vaqtida yo’lning yoritilgan qismida harakatlanayotgan mexanik transport vositasida qaysi chiroqlar yoqilgan bo’lishi kerak?",
    "options": [
      "Faralarning yaqinni yorituvchi chiroqlari",
      "Faralarning uzoqni yorituvchi chiroqlari yoki gabarit chiroqlar",
      "Faralarning yaqinni yorituvchi chiroqlari (tumanga qarshi faralar) yoki gabarit chiroqlar"
    ],
    "correctAnswer": 0,
    "category": "Tashqi yoritish asboblaridan foydalanish",
    "explanation": "YHQ 23-bobi 135-bandiga asosan, quyidagi hollarda uzoqni yorituvchi chiroqlar o’rniga yaqinni yorituvchi chiroqlar yoqilishi kerak: aholi yashash joylarida yo’l yoritilgan bo’lsa;\nqarama-qarshi yo'nalishdagi transport vositasiga kamida 150 metr masofa qolganda, shuningdek haydovchi transport vositasining chiroqlarini vaqt-vaqti bilan o'chirib bunga zaruriyat borligini bildirgan hollarda undan ham ko'proq masofada; qarama-qarshi va bir yo'nalishdagi transport vositalari haydovchilarining ko’zini qamashtirishi mumkin bo'lgan boshqa barcha holatlarda. Ko’zi qamashgan haydovchi avariya ishoralarini yoqishi, harakatlanish bo’lagini o’zgartirmasdan tezlikni kamaytirishi va to’xtashi kerak."
  },
  {
    "id": 167,
    "biletId": 17,
    "text": "Chorraha qismida kesib o’tgan yo’lga nisbatan asosiy bo’lgan yo’lda transport vositalarini quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Quvib o'tish",
    "explanation": "YHQ 12-bobi 86-bandining ikkinchi xatboshisiga asosan: tartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;"
  },
  {
    "id": 168,
    "biletId": 17,
    "text": "Qaysi javobda shatakka olingan transport vositasidagi yoritish asboblarini yoqishning to’g’ri holati ko’rsatilgan?",
    "options": [
      "Kunning qorong’i vaqtida yoki tuman bo'lgan sharoitda faralarning yaqinni yoritish chiroqlari",
      "Avariya yorug’lik ishoralari, u nosoz bo’lganda yoki bo’lmagan hollarda uning orqa tomoniga avariya sababli to’xtash belgisi o’rnatilishi kerak",
      "Aholi punktlarida gabarit chiroqlari",
      "Aholi punktlaridan tashqaridagi yo’llarda istalgan yoritish chiroqlarini"
    ],
    "correctAnswer": 1,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 50-bandining ikkinchi xatboshisiga asosan, avariya ishorasi quyidagi hollarda yoqilishi kerak: shatakka olishda (shatakka olingan transport vositasida).\nYHQ 8-bobi 52-bandiga asosan: Shatakka olingan transport vositasida avariya yorug’lik ishoralari bo'lmasa yoki ular ishlamasa uning orqa tomoniga avariya sababli to’xtash belgisi o’rnatilishi kerak."
  },
  {
    "id": 169,
    "biletId": 17,
    "text": "Quyidagi 3.27 \"To’xtash taqiqlangan \" belgisining amal qilish chegarasi qayerda tugaydi?",
    "options": [
      "Birinchi chorrahada",
      "Aholi yashaydigan joyning oxirida",
      "Yo’lning yotiq sariq chizig’i oxirida"
    ],
    "correctAnswer": 2,
    "category": "Taqiqlovchi belgilar",
    "imageUrl": "/images/questions/i17_9.webp",
    "explanation": "YHQ 1-ilovasi 3-Bo’limining qirq to'qqizinchi xatboshisiga asosan: 3.27 belgisi 1.4 yotiq chizig'i bilan birgalikda, 3.28 belgisi esa 1.10 yotiq chizig’i bilan birgalikda qo’llanishi mumkin, bunda belgilarga amal qilish chiziqlar uzunligi bilan aniqlanadi."
  },
  {
    "id": 170,
    "biletId": 17,
    "text": "M1 toifadagi transport vositalari shinalari protektori naqshining qoldiq balandligi necha mm.dan kam bo’lmasligi kerak?",
    "options": [
      "0,8 mm",
      "1,0 mm",
      "1,6 mm",
      "2,0 mm",
      "2,5 mm"
    ],
    "correctAnswer": 2,
    "category": "G'ildirak va shinalar",
    "explanation": "YHQ 3-ilovasi 5-Bo’limi 5.1-bandiga asosan: Shina protektori naqshlarining qoldiq balandligi М1, N1, О1, О2 toifadagi avtotransport vositalari uchun — 1,6 mm dan, kam bo’lsa taqiqlanadi."
  },
  {
    "id": 171,
    "biletId": 18,
    "text": "Agar tuproq yo’lda bevosita chorraha oldida to’shamali (qoplamali) yo’l qismi bo’lsa, bu uni kesib o’tayotgan asosiy yo’l bilan teng huquqli qiladimi?",
    "options": [
      "Yo’q",
      "Ha"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "explanation": "YHQ 1-bobi 6-bandining sakkizinchi xatboshisiga asosan: Asosiy yo'l — tuproqli yoki shag’alli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli va shunga o’xshashlar yotqizilgan), kesishayotgan yoki tutashgan yo'lga nisbatan 2.1, 2.3.1 — 2.3.3 yoki 5.1 yo’l belgilari bilan belgilangan yoxud yondosh hududdan chiqadigan yo’lga nisbatan har qanday yo’l. Ikkinchi darajali yo'lning bevosita chorrahaga tutash qismining qoplamali bo’lishi uni asosiy yo’l bilan teng huquqli qilmaydi."
  },
  {
    "id": 172,
    "biletId": 18,
    "text": "Taqiqlovchi belgi yo’lning haydovchi to'xtagan qismiga ta’sir qiladimi?",
    "options": [
      "Ta’sir qiladi",
      "Ta’sir qilmaydi"
    ],
    "correctAnswer": 0,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i18_2.webp",
    "explanation": "YHQ 1-ilovasi 3-Bo’limining qirq uchinchi xatboshisiga asosan: 3.16, 3.20, 3.22, 3.24, 3.26 — 3.30 belgilarining ta’siri belgi o’rnatilgan joydan keyingi eng yaqin chorrahagacha, ular bo’lmaganda — aholi punktining oxirigacha ta’siri qiladi.\nYondosh hududlardan yo’lga chiqish joylarida yoki yo’lning dala, o’rmon yo’llari va boshqa doimiy harakatlanish, o’tib ketish uchun mo’ljallanmagan yo’llar bilan kesishgan (tutashgan) joylarida, ularning oldida tegishli belgilar o’rnatilmagan bo’lsa, bu belgilarning ta’siri yo’qolmaydi."
  },
  {
    "id": 173,
    "biletId": 18,
    "text": "Aholi punktlaridan tashqarida qaysi belgi takrorlanadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i18_3.webp",
    "explanation": "YHQ 1-ilovasi 1-bo'limining qirq ikkinchi xatboshisiga asosan: Aholi punktlaridan tashqarida 1.1, 1.2, 1.9, 1.10, 1.21 va 1.23 belgilari takrorlanadi. Ikkinchi belgi yo'lning xavfli qismi boshlanishiga kamida 50 metr qolganda o’rnatiladi."
  },
  {
    "id": 174,
    "biletId": 18,
    "text": "Yo’lning o’rtasida joylashgan bekatda to’xtagan yo’nalishli tramvay yonidan o’tayotganda haydovchi nima qilishi kerak?",
    "options": [
      "To’xtashi kerak va tramvay eshiklarini yopganidan so’ng qo’zg’alishi kerak",
      "To’xtab turgan tramvayga ketayotgan yoki undan tushayotgan yo’lovchilarga yo’l berishi kerak"
    ],
    "correctAnswer": 1,
    "category": "Piyodalarning otish joylari va yonalishli transport vositalarining bekatlari",
    "explanation": "YHQ 17-bobi 114-bandiga asosan: Agar yo’lovchilarni tushirish yoki chiqarish qatnov qismida yoki unda joylashgan maydonchada amalga oshirilayotgan bo’lsa, haydovchi bekatda to'xtagan yo’nalishli transport vositasi eshiklari tomon borayotgan yoki undan kelayotgan piyoda(lar)ga yo’l berishi kerak."
  },
  {
    "id": 175,
    "biletId": 18,
    "text": "Chorrahadan oxirgi bo’lib qaysi avtomobil o’tadi?",
    "options": [
      "Ko’k avtomobil",
      "Sariq avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i18_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng axamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 176,
    "biletId": 18,
    "text": "Kunning qorong’u vaqtida yo’lning yoritilmagan qismlarida harakatlanayotganda mexanik transport vositasining qaysi chiroqlari yoqilgan bo’lishi kerak?",
    "options": [
      "Yaqinni yoki uzoqni yorituvchi faralar",
      "Faqat yaqinni yorituvchi faralar",
      "Faqat uzoqni yorituvchi faralar"
    ],
    "correctAnswer": 0,
    "category": "Tashqi yoritish asboblaridan foydalanish",
    "explanation": "YHQ 23-bobi 134-bandining birinchi va ikkinchi xatboshilariga asosan: Qorong’i vaqtda va yetarlicha ko’rinmaydigan sharoitda, shuningdek yo'lning yoritilganligidan qat’i nazar, tunnellarda harakatlanayotgan transport vositalarida quyidagi yoritish asboblari yoqilgan bo’lishi kerak: barcha mexanik transport vositalari — uzoqni yoki yaqinni yorituvchi chiroqlar."
  },
  {
    "id": 177,
    "biletId": 18,
    "text": "Qayrilib olish taqiqlanadi:",
    "options": [
      "Piyodalar o’tish joylarida",
      "Tonellarda",
      "Ko’priklarda, osma yo’llarda, estakadalarda va ularning ostida",
      "Temir yo’l kesishmalarida",
      "Hamma sanab o’tilgan hollarda"
    ],
    "correctAnswer": 4,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 62-bandiga asosan, quyidagi joylarda qayrilib olish taqiqlanadi: piyodalarning o’tish joylarida;\ntunnellarda;\nko'priklar, yo'l o’tkazgichlar, estakadalar va ularning ostida (tegishli yo'l belgilari bilan bunday manyovrni bajarish ruxsat berilgan yo'l qismlari bundan mustasno);\ntemir yo’l kesishmalarida;\nyo’lning ko’rinishi biror-bir yo’nalishda 100 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 178,
    "biletId": 18,
    "text": "Yashil avtomobil haydovchisi:",
    "options": [
      "Bir xil yo’nalishda to’g’riga harakatlanayotgan ko’k avtomobilga yo’l berishi kerak",
      "Ko’k avtomobilga nisbatan ustunlikka ega, chunki o’zib o’tish uchun mo’ljallangan tasmadan ketmoqda",
      "Ustunlikka ega, chunki burilish ishorasini yoqdi"
    ],
    "correctAnswer": 0,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "imageUrl": "/images/questions/i18_8.webp",
    "explanation": "YHQ 9-bobi 55-bandiga asosan: Haydovchi qayta tizilishda harakatlanish yo’nalishini o’zgartirmasdan harakatlanayotgan yo’lakay transport vositalariga yo’l berishi kerak.\nBir yo’nalishda harakatlanayotgan transport vositalari bir vaqtda qayta tizilayotganda, haydovchi o’ng tomondagi transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 179,
    "biletId": 18,
    "text": "Qattiq yoki egiluvchan ulagich yordamida shatakka olinganda, yuk avtomobilining yukxonasida odamlarni tashishga ruxsat etiladimi?",
    "options": [
      "Shatakka olgan va shatakka olingan avtomobillarning yukxonasida ruxsat etiladi",
      "Faqat shatakka olingan avtomobil yukxonasida ruxsat etiladi",
      "Faqat shatakka olgan avtomobil yukxonasida ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Mexanik transport vositalarini shatakka olish",
    "explanation": "YHQ 24-bobi 143-bandiga asosan: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo'li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 180,
    "biletId": 18,
    "text": "Transport vositalaridan qanday shartlarda foydalanishga ruxsat etiladi?",
    "options": [
      "Shinalarning ayrim joylarida kord ko’rinib qoladigan nuqsonlari bor",
      "M1 toifadagi avtotransport vositalarining oldingi o’qiga ikkinchi klassdagi ta’mirlangan shinalar o’rnatilgan",
      "N2, N3 toifadagi transport vositalari shinalari protektori naqshining qoldiq balandligi 1,6 mm.ni tashkil qiladi"
    ],
    "correctAnswer": 2,
    "category": "G'ildirak va shinalar",
    "explanation": "YHQ 3-ilovasi 5-Bo’limi 5.1-bandiga asosan: Shina protektori naqshlarining qoldiq balandligi N2, N3, ОЗ, О4 toifadagi avtotransport vositalari uchun — 1,0 mm dan kam bo’lsa foydalanish taqiqlanadi.\nYHQ 3-ilovasi 5-Bo’limi 5.2-bandiga asosan: Shinalarda kord ko’rinishiga olib kelgan tashqi nuqsonlar (teshilgan kesilgan, yorilgan), hamda karkas qatlamlari ajralgan, protektor va yon qismlari ko'chgan bo’lsa foydalanish taqiqlanadi.\nYHQ 3-ilovasi 5-bo’limi 5.7-bandiga asosan: М1, M2, МЗ toifalarni I klassidagi avtotransport vositalarini oldingi o’qiga, МЗ toifani II va III klassidagi avtotransport vositalarini o'rta va orqa o’qlariga ikkinchi ta’mirlash klassi bo'yicha qayta tiklangan shinalar o'rnatilgan bo'lsa foydalanish taqiqlanadi."
  },
  {
    "id": 181,
    "biletId": 19,
    "text": "Yo’l-transport hodisasiga daxldor bo’lgan haydovchilar birinchi navbatda bajarishlari shart:",
    "options": [
      "Hodisa sodir bo’lgan joyda to’xtash, guvohlarning ismi-sharifi va manzilini yozib olish, hodisa haqida militsiyaga xabar berish, shikastlanganlarga shifokor kelguncha tibbiy yordam berish uchun. choralar ko’rish",
      "Darhol to’xtash va hodisa sodir bo’lgan joyda qolish, avariya majburiy to’xtash yoritgichini yoqish va avariya sababli to’xtash belgisini o’rnatish",
      "To’xtash va hodisaga tegishli izlarni saqlash, ularning atrofini to’sib, hodisa sodir bo’lgan joyni aylanib o’tishni tashkil etish uchun hamma mumkin bo’lgan choralarni ko’rish, militsiyaga xabar berish, tibbiy yordam berish"
    ],
    "correctAnswer": 1,
    "category": "Yo'l-transport hodisasi sodir bo'lganda haydovchining majburiyatlari",
    "explanation": "YHQ 3-bobi 13-bandiga asosan, yo'l-transport hodisasi sodir bo'lganda unga daxldor haydovchilar quyidagilarni bajarishlari shart: transport vositasini darhol to’xtatishi, avariya ishoralarini yoqishi va avariya sababli to’xtash belgisini o’rnatishi, transport vositasini va hodisaga daxldor buyumlarni joyidan qo’zg’atmasligi."
  },
  {
    "id": 182,
    "biletId": 19,
    "text": "Belgi ostidagi qo’shimcha axborot belgisi nimani bildiradi?",
    "options": [
      "Belgidan birinchi burilishning boshlanishigacha bo’lgan masofani",
      "Birinchi burilishdan ikkinchi burilishning boshlanishigacha bo’lgan masofani",
      "Yo’lning xavfli burilishlari bo’lgan qatnov uzunligini"
    ],
    "correctAnswer": 2,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i19_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining beshinchi xatboshisiga asosan: 7.2.1. \"Ta’sir oralig’i\". Ogohlantiruvchi belgilar bilan belgilangan xavfli joyning uzunligini yoki taqiqlovchi va axborot-ko’rsatkich belgilarining ta’sir oralig'ini ko'rsatadi."
  },
  {
    "id": 183,
    "biletId": 19,
    "text": "Qaysi belgi \"To’siqni chapdan chetlab o’tish\" deb ataladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i19_3.webp",
    "explanation": "YHQ 1-ilovasi 4-bo'limining o’n birinchi xatboshisiga asosan: 4.2.2. \"To’siqni chapdan chetlab o’tish\". To’siqni ko’rsatilgan yo'nalish bo’yicha chetlab o’tishga ruxsat etilishini bildiradi."
  },
  {
    "id": 184,
    "biletId": 19,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Velosiped haydovchisi",
      "Avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i19_4.webp",
    "explanation": "YHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 185,
    "biletId": 19,
    "text": "Chorrahadan birinchi bo’lib o’tadi:",
    "options": [
      "Yashil avtomobil",
      "Ko’k avtomobil",
      "Qizil avtomobil",
      "Sariq avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i19_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 186,
    "biletId": 19,
    "text": "Ishchi tormozi to’satdan ishlamay qolganda avtomobilni qanday to’xtatish kerak?",
    "options": [
      "Eng past uzatmaga o’tish, to’xtab turish tormozi bilan tormozlash. Zarur bo’lganda biron-bir to'siqdan foydalanish",
      "Ulagichni ajratish va to’xtab turish tormozi bilan keskin tormozlash"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i19_6.webp",
    "explanation": "Ishlayotgan tormozning birdan ishdan chiqish holati alomatlari ko’p: avtomobil tezligi, to'xtab turish tormozining ishlash qobiliyati, harakat oqimining zichligi, yo'l kengligi, piyodalar, ko'kalamzorlashtirilgan joylar, qurilayotgan imoratlarning zichligi qarama-qarshi yo’nalishda kelayotgan transport vositalarining zichligi va boshqalar. Shuningdek ko’pgina to'xtamlarga kelish mumkin. Tormoz ishlamay qolganda nima qilish kerak? degan savolga barcha holatlarga to’g’ri keladigan javob berib bo’lmaydi. Shunday qilib, xavfli vaziyatda eng asosiy narsa bu: o’ziga ishonish va osoyishtalikni saqlash; kelib chiqqan holatni tezda baholash; inson hayotiga xavf-xatar solmaydigan va ziyon yetkazmaydigan qaror qabul qilish va qabul qilingan qarorni amalga oshirayotgan vaqtda vaziyatning o'zgarishi natijasida taktikani o’zgartirishga tayyor turish."
  },
  {
    "id": 187,
    "biletId": 19,
    "text": "Qayrilib olish taqiqlanadi:",
    "options": [
      "Chorrahaga 15 metrdan yaqinroqda",
      "Tartibga solinmaydigan chorrahalarda, agar kesib o’tilayotgan yo’lda bir tomonlama harakatlanish tashkil etilgan bo’lsa",
      "Piyodalar o’tish joylarida",
      "Hamma sanab o’tilgan hollarda"
    ],
    "correctAnswer": 2,
    "category": "Harakatlanishni boshlash, yo'nalishlarni o'zgartirish",
    "explanation": "YHQ 9-bobi 62-bandining birinchi xatboshisiga asosan, quyidagi joylarda qayrilib olish taqiqlanadi: piyodalarning o'tish joylarida."
  },
  {
    "id": 188,
    "biletId": 19,
    "text": "Shatakka olingan mexanik transport vositasida qaysi tashqi yoritish chiroqlari yoqilgan bo’lishi kerak?",
    "options": [
      "Kunning qorong’i vaqtida, gabarit chiroqlarini",
      "Yaqinni yorituvchi fara chiroqlari",
      "Avariya (xavf-xatar) ishoralarini"
    ],
    "correctAnswer": 2,
    "category": "Ogohlantiruvchi va avariya ishoralari, avariya sababli toxtash belgisining qollanilishi",
    "explanation": "YHQ 8-bobi 50-bandining birinchi xatboshisi asosan: Burilishni ko'rsatuvchi barcha yorug’lik ishoralarining bir vaqtda miltillashi avariya (xavf-xatar) ishoralari hisoblanadi.\nYHQ 8-bobi 50-bandining to’rtinchi xatboshisiga asosan, avariya ishorasi quyidagi hollarda yoqilishi kerak: shatakka olishda (shatakka olingan transport vositasida)."
  },
  {
    "id": 189,
    "biletId": 19,
    "text": "Qon oqishini to’xtatuvchi jgut qo’l oyoqlarni qayeridan bog’lanadi?",
    "options": [
      "Yaradan 10-15 sm pastga",
      "Yaradan 10-15 sm yuqoriga",
      "Bevosita yaraning o’ziga"
    ],
    "correctAnswer": 1,
    "category": "Qo‘l jarohatlari",
    "explanation": "Jgut qo’yilishi deyarli barcha hollarda arterial qon ketishini to'xtatadi. Arterial qon ketishini to'xtatish uchun jgut avtomobilning tibbiy qutichasida ham mavjud. Jgut bo’lmagan hollarda kamar, belbog’, podtyajkalar va boshqa shunga o’xshash vositalar qo’llanilishi mumkin. Jgut qo’l yoki oyoqqa qon ketish joyidan yuqoriroq joyga ikki – uch marta aylantirib, faqat kiyim ustidan qo’yiladi yoki uning tagiga bir necha qatlamdan iborat (dast) ro'mol, sochiq yoxud boshqa gazlamadan astar qo’yiladi. Jgut cho’zib mahkamlanadi va qon ketishi to'xtagan vaqtdan so’ng, cho’zishdan to’xtatiladi. Jgutga u qo’yilgan vaqtni ko’rsatuvchi kichik qaydnoma qistirib qo’yiladi."
  },
  {
    "id": 190,
    "biletId": 19,
    "text": "Mototsikl shinalari naqshining qoldiq chuqurligi qanchadan kam bo’lmasligi kerak?",
    "options": [
      "0,5 mm",
      "0,8 mm",
      "1,0 mm",
      "1,6 mm",
      "2,0 mm"
    ],
    "correctAnswer": 1,
    "category": "G'ildirak va shinalar",
    "explanation": "YHQ 3-ilovasi 5-Bo’limi 5.1-bandining to’rtinchi xatboshisiga asosan, shina protektori naqshlarining qoldiq balandligi mototsikl va mopedlar (skuterlar, kvadrotsikllar) uchun — 0,8 mm dan kam bo'lsa foydalanish taqiqlanadi."
  },
  {
    "id": 191,
    "biletId": 20,
    "text": "Qaysi transport vositasining haydovchisi birinchi navbatda harakatlanish ustunligiga ega?",
    "options": [
      "Yo’l xizmati mashinasining haydovchisi",
      "Yengil avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i20_1.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart.\nYHQ 6-bobi 29-bandiga asosan: Zarg’aldoq yoki sariq rangli chiroq-mayoqchasi yoqilgan transport vositalarining haydovchilari yo'l qurilishi, ta’mirlanishi va tozalanishi jarayonida hamda texnik shikastlangan, nosoz bo’lgan, shuningdek qonunda ko'zda tutilgan hollarda boshqa transport vositalarini ortishda yo’l harakati xavfsizligini ta’minlash sharti bilan ushbu Qoidalarning yo’l belgilari (2.2, 2.4 — 2.6, 3.11 — 3.14, 3.17.2, 3.20 yo’l belgilaridan tashqari), yo'l chiziqlari hamda 67 — 71 va 121-bandlari talablaridan chetga chiqishlari mumkin."
  },
  {
    "id": 192,
    "biletId": 20,
    "text": "Bu belgilarning qaysi biri \"Bir tomonlama harakatlanish yo'liga chiqish\"ni bildiradi?",
    "options": [
      "Birinchi va beshinchi",
      "Uchinchi va beshinchi",
      "Ikkinchi va to’rtinchi"
    ],
    "correctAnswer": 0,
    "category": "Buyuruvchi belgilar",
    "imageUrl": "/images/questions/i20_2.webp",
    "explanation": "YHQ 1-ilovasi 5-Bo’limining па sakkizinchi xatboshisiga asosan: 5.7.1, 5.7.2. \"Bir tomonlama harakatli yo’lga chiqish\". Harakatlanish bir tomonlama bo'lgan yo’lga yoki qatnov qismiga chiqishni bildiradi."
  },
  {
    "id": 193,
    "biletId": 20,
    "text": "Qaysi yo’nalishlarda harakatlanishga ruxsat etiladi?",
    "options": [
      "\"A\" yo’nalishda",
      "\"Б\" yo’nalishda",
      "\"В\" yo’nalishda",
      "\"A\", \"Б\" va \"В\" yo’nalishlarida",
      "\"Б\" va \"В\" yo’nalishlarida"
    ],
    "correctAnswer": 3,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i20_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining o'n uchinchi xatboshisiga asosan: 1.11 — faqat bir tomondan qayta tizilishga ruxsat etilgan yo'l qismlarida, bir yo’nalishdagi yoki qarama-qarshi kelayotgan transport oqimlarini ajratadi;\nqayrilib olish, to'xtash maydonchalari va shunga o’xshashlarga kirish-chiqish joylarida harakatlanish faqat bir yo’nalishda ruxsat etilganligini ko'rsatadi;\nYHQ 2-ilovasi 1-bo'limining o'ttiz sakkizinchi xatboshisiga asosan: 1.11 chizig’ini uzuq-uzuq chiziq tomonidan, sidirg’a chiziq tomonidan esa faqat quvib yoki aylanib o'tishni tugatayotganda bosib o’tishga ruxsat etiladi."
  },
  {
    "id": 194,
    "biletId": 20,
    "text": "Quyidagi hollarning qaysi birida temir yo’l kesishmasiga kirish taqiqlanadi?",
    "options": [
      "Svetoforning taqiqlovchi ishorasi yonganda shlagbaum ochiq turgan holatda",
      "Qishloq xo’jaligi mashinasini mexanik transport vositasiga yuklab olib o’tish holatida",
      "Tezligi 8 km/soatdan ko’p bo’lgan transport vositalari"
    ],
    "correctAnswer": 0,
    "category": "Temir yo'l kesishmalari orqali harakatlanish",
    "explanation": "YHQ 18-bobi 118-bandining ikkinchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: shlagbaum holatidan qat’i nazar, svetoforning taqiqlovchi ishorasida."
  },
  {
    "id": 195,
    "biletId": 20,
    "text": "Avtomobillar chorrahadan quyidagi tartibda o’tadi:",
    "options": [
      "Qizil, yashil, ko’k",
      "Ko’k, qizil, yashil",
      "Uchchalasi bir vaqtda"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i20_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 196,
    "biletId": 20,
    "text": "Yo’lovchilarning va mahkamlanmagan yukning shiddat bilan oldinga surilib ketishiga nima sabab bo’lishi mumkin?",
    "options": [
      "Faqat tezlikni keskin oshirish",
      "Faqat keskin tormozlash",
      "Tezlikni keskin oshirish va keskin tormozlash"
    ],
    "correctAnswer": 1,
    "category": "Odam tashish",
    "imageUrl": "/images/questions/i20_6.webp",
    "explanation": "Yo’lovchilar va yuklar birdan tormozlash natijasida oldinga qarab harakatlanishiga olib keladi.\nKeskin tezlashuv yo’lovchilar va yuklarning orqaga qarab harakatlanishiga olib keladi."
  },
  {
    "id": 197,
    "biletId": 20,
    "text": "Kunduzgi vaqtda transportning old yoki orqa tomoniga 1 metrdan ortiq chiqib turgan yuk qanday belgilanadi?",
    "options": [
      "Diagonali bo’yicha qizil va oq almashuvchi chiziqlari bo’lgan taxtacha yoki bayroqchalar bilan",
      "Qizil bayroqchalar bilan",
      "Oq bayroqchalar bilan"
    ],
    "correctAnswer": 0,
    "category": "Yuk tashish",
    "explanation": "YHQ 27-bobi 163-bandiga asosan: Transport vositasining gabaritlaridan old yoki orqa tomonga bir metrdan, yon tomonga gabarit chiroqlarining chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk \"Katta o’lchamli yuk\" taniqlik belgisi bilan belgilanishi, qorong’i vaqtda va yetarlicha ko’rinmaydigan sharoitda esa bunga qo’shimcha ravishda old oq chiroq yoki yorug’lik qaytargich, orqasi esa qizil chiroq yoki yorug’lik qaytargich bilan belgilanishi kerak.\nYHQ 29-bobi 176-bandining sakkizinchi xatboshisiga asosan, transport vositalariga quyidagi taniqlik belgilari o'rnatilishi kerak: \"Katta o'lchamli yuk\" — ichiga kengligi 50 millimetrli, diagonal bo’yicha navbatma-navbat qizil va oq rangli chiziqlar tushirilgan, nur qaytaradigan yuzali, o’lchami 400 x 400 millimetrli to'rtburchak shaklidagi belgi."
  },
  {
    "id": 198,
    "biletId": 20,
    "text": "Bu yotiq chiziq quyidagi vazifani bajaradi:",
    "options": [
      "Maxsus piyodalar yo'lkasini bildiradi",
      "Velosiped yo’lkasini bildiradi, chiziq yo’naltirgichlari bo’laklar bo’yicha harakat yo’nalishini ko’rsatadi",
      "Piyodalar o’tish joyini bildiradi, chiziq yo’naltirgichlari piyodalar harakatlanish yo’nalishini ko’rsatadi"
    ],
    "correctAnswer": 2,
    "category": "Yotiq chiziqlar",
    "imageUrl": "/images/questions/i20_8.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n oltinchi va o'n yettinchi xatboshlariga asosan: 1.14.2 (zebra) — tartibga solinmagan va solingan piyodalarning o’tish joyini belgilaydi; 1.14.2 yotiq chiziqning yo’'naltirgichlari piyodalarning harakatlanish yo’nalishini ko’rsatadi."
  },
  {
    "id": 199,
    "biletId": 20,
    "text": "Sirpanchiq yo’lda karbyuratorning drossel zaslonkasini keskin ochish qanday xavfli oqibatlarga olib kelishi mumkin?",
    "options": [
      "Karbyurator qismlari ishdan chiqishiga",
      "Yurgizgich ishlashdan to’xtab qolishiga",
      "Avtomobilning yonga sirpanib ketishiga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Sirpanchiq yo'lda surilish hollari avtomobil g’ildiraklarining shataksirashi (joyida aylanishi) natijasida harakatning birdan tezlanishdan kelib chiqadi. Bu holda surilish sabablarini bartaraf qilish, ya’ni yonilg’i o’tishini boshqaruvchi tepkisini (drossel zaslonkasini) bosishni kamaytirish lozim."
  },
  {
    "id": 200,
    "biletId": 20,
    "text": "Yuk avtomobilining yukxonasida qancha miqdorda odamlarni tashishga ruxsat etiladi?",
    "options": [
      "20 nafar kishidan ortiq emas",
      "Tashilayotgan odamlar soni, o’tirish uchun jihozlangan o’rindiqlar miqdoridan ortiq bo’lmasligi kerak",
      "Haydovchining xohishiga ko’ra",
      "Ma’muriyatning ko’rsatmasiga ko’ra"
    ],
    "correctAnswer": 1,
    "category": "Odam tashish",
    "explanation": "YHQ 26-bobi 154-bandiga asosan: Yuk avtomobilining yukxonasida, shuningdek shaharlararo, sayyohlik, ekskursiya yoki tog’li yo'nalishlarda va bolalar guruhini tashkiliy tashishda tashilayotgan odamlar soni o’tirish uchun jihozlangan o’rindiqlar sonidan oshmasligi kerak."
  },
  {
    "id": 201,
    "biletId": 21,
    "text": "Yaltirovchi ko’k mayoqcha va unga qo’shimcha maxsus tovushli ishorasi yoqilgan transport vositasi sizga yaqinlashib kelmoqda. Siz shunday transport vositasiga qarshi harakatlanayotgan bo’lsangiz, nima qilishingiz lozim?",
    "options": [
      "Yo’l yoqasida yoki qatnov kismining chetida to’xtash",
      "Mayoqcha ishorasi yoqilgan transport vositasiga halaqit bermasdan yo’l chetidan harakatlanish"
    ],
    "correctAnswer": 1,
    "category": "Maxsus transport vositalarining imtiyozlari",
    "explanation": "YHQ 6-bobi 26-bandiga asosan: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi."
  },
  {
    "id": 202,
    "biletId": 21,
    "text": "Ko’rsatilgan belgi ostidagi qo’shimcha axborot belgisi qanday maqsadda o’rnatilgan?",
    "options": [
      "Belgining amal qilish hududida foto va video moslamalardan foydalanish ta’qiqlanadi",
      "DYHXX tomonidan harakat jarayoni foto va video kuzatuviga olingan yo’l qismini bildiradi"
    ],
    "correctAnswer": 1,
    "category": "Ogohlantiruvchi belgilar",
    "imageUrl": "/images/questions/i21_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining o’ttiz ikkinchi xatboshisiga asosan: 7.19. \"Foto va video qayd etish\". Yo'l harakati qatnashchilarining harakatlari maxsus avtomatlashtirilgan foto va video qayd etish texnika vositalari orqali qayd etilayotganligini bildiradi. Ogohlantiruvchi, imtiyoz, taqiqlovchi, buyuruvchi va axborot ishora belgilari bilan birgalikda qo’llaniladi."
  },
  {
    "id": 203,
    "biletId": 21,
    "text": "Yo’naltirgichlar bilan ko’rsatilgan yo’nalishlarning qaysi biridan harakat qilish mumkin?",
    "options": [
      "Faqat to’g’riga",
      "Chapga va orqaga",
      "To’g’riga, chapga va orqaga"
    ],
    "correctAnswer": 0,
    "category": "Yotiq chiziqlar",
    "imageUrl": "/images/questions/i21_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining o’ttiz sakkizinchi xatboshisiga asosan: 1.11 chizig'ini uzuq-uzuq chiziq tomonidan, sidirg’a chiziq tomonidan esa faqat quvib yoki aylanib o'tishni tugatayotganda bosib o’tishga ruxsat etiladi."
  },
  {
    "id": 204,
    "biletId": 21,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Mototsikl, avtomobil, tramvay",
      "Tramvay, avtomobil, mototsikl",
      "Tramvay, mototsikl, avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i21_4.webp",
    "explanation": "YHQ 16-bobi 104-Bandiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo'nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 205,
    "biletId": 21,
    "text": "Chorrahani ikkinchi bo’lib kesib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i21_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi опддап kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 206,
    "biletId": 21,
    "text": "Yo’lning yoritilmagan qismlarida qorong’i vaqtda to’xtaganda gabarit chiroqlari nosoz bo’lsa:",
    "options": [
      "Yaqinni yorituvchi faralarni yoqish",
      "O’ngroqqa olish va yaqinni yorituvchi farani yoqish zarur",
      "Transport vositasini yo’ldan tashqariga chiqarish, agar buning iloji bo’lmasa mazkur qoidalar talablariga binoan uni belgilash lozim"
    ],
    "correctAnswer": 2,
    "category": "Tashqi yoritish asboblaridan foydalanish",
    "explanation": "YHQ 23-bobi 136-bandi: Sutkaning qorong’i vaqtida yo’lning yoritilmagan qismida, shuningdek, yetarlicha ko’rinmaydigan sharoitda to’xtagan yoki to’xtab turgan transport vositasida gabarit fara chiroqlari yoqilgan bo’lishi kerak."
  },
  {
    "id": 207,
    "biletId": 21,
    "text": "Bu joyda to’xtash mumkinmi?",
    "options": [
      "Mumkin",
      "Taqiqlangan"
    ],
    "correctAnswer": 1,
    "category": "To'xtash va to'xtab turish",
    "imageUrl": "/images/questions/i21_7.webp",
    "explanation": "YHQ 13-bobi 88-bandi 2-xatboshiga asosan, aholi punktlarida yo’llarning chap tomonida to’xtash va to’xtab turishga har yo’nalishda bittadan harakatlanish bo'lagi bo'lgan va o’rtada tramvay izi bo’lmagan hamda harakat faqat bir tomonlama bo’lgan yo'llarda ruxsat etiladi."
  },
  {
    "id": 208,
    "biletId": 21,
    "text": "Harakatlanish mumkin bo’lgan yo’nalish qaysi rasmda ko’rsatilgan?",
    "options": [
      "Chapdagi rasmda",
      "Pastdagi rasmda",
      "O’ngdagi rasmda",
      "O’rtadagi va o’ngdagi rasmda"
    ],
    "correctAnswer": 2,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i21_8.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma uchinchi xatboshisiga asosan: 3.19. \"Qayrilish taqiqlangan\" belgisida faqat qayrilib olish taqiqlanadi."
  },
  {
    "id": 209,
    "biletId": 21,
    "text": "Orqa tomondagi tumanga qarshi chiroqlar quyidagi hollarda qo’llanishi mumkin:",
    "options": [
      "Kunning qorong’i vaqtida safda harakatlanishda",
      "Tonellarda harakatlanishda",
      "Faqat yetarli ko’rinmaydigan sharoitlarda",
      "Kunning qorong’i vaqtida yuk tushirishda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Tashqi yoritish asboblaridan foydalanish",
    "explanation": "YHQ 23-bobi 140-bandiga asosan: Tumanga qarshi orqa chiroqlarni faqat yetarlicha ko’rinmaydigan sharoitda qo’llash mumkin. Tumanga qarshi orqa chiroqlarni to'xtash chiroqlari(stop-signal)ga ulash taqiqlanadi."
  },
  {
    "id": 210,
    "biletId": 21,
    "text": "Qo’shaloq shinalar orasiga begona jismlar tiqilib qolganda transport vositalaridan foydalanishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Mazkur yo’nalishda ikki va undan ortiq tasma bo’lganda yo’lning faqat o’ng tarafdagi tasmasi bo’ylab harakatlanishga ruxsat etiladi",
      "Ko’pi bilan 40 km/soat tezlikda harakat qilishga ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "G'ildirak va shinalar",
    "explanation": "YHQ 3-ilovasi 5-bo'limi 5.3-bandiga asosan: Qo’shaloq shinalar orasiga xavf-xatar tug’diruvchi begona jismlar qisilib, tiqilib qolgan bo’lsa foydalanish taqiqlanadi."
  },
  {
    "id": 211,
    "biletId": 22,
    "text": "Sariq avtobusning haydovchisiga chorrahaga chiqishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar avtobus belgilangan yo’nalish bo’yicha yursa, tuxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i22_1.webp",
    "explanation": "YHQ 14-bobi 97-bandiga asosan: Haydovchi tirbandlik tufayli majburiy to’xtab, ko'ndalang yo'nalishdagi transport vositalarining harakatlanishiga to'sqinlik tug’diradigan bo’lsa, chorraha yoki qatnov qismlari kesishmasiga kirishi taqiqlanadi."
  },
  {
    "id": 212,
    "biletId": 22,
    "text": "Ruxsat etilgan harakatlanish yo’nalishini ko’rsating:",
    "options": [
      "Faqat \"A\"",
      "Faqat \"Б\"",
      "Faqat \"В\"",
      "\"A\" va \"Б\"",
      "\"Б\" va \"В\""
    ],
    "correctAnswer": 3,
    "category": "Chorrahada harakatlanish",
    "imageUrl": "/images/questions/i22_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining to’qqizinchi xatboshisiga asosan: 4.1.1 belgisi yo’lning qismi boshlanishiga o’rnatilsa, unga yaqin chorrahagacha amal qilinadi. Belgi o'ng tomonda joylashgan hovli va boshqa yondosh hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 213,
    "biletId": 22,
    "text": "Qaysi belgi faqat oyning juft kunlarida to’xtab turishni taqiqlanishini anglatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i22_3.webp",
    "explanation": "YHQ 1-ilovasi 3-Bo’limining o’ttiz to’rtinchi xatboshisiga asosan: 3.30. \"Oyning juft kunlarida to'xtab turish taqiqlangan\"."
  },
  {
    "id": 214,
    "biletId": 22,
    "text": "Bu yo’l belgisi:",
    "options": [
      "Faqat belgida ko’rsatilgan yoki yuqori tezlikda harakatlanishga ruxsat beradi",
      "Belgida ko’rsatilgandan ortiq tezlikdagi harakatni taqiqlaydi",
      "Yo’lning shu qismida tavsiya etilgan harakatlanish tezligini ko’rsatadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i22_4.webp",
    "explanation": "YHQ 1-ilovasi 4-Bo’limining yigirma to'rtinchi xatboshisiga asosan: 4.7. \"Eng kam tezlik\". Faqat belgida ko'rsatilgan yoki undan yuqori tezlikda (km/soat) harakatlanishga ruxsat etilishini bildiradi."
  },
  {
    "id": 215,
    "biletId": 22,
    "text": "Chorrahani oxirgi bo’lib kesib o’tadi:",
    "options": [
      "Yashil avtomobil",
      "Ko’k avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i22_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi опддап kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 216,
    "biletId": 22,
    "text": "Haydovchi ko’zi qamashgan taqdirda quyidagilarni bajarishi shart:",
    "options": [
      "Qatnov qismining iloji boricha o’ng tomoniga o’tib to’xtashi",
      "Avariya (xavf-xatar) ishoralarini yoqishi va harakat bo’lagini o’zgartirmagan holda tezlikni kamaytirishi va to’xtashi",
      "Agar oldinda transport vositalari paydo bo’lsa, tasmani o’zgartirmay tezlikni kamaytirishi yoki to’xtashi",
      "Uzoqni yorituvchi chiroqni yoqishi va to’xtashi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 135-bandining to’rtinchi xatboshisiga asosan: Ko’zi qamashgan haydovchi avariya ishoralarini yoqishi, harakatlanish bo’lagini o’zgartirmasdan tezlikni kamaytirishi va to’xtashi kerak."
  },
  {
    "id": 217,
    "biletId": 22,
    "text": "To’xtash yo’li deb nimaga aytiladi?",
    "options": [
      "Xavfning haydovchiga ma’lum bo’lgan paytidan tormozlash boshlanguncha avtomobilda o’tilgan masofa",
      "Avtomobilda xavfning haydovchiga ma’lum bo’lgan paytidan boshlab to’la to’xtashga qadar o’tilgan masofa"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "To’xtash yo’liga haydovchining xavf-xatarsiz sezgan vaqtidan boshlab transport vositasining butunlay to’xtagunga qadar yurib o’tgan masofasi tushuniladi. To’xtash yo’li doim tormoz yo'lidan ko’proq bo’ladi, chunki tormozlanish boshlanishidan avval transport vositasi haydovchining reaksiya vaqti va tormoz uzatmasining ishlab ketish vaqtiga bog’liq bo’lgan masofadan o’tib oladi"
  },
  {
    "id": 218,
    "biletId": 22,
    "text": "Transport vositalarida sun’iy yoritilgan tunnelda harakatlanayotganda qanday yoritish asboblari yoqilishi kerak?",
    "options": [
      "Faqat uzoqni yorituvchi fara chiroqlari",
      "Uzoqni yoki yaqinni yorituvchi fara chiroqlari",
      "Avariya (xavf-xatar) ishoralari",
      "Yoritish chiroqlari yoqilmaydi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 134-bandining birinchi va ikkinchi xatboshlariga asosan: Qorong’i vaqtda va yetarlicha ko’rinmaydigan sharoitda, shuningdek yo’lning yoritilganligidan qat’i nazar, tunnellarda harakatlanayotgan transport vositalarida quyidagi yoritish asboblari yoqilgan bo’lishi kerak: barcha mexanik transport vositalari — uzoqni yoki yaqinni yorituvchi chiroqlar."
  },
  {
    "id": 219,
    "biletId": 22,
    "text": "Avtomobilda tibbiyot qutichasini qayerda saqlash lozim?",
    "options": [
      "Yengil avtomobilning yukxonasida",
      "Tayyorlovchi korxona tomonidan belgilangan joylarda berk holatda",
      "Avtomobilning kuzovida ko’rinadigan joyda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 7-bo’limining 7.10-bandiga asosan, tibbiyot qutichasi, o't o’chirgich transport vositalarini ishlab chiqargan korxona tomonidan belgilangan joyda mustahkam o’rnatiladi. Agar transport vositasining konstruksiyasida bunday joy ko'zda tutilmagan bo’lsa, tibbiyot qutichasi oson olinadigan joyda o’rnatiladi."
  },
  {
    "id": 220,
    "biletId": 22,
    "text": "Yuk tirkamasida odam tashishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi",
      "Faqat yukni kuzatib boruvchi shaxsga ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 159-bandining uchunchi xatboshisiga asosan, odamlarni tashish quyidagi hollarda taqiqlanadi: Traktorlar va boshqa o’ziyurar uskunalar, yuk tashiladigan tirkamalar, tirkama-uycha, yuk mototsikllari, elektromototsikllar, mopedlar va skuterlar yukxonasida."
  },
  {
    "id": 221,
    "biletId": 23,
    "text": "Kim \"Yo’l harakati qatnashchisi\" hisoblanadi?",
    "options": [
      "Yo’l harakati jarayonida transport vositasining haydovchisi, yo’lovchisi yoki piyoda tariqasida bevosita ishtirok etayotgan shaxs",
      "Yo’lda bo’lgan va unda ish bajarmayotgan har qanday shaxs",
      "Biror bir transport vositasini boshqarayotgan shaxs"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-bobi 6-bandining qirq to’qqizinchi xatboshisiga asosan: Yo’l harakati qatnashchisi — yo’l harakati jarayonida transport vositasining haydovchisi, yo’lovchisi yoki piyoda tariqasida bevosita ishtirok etayotgan shaxs."
  },
  {
    "id": 222,
    "biletId": 23,
    "text": "Avtomobil harakatining barcha ruxsat etilgan yo’nalishlari qaysi javobda to’g’ri ko’rsatilgan?",
    "options": [
      "Faqat chapga",
      "Faqat to’g’riga",
      "Faqat o’ngga",
      "Chap va o’ngga",
      "Barcha yo’nalishlarda"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’'limining yettinchi xatboshisiga asosan: 3.5. \"Mototsikl va elektromototsikllar harakatlanishi taqiqlangan\"."
  },
  {
    "id": 223,
    "biletId": 23,
    "text": "Rasmda ko’rsatilgan holatda yo’lovchilarni tushirish uchun to’xtashga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_3.webp",
    "explanation": "YHQ 22-bobi 132-bandining ikkinchi va uchinchi xatboshlariga asosan: Agar 5.9 yo’l belgisi bilan belgilangan tasma qatnov qismining boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan bo’lsa, burilmoqchi bo’layotgan transport vositalari bu tasmaga qayta tizilishlari kerak.\nShuningdek, bunday joylarda yo’nalishli transport vositalarining harakatiga xalaqit bermaslik sharti bilan yo’lga chiqish, qatnov qismining chetki o’ng tomonida yo’lovchilarni chiqarish va tushirish uchun bu bo’lakka o’tishga ruxsat etiladi."
  },
  {
    "id": 224,
    "biletId": 23,
    "text": "Haydovchilardan qaysi biri to’xtashga majbur?",
    "options": [
      "Yengil avtomobil haydovchisi",
      "Avtobus haydovchisi",
      "Har ikki haydovchi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_4.webp",
    "explanation": "YHQ 17-bobi 109-bandiga asosan: Tartibga solinmagan piyodalar o’tish joyiga yaqinlashayotgan transport vositasining haydovchisi qatnov qismini kesib o’tayotgan piyoda (lar)ni o'tkazib yuborish uchun tezligini kamaytirishi yoki to’xtashi shart."
  },
  {
    "id": 225,
    "biletId": 23,
    "text": "Qaysi avtomobil chorrahadan oxirgi bo’lib o’tadi?",
    "options": [
      "Ko’k",
      "Qizil",
      "Yashil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 226,
    "biletId": 23,
    "text": "Ko’rsatilgan avtomobillarning qaysi biri ag’darilishga qarshi turg’unroq?",
    "options": [
      "Ichida tik turgan yo’lovchilar bo’lgan avtobus",
      "Avtokran",
      "Bo’sh yuk avtomobili"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_6.webp",
    "explanation": "Burilishlarda yo’lovchisi va yuki bo’lmagan avtomobillar ko’proq muvozanat saqlab qoladi, chunki bunday avtomobilda og’irlik markazi eng past joylashgan bo’lib, eng kam ag’darilish ehtimoliga ega bo’ladi."
  },
  {
    "id": 227,
    "biletId": 23,
    "text": "Haydovchi quyidagi holatda o’ng tomondan o’zib o’tishi mumkinmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_7.webp",
    "explanation": "YHQ 12-bobi 83-bandiga asosan: Bir yo’nalishda harakatlanayotgan relssiz transport vositalarini har ikki tomonidan o’zib ketishga ruxsat beriladi. Biroq chapga burilish ishorasini berib, burilishga kirishgan transport vositasini o’zib ketish o’ng tomondan amalga oshiriladi."
  },
  {
    "id": 228,
    "biletId": 23,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi lozim?",
    "options": [
      "Yengil avtomobil haydovchisi",
      "Yuk avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i23_8.webp",
    "explanation": "YHQ 9-bobi 55-bandiga asosan: Haydovchi qayta tizilishda harakatlanish yo’nalishini o’zgartirmasdan harakatlanayotgan yo’lakay transport vositalariga yo’l berishi kerak."
  },
  {
    "id": 229,
    "biletId": 23,
    "text": "Boshqaruv qurilmasi nosoz mexanik transport vositasi shatakka olinishi kerak:",
    "options": [
      "Qisman ortish usuli bilan",
      "Qattiq ulagich bilan",
      "Uni qisman ortish yoki qattiq ulagichda ulash usuli bilan",
      "Agar shatakka oluvchining haqiqiy vazni shatakka olinayotganning haqiqiy vaznidan ikki marta ko’p bo’lsa qattiq ulagichda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandining birinchi xatboshisiga asosan, shatakka olish quyidagi holatlarda taqiqlanadi: rul boshqaruvi ishlamayotgan transport vositalarini (qisman ortish yo’li bilan shatakka olish bundan mustasno)."
  },
  {
    "id": 230,
    "biletId": 23,
    "text": "12 yoshga etmagan bolalarni transport vositasining oldingi o’rindig’ida tashishga ruxsat etiladimi?",
    "options": [
      "Bolalarni ushlab turuvchi maxsus qurilma o’rnatilgan bo’lsa ruxsat etiladi",
      "Faqat katta yoshdagi yo’lovchi hamroh bo’lganida ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 159-bandiga asosan: Odamlarni tashish quyidagi hollarda taqiqlanadi:\nbolalarni yuk avtomobillarining yukxonasida;\ntransport vositasining kabinasidan tashqarida (odam tashish uchun mo’ljallangan bortli yuk yoki furgon-yuk xonali avtomobillar bundan mustasno);\nTraktorlar va boshqa o’ziyurar uskunalar, yuk tashiladigan tirkamalar, tirkama-uycha, yuk mototsikllari, elektromototsikllar, mopedlar va skuterlar yukxonasida;\nMototsikllar, elektromototsikllar, mopedlar va skuterlarning konstruksiyasida ko’zda tutilgan joylardan tashqarida;\n12 yoshga to’lmagan bolalarni mototsikl, elektromototsikl, moped va skuterning orqa o’rindig’ida, shuningdek, bolalarni ushlab turuvchi maxsus qurilma o’rnatilmagan transport vositasining old o’rindig’ida;\nodam soni transport vositasining texnik tavsifnomasida ko’zda tutilgan miqdordan ortiq bo’lganda.\nBunda transport vositasining haqiqiy vazni uni ishlab chiqargan korxona belgilagan ruxsat etilgan vazndan oshmasligi kerak."
  },
  {
    "id": 231,
    "biletId": 24,
    "text": "Qaysi rasmda piyodalar qoidani buzmay harakatlanmoqda?",
    "options": [
      "Chapdagi rasmda",
      "O’ngdagi rasmda",
      "Ikkala rasmda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i24_1.webp",
    "explanation": "YHQ 4-bobi 15-bandining birinchi va uchinchi xatboshilariga asosan: Piyodalar trotuardan yoki piyodalar yo’lkasidan, ular bo'lmaganda esa уо 1 yoqasidan yurishlari kerak. Qatnov qismining chetida harakatlanayotgan piyodalar transport vositalarining harakatiga qarama-qarshi yo’nalishda yurishlari kerak."
  },
  {
    "id": 232,
    "biletId": 24,
    "text": "Bu belgi nimani bildiradi?",
    "options": [
      "To’siqlarni aylanib o’tishning dastlabki ko’rsatkichi",
      "Boshqa qatnov qismiga qayta tizilishning dastlabki ko’rsatkichi",
      "Qarama-qarshi yo’nalish bo’lagiga chiqishning boshlang’ich ko’rsatkichi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i24_2.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’limining o’ninchi xatboshisiga asosan: 2.6. \"Ro’para harakatlanishning ustunligi\". Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo'lning tor qismiga kirish taqiqlanadi. Haydovchi yo'lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 233,
    "biletId": 24,
    "text": "Qatnov qismidagi bunday yo’naltirgichlar nimani bildiradi?",
    "options": [
      "Haydovchini yo’lning xavfli qismiga yaqinlashayotganligi haqida ogohlantiradi",
      "Qatnov qismi torayishiga yaqinlashayotganligi haqida ogohlantiradi",
      "Yo’lning xavfli burilishi yo’nalishini ko’rsatadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i24_3.webp",
    "explanation": "YHQ 2-ilovasi 1-Bo’limining yigirma uchinchi xatboshisiga asosan: 1.19 — qatnov qismining toraygan (shu yo'nalishdagi harakatlanish tasmalarining soni kamaygan) joyiga yoki qarama-qarshi yo’nalishdan kelayotgan transport vositalari oqimlarini ajratuvchi 1.1 yoki 1.11 chizig’iga yaqinlashganlik haqida ogohlantiruvchi chiziq. Birinchi holda 1.18.1 — 1.18.3 belgilari bilan qo’llanilishi mumkin."
  },
  {
    "id": 234,
    "biletId": 24,
    "text": "Quyidagilar poyezdni to’xtatish ishorasi bo’lib xizmat qiladi:",
    "options": [
      "Qo’lni (kunduzi - bir parcha yorqin mato yoki aniq ko’rinadigan bir narsa bilan, tunda - mash’ala yoki chiroq bilan) gir aylantirish",
      "Qo’ldagi tayoqchani yoki qizil bayroqni boshidan yuqori ko’tarib turish",
      "Qo’llarini oldinga uzatib turish",
      "Oldinga uzatilgan qo’llarni yuqoriga va pastga tebratish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 120-bandining beshinchi xatboshisiga asosan: To’xtash ishorasi qo'lni (kunduzi yorqin mato parchasi yoki aniq ko’rinadigan biror narsa bilan, tunda esa mash’ala yoki chiroq bilan) gir aylantirish orqali beriladi."
  },
  {
    "id": 235,
    "biletId": 24,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Ko’k, yashil, qizil avtomobillar",
      "Ko’k, qizil avtomobilni o’tkazib yuboradi, so’ng burilishni tugallaydi; yashil avtomobil",
      "Qizil, ko’k, yashil avtomobillar",
      "Yashil, qizil, ko’k avtomobillar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i24_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 236,
    "biletId": 24,
    "text": "Harakatda imtiyozga ega bo’ladi:",
    "options": [
      "Ko’k avtomobil, chunki qizil harakatlanish yo’nalishini chapga o’zgartiradi",
      "Qizil avtomobil, chunki o’zaro qayta tizilishda u o’ng tomonda bo’lgani uchun",
      "Ko’k avtomobil, chunki o’zaro qayta tizilishda u chap tomonda bo’ladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i24_6.webp",
    "explanation": "YHQ 9-bobi 55-bandiga asosan: Haydovchi qayta tizilishda harakatlanish yo’nalishini o’zgartirmasdan harakatlanayotgan yo’lakay transport vositalariga yo’l berishi kerak. Bir yo’nalishda harakatlanayotgan transport vositalari bir vaqtda qayta tizilayotganlarida haydovchi o’ng tomondagi transport vositasiga yo'l berishi kerak."
  },
  {
    "id": 237,
    "biletId": 24,
    "text": "Birinchi bo’lib chorrahani kesib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Yashil avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i24_7.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi опддап kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 238,
    "biletId": 24,
    "text": "Belgilangan yo’nalishdagi transport vositalari yoki taksilarning to’xtab turish maydonchalaridan, ular bo'lmagan hollarda, to’xtash ko’rsatkichlaridan qanday masofada to’xtash va to’xtab turish taqiqlanadi?",
    "options": [
      "5 m",
      "10 m",
      "15 m",
      "20 m",
      "25 m"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandining to'qqizinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: bekat maydonchalarida, yo’nalishli transport vositalari to’xtash joylarida, jumladan, 1.17 chizig'i bilan belgilangan, ular bo’lmaganda esa yo’nalishli transport vositalari to’xtash joyi belgilari va bekatdan harakatlanish yo'nalishi bo’ylab (yetmasdan va o’tib ketib) 15 metrdan kam masofada. (yo’nalishli transport vositalari harakatiga xalaqit bermasa yo’lovchilarni chiqarish yoki tushirish uchun to’xtash bundan mustasno)."
  },
  {
    "id": 239,
    "biletId": 24,
    "text": "Toliqish haydovchining diqqati va e’tiboriga qanday ta’sir qiladi?",
    "options": [
      "Haydovchining diqqat va e’tiboriga ta’sir qilmaydi",
      "Haydovchining diqqat va e’tibori pasayadi",
      "Haydovchining diqqat va e’tibori oshadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Toliqish haydovchining diqqati va e’tiboriga qanday ta’sir qiladi? Haydovchining diqqat va e’tiboriga ta’sir qilmaydi Toliqishning fiziologik mohiyati organizmning ish intensivligini kamaytirish yoki to’xtatish zarurligi hamda xabar berishdan iborat bo’lib, u charchash hissiyoti tarzida seziladi. Toliqish natijasida haydovchi favqulodda harakatlarga tayyorligini yo'qotadi, ya’ni yo'l transport hodisasi ehtimolini ko’payishiga olib keluvchi hushyorlik kamayishi yuzaga keladi. Psixologik nuqtai nazardan hushyorlik-bu markaziy nerv tizimining doimiy o'zgaruvchan yo’l - transport holatlariga nisbatan zarur, 02 vaqtida hamda to’g’ri harakatlarni kechiktirmay amalga oshirish uchun tayyorlik darajasidir."
  },
  {
    "id": 240,
    "biletId": 24,
    "text": "Velosiped yo’lkasi yo’l bilan kesishgan joylarda velosiped va moped haydovchilari qanday hollarda transport vositalariga yo’l berishlari kerak?",
    "options": [
      "Chorrahadan tashqarida tartibga solinmagan kesishmada barcha hollarda",
      "Transport vositasi o’ngdan yaqinlashib kelganda",
      "Ko’rsatilgan joyda velosiped va moped haydovchilari imtiyozga egadirlar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 169-bandiga asosan: Chorrahadan tashqaridagi tartibga solinmagan velosiped yo’lkasi bilan yo’l kesishmasida velosiped va individual harakatlanish vositalari yo’lda harakatlanayotgan boshqa transport vositalariga yo’l berishlari kerak."
  },
  {
    "id": 241,
    "biletId": 25,
    "text": "Jihozlangan bekatlari bo’lmagan tramvay to’xtash joylarida unga chiqish uchun qachon qatnov qismiga chiqishga ruxsat etiladi?",
    "options": [
      "Tramvay yaqinlashib kelganda",
      "Tramvay to’la to’xtagandan so’ng",
      "Har qanday holda",
      "Agar qatnov qismida transport vositalari yo’q bo’lsa, tramvay yaqinlashib kelganda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 22-bandining birinchi xatboshisiga asosan: Yo’nalishli transport vositalarini faqat qatnov qismidan baland joylashgan kutish maydonchalarida, ular bo'lmaganda esa, trotuar yoki yo’l yoqasida kutishlari kerak. Qatnov qismidan baland joylashgan maydonchalar bilan jihozlanmagan bekatlarda yo’nalishli transport vositalari to’la to’xtagandan so'ng unga chiqish uchun qatnov qismiga chiqishga ruxsat etiladi. Undan tushgandan keyin ushlanib qolmasdan qatnov qismini bo’shatishlari shart."
  },
  {
    "id": 242,
    "biletId": 25,
    "text": "Bu belgi avtomobilning harakatlanishiga ruxsat etadi:",
    "options": [
      "Barcha yo’nalishlarga",
      "\"Б\" va \"В\"",
      "\"А\" va \"В\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i25_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining yigirma beshinchi xatboshisiga asosan: 5.11.1. \"Qayrilib olish joyi\". Chapga burilish taqiqlanadi."
  },
  {
    "id": 243,
    "biletId": 25,
    "text": "Bu yotiq chiziqlardan qaysi biri belgilangan yo’nalishdagi transport vositalarining to’xtash joyini bildiradi?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\"",
      "\"А\" va \"Б\"",
      "\"Б\" va \"В\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i25_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirma birinchi xatboshisiga asosan: 1.17 — yo’nalishli transport vositalarining bekatlari hamda taksilarning to'xtab turish joylarini bildiradi."
  },
  {
    "id": 244,
    "biletId": 25,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Avtobus haydovchisi",
      "Mototsikl haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i25_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 245,
    "biletId": 25,
    "text": "Chorrahani ikkinchi bo’lib kesib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Yashil avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i25_5.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 246,
    "biletId": 25,
    "text": "Tumanga qarshi faralardan qaysi hollarda foydalanish mumkin?",
    "options": [
      "Yetarli ko’rinmaydigan sharoitlarda",
      "Mexanik transport vositasini shatakka olganda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 137-bandiga asosan, quyidagi hollarda tumanga qarshi chiroqlarni qo'llash mumkin: yetarlicha ko’rinmaydigan sharoitda alohida, shuningdek uzoqni yorituvchi yoki yaqinni yorituvchi chiroqlar bilan;\nqorong'i vaqtda yo’lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga;\nmexanik transport vositalarini shatakka olishda (shatakka olib ketayotgan transport vositasida);\nushbu Qoidalarning 138-bandida ko'zda tutilgan holatlarda yaqinni yorituvchi chiroqlar o’rniga."
  },
  {
    "id": 247,
    "biletId": 25,
    "text": "Yuk avtomobil haydovchisiga bu joyda to’xtashga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i25_7.webp",
    "explanation": "YHQ 13-bobi 91-bandining o'ninchi xatboshisiga asosan, quyidagi joy va holatlarda to'xtash taqiqlanadi: transport vositasi svetofor ishoralari, yo'l belgilarini boshqa haydovchilardan to’sib qo’yadigan, boshqa transport vositalarining harakatlanishiga (kirish va chiqishiga) imkon qoldirmaydigan yoki piyodalarning harakatiga xalaqit beradigan joylarda."
  },
  {
    "id": 248,
    "biletId": 25,
    "text": "Ko’rsatilgan vaziyatda yengil avtomobil haydovchisiga quvib o’tish ruxsat etiladimi?",
    "options": [
      "Ruxsat etilgan",
      "Ruxsat etilgan, agar mototsiklning tezligi 40 km/ soatdan kam bo’lsa",
      "Taqiqlangan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i25_8.webp",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo'lgan va chiziqlar bilan belgilangan (1.9 chizig'i bilan belgilanganidan tashqari) uchta tasmali yo'llarda, ikki yo'nalishda harakatlanish uchun mo’ljallangan o'rta qatorga faqat quvib o’tish, aylanib o'tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo'nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 249,
    "biletId": 25,
    "text": "Yo’l quruq bo’lganda g’ildirak aylanmay, sirpanib tormozlanish tormoz yo’liga qanday ta’sir etadi?",
    "options": [
      "Tormoz yo’li qisqaradi",
      "Tormoz yo’li o’zgarmaydi",
      "Tormoz yo’li ortadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Tormoz yo’lining kamayishiga blokirovka chegarasida erishiladi, chunki blokirovka qilingan g'ildiraklar aylanmay (sirpanib to'xtash) yo’lda sirpanadi va tormoz yo’lini uzaytiradi."
  },
  {
    "id": 250,
    "biletId": 25,
    "text": "Yonilg’i tizimi zich (germetik) emasligi ma’lum bo’lganda, haydovchi nimalarni bajarishi shart?",
    "options": [
      "Bundan keyingi harakatni to’xtatish",
      "Nosozlikni bartaraf etish tadbirlarini ko’rishi, agar buning imkoni bo'lmasa, zarur ehtiyot choralariga rioya qilgan holda to’xtab turish yoki ta’mirlash joyiga olib borish",
      "Belgilangan safarni davom ettirish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 6-bo’limining 6.2-bandiga asosan: Yonilg'i uzatish tizimi zich bo’lmasa foydalanish taqiqlanadi."
  },
  {
    "id": 251,
    "biletId": 26,
    "text": "Yaxmalak bo’lganda shatakka olishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Sirpanishga qarshi vositalarni qo’llab egiluvchan ulagichda faqat bitta transportni shatakka olish ruxsat etiladi",
      "Faqat qattiq ulagichda ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandining oltinchi xatboshisiga asosan, shatakka olish quyidagi holatlarda taqiqlanadi: yo’l yaxmalak, sirpanchiq bo’lgan hollarda egiluvchan ulagichda."
  },
  {
    "id": 252,
    "biletId": 26,
    "text": "Ushbu belgi amal qilgan hududda avtobus haydovchisi quvib o’tishi mumkinmi?",
    "options": [
      "Quvib o’tish qoidalariga rioya qilib barcha hollarda mumkin",
      "Mumkin emas",
      "Agar quvib o’tilayotgan transport vositalari soatiga 40 km.dan kam tezlikda harakat qilayotgan bo’lsagina mumkin"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i26_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma oltinchi xatboshisiga asosan: 3.22. \"Yuk avtomobillarida quvib o’tish taqiqlangan\". To'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillarida barcha transport vositalarini quvib o'tish taqiqlanishini bildiradi. (soatiga 40 km dan kam tezlikda harakatlanayotgan transport vositasi, traktor, ot-arava, velosiped bundan mustasno)."
  },
  {
    "id": 253,
    "biletId": 26,
    "text": "Reversiv harakatlanish amalga oshiriladigan harakat bo’laklari chegaralarini belgilash uchun bu yotiq chiziqlarning qay biridan foydalaniladi?",
    "options": [
      "1-chiziq",
      "2-chiziq",
      "3-chiziq",
      "2- va 3-chiziq",
      "3- va 4-chiziq"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i26_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining o'n birinchi xatboshisiga asosan: 1.9 — reversiv harakat tashkil etilgan bo’laklarning chegarasini belgilaydi; reversiv harakatlanish amalga oshirilgan yo’llarda (reversiv svetofori o’chirilgan holatda) qarama-qarshi yo'nalishdagi transport oqimini ajratadi."
  },
  {
    "id": 254,
    "biletId": 26,
    "text": "Xizmat vazifasini bajarayotganda shlagbaumni o’zboshimchalik bilan ochishga yoki uni aylanib o’tishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi",
      "Agar yaqinlashib kelayotgan poyezd yo’q bo’lsa, haydovchining ixtiyoriga qarab ruxsat etiladi",
      "Temir yo’l kesishmasi navbatchisi bo’lmagan holdagina ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 118-bandining yettinchi va sakkizinchi xatboshlariga asosan, temir yo'l kesishmasiga quyidagi hollarda kirish taqiqlanadi: kesishma oldida turgan transport vositalarini qarama-qarshi harakatlanish bo’lagiga chiqib aylanib o'tish; shlagbaumni o’zboshimchalik bilan ochish."
  },
  {
    "id": 255,
    "biletId": 26,
    "text": "Chorrahani ikkinchi bo’lib kesib o’tadi:",
    "options": [
      "Ko’k avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i26_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi опддап kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 256,
    "biletId": 26,
    "text": "Oraliq masofa, deb nimaga aytiladi?",
    "options": [
      "\"A\" masofa",
      "\"Б\" masofa",
      "\"A\" va \"Б\" masofa"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i26_6.webp",
    "explanation": "YHQ 10-bobi 73-bandiga asosan: Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to'qnashib ketmaslik kafolatini beradigan darajadagi oraliq masofani, shuningdek yo’l harakati xavfsizligini ta’minlaydigan yonlama oraliq masofani saqlashi kerak."
  },
  {
    "id": 257,
    "biletId": 26,
    "text": "Quvib o’tishni boshlashdan oldin haydovchi shunga ishonch hosil qilishi kerakki:",
    "options": [
      "Shu tasmada orqada harakatlanayotgan transport vositasi quvib o’tishni boshlamaganligiga",
      "Oldinda harakatlanayotgan transport vositasi quvib o’tish, chapga burilish (qayta tizilish) ishora bermayotganligiga",
      "Quvib o’tishni tugatilyotganda, quvib o’tilayotgan transport vositasiga xalaqit bermasdan ilgari egallagan qatorga qaytib o’ta olishiga ishonch hosil qilishi shart",
      "Barcha ko’rsatilgan harakatlarni bajara olishiga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 82-bandiga asosan, haydovchi quvib o'tishni boshlashdan oldin: o’zi o'tmoqchi bo’lgan harakatlanish bo’lagi quvib o'tish uchun yetarlicha masofada bo'sh ekanligiga, quvib o’tish jarayonida harakatlanishga xavf tug’dirmasligiga va boshqa harakat qatnashchilariga xalaqit bermasligiga;\nshu tasmada orqada harakatlanayotgan transport vositasi quvib o’tishni boshlamaganligiga;\noldinda harakatlanayotgan transport vositasi quvib o’tish, chapga burilish (qayta tizilish) ishorasini bermayotganligiga;\nquvib o'tishni tugallayotganda quvib o’tilayotgan transport vositasiga xalaqit bermasdan ilgari egallagan qatorga qaytib o'ta olishiga ishonch hosil qilishi shart."
  },
  {
    "id": 258,
    "biletId": 26,
    "text": "Majburiy to’xtagan haydovchi qanday choralar ko’rishi kerak?",
    "options": [
      "Yaqinni yorituvchi faralar yoki tumanga qarshi faralarni yoqishi kerak",
      "Yurgizgich kapotini ko’tarib qo’yishi kerak",
      "Avariya yorug’lik ishoralarini yoqish, agar u ishlamasa, avariya sababli to’xtash belgisini aholi punktlarida transport vositasidan 15 metrdan, ulardan tashqarida esa, 30 metrdan kam bo’lmagan masofada o’rnatishi kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 51-bandiga asosan: Transport vositasi to’satdan to’xtab qolganda, zudlik bilan avariya yorug’lik ishorasini yoqish, agar u ishlamasa, avariya sababli to’xtash belgisini darhol o’rnatish kerak. Avariya sababli to’xtash belgisi quyidagi hollarda qo’llaniladi:\nyo’l-transport hodisasi sodir bo’lganda;\nto’xtash taqiqlangan joylarda va ko’rinishi cheklangan joylarda majburiy to’xtaganda;\nUshbu belgi boshqa haydovchilarni xavfli vaziyat haqida o’z vaqtida ogohlantirish imkonini beradigan masofada o’rnatilishi kerak. Bu masofa aholi punktlarida transport vositasidan 15 metr, aholi punktlaridan tashqaridagi joylarda esa 30 metrdan kam bo’lmasligi kerak."
  },
  {
    "id": 259,
    "biletId": 26,
    "text": "Avtomobilning qaysi g’ildiraklari \"sirpanib\" tormozlanishga ko’proq moyil bo’ladi?",
    "options": [
      "Orqa g’ildiraklar",
      "Oldingi g’ildiraklar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Inersiya kuchi ta’siri ostida avtomobilni tormozlash vaqtida o’qlarga tushadigan inersiya kuchi miqdorining taqsimlanishi o’zgaradi. Natijada old o'qqa og’irlik ko’payadi, orqa o’qqa nisbatan kamayadi. Tormozlash intensivligi qanchalik baland bo’lsa, o’qlarga tushadigan og’irlik miqdorining taqsimlanishi sezilarliroq bo’ladi. Orqa o’qda og’irlik kamayishi bilan g’ildirakni yo'lga bosish kuchi kamayadi: shunday ekan g’ildirakning sirpanish (aylanmasdan siljish) va avtomobilning sirilib ketishi ehtimoli yuzaga keladi. Old o’qda og’irlik ko'payishi g’ildirakni yo'lga bosish kuchini ko’paytiradi, shunda sirpanish ehtimoli kamayadi."
  },
  {
    "id": 260,
    "biletId": 26,
    "text": "Sanab o’tilgan qaysi xollarda transport vositasidan foydalanish mumkin?",
    "options": [
      "Faralar nurining yo’nalishi buzilgan",
      "Ishlab chiqarilishi to’xtatilgan yengil avtomobillarga boshqa turdagi va rusmdagi transport vositalarining tashqi yoritgichlari o’rnatilgan",
      "Tashqi yoritgichlar va nur qaytargichlar belgilangan tartibda ishlamaydi yoki ifloslangan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 3-bo’limining 3.1-bandiga asosan: Tashqi yoritqichlar soni, turi, joylashuvi va ishlash tartibi transport vositasining konstruksiyasi talabiga mos kelmasa. Ishlab chiqarilishi to'xtatilgan yengil avtomobillarga boshqa turdagi va rusumdagi transport vositalarining tashqi yoritqichlarini o'rnatishga ruxsat etiladi."
  },
  {
    "id": 261,
    "biletId": 27,
    "text": "Transport vositalari ixtiyoriga berilgan vakolatnomasi bo’lgan shaxs o’zining ishtirokida transport vositasini boshqa shaxsga boshqarishni topshirishi mumkinmi?",
    "options": [
      "Mumkin",
      "Mumkin emas",
      "Bu shaxsda mazkur toifali transport vositasini boshqarishga ruxsat beruvchi haydovchilik guvohnomasi bo'lgan taqdirda transport vositalari egalarining fuqarolik javobgarligini majburiy sug’urta qilish bo’yicha sug’urta polisida ismi sharifi ko’rsatilgan bo’lsa yoki majburiy sug’urta qilish bo’yicha shartnoma ushbu transport vositasidan cheklanmagan shaxslarning foydalanishini hisobga olgan holda tuzilgan bo’lsa"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 8-bandiga asosan: Tegishli toifadagi transport vositasini boshqarish huquqini beruvchi haydovchilik guvohnomasiga, uning taloniga, vaqtinchalik ruxsatnomaga ega bo’lgan shaxs, o'ziga tegishli bo’lmagan transport vositasini, uning egasi yonida bo'lganida yoxud tasarruf etish huquqini beruvchi yoki egalik qilishga, foydalanishga berilganligini tasdiqlovchi hujjatlari bo’lgan shaxs ishtirokidagina (ularning roziligi bilan) boshqarishi mumkin, agar transport vositalari egalarining fuqarolik javobgarligini majburiy sug’urta qilish bo'yicha shartnoma ushbu transport vositasidan cheklanmagan shaxslarning foydalanilishini hisobga olgan holda tuzilgan yoki transport vositasini boshqarayotgan shaxs sug’urta polisida ko'rsatilgan bo’lsa."
  },
  {
    "id": 262,
    "biletId": 27,
    "text": "Agar yo’lda bu belgi o’rnatilgan bo’lsa, avtomobilni shatakka olishga ruxsat etiladimi?",
    "options": [
      "Faqat yengil avtomobillarga ruxsat etiladi",
      "Qattiq ulagichda ruxsat etiladi",
      "Taqiqlanadi",
      "Har qanday ulagichda ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i27_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining to’qqizinchi xatboshisiga asosan: 3.7. \"Tirkama bilan harakatlanish taqiqlanadi\". Yuk tashuvchi transport vositalari, traktorlarning barcha turdagi tirkamalar bilan harakatlanishi, shuningdek mexanik transport vositalarini har qanday usulda shatakka olish taqiqlanishini bildiradi."
  },
  {
    "id": 263,
    "biletId": 27,
    "text": "Bu \"To’xtash\" yotiq chizig’i qaysi yo’l belgisi bilan qo’llaniladi?",
    "options": [
      "\"Yo’l bering\" belgisi bilan",
      "\"To’xtamasdan harakatlanish taqiqlangan\" belgisi bilan",
      "\"Yo’l bering\" belgisi va \"To’xtamasdan harakatlanish taqiqlangan\" belgisi bilan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i27_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n to’rtinchi xatboshisiga asosan: 1.12 (to’xtash chizig’i) — 2.5 \"To’xtamasdan harakatlanish taqiqlangan\" belgisi yoki svetoforning (tartibga soluvchining) taqiqlovchi ishorasida haydovchi to’xtash kerak bo’lgan joyni ko’rsatadi."
  },
  {
    "id": 264,
    "biletId": 27,
    "text": "Avtomobil haydovchisi harakatining tartibi qaysi javobda to’g’ri ko’rsatilgan?",
    "options": [
      "Mototsiklni o’tkazib yubordi va chorrahada qayrilib oldi",
      "Tramvayni o’tkazib yubordi va chorrahada qayrilib oldi",
      "Tramvay va mototsiklni o’tkazib chorrahadan qayrilib oldi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i27_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 265,
    "biletId": 27,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Sariq avtomobil chorrahaga kirib keladi va ko’kni o’tkazib yuborish uchun to’xtaydi; yashil; ko’k qizil bilan bir vaqtda; sariq",
      "Ko’k ayni vaqtda qizil bilan; yashil; sariq",
      "Yashil; ko’k ayni vaqtda qizil bilan; sariq"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i27_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 266,
    "biletId": 27,
    "text": "Haydovchi boshqa haydovchilarning ko’zini qamashtirishi mumkin bo'lgan uzoqni yorituvchi chiroqni yaqinni yorituvchiga qachon almashtirishi kerak?",
    "options": [
      "Ro’paradagi transport vositasiga 100 m. qolganda",
      "Ro’paradagi transport vositasiga 150 m. qolganda, shuningdek, ko’proq masofada ham, agar ro’paradagi transport vositasining haydovchisi faralar chirog’ini o’chirib yoqib shuni zarur deb ko’rsatsa",
      "Ro’paradagi transport vositasiga 250 m. qolganda",
      "Ro’paradagi transport vositasiga 300 m. qolganda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 135-bandining ikkinchi va uchinchi xatboshlariga asosan, quyidagi hollarda uzoqni yorituvchi chiroqlar o’rniga yaqinni yorituvchi chiroqlar yoqilishi kerak: qarama-qarshi yo’nalishdagi transport vositasiga kamida 150 metr masofa qolganda, shuningdek haydovchi transport vositasining chiroqlarini vaqt-vaqti bilan o'chirib bunga zaruriyat borligini bildirgan hollarda undan ham ko’proq masofada;\nqarama-qarshi va bir yo'nalishdagi transport vositalari haydovchilarining ko’zini qamashtirishi mumkin bo’lgan boshqa barcha holatlarda."
  },
  {
    "id": 267,
    "biletId": 27,
    "text": "Aholi punktidan tashqarida tirkamali yengil avtomobil haydovchisiga eng katta tezlikni soatiga necha kilometrdan oshirmasdan harakatlanishga ruxsat etiladi?",
    "options": [
      "50 km/s",
      "70 km/s",
      "80 km/s",
      "90 km/s",
      "100 km/s"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 79-bandining uchinchi xatboshisiga asosan, aholi punktlaridan tashqarida: boshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan."
  },
  {
    "id": 268,
    "biletId": 27,
    "text": "Ushbu joyda avtomobilning to’xtab turishiga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i27_8.webp",
    "explanation": "YHQ 13-bobi 88-bandining ikkinchi xatboshisiga asosan: Aholi punktlarida o’rtada tramvay yo’li bo’lmagan, har yo’nalishda bittadan tasmasi bo’lgan, shuningdek bir tomonlama harakat tashkil etilgan yo’llarda yo’lning chap tomonida to’xtash va to’xtab turishga ruxsat etiladi.\nYHQ 13-bobi 91-bandiga asosan: Quyidagilarda to’xtash taqiqlanadi:\nqatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno);"
  },
  {
    "id": 269,
    "biletId": 27,
    "text": "Avtotransport vositasida bo’lgan tibbiyot qutichasiga kiruvchi 5% li yod eritmasi (yod nastoykasi) nima uchun qo’llanildi?",
    "options": [
      "Yara atrofidagi terini ishlash uchun",
      "Yara qattiq chirk olganda yaraning butun yuzasiga surtish uchun",
      "Kuchli ishkor keltirib chiqaruvchi birinchi darajali kimyoviy kuyishda teriga surtish uchun"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Yod nastoykasi jarohat ichida to’qimaning kimyoviy shikastlanishiga olib keladi. Ushbu qorishma surilganda terining tashqi qatlami shikastlanmaydi, balki foydali ravishda dezinfeksiya qilinadi va bu jarayonni bog’'lashdan avval amalga oshirish kerak."
  },
  {
    "id": 270,
    "biletId": 27,
    "text": "Bolalarni tashkiliy tashishda qanday talablar qo’yiladi?",
    "options": [
      "Bolalar guruhini tashkiliy tashishda transport vositasida katta yoshli kuzatib boruvchi bo’lishi shart",
      "Bolalar guruhini tashkiliy tashish uchun mo’ljallangan transport vositasining oldi va orqa tomoniga \"Bolalar guruhini tashish\" taniqlik belgisi o’rnatilishi shart",
      "Barcha sanab o’tilgan talablar"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 16-bobi 156-bandiga asosan: Bolalar guruhini tashkiliy tashishda avtobus (mikroavtobus)da katta yoshli kuzatib boruvchi(lar) bo’lishi shart.\nBunday avtobus (mikroavtobus)larning oldi va orqa tomoniga “Bolalar guruhini tashish” taniqlik belgisi o’rnatilishi kerak."
  },
  {
    "id": 271,
    "biletId": 28,
    "text": "Ko’k avtomobil chorrahani kesib o’tadi:",
    "options": [
      "Birinchi bo’lib",
      "Ikkinchi bo’lib",
      "Uchinchi bo’lib",
      "Oxirgi bo’lib"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i28_1.webp",
    "explanation": "YHQ 6-bobi 25-bandiga asosan, ko’k yoki ko’k va qizil rangli yalt-yalt etuvchi chiroq- mayoqchasi va (yoki) maxsus tovushli ishorasi yoqilgan tezkor va maxsus xizmat transport vositalarining haydovchilari kechiktirib bo’lmaydigan xizmat vazifalarini bajarayotib, yo’l harakati xavfsizligini ta’minlash sharti bilan Qoidalarning 7-bob (38-bandidan tashqari), 9-16, 19-20 boblari, Qoidalarning 1 va 2-ilovalari talablaridan chetga chiqishlari mumkin. YHQ 16-bobi 104, 106-bandiga asosan, teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, keyingi harakat yo’nalishidan qat’i nazar, asosiy yo’ldan kelayotgan transport vositasiga ikkinchi darajali yo’ldan kelayotgan transport vositasining haydovchisi yo’l berishi kerak. Asosiy yo’lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar kesishgan chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari lozim."
  },
  {
    "id": 272,
    "biletId": 28,
    "text": "Qaysi belgi \"Velosiped yo’lkasi bilan kesishuv\"ni bildiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i28_2.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limining yigirma yettinchi xatboshisiga asosan: 1.22. \"Velosiped yo’lkasi bilan kesishuv\"."
  },
  {
    "id": 273,
    "biletId": 28,
    "text": "Bu chiziq qaysi yo’l belgisi bilan qo’llaniladi?",
    "options": [
      "\"Yo’l bering\" belgisi bilan",
      "\" To’xtamasdan harakatlanish taqiqlangan\" belgisi bilan",
      "Ogohlantiruvchi \"Teng ahamiyatli yo’llar kesishuvi\" belgisi bilan",
      "Barcha sanab o’tilgan belgilar bilan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i28_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n beshinchi xatboshisiga asosan: 1.13 — kesishayotgan yo’lda harakatlanayotgan transport vositasiga yo’l berish uchun to’xtash zarur bo’lganda, haydovchiga transport vositasini to'xtatish joyini ko'rsatadi."
  },
  {
    "id": 274,
    "biletId": 28,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Ko’k, sariq yashil bilan",
      "Sariq, yashil, ko’k",
      "Ko’k yashil bilan, sariq"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i28_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan, teng ahamiyatga ega bo'lgan yo'llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ng tomondan yaqinlashib kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 275,
    "biletId": 28,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Sariq chorrahaga kiradi va yashilni o’tkazib yuborish uchun to’xtaydi; ko’k qizil bilan bir vaqtda",
      "Ko’k ayni vaqtda qizil bilan; yashil, sariq",
      "Yashil, ko’k ayni vaqtda qizil bilan, sariq"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i28_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan, teng ahamiyatga ega bo'lgan yo'llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ng tomondan yaqinlashib kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 276,
    "biletId": 28,
    "text": "Haydovchi yaqinlashib kelayotgan poyezdni o’tkazib yuborishi uchun \"To’xtash\" yotiq chizig’i yoki \"To’xtamasdan harakatlanish taqiqlangan\" belgisidan qanday masofada to’xtashi kerak?",
    "options": [
      "1,5 m",
      "2,5 m",
      "5 m",
      "1,0 m",
      "Bevosita \"To’xtash\" yotiq chizig’i yoki belgi oldida"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 119-bandiga asosan: Kesishma orqali harakatlanish taqiqlangan hollarda haydovchi to’xtash chizig’i, 2.5 yo’l belgisi yoki svetofor oldida, ular bo’lmaganda shlagbaumga kamida 5 metr, shlagbaum bo'lmaganda esa birinchi temir yo’l iziga kamida 10 metr qolganda to’xtashi kerak."
  },
  {
    "id": 277,
    "biletId": 28,
    "text": "Mototsikl haydovchisi Qoidalarni buzyaptimi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i28_7.webp",
    "explanation": "YHQ 12-bobi 86-bandining oltinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: tepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;"
  },
  {
    "id": 278,
    "biletId": 28,
    "text": "Yengil avtomobil haydovchisi, aholi yashash punktlaridan tashqaridagi yo’llarda haratlanishda, belgilangan tezlikni oshirish, qaysi vaziyatlarda taqiqlanadi?",
    "options": [
      "Faqat yo’lda tezlik cheklangan belgilar o’rnatilgan bo’lsa",
      "Faqat harakatlanayotgan tirkamali yengil avtomobillarga",
      "Agar u boshqa transport vositasini shatakka olgan bo’lsa",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma sakkizinchi xatboshisiga asosan: 3.24. \"Yuqori tezlik cheklangan\". Belgida ko’rsatilganidan ortiq tezlikda (km/s) harakatlanish taqiqlanishini bildiradi.\nYHQ 11-bobi 79-bandiga uchinchi xatboshisiga asosan, aholi punktlaridan tashqarida: boshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan;\nYHQ 11-bobi 80-bandiga uchinchi xatboshisiga asosan, har qanday yo’llarda: mexanik transport vositalarini shatakka olgan transport vositalariga tezlikni soatiga 50 kilometrdan oshirmasdan harakatlanishi taqiqlanadi."
  },
  {
    "id": 279,
    "biletId": 28,
    "text": "Egiluvchan yoki qattiq ulagichda shatakka olingan mexanik transport vositasida odamlar tashishga ruxsat etiladimi?",
    "options": [
      "Avtobus va trolleybusda ruxsat etiladi",
      "Taqiqlanadi",
      "Yuk va yengil avtomobillarda ruxsat etiladi",
      "Yuk avtomobili kabinasida va yengil avtomobilda ruxsat etiladi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 143-bandiga asosan: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo'li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 280,
    "biletId": 28,
    "text": "Agar transport vositasining tuzilishida ko’zda tutilgan orqani ko’rsatadigan ko’zgular bo’lmasa, avtomobildan foydalanishga ruxsat etiladimi?",
    "options": [
      "Agar orqa oyna pardalar bilan berkitilmagan bo’lsa ruxsat etiladi",
      "Taqiqlanadi",
      "Loaqal bitta ko’zgu bo’lsa ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 7-bo’limining 7.1-bandiga asosan: Orqa tomonni ko’rsatuvchi ko’zgular soni, joylashuvi va turi belgilangan talablarga mos kelmasa, transport vositasining konstruksiyasida ko'zda tutilgan oynalari bo’lmasa foydalanish taqiqlanadi."
  },
  {
    "id": 281,
    "biletId": 29,
    "text": "Piyodalar o’tish joyi bo’lmaganda piyodalarga yo’l qatnov qismining qaysi joyidan kesib o’tishga ruxsat etiladi?",
    "options": [
      "Chorrahalarda trotuar chiziqlari yoki yo’l yoqasi bo’ylab",
      "Ajratuvchi mintaqasiz va to’siqsiz yo’llardan yo’lning ikki tomoni yaxshi ko’rinadigan joyidan, qatnov qismining chetiga nisbatan to’g’ri burchak ostida",
      "Barcha sanab o’tilgan joylardan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 17-bandiga asosan: Piyodalar yo'lning qatnov qismini piyodalar o’tish joylaridan, shuningdek yer osti va yer usti o'tish joylaridan, ular bo’lmaganda esa chorrahalarda trotuar chiziqlari yoki yo'l yoqasi bo’ylab kesib o’tishlari kerak. Piyodalarga ko’rinadigan oraliqda o’tish joyi yoki chorraha bo'lmasa, ajratuvchi mintaqasiz va to’siqsiz yo’llardan yo’lning ikki tomoni yaxshi ko’rinadigan joyidan, qatnov qismining chetiga nisbatan to’g’ri burchak ostida kesib o’tishlariga ruxsat etiladi."
  },
  {
    "id": 282,
    "biletId": 29,
    "text": "Qaysi belgi 50 km/soatdan kam tezlikda harakatlanishni taqiqlaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i29_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining yigirma to’rtinchi xatboshisiga asosan: 4.7. \"Eng kam tezlik\". Faqat belgida ko'rsatilgan yoki undan yuqori tezlikda (km/soat) harakatlanishga ruxsat etilishini bildiradi."
  },
  {
    "id": 283,
    "biletId": 29,
    "text": "To’xtashni taqiqlovchi joylarni bildiruvchi sidirg’a sariq chiziq qayerda chiziladi?",
    "options": [
      "Harakatlanish qismida",
      "Harakatlanish qatnov qismi chetida",
      "Harakatlanish qatnov qismi chetida yoki bordyur ustidan chiziladi",
      "Faqat to’siq (bordyur) ustida"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i29_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo’llaniladi hamda yo’lning qatnov qismi chetiga yoki yo’l chetidagi to’siq ustidan chiziladi."
  },
  {
    "id": 284,
    "biletId": 29,
    "text": "Avtomagistrallarda to’xtashga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Avtomagistral yaxshi ko’rinadigan joylarda ruxsat etiladi",
      "Agar bir yo’nalishda harakatlanish uchun uchta tasma bo’lsa, ruxsat etiladi",
      "To’xtash \"To’xtash joyi\" yoki \"Dam olish joyi\" belgisi qo’yilgan maxsus maydonchalarda ruxsat etiladi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining uchinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: 5.15 yoki 6.11 yo’l belgilari bilan belgilangan maxsus to'xtab turish maydonchalaridan boshqa joylarda to’xtash."
  },
  {
    "id": 285,
    "biletId": 29,
    "text": "Transport vositalari chorrahani qanday tartibda kesib o’tadilar?",
    "options": [
      "2-tramvay ayni vaqtda 1- tramvay bilan; ko’k avtomobil ayni vaqtda qizil bilan",
      "2-tramvay; ko’k avtomobil; 1- tramvay; qizil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i29_5.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo’nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 286,
    "biletId": 29,
    "text": "Projektor-faradan foydalanishga ruxsat etiladi:",
    "options": [
      "Faqat aholi punktlaridan tashqarida ro’paradan kelayotgan transport vositalari bo’lmaganda",
      "Faqat yetarli ko’rinmaydigan sharoitda",
      "Agar bunga zaruriyat tug’ilsa, barcha joylarda",
      "Kunning qorong’i vaqtida yo’lning barcha qismlarida"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 139-bandining birinchi xatboshisiga asosan: Projektor chiroq va izlovchi chiroqlardan faqat aholi yashash joylaridan tashqarida, qarama-qarshi yo’nalishdan kelayotgan transport vositalari bo'lmaganda foydalanish mumkin"
  },
  {
    "id": 287,
    "biletId": 29,
    "text": "Agar Siz oldinda harakatlanayotgan avtomobilni quvib o’tishga chiqsangiz, ko’rsatilgan hollarning qaysi birida tovush ishorasi berish maqsadga muvofiq?",
    "options": [
      "Quvib o’tish qorong’i vaqtda bajarilganda",
      "Quvib o’tilayotgan avtomobil haydovchisi tormoz berishni boshlaganda",
      "Quvib o’tilayotgan avtomobil haydovchisi chapga burilish ko’rsatkichini yoqqanda",
      "Quvib o’tilayotgan avtomobil haydovchisi o’ngga burilish ko’rsatkichini yoqqanda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 48-bandiga asosan, tovushli ishoralar faqat quyidagi hollarda qo’llanilishi mumkin: aholi punktlaridan tashqarida boshqa haydovchilarni quvib o'tish haqida ogohlantirish uchun;\nzarur bo'lgan hollarda yo'l-transport hodisasining oldini olish uchun."
  },
  {
    "id": 288,
    "biletId": 29,
    "text": "Ko’rsatilgan joyda to’xtashga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i29_8.webp",
    "explanation": "YHQ 13-bobi 88-bandining birinchi xatboshisiga asosan: Transport vositalariga yo'lning o'ng tomoni yoqasida, u bo'lmaganda esa qatnov qismining chetida va ushbu Qoidalarning 89-bandida ko’rsatilgan hollarda trotuarda to’xtash va to'xtab turishga ruxsat etiladi.\nAholi punktlarida o’rtada tramvay yo’li bo’lmagan, har yo’nalishda bittadan tasmasi bo’lgan, shuningdek bir tomonlama harakat tashkil etilgan yo’llarda yo’lning chap tomonida to’xtash va to’xtab turishga ruxsat etiladi."
  },
  {
    "id": 289,
    "biletId": 29,
    "text": "Yengil avtomobil haydovchisi yo’l berishi kerakmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i29_9.webp",
    "explanation": "YHQ 20-bobi 126-bandiga asosan: Turar joy dahalaridan chiqishda haydovchilar boshqa harakat qatnashchilariga yo'l berishlari kerak."
  },
  {
    "id": 290,
    "biletId": 29,
    "text": "Odamlarni tashishga moslashtirilmagan yuk avtomobili yukxonasida odam tashishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Avtomagistrallarga tegishli bo’lmagan yo’llarda ruxsat etiladi",
      "Faqat yukni olish uchun borayotgan yoki kuzatib boruvchi shaxslarga shu shart bilanki, ular bortlaridan pastda joylashgan o’tiradigan joy bilan ta’minlangan bo’lsalar ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 154-bandiga asosan: Odam tashishga moslashtirilmagan yuk avtomobillarining yukxonasida faqat yukni olish uchun borayotgan yoki uni kuzatib borayotgan shaxslarning bo’lishiga yo’l qo’yiladi, bunda ular bortlardan pastda joylashgan o’rindiqlar bilan ta’minlanishlari kerak."
  },
  {
    "id": 291,
    "biletId": 30,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Tez yordam avtomobilining haydovchisi",
      "Yengil avtomobilning haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_1.webp",
    "explanation": "YHQ 6-bobi 25-bandining birinchi xatboshisiga asosan: Ko’k yoki ko’k va qizil rangli yalt-yalt etuvchi chiroq-mayoqchasi yoqilgan transport vositalarining haydovchilari kechiktirib bo’lmaydigan xizmat vazifalarini bajarayotib, yo’l harakati xavfsizligini ta’minlash sharti bilan ushbu Qoidalarning 7 bob (38-bandidan tashqari), 9-16, 19-20 boblari, 1 va 2-ilovalari talablaridan chetga chiqishlari mumkin.\nYo’l harakatining boshqa ishtirokchilariga nisbatan imtiyozga ega bo’lishi uchun tezkor va maxsus xizmatlarning transport vositalarida, tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishora yoqilgan bo’lishi shart. Ular o’zlariga yo’l berilayotganligiga ishonch hosil qilganlaridan so’nggina imtiyozdan foydalanishlari mumkin."
  },
  {
    "id": 292,
    "biletId": 30,
    "text": "Ushbu belgi qaysi transport vositalarini quvib o’tishni taqiqlaydi?",
    "options": [
      "Hammasini",
      "Hammasini, 40 km/soatdan kam tezlikda yakka harakat qilayotganlardan tashqari",
      "Yengil avtomobillar, mototsikllar va to’la vazni 3,5 tonnadan kam bo’lgan yuk avtomobillarni",
      "To’la vazni 3,5 tonnadan ko’p bo’lgan yuk avtomobillarni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma to'rtinchi xatboshisiga asosan: 3.20. \"Quvib o'tish taqiqlangan\". Soatiga 40 km dan kam tezlikda harakatlanayotgan yakka transport vositasidan boshqa transport vositalarini quvib o'tish taqiqlanishini bildiradi."
  },
  {
    "id": 293,
    "biletId": 30,
    "text": "Bu yo’l chizig’i nimani bildiradi?",
    "options": [
      "Yakka 40 km/soatdan kam tezlik bilan harakat qiluvchi ikki g’ildirakli mototsikllar, velosipedchilardan tashqari barcha transport vositalarini quvib o’tishni taqiqlovchi hududni",
      "Qatnov qismining torayishiga yoki qarama-qarshi yo’nalishdan kelayotgan transport oqimini ajratuvchi 1.1 yoki 1.11 chizig’iga yaqinlashayotganini",
      "Faqat belgilangan yo’nalishdagi transport vositalari harakati uchun mo’ljallangan qatnov qismining bo’lagini"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirma uchinchi xatboshisiga asosan: 1.19 — qatnov qismining toraygan (shu yo'nalishdagi harakatlanish tasmalarining soni kamaygan) joyiga yoki qarama-qarshi yo’nalishdan kelayotgan transport vositalari oqimlarini ajratuvchi 1.1 yoki 1.11 chizig’iga yaqinlashganlik haqida ogohlantiruvchi chiziq. Birinchi holda 1.18.1 — 1.18.3 belgilari bilan qo’llanilishi mumkin."
  },
  {
    "id": 294,
    "biletId": 30,
    "text": "Chorrahani uchinchi bo’lib kesib o’tadi:",
    "options": [
      "Ko’k avtomobil",
      "Sariq avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 295,
    "biletId": 30,
    "text": "Ko’rsatilgan yo’nalishlar bo’yicha qaysi transport vositalariga harakatlanishga ruxsat etiladi?",
    "options": [
      "Avtomobil haydovchisiga",
      "Avtomobil va mototsikl haydovchisiga",
      "Tramvay va avtomobil haydovchisiga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_5.webp",
    "explanation": "YHQ 7-bobi 32-bandiga asosan: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doirasimon shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi.\nAgar tegishli yo’l belgisi bilan qayrilib olish taqiqlanmagan bo’lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo’shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi.\nSvetoforning qo’shimcha tarmoqdagi ishora o’chirilgan bo’lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi"
  },
  {
    "id": 296,
    "biletId": 30,
    "text": "Qanday holda markazdan qochirma kuch burilishda kamayadi?",
    "options": [
      "Boshqaruv rulini burilish tomonga keskin burganda",
      "Harakat tezligi pasayganda",
      "Burilish radiusi kamayganda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_6.webp",
    "explanation": "Burilishda o’tayotgan vaqtda haydovchi shuni inobatga olishi lozimki, avtomobil harakati tezligi kattalashganida markazdan qochirma kuch ortadi va transport vositasini ag'darilishiga olib kelishi mumkin."
  },
  {
    "id": 297,
    "biletId": 30,
    "text": "Kim yo’l berishi kerak?",
    "options": [
      "Yuk avtomobil haydovchisi",
      "Yengil avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_7.webp",
    "explanation": "YHQ 21-bobi 128-bandga asosan: Yo’lning 1.13 va 1.14 yo’l belgilari bilan belgilangan qiyaliklarida, qarama-qarshi yo’nalishlarda harakatlanishni qiyinlashtiradigan biron-bir to’siq bo'lsa, nishablikka harakatlanayotgan transport vositasining haydovchisi yo'l berishi kerak."
  },
  {
    "id": 298,
    "biletId": 30,
    "text": "Ushbu joyda yengil avtomobilning to’xtab turishiga ruxsat etilganmi?",
    "options": [
      "Berilgan",
      "Taqiqlangan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_8.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz ikkinchi xatboshisiga asosan: 3.28. \"To’xtab turish taqiqlangan\". Transport vositalarining to'xtab turishi taqiqlanishini bildiradi."
  },
  {
    "id": 299,
    "biletId": 30,
    "text": "Burilishda harakat qilganda avtopoyezdning tirkamasi siljiydimi?",
    "options": [
      "Burilish markazidan boshqa tomonga siljiydi",
      "Siljimaydi",
      "Burilish markaziga siljiydi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Avtopoezd bilan bir vaqtda burilishni o'tayotganda ushbu transport vositasigacha bo'lgan yon oraliq masofasini ko’paytirishingiz lozim, chunki avtopoezd (tirkama) ning orqa g’'ildiraklari burilish markazi tomon siljiydi va avtopoezd harakat bo’lagi kattalashadi."
  },
  {
    "id": 300,
    "biletId": 30,
    "text": "Ta’qiqlovchi belgi tagiga o’rnatilgan qo’shimcha axborot belgisi nima maqsadda qo’yilgan?",
    "options": [
      "Belgidan uning amal qilish hududigacha bo’lgan oraliqni aniqlash uchun",
      "Taqiqlovchi belgi amal qilish hududini aniqlash uchun"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i30_10.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining ikkinchi xatboshisiga asosan: 7.1.1. \"Ob’ektgacha bo'lgan masofa\". Belgidan yo’lning xavfli joyi, yo'l harakatiga tegishli cheklovlar kiritiladigan joyi yoki harakat yo’nalishi bo’yicha oldindagi muayyan joygacha bo'lgan masofani ko’rsatadi."
  },
  {
    "id": 301,
    "biletId": 31,
    "text": "Ushbu belgilar amal qiladigan hududda \"Nogiron\" taniqlik belgisi bilan belgilangan avtomobilga to’xtashga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i31_1.webp",
    "explanation": "YHQ 1-ilovasi 7-bo'limining o’ttiz birinchi xatboshisiga asosan: 7.18. \"Nogironlar mustasno\". Belgilarning ta’siri ushbu Qoidalarning 175-bandiga muvofiq \"Nogiron\" taniqlik belgisi o’rnatilgan transport vositalariga joriy etilmaydi."
  },
  {
    "id": 302,
    "biletId": 31,
    "text": "Qaysi belgi yo’lning xavfli burilishiga yaqinlashayotganlik haqida ogohlantiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i31_2.webp",
    "explanation": "YHQ 1-ilovasi 1-bo'limining o’n oltinchi xatboshisiga asosan: 1.11.2. \"Xavfli burilish\". 1.11.2 — chapga yo’l belgisi yo'lning kichik radiusli yoki ko’rinishi cheklangan burilish joyini bildiradi."
  },
  {
    "id": 303,
    "biletId": 31,
    "text": "Qaysi yo’llardan harakatlanishga ruxsat etilgan?",
    "options": [
      "\"A\"",
      "\"В\"",
      "\"A\" va \"В\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i31_3.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limining o’ttiz yettinchi xatboshisiga asosan: 1.31.2. \"Burilishning yo'nalishi\". Kichik radiusli, ko’rinishi cheklangan yo’lda harakatlanish yo'nalishini va yo'lning ta’mirlanayotgan qismini aylanib o'tish yo'nalishini bildiradi."
  },
  {
    "id": 304,
    "biletId": 31,
    "text": "Avtomagistralda boshqarishni o’rganish:",
    "options": [
      "70 km/soatdan oshmagan tezlik bilan ruxsat berilgan",
      "Boshqarishni o’rgatuvchi yo’riqchi bilan o’rganuvchida yetarli boshqarish malakasi bo’lganda 60 km/soatdan ortiq bo’lmagan tezlikda ruxsat etilgan",
      "Taqiqlangan",
      "Agar o’rganilayotgan mexanik transport vositasida taniqlik belgilari qayd etilgan bo’lsa, ruxsat etilgan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining oltinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: transport vositasini o’rganish uchun boshqarish."
  },
  {
    "id": 305,
    "biletId": 31,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Yashil; ko’k; qizil",
      "Ko’k; qizil; yashil",
      "Ko’k bilan yashil bir vaqtda; qizil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i31_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 306,
    "biletId": 31,
    "text": "Mazkur shartda shatakka olishni amalga oshirishning yo’l qo’yilgan eng yuqori tezligi qanday?",
    "options": [
      "30 km/s",
      "50 km/s",
      "70 km/s",
      "80 km/s"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i31_6.webp",
    "explanation": "YHQ 11-bobi 80-bandining uchinchi xatboshisiga asosan, har qanday yo’llarda: mexanik transport vositalarini shatakka olgan transport vositalariga tezlikni soatiga 50 kilometrdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 307,
    "biletId": 31,
    "text": "Yo’l yoqasi mavjud bo’lganda haydovchi transport vositasini qayerda to’xtatishi kerak?",
    "options": [
      "Qatnav qismining o’ng tasmasida",
      "Yo’l chekkasida, yo’l yoqasidan 0,5 metr masofada",
      "Yo’l yoqasi ustida"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 88-bandining birinchi xatboshisiga asosan: Transport vositalariga yo'lning o'ng tomoni yoqasida, u bo’lmaganda esa qatnov qismining chetida va ushbu Qoidalarning 89-bandida ko'rsatilgan hollarda trotuarda to’xtash va to'xtab turishga ruxsat etiladi."
  },
  {
    "id": 308,
    "biletId": 31,
    "text": "Yengil avtomobil haydovchisi qanday qoidalarni buzdi?",
    "options": [
      "Faqat to’xtash qoidalarini",
      "To’xtash va to’xtab turish qoidalarini"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i31_8.webp",
    "explanation": "YHQ 13-bobi 90-bandiga asosan: Aholi punktlaridan tashqarida tunab qolish, dam olish yoki boshqa maqsadlarda uzoq vaqt to'xtab turishga Faqat buning uchun ko’zda tutilgan maydonchalarda yoki yo'ldan tashqarida ruxsat etiladi.\nYHQ 13-bobi 91-bandining yettinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: loaqal bir yo’nalishdagi ko’rinish masofasi 100 metrdan kam bo'lgan yo’l do’ngliklari yaqinida."
  },
  {
    "id": 309,
    "biletId": 31,
    "text": "N2; N3; 03; 04 toifadagi avtotransport vositalari shina protektori naqshlarining qoldiq balandligi eng kamida qancha bo’lishi kerak?",
    "options": [
      "0,5 mm",
      "1 mm",
      "1,6 mm",
      "2 mm",
      "3 mm"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 5-bo’limi 5.1-bandiga asosan: Shina protektori naqshlarining qoldiq balandligi N2; N3; O3; O4 toifadagi avtotransport vositalari uchun — 1,0 mm dan kam bo’lsa foydalanish taqiqlanadi."
  },
  {
    "id": 310,
    "biletId": 31,
    "text": "Mexanik transport vositalari va uning tirkamalarining egalari texnik holatidan qat’i nazar, xarid qilgan (olgan) paytdan boshlab qancha muddat mobaynida DYHX xizmatida ro’yxatdan o’tkazishlari kerak?",
    "options": [
      "2 kun",
      "10 kun",
      "5 kun",
      "15 kun",
      "30 kun"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 29-bobi 174-bandining ikkinchi xatboshisiga asosan: Mexanik transport vositalari va tirkamalar \"Tranzit\" ro’yxatlash belgisining amal qilish vaqti ichida yoki xarid qilingan, shuningdek bojxonada rasmiylashtirilgan vaqtdan boshlab 10 kun mobaynida DYHXXda ro’yxatdan o’tkazilishi kerak."
  },
  {
    "id": 311,
    "biletId": 32,
    "text": "Quruq yo’lda darhol to’xtash uchun nima qilish lozim?",
    "options": [
      "Ulagichni ajratish, shundan keyin darhol tormoz pedalini bosish",
      "Uzatmani almashtirish va tormoz pedalini keskin bosish",
      "Tormoz pedalini ulagichni ajratmasdan bosish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Keskin tormoz berish – bu birdan paydo bo’lgan yoki kech ko'rib qolingan to’siqqa kelib urilishining oldini olish uchun katta intensivlik (jadallik) bilan tormoz berish tushuniladi. Shu bois, masalan yosh bolaning yo'lda birdan paydo bo’lish ehtimolini inobatga olgan holda haydovchi keskin tormoz berish vaqtida o’zini qanday tuta olishini bilishi lozim. Bunda quyidagi usullar mavjud: rul chambaragini ikki qo’lingiz bilan mahkam ushlang, avtomobil g’ildiraklarini blokirovka qilman chunki g’ildiraklarning uzunasiga sirpanishi tormoz yo’lini qisqartirmaydi;\nharakatda to'xtab turish tormozini qo’llamang, chunki bu hol orqa g’ildiraklarning sirpanishini kuchaytirishi mumkin. Tormoz tepkisini qattiq (shiddat bilan emas) va ravon, shinaning yo'lga nisbatan ilashishiga qarab, kuchaytirish bosish lozim. Keskin tormoz berish vaqtida ham avtomobil ustidan nazoratni yo’qotmang."
  },
  {
    "id": 312,
    "biletId": 32,
    "text": "Bu belgi nimani bildiradi?",
    "options": [
      "To’la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobilining majburiy harakat yo’nalishini",
      "Faqat yuk avtomobillari uchun harakat yo’nalishini",
      "Yuk avtomobillari, traktorlar, o’ziyurar mashinalar uchun, agar chorrahada yo’nalishlardan birida harakatlanish taqiqlangan bo’lsa, tavsiya etiladigan harakat yo’nalishini",
      "Shaharlararo yuk tashuvchi yuk avtomobillarining harakat yo’nalishini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i32_2.webp",
    "explanation": "YHQ 1-ilovasining 5-bo’limidagi 5.30.2 \"Yuk avtomobillari uchun harakatlanish yo’nalishi\" belgisiga asosan, yuk avtomobillari haydovchilariga eng qulay yo’lni ko’rsatadi va shu yo’l bo’yicha harakatlanishni tavsiya etadi."
  },
  {
    "id": 313,
    "biletId": 32,
    "text": "Ushbu yo’l belgisi oldinda nima borligidan ogohlantiradi:",
    "options": [
      "Ko’prik yoki solda kechimi bo’lmagan suv to’siqli yo’l qismi borligidan",
      "Suv to’siqli yo’l qismida ko’tarma ko’prik borligidan",
      "Yo’l anhor yoqasiga yoki biror-bir suv havzasining qirg’og’iga chiqiladigan joyi borligidan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i32_3.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’'limining o'n beshinchi xatboshisiga asosan: 1.10. \"Sohilga chiqish\". Daryo yoki suv havzasi qirg’og’iga chiqishni bildiradi."
  },
  {
    "id": 314,
    "biletId": 32,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Qizil chorrahaga kiradi va ko’k avtomobilni o’tkazib yuborish uchun to’xtaydi va ayni vaqtda yashil avtomobil chorrahani kesib o’tadi; ko’k; qizil burilishni tugallaydi",
      "Qizil, ko’k, yashil",
      "Ko’k, yashil, qizil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i32_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 315,
    "biletId": 32,
    "text": "Chorrahadan uchinchi bo’lib kim o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Ko’k avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i32_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 316,
    "biletId": 32,
    "text": "Yengil avtomobil haydovchilarining qaysi biri aholi punktlarida harakatlanish qoidalarini buzmoqda?",
    "options": [
      "Faqat \"Б\" avtomobil haydovchisi",
      "Ikkalasi ham buzmoqda",
      "Ikkalasi ham buzmayapti"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i32_6.webp",
    "explanation": "YHQ 10-bobi 67-bandi 2-xatboshiga asosan, aholi punktlarida Qoidalarning 69, 123, 161 bandlaridagi talablarni hisobga olgan holda haydovchilar o’zlariga qulay bo’lgan harakatlanish bo’lagidan foydalanishlari mumkin. Biroq, bir yo’nalishdagi uch va undan ortiq tasmali har qanday yo’lda chetki chap qatorni harakat serqatnovligi sababli boshqa bo’laklar band bo’lgan hollarda, shuningdek, quvib o’tish, chapga burilish yoki qayrilib olishga, yuk avtomobillariga faqat chapga burilish yoki qayrilib olish uchun chetki chap qatorni egallashga ruxsat etiladi."
  },
  {
    "id": 317,
    "biletId": 32,
    "text": "Haydovchi harakat tezligini tanlashda nimani hisobga olishi kerak?",
    "options": [
      "Harakatning serqatnovligini, transport vositasi va yukning xususiyati va holatini",
      "Yo’l va ob-havo sharoitini",
      "Barcha sanab o’tilgan omillarni"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 77-bandining birinchi xatboshisiga asosan: Haydovchi harakatning serqatnovligini, transport vositasi va yukning xususiyati hamda holatini, yo'l va ob-havo sharoitini, shuningdek harakatlanish yo’nalishidagi ko’rinishni hisobga olgan holda transport vositasi tezligini belgilangandan oshirmasdan boshqarishi kerak."
  },
  {
    "id": 318,
    "biletId": 32,
    "text": "Ushbu joyda to’xtab turishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i32_8.webp",
    "explanation": "YHQ 1-ilovasi 3-Bo’limining qirq uchinchi xatboshisiga asosan: 3.16, 3.20, 3.22, 3.24, 3.26 — 3.30 belgilarining ta’siri belgi o’rnatilgan joydan keyingi eng yaqin chorrahagacha, ular bo’lmaganda — aholi punktining oxirigacha ta’siri qiladi.\nYondosh hududlardan yo’lga chiqish joylarida yoki yo’lning dala, o’rmon yo’llari va boshqa doimiy harakatlanish, o’tib ketish uchun mo’ljallanmagan yo’llar bilan kesishgan (tutashgan) joylarida, ularning oldida tegishli belgilar o’rnatilmagan bo’lsa, bu belgilarning ta’siri yo’qolmaydi."
  },
  {
    "id": 319,
    "biletId": 32,
    "text": "Haydovchi avtopoyezd harakatining eng keng bo’lagini aniqlashda nimani hisobga olishi kerak?",
    "options": [
      "Faqat kengligi bo’yicha avtopoyezdning o’lchamlarini",
      "Kengligi bo’yicha transport vositasining o’lchamlarini, shuningdek, tirkamaning chayqalishini hamda uning burilish markaziga siljishini"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Yakka avtomobil boshqarishning barcha uslublari avtopoezd uchun qo’llanilishi mumkin, biroq uning katta vazni va gabaritlari (tashqi o'lchami) bois bir qator xossalar bor. Avtopoezd - bu bitta yarim tirkama yoxud bir yoki bir necha tirkamali shatakchi transport vositasidir. Harakat vaqtida tirkama doim shatakchi avtomobilning harakat yo’lidan chetga siljib turadi va quvib o'tish hamda qarama-qarshi yo’nalishdagi harakat uchun xavf-xatar tug’diradi. Avtopoezdning manyovr qilishi yakka avtomobilga nisbatan yomonroq. Burilish vaqtida avtopoezd burilish markazi tomon siljiyda va avtopoez harakat bo’lagi kengayishini haydovchi inobatga olishi lozim."
  },
  {
    "id": 320,
    "biletId": 32,
    "text": "Yengil avtomobillarning oldingi o’rindig’ida bolalarni tashishga ruxsat etiladimi?",
    "options": [
      "7 yoshdan kichiq bo’lmagan bolalarni tashishga ruxsat etiladi",
      "12 yosh va undan katta bo’lgan bolalarni tashishga ruxsat etiladi",
      "Katta yoshli yo’lovchi bo’lganda yoshidan qat’i nazar ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 159-bandining beshinchi xatboshisiga asosan, odamlarni tashish quyidagi hollarda taqiqlanadi: 12 yoshga to’lmagan bolalarni mototsikl, elektromototsikl, moped va skuterning orqa o’rindig’ida, shuningdek, bolalarni ushlab turuvchi maxsus qurilma o’rnatilmagan transport vositasining old o’rindig’ida;"
  },
  {
    "id": 321,
    "biletId": 33,
    "text": "Yo’lovchilarga haydovchi transport vositasini boshqarayotganda, uni chalg’itishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Belgilangan yo’nalishdagi transport vositalarida faqat bir martalik chiptalar sotib olish uchun ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 5-bobi 24-bandining birinchi xatboshisiga asosan, yo’lovchilarga quyidagilar taqiqlanadi: transport vositasi harakatlanayotgan vaqtda haydovchini boshqarishdan chalg’itish va unga xalaqit berish."
  },
  {
    "id": 322,
    "biletId": 33,
    "text": "Qaysi transport vositalariga ushbu belgining amal qilishi taaluqli emas",
    "options": [
      "Yo’nalishli taksilarga",
      "Taksometri ishlab turgan taksilarga",
      "\"Nogiron\" taniqlik belgisi o’rnatilgan nogiron boshqarayotgan avtomobilga",
      "Belgilangan yo’nalishdagi transport vositalariga",
      "F2 va F3 javoblarda ko’rsatilgan transport vositalariga"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i33_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz ikkinchi, qirqinchi va qirq birinchi xatboshlariga asosan: 3.28. \"To’xtab turish taqiqlangan\". Transport vositalarining to’xtab turishi taqiqlanishini bildiradi. Ushbu Qoidalarning 176-bandiga binoan “Nogiron” tanish belgisi bilan belgilangan avtomobillar, mototsikllar, elektromototsikllar, mopedlar va skuterlarni boshqarayotgan nogiron haydovchilar 3.2, 3.3 va 3.28 belgilari talablaridan chetga chiqishlari mumkin. 7.18 belgi bo’lganda 3.27 belgisining ta’sir doirasida to’xtashga ruxsat etiladi."
  },
  {
    "id": 323,
    "biletId": 33,
    "text": "Haydovchilardan qay biri yo’lovchilarni tushirish uchun to’g’ri to’xtadi?",
    "options": [
      "Ko’k va qizil avtomobillarning haydovchilari",
      "Mototsikl va ko’k avtomobil haydovchilari",
      "Faqat ko’k avtomobil haydovchisi",
      "Barcha haydovchilar"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i33_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining oltinchi, o'n ikkinchi va yigirma birinchi xatboshlariga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo'l belgisi bilan qo'llaniladi hamda yo’lning qatnov qismi chetiga yoki yo'l chetidagi to’siq ustidan chiziladi;\n1.10 — to’xtab turish taqiqlangan joyni bildiradi;\nyakka holda yoki 3.28 yo’l belgisi bilan qo’llaniladi va yo’lning qatnov qismi chetiga yoki yo'l chetidagi to'siq ustidan chiziladi;\n1.17 — yo’nalishli transport vositalarining bekatlari hamda taksilarning to’xtab turish joylarini bildiradi;\nYHQ 13-bobi 91-bandining to’qqizinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: bekat maydonchalarida, yo’nalishli transport vositalari to'xtash joylarida, jumladan, 1.17 chizig'i bilan belgilangan, ular bo'lmaganda esa yo’nalishli transport vositalari to'xtash joyi belgilari va bekatdan harakatlanish yo'nalishi bo’ylab (yetmasdan va o’tib ketib) 15 metrdan kam masofada."
  },
  {
    "id": 324,
    "biletId": 33,
    "text": "Enli uzuq-uzuq chiziq ko’rinishidagi yotiq chiziq nimani bildiradi?",
    "options": [
      "Qatnov qismi bilan yo’l yoqasi o’rtasidagi chegarani",
      "Tezlashish yoki sekinlashish bo’lagi bilan qatnov qismi asosiy bo'lagi o’rtasidagi chegarani",
      "Transport vositalarining to’xtashi va to’xtab turishi uchun belgilangan maydonchalarni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i33_4.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o’ninchi xatboshisiga asosan: 1.8 (enli uzuq-uzuq chiziq) — tezlashish yoki sekinlashish bo’lagi bilan yo’lning qatnov qismidagi asosiy bo’lagi o’rtasidagi chegarani bildiradi."
  },
  {
    "id": 325,
    "biletId": 33,
    "text": "Qaysi transport vositasining haydovchisi birinchi navbatda harakatlanish huquqiga ega?",
    "options": [
      "Avtomobil haydovchisi",
      "Mototsikl haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i33_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 326,
    "biletId": 33,
    "text": "Bunday vaziyatda qizil avtomobilning haydovchisiga quvib o’tish ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlandi",
      "Faqat ro’paradan kelayotgan transport vositalari yo’qligida ro’xsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i33_6.webp",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 327,
    "biletId": 33,
    "text": "Siz reversiv harakatli yo’lga burilmoqchisiz. Burilishdan keyin Siz qaysi tasma bo’ylab harakatlanish huquqiga egasiz?",
    "options": [
      "Aholi punktlarida istalgan tasma bo’ylab harakatlanishga ruxsat etiladi",
      "Chetki o’ng tasma bo’ylab faqat reversiv svetofor yoki boshqa tasmalar bo’yicha ham harakatlanishga ruxsat etadigan \"Tasmalar bo’yicha harakatlanish yo’nalishi\" belgisidan o’tgandan so’ng qayta tizilishga ruxsat etiladi",
      "Aholi punktidan tashqarida qatnov qismining iloji boricha o’ng chetiga yaqinroqda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 71-bandiga asosan: Reversiv harakatlanishli yo’lga burilishda haydovchi transport vositasini shunday boshqarishi kerakki, bunda transport vositasi qatnov qismlari kesishmasidan chiqishda chetki o’ng qatorni egallashi kerak. Shu yo’nalishdagi boshqa tasmalardan ham harakatlanish ruxsat etilganiga ishonch hosil qilingandan keyingina haydovchiga qayta tizilishga ruxsat etiladi."
  },
  {
    "id": 328,
    "biletId": 33,
    "text": "Qanday hollarda to’xtab turish taqiqlanadi?",
    "options": [
      "Qatnov qismi kesishmasining chekkasiga 30 metrdan ko’p masofa qolganda",
      "Piyodalarning o’tish joyi oldiga 10 metrdan ko’p masofa qolganda",
      "Piyodalar o’tish joyidan o’tgandan keyin bir metr masofa uzoqlikda",
      "Transport vositalarining harakatlanishiga imkon qoldirmaydigan kirishga yoki chiqishga va piyodalarning harakatiga xalaqit beradigan joylarda",
      "Sanab o’tilgan hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandiga asosan: Quyidagi joy va holatlarda to'xtash taqiqlanadi: piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda;\nqatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno);\ntransport vositasi svetofor ishoralari, yo'l belgilarini boshqa haydovchilardan to’sib qo’yadigan, boshqa transport vositalarining harakatlanishiga (kirish va chiqishiga) imkon qoldirmaydigan yoki piyodalarning harakatiga xalaqit beradigan joylarda."
  },
  {
    "id": 329,
    "biletId": 33,
    "text": "Haydovchi avtopoyezdni tormozlashning qaysi qoidalariga rioya qilishi kerak?",
    "options": [
      "Tormoz tepksini keskin kuchli bosish - ulagichni ajratgan holda",
      "Oldindan tezlikni kamaytirib, ulagichni ajratmay, bir tekis tormozlash"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Tormoz tizimi mavjud bo’lmagan tirkamani ulash vaqtida ulangan transport vositalarining umumiy vazni kattalashgani bois avtomobilning tormoz yo’li ortadi. Avtopoezdni faqat yo’lning to’g’ri uchastkalarda to’xtatish mumkin, bunda uning to’liq vazni bir chiziqda bo’lishi kerak. Aylana yo'lda shatakchi avtomobilning ag’darilishi, yo'l chetiga chiqib ketishi yoki shatakchi moslamaning ishdan chiqishiga olib keluvchi tirkamaning surilib ketishi yoki avtopoezdning buklanishi yuzaga kelishi mumkin."
  },
  {
    "id": 330,
    "biletId": 33,
    "text": "Yon kajavasi bo’lmagan mototsiklda bolalarni tashishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "12 yoshdan katta bolalarga ruxsat etiladi",
      "Katta yoshdagi yo’lovchi bo’lganda ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 159-bandining to'rtinchi va beshinchi xatboshilariga asosan, odamlarni tashish quyidagi hollarda taqiqlanadi: Mototsikllar, elektromototsikllar, mopedlar va skuterlarning konstruksiyasida ko’zda tutilgan joylardan tashqarida;\n12 yoshga to’lmagan bolalarni mototsikl, elektromototsikl, moped va skuterning orqa o’rindig’ida, shuningdek, bolalarni ushlab turuvchi maxsus qurilma o’rnatilmagan transport vositasining old o’rindig’ida."
  },
  {
    "id": 331,
    "biletId": 34,
    "text": "Ushbu yotiq chiziq nimani anglatadi?",
    "options": [
      "Transport vositalari oqimi qo’shiladigan joylardagi yo’naltiruvchi orolchani",
      "Qatnov qismidagi xavfli joylarda piyodalar uchun orolchani",
      "Transport vositalari to’xtab turish qatnov chegarasini",
      "Transport vositalari oqimi ajraladigan joydagi yo’naltiruvchi orolchani"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i34_1.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirmanchi xatboshisiga asosan: 1.16.3 — transport vositalari oqimi qo’shiladigan joylardagi yo’'naltiruvchi orolchani bildiradi."
  },
  {
    "id": 332,
    "biletId": 34,
    "text": "Chorrahada qaysi yo’nalishlarda harakat qilish ruxsat etiladi?",
    "options": [
      "Faqat \"Г\" va \"Е\"",
      "\"А\", \"Б\", \"Г\", \"Д\"",
      "\"Б\", \"В\", \"Г\", \"Д\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i34_2.webp",
    "explanation": "YHQ 1-ilovasi 1-bo'limining to’qqizinchi, o'n birinchi va o'n ikkinchi xatboshlariga asosan: 5.8.1. “Tasmalar bo’yicha harakat yo’nalishi”. Tasmalar soni va har biri bo’yicha ruxsat etilgan harakatlanish yo’nalishlari. Boshqa yo’nalishlar bo’yicha harakatlanish taqiqlanadi.\n5.8.2. “Tasma bo’yicha harakatlanish yo’nalishi”. Tasma bo’yicha ruxsat etilgan harakatlanish yo’nalishi. Boshqa yo’nalishlar bo’yicha harakatlanish taqiqlanadi.\nYo’lning chetki chap bo’lagidan chapga burilishga ruxsat beruvchi 5.8.1 va 5.8.2 belgilari shu tasmadan qayrilishga ham ruxsat beradi.\nChorrahadan oldin o’rnatilgan 5.8.1 va 5.8.2 belgilarining ta’siri, agar shu turkumdagi boshqa belgilar o’rnatilmagan bo’lsa, butun chorrahaga tatbiq etiladi."
  },
  {
    "id": 333,
    "biletId": 34,
    "text": "Qatnov qismi o’ng bo’lagi bo’ylab harakatlanishga qaysi transport vositasiga ruxsat etilgan?",
    "options": [
      "Barcha mexanik transport vositalariga",
      "Belgilangan yo’nalishdagi transport vositalariga va taksilarga",
      "Faqat velosipedlarga",
      "Faqat belgilangan yo’nalishdagi transport vositalariga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i34_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirma yettinchi xatboshisiga asosan: 1.23 — yo'lning faqat yo’nalishli transport vositalari uchun mo’ljallangan bo’lagini bildiradi."
  },
  {
    "id": 334,
    "biletId": 34,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Tramvay, sariq, yashil avtomobillar",
      "Tramvay va yashil avtomobil, sariq avtomobil",
      "Yashil, sariq avtomobillar, tramvay"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i34_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo'nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi."
  },
  {
    "id": 335,
    "biletId": 34,
    "text": "Qaysi transport vositasining haydovchisiga belgida ko’rsatilgan tezlik bilan harakatlanishga ruxsat berilgan?",
    "options": [
      "Har ikki haydovchiga",
      "Faqat mikroavtobus haydovchisiga",
      "Har ikkisiga taqiqlangan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i34_5.webp",
    "explanation": "YHQ 11-bobi 79-bandining ikkinchi xatboshisiga asosan, aholi punktlaridan tashqarida: shaharlararo qatnaydigan avtobuslarga va mikroavtobuslarga tezlikni soatiga 90 kilometrdan oshirmasdan;\nYHQ 11-bobi 80-bandining birinchi xatboshisiga asosan, har qanday yo'llarda: yukxonasida odam tashiyotgan yuk avtomobillariga tezlikni soatiga 60 kilometrdan oshirmasdan."
  },
  {
    "id": 336,
    "biletId": 34,
    "text": "Boshqaruvda o’rganuvchi bo’lsa, ushbu transport vositasiga qaysi tomonga harakatlanishga ruxsat beriladi?",
    "options": [
      "Hamma tomonga",
      "Faqat o’ngga",
      "O’ngga, chapga va qayrilib olishga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i34_6.webp",
    "explanation": "YHQ 20-bobi 124-bandining birinchi xatboshisiga asosan, turar joy dahalarida quyidagilar taqiqlanadi: mexanik transport vositalarini boshqarishni o'rgatish."
  },
  {
    "id": 337,
    "biletId": 34,
    "text": "Chorrahani kesib o’tishda tramvay yo’li bo’ylab harakatlanishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Agar qarama-qarshi yo'nalishdagi tramvayga to’sqinlik qilmasa, ruxsat etiladi",
      "Qarama-qarshi yo’nalishdagi tramvay yo’llari bo’ylab ruxsat etiladi",
      "Boshqa tasmalar band bo'lganda, aylanib o'tishga, chapga burilish va qayrilib olishga, bir yo'nalishdagi tramvay yo'llari bo'ylab xarakatlanishga ruxsat etiladi. (agar chorraxadan oldin 5.8.1 yoki 5.8.2 yo'l belgilari o'rnatilmagan bo'lsa) Bunda tramvayga xalaqit bermaslik kerak"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 69-bandining birinchi xatboshisiga asosan: Bir yo’nalishdagi qatnov qismining chap tomonida u bilan bir sathda joylashgan tramvay yo’lidan, shu yo’nalishdagi boshqa tasmalar band bo’lganda harakatlanishga, shuningdek, aylanib o’tishga, chapga burilish va qayrilib olishga ushbu Qoidalarning 56-bandini hisobga olgan holda ruxsat etiladi. Biroq bu tramvayga xalaqit bermasligi kerak. Qarama-qarshi yo’nalishdagi tramvay yo’lidan harakatlanish taqiqlanadi.\nAgar chorrahadan oldin 5.8.1 yoki 5.8.2 yo’l belgilari o’rnatilgan bo’lsa, chorrahadan o’tishda tramvay yo’llaridan harakatlanish taqiqlanadi."
  },
  {
    "id": 338,
    "biletId": 34,
    "text": "Yuk avtomobillari avtomagistralda chetki chap qatorida harakatlanishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining ikkinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: yuk avtomobillariga yo’lning chetki chap qatorida harakatlanishi."
  },
  {
    "id": 339,
    "biletId": 34,
    "text": "Qattiq charchoq boshlanishining asosiy tashqi alomatlari qanday?",
    "options": [
      "Ko’z sanchib og’riydi, yuz terisi oqaradi, uyqu bosadi",
      "Yuz qizil tusga kiradi, qo’l-oyoqlar soviydi, ongi xiralashadi",
      "Mushaklarda horg’inlik seziladi, quloqlarda shovqin, bosh aylanadi, muzdek yopishqoq ter chiqadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Haydovchi toliqishning o’ziga xos alomatlariga - uyqu kelishi, lanjlik va diqqatning pasayishi kiradi. Bu holatda transport vositasini boshqarish xavfli bo’lganligi bois, taqiqlangan."
  },
  {
    "id": 340,
    "biletId": 34,
    "text": "Tashilayotgan yuk DYHX xizmatining ruxsatisiz transport vositasi o’lchamlarining orqa nuqtasidan eng katta miqdorda qanday chiqib turishi mumkin?",
    "options": [
      "1,0 m",
      "1,5 m",
      "2,0 m",
      "2,5 m",
      "4,0 m"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 164-bandining birinchi xatboshisiga asosan: O’ta og’ir, katta o’lchamli va xavfli yuklarni tashishda gabarit o'lchamlari yukli yoki yuksiz holda eni bo’yicha 2,55 (refrijeratorlar va izotermik kuzovlar uchun — 2,6) metrdan va balandligi bo'yicha yo’l sathidan 4 metrdan, uzunligi bo'yicha yakka avtotransport vositasi uchun — 12 metrdan, tirkama uchun — 12 metrdan, yarimtirkamali avtopoezd uchun — 20 metrdan, tirkamali avtopoezd uchun — 20 metrdan ortiq bo'lgan yoki yuki transport vositasining oldi va orqa nuqtasidan 2 metrdan ortiq chiqib turgan transport vositalarining harakatlanishi belgilangan tartibda DYHXX bilan kelishilgan bo’lishi kerak."
  },
  {
    "id": 341,
    "biletId": 35,
    "text": " Transport vositalaridan foydalanish va texnik holatiga javobgar mansabdor shaxslarning majburiyatlari:",
    "options": [
      "Belgilangan muddatda tibbiyot ko’rigidan o’tmagan shaxslarni transport vositalarini boshqarishiga yo’l qo’ymaslik",
      "Texnik holati va jihozlari Qoida talablariga mos kelmaydigan transport vositalarini yo’lga chiqarmaslik",
      "Belgilangan tartibda ro’yxatdan o’tkazilmagan transport vositalarini yo’lga chiqarmaslik",
      "Barcha sanab o’tilganlarni bajarishga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 29-bobi 180-bandining birinchi va ikkinchi xatboshlariga asosan, transport vositalarining texnik holatiga va ulardan foydalanishga javobgar bo’lgan mansabdor va boshqa shaxslarga quyidagilar taqiqlanadi: texnik nosoz, tegishli ruxsatsiz qayta jihozlangan, belgilangan tartibda ro'yxatdan o’tkazilmagan yoki davriy davlat texnik ko’rigidan o'tkazilmaganligi tufayli foydalanish taqiqlangan transport vositalarini yo'lga chiqarish;\nmastlik (giyohvandlik moddalar, alkogol va boshqalar) holatida yoki sezgirlik va e’tiborni susaytiradigan dori-darmonlar ta’sirida, yo'l harakati xavfsizligiga tahdid soladigan charchoqlik yoki betoblik holatida, shuningdek tegishli toifadagi transport vositalarini boshqarish huquqi bo’lmagan, belgilangan muddatda tibbiy ko’rikdan o'tmagan, transport vositalari egalarining Fuqarolik javobgarligini majburiy sug’urta qilish bo'yicha sug’urta polisi bo’lmagan shaxslarni transport vositasini boshqarishga qo’yish."
  },
  {
    "id": 342,
    "biletId": 35,
    "text": "Belgi va uning ostidagi qo’shimcha axborot belgisi nima haqida ogohlantiradi?",
    "options": [
      "Olib borilayotgan ishlar munosabati bilan yo’l chetida to’xtash taqiqlanadi",
      "Yo’l yoqasida ta’mirlash ishlari olib borilayotganligi munosabati bilan unga yaqin kelish xavfli",
      "Yo’lda ta’mirlash ishlari olib borilayotganda yo’l chetida to’xtab turish taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i35_2.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limining yigirma sakkizinchi xatboshisiga asosan: 1.23. \"Ta’mirlash ishlari\". YHQ 1-ilovasi 7-bo’limining yigirma beshinchi xatboshisiga asosan: 7.12. \"Xavfli yo’l yoqasi\". Yo’l ishlari bajarilayotgani sababli yo'l yoqasiga chiqish xavfli ekanligi haqida ogohlantiradi. 1.23 belgisi bilan qo’llaniladi."
  },
  {
    "id": 343,
    "biletId": 35,
    "text": "Har bir chiziq uzunligi ular orasidagi masofadan uch barobar katta bo’lgan uzuq-uzuq chiziq nimani bildiradi?",
    "options": [
      "Tezlashish yoki sekinlashish bo’lagi bilan yo’lning qatnov qismidagi asosiy bo’lagi o’rtasidagi chegarani",
      "Avtomagistrallarda qatnov qismi chetlarini",
      "Qarama-qarshi yoki bir yo’nalishda harakatlanayotgan transport vositalari oqimlarini ajratuvchi 1.1 yoki 1.11 chizig’iga yaqinlashayotganlik haqida ogohlantiradi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i35_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining sakkizinchi xatboshisiga asosan: 1.6 (yaqinlashish chizig'i — har bir chiziq uzunligi ular orasidagi masofadan uch barobar katta bo’lgan uzuq-uzuq chiziq) — qarama-qarshi yoki bir yo'nalishda harakatlanayotgan transport vositalari oqimlarini ajratuvchi 1.1 yoki 1.11 chizig’iga yaqinlashayotganlik haqida ogohlantiradi."
  },
  {
    "id": 344,
    "biletId": 35,
    "text": "Yo’l o’rtasidagi to’xtash joyida to’xtagan shu yo’nalishdagi tramvayga yaqinlashib qolgan haydovchi nima qilishi kerak?",
    "options": [
      "To’xtashi, tramvay eshiklari yopilgandan keyin harakatni davom ettirishi",
      "Yo’l o’rtasidagi to’xtash joyida turgan shu yo’nalishdagi tramvayga kelayotgan yoki undan uzoqlashayotgan piyodalarga yo’l berishi",
      "To’xtashi, so’ng tramvay harakatlanganidan keyin harakatni davom ettirishi",
      "Tramvay to’xtash joyidan nihoyatda ehtiyotkorlik bilan o’tishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 17-bobi 114-bandiga asosan: Agar yo’lovchilarni tushirish yoki chiqarish qatnov qismida yoki unda joylashgan maydonchada amalga oshirilayotgan bo’lsa, haydovchi bekatda to’xtagan yo’nalishli transport vositasi eshiklari tomon borayotgan yoki undan kelayotgan piyoda(lar)ga yo’l berishi kerak."
  },
  {
    "id": 345,
    "biletId": 35,
    "text": "Qaysi transport vositasining haydovchisi harakatlanishda imtiyozga ega?",
    "options": [
      "Avtomobil haydovchisi",
      "Tramvay haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i35_5.webp",
    "explanation": "YHQ 15-bobi 101-bandining birinchi xatboshisiga asosan: Agar svetofor yoki tartibga soluvchining ishoralari tramvay va relssiz transport vositalariga bir vaqtda harakatlanishga ruxsat bersa, harakatlanish yo’nalishidan qat’i nazar, tramvay oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 346,
    "biletId": 35,
    "text": "Transport vositasining haydovchisi, agar svetoforning ruxsat etuvchi chirog’i yoqilsa-yu, harakat yo’nalishining qatnov qismidan o’tishga ulgurmagan piyodalar bo’lsa, nima qilishi kerak?",
    "options": [
      "Tezlikni kamaytirishi, tovush ishorasini berishi va eng kam tezlik bilan piyodalarning o’tish joyidan o’tishi",
      "Tovush ishorasini berishi va tezlikni kamaytirmay piyodalarning o’tish joyidan o’tishi",
      "Mazkur yo’nalishning qatnov qismidan piyodalarning o’tib olishiga imkon berishi",
      "Ehtiyotkorlik choralariga rioya etgan holda piyodalarning o’tish joyidan o’tishi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 15-bobi 103-bandiga asosan: Svetoforning ruxsat etuvchi ishorasi yonganda haydovchi chorraha orqali harakatlanishni tugallayotgan transport vositalari va qatnov qismidan tegishli yo'nalishda o’tishni tugallayotgan ртуода (Гаг)да yo’l berishi shart."
  },
  {
    "id": 347,
    "biletId": 35,
    "text": "Aholi punktlarida yuk avtomobillarning harakatlanishiga qaysi tasmadan ruxsat etiladi?",
    "options": [
      "Qatnov qismining o’ng chetiga yaqin tasmadan",
      "Boshqa tasmalarda qatnov ko’p bo’lganda istalgan tasmadan",
      "Istalgan tasmadan, biroq, agar relssiz transport vositalarining harakati uchun bir yo’nalishda uchta va undan ortiq tasma bo’lsa, u holda chetki chap tasmaga faqat chapga burilish, orqaga qayrilish uchun o’tishga va tushirish yoki ortish uchun bir tomonlama harakatga ruxsat etilgan ko’chalarda to’xtashga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ: v) yuk avtomobillari, Yo’l harakati qoidalarida belgilangan ayrim istisnolardan tashqari barcha holatlarda, yo’lning faqat o’ng qatnov qismidan harakatlanishi shart."
  },
  {
    "id": 348,
    "biletId": 35,
    "text": "Agar barcha transport vositalari 80 km/soat tezlik bilan harakat qilsa, haydovchilardan qay biri qoidalar talablarini buzadi?",
    "options": [
      "Mototsikl va yuk avtomobilining haydovchilari",
      "Mototsikl va yengil avtomobilning haydovchilari",
      "Hamma haydovchilar",
      "Mototsikl haydovchisi",
      "Hech kim buzmadi"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i35_8.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limi 3.24 belgi talabiga asosan, \"Yuqori tezlik cheklangan\" belgisi transport vositalarining yuqori tezligini cheklaydi."
  },
  {
    "id": 349,
    "biletId": 35,
    "text": "Tormoz yo’li deganda nima tushuniladi?",
    "options": [
      "Haydovchiga xavf ma’lum bo’lgan vaqtdan boshlab avtomobilning to’liq to’xtagungacha bosib o’tgan masofasi",
      "Tormoz tepkisi bosilgan vaqtdan boshlab avtomobilning to’liq to’xtagungacha bosib o’tgan masofa"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Haydovchi tormoz pedalini bosgandan boshlab avtomobilni to’xtaguncha bosib o'tgan yo’liga - “tormoz yo’li” deyiladi."
  },
  {
    "id": 350,
    "biletId": 35,
    "text": "Davlat YHX xizmatining ruxsatisiz transport vositasining yuk bilan yoki yuksiz qanday yuqori o’lchamdagi balandlik bilan harakatlanishiga yo’l qo’yiladi?",
    "options": [
      "5,0 m",
      "4,5 m",
      "4,0 m",
      "2,5 m",
      "3,8 m"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 164-bandining birinchi xatboshisiga asosan: O’ta og’ir, katta o’lchamli va xavfli yuklarni tashishda gabarit o'lchamlari yukli yoki yuksiz holda eni bo’yicha 2,55 (refrijeratorlar va izotermik kuzovlar uchun — 2,6) metrdan va balandligi bo'yicha yo’l sathidan 4 metrdan, uzunligi bo'yicha yakka avtotransport vositasi uchun — 12 metrdan, tirkama uchun — 12 metrdan, yarimtirkamali avtopoezd uchun — 20 metrdan, tirkamali avtopoezd uchun — 20 metrdan ortiq bo'lgan yoki yuki transport vositasining oldi va orqa nuqtasidan 2 metrdan ortiq chiqib turgan transport vositalarining harakatlanishi belgilangan tartibda DYHXX bilan kelishilgan bo’lishi kerak."
  },
  {
    "id": 351,
    "biletId": 36,
    "text": "Qatnav qismi chetidagi piyoda, yalt-yalt etuvchi mayoqcha va maxsus tovushli ishoralarni yoqib kelayotgan transport vositasi yaqinlashib qolganda qanday yo’l tutishi kerak?",
    "options": [
      "Mumkin qadar tezroq qatnov qismidan o’tib olishi",
      "Qatnov qismidan o’tmasligi",
      "Agar piyodalar o’tish joyida bo’lsa, qatnov qismidan o’tishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 21-bandiga asosan: Yalt-yalt etuvchi ko'k rangli yoki ko’k va qizil rangli chiroq-mayoqchasi va maxsus tovushli ishorasi yoqilgan transport vositalari yaqinlashib kelayotgan bo’lsa, piyodalar qatnov qismidan o'tmasliklari, unda harakatlanayotganlari esa, bu transport vositalariga yo’l berishlari va zudlik bilan qatnov qismini bo'shatishlari kerak."
  },
  {
    "id": 352,
    "biletId": 36,
    "text": "Belgilarning qaysi biri ogohlantiruvchi belgilar bilan qayd etilgan xavfli yo’l qismining uzunligini ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i36_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo'limining beshinchi xatboshisiga asosan: 7.2.1. \"Ta’sir oralig’i\". Ogohlantiruvchi belgilar bilan belgilangan xavfli joyning uzunligini yoki taqiqlovchi va axborot-ko’rsatkich belgilarining ta’sir oralig'ini ko'rsatadi."
  },
  {
    "id": 353,
    "biletId": 36,
    "text": "Ushbu yo’l chizig’i quyidagi maqsadni:",
    "options": [
      "Trotuar yaqinidagi to’xtab turish joyida mexanik transport vositalarining qo’yish usullari ko’rsatilgan to’xtab turish joyini bildiradi",
      "Mexanik transport vositalarining to’xtashi taqiqlangan joylarni bildiradi",
      "Belgilangan yo’nalishdagi transport vositalarining to’xtash va taksining to’xtab turish joyini bildiradi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i36_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirma birinchi xatboshisiga asosan: 1.17 — yo’nalishli transport vositalarining bekatlari hamda taksilarning to’xtab turish joylarini bildiradi."
  },
  {
    "id": 354,
    "biletId": 36,
    "text": "Haydovchilardan qay biri birinchi bo’lib harakatlanish uchun imtiyozga ega?",
    "options": [
      "Mototsikl haydovchisi",
      "Avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i36_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 355,
    "biletId": 36,
    "text": "Navbat bilan yalt-yalt etib turuvchi ikkita qizil yoritgichlar quyidagi ma’noga ega:",
    "options": [
      "Harakatni taqiqlaydi",
      "Boshqa haydovchilarga qatnov qismiga maxsus transport vositalarining o’tganligini xabar qiladi",
      "Alohida ehtiyotkorlik bilan harakatlanishga ruxsat etadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i36_5.webp",
    "explanation": "YHQ 7-bobining 31-bandi 6-xatboshiga va 37- bandiga asosan, qizil chiroq, shu jumladan, miltillovchi qizil chiroq harakatni taqiqlaydi;\ntemir yo’l kesishmalarida svetoforning miltillovchi qizil ishorasi bilan bir vaqtda piyodalarning kesishma orqali harakatlanishi taqiqlanganligi to’g’risida xabar beruvchi tovushli ishora ham berilishi mumkin."
  },
  {
    "id": 356,
    "biletId": 36,
    "text": "Shlagbaumni o’zboshimchalik bilan ochish yoki aylanib o’tishga ruxsat beriladimi?",
    "options": [
      "Ruxsat beriladi, faqat svetofor o’chgan bo’lsa",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 118-bandining sakkizinchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: shlagbaumni o’zboshimchalik bilan ochish."
  },
  {
    "id": 357,
    "biletId": 36,
    "text": "Siz uchta tasmasi bo’lgan ikki tomonlama harakatli yo’l bo’ylab ketayapsiz, o’rta tasmaga o’tishga qanday holda ruxsat etiladi?",
    "options": [
      "Faqat quvib o’tish uchun",
      "Faqat aylanib o’tish uchun",
      "Faqat chapga burilish yoki qayrilib olish uchun",
      "Barcha sanab o’tilgan hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 358,
    "biletId": 36,
    "text": "Avtomobilning taniqlik belgisi bo’lganda, yo’lning mazkur qismida qanday yuqori tezlik bilan harakatlanishiga ruxsat etiladi?",
    "options": [
      "70 km/s",
      "90 km/s",
      "100 km/s"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i36_8.webp",
    "explanation": "YHQ 29-bobi 176-bandining oltinchi xatboshisiga asosan: \"Tezlik cheklangan\" — o’ta og’ir, xavfli va katta o’lchamli yuklarni tashiyotgan, shuningdek transport vositasining texnik tavsifnomasida ko'rsatilgan eng yuqori tezligi ushbu Qoidalarning 78, 79 va 80-bandlarida belgilangan tezlikdan kam bo'lgan hollarda transport vositasi kuzovi orqa devorining chap tomoniga 3.24 — \"Yuqori tezlik cheklangan\" yo’l belgisining kichraytirilgan, rangli tasviri tushirilgan shaklidagi belgi. Belgining diametri 160 millimetrdan kam bo’lmasligi, hoshiyasining kengligi belgi diametrining 1/10 qismiga teng bo’lishi kerak."
  },
  {
    "id": 359,
    "biletId": 36,
    "text": "Bosh miya va kalla suyagi o’rtacha holatda jarohatlangan jabrlanuvchini transportning qaysi turida tashish kerak?",
    "options": [
      "Yo’lovchi yengil avtomobilida",
      "Yo’lovchi yuk avtomobilida",
      "Faqat tez tibbiy yordam mashinasida"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Bosh miya suyagi shikastlangan jabrlanuvchi faqat maxsus jihozlangan tez tibbiy yordam yoki qutqarish xizmati avtomobillarida tashiladi."
  },
  {
    "id": 360,
    "biletId": 36,
    "text": "Quyidagi holatda haydovchi piyodaga yo’l berishi lozimmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i36_10.webp",
    "explanation": "YHQ 20-bobi 123-bandiga asosan: Turar joy dahalari (kirish va chiqish 5.38 va 5.39 yo’l belgilari bilan belgilangan hududlar)da piyodalarga trotuarlar hamda qatnov qismida harakatlanishga ruxsat etiladi. Bunda piyodalar imtiyozga ega bo’ladilar, biroq ular transport vositalarining harakatlanishiga asossiz xalaqit bermasliklari kerak."
  },
  {
    "id": 361,
    "biletId": 37,
    "text": "\"Avtomagistral\" belgisi bilan belgilangan yo’lda piyodalarning harakatlanishiga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Transport vositalarining harakatlanishiga qarama qarshi faqat aholi punktlaridan tashqarida yurishga ruxsat etiladi",
      "Transport vositalarining harakatlanishi bo’ylab faqat aholi punktlaridan tashqarida yurishga ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining birinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: piyodalar, uy hayvonlari, ot-aravalar, velosipedlar, individual harakatlanish vositalari, skuterlar, mopedlar, traktorlar va uzi yurar avtomobillar, texnik tavsifnomasiga yoki holatiga ko’ra tezligi soatiga 40 kilometrdan kam bo’lgan transport vositalarining harakatlanishi."
  },
  {
    "id": 362,
    "biletId": 37,
    "text": "Ushbu belgi o’rnatilgan yo’lda kajavali mototsiklni shatakka olishga ruxsat etiladimi?",
    "options": [
      "Tirkamasi bittadan ortiq bo’lmagan mototsiklga ruxsat etiladi",
      "Faqat qattiq ulagichda ruxsat etiladi",
      "Taqiqlanadi",
      "Sirpanchiqda taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i37_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining to’qqizinchi xatboshisiga asosan: 3.7. \"Tirkama bilan harakatlanish taqiqlanadi\". Yuk tashuvchi transport vositalari, traktorlarning barcha turdagi tirkamalar bilan harakatlanishi, shuningdek mexanik transport vositalarini har qanday usulda shatakka olish taqiqlanishini bildiradi."
  },
  {
    "id": 363,
    "biletId": 37,
    "text": "Ushbu yotiq chiziq nimani bildiradi?",
    "options": [
      "Mazkur yo’nalishda harakatlanish bo’lagi soni kamaya borib, qatnov qismining torayishini",
      "Kesib o’tiladigan yo’l bo’ylab harakatlanayotgan transport vositasiga yo’l berar ekan, haydovchi zarur holda qayerda to’xtashi kerak bo’lgan joyni",
      "To’xtash taqiqlangan joyga yaqinlashganlikni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i37_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirma ikkinchi xatboshisiga asosan: 1.18 — chorrahada bo’laklar bo’yicha ruxsat etilgan harakatlanish yo'nalishlarini ko’rsatadi. Mustaqil yoki 5.8.1, 5.8.2 belgilari bilan birgalikda qo’llanilishi mumkin;\noxiri berk yo’l tasvirlangan chiziq shu yo’nalishdagi yon tomonda joylashgan qatnov qismiga burilish taqiqlanganligini ko'rsatish uchun chiziladi;\nchetki chap tasmadan chapga burilishga ruxsat beruvchi yo’naltirgich shu tasmadan qayrilishga ham ruxsat beradi."
  },
  {
    "id": 364,
    "biletId": 37,
    "text": "Qaysi joylarda orqa bilan harakatlanish taqiqlanadi?",
    "options": [
      "Chorrahalarda, piyodalar o’tish joylarida",
      "Ko’priklarda, yo’l o’tkazgichlar, estakadalarda va ularning ostida",
      "Avtomagistrallarda",
      "Sanab o’tilgan barcha joylarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobining 63 bandiga asosan orqaga harakatlanish chorrahalarda va Qoidalarning 62- bandiga muvofiq qayrilib olish taqiqlangan joylarda hamda 19-bobining 121-bandiga asosan, avtomagistrallarda orqaga harakatlanish taqiqlanadi.\nYHQ 9-bobi 62-bandiga asosan: Quyidagi joylarda qayrilib olish taqiqlanadi:\npiyodalarning o’tish joylarida;\ntunnellarda;\nko’priklar, yo’l o’tkazgichlar, estakadalar va ularning ostida (tegishli yo’l belgilari bilan bunday manyovrni bajarish ruxsat berilgan yo’l qismlari bundan mustasno);\ntemir yo’l kesishmalarida;\nyo’lning ko’rinishi biror-bir yo’nalishda 100 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 365,
    "biletId": 37,
    "text": "Tramvay haydovchisi harakatlanayotganida svetoforning ushbu ishorasiga muvofiq boshqa yo’nalishlardan harakatlanayotgan transport vositalariga yo’l berishi kerakmi?",
    "options": [
      "Kerak",
      "Kerak emas"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i37_5.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning yo’naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 366,
    "biletId": 37,
    "text": "Transport vositalariga sidirg’a oq chiziq bilan ajratilgan va \"Yo’nalishli transport vositalari uchun mo’ljallangan tasma\" yo’l belgisi bilan belgilangan yo’lning o’ng bo’lagida to’xtab turishga ruxsat etiladimi?",
    "options": [
      "Agar to’xtab turishni taqiqlovchi belgi bo’lmasa, ruxsat etiladi",
      "Taqiqlanadi",
      "Faqat shu hududdagi korxonaga xizmat qiladigan yoki yaqin o’rtadagi uylarda yashaydigan fuqarolarga qarashli avtomobillarga ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 22-bobi 132-bandining birinchi xatboshisiga asosan: Yo’nalishli transport vositalarining harakatlanishi uchun 5.9, 5.10.1 — 5.10.3 yo’l belgilari bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to’xtashi taqiqlanadi."
  },
  {
    "id": 367,
    "biletId": 37,
    "text": "Bunday yo’l belgisi o’rnatilgan yo’l qismlarida mototsikllarga qanday yuqori tezlik bilan harakatlanishga ruxsat etiladi?",
    "options": [
      "60 km/s",
      "70 km/s",
      "80 km/s",
      "90 km/s",
      "100 km/s"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i37_7.webp",
    "explanation": "YHQ 11-bobi 79-bandining uchinchi xatboshisiga asosan, aholi punktlaridan tashqarida: boshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan."
  },
  {
    "id": 368,
    "biletId": 37,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Tramvay haydovchisi",
      "Yuk avtomobilining haydovchisi",
      "Har ikki avtomobil haydovchisi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i37_8.webp",
    "explanation": "YHQ 16-bobi 104-bandiga muvofiq, teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashib kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 369,
    "biletId": 37,
    "text": "Serqatnov harakatda transport vositasini keskin tormozlash:",
    "options": [
      "Orqadan kelayotganlarning urilib ketishini keltirib chiqarishi mumkin",
      "Avtomobilning faqat texnik holatida ko’rinadi",
      "Serqatnov harakatda boshqarishning odatdagi usuli hisoblanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 81-bandining to’rtinchi xatboshisiga asosan, haydovchilarga quyidagilar taqiqlanadi: yo'l-transport hodisasining oldini olish zaruriyati bo'lmaganda keskin tormoz berish."
  },
  {
    "id": 370,
    "biletId": 37,
    "text": "Qanday holatlarda tashilayotgan yuk ishora taxtachalari yoki bayroqchalar bilan kunning qorong’i vaqtida, yetarli ko’rinmaydigan sharoitlarda esa yorug’lik qaytargich yoki chiroqlar bilan belgilanadi?",
    "options": [
      "Yuk transport vositasining o’lchamidan oldinda yoki orqada 1 metrdan ko’p chiqib qolganda",
      "Yuk transport vositasining o’lchamidan orqada 0,8 metr chiqib qolganda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 163-bandiga asosan: Transport vositasining gabaritlaridan old yoki orqa tomonga bir metrdan, yon tomonga gabarit chiroqlarining chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk \"Katta o’lchamli yuk\" taniqlik belgisi bilan belgilanishi, qorong’i vaqtda va yetarlicha ko’rinmaydigan sharoitda esa bunga qo’shimcha ravishda old oq chiroq yoki yorug’lik qaytargich, orqasi esa qizil chiroq yoki yorug’lik qaytargich bilan belgilanishi kerak."
  },
  {
    "id": 371,
    "biletId": 38,
    "text": "Qatnov qismi tomonidan yo’lovchilarning tushishi va chiqishiga qaysi hollarda ruxsat etiladi?",
    "options": [
      "Transport vositasi majburiy to’xtaganda",
      "Haydovchining hohishiga ko’ra shu shart bilanki, bu xavf-xatardan xoli bo’lsa va boshqa harakat qatnashchilariga xalaqit bermasa",
      "Trotuar tomondan yoki yo’l yoqasidan iloji bo’lmasa shu shart bilanki, bu hol xavf-xatarsiz bo’lsa va boshqa harakat qatnashchilariga xalaqit bermasa"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 5-bobi 23-bandining ikkinchi xatboshisiga asosan: Yo’lovchilarning transport vositalaridan trotuar yoki yo'l yoqasi tomondan tushishi yoki ularga chiqishining iloji bo’lmagan hollarda, agar bu harakat xavf tug’dirmasa yoki boshqa yo’l harakati qatnashchilariga xalaqit bermasa yo’lning qatnov qismi tomonidan amalga oshirilishi mumkin."
  },
  {
    "id": 372,
    "biletId": 38,
    "text": "Yuk avtomobilining qaysi yo’nalishlarda harakatlanishiga ruxsat etiladi?",
    "options": [
      "Faqat o’ngga",
      "O’ngga, chapga va qayrilib olishga",
      "Faqat chapga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining qirq sakkizinchi xatboshisiga asosan: 5.30.1 \"Yuk avtomobillari uchun harakatlanish yo'nalishi\". Chorrahada yuk avtomobillari, traktorlar va o’ziyurar moslamalarga biror yo’nalishda harakatlanish taqiqlangan bo'lsa, bunday transport vositalariga tavsiya etilgan harakatlanish yo'nalishlari ko’rsatadi."
  },
  {
    "id": 373,
    "biletId": 38,
    "text": "Bu yotiq chiziq bildiradi:",
    "options": [
      "Ko’rsatilgan yo’nalishlarda harakatlanishni taqiqlaydi",
      "Chorrahada tasmalar bo’laklar bo’yicha ruxsat etilgan harakat yo’nalishlarini ko’rsatadi",
      "Harakat barcha yo’nalishlarda ruxsat etilgan yo’llarning kesishmasiga yaqinlashganlikni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining yigirma ikkinchi xatboshisiga asosan: 1.18 — chorrahada tasmalar bo’laklar bo’yicha ruxsat etilgan harakatlanish yo’nalishlarini ko’rsatadi. Mustaqil yoki 5.8.1, 5.8.2 belgilari bilan birgalikda qo’llanilishi mumkin;\noxiri berk yo’l tasvirlangan chiziq shu yo’nalishdagi yon tomonda joylashgan qatnov qismiga burilish taqiqlanganligini ko’rsatish uchun chiziladi;\nchetki chap tasmadan chapga burilishga ruxsat beruvchi yo’naltirgich shu tasmadan qayrilishga ham ruxsat beradi."
  },
  {
    "id": 374,
    "biletId": 38,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Yengil avtomobil, avtobus, velosiped",
      "Avtobus, velosiped, yengil avtomobil",
      "Avtobus, yengil avtomobil, velosiped",
      "Velosiped, avtobus, yengil avtomobil"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_4.webp",
    "explanation": "YHQ 16-bobi 104, 106-bandlariga asosan, teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, keyingi harakat yo’nalishidan qat’i nazar, asosiy yo’ldan kelayotgan transport vositasiga ikkinchi darajali yo’ldan kelayotgan transport vositasining haydovchisi yo’l berishi kerak.\nYHQ 16-bobi 107 bandiga asosan, chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek, ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 375,
    "biletId": 38,
    "text": "Rasmda ko’rsatilgan holatda qizil avtomobilning haydovchisi qanday yo’l tutishi kerak?",
    "options": [
      "Svetoforning ruxsat ishorasini kutishi va to’g’riga o’tishi",
      "O’ngga burilish ishorasini yoqishi va o’ngga burilishi",
      "Chapga burilish ishorasini yoqishi va o’ng qatorni bo’shatishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_5.webp",
    "explanation": "Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doirasimon shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi. Agar tegishli yo'l belgisi bilan qayrilib olish taqiqlanmagan bo’lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo'shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi. Svetoforning qo’shimcha tarmoqdagi ishora o’chirilgan bo’lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi."
  },
  {
    "id": 376,
    "biletId": 38,
    "text": "Temir yo’l kesishmasi oldida to’xtagandan keyin harakatni boshlashdan oldin haydovchi:",
    "options": [
      "Bitta uzun va uchta qisqa tovushli ishora berib harakatni boshlashi kerak",
      "Yaqinlashib kelayotgan poezdning yo’qligiga ishonch hosil qilishi kerak",
      "Har ikki javob to’g’ri"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 117-bandiga asosan: Temir yo'l kesishmasiga yaqinlashib kelayotgan haydovchi yo’l belgilari va chiziqlariga, svetofor ishoralariga, shlagbaum holatiga, kesishma navbatchisining ko’rsatmalariga amal qilishi, yaqinlashib kelayotgan poezd (lokomotiv, drezina) yo’qligiga ishonch hosil qilishi shart."
  },
  {
    "id": 377,
    "biletId": 38,
    "text": "Shunday yo’l belgisi bilan belgilangan yo’l qismlarida shaharlararo bo’lmagan avtobuslarning qanday yuqori tezlik bilan harakatlanishiga ruxsat etiladi?",
    "options": [
      "50 km/s",
      "60 km/s",
      "70 km/s",
      "80 km/s",
      "90 km/s"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_7.webp",
    "explanation": "YHQ 11-bobi 79-bandining uchinchi xatboshisiga asosan, aholi punktlaridan tashqarida: boshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan."
  },
  {
    "id": 378,
    "biletId": 38,
    "text": "Qaysi transport vositalarining haydovchilari to’xtab turish qoidasini buzdilar?",
    "options": [
      "Yengil avtomobil haydovchisi",
      "Yuk avtomobili haydovchisi",
      "Har ikki haydovchi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_8.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz ikkinchi xatboshisiga asosan: 3.28. \"To'xtab turish taqiqlangan\". Transport vositalarining to'xtab turishi taqiqlanishini bildiradi.\nYHQ 13-bobi 88-bandining uchinchi xatboshisiga asosan: Ruxsat etilgan to'la vazni 3,5 tonnadan ko'p bo'lgan yuk avtomobillari bir tomonlama harakatli yo'llarning chap tomonida faqat yuk ortish va tushirish uchun to’xtashlari mumkin."
  },
  {
    "id": 379,
    "biletId": 38,
    "text": "Sirpanchiq yo’lda harakatlanayotganda karbyuratorning drossel zaslonkasini birdaniga ochish xavfi nimadan iborat?",
    "options": [
      "Yurgizgich o’chib qoladi",
      "Yonilg’i sarfi ancha ortadi",
      "Avtomobilning yonga sirpanishi vujudga kelishi mumkin",
      "Yurgizgich tirsakli val aylanishining maksimal chastotasini oshiradi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Sirpanchiq yo'lda sirpanish hollari birdan tezlik oshirilganda, yetakchi g’ildiraklarning o'rnidan jilmay aylanishi (charx urishi) kelib chiqadi. Bu holda sirpanish sabablarini bartaraf qilish, ya’ni yonilg'i o'tishini boshqaruvchi tepkisini (drossel zaslonkasini) bosishni kamaytirish lozim."
  },
  {
    "id": 380,
    "biletId": 38,
    "text": "Qaysi hollarda avtomobillar ushbu taniqlik belgilari bilan belgilanadi?",
    "options": [
      "Xavfli yuklar tashiyotganda",
      "Nogironlar boshqarayotganda",
      "Kar-soqov yoki kar haydovchilar boshqarayotganda",
      "Ikki yilgacha haydovchilik ish davriga ega bo’lgan haydovchilar boshqarayotganda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i38_10.webp",
    "explanation": "YHQ 29-bobi 176-bandining to’rtinchi xatboshisiga asosan, transport vositalariga quyidagi taniqlik belgilari o'rnatilishi kerak: \"Kar haydovchi\" — kar-soqov yoki kar haydovchi boshqarayotgan transport vositasining old va orqa tomonlariga ichiga diametri 40 millimetr bo'lgan uchta qora doira tushirilgan, diametri 160 millimetrni tashkil etadigan sariq rangli doira shaklidagi belgi."
  },
  {
    "id": 381,
    "biletId": 39,
    "text": "Piyodalar o’tish joyidan tashqarida yo’lning qatnov qismidan ajratuvchi mintaqa bo’lganda piyodalarning o’tishlariga ruxsat etiladimi?",
    "options": [
      "Yo’lning har ikki tomoni ko’rinadigan joylarda ruxsat etiladi",
      "Faqat aholi punktlaridan tashqarida ruxsat etiladi",
      "Faqat aholi punktlarida ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 17-bandiga asosan: Piyodalar yo'lning qatnov qismini piyodalar o’tish joylaridan, shuningdek yer osti va yer usti o'tish joylaridan, ular bo’lmaganda esa chorrahalarda trotuar chiziqlari yoki yo'l yoqasi bo’ylab kesib o’tishlari kerak. Piyodalarga ko’rinadigan oraliqda o’tish joyi yoki chorraha bo'lmasa, ajratuvchi mintaqasiz va to’siqsiz yo’llardan yo’lning ikki tomoni yaxshi ko’rinadigan joyidan, qatnov qismining chetiga nisbatan to’g’ri burchak ostida kesib o’tishlariga ruxsat etiladi."
  },
  {
    "id": 382,
    "biletId": 39,
    "text": "Ushbu belgi quyida sanab o’tilgan yuk avtomobillarining qaysilariga harakatni davom ettirishni taqiqlamaydi?",
    "options": [
      "Yuk ko’tarish 3,5 tonnadan ortiq bo’lgan avtomobillarga",
      "Ruxsat etilgan to’la vazni 3,5 tonnadan ortiq bo’lgan avtomobillarga",
      "Xavfli yuk tashiyotgan avtomobillarga",
      "Yukxonasiga qiya oq chiziq tortilgan yuk avtomobillariga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining oltinchi xatboshisiga asosan: 3.4 yo’l belgisi bortlariga qiya oq chiziq tortilgan yoki odamlarni tashish uchun mo’ljallangan yuk avtomobillarining harakatlanishini taqiqlamaydi."
  },
  {
    "id": 383,
    "biletId": 39,
    "text": "Reversiv svetoforlar bo’lmaganda yoki ular o’chirib qo’yilganda ikkitali uzuq uzuq chiziqni kesib o’tishga ruxsat etiladimi?",
    "options": [
      "Agar u haydovchining chap tomonida bo’lsa, ruxsat etiladi",
      "Agar u haydovchining o’ng tomonida bo’lsa, ruxsat etiladi",
      "Istalgan tomondan ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o’n birinchi va o’ttiz oltinchi xatboshlariga asosan: 1.9 — reversiv harakat tashkil etilgan bo’laklarning chegarasini belgilaydi;\nreversiv harakatlanish amalga oshirilgan yo’llarda (reversiv svetofori o’chirilgan holatda) qarama-qarshi yo'nalishdagi transport oqimini ajratadi. Reversiv svetofor yoqilgan paytda bir yo’nalishli tasmalarni ajratayotgan 1.9 chizig’ini istalgan tomondan bosib o’tishga ruxsat etiladi. Reversiv svetofor o’chirilganda, haydovchilar darhol 1.9 chizig’idan o’ngga qayta tizilishlari kerak."
  },
  {
    "id": 384,
    "biletId": 39,
    "text": "Qaysi transport vositasi haydovchisi birinchi bo’lib harakatlanish huquqiga ega?",
    "options": [
      "Avtomobil haydovchisi",
      "Velosiped haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak."
  },
  {
    "id": 385,
    "biletId": 39,
    "text": "Svetoforning bu ishorasida qaysi transport vositalarining harakatlanishiga ruxsat etilgan?",
    "options": [
      "Tramvay, sariq va qizil avtomobilga",
      "Sariq va qizil avtomobillarga",
      "Barcha transport vositalariga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_5.webp",
    "explanation": "YHQ 7-bobi 32-bandiga asosan: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doira shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo'nalishga ta’sir etadi. Agar tegishli yo’l belgisi bilan qayrilib olish taqiqlanmagan bo'lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo’shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi. Qo’shimcha tarmoqdagi ishora o'chirilgan bo'lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi."
  },
  {
    "id": 386,
    "biletId": 39,
    "text": "Aholi punktlarida avtobus yoki trolleybus haydovchisi harakatni bekatdan boshlaydi. U:",
    "options": [
      "Uni aylanib o’tayotgan transport vositasiga yo’l berishi kerak",
      "Imtiyozdan foydalanib, belgilangan yo’nalishda harakatni boshlashi kerak",
      "Unga yo’l berilganligiga ishonch hosil qilgach harakatni boshlashi kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 22-bobi 133-bandiga asosan: Haydovchilar aholi yashash joylarida bekatdan harakatlanishni boshlayotgan avtobus va trolleybuslarga yo’l berishlari kerak. O’z navbatida avtobus va trolleybus haydovchilari o'zlariga yo’l berilganligiga ishonch hosil qilganliklaridan keyingina harakatlanishni boshlashlari mumkin."
  },
  {
    "id": 387,
    "biletId": 39,
    "text": "Qaysi transport vositasi haydovchisi to’xtab turish qoidasini buzdi?",
    "options": [
      "Ko’k avtomobil haydovchisi",
      "Qizil avtomobil haydovchisi",
      "Har ikki haydovchi buzdi",
      "Har ikki haydovchi ham buzmadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_7.webp",
    "explanation": "YHQ 13-bobi 91-bandining sakkizinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: qatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 388,
    "biletId": 39,
    "text": "Ko’rsatilgan vaziyatda qizil avtomobil haydovchisi qanday yo’l tutishi kerak?",
    "options": [
      "Transport vositalariga to’sqinlik qilmasligi uchun burilishni tezroq tugallashi",
      "Hovlidan chiqishda piyodani va transport vositalarini o’tkazib yuborishi",
      "Transport vositalariga yo’l berish, qatnov qismi chetida to’xtashi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_8.webp",
    "explanation": "YHQ 9-bobi 54-bandiga asosan: Yondosh hududlardan yo’lga chiqayotgan haydovchi unda harakatlanayotgan transport vositalari va piyodalarga, shuningdek yo’ldan chiqishda harakat yo’nalishini kesib o’tayotgan piyodalar va velosipedchilarga yo’l berishi kerak."
  },
  {
    "id": 389,
    "biletId": 39,
    "text": "Sirpanchiq yo’lda tormozlardan qanday foydalanish kerak?",
    "options": [
      "Ulagichni ajratmay turib sekin tormoz berishi va boshqaruv rulining keskin burishga yo’l qo’ymasligi",
      "Ulagichni ajratishi va sekin tormoz berishi",
      "Tormoz tepkisini uzuq-uzuq bosish bilan keskin tormoz berishi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Keskin tormoz berish oqibatida blokirovka bo'lgan g’ildiraklarga rul chambaragining burilishi ta’sir qilmaydi. Sirpanchiq yo'lda dvigatel orqali, g’ildiraklarni blakirovka qilmasdan tormoz berish samarali tormoz berishga yordam beradi."
  },
  {
    "id": 390,
    "biletId": 39,
    "text": "Transport vositalari ushbu taniqlik belgilari bilan belgilanadi:",
    "options": [
      "Kar yoki kar-soqov haydovchilar boshqarayotgan",
      "Nogiron boshqarayotgan",
      "Xavfli yuklar tashiyotgan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i39_10.webp",
    "explanation": "YHQ 29-bobi 176-bandining o'n to’rtinchi xatboshisiga asosan, transport vositalariga quyidagi taniqlik belgilari o'rnatilishi kerak: \"Nogiron\" — birinchi yoki ikkinchi guruh nogironi boshqarayotgan transport vositasining old va orqa tomoniga o'rnatiladigan barcha tomonlari 150 millimetr bo'lgan va qora rangli 7.17 yo’l belgisining tasviri tushirilgan sariq rangli to'rtburchak shaklidagi belgi."
  },
  {
    "id": 391,
    "biletId": 40,
    "text": "Ko’k avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Birinchi bo’lib",
      "Ikkinchi bo’lib",
      "Uchinchi bo’lib",
      "Oxirgi bo’lib"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i40_1.webp",
    "explanation": "YHQ 16-bobi 106, 106-bandlariga asosan, teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, keyingi harakat yo'nalishidan qat’i nazar, asosiy yo'ldan kelayotgan transport vositasiga ikkinchi darajali yo'ldan kelayotgan transport vositasining haydovchisi yo’l berishi kerak. Asosiy yo’lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o'tish qoidasiga amal qilishlari kerak.\nYHQ 16-bobi 107-bandiga muvofiq, chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek, ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 392,
    "biletId": 40,
    "text": "Qaysi belgi ro’paradan harakatlanayotgan transport vositalariga yo’l berishni talab qiladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i40_2.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’limining o’ninchi xatboshisiga asosan: 2.6. \"Ro’para harakatlanishning ustunligi\". Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo’lning tor qismiga kirish taqiqlanadi. Haydovchi yo'lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 393,
    "biletId": 40,
    "text": "Yotiq chiziqlarning sidirg’a chizig’ini bosib o’tishga ruxsat etiladimi?",
    "options": [
      "Agar u haydovchining o’ng tomonida bo’lsa ruxsat etiladi",
      "Faqat shunday holda ruxsat etiladiki, agar chiziq yo’l qatnov qismining chetlarini bildirsa",
      "Chiziq bir yo’nalishdagi harakat tasmalarining chegarasini bildirganda faqat manyovr qilishda ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-ilovasi 1-bo’limining uchinchi va o’ttiz to’rtinchi xatboshlariga asosan: 1.1 — qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo’lning xavfli joylaridagi harakatlanish bo’lagi chegarasini va velosipedchilar uchun bo’lagining chegarasini bildiradi; yo’lning kirish taqiqlangan qismi chegarasini belgilaydi; transport vositalarining to’xtab turish joyi chegarasini hamda avtomagistral qatoriga kiritilmagan yo’lning qatnov qismi chegarasini bildiradi; \n1.1 va 1.3 chiziqlarini bosib o’tish taqiqlanadi, qatnov qismining chetini bildirish uchun qo’llanilgan 1.1 chizig’i bundan mustasno."
  },
  {
    "id": 394,
    "biletId": 40,
    "text": "Ko’rsatilgan vaziyatda haydovchi qanday yo’l tutishi kerak?",
    "options": [
      "Piyodalarga mazkur yo’nalishning qatnov qismidan butunlay o’tib olishlariga imkon berishi",
      "Yo’l-transport hodisasining oldini olish uchun tovush ishora berishi va asosiy yo’lda bo’lgani sababli piyodalarga yo’l bermay o’tish joyidan o’tishi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i40_4.webp",
    "explanation": "YHQ 14-bobi 96-bandiga asosan: Chapga yoki o'ngga burilayotgan haydovchi kesishayotgan yo’lning qatnov qismidan o’tayotgan piyoda (lаr)da, shuningdek velosiped yo’lkasidan yo’lni kesib o’tayotgan velosipedchi(lar)ga va individual harakatlanish vositalarini boshqarayotgan shaxs(lar)ga yo’l berishi kerak."
  },
  {
    "id": 395,
    "biletId": 40,
    "text": "Qizil avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Birinchi bo’lib",
      "Ikkinchi bo’lib",
      "Uchinchi bo’lib",
      "Oxirgi bo’lib"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i40_5.webp",
    "explanation": "YHQ 15-bobi 99, 101-bandlariga asosan, svetoforning yashil ishorasida chapga burilayotgan yoki qayrilib olayotgan relssiz transport vositasining haydovchisi qarama- qarshi tomondan to'g'riga harakatlanayotgan va o’ngga burilayotgan transport vositalariga yo’l berishi shart. Tramvay haydovchilari ham o’zaro ushbu qoidaga amal qilishlari kerak. Agar svetofor yoki tartibga soluvchining ishoralari tramvay va relssiz transport vositalariga bir vaqtda harakatlanishga ruxsat bersa, harakatlanish yo'nalishidan qat’i nazar, tramvay oldin o’tish huquqiga ega bo'ladi."
  },
  {
    "id": 396,
    "biletId": 40,
    "text": "Agar piyodalar o’tish joyida tirbandlik vujudga kelib, haydovchini piyodalar o’tish joyida to’xtashga majbur qilsa, haydovchi majbur:",
    "options": [
      "To’xtashga va piyodalar o’tish joyiga o’tmaslikka, chunki bu piyodalarning harakati uchun to’sqinlik qiladi",
      "Piyodalar o’tish joyiga 15 metr yetmasdan to’xtashga",
      "Oldinda turgan transport vositasidan zarur masofa saqlangan holda piyodalar o’tish joyida to’xtashga",
      "Piyodalar o’tish joyiga 5 metr yetmasdan to’xtashga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 17-bobi 112-bandiga asosan: Piyodalar o'tish joylaridan keyin paydo bo’lgan tirbandlik tufayli haydovchi piyodalar o’tish joyida to’xtashga majbur bo’ladigan bo’lsa, piyodalar o’tish joyiga kirish taqiqlanadi."
  },
  {
    "id": 397,
    "biletId": 40,
    "text": "Bu joyda quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Aholi punktidan tashqaridagi yo’llarda ruxsat etiladi",
      "Faqat aholi punktlaridan tashqaridagi yo’llarda taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i40_7.webp",
    "explanation": "YHQ 12-bobi 86-bandining oltinchi xatboshisiga asosan, quvib o'tish quyidagi hollarda taqiqlanadi: tepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;"
  },
  {
    "id": 398,
    "biletId": 40,
    "text": "Navbatchining haydovchiga qaratilgan qaysi holati temir yo’l kesishmasi orqali harakatlanishni taqiqlovchi ishora hisoblanadi?",
    "options": [
      "Haydovchiga chap yoki o’ng yelkasini o’girib, tayoqchani (qizil bayroqni) boshidan yuqori ko’tarib turishi",
      "Ko’kragini yoki orqasini o’girib, tayoqchani (qizil bayroqni) boshidan yuqori ko’tarib turishi yoki qo’llarini yoniga uzatib turishi",
      "Istalgan yelkasi yoki ko’kragini o’girib, tayoqchani (qizil bayroqni) boshidan yuqori ko’tarib turishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 118-bandining uchinchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: kesishma navbatchisining taqiqlovchi ishorasida (navbatchi haydovchilarga oldi yoki orqasi bilan turib tayoqchani, qizil chiroq yoki bayroqchani yuqoriga ko’tarib tursa yoki qo’llarini yonga uzatsa)."
  },
  {
    "id": 399,
    "biletId": 40,
    "text": "Chuqur kechuvdan o’tgach, haydovchi nima qilishi shart?",
    "options": [
      "Tezlanish bilan yuqoriroq uzatmalarda harakatlanishga",
      "Qisqa masofa oralig’ida tezlanish olib tormoz tepkisini bir necha bor bosib tormoz mexanizmi friksion ustqoplamalarini quritishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Suv kechuvlaridan o'tgandan keyin, tormoz kalodkalarini quritish lozim. Tormoz tepkisini ko'p marotaba qisqa-qisqa bosish avtomobilning barcha g’ildiraklari tormozlarining samaradorligini qayta tiklaydi."
  },
  {
    "id": 400,
    "biletId": 40,
    "text": "Transport vositasi ushbu taniqlik belgisi bilan belgilanadi:",
    "options": [
      "Nogiron boshqarayotgan",
      "Og’ir vaznli va yirik o’lchamda yuk tashiyotgan",
      "Xavfli yuklar tashiyotgan",
      "Kar-soqov yoki kar haydovchilar boshqarayotgan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i40_10.webp",
    "explanation": "YHQ 29-bobi 176-bandining yettinchi xatboshisiga asosan, transport vositalariga quyidagi taniqlik belgilari o'rnatilishi kerak: \"Xavfli yuk\" xavfli yukni tashiyotgan transport vositasining old va orqa tomoniga o’rnatilgan o'lchami 690 x 300 millimetr, o’ng qismi 400 x 300 millimetr bo'lgan zarg’aldoq rangli, chap qismi esa yukning xavfli xususiyatini bildirib turgan belgilar tushirilgan qora hoshiyali (kengligi 15 millimetr) oq rangdagi to’rtburchak shaklidagi belgi (ushbu Qoidalarga 4-ilova)."
  },
  {
    "id": 401,
    "biletId": 41,
    "text": "Qaysi avtomobil to’xtash qoidasini buzdi?",
    "options": [
      "Yashil avtomobil",
      "Har ikkisi buzdi",
      "Har ikkisi ham buzmadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i41_1.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz birinchi xatboshisiga asosan: 3.27. \"To’xtash taqiqlangan\". Transport vositalarining to’xtashi va to'xtab turishi taqiqlanishini bildiradi. YHQ 1-ilovasi 7-bo'limining o’ttiz birinchi xatboshisiga asosan: 7.18. \"Nogironlar mustasno\". Belgilarning ta’siri ushbu Qoidalarning 175-bandiga muvofiq \"Nogiron\" taniqlik belgisi o'rnatilgan transport vositalariga joriy etilmaydi."
  },
  {
    "id": 402,
    "biletId": 41,
    "text": "Ko’rsatilgan belgilardan qay biri ilgari kiritilgan barcha cheklashlarni bekor qiladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i41_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz beshinchi xatboshisiga asosan: 3.31. \"Barcha cheklovlarning oxiri\". 3.16, 3.20, 3.22, 3.24, 3.26 — 3.30 belgilaridan bir nechtasiga bir vaqtda amal qiladigan oraliqlarning oxirini bildiradi."
  },
  {
    "id": 403,
    "biletId": 41,
    "text": "Haydovchi qaysi rasmda qoidalar talablarini buzmay turib manyovr qildi?",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i41_3.webp",
    "explanation": "YHQ 1-ilovasi 4-bo'limining birinchi va to'qqizinchi xatboshlariga asosan: 4.1.1. \"Harakatlanish to’g’riga\". 4.1.1 belgisi yo’lning qismi boshlanishiga o’rnatilsa, unga yaqin chorrahagacha amal qilinadi. Belgi o'ng tomonda joylashgan hovli va boshqa yondosh hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 404,
    "biletId": 41,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Tramvay, avtomobil va avtobus bir vaqtda",
      "Tramvay, avtobus, avtomobil",
      "Avtobus, tramvay, avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i41_4.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak."
  },
  {
    "id": 405,
    "biletId": 41,
    "text": "Agar yo’l tasmasi sidirg’a chiziq bilan ajratilib, belgi bilan belgilangan bo’lsa, avtobus haydovchisining tasma bo’ylab harakatlanishiga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar avtobus belgilangan yo’nalish bo’yicha harakatlanayotgan bo’lsa, ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i41_5.webp",
    "explanation": "YHQ 22-bobi 132-bandining birinchi va ikkinchi xatboshlariga asosan: Yo’nalishli transport vositalarining harakatlanishi uchun 5.9, 5.10.1 — 5.10.3 yo’l belgilari bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to’xtashi taqiqlanadi. Agar 5.9 yo’l belgisi bilan belgilangan tasma qatnov qismining boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan bo’lsa, burilmoqchi bo’layotgan transport vositalari bu tasmaga qayta tizilishlari kerak."
  },
  {
    "id": 406,
    "biletId": 41,
    "text": "Ko’krak qafasi shikastlangan yaradorni kerakli joyga qanday eltish kerak?",
    "options": [
      "Yaralangan yoni bilan yotgan yoki yarim o’tirgan holda",
      "Sog’ yoni bilan yotgan yoki o’tirgan holda",
      "Orqasi bilan yoki qorni bilan yotgan holda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Suyak siniqlarining bir-biriga nisbatan qo’zg’almasligini ta’minlash uchun ko'krak qafasiga bog’ich tarang qilib bog’lanadi. Bu holda nafas olish o’tirgan holatda erkin bo'lgan ko’krak-qursoq diafragma pardasi harakatlari hisobiga amalga oshiriladi."
  },
  {
    "id": 407,
    "biletId": 41,
    "text": "Relssiz transport vositalarining harakatlanishi uchun tasmalar soni qanday aniqlanadi?",
    "options": [
      "Yo’l yotiq chiziqlari bilan",
      "\"Tasmalar bo’yicha harakat yo’nalishi\" yoki \"Tasma bo’yicha harakatlanish yo’nalishi\" yo’l belgilari bilan",
      "Haydovchining o’zi tomonidan qatnov qismining kengligini, transport vositalarining o’lchamlarini va ular o’rtasidagi zarur yonlama oraliq masofani hisobga olib",
      "Barcha sanab o’tilgan usullar bilan"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 64-bandiga asosan: Relssiz transport vositalari harakatlanadigan tasmalar soni chiziqlar va (yoki) 5.8.1, 5.8.2, 5.8.7, 5.8.8 yo’l belgilari bilan belgilanadi. Bunday chiziqlar yoki yo’l belgilari bo’lmasa, haydovchilar harakatlanish tasmalari sonini, qatnov qismining kengligini, transport vositalari orasidagi zarur yonlama oraliq masofani va ularning gabarit o’lchamlarini hisobga olgan holda o’zlari aniqlaydilar. Bunda harakatlanish ikki tomonlama bo’lgan yo’l qatnov qismining chap tomondagi yarmi, qatnov qismining joylardagi kengayishlari (sekinlashish va tezlashish tasmalari, balandlikka ko’tarilishdagi qo’shimcha tasmalar, yo’nalishli transport vositalarining to’xtash joylaridagi kengayishlar)ni hisobga olmagan holda, qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan deb hisoblanadi."
  },
  {
    "id": 408,
    "biletId": 41,
    "text": "Avtopoyezdni shu vaziyatda, agar u 40 km/soatdan kam tezlik bilan harakat qilayotgan bo’lsa, quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i41_8.webp",
    "explanation": "YHQ 12-bobi 86-bandining ikkinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: tartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;"
  },
  {
    "id": 409,
    "biletId": 41,
    "text": "Ikki tomonlama harakatli yo’lda uchta tasma bor, Siz o’nga burilishingiz zarur. Siz ushbu manyovrni qaysi tasmadan amalga oshirasiz?",
    "options": [
      "O’ng tasmadan",
      "O’rta tasmadan",
      "O’ng yoki o’rta tasmadan",
      "O’rta tasmadan, lekin faqat o’ng tasma band bo’lgan holda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 56-bandining birinchi xatboshisiga asosan: Haydovchi, aylanma harakatlanish tashkil qilingan chorrahalarga kirish uchun burilishdan boshqa barcha hollarda, o’ngga, chapga burilish yoki qayrilib olishdan oldin shu yo’nalishda harakatlanishi mo’ljallangan qatnov qismining eng chetki holatini egallashi shart."
  },
  {
    "id": 410,
    "biletId": 41,
    "text": "Qish vaqtida orqa yetakchi ko’prikli avtomobilda chuqur bo’lib qolgan g’ildirak izidan qanday chiqish mumkin?",
    "options": [
      "Uncha katta bo’lmagan tezlikda birinchi galda boshqaruv rulini chiqish tomonning qarama qarshi tomoniga, keyin esa chiqish tomoniga shiddat bilan burish kerak",
      "Izdan chiqishni iloji boricha tezroq boshlash, dastlab boshqaruv rulini chiqish tomoniga, keyin esa ro’parasiga burish kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Tuproqli yo’lda chuqur qor bo’ylab oldindan tanlangan pastgi uzatmada rul chambaragini keskin burmasdan va to’xtamasdan harakatda bo’lish ushbu uchastkada yuzaga keluvchi katta qarshilik kuchini bartaraf qilish uchun zarur bo’lgan quvvat zapasi bilan ta’minlaydi."
  },
  {
    "id": 411,
    "biletId": 42,
    "text": "Kunning qorong’i vaqtida va yetarlicha ko’rinmaydigan sharoitlarda yo’lda qoldirilgan yo’l mashinalari, qurilish materiallari, qurilma va hokazolar bildirilishi kerak:",
    "options": [
      "Tegishli yo’l belgilari bilan",
      "Yo’naltiruvchi va tevaragini o’rovchi moslamalar bilan",
      "Qizil yoki sariq yoritgich chiroqlari bilan",
      "Barcha sanab o’tilgan alomatlar bilan"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 29-bobi 182-bandiga asosan: Yo’llarda ta’mirlash ishlarini bajarishga javobgar mansabdor va boshqa shaxslar ishlar olib borilayotgan joyda yo’l harakati xavfsizligini ta’minlashga majbur. Bunday joylar, shuningdek yo’ldan tashqariga olib chiqish imkoniyati bo’lmagan ish bajarmayotgan yo’l mashinalari, qurilish materiallari, qurilma va shunga o’xshashlar tegishli yo'l belgilari, yo’naltiruvchi va to’suvchi moslamalar bilan, sutkaning qorong’i vaqtida va yetarlicha ko’rinmaydigan sharoitda esa, qo’shimcha qizil yoki sariq chiroqli ishoralar bilan belgilanishi kerak. Ta’mirlash ishlari tugagandan so'ng transport vositalari va piyodalarning xavfsiz harakatlanishi ta’minlangan bo’lishi kerak."
  },
  {
    "id": 412,
    "biletId": 42,
    "text": "Haydovchi qanday holda bu belgining talablarini to’g’ri bajaradi?",
    "options": [
      "Kesishadigan yo’l bo’ylab harakat qilayotgan mexanik transport vositalariga yo’l beradi",
      "Kesishadigan yo’l bo’ylab harakat qilayotgan transport vositalariga yo’l beradi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i42_2.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’limining yettinchi xatboshisiga asosan: 2.4. \"Yo’l bering!\". Haydovchi kesib o’tilayotgan yo’ldan, 7.13 qo'shimcha-axborot belgisi bo’lganda esa asosiy yo’ldan harakatlanayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 413,
    "biletId": 42,
    "text": "Oq chiziq bilan belgilangan orolchaga kirishga ruxsat etiladimi?",
    "options": [
      "Faqat to’xtash uchun ruxsat etiladi",
      "Orqa bilan harakat qilganda ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i42_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining uchinchi, yigirmanchi va o’ttiz to’rtinchi xatboshlariga asosan: 1.1 — qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo'lning xavfli joylaridagi harakatlanish bo'lagi chegarasini bildiradi. 1.16.2 — transport vositalari oqimi ajraladigan joylardagi yo’naltiruvchi orolchani bildiradi. 1.1 chizig’ini bosib o'tish taqiqlanadi."
  },
  {
    "id": 414,
    "biletId": 42,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Ko’k avtomobil haydovchisi",
      "Qizil avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i42_4.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 415,
    "biletId": 42,
    "text": "Harakatlanish kimga ruxsat etilgan?",
    "options": [
      "Yuk avtomobili va mototsiklga",
      "Barcha transport vositalariga",
      "Tramvay va yengil avtomobilga",
      "Yengil va yuk avtomobiliga, mototsiklga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i42_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi:\nQo’llari yon tomonga uzatilganda yoki tushirilganda:\nchap va o’ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o’tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi.\no’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 416,
    "biletId": 42,
    "text": "Qaysi transport vositasining haydovchisi qayrilib olishni to’g’ri bajarmoqda?",
    "options": [
      "Ko’k avtomobil haydovchisi",
      "Qizil avtomobil haydovchisi",
      "Har ikki haydovchi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i42_6.webp",
    "explanation": "YHQ 9-bobi 59-bandining ikkinchi xatboshisiga asosan: Chorrahadan tashqarida qayrilib olishda, agar qatnov qismining kengligi manyovrni chetki chap holatdan bajarish uchun yetarli bo’lmasa, uni qatnov qismining o’ng chetidan (o’ng yo’l yoqasidan) amalga oshirishga yo’l qo’yiladi. Bu holda haydovchi shu yo’nalishdagi va qarama-qarshi yo’nalishdagi transport vositalariga yo’l berishi shart."
  },
  {
    "id": 417,
    "biletId": 42,
    "text": "Avtomobil haydovchisi uni boshqa transport vositalari quvib o’tayotganda qanday harakat qilishi kerak?",
    "options": [
      "Harakat bo’lagini o’zgartirmay, o’ng burilish ishorasini berishi",
      "Harakat tezligini oshirish yoki boshqa hatti harakatlar bilan quvib o’tishga to’sqinlik qilmasligi",
      "Harakat tezligini kamaytirishi, tovush ishora berishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 84-bandiga asosan: Quvib o’tilayotgan transport vositasining haydovchisiga harakat tezligini oshirish yoki boshqa xatti-harakatlar bilan quvib o'tishga to’sqinlik qilish taqiqlanadi."
  },
  {
    "id": 418,
    "biletId": 42,
    "text": "Qo’l bilan beriladigan ogohlantiruvchi ishora Qoidalarga muvofiq qachon tugallanishi mumkin?",
    "options": [
      "Manyovrni bevosita bajarishdan oldin",
      "Manyovr tugagandan so’ng zudlik bilan",
      "Manyovr bajarayotgan vaqtda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 46-bandining birinchi xatboshisiga asosan: Burilish ko’rsatgichi yoki 401 bilan berilayotgan ishora manyovrni bajarishdan oldinroq berilishi va uni tugallagach, darhol to’xtatilishi kerak (4901 bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin)."
  },
  {
    "id": 419,
    "biletId": 42,
    "text": "Jarohatdan xushsizlanganda birinchi tibbiy yordamni qanday ko’rsatish kerak?",
    "options": [
      "Kiyim-boshni yechish yoki bo’shatish, toza havo kelishi ta’minlash. Nashatir spirti hidlatish. Yuzga sovuq suv sepish. Peshona va gardanga iliq malhamlar qo’yish",
      "Mutloq tinch qo’yish. Boshni tushirish, oyoqlarni ko’tarish, badanni isitish. Qaynoq ichimlik (choy va shu kabilar) berish. Bog’langan jgutni shifokorsiz yechmaslik va bo’shatmaslik"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Jarohat shoki-malakali tibbiy yordam talab qiladigan muhim funksiyalarining jiddiy jabrlanishidir. Shifokor kelguniga qadar birinchi tibbiy yordam tartibida jabrlanuvchiga o'ta avaylovchi sharoitlar yaratib berish lozim, ya’ni uni yotqizish, o’rab qo’yish, og’riq qoldiruvchi dori berish, tomir urishi va nafas olishini nazorat qilish kerak."
  },
  {
    "id": 420,
    "biletId": 42,
    "text": "Ko’rsatilgan belgilardan qaysi biri avtopoyezdni bildirish uchun o’rnatiladi?",
    "options": [
      "Chap belgi",
      "O’ng belgi",
      "Har ikki belgi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i42_10.webp",
    "explanation": "YHQ 29-bobi 176-bandining birinchi xatboshisiga asosan: \"Avtopoezd\" — yuk avtomobillari va g’ildirakli traktor (1,4 tonna va undan yuqori) larda tirkama bo’lganda, shuningdek tutashtirilgan avtobus va trolleybus kabinalari tomining old qismi o'rtasiga bir qator qilib 150 dan 300 millimetrgacha oraliqda ko’ndalang joylashgan uchta zarg’aldoq rangli chiroq yoki ichidan yoritiladigan, tomonlarining har biri 250 millimetr bo'lgan sariq rangli uchburchak shaklidagi belgi."
  },
  {
    "id": 421,
    "biletId": 43,
    "text": "Bu joyda quvib o’tishga ruxsat etilganmi?",
    "options": [
      "Quvib o’tilayotgan transport vositasi 40 km/soatdan kam tezlik bilan harakatlanganda ruxsat etiladi",
      "Taqiqlanadi",
      "Agar quvib o’tish temir yo’l kesishmasigacha tugasa, ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i43_1.webp",
    "explanation": "YHQ 12-bobi 86-bandining to’rtinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: temir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda."
  },
  {
    "id": 422,
    "biletId": 43,
    "text": "Qaysi belgi kesishadigan yo’l bo’ylab harakat qilayotgan transport vositalariga yo’l berish majburiyatini yuklaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i43_2.webp",
    "explanation": "YHQ 1-ilovasi 2-bo’limining yettinchi xatboshisiga asosan: 2.4. \"Yo’l bering!\". Haydovchi kesib o’tilayotgan yo’ldan, 7.13 qo'’shimcha-axborot belgisi bo’lganda esa asosiy yo’ldan harakatlanayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 423,
    "biletId": 43,
    "text": "Transport vositasining haydovchisi oldida \"To’xtash chizig’i\" chizilgan va svetoforning yashil yoritgichi yoniq bo’lgan chorrahaga yaqinlashayotib nima qilishi kerak?",
    "options": [
      "\"To’xtash chizig’i\"da to’xtashi, so’ng esa harakatni qayta tiklashi",
      "To’xtamasdan chorraha orqali harakatni davom ettirishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n to’rtinchi xatboshisiga asosan: 1.12 (to’xtash chizig’i) — 2.5 belgisi yoki svetoforning (tartibga soluvchining) taqiqlovchi ishorasida haydovchi to’xtash kerak bo’lgan joyni ko'rsatadi.\nIzoh: Svetofor ishoralari imtiyoz belgilari va yo’l chiziqlari talablariga 219 kelgan hollarda haydovchilar svetofor ishoralariga amal qilishlari kerak."
  },
  {
    "id": 424,
    "biletId": 43,
    "text": "Qaysi transport vositasi haydovchisi yo’l berishi kerak?",
    "options": [
      "Avtomobil haydovchisi",
      "Mototsikl haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i43_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak."
  },
  {
    "id": 425,
    "biletId": 43,
    "text": "Bunday vaziyatda haydovchi nima qilishi kerak?",
    "options": [
      "Oldindan yaqinni yorituvchi fara chiroqlarini yoqib va uzluksiz tovush ishorasini berib, eng kam tezlik bilan turgan transport vositasini aylanib o’tishi",
      "Qatnov qismidan o’tayotgan bolalarga yo’l berishi",
      "Bu yo’l qismidan o’tishi kerak, chunki bolalar qatnov qismini piyodalar o’tish joyidan kesib o’tmayaptilar"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i43_5.webp",
    "explanation": "YHQ 17-bobi 115-bandiga asosan: \"Bolalar guruhini tashish\" taniqlik belgisi o’rnatilgan transport vositasi to'xtaganda unga yaqinlashayotgan haydovchi harakat tezligini kamaytirishi, zarur bo’lsa, to’xtashi va bolalar guruhini o'tkazib yuborishi kerak."
  },
  {
    "id": 426,
    "biletId": 43,
    "text": "Qaysi transport vositasining haydovchisi aylanma harakatli kesishmaga to’g’ri kiradi?",
    "options": [
      "Ikkala haydovchi",
      "Faqat avtobus haydovchisi",
      "Faqat yengil avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i43_6.webp",
    "explanation": "YHQ 9-bobi 56-bandining birinchi xatboshisiga asosan: Haydovchi, aylanma harakatlanish tashkil qilingan chorrahalarga kirish uchun burilishdan boshqa barcha hollarda, o’ngga, chapga burilish yoki qayrilib olishdan oldin shu yo'nalishda harakatlanishi mo'ljallangan qatnov qismining eng chetki holatini egallashi shart."
  },
  {
    "id": 427,
    "biletId": 43,
    "text": "Avtobus haydovchisiga yo’lovchilarni tushirish uchun to’xtashga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i43_7.webp",
    "explanation": "YHQ 13-bobi 91-bandining to’rtinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: to’xtagan transport vositasi bilan sidirg’a chiziq (qatnov qismining chetini belgilovchi chiziqdan tashqari), ajratuvchi bo'lak yoki qatnov qismining qarama-qarshi cheti orasidagi masofa 3 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 428,
    "biletId": 43,
    "text": "Siz quvib o’tish uchun chiqdingiz va bexosdan ro’paradan kelayotgan avtomobilni ko’rib qoldingiz. Agar Siz quvib o’tishni tugallay olishingizga ishonchingiz bo’lmasa, Siz:",
    "options": [
      "Tovush xabarini berib va faralarni yoqib quvib o’tishni tugallaguncha davom ettirishingiz kerak",
      "Tezlikni asta ko’paytirishingiz va quvib o’tishni tezroq tugallashingiz kerak",
      "Tezlikni kamaytirishingiz va ilgari egallagan qatorga qaytishingiz kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 82-bandiga asosan: Quvib o’tishni boshlashdan oldin haydovchi chapga burilishni bildiruvchi ishorasini yoqib:\no’zi o’tmoqchi bo’lgan harakatlanish bo’lagi quvib o’tish uchun yetarlicha masofada bo’sh ekanligiga, quvib o’tish jarayonida harakatlanishga xavf tug’dirmasligiga va boshqa harakat qatnashchilariga xalaqit bermasligiga;\nshu tasmada orqada harakatlanayotgan transport vositasi quvib o’tishni boshlamaganligiga;\noldinda harakatlanayotgan transport vositasi quvib o’tish, chapga burilish (qayta tizilish) ishorasini bermayotganligiga;\nquvib o’tishni tugallayotganda quvib o’tilayotgan transport vositasiga xalaqit bermasdan ilgari egallagan qatorga qaytib o’ta olishiga ishonch hosil qilishi shart."
  },
  {
    "id": 429,
    "biletId": 43,
    "text": "Manyovr vaqtida haydovchi har doim ogohlantiruvchi ishora berishi kerakmi?",
    "options": [
      "Faqat uning orqasida boshqa transport vositasi harakatlanayotgan bo’lsa",
      "Faqat uning transport vositasi burilishni ko’rsatuvchi chiroqlar bilan jihozlangan bo’lsa",
      "Faqat serqatnov harakatli yo’lda",
      "Faqat u harakatning boshqa ishtirokchilarini chalg’itmagan hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 46-bandining birinchi va ikkinchi xatboshlariga asosan: Burilish ko’rsatgichi yoki 4011 bilan berilayotgan ishora manyovrni bajarishdan oldinroq berilishi va uni tugallagach, darhol to’xtatilishi kerak (qo’l bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin). Ishoralar boshqa yo’l harakati qatnashchilarini chalg’itmasligi kerak."
  },
  {
    "id": 430,
    "biletId": 43,
    "text": "Ishlamayotgan boshqaruv ruli bilan to’xtab turish yoki ta’mirlash joyiga borishga ruxsat etiladimi?",
    "options": [
      "Qattiq ulagichda shatakka olinganda ruxsat etiladi",
      "Harakat xavfsizligini ta’minlovchi tezlikda ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandining uchinchi xatboshisiga asosan, haydovchiga quyidagilar taqiqlanadi: tormoz tizimi, rul boshqaruvi ishlamayotgan, ulagich moslamasi (avtopoezd tarkibida) nosoz bo'lgan, qorong’i vaqtda yoki yetarlicha ko’rinmaydigan sharoitda — old chiroqlar va orqa gabarit chiroqlari bo’lmagan yoki yonmayotgan, yomg’ir, qor yog'ayotgan vaqtda haydovchi tomonidagi oyna tozalagich ishlamayotgan transport vositalarini boshqarish."
  },
  {
    "id": 431,
    "biletId": 44,
    "text": "Aholi punktidan tashqarida yuk avtomobil yukxonasida odamlarni tashishda qanday eng yuqori tezlikda harakatlanishga ruxsat etiladi?",
    "options": [
      "40 km/s",
      "50 km/s",
      "60 km/s",
      "70 km/s",
      "80 km/s"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 80-bandining birinchi xatboshisiga asosan, har qanday yo’llarda: yukxonasida odam tashiyotgan yuk avtomobillariga tezlikni soatiga 60 kilometrdan oshirmasdan."
  },
  {
    "id": 432,
    "biletId": 44,
    "text": "Bu belgiga ko’ra qaysi yuk avtomobili harakatni davom ettirishi mumkin?",
    "options": [
      "8 tonnagacha yuk ortgan avtomobil",
      "8 tonna yuk ko’tarish quvvatiga ega bo’lgan bo’sh avtomobil",
      "Ruxsat etilgan to’la vazni 8 tonnadan ortiq bo’lmagan avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining beshinchi xatboshisiga asosan: 3.4. \"Yuk avtomobillarining harakatlanishi taqiqlangan\". To'la vazni 3,5 tonnadan (agar vazni belgida ko’rsatilmagan bo’lsa) yoki to'la vazni belgida ko’rsatilgandan ortiq bo’lgan yuk avtomobillari va transport vositalari tarkiblarining, shuningdek traktorlar, o’ziyurar moslamalarning harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 433,
    "biletId": 44,
    "text": "Bu yotiq chiziq nimani bildiradi?",
    "options": [
      "Piyodalar o’tish joyini",
      "Velosiped yo’lkasi qatnov qismini kesib o’tadigan joyni",
      "Mol haydaladigan joyni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limidagi 1.15 chizig’i yo’lning velosiped yo’lkasi kesib o’tgan joyini bildiradi."
  },
  {
    "id": 434,
    "biletId": 44,
    "text": "Yuk avtomobil haydovchisiga avtomagistrallarda nima taqiqlangan?",
    "options": [
      "5.15 yoki 6.11 yo’l belgilari bilan belgilangan joyda to’xtash",
      "Orqa bilan harakatlanish",
      "Mexanik transport vositalarini shatakka olish",
      "Barcha sanab o’tilgan harakatlar"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining beshinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: orqaga harakatlanish."
  },
  {
    "id": 435,
    "biletId": 44,
    "text": "Yo’lovchilarni tushirish uchun bu belgi o’rnatilgan tasmada to’xtashga ruxsat etiladimi?",
    "options": [
      "Agar tasma qatnov qismining o’ng chetida joylashgan va u yotiq uzluksiz chizig’i bilan qatnov qismidan ajratilmagan bo’lsa ruxsat etiladi",
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_5.webp",
    "explanation": "YHQ 22-bobi 132-bandining ikkinchi va uchinchi xatboshlariga asosan: Agar 5.9 yo’l belgisi bilan belgilangan tasma qatnov qismining boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan bo’lsa, burilmoqchi bo’layotgan transport vositalari bu tasmaga qayta tizilishlari kerak.\nShuningdek, bunday joylarda yo’nalishli transport vositalarining harakatiga xalaqit bermaslik sharti bilan yo’lga chiqish, qatnov qismining chetki o’ng tomonida yo’lovchilarni chiqarish va tushirish uchun bu bo’lakka o’tishga ruxsat etiladi."
  },
  {
    "id": 436,
    "biletId": 44,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Avtobus haydovchisi",
      "Yuk tashuvchi avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_6.webp",
    "explanation": "YHQ 21-bobi 128-bandiga asosan: Yo’lning 1.13 va 1.14 yo’l belgilari bilan belgilangan qiyaliklarida, qarama-qarshi yo’nalishlarda harakatlanishni qiyinlashtiradigan biron-bir to’siq bo'lsa, nishablikka harakatlanayotgan transport vositasining haydovchisi yo'l berishi kerak."
  },
  {
    "id": 437,
    "biletId": 44,
    "text": "Chorrahani kesib o’tish navbatini ko’rsating:",
    "options": [
      "Ko’k, qizil ayni vaqtda yashil bilan",
      "Qizil, ko’k, yashil",
      "Qizil ayni vaqtda yashil bilan, ko’k"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_7.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak."
  },
  {
    "id": 438,
    "biletId": 44,
    "text": "Qayta tizilishda haydovchi boshqa transport vositalariga yo’l berishi kerakmi?",
    "options": [
      "Kerak, agar transport vositasi qo’shni tasma bo’yicha yo’lakay harakat qilsa",
      "Kerak emas",
      "O’zaro qayta tizilishda barcha hollarda kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 55-bandiga asosan: Haydovchi qayta tizilishda harakatlanish yo’nalishini o’zgartirmasdan harakatlanayotgan yo’lakay transport vositalariga yo’l berishi kerak. Bir yo’nalishda harakatlanayotgan transport vositalari bir vaqtda qayta tizilayotganlarida haydovchi o’ng tomondagi transport vositasiga yo'l berishi kerak."
  },
  {
    "id": 439,
    "biletId": 44,
    "text": "Tyagach haydovchisi nima qilishi kerak?",
    "options": [
      "To’xtab, orqasida to’plangan transport vositalarini o’tkazib yuborishi",
      "O’sha tezlik bilan harakatni davom ettirishi",
      "Qo’li bilan o’zini ro’para tasmadan quvib o’tishlari haqida ishora qilishi kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_9.webp",
    "explanation": "YHQ 12-bobi 87-bandiga asosan: Aholi punktlaridan tashqaridagi yo’llarda sekin harakatlanadigan yoki katta hajmli transport vositasini quvib o’tish qiyin bo'lgan hollarda uning haydovchisi ushbu transport vositasini iloji boricha yo’lning o'ng tomoniga olishi, zarur bo'lganda esa orqasida to'planib qolgan transport vositalarini o’tkazib yuborish uchun to’xtashi kerak."
  },
  {
    "id": 440,
    "biletId": 44,
    "text": "Mazkur taniqlik belgisi nimani bildiradi?",
    "options": [
      "Oldinda qatnovning notekis bo’lgan yo’l qismini",
      "Oldinda shu yo’nalishda harakatlanish uchun uch tasmali yo’l qismini",
      "Mexanik transport vositasida tishli turumlangan (shiplar) shinalar o’rnatilganini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i44_10.webp",
    "explanation": "YHQ 29-bobi 176-bandining ikkinchi xatboshisiga asosan: \"Turumlangan\" (tishli, shipli) — turumlangan shinali mexanik transport vositasining orqasiga tomonlari teng, ichiga qora rangda \"T\" harfi tushirilgan, qizil hoshiyali, oq rangdagi uchburchak shaklidagi belgi. Uchburchakning tomonlari transport vositasining turiga qarab 200 — 300 millimetrgacha, hoshiyaning kengligi uchburchak tomonining 1/10 qismiga teng bo’lishi kerak."
  },
  {
    "id": 441,
    "biletId": 45,
    "text": "Ro’paradan kelayotgan avtomobil haydovchisi qanday yo’l tutishi kerak?",
    "options": [
      "Yo’l yoqasida to’xtashi",
      "Yalt-yalt etuvchi chiroq mayoqchasi yoqilgan avtomobiliga xalaqit bermasdan harakatni davom ettirishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i45_1.webp",
    "explanation": "YHQ 6-bobi 26-bandiga asosan: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi."
  },
  {
    "id": 442,
    "biletId": 45,
    "text": "Avtomobilning qaysi yo’nalishda harakatlanishiga ruxsat etiladi?",
    "options": [
      "Chapga va o’ngga",
      "Faqat to’g’riga",
      "Barcha yo’nalishlarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i45_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining o'n to’rtinchi xatboshisiga asosan: 4.4. \"Engil avtomobillar harakati\". yengil avtomobillar, avtobus, mototsikllar, belgilangan yo’nalishli transport vositalari va ruxsat etilgan to'la vazni 3,5 tonnadan oshmaydigan yuk avtomobillari harakatlanishiga ruxsat etilishini bildiradi. Belgining ta’sir oralig'ida yashovchi va ishlovchi fuqarolarga tegishli, ularga va korxonalarga xizmat ko’rsatuvchi transport vositalariga bu belgi tatbiq etilmaydi. Bunday hollarda transport vositalari belgilangan joyga eng yaqin chorrahadan kirib yoki chiqib ketishlari kerak.\nYHQ 1-ilovasi 7-bo’limining o'n birinchi xatboshisiga asosan: 7.3.3. \"Ta’sir yo’nalishlari\". Chorraha oldida o’rnatilgan belgining ta’sir yo'nalishini yoki bevosita yo'l yaqinida joylashgan manzillarga harakatlanish yo'nalishini ko’rsatadi."
  },
  {
    "id": 443,
    "biletId": 45,
    "text": "Bu yo’l belgisi nimani bildiradi?",
    "options": [
      "Yo’l (marshrut) raqamini ko’rsatadi",
      "Eng yaqin aholi yashaydigan joygacha bo’lgan masofani ko’rsatadi",
      "DANning eng yaqin postigacha bo’lgan masofani ko’rsatadi",
      "\"Kilometr belgisi\" vazifasini bajaradi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i45_3.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining qirq yettinchi xatboshisiga asosan: 5.29.1. \"Yo’l raqami\". 5.29.1 — yo’lga berilgan raqamini bildiradi."
  },
  {
    "id": 444,
    "biletId": 45,
    "text": "Avtomagistralda ajratuvchi mintaqaning uzilishlariga kirishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Faqat orqaga burilish uchun ruxsat etiladi, to’la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillar bundan mustasno",
      "Taqiqlanadi",
      "Belgilangan yo’nalishdagi transport vositalariga ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining to’rtinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: ajratuvchi bo’lakning texnologik uzilish joylariga kirish va qayrilib olish."
  },
  {
    "id": 445,
    "biletId": 45,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Qizil avtomobil, tramvay ayni vaqtda yashil avtomobil bilan",
      "Tramvay, qizil, yashil avtomobillar",
      "Tramvay ayni vaqtda yashil avtomobil, qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i45_5.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning yo’'naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 446,
    "biletId": 45,
    "text": "Qaysi transport vositasining haydovchisi yo’lda tezlashish bo’lagi bo’lganda unga chiqish qoidasini buzdi?",
    "options": [
      "Har ikki haydovchi",
      "Har ikki haydovchi to’g’ri chiqdi",
      "Ko’k avtomobil haydovchisi",
      "Yashil avtomobil haydovchisi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i45_6.webp",
    "explanation": "YHQ 9-bobi 61-bandiga asosan: Sekinlashish bo'lagi bo'lgan yo’llarda burilmoqchi bo'layotgan haydovchi o’z vaqtida ushbu tasmaga qayta tizilishi va tezlikni faqat unda kamaytirishi kerak. Yo’lga chiqish joyida tezlashish bo'lagi bo'lsa, haydovchi unda harakatlanishi va qo’shni tasmada harakatlanayotgan transport vositalariga yo'l berib, transport oqimiga qo’shilishi kerak."
  },
  {
    "id": 447,
    "biletId": 45,
    "text": "Uch tasmali bo’lgan ikki tomonlama harakat tashkil qilingan yo’llarda ro’paradagi harakat uchun mo’ljallangan chetki chap tasmaga o’tishga ruxsat etiladimi?",
    "options": [
      "Quvib o’tish uchun ruxsat etiladi",
      "Barcha hollarda ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 448,
    "biletId": 45,
    "text": "Haydovchi to’xtash oldidan ogohlantiruvchi ishora berishga qachon majbur?",
    "options": [
      "Faqat shu holdaki, agar uning orqasidan boshqa transport vositasi harakat qilsa",
      "Faqat aholi punktlarida",
      "Barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 45-bandining birinchi xatboshisiga asosan: Haydovchi harakatlanishni boshlashdan, qayta tizilishdan, burilish (qayrilib olish)dan va to’xtashdan oldin tegishli yo'nalishni ko'rsatuvchi yorug’lik ishoralarini yoqishi, ular bo'lmaganda yoki ishlamaganda qo’l bilan ishoralar berishi shart."
  },
  {
    "id": 449,
    "biletId": 45,
    "text": "To’xtash qoidasini buzgan hamma haydovchilar qaysi javobda ko’rsatilgan?",
    "options": [
      "Qizil avtomobil va mototsikl haydovchilari",
      "Ko’k avtomobil haydovchisi",
      "Mototsikl haydovchisi",
      "Barcha transport vositalarining haydovchilari"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i45_9.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz birinchi xatboshisiga asosan: 3.27. \"To’xtash taqiqlangan\". Transport vositalarining to’xtashi va to'xtab turishi taqiqlanishini bildiradi. \nYHQ 1-ilovasi 7-bo’limining to'qqizinchi xatboshisiga asosan: 7.2.4 — haydovchilarga ularning 3.27 yo’l belgisi ta’sir doirasida ekanliklari haqida axborot beradi.\nHarakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 450,
    "biletId": 45,
    "text": "Agar transport vositasi ishchi tormozining samaradorligi qoidalar talabiga javob bermasa, u holda siz majbursiz:",
    "options": [
      "Belgilangan safarni davom ettirishga, bunda kunning yorug’ vaqtida yaqinni yorituvchi fara chirog’ini yoqishga",
      "Bundan keyingi harakatni to’xtatishga",
      "Nosozlikni o’sha joyda bartaraf etishga, agar buning iloji bo’lmasa, zarur ehtiyoj choralariga rioya qilgan holda to’xtab turish yoki ta’mirlash joyiga evakuator yoki shatakka olish orqali olib borishga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandiga asosan: Harakatlanish vaqtida ushbu Qoidalarga 3-ilovada ko’rsatilgan transport vositalaridan foydalanishni taqiqlovchi shartlar yuzaga kelganda, haydovchi ularni bartaraf etishi, agar buning iloji bo’lmasa, zarur bo’lgan ehtiyot choralarini ko’rgan holda ta’mirlash yoki to’xtab turish joyiga evakuator yoki shatakka olish orqali transport vositasini olib borish choralarini ko’rishi mumkin."
  },
  {
    "id": 451,
    "biletId": 46,
    "text": "Haydovchi yo’l-transport hodisasida shikastlangan transport vositasini shatakka olish uchun yuk avtomobilini Ichki ishlar xodimi ixtiyoriga qanday holda berishi kerak?",
    "options": [
      "Faqat shu holdaki, agar shatakka olish yo’l-yo’lakay yo’nalishda amalga oshirilsa",
      "Har qanday holda, fuqarolarga tegishli transport vositalaridan tashqari",
      "Haydovchining istagi bo’yicha"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 11-bandining 3 punktiga asosan, quyidagi hollarda transport vositasini foydalanish uchun taqdim etishi: Ichki ishlar xodimlariga qonunda belgilangan xollarda kechiktirib bo’lmaydigan xizmat vazifalarini bajarish uchun, shuningdek yo’l-transport hodisasi tufayli shikastlangan yoki nosoz transport vositalarini olib ketish (shatakka olish) uchun (faqat yuk avtomobilidan)."
  },
  {
    "id": 452,
    "biletId": 46,
    "text": "Yo’naltirgichlar bilan ko’rsatilgan qaysi yo’nalishlarda harakat ruxsat etilgan?",
    "options": [
      "\"A\"",
      "\"Б\"",
      "\"A\" va \"Б\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i46_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining yigirma beshinchi xatboshisiga asosan: 5.11.1. \"Qayrilib olish joyi\". Chapga burilish taqiqlanadi."
  },
  {
    "id": 453,
    "biletId": 46,
    "text": "Bu yo’l chizig’i nimani bildiradi?",
    "options": [
      "Faqat avtobus harakatlanishi uchun mo’ljallangan bo’lakni bildiradi",
      "Faqat belgilangan yo’nalishdagi transport vositalari harakatlanishi uchun mo’ljallangan bo’lakni bildiradi",
      "Avtobus va trolleybuslar harakatlanishi uchun mo’ljallangan bo’lakni bildiradi",
      "Avtobus va marshrutli taksi (alohida kichik avtobuslar)larning harakatlanishi uchun mo’ljallangan bo’lakni bildiradi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i46_3.webp",
    "explanation": "YHQ 2-ilovasining 1-bo’limidagi 1.23 chizig’i faqat yo’nalishli transport vositalari uchun mo'ljallangan bo'lagini bildiradi."
  },
  {
    "id": 454,
    "biletId": 46,
    "text": "Chorrahani ikkinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Sariq avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i46_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 455,
    "biletId": 46,
    "text": "Mototsiklning haydovchisi qanday holda chapga to’g’ri burildi?",
    "options": [
      "Chorrahaga chiqdi, yuk avtomobilini o’tkazib yubordi, burilishni tugalladi",
      "Chorrahaga chiqdi va tartibga soluvchining ruxsat etuvchi ishorasini kutib, burilishni tugalladi",
      "Chorrahaga chiqmasdan to’xtab, tartibga soluvchining chapga burilishga ruxsat etuvchi ishorasini kutib, burilishni tugalladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i46_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining qo’llari yon tomonga uzatilganda yoki tushirilganda: chap va o'ng yon tomonidan tramvayga bo’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o'tishga ruxsat beriladi."
  },
  {
    "id": 456,
    "biletId": 46,
    "text": "Ko’k avtomobilga qaysi yo’nalishda harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat orqa yo’nalishda",
      "To’g’riga, chap va orqa yo’nalishda",
      "Chap va orqa yo’nalishda",
      "Barcha yo’nalishlarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i46_6.webp",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 457,
    "biletId": 46,
    "text": "Qayta tizilish oldidan ogohlantiruvchi ishora qachon berilishi kerak?",
    "options": [
      "Bevosita manyovrni bajarishni boshlash oldidan",
      "Manyovrni bajarishni boshlagandan so’ng zudlik bilan",
      "Manyovrni bajarishni boshlamasidan avvalroq"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 46-bandining birinchi xatboshisiga asosan: Burilish ko’rsatgichi yoki qo’l bilan berilayotgan ishora manyovrni bajarishdan oldinroq berilishi va uni tugallagach, darhol to’xtatilishi kerak (qo'l bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin)."
  },
  {
    "id": 458,
    "biletId": 46,
    "text": "Burilish vaqtida qatnov qismining kesishmasidan chiqishda transport vositasi qayerda bo’lmasligi kerak?",
    "options": [
      "Chap tasmada, agar o’ng tasma bo’sh bo’lsa",
      "Qarama-qarshi harakat tomonida",
      "Agar bir yo’nalishda harakatlanish uchun uchtadan kam bo’lmagan tasma bo’lganda, chap tasmada",
      "Ruxsat etilgan to’la vazni 3,5 tonnadan ortiq bo’lgan faqat yuk avtomobillariga bir yo’nalishda harakatlanishi uchun ikkita tasma bo’lsa, chap tasmada"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 57-bandining birinchi xatboshisiga asosan: Burilishni shunday amalga oshirish kerakki, bunda qatnov qismlarining kesishmasidan chiqayotgan transport vositasi qarama-qarshi yo'nalishdagi harakat tomoniga o’tib ketmasligi kerak."
  },
  {
    "id": 459,
    "biletId": 46,
    "text": "Yo’lning chapga burilishiga yaqinlashganingizda, u o’ylaganingizdan ko’ra ancha keskinroq burilish bo’lib chiqsa, Siz:",
    "options": [
      "Tezlikni o’zgartirmay yo’l qatnov qismining chap yoqasidan harakatni davom ettirishingiz kerak",
      "Harakat tezligini kamaytirishingiz kerak",
      "Burilishdan tezroq o’tish uchun tezlikni oshirishingiz kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Burilishda o’tayotgan vaqtda haydovchi shuni inobatga olishi lozimki, avtomobilning harakat tezligi kattalashganida markazdan qochirma kuch tezlik kvadratiga mos ravishda ortadi va transport vositasini ag’darilishiga olib kelishi mumkin."
  },
  {
    "id": 460,
    "biletId": 46,
    "text": "Furgon yukxonasida odamlarni tashishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi",
      "Agar ularning tuzilishi odamlarni tashishga moslashtirilgan bo’lsa, ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 159-bandining ikkinchi xatboshisiga asosan, odamlarni tashish quyidagi hollarda taqiqlanadi: transport vositasining kabinasidan tashqarida (odam tashish uchun mo’ljallangan bortli yuk yoki furgon-yuk xonali avtomobillar bundan mustasno)."
  },
  {
    "id": 461,
    "biletId": 47,
    "text": "Harakatni boshlashdan avval shaharlararo avtobus haydovchilari nima qilishlari kerak?",
    "options": [
      "Yo’lovchilarga halokat bo'lganda chiqish joylaridan foydalanish haqida tushuntirish",
      "Yo’lovchilarga chiqish, undan tushish va unga joylashish tartibi haqida tushuntirish",
      "Yo’lovchilarga harakatlanish vaqtida salon ichida yurishlari mumkun emasligi haqida tushuntirish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 155-bandiga asosan: Harakatni boshlashdan oldin haydovchi yo’lovchilarga avtomobilga chiqish, undan tushish va unga joylashish tartibi haqida tushuncha berishi kerak. Haydovchi harakatni boshlashdan oldin yo’lovchilarni xavfsiz tashish sharoiti ta’minlanganligiga ishonch hosil qilishi kerak.\nIzoh: Shaharlararo avtobuslarda tor yo’laklar, eshiklarning kichikligi va boshqalar bois yo’lovchilarning evakuatsiyasi qiyinlashishi mumkin. Bunday avtobuslarda eshiklarni ochish imkoni bo'lmasa, yo’lovchilarning avariya holatlarida evakuatsiya moslamalari mavjud bo’ladi (tomdagi lyuk, olinadigan oynalar va hokazo). Shaharlararo avtobus haydovchisi harakat boshlanishidan avval yo’lovchilarga zarurat tug'ilganda halokatli chiqishlardan foydalanish haqida tushuntirib berishlari lozim."
  },
  {
    "id": 462,
    "biletId": 47,
    "text": "Chorrahada harakatlanishning majburiy yo’nalishini qaysi belgi ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i47_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining uchinchi va sakkizinchi xatboshlariga asosan: 4.1.3. \"Harakatlanish chapga\". 4.1.3 yo'l belgisi qatnov qismining qaysi kesishmasi oldiga o’rnatilsa, shu kesishmaga ta’sir etadi."
  },
  {
    "id": 463,
    "biletId": 47,
    "text": "Ushbu tik chizig’i nimani bildiradi?",
    "options": [
      "Yo’llar ostin-ustun o’tadigan chorrahalarni",
      "Harakatlanish tezligi 40 km/soatgacha cheklangan qismini",
      "Yo’l inshootlarining harakatdagi transport vositalariga xavf tug’diradigan tik elementlarini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i47_3.webp",
    "explanation": "YHQ 2-ilovasi 2-bo’limining ikkinchi xatboshisiga asosan: 2.1 — harakatlanayotgan transport vositalariga xavf tug’diradigan yo’l inshootlarining tik elementlari (ko'priklar, yo'l o’tkazgich va estakadalar, ustunlar va h. k.)ni bildiradi."
  },
  {
    "id": 464,
    "biletId": 47,
    "text": "Transport vositalari haydovchilari avtobus yoki trolleybusga yo’l berishlari kerak:",
    "options": [
      "Agar u harakatni to’xtash joyidan boshlasa",
      "Agar u \"tig’iz\" soatda marshrut bo’yicha harakat qilsa",
      "Aholi punktlarida, agar u belgilangan to’xtash joyidan (bekatlardan) harakatni boshlasa"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 22-bobi 133-bandiga asosan: Haydovchilar aholi punktlarida bekatdan harakatlanishni boshlayotgan avtobus va trolleybuslarga yo’l berishlari kerak. o’z navbatida avtobus va trolleybus haydovchilari o’zlariga yo’l berilganligiga ishonch hosil qilganliklaridan keyingina harakatlanishni boshlashlari mumkin."
  },
  {
    "id": 465,
    "biletId": 47,
    "text": "Harakatlanishga ruxsat etilgan barcha transport vositalari qaysi javobda to’g’ri ko’rsatilgan?",
    "options": [
      "Avtomobillar va mototsikl",
      "Barcha transport vositalari",
      "Avtomobillar va tramvay"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i47_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining o'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va опд yonidan barcha transport vositalarining harakatlanishi taqiqlanadi."
  },
  {
    "id": 466,
    "biletId": 47,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Avtomobil haydovchisi",
      "Tramvay haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i47_6.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart.\nBu qoidaga tramvay haydovchilari ham o'zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi."
  },
  {
    "id": 467,
    "biletId": 47,
    "text": "Ko’k avtomobil haydovchisiga quvib o’tish ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Ruxsat etiladi, agar qizil avtomobil 40 km/soatdan kam tezlik bilan harakatlanayotgan bo’lsa"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i47_7.webp",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 468,
    "biletId": 47,
    "text": "Quyidagi qaysi suratda haydovchi avtomobilni qoidaga xilof ravishda to’xtab turishga qo’ygan?",
    "options": [
      "Faqat chapdagi",
      "Chap va o’rtadagi",
      "Barchasida"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i47_8.webp",
    "explanation": "YHQ 13-bobi 88-bandining birinchi xatboshisiga asosan: Transport vositalariga yo'lning o'ng tomoni yoqasida, u bo’lmaganda esa qatnov qismining chetida va ushbu Qoidalarning 89-bandida ko'rsatilgan hollarda trotuarda to’xtash va to'xtab turishga ruxsat etiladi."
  },
  {
    "id": 469,
    "biletId": 47,
    "text": "Sirpanchiq yo’lda yurgizgich bilan tormozlashni qo’llash orqa uzatmali avtomobil uchun:",
    "options": [
      "Avtomobil turg’unligini oshiradi",
      "Avtomobil turg’unligini kamaytiradi",
      "Avtomobil turg’unligiga hech qanday ta’sir ko’rsatmaydi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Sirpanchiq yo’lda to’xtatish tepkisini uzuq-uzuq bosib, uzatma va ilashish mexanizmini ajratmagan, dvigatel bilan tormozlanishni ishlatgan hamda g’ildiraklarning blokirovkasi (sirg’anish)ga yo’l qo’ymagan holda to’xtatish lozim."
  },
  {
    "id": 470,
    "biletId": 47,
    "text": "Davlat YHX xizmati ruxsatisiz transport vositasining yuk bilan yoki yuksiz harakatlanishiga qanday yuqori maksimal kenglikda yo’l qo’yiladi?",
    "options": [
      "2,0 m",
      "2,55 m",
      "3,8 m",
      "4,0 m",
      "5,0 m"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 164-Bandga asosan: Katta hajmli va og’ir vaznli hamda xavfli yuklarni tashishda gabarit o’lchamlari yukli yoki yuksiz holda eni bo’yicha 2,55 (refrijeratorlar va izotermik kuzovlar uchun — 2,6) metrdan va balandligi yo’l sathidan 4 metrdan, uzunligi yakka avtotransport vositasi uchun — 12 metrdan, yarim tirkamali va tirkamali avtopoyezd uchun — 20 metrdan ortiq bo’lgan yoki yuki transport vositasining oldi va orqa nuqtasidan 2 metrdan ortiq chiqib turgan transport vositalarining harakatlanishi DYHXX bilan kelishilishi shart."
  },
  {
    "id": 471,
    "biletId": 48,
    "text": "Ko’k avtomobil chorrahani kesib o’tadi:",
    "options": [
      "Birinchi bo’lib ayni bir vaqtda qizil bilan",
      "Ikkinchi bo’lib ayni vaqtda qizil bilan",
      "Uchinchi bo’lib ayni vaqtda qizil bilan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_1.webp",
    "explanation": "YHQ 6-bobi 25-bandining birinchi xatboshisiga asosan: Ko’k yoki ko'k va qizil rangli yalt-yalt etuvchi chiroq-mayoqchasi yoqilgan transport vositalarining haydovchilari kechiktirib bo’lmaydigan xizmat vazifalarini bajarayotib, yo’l harakati xavfsizligini ta’minlash sharti bilan ushbu Qoidalarning 7 bob (38-bandidan tashqari), 9-16, 19-20 boblari, 1 va 2-ilovalari talablaridan chetga chiqishlari mumkin. YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo'llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 472,
    "biletId": 48,
    "text": "Qaysi belgi to’xtamasdan o’tishni taqiqlaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o'n to’qqizinchi xatboshisiga asosan: 3.17.1. \"Bojxona\". Bojxona (tekshiruv maskani) oldida to’xtamasdan o’tish taqiqlanishini bildiradi."
  },
  {
    "id": 473,
    "biletId": 48,
    "text": "Ushbu tik chizig’i nimani bildiradi?",
    "options": [
      "Yo’lning xavfli joylaridagi harakatlanish bo’lagi yuzasini bildiradi",
      "Yo’lning boshqa qismlarida yo’l chetidagi to’siqlarning yon chegarasini belgilaydi",
      "Xavfli yo’l qismlarida bordyurlarni belgilaydi",
      "Yo’naltiruvchi ustunchalar, beton yoki temir-beton ustunchalar, to’siq ustunchalari va shunga o’xshashlarni belgilaydi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_3.webp",
    "explanation": "YHQ 2-ilovasi 2-bo’limining yettinchi xatboshisiga asosan: 2.6 — boshqa joylardagi to’siqlarning yon yuzalarini bildiradi."
  },
  {
    "id": 474,
    "biletId": 48,
    "text": "Haydovchi oq hassa bilan ishora berayotgan ko'zi ojiz piyodalarni o'tkazib yuborishi kerakmi?",
    "options": [
      "Barcha hollarda o’tkazib yuborishi kerak, shu jumladan, piyodalar o’tish joylardan tashqarida ham",
      "Tartibga solinadigan piyodalar o’tish joyida o’tkazib yuborishi kerak",
      "Tartibga solinmagan piyodalar o’tish joyida o’tkazib yuborishi kerak",
      "Har qanday piyodalar o’tish joyida o’tkazib yuborishi kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 17-bobi 113-bandiga asosan: Barcha hollarda, shu jumladan, piyodalar o’tish joylaridan tashqarida ham haydovchi oq hassa bilan ishora berayotgan ko’zi ojiz piyoda(lar)ni o'tkazib yuborishi kerak."
  },
  {
    "id": 475,
    "biletId": 48,
    "text": "Qaysi rasmda haydovchi to’g’ri burilmoqda?",
    "options": [
      "Chapdagi rasmda",
      "O’ngdagi rasmda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining qo’llari yon tomonga uzatilganda yoki tushirilganda: chap va o’ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o'ngga harakatlanishga, piyodalarga qatnov qismini kesib o'tishga ruxsat beriladi."
  },
  {
    "id": 476,
    "biletId": 48,
    "text": "Qaysi avtomobil to’xtab turishga to’g’ri qo’yilgan?",
    "options": [
      "Yengil avtomobil",
      "Har ikkisi noto’g’ri qo’yilgan",
      "Har ikkisi to’g’ri qo’yilgan",
      "Yuk avtomobili"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_6.webp",
    "explanation": "YHQ 13-bobi 88-bandining uchinchi xatboshisiga asosan: Ruxsat etilgan to’la vazni 3,5 tonnadan ko’p bo’lgan yuk avtomobillari bir tomonlama harakatli yo'llarning chap tomonida faqat yuk ortish va tushirish uchun to'xtashlari mumkin.\nYHQ 13-bobi 91-bandining beshinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda."
  },
  {
    "id": 477,
    "biletId": 48,
    "text": "Agar qatnov qismining kengligi chetki chap tasmadan qayrilib olish uchun yetarli bo’lmasa, qoidalar qayrilib olishni qatnov qismining o’ng chekkasi yoki yo’lning o’ng yoqasidan amalga oshirishga yo’l qo’yadimi?",
    "options": [
      "Qatnov qismining faqat o’ng chekkasidan yo’l qo’yadi. Yo’lning o’ng yoqasidan yo’l qo’yilmaydi",
      "Yo’l qo’yiladi. Bunda qayrilib olayotgan haydovchi yo’lakay va qarama-qarshi kelayotgan transport vositalarini o’tkazib yuborishi kerak",
      "Yo’l qo’yilmaydi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 59-bandining ikkinchi xatboshisiga asosan: Chorrahadan tashqarida qayrilib olishda, agar qatnov qismining kengligi manyovrni chetki chap holatdan bajarish uchun yetarli bo’lmasa, uni qatnov qismining o’ng chetidan (o’ng yo’l yoqasidan) amalga oshirishga yo’l qo’yiladi. Bu holda haydovchi shu yo’nalishdagi va qarama-qarshi yo’nalishdagi transport vositalariga yo’l berishi shart."
  },
  {
    "id": 478,
    "biletId": 48,
    "text": "Aholi punktlarida relssiz transport vositalariga, agar bir yo’nalishda uch va undan ortiq harakatlanish tasmasi bo’lganda qaysi tasmadan harakatlanishga ruxsat etiladi? Yuk avtomobillari hisobga kirmaydi",
    "options": [
      "Har qanday tasma bo’yicha",
      "Iloji boricha qatnov qismining o’ng chekkasiga yaqin tasma bo’yicha",
      "Chapki chekkadan tashqari har qanday tasma bo’yicha. Unga faqat boshqa tasmalarda harakat serqatnov bo’lganda, shuningdek, chapga burilish, orqaga qayrilish va bir tomonlama harakat tashkil qilingan yo’lda to'xtash uchun o’tishga ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 67-bandining uchinchi xatboshisiga asosan: Bir yo’nalishdagi uch va undan ortiq tasmali har qanday yo’lda chetki chap qatorni harakat serqatnovligi sababli boshqa tasmalar band bo’lgan hollarda, shuningdek, quvib o’tish, chapga burilish yoki qayrilib olishga, yuk avtomobillariga faqat chapga burilish yoki qayrilib olish uchun chetki chap qatorni egallashga ruxsat etiladi."
  },
  {
    "id": 479,
    "biletId": 48,
    "text": "Svetoforning bir vaqtda yoqilgan qizil va sariq ishoralari nimani bildiradi?",
    "options": [
      "Harakatni boshlash mumkin",
      "Harakatni taqiqlaydi va tezda yashil ishora yoqilishi haqida ogohlantiradi",
      "Chorrahaga maxsus ovoz yoki miltillovchi chiroq bilan ishora berayotgan transport vositasi yaqinlashib kelayotganligini"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_9.webp",
    "explanation": "YHQ 7-bobi 31-bandining yettinchi xatboshisiga asosan, svetoforning doirali ishoralari quyidagi ma’noni bildiradi: qizil va sariq ishoralarning bir vaqtda yonishi harakatlanishni taqiqlaydi va ko'p o’tmay yashil ishora yonishi haqida axborot beradi."
  },
  {
    "id": 480,
    "biletId": 48,
    "text": "Avtomobilga o’rnatilgan bu taniqlik belgi nimani bildiradi?",
    "options": [
      "Avtomobil shifokor haydovchiga tegishli ekanini",
      "Avtomobil haydovchi nogironga tegishli ekanini",
      "Avtomobil uyda tibbiy yordam ko’rsatish uchun mo’ljallanganligini"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i48_10.webp",
    "explanation": "YHQ 26-bobi 176-bandining o'n uchinchi xatboshisiga asosan: \"Shifokor\" — shifokor-haydovchi boshqarayotgan transport vositasining old va orqa tomoniga o’rnatiladigan, tomonlari 140 millimetr bo'lgan, ko'k rangli, to’rtburchak ichida diametri 90 millimetrli oq doiraga qalinligi 25 millimetrli qizil xoch tasviri tushirilgan belgi."
  },
  {
    "id": 481,
    "biletId": 49,
    "text": "Bu yerda avtomobil to’xtashiga ruxsat berilganmi?",
    "options": [
      "Taqiqlangan, chunki uzuq-uzuq yotiq chiziq bilan to’xtab turgan va avtomobil orasidagi masofa 3 metrdan kam",
      "Oyning juft kunlarida taqiqlangan",
      "Ruxsat berilgan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_1.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o’ttiz ikkinchi xatboshisiga asosan: 3.28. \"To’xtab turish taqiqlangan\". Transport vositalarining to'xtab turishi taqiqlanishini bildiradi.\nYHQ 1-bobi 6-bandining yigirma yettinchi xatboshisiga asosan: To’xtash — transport vositasi harakatini 10 daqiqagacha bo’lgan muddatga to’xtatish (harakatsiz holatga keltirish)."
  },
  {
    "id": 482,
    "biletId": 49,
    "text": "Bu belgi qaysi transport vositalariga tegishli emas?",
    "options": [
      "Traktorlar va o’zi yurar avtomobillarga",
      "Avtobuslar va mikroavtobuslarga",
      "Belgi ta’sirida joylashgan korxonalarga xizmat etayotgan transport vositasiga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining uchinchi va o’ttiz sakkizinchi xatboshlariga asosan: 3.2. \"Harakatlanish taqiqlangan\". Barcha transport vositalarining harakatlanishi taqiqlanishini bildiradi. 3.2 belgisi belgilangan zonada joylashgan korxonalarga xizmat ko’rsatuvchi transport vositalariga, shuningdek, belgilangan zonada yashaydigan yoki ishlaydigan fuqarolarga xizmat qiluvchi yoki ularga tegishli bo'lgan transport vositalariga ta’sir qilmaydi."
  },
  {
    "id": 483,
    "biletId": 49,
    "text": "Qaysi transport vositalari yo’lovchilarni tushirish uchun noto’g’ri to’xtagan?",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Mototsikl",
      "Har ikki avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo'llaniladi hamda yo’lning qatnov qismi chetiga yoki yo'l chetidagi to’siq ustidan chiziladi.\nYHQ 13-bobi 91-bandiga asosan, Quyidagilarda to’xtash taqiqlanadi: bekat maydonchalarida, yo’nalishli transport vositalari to’xtash joylarida, jumladan, 1.17 chizig’i bilan belgilangan, ular bo’lmaganda esa yo’nalishli transport vositalari to’xtash joyi belgilari va bekatdan harakatlanish yo’nalishi bo’ylab (etmasdan va o’tib ketib) 15 metrdan kam masofada (yo’nalishli transport vositalari harakatiga xalaqit bermasa yo’lovchilarni chiqarish yoki tushirish uchun to’xtash bundan mustasno)."
  },
  {
    "id": 484,
    "biletId": 49,
    "text": "Bu yo’l belgisi nimani bildiradi?",
    "options": [
      "Shlagbaum bilan jihozlanmangan bir izli temir yo’l kesishmasini",
      "Shlagbaum bilan jihozlangan bir izli temir yo’l kesishmasini",
      "Shlagbaum bilan jihozlanmagan ikki va undan ko’p izli temir yo’l kesishmasini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_4.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limining oltinchi va yettinchi xatboshlariga asosan: 1.3.2. \"Ko’p izli temir yo'l\". 1.3.2. — ikki va undan ortiq izli temir yo'l belgisi shlagbaum bilan jihozlanmagan temir yo'l kesishmasi oldida o’rnatiladi."
  },
  {
    "id": 485,
    "biletId": 49,
    "text": "Harakatlanish taqiqlangan:",
    "options": [
      "Ko’k avtomobilga - chapga",
      "Ko’k avtomobilga - to’g’riga, qizil avtomobilga - to’g’riga va o’ngga",
      "Qizil avtomobilga to’g’riga va o’ngga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi: Qo’llari yon tomonga uzatilganda yoki tushirilganda: chap va o’ng yon tomonidan tramvayga to’g’riga, rel’ssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o’tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi. o’ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi. Qo’lini yuqoriga ko’targanda: ushbu Qoidalarning 42-bandida ko’rsatilganidan boshqa hollarda transport vositalari va piyodalarning barcha yo’nalishlarda harakatlanishi taqiqlanadi;\ntartibga soluvchi haydovchi va piyodalarga tushunarli bo’lgan boshqa ishoralarni ham berishi mumkin. Ishoralar yaxshi ko’rinishi uchun tartibga soluvchi jezl yoki yorug’lik qaytaradigan qizil rangli moslamalarni qo’llashi mumkin. Shuningdek, tartibga soluvchi o’z faoliyatini maxsus moslama (tumba) ustida turib olib borishi mumkin."
  },
  {
    "id": 486,
    "biletId": 49,
    "text": "Sekinlashish bo’lagi bo’lgan yo’lda qaysi transport vositasi undan chiqish qoidasini buzdi?",
    "options": [
      "Har ikki transport vositasi",
      "Sariq avtomobil",
      "Har ikki transport vositasi to’g’ri burilyapti"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_6.webp",
    "explanation": "YHQ 9-bobi 57-bandining ikkinchi xatboshisiga asosan: O’ngga burilayotgan transport vositasi iloji boricha qatnov qismining o'ng chetiga yaqinroqda harakatlanishi kerak.\nYHQ 9-bobi 61-bandining birinchi xatboshisiga asosan: Sekinlashish bo’lagi bor bo’lgan yo’lda burilmoqchi bo’lgan haydovchi o’z vaqtida ushbu tasmaga qayta tizilishi va tezlikni faqat unda kamaytirishi kerak."
  },
  {
    "id": 487,
    "biletId": 49,
    "text": "Ko’rsatilgan belgilardan qaysi biri avtomagistrallarga o’rnatiladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i49_7.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining qirq yettinchi xatboshisiga asosan: 5.29.1. \"Yo’l raqami\". 5.29.1 — yo’lga berilgan raqamni bildiradi."
  },
  {
    "id": 488,
    "biletId": 49,
    "text": "Haydovchining o’zi aniqlay oladigan harakatlanish uchun to’sqinlik yoki xavf tug’ilganda qanday choralar ko’rishi kerak?",
    "options": [
      "Xavfsizlik choralariga rioya qilgan holda tezlikni kamaytirishi va xavfli yo’l qismidan o’tishi",
      "Tezlikni transport vositasi to’xtagunicha kamaytirishi yoki to’siqni aylanib o’tishning boshqa harakat qatnashchilari uchun xavfsiz choralarni ko’rishi",
      "Sodir bo’lgan hodisa haqida Ichki ishlarga xabar berishi",
      "Davlat YHX xizmatining eng yaqin mahkamasiga yoki ichki ishlar idorasiga kelishi va paydo bo’lgan to’sqinliklar yoki xavf-xatar to’g’risida xabar berishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 77-bandining uchinchi xatboshisiga asosan: Harakatlanish vaqtida haydovchi aniqlay olishi imkoniyatidagi xavf yuzaga kelsa, u transport vositasining tezligini u to’la to'xtashni ta’minlaydigan darajada kamaytirishi yoki to’siqni boshqa harakat qatnashchilari uchun xavf tug’dirmagan holda aylanib o’tish choralarini ko’rishi kerak."
  },
  {
    "id": 489,
    "biletId": 49,
    "text": "Jabrlanuvchining yurak faoliyati yoki nafas olishi to’xtaganda, unga qanday ketma-ketlikda birinchi yordam ko’rsatish zarur?",
    "options": [
      "Yurakni massaj qilish, nafas yo’llarini bo’shatish, sun’iy nafas oldirish",
      "Sun’iy nafas oldirish, yurakni ustidan massaj qilish, nafas yo’llarini bo’shatish",
      "Nafas yo’llarini bo’shatish, sun’iy nafas oldirish va yurakni ustidan massaj qilish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "O’pkaning sun’iy ventilyasiyasi samarali bo'lishi uchun nafas olish yo’llariga havoning erkin o’tishini ta’minlash zarur. Og’iz bo’shlig’i shilliq qon, qusuq va boshqa jismlardan xoli ekanligiga ishonch hosil qilish kerak. To’qimalarga kislorod kelishi va qon aylanishini ta’minlash uchun орКада kislorod kelishini kuchaytirish bilan birga yurak urish faoliyatini qayta tiklashga darhol kirishish lozim."
  },
  {
    "id": 490,
    "biletId": 49,
    "text": "Sanab o’tilgan shartlardan qay birida avtomobillar va avtopoyezdlardan foydalanish taqiqlanadi?",
    "options": [
      "Gidravlik tormoz tizimining zichligi buzilganda",
      "Tormoz tizimining samaradorligi qoida talablariga javob beradi",
      "To’xtab turish tormoz tizimi harakatsiz holatda to’la vazndagi transport vositalarini 16 foizidan kam bo’lmagan qiyalikda ushlab tura olganda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 1-bo'limining 1.3-bandiga asosan: 1.3. Gidravlik tormoz yuritmasining zichligi (germetikligi) buzilgan bo’lsa."
  },
  {
    "id": 491,
    "biletId": 50,
    "text": "Qaysi belgi agar yuk avtomobilining tirkamasi bilan birga ruxsat etilgan to’liq vazni 7 tonnaga teng bo’lsa, tirkamali avtomobillarning harakatlanishini taqiqlaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_1.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining to’qqizinchi xatboshisiga asosan: 3.7. \"Tirkama bilan harakatlanish taqiqlanadi\". Yuk tashuvchi transport vositalari, traktorlarning barcha turdagi tirkamalar bilan harakatlanishi, shuningdek mexanik transport vositalarini har qanday usulda shatakka olish taqiqlanishini bildiradi."
  },
  {
    "id": 492,
    "biletId": 50,
    "text": "Belgilardan qay biri ajratuvchi mintaqasi bo’lgan yo’lning harakat uchun yopiq qatnov qismini aylanib o’tish yo’nalishini ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo'limining ellik ikkinchi xatboshisiga asosan: 5.34.2. \"Boshqa qatnov qismiga qayta tizilishning boshlang’ich ko’rsatkichi\". Ajratuvchi bo’lagi bo'lgan yo'lning harakatlanish uchun yopiq hududini aylanib o’tish yoki o'ng tomondagi qatnov qismiga qaytish uchun harakatlanish yo’nalishini bildiradi."
  },
  {
    "id": 493,
    "biletId": 50,
    "text": "Yo’l chizig’i bilan ajratilgan bekat maydonchasidan harakatlanish uchun foydalanishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "To’xtash joyida tramvay bo’lmaganda ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining uchinchi xatboshisiga asosan: 1.1 — qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo'lning xavfli joylaridagi harakatlanish bo'lagi chegarasini bildiradi;\nyo'lning kirish taqiqlangan qismi chegarasini belgilaydi.\nYHQ 13-bobi 91-bandining to'qqizinchi xatboshisiga asosan: bekat maydonchalarida, yo’nalishli transport vositalari to’xtash joylarida, jumladan, 1.17 chizig'i bilan belgilangan, ular bo’lmaganda esa yo’nalishli transport vositalari to’xtash joyi belgilari va bekatdan harakatlanish yo'nalishi bo’ylab (yetmasdan va o’tib ketib) 15 metrdan kam masofada to’xtash taqiqlanadi."
  },
  {
    "id": 494,
    "biletId": 50,
    "text": "Chorrahani transport vositalari quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Hamma bir vaqtda",
      "Ko’k, qizil, yashil",
      "Ko’k ayni vaqtda yashil bilan, qizil",
      "Qizil, yashil bilan, ko’k"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 495,
    "biletId": 50,
    "text": "Harakatlanish ruxsat etilgan:",
    "options": [
      "Qizil avtomobilga",
      "Mototsiklga",
      "Tramvayga va qizil avtomobilga",
      "Tramvayga",
      "Ko’k avtomobilga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining o'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi."
  },
  {
    "id": 496,
    "biletId": 50,
    "text": "Mazkur vaziyatda qizil avtomobilga quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Quvib o’tilayotgan transport vositasining tezligi 40 km/soatdan kam bo'lganda ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_6.webp",
    "explanation": "YHQ 12-bobi 86-bandining ikkinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: tartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;"
  },
  {
    "id": 497,
    "biletId": 50,
    "text": "Haydovchi aholi punktidan tashqarida harakat qoidalarini buzmoqdami?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i50_7.webp",
    "explanation": "YHQ 10-bobi 67-bandining birinchi xatboshisiga asosan: Aholi punktlaridan tashqaridagi yo'llarda hamda aholi punktlarida ayrim turdagi transport vositalari uchun ushbu Qoidalarda belgilangandan yuqori tezlikda harakatlanish ruxsat etilgan yo'l qismlarida haydovchilar transport vositalarini mumkin qadar qatnov qismining o'ng chetiga yaqinroq olib harakatlanishlari kerak. O’ng tasmalar bo’sh bo’lganda chap tasmalarni egallash taqiqlanadi."
  },
  {
    "id": 498,
    "biletId": 50,
    "text": "Transport vositalarining temir yo’l kesishmasiga qancha masofadan yaqinroqda to’xtab turishlari taqiqlanadi?",
    "options": [
      "300 m",
      "150 m",
      "100 m",
      "50 m",
      "25 m"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 92-bandining uchinchi xatboshisiga asosan: to'xtab turish taqiqlanadi: temir yo'l kesishmalariga 50 metrdan kam masofada."
  },
  {
    "id": 499,
    "biletId": 50,
    "text": "Agar jonlantirishni (reanimatsiyani) 2 kishi bir vaqtda olib borganda, yurakni bilvosita massaj qilish va sun’iy nafas oldirish qanday bajariladi?",
    "options": [
      "Bir marta ko’krak qafasi bosiladi, bir marta havo puflanadi va hokazo",
      "Ikki marta havo puflanadi, so’ng yurak sohasi 30 marta bosiladi va hokazo",
      "2-3 marta havo puflangandan so’ng 15 marta ko’krak qafasi bosiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Agar jonlantirishni (reanimatsiyani) 2 kishi bir vaqtda olib borganda, yurakni bilvosita massaj qilish va sun’iy nafas oldirish qanday bajariladi? Bir marta ko’krak qafasi bosiladi, bir marta havo puflanadi va hokazo Ikki marta havo puflanadi, so’ng yurak sohasi 30 marta bosiladi va hokazo 2-3 marta havo puflangandan so’ng 15 marta ko’krak qafasi bosiladi Agar jabrlanuvchida yurak urish faoliyati va nafas olishi to'xtagan bo’lsa, yurakning tashqi massaji bilan birga sun’iy nafas oldirish amalga oshiriladi. Bunday hollarda nafas olish oraliqlarida ko'krak qafasi 30 marta keskin bosiladi."
  },
  {
    "id": 500,
    "biletId": 50,
    "text": "Tashiladigan yuk vaznini va o’qlar bo’yicha tushadigan og’irlikni taqsimlashni kim tartibga solib turadi?",
    "options": [
      "Davlat YHXX",
      "Avtoxo’jalik ma’muriyati",
      "Mazkur transport vositasini tayyorlovchi - korxona"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 160-bandiga asosan: Tashilayotgan yukning vazni va o’qlarga tushadigan og’irlik miqdorining taqsimlanishi ishlab chiqargan korxona tomonidan ushbu transport vositasi uchun belgilangan miqdordan oshmasligi kerak."
  },
  {
    "id": 501,
    "biletId": 51,
    "text": "Belgilangan yo’nalishli transport vositalariga qaysilar kiradi?",
    "options": [
      "Avtobus va yo’nalishli taksilar",
      "Tramvay va trolleybuslar",
      "Belgilangan yo’nalish bo’yicha harakatlanadigan avtobus, trolleybus, tramvay va yo’nalishli taksilar"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-bobi 6-bandining o’n to’rtinchi xatboshiga asosan: Yo’nalishli transport vositasi — belgilangan yo'nalishi va bekatlari bo'lgan, yo’lovchi tashish uchun mo’ljallangan umum foydalanishdagi transport vositalari (trolleybus, tramvay, avtobus, yo’nalishli taksi)."
  },
  {
    "id": 502,
    "biletId": 51,
    "text": "Qaysi belgi chapga burilishga ruxsat beradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma uchinchi xatboshisiga asosan: 3.19. \"Qayrilish taqiqlangan\". Izoh. 3.19. — belgisi qaysi kesishmaga o’rnatilsa faqat shu kesishmaga ta’luqli bo’lib, chapga burilishni taqiqlamaydi."
  },
  {
    "id": 503,
    "biletId": 51,
    "text": "Bu belgi o’rnatilgan yo’lda avtobuslarga harakatlanish ruxsat etiladimi?",
    "options": [
      "Faqat ruxsat etilgan to’la vazni 3,5 tonnadan ortiq, bo’lmagan avtomobilga ruxsat etiladi",
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_3.webp",
    "explanation": "YHQ 1-ilovasi 5-bo'limining to’rtinchi xatboshisiga asosan: 5.3. \"Avtomobillar uchun mo’ljallangan yo’l\". Faqat avtomobillar, avtobus hamda mototsikllar, elektromototsiklar, mopedlar va skuterlarning harakatlanishi uchun mo’ljallangan yo’lni bildiradi."
  },
  {
    "id": 504,
    "biletId": 51,
    "text": "Chorrahani oxirgi bo’lib kesib o’tadi:",
    "options": [
      "Ko’k avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 505,
    "biletId": 51,
    "text": "Qaysi transport vositalariga harakatlanish ruxsat etiladi?",
    "options": [
      "Sariq va qizil avtomobilga",
      "Yashil, qizil va oq avtomobilga",
      "Oq va yashil avtomobilga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining qo’llari yon tomonga uzatilganda yoki tushirilganda: chap va o'ng yon tomonidan tramvayga bo’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o'tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi."
  },
  {
    "id": 506,
    "biletId": 51,
    "text": "Yo’lovchilarni tushirish uchun qaysi transport vositalari to’g’ri to’xtadi?",
    "options": [
      "Yengil avtomobil",
      "Mototsikl",
      "Avtobus",
      "Barcha transport vositalari"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_6.webp",
    "explanation": "YHQ 13-bobi 91-bandining beshinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda."
  },
  {
    "id": 507,
    "biletId": 51,
    "text": "Bunday yo’l belgisi bilan belgilangan yo’l qismlarida ruxsat etilgan to’la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillarining qanday yuqori tezlik bilan harakatlanishiga ruxsat etiladi?",
    "options": [
      "60 km/s",
      "90 km/s",
      "80 km/s",
      "70 km/s",
      "100 km/s"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_7.webp",
    "explanation": "YHQ 11-bobi 79-bandining uchinchi xatboshisiga asosan, aholi punktlaridan tashqarida: boshqa avtobuslar, tirkamali yengil avtomobillar, mototsikllar, elektromototsikllar ruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo'lgan yuk avtomobillariga tezlikni soatiga 80 kilometrdan oshirmasdan."
  },
  {
    "id": 508,
    "biletId": 51,
    "text": "Ko’k avtomobil haydovchisi nima qilishi kerak?",
    "options": [
      "Sariq avtomobilga u orqadan kelayotgani uchun yo’l bermay, mo’ljallangan yo’nalishda chorrahani kesib o’tishi",
      "Qarama-qarshi harakat bo’lagiga darhol qayta tizilishi",
      "Tezlikni kamaytirishi, sariq, avtomobilga quvib o’tishni tugallashiga imkon berishi, so’ng esa chapga burilishi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i51_8.webp",
    "explanation": "YHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 509,
    "biletId": 51,
    "text": "\"Gazel\" yuk avtomobilining yuk bilan balandligi yo’l sathiidan 3,8 metr bo’lsa, uni tashish mumkinmi?",
    "options": [
      "Ruxsat beriladi",
      "Ruxsat berilmaydi",
      "Ruxsat beriladi, faqat yo’nalishlarda osma ko’priklar, osma yo’llar (estakada) bo’lmasa"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 164-bandining birinchi xatboshisiga asosan: O’ta og’ir, katta o’lchamli va xavfli yuklarni tashishda gabarit o'lchamlari yukli yoki yuksiz holda eni bo’yicha 2,55 (refrijeratorlar va izotermik kuzovlar uchun — 2,6) metrdan va balandligi bo'yicha yo’l sathidan 4 metrdan, uzunligi bo'yicha yakka avtotransport vositasi uchun — 12 metrdan, tirkama uchun — 12 metrdan, yarimtirkamali avtopoezd uchun — 20 metrdan, tirkamali avtopoezd uchun — 20 metrdan ortiq bo'lgan yoki yuki transport vositasining oldi va orqa nuqtasidan 2 metrdan ortiq chiqib turgan transport vositalarining harakatlanishi belgilangan tartibda DYHXX bilan kelishilgan bo’lishi kerak."
  },
  {
    "id": 510,
    "biletId": 51,
    "text": "Agar pnevmatik uzatmaning zichligi buzilib, kompressor ishlamay turganda boshqaruv asboblarining erkin holatida havo bosimining 30 daqiqada qancha MPa-ga pasayishiga sabab bo’lsa, tormoz tizimi nosoz hisoblanadi?",
    "options": [
      "0,025",
      "0,035",
      "0,05",
      "0,055",
      "0,06"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 1-bo'limining 1.4-bandiga asosan: 1.4. Dvigatel ishlamay turganda pnevmatik yoki pnevmogidravlik tormoz yuritmasining zichligini buzilishi, boshqaruv qismlari ulanmaganda — 30 daqiqada, ulanganida — 15 daqiqada tizimdagi havo bosimini 0,05 MP dan ko’pga pasayishiga sabab bo’lsa. o'’ildiraklardagi tormoz kameralaridan siqilgan havo chiqayotgan bo’lsa."
  },
  {
    "id": 511,
    "biletId": 52,
    "text": "Avtomobil harakatlanayotganda kutilmaganda shinasi yorilib ketsa, haydovchi nima qilishi zarur?",
    "options": [
      "Ishchi tormoz bilan to’la to’xtaguncha keskin tormozlash",
      "Avtomobilni to’xtab turish tormozi yordamida to’xtatish",
      "Rulni ushlab turish, to’g’ri chiziqda harakatni saqlash, tezlikni kamaytirish va to’xtatish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Shinalarning birida bosimning kamayishi uning aylanishiga qarama-qarshiligini kuchaytiradi va ko'ndalang qattiqligini kamaytiradi. Shuning uchun bosimi bo’lmagan shina bilan avtomobil yon tomonga og’adi. Boshqarishni saqlab qolish uchun haydovchi rul chambaragini ushlab turib, tezligini pasaytirishi va to’xtatish lozim."
  },
  {
    "id": 512,
    "biletId": 52,
    "text": "Belgilardan qaysi biri bevosita yo’lning xavfli qismi oldiga o’rnatiladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i52_2.webp",
    "explanation": "YHQ 1-ilovasi 1-bo’limining yettinchi xatboshisiga asosan: 1.3.1. — bir izli temir yo'l, belgisi shlagbaum bilan jihozlanmagan temir yo’l kesishmasi oldida o’rnatiladi."
  },
  {
    "id": 513,
    "biletId": 52,
    "text": "Bu yo’l belgisi bilan belgilangan yo’l qismida yengil avtomobilni shatakka olishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i52_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining to’qqizinchi xatboshisiga asosan: 3.7. \"Tirkama bilan harakatlanish taqiqlanadi\". Yuk tashuvchi transport vositalari, traktorlarning barcha turdagi tirkamalar bilan harakatlanishi, shuningdek mexanik transport vositalarini har qanday usulda shatakka olish taqiqlanishini bildiradi."
  },
  {
    "id": 514,
    "biletId": 52,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadi:",
    "options": [
      "1- va 2-tramvaylar ayni vaqtda yashil avtomobil bilan; qizil; ko'k avtomobil",
      "1-tramvay ayni vaqtda yashil avtomobil bilan; qizil avtomobil; 2-tramvay va ko’k avtomobil bir vaqtda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i52_4.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo'nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 515,
    "biletId": 52,
    "text": "Transport vositalariga qaysi yo’nalish bo’yicha harakatlanishga ruxsat etiladi?",
    "options": [
      "Tramvayga chapga yoki to’g’riga",
      "Faqat avtomobilga chapga",
      "Tramvay va avtomobilga chapga",
      "Tramvayga chapga yoki to’g’riga, avtomobilga tramvaydan so’ng",
      "Tramvayga chapga, avtomobilga chapga va qayrilib olishga"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i52_5.webp",
    "explanation": "YHQ 7-bobi 38-bandiga asosan, tartibga soluvchining o'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi; orqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi; piyodalarga tartibga soluvchining orqa tomonidan qatnov qismini kesib o'tishga ruxsat etiladi."
  },
  {
    "id": 516,
    "biletId": 52,
    "text": "Qaysi avtomobil haydovchisiga to’xtashga ruxsat etilgan?",
    "options": [
      "Yengil avtomobilning haydovchisiga",
      "Yuk avtomobilning haydovchisiga",
      "Har ikki haydovchiga",
      "Yuk avtomobilning haydovchisiga, agar bir yo'nalishda harakatlanish uchun uchta va undan ko’p tasma bo’lsa"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i52_6.webp",
    "explanation": "YHQ 13-bobi 91-bandining uchinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: bir yo’nalishda harakatlanish uchun uchtadan kam tasmaga ega bo’lgan ko’prik, yo’l o’tkazgich va estakadalarning ustida;\nko’prik, yo’l o’tkazgich va estkadalarning ostida (tegishli yo’l belgilari bilan to’xtab turish ruxsat berilgan yo’l qismlari bundan mustasno)."
  },
  {
    "id": 517,
    "biletId": 52,
    "text": "Qayrilib olish taqiqlanadi:",
    "options": [
      "Chorrahalarda va ularga 15 metrdan yaqinroqda",
      "Chorrahalar oldiga 15 metrdan yaqinroqda",
      "Yo’lning loaqal bir yo’nalishida 100 metrdan kamroq, qismi ko’rinadigan aholi punktlaridan tashqarida",
      "Loaqal bir yo’nalishda yo’lning 100 metrdan kamroq qismi ko’ringanda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 62-bandiga asosan, quyidagi joylarda qayrilib olish taqiqlanadi: yo’lning ko’rinishi biror-bir yo’nalishda 100 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 518,
    "biletId": 52,
    "text": "Harakat tezligi 40 km/soatdan oshmaydigan transport vositasiga qatnov qismining chap bo'lagiga chiqishga qachon ruxsat etiladi?",
    "options": [
      "Quvib o’tishda, o’zib ketishda yoki aylanib o’tishda",
      "Burilish yoki qayrilib olish oldidan qayta tizilishda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 68-bandiga asosan: Tezligini soatiga 40 kilometrdan oshirishi mumkin bo'lmagan yoki texnik sabablarga ko’ra tezligini bundan oshira olmaydigan transport vositalari aylanib o'tish, quvib o’tish, chapga burilish yoki qayrilib olish uchun qayta tizilishdan yoki ruxsat etilgan hollarda yo'lning chap tomonida to’xtashdan boshqa hollarda faqat chetki o'ng qatorida harakatlanishlari kerak."
  },
  {
    "id": 519,
    "biletId": 52,
    "text": "Kim o’quv yurtlarida boshqarishni o’rgatish huquqiga ega?",
    "options": [
      "Haydashni o’rgatish huquqini beruvchi xujjatlari bo’lgan haydashni o’rgatuvchi yo’riqchi",
      "Tajribali haydovchi",
      "3 yillik ishlagan davri bo’lgan haydovchi",
      "5 yil haydovchilik ishlagan davriga ega bo’lgan 1 va 2-toifa haydovchilar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 25-bobi 148-bandiga asosan: Avtomototransport vositasini yoki shahar elektr transportini boshqarish bo'yicha amaliy mashg’ulotlar instruktori boshqarishni o’rgatish huquqini beruvchi hujjatga, shuningdek tegishli toifadagi transport vositasini boshqarish huquqini beruvchi guvohnomaga ega bo’lishi kerak."
  },
  {
    "id": 520,
    "biletId": 52,
    "text": "Yuk transport vositasining o'lchamlaridan chiqib tursa, kunning qorong’i vaqtida va yetarli ko’rinmaydigan sharoitda qanday belgilanadi?",
    "options": [
      "Ishora taxtachalari yoki bayroqchalar (diagonal bo’yicha navbatma-navbat tortilgan qizil va oq yo’lli) bilan",
      "Oldi oq rangli chiroq yoki yorug’lik qaytargich, orqasi esa qizil rangli chiroq yoki yorug’lik qaytargich bilan",
      "Orqasiga qizil, oldiga oq bayroqchalar bilan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 163-bandiga asosan: Transport vositasining gabaritlaridan old yoki orqa tomonga bir metrdan, yon tomonga gabarit chiroqlarining chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk \"Katta o’lchamli yuk\" taniqlik belgisi bilan belgilanishi, qorong’i vaqtda va yetarlicha ko’rinmaydigan sharoitda esa bunga qo’shimcha ravishda old oq chiroq yoki yorug’lik qaytargich, orqasi esa qizil chiroq yoki yorug’lik qaytargich bilan belgilanishi kerak."
  },
  {
    "id": 521,
    "biletId": 53,
    "text": "Ruxsat etilgan to’liq vazn nima?",
    "options": [
      "Transport vositasining yuk ko’tarishi",
      "Transport vositasining haqiqiy vazni",
      "Jihozlangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan yuk, haydovchi va yo’lovchilari bilan birgalikdagi eng yuqori vazni (o’lchovi)",
      "Transport vositisida tashiladigan yukning ishlab chiqargan korxona yo’l qo’ygan texnik tavsifnomasi sifatida belgilanadigan vazni"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-bobi 6-bandiga asosan: Ruxsat etilgan to’liq vazn — jihozlangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan yuk, haydovchi va yo’lovchilari bilan birgalikdagi eng yuqori vazni (o’lchovi).\nBir tarkibda harakatlanayotgan (tirkama va boshqalar) transport vositalarining ruxsat etilgan to’liq vazniga shu tarkibga kiruvchi transport vositalarining ruxsat etilgan to’liq vaznlari yig’indisi kiradi."
  },
  {
    "id": 522,
    "biletId": 53,
    "text": "Bu belgida harakatlanish ruxsat etiladi:",
    "options": [
      "Faqat avtomobil haydovchisiga",
      "Faqat avtomobil va mototsikl haydovchilariga",
      "Barcha transport vositalarining haydovchilariga",
      "Faqat avtomobil va avtobus haydovchilariga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i53_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining o'n to’rtinchi xatboshisiga asosan: 4.4. \"Engil avtomobillar harakati\". yengil avtomobillar, avtobus, mototsikllar, belgilangan yo’nalishli transport vositalari va ruxsat etilgan to’la vazni 3,5 tonnadan oshmaydigan yuk avtomobillari harakatlanishiga ruxsat etilishini bildiradi. Belgining ta’sir oralig'ida yashovchi va ishlovchi fuqarolarga tegishli, ularga va korxonalarga xizmat ko’rsatuvchi transport vositalariga bu belgi tatbiq etilmaydi. Bunday hollarda transport vositalari belgilangan joyga eng yaqin chorrahadan kirib yoki chiqib ketishlari kerak."
  },
  {
    "id": 523,
    "biletId": 53,
    "text": "Avtomagistralda qatnov qismining chetini bildiruvchi sidirg’a oq chiziqni bosib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Agar avtomagistralda harakatlanish serqatnov bo’lsa, taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i53_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining to’rtinchi va o’ttiz beshinchi xatboshlariga asosan: 1.2 (enli sidirg'a chiziq) — avtomagistrallarda harakatlanish qismi chegarasini bildiradi;\n1.2 chiziqlarini istalgan tomondan bosib o’tish mumkin."
  },
  {
    "id": 524,
    "biletId": 53,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Yashil avtomobil ayni vaqtda 2-tramvay bilan, 1 tramvay, ko’k, sariq, qizil avtomobillar",
      "1- va 2- tramvaylar ayni vaqtda sariq avtomobil bilan, yashil, ko’k, qizil avtomobillar"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i53_4.webp",
    "explanation": "YHQ 16-bobi 104-bandiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo'nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 525,
    "biletId": 53,
    "text": "Harakatlanishga ruxsat etilgan barcha transport vositalari qaysi javobda ko’rsatilgan?",
    "options": [
      "Tramvay va mototsikl",
      "Avtomobillar va mototsikl",
      "Barcha transport vositalari",
      "Tramvay, yuk avtomobili va mototsikl"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i53_5.webp",
    "explanation": "YHQ 7-bobi 32-bandiga asosan: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doira shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo'nalishga ta’sir etadi.\nAgar tegishli yo’l belgisi bilan qayrilib olish taqiqlanmagan bo'lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo’shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi. Qo’shimcha tarmoqdagi ishora o'chirilgan bo'lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi."
  },
  {
    "id": 526,
    "biletId": 53,
    "text": "Aholi punktlarida ma’lum harakat tezligiga rioya etayotgan yirik o'lchamli transport vositasining haydovchisi qanday yo’l tutishi kerak?",
    "options": [
      "To’xtashi va orqasida to’planib qolgan transport vositalarini o’tkazib yuborishi",
      "Harakatni davom ettirishi kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i53_6.webp",
    "explanation": "YHQ 12-bobi 87-bandiga asosan: Aholi punktlaridan tashqaridagi yo’llarda sekin harakatlanadigan yoki katta hajmli transport vositasini quvib o'tish qiyin bo'lgan hollarda uning haydovchisi ushbu transport vositasini iloji boricha yo’lning o'ng tomoniga olishi, zarur bo'lganda esa orqasida to'planib qolgan transport vositalarini o’tkazib yuborish uchun to’xtashi kerak."
  },
  {
    "id": 527,
    "biletId": 53,
    "text": "Mazkur vaziyatda quvib o’tishga ruxsat etilganmi?",
    "options": [
      "40 km/soatdan kam tezlik bilan harakatlanayotgan faqat yakka transport vositalariga ruxsat etilgan",
      "Taqiqlangan",
      "Barcha hollarda ruxsat etilgan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i53_7.webp",
    "explanation": "YHQ 12-bobi 86-bandining to’rtinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: temir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda."
  },
  {
    "id": 528,
    "biletId": 53,
    "text": "Siz chapga burilishga yoki qayrilib olishga qaror qildingiz. Orqani ko’rsatadigan ko’zguga qarab bildingizki, ortingizdagi haydovchi Sizni quvib o’tmoqchi. Sizning bundan keyingi harakatingiz?",
    "options": [
      "Burilishning chap ko'rsatkichini yoqish va qatnov qismida qulay joylashib olishdan foydalanib, manyovr qilishga kirishish",
      "Sizning ortingizdan kelayotgan haydovchi Sizni quvib o’tib ketgandan so’nggina burilishning chap ko’rsatkichini yoqish",
      "Burilishning chap ko'rsatkichini yoqish, o’zini quvib o’tishga imkon berishi va so’ng manyovr qilishga kirishish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 84-bandiga asosan: Quvib o’tilayotgan transport vositasining haydovchisiga harakat tezligini oshirish yoki boshqa xatti-harakatlar bilan quvib o'tishga to’sqinlik qilish taqiqlanadi."
  },
  {
    "id": 529,
    "biletId": 53,
    "text": "O’ng va chap g’ildiraklarining shinalari turlicha siyqalangan avtomobilda tormoz berish, qanday xavfli oqibatlarga olib kelishi mumkin?",
    "options": [
      "Tormoz barabanlarining qizib ketishiga",
      "Naqsh izlarining ko’chib ketishiga",
      "Avtomobilning ag’darilib ketishi mumkin darajada sirpanib ketishiga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Bir оqdа o’rnatilgan (chap va o'ng) shinalar naqshining ustki shakli va uning yoyilganlik darajasi barcha hollarda bir xil bo’lishi lozim, chunki bu hol tormozlanayotganda avtomobilning muvozanatini ta’minlovchi shartlardan biri hisoblanadi. Ushbu tartib inbatga olinmasatormozlanish vaqtida har xil tormoz kuchlari yuzaga kelib, muozanatni yo'qotishga olib keluvchi hollarni vujudga keltiradi. Avtomobilning yeyilgan \nshina naqshi tomoni oldinga intilib, aks tomoni orqada qoladi. Bu holda avtomobil bir tomonga siljib, maqbul bo'lmagan sharoitlarda muvozanatini yo'qotib, ag’darilishi  mumkin."
  },
  {
    "id": 530,
    "biletId": 53,
    "text": "Yo’lovchi tashishga mo’ljallanmagan yuk avtomobilida yukni kuzatib boruvchi yoki qabul qilib oluvchi shaxslarning tashilishiga ruxsat beriladimi?",
    "options": [
      "Agar bort balandligidan pastda joylashgan qulay o’rindiq bo’lsa ruxsat beriladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 154-bandiga asosan: Odam tashishga moslashtirilmagan yuk avtomobillarining yukxonasida faqat yukni olish uchun borayotgan yoki uni kuzatib borayotgan shaxslarning bo’lishiga yo’l qo’yiladi, bunda ular bortlardan pastda joylashgan o’rindiqlar bilan ta’minlanishlari kerak."
  },
  {
    "id": 531,
    "biletId": 54,
    "text": "Quvib o’tish nima?",
    "options": [
      "Bir yoki bir nechta transport vositalarini qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib, so’ngra ilgari egallagan qatoriga qaytib o’tish bilan bog’liq bo’lgan o’zib ketish.",
      "Kam tezlik bilan qo’shni qatorda harakatlanayotgan bir yoki bir qancha transport vositalaridan o’zib ketish.",
      "Egallagan harakatlanish bo’lagidan chiqib oldinda ketayotgan transport vositasidan o’zib ketish."
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova 1-bob. Umumiy qoidalar: Quvib o'tish — bir yoki bir nechta transport vositalarini qarama-qarshi yo'nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib, so'ngra ilgari egallagan qatoriga qaytib o’tish bilan bog'liq bo’lgan o’zib ketish."
  },
  {
    "id": 532,
    "biletId": 54,
    "text": "Qaysi belgi yo’lning bir tomonlamali harakatlanish yo’l qismini ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i54_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining oltinchi xatboshisiga asosan: 5.5. \"Bir tomonlama harakatli yo'l\". Transport vositalari butun kenglik bo’yicha bir yo’nalishda harakatlanadigan yo'l yoki qatnov qismini bildiradi."
  },
  {
    "id": 533,
    "biletId": 54,
    "text": "Haydovchi, agar uning transport vositasi 40 km/soatga teng yoki undan ortiq tezlik bilan balandlikka chiqa olmasa, nima chora ko’rishi kerak?",
    "options": [
      "Asosiy tasma bo’yicha, agar unda boshqa transport vositalari yo’q bo’lsa, harakatlanishni davom ettirishi",
      "Qo’shimcha tasmaga qayta tizilishi",
      "Agar balandlikning davomliligi 30 metrdan oshmasa, asosiy tasma bo’yicha harakatlanishni davom ettirishi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i54_3.webp",
    "explanation": "YHQ 1-ilovasi 5-bobi: 5.8.3. bandi: \"Tasmaning boshlanishi\". Yo’lning sekinlashish bo'lagi yoki balandlikka ko’tarilishdagi qo'shimcha tasmaning boshlanish qismi. Agar belgiga 4.7 \"Eng kam tezlik\" belgisining tasviri tushgan bo’lsa, ko'rsatilgan yoki undan kattaroq tezlikda harakatlana olmaydigan transport vositasining haydovchisi asosiy tasmadan qo’shimcha tasmaga qayta tizilishi kerak."
  },
  {
    "id": 534,
    "biletId": 54,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Sariq chorrahaga chiqadi va yashilni o’tkazib yuborish uchun to’xtaydi; yashil, ko’k ayni vaqtda qizil bilan; sariq",
      "Ko’k ayni vaqtda qizil bilan; yashil; sariq",
      "Yashil; ko’k ayni vaqtda qizil; so'ng sariq"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i54_4.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo'l berishi shart. Bu qoidaga tramvay haydovchilari ham o'zaro amal qilishlari kerak. Bunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 535,
    "biletId": 54,
    "text": "Qaysi rasmda haydovchi o’ngga to’g’ri burilyapti?",
    "options": [
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i54_5.webp",
    "explanation": "YHQ 7-bobi 32-bandi: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doirasimon shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi. Agar tegishli yo'l belgisi bilan qayrilib olish taqiqlanmagan bo’lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo'shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi. Svetoforning qo’shimcha tarmoqdagi ishora o’chirilgan bo’lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi."
  },
  {
    "id": 536,
    "biletId": 54,
    "text": "Qaysi transport vositasining haydovchisi to’xtash qoidasini buzdi?",
    "options": [
      "Faqat mototsikl haydovchisi",
      "Faqat avtomobil haydovchisi",
      "Har ikkisi buzdi",
      "Hech kim buzmadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i54_6.webp",
    "explanation": "YHQ 13-bobi 91-bandi Quyidagilarda to’xtash taqiqlanadi: Bekat maydonchalarida, yo’nalishli transport vositalari to'xtash joylarida, jumladan, 1.17 chizig'i bilan belgilangan, ular bo'lmaganda esa yo’nalishli transport vositalari to’xtash joyi belgilari va bekatdan harakatlanish yo'nalishi bo'ylab (yetmasdan va o’tib ketib) 15 metrdan kam masofada (yo’nalishli transport vositalari harakatiga xalaqit bermasa yo’lovchilarni chiqarish yoki tushirish uchun to'xtash bundan mustasno)."
  },
  {
    "id": 537,
    "biletId": 54,
    "text": "Qizil avtomobil haydovchisiga tramvay yo’li bo’yicha harakatlanishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i54_7.webp",
    "explanation": "YHQ 10-bobi 69-bandi: Bir yo'nalishdagi qatnov qismining chap tomonida u bilan bir sathda joylashgan tramvay yo’lidan, shu yo'nalishdagi boshqa tasmalar band bo'lganda harakatlanishga, shuningdek, aylanib o’tishga, chapga burilish va qayrilib olishga ushbu Qoidalarning 56-bandini hisobga olgan holda ruxsat etiladi. Biroq bu tramvayga xalaqit bermasligi kerak. Qarama-qarshi yo’nalishdagi tramvay yo’lidan harakatlanish taqiqlanadi. Agar chorrahadan oldin 5.8.1 yoki 5.8.2 yo’l belgilari o'rnatilgan bo’lsa, chorrahadan o’tishda tramvay yo’llaridan harakatlanish taqiqlanadi."
  },
  {
    "id": 538,
    "biletId": 54,
    "text": "Chiziqlar bilan tasmalarga ajratilgan yo’lning qatnov qismida transport vositalarining harakatlanishi qanday amalga oshirilishi kerak?",
    "options": [
      "Qat’iy tasmalar bo’yicha, uzuq-uzuq chiziqni kesib o’tishga faqat qayta tizilishda ruxsat etiladi",
      "Agar qatnov qismi transport vositalaridan xoli bo’lsa, tasma bo'yicha qat’iy emas",
      "Agar transport vositalarining o’lchamlari eniga katta bo’lmasa, tasma bo’yicha qat’iy emas",
      "Agar qatnov qismida tirkamali avtomobillar bo’lmasa va bunda ancha tor harakat oralig’ini saqlash mumkin bo’lsa, tasmalar bo’yicha qat’iy emas"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 70-bandi: Agar qatnov qismi yo’l chiziqlari bilan tasmalarga ajratilgan bo’lsa, transport vositalarining harakatlanishi qat’iy ravishda belgilangan tasmalarda amalga oshirilishi kerak. Faqat qayta tizilishda uzuq-uzuq chiziqlarni bosib o'tishga ruxsat etiladi."
  },
  {
    "id": 539,
    "biletId": 54,
    "text": "Boldir suyagi o’rtasidan singanda transportda tashish uchun taxtakach yoki uning o’rnini o’tovchi narsa qanday qo’yiladi?",
    "options": [
      "Singan joyga qo’yiladigan shina yoki uning o’rnini bosuvchi narsani siqib bog’lash kerak",
      "Shinani ikki tomondan butun boldir uzunligida tovondan to tizza bo’g’inigacha qo’yish kerak",
      "Tovon tagidan to son o'rtasigacha oyoqning ichki va tashqi tomonidan ikkita shina qo’yish kerak. Singan joyni, tizza va boldir-oyoq kafti bo’g’inlarini qimirlatmaslik lozim"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Suyak siniqlarining bir-biriga nisbatan qo’zg’almasligini ta’minlash uchun boldirni ikki taxtakach orasida mahkamlab boldir-tovon bo’g’im va tizza bo’g’inining harakatini chegaralash lozim."
  },
  {
    "id": 540,
    "biletId": 54,
    "text": "Qanday shartlarda transport vositalaridan foydalanish taqiqlanadi?",
    "options": [
      "Faralar yoritishi buzilgan bo’lsa",
      "Tashqi yoritish asboblari va yorug’lik qaytargichlar ifloslanganda",
      "Yoritish asboblari o’rnida mazkur yoritish asboblarining turiga mos kelmaydigan lampalardan foydalanilganda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 3-bo’limining 3.2, 3.3. va 3.4-bandlariga asosan: 3.2. Yorituvchi chiroq nurining yo’nalishi buzilgan bo'lsa foydalanish taqiqlanadi. 3.3. Agar tashqi yoritqichlar va nur qaytargichlar belgilangan tartibda ishlamayotgan yoki ifloslangan bo’lsa foydalanish taqiqlanadi. 3.4. Yoritish asboblarida nur sochuvchisi bo'lmasa yoxud tegishli yorug’lik asboblari turiga mos bo'lmagan nur sochuvchi va lampalardan foydalanilgan bo’lsa foydalanish taqiqlanadi."
  },
  {
    "id": 541,
    "biletId": 55,
    "text": " Mazkur belgi nima haqida axborot beradi?",
    "options": [
      "Trolleybus yoki avtobus to’xtash joylarini bildiradi",
      "Marshrutdan boshqa barcha transport vositalariga yo’lning o’ng qatori bo’yicha harakatlanishni taqiqlaydi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_1.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining yigirma yettinchi xatboshisiga asosan: 5.12. \"Avtobus va (yoki) trolleybus to’xtash joyi\"."
  },
  {
    "id": 542,
    "biletId": 55,
    "text": "Qaysi belgi shlagbaumli temir yo’l kesishmasiga yaqinlashganlik haqida ogohlantiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_2.webp",
    "explanation": "YHQ 1-ilovasi 1-bo'limining ikkininchi xatboshisiga asosan: 1.1. \"Shlagbaumli temir yo’l kesishmasi\"."
  },
  {
    "id": 543,
    "biletId": 55,
    "text": "Bu belgida yuk avtomobillaridan qaysi biriga harakatlanishni davom ettirishga ruxsat etiladi?",
    "options": [
      "Yukxonasida odamlar bo’lgan maxsus moslashtirilgan yuk avtomobillarga",
      "Furgon-yukxonada mahsulotlar tashiydigan avtomobillarga",
      "\"Aloqa\" yozuvi bo’lgan avtomobillarga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining oltinchi xatboshisiga asosan: 3.4 yo’l belgisi bortlariga qiya oq chiziq tortilgan yoki odamlarni tashish uchun mo’ljallangan yuk avtomobillarining harakatlanishini taqiqlamaydi."
  },
  {
    "id": 544,
    "biletId": 55,
    "text": "Zanjirli bo’lgan qishloq xo'jalik, yo’l qurilishi va boshqa mexanik transport vositalariga temir yo’l kesishmasidan o’tishga ruxsat etiladimi?",
    "options": [
      "Agar temir yo’l boshlig’ining ruxsati bo’lsa, ruxsat etiladi",
      "Mexanik transport vositalariga yuklab olib o’tish ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 118-bandining to’qqizinchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: kesishma orqali qishloq xo’jaligi, yo’l qurilishi, qurilish va boshqa mashina hamda mexanizmlarni olib o’tish.\nIzoh: temir yo'l kesishmasi orqali zanjirli bo’lgan qishloq xo’jaligi, yo’l qurilishi, qurilish va boshqa mashina hamda mexanizmlarni, mexanik transport vositasiga yuklab olib o’tishga ruxsat etiladi."
  },
  {
    "id": 545,
    "biletId": 55,
    "text": "Harakatlanish qaysi yo’nalishda ruxsat etilgan?",
    "options": [
      "To’g’riga va o’ngga birinchi yo’nalishga",
      "O’ngga birinchi yo'nalishga",
      "O’ngga ikkinchi yo’nalishga",
      "O’ngga birinchi va ikkinchi yo’nalishga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_5.webp",
    "explanation": "YHQ 7-bobi 32-bandining birinchi xatboshisiga asosan: Yo’naltirgich ko'rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doira shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi."
  },
  {
    "id": 546,
    "biletId": 55,
    "text": "Chorrahani oxiri kesib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_6.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda rel’ssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 547,
    "biletId": 55,
    "text": "Bu yo’l belgisi:",
    "options": [
      "Ikki g’ildirakli kajavasiz mototsikllardan tashqari hamma mexanik transport vositalarining harakatlanishini taqiqlaydi",
      "G’ildirakli traktorlardan tashqari hamma transport vositalarining harakatlanishini taqiqlaydi",
      "Traktorlar va o’zi yurar mashinalarning harakatlanishi taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_7.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining sakkizinchi xatboshisiga asosan: 3.6. \"Traktorlar harakatlanishi taqiqlangan\". Traktorlar, o’ziyurar moslamalarning harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 548,
    "biletId": 55,
    "text": "Transport vositalari chorrahadan quyidagi tartibda o’tadilar:",
    "options": [
      "Ko’k avtomobil, tramvay, qizil avtomobil",
      "Tramvay, qizil, so’ngra ko’k avtomobil",
      "Tramvay, ko’k avtomobil chorrahaga chiqadi, qizilga yo’l beradi, so’ngra burilishni tugallaydi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i55_8.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 549,
    "biletId": 55,
    "text": "Egiluvchan ulagichda shatakka olganda transport vositalari orasidagi masofa qanday bo’lishi kerak?",
    "options": [
      "1-3 m",
      "2-4 m",
      "3-6 m",
      "4-6 m",
      "4-8 m"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 144-bandiga asosan: Egiluvchan ulagich bilan shatakka olishda shatakka olgan va shatakka olingan transport vositalari o’rtasidagi masofa 4 — 6 metr oralig'ida bo’lishi, qattiq ulagich yordamida shatakka olishda esa 4 metrdan ko'p bo'lmasligi kerak. Egiluvchan ulagich ushbu Qoidalarning 177-bandi talablariga muvofiq belgilanishi kerak."
  },
  {
    "id": 550,
    "biletId": 55,
    "text": "Qanday nosozlik bo’lganda, transport vositalarining harakatlanishni davom ettirishi taqiqlanadi?",
    "options": [
      "Transport vositalarining tuzilishida ko’zda tutilgan oyna yuvgichlari ishlamasa",
      "Tashqi yoritish asboblari va nur qaytargichlar belgilangan tartibda ishlamasa yoki ifloslangan",
      "Yomg’ir yoki qor yog’ayotgan vaqtda haydovchi tomonidagi oyna tozalagich ishlamasa",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 3.3. Agar tashqi yoritgichlar va nur qaytargichlar belgilangan tartibda ishlamayotgan yoki ifloslangan bo’lsa.\n4.1. Oyna tozalagich belgilangan tartibda ishlamayotgan bo’lsa.\n4.2. Transport vositasining konstruksiyasida ko’zda tutilgan oyna yuvgich ishlamayotgan bo’lsa."
  },
  {
    "id": 551,
    "biletId": 56,
    "text": "Yonilg’i quyish joyidan yo’lga chiqish chorraha hisoblanadimi?",
    "options": [
      "Hisoblanmaydi",
      "Hisoblanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-bob 6-bandi 11-izohga asosan, \"Yondosh hudud\" - bevosita yo’lga tutashgan va transport vositalari o’tib ketishi uchun mo’ljallanmagan hudud (hovlilar, turar joy dahalari, avtomobillarning to’xtab turish joylari, yonilg’i quyish tarmoqlari, korxona va h.k.). Yondosh hududdan chiqish joylari chorraha xisoblanmaydi."
  },
  {
    "id": 552,
    "biletId": 56,
    "text": "Qaysi belgi \"Mehmonxona\"ni bildiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i56_2.webp",
    "explanation": "YHQ 1-ilovasi 6-bo’limining o’ninchi xatboshisiga asosan: 6.9. \"Mehmonxona\"."
  },
  {
    "id": 553,
    "biletId": 56,
    "text": "Belgilarning ta’siri qaysi transport vositalariga tatbiq etiladi?",
    "options": [
      "Faqat yuk avtomobillarga",
      "Yengil avtomobillarga va mototsikllarga",
      "Faqat yengil avtomobillarga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i56_3.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining o'n ikkinchi va o’n uchinchi xatboshlariga asosan: 7.4.3. \"Transport vositasining turi\". Belgining ta’siri joriy etilgan transport vositalari turini ko'rsatadi. 7.4.1 belgi bilan o'rnatilgan yo’l belgisining ta’siri yuk tashuvchi, shu jumladan, tirkamali, to'la vazni 3,5 tonnadan ortiq bo'lgan transport vositalariga, 7.4.3 belgi bilan o'rnatilgan yo'l belgisining ta’siri yengil avtomobillarga, shuningdek to’la vazni 3,5 tonnagacha bo’lgan yuk tashuvchi transport vositalariga tatbiq etiladi."
  },
  {
    "id": 554,
    "biletId": 56,
    "text": "Chorrahani oxirgi bo’lib kim kesib o’tadi?",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i56_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart.\n\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 555,
    "biletId": 56,
    "text": "Qizil avtomobil chorrahani kesib o’tadi:",
    "options": [
      "Birinchi bo’lib",
      "Ikkinchi bo’lib"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i56_5.webp",
    "explanation": "YHQ 15-bobi 99-bandiga asosan: Svetoforning yashil ishorasida chapga burilayotgan yoki qayrilib olayotgan relssiz transport vositasining haydovchisi qarama-qarshi tomondan to’g’riga harakatlanayotgan va o'ngga burilayotgan transport vositalariga yo'l berishi shart."
  },
  {
    "id": 556,
    "biletId": 56,
    "text": "Shaharlararo qatnaydigan avtobusning haydovchisiga aholi punktlaridan tashqarida tezlikni 80 km/soatdan oshirishga ruxsat etiladimi?",
    "options": [
      "Faqat shu yo’nalishda harakatlanish uchun ikki yoki undan ortiq tasma bo’lgan yo’llarda harakatlanganda ruxsat etiladi",
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 79-bandining ikkinchi xatboshisiga asosan, aholi punktlaridan tashqarida: shaharlararo qatnaydigan avtobuslarga va mikroavtobuslarga tezlikni soatiga 90 kilometrdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 557,
    "biletId": 56,
    "text": "Bu joyda to’xtashga ruxsat etilganmi?",
    "options": [
      "Ruxsat etilgan",
      "Taqiqlangan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i56_7.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo’llaniladi hamda yo’lning qatnov qismi chetiga yoki yo’l chetidagi to’siq ustidan chiziladi."
  },
  {
    "id": 558,
    "biletId": 56,
    "text": "Aholi punktidan tashqarida transport vositalarining uzoq to’xtab turishi (dam olish, tunash va hokazo)ga qayerda ruxsat etiladi?",
    "options": [
      "Yo’l chetida",
      "To’xtab turish maydonchalarida yoki yo’ldan tashqarida",
      "Yo’l qatnov qismining o’ng tomonida, biroq u boshqa transport vositalarining harakatlanishiga to’sqinlik qilmasligi kerak",
      "Yo’lning chap tomonida, biroq harakat xavfsizligi choralariga rioya qilgan holda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 90-bandiga asosan: Aholi punktlaridan tashqarida tunab qolish, dam olish yoki boshqa maqsadlarda uzoq vaqt to'xtab turishga Faqat buning uchun ko’zda tutilgan maydonchalarda yoki yo'ldan tashqarida ruxsat etiladi."
  },
  {
    "id": 559,
    "biletId": 56,
    "text": "Shatakka olish qanday hollarda taqiqlangan?",
    "options": [
      "Sirpanchiqda qattiq ulagichda",
      "Sirpanchiqda egiluvchan ulagichda",
      "Yon kajavali mototsikllar bilan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandining oltinchi xatboshisiga asosan, shatakka olish quyidagi holatlarda taqiqlanadi: yo’l yaxmalak, sirpanchiq bo'lgan hollarda egiluvchan ulagichda."
  },
  {
    "id": 560,
    "biletId": 56,
    "text": "Ushbu yotiq chiziqlardan qaysi biri belgilangan yo’nalishdagi transport vositalari uchun to’xtashga ruxsat beradi?",
    "options": [
      "\"A\"",
      "\"Б\"",
      "\"В\"",
      "\"А\", \"Б\", \"В\""
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i56_10.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi, o’n ikkinchi va yigirma birinchi xatboshlariga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo'l belgisi bilan qo'llaniladi hamda yo’lning qatnov qismi chetiga yoki yo'l chetidagi to’siq ustidan chiziladi.\n1.10 — to’xtab turish taqiqlangan joyni bildiradi. yakka holda yoki 3.28 yo’l belgisi bilan qo'llaniladi va yo’lning qatnov qismi chetiga yoki yo'l chetidagi to'siq ustidan chiziladi.\n1.17 — yo’nalishli transport vositalarining bekatlari hamda taksilarning to’xtab turish joylarini bildiradi.\nYHQ 1-ilovasi 3-bo’limining o'ttiz sakkizinchi xatboshisiga asosan: 3.27 belgisiga amal qilish yo’nalishli transport vositalariga ta’sir qilmaydi."
  },
  {
    "id": 561,
    "biletId": 57,
    "text": "Qaysi yo’l asosiy yo’l hisoblanadi?",
    "options": [
      "Tuproqli yoki shag’alli yo’lga nisbatan qoplamali yo’l yoki tegishli belgilar bilan belgilangan yo’l",
      "Uch tomonlama chorrahada tutashib kelgan yo’lga nisbatan har ikki tomonga davom etuvchi yo’l",
      "Har bir yo’nalishda harakatlanish uchun bir tasmali yo’lga nisbatan ko’p tasmali qatnov qismi bo’lgan yo’l"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-bobi 6-bandining sakkizinchi xatboshisiga asosan: Asosiy yo'l — tuproqli yoki shag’alli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli va shunga o’xshashlar yotqizilgan), kesishayotgan yoki tutashgan yo'lga nisbatan 2.1, 2.3.1 — 2.3.3 yoki 5.1 yo'l belgilari bilan belgilangan yoxud yondosh hududdan chiqadigan yo’lga nisbatan har qanday yo’l. Ikkinchi darajali yo'lning bevosita chorrahaga tutash qismining qoplamali bo’lishi uni asosiy yo’l bilan teng huquqli qilmaydi."
  },
  {
    "id": 562,
    "biletId": 57,
    "text": "Qaysi qo’shimcha axborot belgisi transport vositalarini to’xtab turish joyiga qo’yish usulini ko’rsatadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i57_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo'limining o'n to’qqizinchi xatboshisiga asosan: 7.6.2. \"Transport vositasini to'xtab turish joyiga qo’yish usuli\"."
  },
  {
    "id": 563,
    "biletId": 57,
    "text": "Yotiq uzluksiz sariq chiziq \"To’xtash taqiqlangan\" belgisi bilan birga to’xtashga ruxsat etadi:",
    "options": [
      "Yo’lovchilarni tushiradigan barcha transport vositalariga",
      "Avtobuslarga va trolleybuslarga",
      "Avtobuslarga, trolleybuslarga va taksi avtomobillariga",
      "Faqat belgilangan yo’nalishdagi transport vositalariga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i57_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo’llaniladi hamda yo’lning qatnov qismi chetiga yoki yo'l chetidagi to'siq ustidan chiziladi.\nYHQ 1-ilovasi 3-bo’limining o'ttiz sakkizinchi xatboshisiga asosan: 3.27 belgisiga amal qilish yo’nalishli transport vositalariga ta’sir qilmaydi."
  },
  {
    "id": 564,
    "biletId": 57,
    "text": "Sekin yurar transport vositalarining temir yo’l kesishmasi orqali harakatlanishiga faqat temir yo’l distansiyasi boshlig’ining ruxsati bilan harakat tezligi quyidagidan kam bo’lganda yo’l qo’yiladi:",
    "options": [
      "3 km/s",
      "5 km/s",
      "8 km/s",
      "10 km/s",
      "30 km/s"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 118-bandining o'ninchi xatboshisiga asosan, temir yo’l kesishmasiga quyidagi hollarda kirish taqiqlanadi: temir yo’l distansiyasi boshlig'ining ruxsatisiz tezligi soatiga 8 kilometrdan kam bo’lgan transport vositalarini harakatlanishi."
  },
  {
    "id": 565,
    "biletId": 57,
    "text": "Qizil avtomobil haydovchisi:",
    "options": [
      "Yo’l berishi kerak",
      "Birinchi bo’lib harakatlanishga ustunlikka ega"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i57_5.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning yo’'naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 566,
    "biletId": 57,
    "text": "Bu belgi bilan belgilangan yo’l qismlarida ajratuvchi bo’lakning uzilish joyida qayrilib olishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Faqat to’la vazni 3,5 tonnagacha bo’lgan transport vositalariga ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i57_6.webp",
    "explanation": "YHQ 19-bobi 121-bandining to’rtinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: ajratuvchi bo’lakning texnologik uzilish joylariga kirish va qayrilib olish."
  },
  {
    "id": 567,
    "biletId": 57,
    "text": "Transport vositalarining trotuar va piyodalar yo’lkasi bo’ylab harakatlanishiga yo'l qo’yiladimi?",
    "options": [
      "Yo’l qo’yiladi, agar bu piyodalarning harakatiga halal bermasa",
      "Yo’l qo’yilmaydi, chunki bu piyodalarning hayotini xavf ostiga qo’yishi mumkin",
      "Bevosita shu trotuar yoki yo’lkalarda joylashgan savdo yoki boshqa korxonalarga xizmat ko’rsatishda yo’l qo’yiladi",
      "Trotuarda turgan boshqa transport vositasini aylanib o’tish uchun yo’l qo’yiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 72-bandiga asosan: Qoidalarning 88, 166-bandlarida ko’zda tutilganlardan boshqa hollarda transport vositalarining ajratuvchi mintaqalar, yo’l yoqalari, trotuarlar, piyodalar yo’lkalarida, velosiped yo’lkalari, velosipedchilar uchun tasmalar, piyodalar va velosipedchilarning birga va alohida harakatlanadigan yo’laklarda mexanik transport vositalarining harakatlanishi taqiqlanadi.\nBu joylarda yo’ldan foydalanish va kommunal xizmat mashinalarining harakatlanishiga, shuningdek, bevosita yo’l yoqalari, trotuarlar yoki piyodalar yo’lkalari oldida joylashgan savdo shoxobchalari, korxonalar va boshqa inshootlarga yuk olib kirish uchun boshqa imkoniyati bo’lmagan transport vositalariga yaqin yo’ldan kirishga ruxsat etiladi. Bunda harakatlanish xavfsizligi ta’minlangan bo’lishi shart."
  },
  {
    "id": 568,
    "biletId": 57,
    "text": "Bunday yo’l belgisi bilan belgilangan yo’l qismlarida shaharlararo qatnaydigan avtobuslarning qanday eng yuqori tezlikda harakatlanishiga ruxsat etiladi?",
    "options": [
      "50 km/s",
      "60 km/s",
      "70 km/s",
      "80 km/s",
      "90 km/s"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i57_8.webp",
    "explanation": "YHQ 11-Bob 79-bandining ikkinchi xatboshisiga asosan, aholi punktlaridan tashqarida: shaharlararo qatnaydigan avtobuslarga va mikroavtobuslarga tezlikni soatiga 90 kilometrdan oshirmasdan harakatlanishga ruxsat beriladi."
  },
  {
    "id": 569,
    "biletId": 57,
    "text": "Mototsikllarni shatakka olishga ruxsat etiladimi?",
    "options": [
      "Yon kajavali mototsikllarni shatakka olishga ruxsat etiladi",
      "Taqiqlanadi",
      "Tekis joylarda ruxsat etiladi",
      "Yon kajavasi bo’lmagan mototsikllarni shatakka olishga ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandining beshinchi xatboshisiga asosan, shatakka olish quyidagi holatlarda taqiqlanadi: kajavasiz mototsikllar bilan, shuningdek bunday mototsikllarni."
  },
  {
    "id": 570,
    "biletId": 57,
    "text": "Ushbu yo’l belgisi bildiradi:",
    "options": [
      "Yo’lning ko’rsatilgan yo’nalishda oxiri berkligini",
      "Aholi punktlaridagi manzil tomon harakatlanish yo’nalishini",
      "Balandlikda yoki tezlanish tasmasida qo’shimcha tasmaning tugaganini"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i57_10.webp",
    "explanation": "YHQ 1-ilovasi 5-bo'limining o’ttiz oltinchi xatboshisiga asosan: 5.19.1. \"Oxiri berk yo’l\". Yo’lning ko’rsatilgan yo’nalishda oxiri berkligini bildiradi."
  },
  {
    "id": 571,
    "biletId": 58,
    "text": "Shatakka olingan yengil avtomobilda yo'lovchilarni tashish mumkinmi?",
    "options": [
      "Egiluvchi va qattiq ulagichda ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 143-bandiga asosan: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo'li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 572,
    "biletId": 58,
    "text": "Quyidagi belgi ostidagi qo’shimcha axborot belgisi haydovchiga nima haqida xabar beradi?",
    "options": [
      "To’xtab turish paytida yurgizgichni o’chirish taqiqlanadi",
      "Yurgizgichni o’chirish sharti bilan to’xtab turish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i58_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining yigirmanchi xatboshisiga asosan: 7.7. \"Dvigatelni ishlatmasdan to'xtab turish joyi\". 5.15 belgisi bilan belgilangan to'xtab turish joyida transport vositalarining dvigatelini ishlatmasdan to'xtab turishiga ruxsat etilganligini ko'rsatadi."
  },
  {
    "id": 573,
    "biletId": 58,
    "text": "Mazkur yotiq chiziq nimani anglatadi?",
    "options": [
      "Belgilangan yo’nalishdagi transport vositalari harakatlanadigan bo’lakni",
      "Maxsus avtomobillar harakatlanadigan bo’lakni",
      "Reversiv harakatlanish bo’lagining chegarasini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i58_3.webp",
    "explanation": "YHQ 2-ilovasi 1-Bo’limining o’n birinchi xatboshisiga asosan: 1.9 — reversiv harakat tashkil etilgan bo’laklarning chegarasini belgilaydi;\nreversiv harakatlanish amalga oshirilgan yo’llarda (reversiv svetofori o’chirilgan holatda) qarama-qarshi yo’nalishdagi transport oqimini ajratadi."
  },
  {
    "id": 574,
    "biletId": 58,
    "text": "Chorrahani ikkinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Qizil avtomobil ayni vaqtda ko’k bilan",
      "Sariq avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i58_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 575,
    "biletId": 58,
    "text": "Chorrahani birinchi bo’lib kesib o’tadi:",
    "options": [
      "Qizil avtomobil",
      "Ko’k avtomobil",
      "Yashil avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i58_5.webp",
    "explanation": "YHQ 15-bobi 100-bandiga asosan: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning yo’'naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 576,
    "biletId": 58,
    "text": "Temir yo’l kesishmasidan o’tishda haydovchi nimaga amal qilishi kerak?",
    "options": [
      "Shlagbaumning holatiga va svetofor ishorasiga",
      "Yo’l belgilari va chiziqlariga",
      "Temir yo’l kesishmasi navbatchisining ko’rsatmalari va ishoralariga",
      "Barcha sanab o’tilgan talablarga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 117-bandiga asosan: Temir yo'l kesishmasiga yaqinlashib kelayotgan haydovchi yo’l belgilari va chiziqlariga, svetofor ishoralariga, shlagbaum holatiga, kesishma navbatchisining ko’rsatmalariga amal qilishi, yaqinlashib kelayotgan poezd (lokomotiv, drezina) yo’qligiga ishonch hosil qilishi shart."
  },
  {
    "id": 577,
    "biletId": 58,
    "text": "Haydovchi quvib o’tishni boshlashdan oldin nimaga ishonch hosil qilishi kerak?",
    "options": [
      "Quvib o’tayotgan transport vositasi haydovchisidan ancha tezroq harakatlanishiga",
      "Shu tasma bo’yicha oldinda harakatlanayotgan transport vositasi haydovchisi chapga burilish (qayta tizilish) haqida ishora bermaganiga",
      "U chiqishga mo’ljallagan yo’l qismi 1000 metr masofada bo’sh ekaniga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 82-bandining uchinchi xatboshisiga asosan, haydovchi quvib o’tishni boshlashdan oldin: oldinda harakatlanayotgan transport vositasi quvib o’tish, chapga burilish (qayta tizilish) ishorasini bermayotganligiga ishonch hosil qilishi kerak."
  },
  {
    "id": 578,
    "biletId": 58,
    "text": "Uzunasiga ketgan sidirg’a chizig’i bilan to’xtagan transport vositalari o’rtasidagi masofa quyidagidan kam bo’lgan joylarda transport vositalarining to’xtashi va to’xtab turishi taqiqlanadi:",
    "options": [
      "2,0 m",
      "3,0 m",
      "4,0 m",
      "5,0 m",
      "6,0 m"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandining to’rtinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: to'xtagan transport vositasi bilan sidirg’a chiziq (qatnov qismining chetini belgilovchi chiziqdan tashqari), ajratuvchi mintaqa yoki qatnov qismining qarama-qarshi cheti orasidagi masofa 3 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 579,
    "biletId": 58,
    "text": "Benzin bug’idan zaharlanishning alomatlari qanday?",
    "options": [
      "Ko’z o’ngi qorong’ilashadi, bosh aylanadi, muvozanat yo’qoladi, yiqiladi. Tomir urishi sekinlashadi. Oyoq-qo’l soviydi",
      "Mastga o’xshab harakatlanadi, bosh aylanadi, og’riydi, ko’ngil ayniydi, qayt qiladi, mushaklari tortishadi, nafas olish sekinlashadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Etillangan benzin (tetraetilqo’rg’oshin qo’shilgan benzin)ning birdan katta miqdori havoga ajralishidan o'tkir zaharlanish kelib chiqadi va unda ko’ngil aynish, qusish, holsizlanish, bosh aylanishi, ishtahaning yo'qolishi hollari yuzaga keladi. Og’izda metal ta’mi, tilda yot jizm sezilishi kabilar o’ziga xos belgilaridan biridir. Og'ir holatlarda asabiylashish, chayqalib yurish, alohsirash, ko’rish va eshitishga oid gallyusinatsiyalar va tomir tortishlar kuzatiladi. Etillanmagan benzindan ham zaharlanish mumkin. Shu kabi zaharlanishning alomatlari etillangan benzindan zaharlanishni eslatadi, biroq yengilroq tarzda o’tadi."
  },
  {
    "id": 580,
    "biletId": 58,
    "text": "Yuk avtomobilining yukxonasida 8 nafardan ko’p odamlarni tashish qaysi haydovchilarga ruxsat beriladi?",
    "options": [
      "\"C\" toifadagi transport vositasini boshqarish huquqi guvohnomasi bo’lib, shu avtomobilda uch yillik ish davriga ega bo’lgan haydovchilarga",
      "\"D\" va \"C\" toifadagi transport vositalarini boshqarish huquqiga ega bo’lgan va shu toifadagi transport vositalaridan birini 3 yildan ortiq boshqargan haydovchilarga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 152-bandiga asosan: Yuk avtomobilining yukxonasida odam tashish \"S\" toifasidagi transport vositalarini boshqarish huquqiga ega bo’lgan, odamlar soni kabinadagi yo’lovchilarni ham qo'shib hisoblaganda 8 nafardan ortiq bo’lganda esa, \"S\" va \"D\" toifalaridagi transport vositalarini boshqarish huquqiga ega bo’lgan va shu toifaga taalluqli transport vositalaridan birini 3 yildan ortiq boshqargan haydovchilar tomonidan amalga oshirilishi kerak. Harbiy haydovchilarga yuk avtomobillarida odam tashishga ruxsat berish O’zbekiston Respublikasi Mudofaa vazirligi tomonidan belgilangan tartibda amalga oshiriladi."
  },
  {
    "id": 581,
    "biletId": 59,
    "text": "\"Yetarli ko’rinmaslik\" deganda nima tushuniladi?",
    "options": [
      "Oqshomdan tonggacha bo’lgan vaqt",
      "Ko’rinish 150 metrdan kam bo’lgan holat",
      "Tuman tushganda, yomg’ir, qor yog’ayotganda va hokazo sharoitlarda, shuningdek, kunning g’ira shira vaqtida yo’lning ko’rinishi 300 metrdan kam bo’lishi",
      "Yomg’ir, qor yog’ishi, oqshom"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-bobi 6-bandining o’n to’qqizinchi xatboshisiga asosan: yetarlicha ko’rinmaslik — yomg'ir, qor уод 7561, tuman tushishi va shunga o'xshash sharoitlarda, shuningdek kunning g’ira-shira vaqtida yo'lning ko'rinish masofasi 300 metrdan kam bo’lishi."
  },
  {
    "id": 582,
    "biletId": 59,
    "text": "Yo’naltirgichlar bilan belgilangan yo’nalishlarning qaysi biridan harakatlanishga ruxsat etiladi?",
    "options": [
      "\"А\" va \"Б\"",
      "\"Б\" va \"В\"",
      "\"А\" va \"В\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i59_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining qirq ikkinchi xatboshisiga asosan: 3.18.1 belgisi qatnov qismlarining qaysi kesishmasi oldiga o’rnatilsa, shu kesishmaga tatbiq etiladi. Izoh: 3.18.1 belgisi qayrilib olishni taqiqlamaydi."
  },
  {
    "id": 583,
    "biletId": 59,
    "text": "Sariq uzuq-uzuq yotiq chiziq qaysi yo’l belgisi bilan qo’llanilishi mumkin?",
    "options": [
      "\"To’xtash taqiqlangan\"",
      "\"To’xtab turish taqiqlangan\"",
      "\"Oyning toq sonli kunlarida to’xtab turish taqiqlangan\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i59_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n ikkinchi xatboshisiga asosan: 1.10 — to'xtab turish taqiqlangan joyni bildiradi; yakka holda yoki 3.28 yo’l belgisi bilan qo’llaniladi va yo’lning qatnov qismi chetiga yoki yo’l chetidagi to'siq ustidan chiziladi."
  },
  {
    "id": 584,
    "biletId": 59,
    "text": "Kesishma orqali harakatlanish hollarida haydovchi \"To’xtash chizig’i\", 2.5 \"To’xtamasdan harakatlanish taqiqlangan\" yo’l belgisi yoki svetofor bo’lmaganda, o’tib ketayotgan poyezdni o’tkazib yuborishga qoida bo’yicha shlagbaumgacha kamida qancha masofa qolganda to’xtash kerak?",
    "options": [
      "1 m",
      "5 m",
      "10 m",
      "15 m",
      "20 m"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 18-bobi 119-bandiga asosan: Kesishma orqali harakatlanish taqiqlangan hollarda haydovchi to’xtash chizig’i, 2.5 yo’l belgisi yoki svetofor oldida, ular bo’lmaganda shlagbaumga kamida 5 metr, shlagbaum bo'lmaganda esa birinchi temir yo’l iziga kamida 10 metr qolganda to’xtashi kerak."
  },
  {
    "id": 585,
    "biletId": 59,
    "text": "Svetoforning ushbu ishorasida qaysi transport vositalariga harakatlanishga ruxsat etilgan?",
    "options": [
      "Tramvayga va mototsiklga",
      "Mototsiklga, yengil avtomobil va yuk avtomobiliga",
      "Yengil va yuk avtomobillariga",
      "Barcha transport vositalariga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i59_5.webp",
    "explanation": "YHQ 7-bobi 32-bandiga asosan: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doira shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo'nalishga ta’sir etadi. Agar tegishli yo’l belgisi bilan qayrilib olish taqiqlanmagan bo'lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo’shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi. Qo’shimcha tarmoqdagi ishora o'chirilgan bo'lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi."
  },
  {
    "id": 586,
    "biletId": 59,
    "text": "Og’ir vaznli va katta o’lchamli yuklarni tashiyotgan transport vositalarining aholi punktlaridan tashqarida qanday tezlik bilan harakatlanishiga ruxsat etiladi?",
    "options": [
      "40 km/soatdan oshirmasdan",
      "60 km/soatdan oshirmasdan",
      "Tashish shartlari bilan kelishilganda Davlat YHX xizmati ruxsat etganidan oshirmasdan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 80-bandining to’rtinchi xatboshisiga asosan, har qanday yo’llarda: xavfli, og'ir vaznli va katta o'lchamli yuklarni tashiyotgan, tashkiliy jamlanmada harakatlanayotgan transport vositalariga DYHXX bilan kelishilgan tezlikdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 587,
    "biletId": 59,
    "text": "Mexanik transport vositasi shatakka olinganda egiluvchan ulagich qanday belgilanishi kerak?",
    "options": [
      "Diagonali bo’yicha qizil va oq rangli chiziqlar tushirilgan, yorug’lik qaytaradigan yuzali, bayroqchalar yoki taxtachalar bilan.",
      "Transport vositasi orqasiga mustahkamlangan avariya sababli to'xtash belgisi bilan belgilanishi kerak",
      "Transport vositasi oldi tomoni oq rangli, orqasi qizil rangli fonarlar bilan belgilanishi kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 144-bandiga asosan: Egiluvchan ulagich bilan shatakka olishda shatakka olgan va shatakka olingan transport vositalari o’rtasidagi masofa 4 — 6 metr oralig’ida bo’lishi, qattiq ulagich bilan shatakka olishda esa 4 metrdan ko’p bo’lmasligi kerak. YHQning 177-bandida ko’rsatilganidek, oq va qizil rangdagi chiziqli bayroqcha yoki taxtakach bilan belgilanadi."
  },
  {
    "id": 588,
    "biletId": 59,
    "text": "Qayerda transport vositalarining to’xtashi va to’xtab turishi taqiqlanadi?",
    "options": [
      "Transport vositalari va piyodalarning harakati serqatnov joylarda",
      "Bir yo’nalishda harakatlanish uchun uchtadan kam tasmaga ega bo’lgan ko’prik, yo’l o’tkazgich va estakadalarning ustida",
      "Qatnov qismlari kesishmasi chetida 30 metrdan ko’proq, masofa qolganda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandining uchinchi xatboshisiga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: bir yo’nalishda harakatlanish uchun uchtadan kam tasmaga ega bo’lgan ko’prik, yo’l o’tkazgich va estakadalarning ustida;"
  },
  {
    "id": 589,
    "biletId": 59,
    "text": "Tormoz tizimi ishlamayotgan transport vositasini shatakka olish mumkinmi?",
    "options": [
      "Agar shatakka olgan transport vositasining haqiqiy vazni shatakka olinuvchi transport vaznidan ikki barobar ortiq bo'lsa, qattiq ulagich yordamida yoki qisman ortish usuli bilan",
      "Faqat qattiq ulagichda",
      "Agar shatakka olingan transport vositasida haydovchi bo’lsa har qanday usul bilan",
      "Faqat unga qisman ortish usuli bilan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandining to’rtinchi xatboshisiga asosan, shatakka olish quyidagi holatlarda taqiqlanadi: tormoz tizimi ishlamayotgan transport vositasining haqiqiy vazni shatakka olgan transport vositasining haqiqiy vaznining yarmidan ortiq bo’lsa (haqiqiy vazni kam bo'lgan bunday transport vositasini Faqat qattiq ulagich yordamida yoki qisman ortish usuli bilan shatakka olishga yo’l qo’yiladi)."
  },
  {
    "id": 590,
    "biletId": 59,
    "text": "Mexanik transport vositalaridan foydalanish qanday shartlarda taqiqlanadi?",
    "options": [
      "Yurgizgich ishida nuqson bo’lganda",
      "Uzatma qutisida shovqin bo’lganda",
      "Davlat davriy texnik ko’rigidan belgilangan tartibda o’tmaganda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 29-bobi 179-bandining uchinchi xatboshisiga asosan, quyidagi hollarda transport vositalaridan foydalanish taqiqlanadi: transport vositalari belgilangan tartibda davlat texnik ko’rigidan o’tmagan bo’lsa."
  },
  {
    "id": 591,
    "biletId": 60,
    "text": "Qora avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Birinchi",
      "Ikkinchi",
      "Oxirgi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i60_1.webp",
    "explanation": "YHQ 6-bobi 26-bandiga asosan: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 592,
    "biletId": 60,
    "text": "Harakat qaysi yo’nalishda ruxsat etilgan?",
    "options": [
      "Faqat to’g’riga",
      "To’g’ri va o’ngga",
      "To’g’riga, o’ngga va chapga",
      "Barcha yo’nalishlarga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i60_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining oltinchi xatboshisiga asosan: 5.5. \"Bir tomonlama harakatli yo'l\". Transport vositalari butun kenglik bo’yicha bir yo’nalishda harakatlanadigan yo'l yoki qatnov qismini bildiradi.\nIzoh: 5.5. \"Bir tomonlama harakatli yo'l\" bilgisida qayrilib olish taqiqlanadi."
  },
  {
    "id": 593,
    "biletId": 60,
    "text": "Bu belgida qaysi avtomobilga harakatlanishga ruxsat etilgan?",
    "options": [
      "Haqiqiy vazni 12 t bo’lgan ikki o’qli yuk avtomobiliga",
      "Haqiqiy vazni 12 t bo’lgan uch o’qli yuk avtomobiliga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i60_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining o'n to’rtinchi xatboshisiga asosan: 3.12. \"O’qqa tushadigan og’irlik cheklangan\". Birorta o’qiga tushadigan haqiqiy og’irligi belgida ko’rsatilganidan ortiq bo'lgan transport vositalarining harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 594,
    "biletId": 60,
    "text": "Chorrahani ikkinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Ko’k avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i60_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 595,
    "biletId": 60,
    "text": "Svetoforning qizil va sariq ishoralaridagi qora yo’naltirgichlar nima haqda axborot beradi?",
    "options": [
      "Svetoforning yashil ishorasi yoqilganda harakatlanishning ruxsat etilgan yo’nalishlari haqida",
      "Svetoforning qizil va sariq ishoralarida harakatlanishning ruxsat etilgan yo’nalishlari haqida"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i60_5.webp",
    "explanation": "YHQ 7-bobi 32-bandining birinchi xatboshisiga asosan: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doira shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo'ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi."
  },
  {
    "id": 596,
    "biletId": 60,
    "text": "Yuk avtomobili kuzovida yo’lovchilar tashishda ularning soni qanday belgilanadi?",
    "options": [
      "Ma’muriyatning ko’rsatmasi bilan",
      "Tashishning zarurligi bilan",
      "Jihozlangan o’rindiqlarning soni bilan",
      "Haydovchining qarori bilan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 5-bobi 24-bandiga asosan: Yo’lovchilarga: harakatlanayotgan bortli yuk avtomobillarida tik turish, bortlarda yoki undan yuqoridagi yuk ustida o’tirish;\nBu talablarning bajarilishini haydovchi nazorat qilishi kerak.\nYHQ 26-bobi 159-bandiga asosan: odam soni transport vositasining texnik tavsifnomasida ko’zda tutilgan miqdordan ortiq bo’lganda.\nYHQ 26-bobi 154-bandiga asosan: Yuk avtomobilining yukxonasida, shuningdek shaharlararo, sayyohlik, ekskursiya yoki tog’li yo'nalishlarda va bolalar guruhini tashkiliy tashishda tashilayotgan odamlar soni o’tirish uchun jihozlangan o’rindiqlar sonidan oshmasligi kerak."
  },
  {
    "id": 597,
    "biletId": 60,
    "text": "Qaysi avtomobilning haydovchisi to’xtab turish qoidalarini buzmadi?",
    "options": [
      "Qizil",
      "Sariq",
      "Har ikkisi buzgan",
      "Hech kim buzmadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i60_7.webp",
    "explanation": "YHQ 13-bobi 91-bandiga asosan: Quyidagilarda to’xtash taqiqlanadi: qatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno);"
  },
  {
    "id": 598,
    "biletId": 60,
    "text": "Avtobuslarda bolalar guruhini tashkiliy ravishda tashishda qanday hollarda kunning yorug’ vaqtida yaqinni yorituvchi fara chiroqlari yoqib qo’yilishi kerak?",
    "options": [
      "Faqat ko’rinish yetarli bo'lmagan sharoitlarda",
      "Faqat harakat serqatnov bo’lganda",
      "Haydovchining xohishiga ko’ra",
      "Tashish amalga oshirilayotgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 138-bandi 3-xatboshiga muvofiq, kunning yorug’ vaqtida quyidagi hollarda yaqinni yorituvchi faralar yoqilishi kerak: avtobusda bolalar guruhini tashkiliy tashishda."
  },
  {
    "id": 599,
    "biletId": 60,
    "text": "Qishda boldirga qon to’xtatadigan jgutni qancha muddatga qo’yish mumkin?",
    "options": [
      "2 soatdan ko’p bo’lmagan",
      "3 soatdan ko’p bo’lmagan",
      "1 soatdan ko’p bo’lmagan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Qon to’xtatish jguti yilning sovuq fasllarida bir soatdan ortiq bo’lmagan vaqtga qo’yiladi. Jgut qo’yilishi barcha quyi joylashgan to’qimalarda qon aylanishini to'xtatish bilan bog'liq. Qon aylanishini uzoqroq vaqtga to'xtatish qo'l yoki oyoqda qon tomirlari yo’nalishi bo'yicha jgutdan quyiroq qismda halokatli o'zgarishlarga olib keladi."
  },
  {
    "id": 600,
    "biletId": 60,
    "text": "M2; M3 toifadagi avtotransport vositalarining shina protektori naqshlarining balandligi quyidagilardan kam bo’lmasligi kerak:",
    "options": [
      "0,8 mm",
      "1,0 mm",
      "1,6 mm",
      "2,0 mm",
      "2,5 mm"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 5-Bo’limi 5.1-bandining uchinchi xatboshisiga asosan: M2, M3 toifadagi avtotransport vositalari uchun — 2,0 mm dan kam bo’lsa foydalanish taqiqlanadi."
  },
  {
    "id": 601,
    "biletId": 61,
    "text": "Yo’lda harakatlanishni tartibga solish uchun vakolatli shaxsda o’zi bilan bo’lishi kerak:",
    "options": [
      "Tegishli guvohnoma va taniqlik belgisi - qo’l bog’ichi",
      "Jezl",
      "Qizil ishorali yorug’lik qaytargich qizil chiroq yoki bayroqcha",
      "Barcha sanab o’tilgan belgilari"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: tartibga soluvchi — o’zbekiston Respublikasi Ichki ishlar vazirligi Davlat yo’l harakati xavfsizligi xizmatining (keyingi o’rinlarda — DYHXX), harbiy avtomobil nazorati organlari xodimi, o’z xizmat vazifalarini bajarayotgan, ushbu Qoidalarda ko’zda tutilgan ishoralar yordamida yo’l harakatini tartibga solish vakolatiga ega bo’lgan va uni bevosita amalga oshirayotgan yo’ldan foydalanish xizmati xodimlari, temir yo’l kesishmasi va sol kechuvlaridagi navbatchilar hamda jamoatchilik vakillari. Tartibga soluvchi maxsus kiyim va (yoki) taniqlik belgisi (qo’l bog’ichi, jezl, qizil ishorali yorug’lik qaytargich, qizil chiroq yoki bayroqcha)ga ega bo’lishi shart;"
  },
  {
    "id": 602,
    "biletId": 61,
    "text": "Qaysi belgi qayrilib olishga ruxsat etadi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i61_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma ikkinchi xatboshisiga asosan: 3.18.2. \"Chapga burilish taqiqlanadi\". Izoh: 3.18.2. \"Chapga burilish taqiqlanadi\" belgisi, qayrilib olishni taqiqlamaydi"
  },
  {
    "id": 603,
    "biletId": 61,
    "text": "Agar avtomobilning balandligi (yuki bilan yoki yuksiz) belgida ko’rsatilganidan ortiq bo’lsa, haydovchi:",
    "options": [
      "Avtoxo’jalik rahbaridan yurishga ruxsat olishi kerak",
      "DYHX xodimidan yurishga ruxsatnoma olishi kerak",
      "Boshqa yo’nalish bo’yicha yo’l qismini aylanib o’tishi kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i61_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining o'n beshinchi xatboshisiga asosan: 3.13. \"Cheklangan balandlik\". Gabarit balandligi (yuk bilan yoki yuksiz) belgida ko’rsatilganidan ortiq bo’lgan transport vositalarining harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 604,
    "biletId": 61,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Qizil, ko’k, yashil",
      "Yashil, ko’k, qizil",
      "Yashil ayni vaqtda qizil bilan, ko’k"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i61_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 605,
    "biletId": 61,
    "text": "Harakatlanishda ustunlikka ega:",
    "options": [
      "Asosiy yo’l bo’yicha chorrahaga chiqayotgan avtobusning haydovchisi",
      "Chorrahada qayrilib olishni tugallayotgan yengil avtomobilning haydovchisi",
      "Svetoforning ruxsat etuvchi ishorasida chorrahaga chiqqan avtobus haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i61_5.webp",
    "explanation": "YHQ 15-bobi 102-bandiga asosan: Svetoforning ruxsat etuvchi ishorasida chorrahaga kirgan haydovchi, undan chiqishdagi svetofor ishorasidan qat’i nazar, belgilangan yo'nalishda harakatini davom ettirishi kerak.\nYHQ 15-bobi 103-bandiga asosan: Svetoforning ruxsat etuvchi ishorasi yonganda haydovchi chorraha orqali harakatlanishni tugallayotgan transport vositalari va qatnov qismidan tegishli yo’nalishda o’tishni tugallayotgan piyoda(lar)ga yo’l berishi shart."
  },
  {
    "id": 606,
    "biletId": 61,
    "text": "Yo’l belgilari va chiziqlarning ma’nolari bir-birini inkor etganda haydovchi qaysi biriga rioya etishi kerak?",
    "options": [
      "Yo’l chiziqlariga",
      "Yo’l belgilariga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o’ttiz to'qqizinchi xatboshisiga asosan: Ko’chma tirgakka o'rnatilgan vaqtinchalik yo’l belgilari va chiziqlar ma’no jihatidan bir-biriga zid kelsa, haydovchilar vaqtinchalik yo’l belgilariga amal qilishlari kerak."
  },
  {
    "id": 607,
    "biletId": 61,
    "text": "Qaysi transport vositasining haydovchisi quvib o’tishni to’g’ri bajaryapti?",
    "options": [
      "Yuk avtomobilining haydovchisi",
      "Yengil avtomobilning haydovchisi",
      "Har ikkisi to’g’ri",
      "Har ikkisi noto’g’ri"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i61_7.webp",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 608,
    "biletId": 61,
    "text": "Sun’iy yoritilgan tunellarda harakatlanayotganda qoidalar mexanik transport vositasining haydovchiga qanday majburiyat yuklaydi:",
    "options": [
      "Majburiy to'xtash yoritgichini yoqishni",
      "40 km/soatdan oshmaydigan tezlik bilan harakatlanishni",
      "Tovushli xabar berishni",
      "Uzoqni yoki yaqinni yorituvchi chiroqlarini yoqishni"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 134-bandining birinchi xatboshisiga asosan, qorong’i vaqtda va yetarlicha ko’rinmaydigan sharoitda, shuningdek yo’lning yoritilganligidan qat’i nazar, tunnellarda harakatlanayotgan transport vositalarida quyidagi yoritish asboblari yoqilgan bo’lishi kerak: barcha mexanik transport vositalari — uzoqni yoki yaqinni yorituvchi chiroqlar."
  },
  {
    "id": 609,
    "biletId": 61,
    "text": "Haydovchi keskin tormozlashda yuzaga keladigan sirpanishning oldini olish uchun qanday choralar ko’rishi kerak?",
    "options": [
      "Tormoz pedalini qattiq bosishga",
      "Ulagich pedalini bosishga",
      "Boshlangan tormoz berishni to’xtatishga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Avtomobilni sirpanchiq yo’lda sirpanishi, orqa g’ildiraklarini blokirovkasi sababli vujudga keladi. Bu holda birinchi navbatda surilish sababini bartaraf etish, ya’ni boshlangan tormozlanishni to'xtatish lozim. Keyinchalik rul chambaragini surilish tomon burib, harakat yo’nalishini to’g’rilab olish mumkin."
  },
  {
    "id": 610,
    "biletId": 61,
    "text": "Qaysi belgi yo’l boshi yoki oxirigacha bo'lgan masofani bildiradi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i61_10.webp",
    "explanation": "YHQ 1-ilovasi 5-bo'’limining qirq oltinchi xatboshisiga asosan: 5.28. \"Kilometr belgisi\". Yo'lning boshi yoki oxirigacha bo’lgan masofani bildiradi. (km)."
  },
  {
    "id": 611,
    "biletId": 62,
    "text": "Yo’l burilishlarida avtomobilning markazdan qochirma kuchi qanday hollarda oshadi?",
    "options": [
      "Burilish radiusi ko’payishi bilan",
      "Harakat tezligi ortishi bilan",
      "Harakat tezligi pasayishi bilan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Inersiya (markazdan qochirma) kuchi avtomobilning burilish bo’ylab harakatida vujudga keladi. Bu holda u burilish markazidan qarama-qarshi yo’nalish tomon yo’naltirilgan va harakat tezligi kattalashishi hamda burilish radiusi kamayishi bilan ko’payadi."
  },
  {
    "id": 612,
    "biletId": 62,
    "text": "Belgilardan qaysi birining belgilangan yo’nalishdagi transport vositalariga daxli yo’q?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i62_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining o’ttiz birinchi va o’ttiz sakkizinchi xatboshlariga asosan: 3.27. \"To’xtash taqiqlangan\". Transport vositalarining to’xtashi va to’xtab turishi taqiqlanishini bildiradi. 3.27 belgisiga amal qilish уо па 551 transport vositalariga ta’sir qilmaydi."
  },
  {
    "id": 613,
    "biletId": 62,
    "text": "Bu joyda qayrilib olishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i62_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining beshinchi va o'ttiz to’rtinchi xatboshlariga asosan: 1.3 — to'rt va undan ortiq harakatlanish bo'lagi bo'lgan yo’llarda qarama-qarshi yo'nalishdagi transport vositalari oqimini ajratadi. 1.3 chizig'ini bosib o’tish taqiqlanadi."
  },
  {
    "id": 614,
    "biletId": 62,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadi:",
    "options": [
      "Ko’k; yashil; qizil",
      "Qizil; ko’k; yashil",
      "Yashil; qizil; ko’k"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i62_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng axamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda rel’ssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 615,
    "biletId": 62,
    "text": "Qizil avtomobilning haydovchisiga shu vaziyatda piyodalar o’tish joyi orqali harakatlanishni davom ettirishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i62_5.webp",
    "explanation": "YHQ 17-bobi 110-bandiga asosan: Agar tartibga solinmagan piyodalar o’tish joyi oldida transport vositasi harakatini sekinlashtirsa yoki to’xtasa, qo’shni tasmalarda harakatlanayotgan boshqa haydovchilar bu transport vositasi oldida piyoda (lаг) yo’qligiga ishonch hosil qilganlaridan so'nggina harakatlanishni davom ettirishlari mumkin."
  },
  {
    "id": 616,
    "biletId": 62,
    "text": "Tartibga soluvchining hushtak ishorasi xizmat qiladi:",
    "options": [
      "Harakat ishtirokchilarining e’tiborini jalb etish uchun",
      "Zarur hollarda <Qo’lni yuqoriga ko’tarish\" ishorasining o’rnini bosish uchun",
      "Piyodalar uchun ruxsat etuvchi ishora bo’lib"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 40-bandiga asosan: Yo’l harakati qatnashchilarining e’tiborini jalb etish uchun hushtak bilan qo’shimcha ishora beriladi."
  },
  {
    "id": 617,
    "biletId": 62,
    "text": "Sanab o’tilgan joylardan qaysi birida transport vositalarining to’xtashi va to’xtab turishi taqiqlanmaydi?",
    "options": [
      "Ko’priklarda, osma yo’llarda bir yo’nalishdagi harakatlanish uchun uchtadan ko’p tasma bo’lganda",
      "Kesishadigan qatnov qismlarining chetiga 30 metrdan ko’proq qolganda",
      "Barcha ko’rsatilgan joylarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandi 3-xatboshiga asosan, quyidagi joylarda to’xtash taqiqlanadi: bir yo’nalishda harakatlanish uchun uchtadan kam tasmaga ega bo’lgan ko’prik, yo’l o’tkazgich va estakadalarning ustida;\nqatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 618,
    "biletId": 62,
    "text": "Quvib o’tilayotgan transport vositasining haydovchisiga nima taqiqlanadi?",
    "options": [
      "40 km/soatdan ortiq tezlik bilan harakat qilish",
      "O’z transport vositasining harakat tezligini kamaytirish bilan quvib o’tishga to’sqinlik qilish",
      "Harakat tezligini oshirish yoki boshqa xatti harakatlar bilan quvib o’tishga to’sqinlik qilish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 84-bandiga asosan: Quvib o’tilayotgan transport vositasining haydovchisiga harakat tezligini oshirish yoki boshqa xatti-harakatlar bilan quvib o'tishga to’sqinlik qilish taqiqlanadi."
  },
  {
    "id": 619,
    "biletId": 62,
    "text": "Ko’krak qafasining ko’p qismi jarohatlanganda uni qayerdan boshlab bint bilan bog’lash kerak?",
    "options": [
      "Ko’krak qafasining o’rtasidan",
      "Ko’krak qafasining quyi qismidan",
      "Qo’ltiq ostidan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Ko’krak qafasining keng yaralanishida jabrlanuvchiga tarang bog’ich bog’lanadi. Ко’krаk qafasining quyiroq qismlaridan boshlab bint o’raladi. Nafas chiqarish paytida mustahkamlanadi."
  },
  {
    "id": 620,
    "biletId": 62,
    "text": "Sanab o’tilgan hollardan qaysi birida transport vositalaridan foydalanishga ruxsat etiladi?",
    "options": [
      "Shinalar o’lchami va yo'l qo’yiladigan bosimi bo’yicha transport vositasining rusumiga mos emas",
      "Transport vositasining bitta o’qiga diagonal shinalar radial shinalar bilan birga o’rnatilgan",
      "M1 toifadagi avtotransport vositalarining oldingi o’qiga birinchi toifada ta’mirlangan shinalar o’rnatilgan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasining 5-bo’limidagi 5.7 bandiga muvofiq, transport vositalaridan foydalanishni ta’qiqlovchi shartlar: M1, M2, M3 toifalarni 1 klassidagi avtotransport vositalarini oldingi o’qiga ikkinchi ta’mirlash klassi bo’yicha qayta tiklangan shinalar o’rnatilgan bo’lsa."
  },
  {
    "id": 621,
    "biletId": 63,
    "text": "Reaksiya va diqqatni pasaytiruvchi dori darmonlar ta’sirida bo’lgan haydovchiga transport vositalarini boshqarishiga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi",
      "Agar haydovchining ishlagan davri 2 yildan ortiq bo’lsa, ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandining birinchi xatboshisiga asosan, haydovchiga quyidagilar taqiqlanadi: transport vositasini mastlik holatida (alkogol, giyohvand moddalar iste’mol qilgan va h. k.), sezgirlik va e’tiborni susaytiradigan dori-darmonlar ta’sirida, yo'l harakati xavfsizligiga tahdid soladigan darajadagi charchoqlik va betoblik holatida boshqarish."
  },
  {
    "id": 622,
    "biletId": 63,
    "text": "Bu belgida ko’k fon bilan ajratilgan aholi punkti nimani bildiradi?",
    "options": [
      "Bu manzil shu aholi punktidan tashqarida joylashganini va u manzilga avtomagistral bo’lmagan, boshqa yo’l orqali borilishni",
      "Ko’rsatilgan aholi punktiga harakatlanish avtomagistral bo'ylab amalga oshiriladi",
      "Ko’rsatilgan manzil mazkur aholi punktida joylashgan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i63_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining o’ttiz sakkizinchi va oltmish sakkizinchi xatboshlariga asosan: 5.21.1. \"Yo’nalish ko’rsatkichi\". Aholi punktida o'rnatilgan 5.20.1 yo’l belgisidagi yashil, ko'k rang ko’rsatilgan aholi punktiga yoki ob’ektga ushbu aholi punktidan chiqqandan so’ng avtomagistral yoxud boshqa yo’l orqali harakatlanish mumkinligini anglatadi, oq rang esa ko’rsatilgan ob’ekt shu aholi punktida joylashganligini bildiradi."
  },
  {
    "id": 623,
    "biletId": 63,
    "text": "Quyidagi chiziq nimani bildiradi?",
    "options": [
      "Yo’lni kesib o’tuvchi piyodalarni o’tkazib yuborish uchun to’xtash majburiy bo’lgan joy",
      "Velosiped yo’lkasi yo’lni kesib o’tuvchi joyi",
      "Boshqarilmaydigan piyodalar o’tish joyi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i63_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n to’qqizinchi xatboshisiga asosan: 1.15 — yo’lning velosiped yo’lkasi kesib o'tgan joyini bildiradi."
  },
  {
    "id": 624,
    "biletId": 63,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadilar:",
    "options": [
      "Ko’k va qizil avtomobillar, yashil",
      "Yashil, ko’k, qizil avtomobillar",
      "Yashil, qizil va ayni vaqtda u bilan birga ko’k avtomobil",
      "Qizil, yashil, ko’k avtomobillar"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i63_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 625,
    "biletId": 63,
    "text": "Ko’rsatilgan vaziyatda o’ngga burilar ekan, haydovchi qanday yo’l tutishi kerak?",
    "options": [
      "Ustunlik huquqidan foydalanib, tovushli xabar berishi va belgilangan yo’nalishda harakatni davom ettirishi",
      "Harakat tezligini pasaytirishi va alohida ehtiyotkorlik bilan yo’lda davom etishi",
      "Qatnov qismidan o’tuvchi piyodalarni o’tkazib yuborishi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i63_5.webp",
    "explanation": "YHQ 14-bobi 96-bandiga asosan: Chapga yoki o'ngga burilayotgan haydovchi kesishayotgan yo’lning qatnov qismidan o’tayotgan piyoda(lar)ga, shuningdek velosiped yo’lkasidan yo’lni kesib o’tayotgan velosipedchi(lar)ga va individual harakatlanish vositalarini boshqarayotgan shaxs(lar)ga yo’l berishi kerak."
  },
  {
    "id": 626,
    "biletId": 63,
    "text": "Agar transport vositisida \"Tezlik cheklangan\" taniqlik belgisi o’rnatilgan bo’lsa, bu transport vositasining haydovchisiga:",
    "options": [
      "Belgida ko’rsatilgan tezlikdan oshirishga faqat tezlik tegishli yo’l belgisi o’rnatilib oshirilgan yo’l qismlarida ruxsat beriladi",
      "Belgida ko’rsatilgan tezlikdan oshirish taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 81-bandining ikkinchi xatboshisiga asosan, haydovchilarga quyidagilar taqiqlanadi: tezlikni transport vositasiga o’rnatilgan \"Tezlik cheklangan\" taniqlik belgisida ko’rsatilganidan oshirish."
  },
  {
    "id": 627,
    "biletId": 63,
    "text": "Aholi punktlarida \"Avariya sababli to’xtash\" belgisi transport vositasidan (yon kajavasiz mototsikldan tashqari) kamida qanday masofada qo’yilishi kerak?",
    "options": [
      "10 m",
      "15 m",
      "30 m",
      "40 m"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 51-bandiga asosan: Transport vositasi to’satdan to’xtab qolganda, zudlik bilan avariya yorug’lik ishorasini yoqish, agar u ishlamasa, avariya sababli to’xtash belgisini darhol o’rnatish kerak. Avariya sababli to’xtash belgisi quyidagi hollarda qo’llaniladi:\nyo’l-transport hodisasi sodir bo’lganda;\nto’xtash taqiqlangan joylarda va ko’rinishi cheklangan joylarda majburiy to’xtaganda;\nUshbu belgi boshqa haydovchilarni xavfli vaziyat haqida o’z vaqtida ogohlantirish imkonini beradigan masofada o’rnatilishi kerak. Bu masofa aholi punktlarida transport vositasidan 15 metr, aholi punktlaridan tashqaridagi joylarda esa 30 metrdan kam bo’lmasligi kerak."
  },
  {
    "id": 628,
    "biletId": 63,
    "text": "Aholi punktlaridan tashqarida yo’lning qatnov qismida haydovchilar transport vositalarini qayerda harakatlantirishlari kerak?",
    "options": [
      "Iloji boricha qatnov qismining o’ng chetiga yaqinroq joyda",
      "Xohlagan tasma bo’ylab",
      "Faqat o’ng tasma bo’ylab, chap tasmaga o’tish faqat chapga burish va burilib olish uchun ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 67-bandining birinchi xatboshisiga asosan: Aholi punktlaridan tashqaridagi yo'llarda hamda aholi punktlarida ayrim turdagi transport vositalari uchun ushbu Qoidalarda belgilangandan yuqori tezlikda harakatlanish ruxsat etilgan yo'l qismlarida haydovchilar transport vositalarini mumkin qadar qatnov qismining o'ng chetiga yaqinroq olib harakatlanishlari kerak. O’ng tasmalar bo’sh bo’lganda chap tasmalarni egallash taqiqlanadi."
  },
  {
    "id": 629,
    "biletId": 63,
    "text": "Quvib o’tish qaysi hollarda taqiqlanadi?",
    "options": [
      "Temir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda",
      "Temir yo’l kesishmalarida va ulargacha 100 metrdan ko’p masofa qolganda",
      "Temir yo’l kesishmalarida va aholi punktlaridan tashqarida ulardan 100 metrdan ko’p masofa qolganda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 86-bandining to’rtinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: temir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda."
  },
  {
    "id": 630,
    "biletId": 63,
    "text": "Transport vositasining bir o’qiga izlari har xil naqshli shinalar o’rnatishga ruxsat etiladimi?",
    "options": [
      "Avtomobilning faqat orqa o’qiga oldingi boshqaruvchi ko’prik bilan birga ruxsat etiladi",
      "Taqiqlanadi",
      "Faqat yuk avtomobiliga ruxsat etiladi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilova Transport vositalaridan foydalanishni taqiqlovchi shartlar 5.5.-bandi: Transport vositasining bitta o'qiga har xil o’lchamli va konstruksiyali (dioganalli va radialli, kamerali va kamerasiz), har xil naqshli, sovuqqa chidamli va chidamsiz, yangi va qayta tiklangan, yangi va protektor naqshi chuqurlashtirilgan, turumlangan va turumlanmagan shinalar o’rnatilgan bo’lsa."
  },
  {
    "id": 631,
    "biletId": 64,
    "text": "Qaysi rasmda haydovchi yo’lovchilarni tushirish uchun o’z avtomobilini noto’g’ri to’xtatdi?",
    "options": [
      "Chapdagi rasmda",
      "Ikkala rasmda",
      "O’ngdagi rasmda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i64_1.webp",
    "explanation": "YHQ 13-bobi 91-bandiga asosan: piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda;\nqatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 632,
    "biletId": 64,
    "text": "Qaysi rasmda harakatlanishning to’g’ri yo’nalishi ko’rsatilgan?",
    "options": [
      "Birinchida",
      "Ikkinchida",
      "Ikkalasida"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i64_2.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining o'n birinchi xatboshisiga asosan: 4.2.2. \"To’siqni chapdan chetlab o’tish\". To’siqni ko'rsatilgan yo'nalish bo’yicha chetlab o’tishga ruxsat etilishini bildiradi. YHQ 2-ilovasi 1-bo'limining o’ttiz to'qqizinchi xatboshisiga asosan: Ko’chma tirgakka o'rnatilgan vaqtinchalik yo'l belgilari va chiziqlar ma’no jihatidan bir-biriga zid kelsa, haydovchilar vaqtinchalik yo’l belgilariga amal qilishlari kerak."
  },
  {
    "id": 633,
    "biletId": 64,
    "text": "Mazkur chiziq nimani bildiradi?",
    "options": [
      "Harakat svetofor bilan tartibga solinadigan piyodalar o’tish joyini",
      "Velosiped yo’lkasining qatnov qismini kesib o’tadigan joyni",
      "Piyodalar yo’lkasining qatnov qismini kesib o’tadigan joyni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i64_3.webp",
    "explanation": "YHQ 2-ilovasi 1-bo'limining o'n to’qqizinchi xatboshisiga asosan: 1.15 — yo’lning velosiped yo’lkasi kesib o'tgan joyini bildiradi."
  },
  {
    "id": 634,
    "biletId": 64,
    "text": "Qizil avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Birinchi bo’lib",
      "Ikkinchi bo’lib",
      "Oxirgi bo’lib"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i64_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo'lning yo'nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o'zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 635,
    "biletId": 64,
    "text": "Svetoforning qaysi ishorasida avtomobil haydovchisi qayrilishni tugallashi mumkin?",
    "options": [
      "Qizilda",
      "Yashilda",
      "Istalganda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i64_5.webp",
    "explanation": "YHQ 15-bobi 102-bandiga asosan: Svetoforning ruxsat etuvchi ishorasida chorrahaga kirgan haydovchi, undan chiqishdagi svetofor ishorasidan qat’i nazar, belgilangan yo’nalishda harakatini davom ettirishi kerak. Biroq chorrahada haydovchining harakatlanayotgan yo’lida joylashgan svetoforlar oldida to’xtash chiziqlari (yoki 5.33 yo'l belgisi) bo’lsa, u har bir svetofor ishorasiga amal qilishi shart."
  },
  {
    "id": 636,
    "biletId": 64,
    "text": "Sanab o’tilgan hollarning qay birida qatnov qismining o’ng chetidan yoki yo’lning o’ng yoqasidan qayrilib olishga ruxsat etiladi?",
    "options": [
      "Tartibga solingan chorrahalarda",
      "Chorrahalardan tashqarida, agar qatnov qismining kengligi chetki chap holatdan qayrilib olish uchun yetarli bo’lmasa",
      "Tartibga solinmaydigan chorrahalarda, agar qayrilib olishni amalga oshirayotgan transport vositasi asosiy yo’lda bo’lsa"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 59-bandining ikkinchi xatboshisiga asosan: Chorrahadan tashqarida qayrilib olishda, agar qatnov qismining kengligi manyovrni chetki chap holatdan bajarish uchun yetarli bo’lmasa, uni qatnov qismining o’ng chetidan (o’ng yo’l yoqasidan) amalga oshirishga yo’l qo’yiladi. Bu holda haydovchi shu yo’nalishdagi va qarama-qarshi yo’nalishdagi transport vositalariga yo’l berishi shart."
  },
  {
    "id": 637,
    "biletId": 64,
    "text": "Transport vositasi texnik tavsifnomasida ko’rsatilgan yuqori tezlikdan oshirishi mumkinmi?",
    "options": [
      "Yo’llardan foydalanish uchun mas’ul bo’lgan idoralar tomonidan oshirilishi mumkin",
      "Aholi punktidan tashqaridagi yo’llarda oshirilishi mumkin. Bunday yo’l qismlarida \"yuqori tezlik cheklangan\" belgisi o’rnatiladi",
      "Oshirilishi mumkin emas"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 81-bandining birinchi xatboshisiga asosan, haydovchilarga quyidagilar taqiqlanadi: tezlikni mazkur transport vositasining texnik tavsifnomasida ko’rsatilgan eng yuqori tezlikdan oshirish."
  },
  {
    "id": 638,
    "biletId": 64,
    "text": "Avtomagistrallarda transport vositalarining atayin to’xtashi qaysi joylarda ruxsat etilgan?",
    "options": [
      "Yo’lning qatnov qismining chetki o’ng bo’lagida",
      "Yo’lning 100 metrdan ko’proq qismi ko’rinadigan va harakat bo’lagi soni to’rttadan ortiq bo’lgan joylarda",
      "To’xtab turish uchun \"To’xtab turish joyi\" yoki \"Dam olish joyi\" belgilari bilan belgilangan maxsus maydonchalarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining uchinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: 5.15 yoki 6.11 yo’l belgilari bilan belgilangan maxsus to'xtab turish maydonchalaridan boshqa joylarda to’xtash."
  },
  {
    "id": 639,
    "biletId": 64,
    "text": "Avtopoyezdning belgisi qanday holda yoqilgan bo’lishi kerak?",
    "options": [
      "Tunda yoki yetarli ko’rinmaydigan sharoitda harakat qilganda",
      "Faqat avtopoyezd harakat qilganda",
      "Avtopoyezd harakat qilganda, shuningdek, qorong’i vaqtda to’xtaganda va to’xtab turganida",
      "Faqat avtopoyezd yuk bilan harakat qilganda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 141-bandiga asosan: \"Avtopoezd\" taniqlik belgisi avtopoezd harakatlanayotganda, kunning qorong’i vaqtida, yo’lda to’xtash va to'xtab turish paytida ham yoqib qo’yilishi kerak."
  },
  {
    "id": 640,
    "biletId": 64,
    "text": "Ikkinchi daraja ta’mirlash yo’li bilan tiklangan shinalarni M1 toifadagi avtotranspor vositalariga o’rnatishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Avtomobilning har ikki o’qiga ruxsat etiladi",
      "Faqat orqa o’qiga ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 5-bo’limining 5.7.-bandiga asosan: 5.7. М1, M2, МЗ toifalarni 1 klassidagi avtotransport vositalarini oldingi o'qiga, МЗ toifani 2 va 3 klassidagi avtotransport vositalarini o'rta va orqa o'qlariga ikkinchi ta’mirlash klassi bo’yicha qayta tiklangan shinalar o'rnatilgan bo’lsa foydalanish taqiqlanadi."
  },
  {
    "id": 641,
    "biletId": 65,
    "text": "Ko’k avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Birinchi bo’lib",
      "Ikkinchi bo’lib",
      "Uchinchi bo’lib",
      "To’rtinchi bo’lib",
      "Oxirgi bo’lib"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i65_1.webp",
    "explanation": "YHQ 6-bobi 26-bandiga asosan: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi.\nYHQ 16-bobi 104-bandiga asosan: Teng ahamiyatga еда bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo’nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o'zaro amal qilishlari kerak."
  },
  {
    "id": 642,
    "biletId": 65,
    "text": "Qaysi belgi \"Bir tomonlama harakatli yo’lining oxiri\" deb ataladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i65_2.webp",
    "explanation": "YHQ 1-ilovasi 5-bo’limining oltinchi xatboshisiga asosan: 5.6. \"Bir tomonlama harakatli yo'lning oxiri\"."
  },
  {
    "id": 643,
    "biletId": 65,
    "text": "Bu yo’l belgisi nimani bildiradi?",
    "options": [
      "40 km/soatdan kam tezlikda harakatlanayotgan yakka, yon kajavasi bo’lmagan ikki g’ildirakli mototsikllar va velosipedlardan tashqari barcha mexanik transport vositalarini quvib o’tish taqiqlanadi",
      "Ruxsat etilgan to’la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillarida barcha transport vositalarini quvib o’tish taqiqlanadi, soatiga 40 kilometrdan kam tezlikda harakatlanayotgan transport vositasi, traktor, ot-arava, velosiped bundan mustasno"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i65_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining yigirma oltinchi xatboshisiga asosan: 3.22. \"Yuk avtomobillarida quvib o’tish taqiqlangan\". To'la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillarida barcha transport vositalarini quvib o’tish taqiqlanishini bildiradi. (soatiga 40 km dan kam tezlikda harakatlanayotgan transport vositasi, traktor, ot-arava, velosiped bundan mustasno)."
  },
  {
    "id": 644,
    "biletId": 65,
    "text": "Chorrahani ikkinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Ko’k avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i65_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak.\nYHQ 16-bobi 106-bandiga asosan: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda asosiy yo'lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo'llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo'llarda harakatlanayotgan haydovchilar ham o'zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 645,
    "biletId": 65,
    "text": "Ushbu chorrahada chapga burilishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i65_5.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining birinchi va sakkizinchi xatboshlariga asosan: 4.1.1. \"Harakatlanish to’g’riga\". 4.1.1 yo'l belgisi qatnov qismining qaysi kesishmasi oldiga o’rnatilsa, shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 646,
    "biletId": 65,
    "text": "Transport vositalarining tezligi texnik tavsifnomasiga yoki holatiga ko’ra 40 km/soatdan kam bo’lganda avtomagistral bo’ylab harakatlanishga ruxsat etiladimi?",
    "options": [
      "Ikkinchi tasmadan nariga o’tmaganda ruxsat etiladi",
      "Taqiqlanadi",
      "Agar \"Eng kam tezlik\" belgisi o’rnatilmagan bo’lsa ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandining birinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: piyodalar, uy hayvonlari, ot-aravalar, velosipedlar, individual harakatlanish vositalari, skuterlar, mopedlar, traktorlar va o’zi yurar avtomobillar, texnik tavsifnomasiga yoki holatiga ko’ra tezligi soatiga 40 kilometrdan kam bo’lgan transport vositalarining harakatlanishi."
  },
  {
    "id": 647,
    "biletId": 65,
    "text": "Bu joyda avtobusni quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i65_7.webp",
    "explanation": "YHQ 12-bobi 86-bandining to’rtinchi xatboshisiga asosan, quvib o’tish quyidagi hollarda taqiqlanadi: temir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda."
  },
  {
    "id": 648,
    "biletId": 65,
    "text": "Avariya ishoralari yoqilishi kerak:",
    "options": [
      "To’xtash taqiqlangan joylarda majburiy to’xtaganda",
      "Yo’l-transport hodisasi sodir bo’lganda",
      "Shatakka olishda (shatakka olingan transport vositasida)",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 50-bandiga asosan: Burilishni ko’rsatuvchi barcha yorug’lik ishoralarining bir vaqtda miltillashi avariya (xavf-xatar) ishorasi hisoblanadi.\nAvariya ishorasi quyidagi hollarda yoqilishi kerak:\nyo’l-transport hodisasi sodir bo’lganda;\nto’xtash taqiqlangan joylarda majburiy to’xtaganda;\nfara chiroqlari yorug’ligi haydovchining ko’zini qamashtirganda;\nshatakka olishda (shatakka olingan mexanik transport vositasida);\n“Bolalarni tashish” taniqlik belgilariga ega bo’lgan transport vositasiga bolalar chiqayotganda va undan tushayotganda.\nOldingi tahrirga qarang.\nTransport vositasi xavf tug’dirishi mumkin bo’lgan boshqa hollarda ham haydovchi yo’l harakati ishtirokchilarini ogohlantirish maqsadida avariya ishorasini yoqishi kerak."
  },
  {
    "id": 649,
    "biletId": 65,
    "text": "\"Reaksiya vaqti\" tushunchasi nimani bildiradi?",
    "options": [
      "Haydovchi xavfni ko’rgan paytdan aniq harakatlarni boshlaguncha o’tilgan vaqt",
      "Haydovchining tormoz berishni boshlagan paytdan transport vositasining to’la to’xtagunicha bo’lgan vaqtni"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Haydovchining reaksiya vaqti xavf-xatar ko’ringan paytdan to xavf-xatarni bartaraf qilish chorasi ko’rilgunga qadar vaqti tushuniladi. Haydovchining ahvoli va tajribasiga hamda haydovchi sharoitining og’irligiga bog’liq bo’lgan holda Би 0,5 dan 1,5 soniyagacha bo’lgan vaqtni tashkil qiladi."
  },
  {
    "id": 650,
    "biletId": 65,
    "text": "N2; N3; 03; 04 ; M2; M3 toifadagi avtotransport vositalarining (mikroavtobuslardan tashqari)orqa devorida yozilishi kerak:",
    "options": [
      "Transport vositasining tegishliligi haqida taniqlik belgisi",
      "Davlat raqam belgisi va harflari yozilishi kerak",
      "Taniqlik va raqam belgilari"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 29-bobi 175-bandining ikkinchi xatboshisiga asosan: Yuk avtomobillari, tirkamalar (yengil avtomobillar tirkamalaridan tashqari) va avtobuslar (mikroavtobuslardan tashqari) kuzovining orqa devoriga uning davlat raqam belgisi va harflari yozilishi kerak. Raqamning balandligi 300 millimetr, kengligi 120 millimetr, chizig’ining yo’g’onligi 30 millimetrdan kam bo’lmasligi, harflar balandligi esa raqam o’lchamlarining 2/3 qismiga teng bo’lishi kerak."
  },
  {
    "id": 651,
    "biletId": 66,
    "text": "Qanday hollarda quvib o’tish taqiqlanadi?",
    "options": [
      "Temir yo’l kesishmalarida",
      "Quvib yoki aylanib o’tayotgan transport vositalarini",
      "Tepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 86-bandiga asosan: Quvib o’tish quyidagi hollarda taqiqlanadi:\ntartibga solingan chorrahalarda;\ntartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;\nko’priklarda, yo’l o’tkazgichlarda, estakadalarda va ularning ostida;\npiyodalar o’tish joylarida;\ntemir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda;\nquvib yoki aylanib o’tayotgan transport vositalarini;\ntepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;\n3.20 va 3.22 yo’l belgilari ta’sir oralig’ida."
  },
  {
    "id": 652,
    "biletId": 66,
    "text": "Qaysi transport vositalarining haydovchilari to’xtab turish qoidasini buzdilar?",
    "options": [
      "\"А\" ва \"Б\"",
      "Faqat \"Г\"",
      "\"Б\" ва \"Г\"",
      "\"В\" ва \"Г\"",
      "\"Б\", \"В\" ва \"Г\""
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i66_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining o'n to’qqizinchi xatboshisiga asosan: 7.6.2. \"Transport vositasini to’xtab turish joyiga qo’yish usuli\". 7.6.2 trotuar yonidagi to'xtab turish joyiga yengil avtomobillar va mototsikllarni qo’yish usulini bildiradi."
  },
  {
    "id": 653,
    "biletId": 66,
    "text": "Qaysi transport vositalariga ushbu belgi o’rnatilgan yo’l bo’ylab harakatlanishga ruxsat etilgan?",
    "options": [
      "Mexanik transport vositalariga",
      "Barcha transport vositalariga",
      "Avtomobillar, avtobus hamda mototsikllar, elektromototsiklar, mopedlar va skuterlarga",
      "Yuqori tezligi 40 km/soatdan kam bo’lmagan transport vositalariga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i66_3.webp",
    "explanation": "YHQ 1-ilovasi 5-bo'limining to’rtinchi xatboshisiga asosan: 5.3. \"Avtomobillar uchun mo’ljallangan yo’l\". Faqat avtomobillar, avtobus hamda mototsikllar, elektromototsiklar, mopedlar va skuterlarning harakatlanishi uchun mo’ljallangan yo’lni bildiradi."
  },
  {
    "id": 654,
    "biletId": 66,
    "text": "Chorrahani birinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Qizil avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i66_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 655,
    "biletId": 66,
    "text": "Mazkur svetoforning qizil yoritgichida harakat taqiqlanadi:",
    "options": [
      "Faqat bir qatorda",
      "Qatnov qismining barcha kengligi bo’ylab",
      "Quvib o’tish bilan",
      "Svetofor qaysi tasma ustiga joylashtirilgan bo’lsa, o’sha tasma bo’yicha"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i66_5.webp",
    "explanation": "YHQ 7-bobi 35-bandiga asosan: Qatnov qismidagi harakat yo'nalishi qarama-qarshi tomonga o’zgarishi mumkin bo'lgan tasmalarida transport vositalarining harakatini tartibga solish uchun X-simon qizil ishorali va pastga yo’nalgan yo’naltirgich ko’rinishidagi yashil ishorali reversiv svetoforlar qo’llaniladi. Bu ishoralar qaysi tasma ustiga o’rnatilgan bo’lsa, unda harakatlanishni taqiqlaydi yoki ruxsat beradi. Ikki tomoni 1.9 chizig’i bilan belgilangan tasma ustiga o’rnatilgan ishoralari o'chirilgan reversiv svetofor shu tasmaga kirishni taqiqlaydi."
  },
  {
    "id": 656,
    "biletId": 66,
    "text": "Agar tegishli belgilar bilan belgilangan qiyaliklarda yuzma-yuz kelayotgan transportlarning o’tib ketishi qiyin bo’lsa, yo’l berish zarur:",
    "options": [
      "Pastlik tomon harakatlanayotgan transport vositasiga",
      "Belgilangan yo’nalishdagi transport vositasiga",
      "Balandlikka harakatlanayotgan transport vositasiga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i66_6.webp",
    "explanation": "YHQ 21-bobi 128-bandiga asosan: Yo’lning 1.13 ма 1.14 yo’l belgilari bilan belgilangan qiyaliklarida, qarama-qarshi yo’nalishlarda harakatlanishni qiyinlashtiradigan biron-bir to’siq bo'lsa, nishablikka harakatlanayotgan transport vositasining haydovchisi yo'l berishi kerak."
  },
  {
    "id": 657,
    "biletId": 66,
    "text": "Yo’lning ushbu qismida quvib o’tishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i66_7.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining o'n birinchi, o’ttiz oltinchi va o'ttiz yettinchi xatboshlariga asosan: 1.9 — reversiv harakat tashkil etilgan bo’laklarning chegarasini belgilaydi; reversiv harakatlanish amalga oshirilgan yo’llarda (reversiv svetofori o’chirilgan holatda) qarama-qarshi yo’nalishdagi transport oqimini ajratadi;\nReversiv svetofor yoqilgan paytda bir yo’nalishli tasmalarni ajratayotgan 1.9 chizig’ini istalgan tomondan bosib o’tishga ruxsat etiladi. Reversiv svetofor o’chirilganda, haydovchilar darhol 1.9 chizig’idan o’ngga qayta tizilishlari kerak.\nReversiv svetofor o’chirilgan bo’lsa, qarama-qarshi yo’nalishdagi transport oqimlarini ajratuvchi 1.9 chizig’ini bosib o’tish taqiqlanadi."
  },
  {
    "id": 658,
    "biletId": 66,
    "text": "Harakat tezligini tanlashda haydovchiga nima taqiqlanadi?",
    "options": [
      "Ushbu Qoidalarga muvofiq ravishda transport vositasiga o’rnatilgan taniqlik belgida ko’rsatilgan tezlikdan oshirish",
      "Keskin tormoz berish, agar bu harakatlanish xavfsizligini ta’minlash uchun talab qilinmasa",
      "Sanab o’tilgan ikkala harakatni amalga oshirish taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 81-bandiga asosan, haydovchilarga quyidagilar taqiqlanadi: tezlikni mazkur transport vositasining texnik tavsifnomasida ko’rsatilgan eng yuqori tezlikdan oshirish; tezlikni transport vositasiga o’rnatilgan \"Tezlik cheklangan\" taniqlik belgisida ko’rsatilganidan oshirish;\nzaruriyat bo’lmaganda juda past tezlikda harakatlanib, boshqa transport vositalariga xalaqit berish;\nyo’l-transport hodisasining oldini olish zaruriyati bo’lmaganda keskin tormoz berish."
  },
  {
    "id": 659,
    "biletId": 66,
    "text": "Qo’l jarohatlanganda jabrlanuvchining ko’ylagi, kiyimi qanday yechilsa to’g’ri bo’ladi?",
    "options": [
      "Kiyim-boshni yechishni jarohatlan qo’ldan boshlash, so’ng sog’ qo’lni bo’shatish",
      "Kiyim-boshni ikkala qo'ldan bir vaqtda yechishish",
      "Kiyim-boshni yechishni sog’ qo’ldan boshlash, so’ng jarohatlan qo’lni bo’shatish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Shikastlangan qol yoki oyoqni majburiy harakatga solmasdan kiyim yechish imkonini yaratish uchun avval shikastlanmagan, so’ngra shikastlangan qo'l yoki oyoqdan ehtiyotlik bilan yechiladi."
  },
  {
    "id": 660,
    "biletId": 66,
    "text": "Mopedlarni shatakka olishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Qattiq, qoplamasiz yo’l bo’ylab faqat kunning yorug’ vaqtida ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 168-bandining yettinchi xatboshisiga asosan, velosipedchilar va individual harakatlanish vositalarini boshqarayotgan shaxslarga quyidagilar taqiqlanadi: Velosipedlarni va individual harakatlanish vositalarini shatakka olish, shuningdek, ulardan shatakka olishda foydalanish taqiqlanadi (velosipedga mo’ljallangan tirkamalarni shatakka olish bundan mustasno)."
  },
  {
    "id": 661,
    "biletId": 67,
    "text": "Trotuar yoki piyodalar yo’lkasi bo’lmaganda, piyodalar velosiped yo’lkasi bo’ylab harakat qila oladilarmi?",
    "options": [
      "Harakat qila oladilar",
      "Agar velosipedlarning harakatlanishini qiyinlashtirmasa, harakat qila oladilar",
      "Harakat qila olmaydilar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 15-bandining ikkinchi xatboshisiga asosan: Trotuar, piyodalar yo’lkasi, yo’l yoqasi bo'lmasa yoki ulardan yurishning imkoniyati bo'lmagan hollarda piyodalar velosiped yo’lkasidan yoki qatnov qismining chetidan (ajratuvchi bo'lagi bor yo'llarda qatnov qismining tashqi chetidan) bir qator bo’lib yurishlari mumkin."
  },
  {
    "id": 662,
    "biletId": 67,
    "text": "Bunday avtopoyezdning ko’prikdan o’tishiga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i67_2.webp",
    "explanation": "YHQ 1-ilovasi 3-bo’limining o'n uchinchi xatboshisiga asosan: 3.11. \"Vazn cheklangan\". Haqiqiy umumiy vazni belgida ko’rsatilganidan ortiq bo'lgan transport vositalarining, shuningdek transport vositalari tarkiblarining harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 663,
    "biletId": 67,
    "text": "Qaysi belgi bilan xavfli yo’lning uzunligi ko’rsatiladi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i67_3.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining beshinchi xatboshisiga asosan: 7.2.1. \"Ta’sir oralig’i\". Ogohlantiruvchi belgilar bilan belgilangan xavfli joyning uzunligini yoki taqiqlovchi va axborot-ko’rsatkich belgilarining ta’sir oralig'ini ko'rsatadi."
  },
  {
    "id": 664,
    "biletId": 67,
    "text": "Chorrahani qizil avtomobil nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Ikkinchi bo’lib, ayni vaqtda ko’k bilan birga",
      "Ikkinchi bo’lib, sariqdan keyin",
      "Uchinchi bo’lib, yashil, sariqdan keyin"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i67_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 665,
    "biletId": 67,
    "text": "Mazkur svetofor quyidagi transport vositalari harakatini tartibga solish uchun qo’llaniladi:",
    "options": [
      "Tramvaylarga va avtobuslarga",
      "Faqat tramvaylarga",
      "Tramvaylarga, shuningdek, alohida tasmadan harakatlanadigan belgilangan yo’nalishdagi boshqa transport vositalarini harakatini tartibga soladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i67_5.webp",
    "explanation": "YHQ 7-bobi 36-bandiga asosan: Tramvaylarning hamda maxsus ajratilgan tasma bo'ylab harakatlanayotgan yo’nalishli transport vositalarining harakatlanishini tartibga solish uchun \"T\" — harfi ko’rinishida joylashgan to’rtta doirasimon oq rang ishorali svetoforlar qo’llanilishi mumkin. Yuqoridagi bir yoki bir nechta va pastki ishora bir vaqtning o’zida yonganda, harakatlanishga ruxsat etiladi. Ulardan chapdagisi chapga, o’ngdagisi o'ng tomonga burilishga, o’rtadagisi to’g’riga yurishga ruxsat beradi. Pastdagi ishora o’chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi."
  },
  {
    "id": 666,
    "biletId": 67,
    "text": "Qoidalarning qanday hollarida tumanga qarshi orqa chiroqlarni qo’llashga ruxsat beriladi?",
    "options": [
      "Transport vositasi bilan shatakka olganda",
      "Saf tarkibida harakatlanganda",
      "Kunning qorong’i vaqtida",
      "Yetarlicha ko’rinmaydigan sharoitda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 140-bandiga asosan: Tumanga qarshi orqa chiroqlarni faqat yetarlicha ko’rinmaydigan sharoitda qo’llash mumkin. Tumanga qarshi orqa chiroqlarni to'xtash chiroqlari(stop-signal)ga ulash taqiqlanadi."
  },
  {
    "id": 667,
    "biletId": 67,
    "text": "Yuk avtomobili haydovchisi rasmda ko’rsatilgan holatda maxsus tovush ishorasini eshitib yoki yalt-yalt etuvchi chiroq-mayoqchani ko’rib nima qilishi kerak?",
    "options": [
      "Qatnov qismidagi o’z bo’lagi bo’ylab harakatni davom ettirishi",
      "Haydovchi maxsus tovushli ishoralarini yoqqan holda yaqinlashib kelayotgan transport vositalariga yo’l berishlari, zarur bo’lgan hollarda ularniing to'siqsiz o’tib ketishlari uchun o’zlarini yo’lning o’ng tomoniga olib to’xtashlari shart"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i67_7.webp",
    "explanation": "YHQ 6-bobi 26-bandiga asosan: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi."
  },
  {
    "id": 668,
    "biletId": 67,
    "text": "Qatnov qismiga bevosita tutashgan trotuar chetida unga to’la yoki qisman chiqish bilan to’xtab turishga ruxsat etiladimi?",
    "options": [
      "Faqat yengil avtomobillar, mototsikllar, elektromototsikllar, mopedlar, skuterlar, velosipedlar va individual harakatlanish vositalariga to’xtab turishga tegishli yo’l belgilari o’rnatilgan joylarda ruxsat etiladi",
      "Ruxsat etilgan to’la vazni 3,5 tonnadan ziyod bo’lgan faqat yuk avtomobillariga taqiqlanadi",
      "Barcha transport vositalariga taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 89-bandiga asosan: Qatnov qismiga chegaradosh trotuar chetida faqat yengil avtomobillar, mototsikllar, elektromototsikllar, mopedlar, skuterlar, velosipedlar va individual harakatlanish vositalariga to’xtab turishga 5.15 yo’l belgisi bilan birga 7.6.2, 7.6.3, 7.6.6 — 7.6.9 qo’shimcha axborot belgilaridan biri o’rnatilgan joylarda ruxsat etiladi."
  },
  {
    "id": 669,
    "biletId": 67,
    "text": "Ishqalanish koeffitsiyentiga shinalarni siyqalanib ketgan protektori qanday ta’sir qiladi?",
    "options": [
      "Ishqalanish koeffitsiyenti oshadi",
      "Ishqalanish koeffitsiyenti o'zgarmaydi",
      "Ishqalanish koeffitsiyenti kamayadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Protektor qatlamining yeyilishi bilan birga g’ildirakning yo'l bilan tishlashishi yomonlashib, tormoz berayotganda yoki tezlikni oshirayotganda avtomobilning sirpanish ehtimoli ko'payadi. Protektori butunlay yeyilib ketgan shinaning yo’l bilan tishlashish koeffitsienti yangi shinaning ushbu koeffitsientidan ikki barobar kam. Shuning uchun shinasi yeyilgan avtomobildan foydalanish mumkin emas va yo'l harakati qoidalarida taqiqlangan."
  },
  {
    "id": 670,
    "biletId": 67,
    "text": "Qanday hollarda transport vositasidan foydalanish ruxsat etiladi?",
    "options": [
      "Transport vositasining tashqi yuzasiga qonun xujjatlariga mos kelmaydigan va harakat xavfsizligiga salbiy ta’sir ko’rsatadigan turli xil tasvirlar tushurilgan bo’lsa",
      "Gazli ta’minlash tizimi bilan jihozlangan avtobus va avtomobil gaz ballonlarining tashqi tomonida ko’rsatilgan texnik ko’rsatgichlar (parametrlar) texnik pasportdagi ma’lumotlarga (ko’rsatkichlarga) mos kelsa, oxirgi va rejalashtirilgan tekshirishlarning sanasi bo’lsa",
      "Ishlab chiqaruvchi korxona tomonidan ko’zda tutilmagan hollarda kuzov (kabina) bir necha xil rangga bo’yalgan bo’lsa (maxsus transport vositalari bundan mustasno)"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 7-bo'limining 7.19.-bandiga asosan: 7.19. Gazli ta’minlash tizimi bilan jihozlangan avtobus va avtomobil gaz ballonlarining tashqi tomonida ko’rsatilgan texnik ko’rsatgichlar texnik pasportdagi ma’lumotlarga mos kelmasa, oxirgi va rejalashtirilayotgan tekshiruvlarning sanasi bo'lmasa."
  },
  {
    "id": 671,
    "biletId": 68,
    "text": "Piyodalar qatnov qismining chetidan qanday yurishlari kerak?",
    "options": [
      "Qatnov qismining chetidan transport vositalarining harakatiga qarama-qarshi",
      "Qatnov qismining chetidan transport vositalarining harakati bo’ylab",
      "Har qanday yo’nalishda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 15-bandining uchinchi xatboshisiga asosan: Qatnov qismining chetida harakatlanayotgan piyodalar transport vositalarining harakatiga qarama-qarshi yo’nalishda yurishlari kerak."
  },
  {
    "id": 672,
    "biletId": 68,
    "text": "Bu belgilar nimani bildiradi?",
    "options": [
      "\"Nogiron\" taniqlik belgisi bo’lgan avtomobillar uchun 30 metrdan keyin to’xtab turish joyiga kelishini",
      "Motokajavalardan tashqari transport vositalari uchun 30 metrli hududdagi to’xtab turish joyini",
      "\"Nogiron\" taniqlik belgisi bo’lgan motokajava va avtomobillar uchun 30 metrli hududdagi to’xtab turish joyini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i68_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo'limining beshinchi va o’ttizinchi xatboshlariga asosan: 7.2.1. \"Ta’sir oralig'i\". Ogohlantiruvchi belgilar bilan belgilangan xavfli joyning uzunligini yoki taqiqlovchi va axborot-ko’rsatkich belgilarining ta’sir o’ralig’ini ko'rsatadi. 7.17. \"Nogironlar\". 5.15 belgisi bilan qo’llaniladi. To’xtab turish joyi (yoki uning bir qismi) ushbu Qoidalarning 176-bandiga muvofiq \"Nogiron\" taniqlik belgisi o'rnatilgan transport vositalari uchun ajratilganligini ko'rsatadi."
  },
  {
    "id": 673,
    "biletId": 68,
    "text": "Ko’rsatilgan belgilardan qaysi biri orqaga harakatlanishni taqiqlaydi?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i68_3.webp",
    "explanation": "YHQ 19-bobi 121-bandining beshinchi xatboshisiga asosan, avtomagistrallarda quyidagilar taqiqlanadi: orqaga harakatlanish."
  },
  {
    "id": 674,
    "biletId": 68,
    "text": "Avtomobillar chorrahani quyidagi tartibda kesib o’tadi:",
    "options": [
      "Qizil chorrahaga chiqadi va ko'kni o’tkazib yuborish uchun to’xtaydi; yashil; ko'k, va qizil burilishni tugallaydi",
      "Yashil; ko’k; qizil",
      "Qizil; ko’k; yashil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i68_4.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 675,
    "biletId": 68,
    "text": "O’tish navbati qaysi javobda to’g’ri ko’rsatilgan?",
    "options": [
      "Mototsikl, avtobus, yuk avtomobili",
      "Avtobus, mototsikl, yuk avtomobili",
      "Avtobus, yuk avtomobili, mototsikl"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i68_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 676,
    "biletId": 68,
    "text": "Yengil avtomobilning oldingi o’rindig’ida bolalarni ushlab turuvchi maxsus qurilma o’rnatilmagan bo’lsa, ularni tashish qaysi yoshdan ruxsat etiladi?",
    "options": [
      "5 yosh",
      "6 yosh",
      "8 yosh",
      "10 yosh",
      "12 yosh"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 159-bandining beshinchi xatboshisiga asosan, odamlarni tashish quyidagi hollarda taqiqlanadi: 12 yoshga to’lmagan bolalarni mototsiklning orqa o’rindig’ida, shuningdek bolalarni ushlab turuvchi maxsus qurilma o’rnatilmagan transport vositasining old o’rindig’ida."
  },
  {
    "id": 677,
    "biletId": 68,
    "text": "Agar haydovchi transport vositasining eshigini ochishga va undan chiqishga qaror qilsa, unga nima taqiqlanadi?",
    "options": [
      "Harakatlanish serqatnov bo’lgan yo’llarda turgan transport vositasining eshigini ochish taqiqlanadi",
      "Harakatlanish serqatnov bo’lgan yo’llarda haydovchi eshigini ochish taqiqlanadi. O’z joyidan yo’lovchi eshigi orqali chiqadi",
      "Turgan transport vositasining eshigini ochish, agar bu harakatlanishning boshqa ishtirokchilariga halaqit bersa va xavf tug’dirsa taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 94-bandiga asosan: Agar boshqa yo’l harakati qatnashchilarining harakatiga xalaqit beradigan bo’lsa yoki xavf tug’dirsa, transport vositasining eshiklarini ochish taqiqlanadi."
  },
  {
    "id": 678,
    "biletId": 68,
    "text": "Sanab o’tilgan qaysi joylarda transport vositalarining to’xtashi va to’xtab turishi taqiqlanadi?",
    "options": [
      "Piyodalar o’tish joylarida",
      "Tramvay yo’llarida",
      "Tramvay yo’llariga bevosita yaqinroqda, agar bu tramvaylarning harakatiga to’sqinlik qilsa",
      "Barcha ko’rsatilgan joylarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandining birinchi va o'ninchi xatboshlariga asosan, quyidagi joy va holatlarda to'xtash taqiqlanadi: tramvay yo'llarida, shuningdek bevosita ularga yaqinroqda tramvaylar harakatlanishiga xalaqit beradigan bo'lsa. transport vositasi svetofor ishoralari, yo'l belgilarini boshqa haydovchilardan to'sib qo’yadigan, boshqa transport vositalarining harakatlanishiga (kirish va chiqishiga) imkon qoldirmaydigan yoki piyodalarning harakatiga xalaqit beradigan joylarda.\npiyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda;"
  },
  {
    "id": 679,
    "biletId": 68,
    "text": "Tik uzun qiyaliklarda ajratilgan uzatma bilan avtomobilni uzoq tormozlashning qanday xavfi bor?",
    "options": [
      "Shinalarning shikastlanishi ortadi",
      "Ulagich qismlarining shikastlanishi ortadi",
      "Tormoz qiziydi va ishdan chiqadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Tik nishablikda uzatma va ilashish mexanizmini ajratgan holatda uzoq tormoz berish xavfi tormoz mexanizmlarining qizib ketishi, tormozlanish samarasining kamayishi va uning ishdan chiqishidadir."
  },
  {
    "id": 680,
    "biletId": 68,
    "text": "Bolalarni tashishda transport vositasi qaysi taniqlik belgisi bilan belgilanadi?",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i68_10.webp",
    "explanation": "YHQ 29-bobi 176-bandining uchinchi xatboshisiga asosan: \"Bolalar guruhini tashish\" — bolalar guruhini tashkiliy tashishda, transport vositasining old va orqa tomonlariga qizil hoshiyali, ichiga 1.21 yo'l belgisidagi bolalar timsolining tasviri tushirilgan, sariq rangdagi, tomonlari teng bo’lgan to'rtburchak (kvadrat) ko’rinishidagi belgi. To’rtburchakning tomonlari 250 — 300 millimetrgacha, hoshiyaning kengligi to’rtburchak tomonining 1/10 qismiga teng bo’lishi kerak."
  },
  {
    "id": 681,
    "biletId": 69,
    "text": "To’xtash va to’xtab turish quyidagi joylarda taqiqlanadi:",
    "options": [
      "Temir yo’l kesishmalarida",
      "Piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda",
      "Piyodalarning harakatiga xalaqit beradigan joylarda",
      "Sanab o’tilgan barcha joylarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandining ikkinchi, beshinchi va o'ninchi xatboshlariga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: tunnellarda, temir yo'l kesishmalarida;\npiyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda;\ntransport vositasi svetofor ishoralari, yo'l belgilarini boshqa haydovchilardan to'sib qo’yadigan, boshqa transport vositalarining harakatlanishiga (kirish va chiqishiga) imkon qoldirmaydigan yoki piyodalarning harakatiga xalaqit beradigan joylarda."
  },
  {
    "id": 682,
    "biletId": 69,
    "text": "Qaysi transport vositasining haydovchisi to’xtab turish qoidasini buzdi?",
    "options": [
      "Yengil avtomobil haydovchisi",
      "Mototsikl haydovchisi",
      "Yuk avtomobili haydovchisi",
      "Barcha transport vositalarining haydovchilari"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i69_2.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining o'n ikkinchi va o’n uchinchi xatboshlariga asosan: 7.4.1. \"Transport vositasining turi\". Belgining ta’siri joriy etilgan transport vositalari turini ko’rsatadi. 7.4.1 belgi bilan o'rnatilgan yo'l belgisining ta’siri yuk tashuvchi, shu jumladan, tirkamali, to'la vazni 3,5 tonnadan ortiq bo'lgan transport vositalariga tatbiq etiladi."
  },
  {
    "id": 683,
    "biletId": 69,
    "text": "Ko’rsatilgan yo’l belgisi qaysi transport vositalariga harakatlanishni taqiqlaydi?",
    "options": [
      "Barcha mexanik transport vositalariga",
      "Faqat yuk avtomobillariga",
      "Barcha avtomobillarga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i69_3.webp",
    "explanation": "YHQ 1-ilovasi 3-bo'limining to’rtinchi xatboshisiga asosan: 3.3. \"Mexanik transport vositalarining harakatlanishi taqiqlangan\".\nYHQ 1-bobi 6-bandining o’n beshinchi xatboshisiga asosan: Mexanik transport vositasi — dvigatel bilan harakatga keltiriladigan transport vositasi (mopeddan tashqari). Bu atama barcha traktor va o’ziyurar moslamalarga ham taalluqlidir."
  },
  {
    "id": 684,
    "biletId": 69,
    "text": "Chorrahani ikkinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Qizil avtomobil",
      "Ko’k avtomobil, ayni vaqtda sariq bilan birga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i69_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandiga asosan: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 685,
    "biletId": 69,
    "text": "Transport vositalari chorrahani quyidagi tartibda kesib o’tadi:",
    "options": [
      "Yengil avtomobil, avtobus, tramvay",
      "Tramvay, avtobus, yengil avtomobil",
      "Tramvay, yengil avtomobil, avtobus"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i69_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo'nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi."
  },
  {
    "id": 686,
    "biletId": 69,
    "text": "Egiluvchan ulagichda shatakka olinganda qanday yuqori tezlik bilan harakatlanishga ruxsat etilgan?",
    "options": [
      "70 km/s",
      "60 km/s",
      "50 km/s",
      "40 km/s",
      "30 km/s"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 80-bandining uchinchi xatboshisiga asosan, har qanday yo’llarda: mexanik transport vositalarini shatakka olgan transport vositalariga tezlikni soatiga 50 kilometrdan oshirmasdan harakatlanishga ruxsat etilgan."
  },
  {
    "id": 687,
    "biletId": 69,
    "text": "Qaysi rasmda haydovchi chapga burilish haqida ogohlantirish ishorasini bermoqda?",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i69_7.webp",
    "explanation": "YHQ 8-bobi 45-bandining ikkinchi xatboshisiga asosan: Chapga burilish (qayrilib olish)ni bildiruvchi ishoraga chap qo’lni yonga uzatish yoki o'ng qo’lni tirsakdan to'g’ri burchak ostida bukib, yuqoriga ko’tarish mos keladi."
  },
  {
    "id": 688,
    "biletId": 69,
    "text": "Qayrilib olish quyidagi hollarda taqiqlanadi:",
    "options": [
      "Piyodalar o’tish joylarida va tunnellarda",
      "Ko’priklarda, yo’l o’tkazgichlarda, estakadalarda va ularning ostida",
      "Temir yo’l kesishmalarida",
      "Loaqal bir yo’nalishda yo’l 100 metrdan kamroq ko’ringanda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 62-bandiga asosan: Quyidagi joylarda qayrilib olish taqiqlanadi:\npiyodalarning o’tish joylarida;\ntunnellarda;\nko’priklar, yo’l o’tkazgichlar, estakadalar va ularning ostida (tegishli yo’l belgilari bilan bunday manyovrni bajarish ruxsat berilgan yo’l qismlari bundan mustasno);\ntemir yo’l kesishmalarida;\nyo’lning ko’rinishi biror-bir yo’nalishda 100 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 689,
    "biletId": 69,
    "text": "Qornidan yopiq jarohat olgan jabrlanuvchi qanday tashiladi?",
    "options": [
      "Yonboshi yoki orqasiga yotqizilgan holatda, lat yegan joyga issiq grelka qo’yiladi",
      "Yotqizilgan holatda, lat yegan joyiga sovuq narsa (muz, malham) qo’yiladi",
      "Yarim o’tkazilgan holatda, tizzalari tanaga yaqinlashtiriladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Qorin bo’shlig'ining yopiq jarohatlari hollarida gavdaning holati oyoqlarni tizzalaridan bukib, yon tarafga qarab yotiladi. Qorin qismiga muz xaltachasi qo’yiladi."
  },
  {
    "id": 690,
    "biletId": 69,
    "text": "Spidometr jihozlari tamg’alanmagan transport vositalaridan foydalanishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi",
      "Faqat xususiy egalariga tegishli transport vositalarga hamda mototsikllar va mopedlarga ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-ilovasi 7-bo’limining 7.6.-bandiga asosan: 7.6. Spidometr qurilmasi nosoz va tamg’alanmagan (shaxsiy transport vositalari, mototsikl, elektromototsikl, skuter va mopedlardan tashqari) bo’lsa foydalanish taqiqlanadi."
  },
  {
    "id": 691,
    "biletId": 70,
    "text": "Qaysi transport vositasining haydovchisi quvib o’tishni to’g’ri bajarmoqda?",
    "options": [
      "Yashil avtomobil haydovchisi",
      "Ko’k avtomobil haydovchisi",
      "Ikkala haydovchi to’g’ri bajarmoqda",
      "Ikkala haydovchilarga quvib o’tish taqiqlangan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i70_1.webp",
    "explanation": "YHQ 10-bobi 66-bandiga asosan: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 yo’l chizig’i bilan belgilanganidan tashqari) uchta tasmali yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta qatorga faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap qatorni egallash taqiqlanadi."
  },
  {
    "id": 692,
    "biletId": 70,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Traktor haydovchisi",
      "Avtobus haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i70_2.webp",
    "explanation": "YHQ 1-ilova 2.7 bandi: 2.7 \"Ro’paradagi harakatlanishga nisbatan imtiyoz\". Yo'lning tor qismida harakatlanishda haydovchi ro’paradan kelayotgan transport vositasiga nisbatan imtiyozga egaligini bildiradi."
  },
  {
    "id": 693,
    "biletId": 70,
    "text": "Belgi ostidagi qo’shimcha axborot belgisi nimani anglatadi?",
    "options": [
      "Yo’lning tor qismi uzunligini",
      "Belgidan yo’lning tor qismigacha bo’lgan masofani",
      "Tor qismini aylanib o’tish joyigacha masofani"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i70_3.webp",
    "explanation": "YHQ 1-ilovasi 7-bo’limining ikkinchi xatboshisiga asosan: 7.1.1. \"Ob’ektgacha bo’lgan masofa\". Belgidan yo’lning xavfli joyi, yo'l harakatiga tegishli cheklovlar kiritiladigan joyi yoki harakat yo’nalishi bo'yicha oldindagi muayyan joygacha bo'lgan masofani ko’rsatadi."
  },
  {
    "id": 694,
    "biletId": 70,
    "text": "Chorrahani ikkinchi bo’lib kim kesib o’tadi?",
    "options": [
      "Yashil avtomobil",
      "Qizil avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i70_4.webp",
    "explanation": "YHQ 16-bobi 104-bandining birinchi xatboshisiga asosan: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak."
  },
  {
    "id": 695,
    "biletId": 70,
    "text": "Qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Mototsikl haydovchisi",
      "Yuk avtomobili haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i70_5.webp",
    "explanation": "YHQ 16-bobi 105-bandiga asosan: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 696,
    "biletId": 70,
    "text": "Mazkur tik chiziq nimani bildiradi?",
    "options": [
      "Yo’lning kichik radiusli burilishlardagi yo’l chetiga o’rnatilgan to’siqlarning yon yuzalarini bildiradi",
      "Boshqa joylardagi to’siqlarning yon yuzalarini bildiradi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i70_6.webp",
    "explanation": "YHQ 2-ilovasi 2-bo’limining yettinchi xatboshisiga asosan: 2.6 — boshqa joylardagi to’siqlarning yon yuzalarini bildiradi."
  },
  {
    "id": 697,
    "biletId": 70,
    "text": "To’xtash va to’xtab turish quyidagi hollarda taqiqlangan:",
    "options": [
      "Yo’lning xavfli burilishlarida va qatnov qismida ko’rinish masofasi 100 metrdan kam bo’lgan yo’l do’ngliklari yaqinida",
      "Bir yo’nalishda harakatlanish uchun uchtadan kam tasmaga ega bo’lgan ko’prik, yo’l o’tkazgich va estakadalarning ustida",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandining uchinchi va yettinchi xatboshlariga asosan, quyidagi joy va holatlarda to’xtash taqiqlanadi: bir yo'nalishda harakatlanish uchun uchtadan kam bo’lagi bo’lgan ko'prik, yo'l o’tkazgich va estakada hamda ularning ostida (tegishli yo’l belgilari bilan to'xtab turish ruxsat berilgan yo’l qismlari bundan mustasno);\nqatnov qismida ko’rinish masofasi 100 metrdan kam bo’lgan yo’l do’ngliklari yaqinida va xavfli burilishlarda;."
  },
  {
    "id": 698,
    "biletId": 70,
    "text": "Qishloq xo’jalik ishlari olib boriladigan dalada yuk avtomobili va traktorning harakat trayektoriyasi kesishadi. Kimga yo’l berishi kerak?",
    "options": [
      "Yuk avtomobili haydovchisi traktor haydovchisiga",
      "Traktor haydovchisi yuk avtomobili haydovchisiga",
      "O’ng tomonidan yaqinlashayotgan transport vositasi haydovchisiga",
      "O’ng tomondagi haydovchi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 60-bandiga asosan: Transport vositalarining harakat yo’nalishlari kesishadigan va o’tish navbati Qoidalarda nazarda tutilmagan hollarda haydovchi o'ng tomondan yaqinlashib kelayotgan transport vositasiga yo'l berishi kerak."
  },
  {
    "id": 699,
    "biletId": 70,
    "text": "Transport vositasini tik qiyaliklarda uzatma ajratilgan holatda tushishga ruxsat etiladimi?",
    "options": [
      "Agar avtomobil gidrovakuum kuchaytirgichli tormozlar bilan jihozlangan bo’lsa tavsiya etiladi",
      "Agar yo’l yaxshi holatda bo’lsa va uzoq ko’rinib tursa tavsiya etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 21-bobi 130-bandiga asosan: Yo'lning 1.13 yo’l belgisi bilan belgilangan qismida uzatma va ilashish mexanizmi (ssepleniye) ajratilgan holatda harakatlanish taqiqlanadi."
  },
  {
    "id": 700,
    "biletId": 70,
    "text": "Qoidalar transport vositalarining harakatlanishni davom ettirishni qanday hollarda taqiqlaydi?",
    "options": [
      "Kuzov (kabina) qismlari va bo’yog’iga tashqi tomondan anchagina shikast yetgan bo’lsa",
      "Ulagich moslamasi nosoz bo’lsa (avtopoyezd tarkibida)",
      "Ressoralarning o'zak qatlami yoki markaziy bolti shikastlansa"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandining uchinchi xatboshisiga asosan, haydovchiga quyidagilar taqiqlanadi: tormoz tizimi, rul boshqaruvi ishlamayotgan, ulagich moslamasi (avtopoyezd tarkibida) nosoz bo’lgan, sutkaning qorong’i vaqtida yoki ko’rinish cheklangan vaziyatlarda yonmaydigan fara chiroqlari va orqa gabarit fara chiroqlari, yomg’ir yoki qor yog'ayotgan vaqtda oyna tozalagich ishlamaydigan transport vositasini boshqarish."
  },
  {
    "id": 701,
    "biletId": 71,
    "text": "Qaysi hollarda yo’lning harakatlanish bo’lagini ajratuvchi uzuq-uzuq chiziqni bosib o’tishingiz mumkin?",
    "options": [
      "Faqat qayta tizilishda",
      "Yo’lda boshqa transport vositalari bo’lmasa",
      "Barcha sanab o’tilgan hollarda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 70-bandi: Agar qatnov qismi yo’l chiziqlari bilan tasmalarga ajratilgan bo’lsa, transport vositalarining harakatlanishi qat’iy ravishda belgilangan tasmalarda amalga oshirilishi kerak. Faqat qayta tizilishda uzuq-uzuq chiziqlarni bosib o’tishga ruxsat etiladi."
  },
  {
    "id": 702,
    "biletId": 71,
    "text": "Ushbu ko’rsatilgan holatda mototsikl haydovchisi Sizga yo’l berishi kerakmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i71_2.webp",
    "explanation": "YHQ 9-bobi 61-bandi: Sekinlashish bo’lagi bor bo’lgan yo’lda burilmoqchi bo’lgan haydovchi o’z vaqtida ushbu tasmaga qayta tizilishi va tezlikni faqat unda kamaytirishi kerak.\nYo’lga chiqish joyida tezlashish bo’lagi bo’lsa, haydovchi unda harakatlanishi va qo’shni tasmada harakatlanayotgan transport vositalariga yo’l berib, transport oqimiga qo’shilishi kerak."
  },
  {
    "id": 703,
    "biletId": 71,
    "text": "Yo’lda \"STOP\", yozuvi ko’rinishdagi yo’l chizigi nimani bildiradi?",
    "options": [
      "Tartibga solingan chorrahada to’xtash chizig’iga yaqinlashayotganligi xaqida ogohlantiradi",
      "To’xtash chizig’i va \"To’xtamasdan harakatlanish taqiqlanadi\" yo’l belgisi o’rnatilgan chorrahaga yaqinlashayotganligini bildiradi",
      "\"Yo’l bering\" yo’l belgisiga yaqinlashilayotganligini bildiradi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2 ilova: 1.21 (\"STOP\" — To’xtang! yozuvi) — 2.5 belgisi bilan birga qo’llanilganda haydovchini 1.12 chizig’iga yaqinlashayotganligi haqida ogohlantiradi."
  },
  {
    "id": 704,
    "biletId": 71,
    "text": "Sanab o’tilgan qaysi hollarda egiluvchan ulagichda shatakka olish taqiqlanadi?",
    "options": [
      "Faqat tog’li yo’llarda",
      "Kunning qorong’i vaqtida va yetarlicha ko’rinmaslik sharoitida",
      "Yo’l yaxmalak, sirpanchiq bo’lgan xollarda",
      "Barcha sanab o’tilgan hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandi: Shatakka olish quyidagi holatlarda taqiqlanadi: yo'l yaxmalak, sirpanchiq bo'lgan hollarda egiluvchan ulagichda."
  },
  {
    "id": 705,
    "biletId": 71,
    "text": "Ushbu yo’l nechta harakatlanish tasmasiga ega?",
    "options": [
      "Bitta harakatlanish tasmasiga",
      "Ikkita harakatlanish tasmasiga",
      "Uchta harakatlanish tasmasiga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i71_5.webp",
    "explanation": "YHQ umumiy qoidalar: Harakatlanish bo’lagi — avtomobillarning bir qator bo’lib harakatlanishi uchun yetarlicha keng bo’lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo’l qatnov qismining har qanday bo’ylama bo’lagi."
  },
  {
    "id": 706,
    "biletId": 71,
    "text": "Siz chorrahada chapga burilmoqchisiz. Ushbu vaziyatda Siz kimga yo’l berasiz?",
    "options": [
      "Faqat avtobusga",
      "Hech biriga",
      "Faqat yengil avtomobilga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i71_6.webp",
    "explanation": "YHQ 16-bobi 106-bandi: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak.\nIkkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 707,
    "biletId": 71,
    "text": "Svetoforning yashil miltillovchi ishorasi nimani bildiradi?",
    "options": [
      "Harakatga ruxsat beradi va tez orada taqiqlovchi ishora yonishi to’g’risida axborot beradi",
      "Harakatni davom ettirishni taqiqlaydi",
      "Svetofor nosozligini"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 31-bandi: miltillovchi yashil ishora ham harakatlanishga ruxsat beradi va uning ta’sir vaqti tugayotganligi hamda Ко’р o'tmay taqiqlovchi ishora yonishi haqida axborot beradi."
  },
  {
    "id": 708,
    "biletId": 71,
    "text": "Siz chorrahada to’g’riga o’tmoqchisiz. Ushbu vaziyatda Sizning harakatingiz?",
    "options": [
      "Qizil avtomobil yo’l berayotganiga ishonch xosil qilib chorrahadan birinchi o’tish",
      "Chorrahaga birinchi kirgan qizil avtomobilga yo’l berish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i71_8.webp",
    "explanation": "YHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 709,
    "biletId": 71,
    "text": "Ushbu belgilardan qaysi biri bir tomonlama harakat tashkil qilingan yo’lning boshida o’rnatiladi?",
    "options": [
      "\"b\" va \"d\"",
      "Faqat \"b\"",
      "Faqat \"a\"",
      "\"b\" yoki \"c\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i71_9.webp",
    "explanation": "YHQ 1 ilova: 5.5 \"Bir tomonlama harakatli yo'l\". Transport vositalari butun kenglik bo’yicha bir yo'nalishda harakatlanadigan yo'l yoki qatnov qismini bildiradi."
  },
  {
    "id": 710,
    "biletId": 71,
    "text": "Haydovchi ushbu joyda avtomobilni to’xtab turish uchun qo’yishiga ruxsat etiladimi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i71_10.webp",
    "explanation": "YHQ 13-bobi 91-bandi: Quyidagilarda to'xtash taqiqlanadi: qatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 711,
    "biletId": 72,
    "text": "Ko’rsatilgan yo’l belgilaridan qaysi biri faqat yo’l qoplamasi nam bo’lganda ta’sir etadi?",
    "options": [
      "Faqat \"a\" va \"b\"",
      "Faqat \"a\"",
      "Barchasi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i72_1.webp",
    "explanation": "YHQ 1 ilova: 7.16. \"Nam qoplama\". Belgi qatnov qismining qoplamasi nam bo'lgan vaqtda ta’sir etishini ko'rsatadi."
  },
  {
    "id": 712,
    "biletId": 72,
    "text": "Sanab o’tilgan qaysi holatda transport vositasidan foydalanishga ruxsat etiladi?",
    "options": [
      "Tashqi yoritgich asboblari ifloslangan bo’lsa",
      "Yorituvchi chiroq nurining yo’nalishi buzilgan bo’lsa",
      "Old qismida — oq yoki sariq rangli tumanga qarshi faralar o’rnatilgan bo’lsa"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 3.2. Yorituvchi chiroq nurining yo'nalishi buzilgan bo’lsa.\n3.3. Agar tashqi yoritqichlar va nur qaytargichlar belgilangan tartibda ishlamayotgan yoki ifloslangan bo’lsa.\n3.6. Transport vositasida foydalanishga ruxsat etiladi quyidagilar: old qismida — oq yoki sariq rangdan boshqa rangli tumanga qarshi faralar, sariq yoki zarg’aldoq rangdan boshqa rangli burilish ko’rsatgichlari, oq rangdan boshqa rangli nur qaytargichlar o'rnatilgan bo’lsa."
  },
  {
    "id": 713,
    "biletId": 72,
    "text": "Yuk avtomobili haydovchisi to’xtab turish qoidasini buzdimi?",
    "options": [
      "Buzmadi, agar uning ruxsat etilgan to’liq vazni 3,5 tonnadan oshmasa",
      "Buzdi",
      "Buzmadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i72_3.webp",
    "explanation": "YHQ 1 ilova: 7.6.1 — 7.6.9. \"Transport vositasini to’xtab turish joyiga qo’yish usuli\". 7.6.2 — 7.6.9 trotuar yonidagi to'xtab turish joyiga yengil avtomobillar va mototsikllarni qo’yish usulini bildiradi."
  },
  {
    "id": 714,
    "biletId": 72,
    "text": "Ko’rsatilgan qaysi belgilar sizga yashash manzilingizga avtomobilda o’tishga ruxsat beradi?",
    "options": [
      "Faqat \"b\"",
      "\"a\" va \"c\"",
      "Faqat \"a\"",
      "Barchasi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i72_4.webp",
    "explanation": "YHQ 1 ilova: 3.2 — 3.8 belgilari belgilangan zonada joylashgan korxonalarga xizmat kursatuvchi transport vositalariga, shuningdek, belgilangan zonada yashaydigan yoki ishlaydigan fukarolarga xizmat kiluvchi yoki ularga tegishli bulgan transport vositalariga ta’sir kilmaydi."
  },
  {
    "id": 715,
    "biletId": 72,
    "text": "Qaysi haydovchi to’xtab turish qoidalarini buzdi?",
    "options": [
      "Mototsikl haydovchisi",
      "Trotuarda to’xtab turgan avtomobil haydovchisi",
      "Hech kim buzmadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i72_5.webp",
    "explanation": "YHQ 13-bobi 89-bandi: Qatnov qismiga chegaradosh trotuar chetida faqat yengil avtomobillar, mototsikllar, mopedlar va velosipedlarga to'xtab turishga 5.15 yo’l belgisi bilan birga 7.6.2, 7.6.3, 7.6.6 — 7.6.9 qo’shimcha axborot belgilaridan biri o'rnatilgan joylarda ruxsat etiladi."
  },
  {
    "id": 716,
    "biletId": 72,
    "text": "Qanday hollarda aholi punktlarida tovush moslamalaridan foydalanishga ruxsat etiladi?",
    "options": [
      "Yo’l-transport hodisasining oldini olish uchun",
      "Har ikkala sanab o’tilgan hollarda",
      "Quvib o’tishda ogohlantirish uchun"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 48-bandi: Tovushli ishoralar faqat quyidagi hollarda qo’llanilishi mumkin: aholi punktlaridan tashqarida boshqa haydovchilarni quvib o’tish haqida ogohlantirish uchun; zarur bo'lgan hollarda yo'l-transport hodisasining oldini olish uchun."
  },
  {
    "id": 717,
    "biletId": 72,
    "text": "Yo’lning sirpanchiq qismida rul chambaragini keskin burganda hosil bo’ladigan sirpanishning oldini olish uchun haydovchi qanday ehtiyot choralarini ko’rishi kerak?",
    "options": [
      "Rul chambaragini zudlik bilan sirpanayotgan tomonga burish va tezda avtomobilni harakat yo’nalishini to’g’irlab olish",
      "Ilashmani uzish",
      "Tormoz tepkisini bosish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Rul chambaragini zudlik bilan sirpanayotgan tomonga burish va tezda avtomobilni harakat yo’nalishini to’g’irlab olish."
  },
  {
    "id": 718,
    "biletId": 72,
    "text": "Chorrahaga kirganingizda tartibga soluvchi qo’lini yuqoriga ko’tardi, Sizga harakatlanishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi, agarda Siz o’ngga buriladigan bo’lsangiz",
      "Ruxsat etilmaydi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 42-bandi: Sariq ishora yonganda yoki tartibga soluvchining qo’li yuqoriga ko’tarilganida, ushbu Qoidalarning 41-bandida nazarda tutilgan joylarda, keskin tormoz bermasdan to’xtashga ulgura olmaydigan transport vositalarining haydovchilariga harakatni davom ettirishga ruxsat etiladi."
  },
  {
    "id": 719,
    "biletId": 72,
    "text": "Transport vositalari qattiq ulagichda shatakka olinganda shatakka olgan va shatakka olingan transport vositalari orasidagi masofa qancha bo’lishi kerak?",
    "options": [
      "Qoidalarda belgilanmagan",
      "4 metrdan oshmasligi",
      "4 metrdan 6 metrgacha"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 144-bandi: Egiluvchan ulagich bilan shatakka olishda shatakka olgan va shatakka olingan transport vositalari o'rtasidagi masofa 4 — 6 metr oralig'ida bo’lishi, qattiq ulagich yordamida shatakka olishda esa 4 metrdan ko’p bo’lmasligi kerak.\nEgiluvchan ulagich ushbu Qoidalarning 177-bandi talablariga muvofiq belgilanishi kerak."
  },
  {
    "id": 720,
    "biletId": 72,
    "text": "Turar joy dahalarida qanday harakatlar taqiqlangan?",
    "options": [
      "Faqat o’quv mashg’ulotlarini bajarish",
      "Barcha sanab o’tilgan hollarda",
      "Faqat dvigatel ishlab turganda to’xtab turish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 20-bobi 124-bandi: Turar joy dahalarida quyidagilar taqiqlanadi: mexanik transport vositalarini boshqarishni o'rgatish;\ndvigateli ishlab turgan holda to'xtab turish;\nruxsat etilgan to'la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillarining maxsus ajratilgan, yo'l belgilari va (yoki) yo’l chiziqlari bilan belgilangan joylardan tashqarida to'xtab turishi."
  },
  {
    "id": 721,
    "biletId": 73,
    "text": "Ko’rsatilgan belgilardan qaysi biri yo’lning ko’rinish masofasi cheklangan joylarida majburan to’xtagan transport vositalarini belgilash uchun qo’llaniladi?",
    "options": [
      "\"A\"",
      "\"Б\"",
      "\"В\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_1.webp",
    "explanation": "YHQ 8-bobi 51-bandi: Transport vositasi to’satdan to’xtab qolganda, zudlik bilan avariya yorug’lik ishorasini yoqish, agar u ishlamasa, avariya sababli to’xtash belgisini darhol o’rnatish kerak. Avariya sababli to’xtash belgisi quyidagi hollarda qo’llaniladi:\nyo’l-transport hodisasi sodir bo’lganda;\nto’xtash taqiqlangan joylarda va ko’rinishi cheklangan joylarda majburiy to’xtaganda;\nUshbu belgi boshqa haydovchilarni xavfli vaziyat haqida o’z vaqtida ogohlantirish imkonini beradigan masofada o’rnatilishi kerak. Bu masofa aholi punktlarida transport vositasidan 15 metr, aholi punktlaridan tashqaridagi joylarda esa 30 metrdan kam bo’lmasligi kerak."
  },
  {
    "id": 722,
    "biletId": 73,
    "text": "Ushbu ko’rsatilgan vaziyatda Sizga hovliga orqa bilan kirib qayrilib olishga ruxsat beriladimi?",
    "options": [
      "Ruxsat beriladi agarda bunda harakatning boshqa ishtirokchilariga halaqit berilmasa",
      "Taqiqlanadi",
      "Ruxsat beriladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_2.webp",
    "explanation": "YHQ 9-bobi 63-bandi: Transport vositasini orqaga harakatlantirishda haydovchi yo’l harakati xavfsizligini ta’minlashi va boshqa yo'l harakati qatnashchilariga xalaqit bermasligi shart. Zarurat tug’ilganda haydovchi boshqa shaxslarning yordamidan foydalanishi kerak.\nOrqaga harakatlanish chorrahalarda va ushbu Qoidalarning 62-bandiga muvofiq qayrilib olish mumkin bo'lmagan joylarda taqiqlanadi."
  },
  {
    "id": 723,
    "biletId": 73,
    "text": "Agar avtomobil antiblokirovkali (ABS) tormoz tizimi bilan jihozlangan bo’lsa keskin tormoz berishni qanday amalga oshirishi kerak?",
    "options": [
      "Tormoz tepkisini uzib-uzib bosish yo’li bilan",
      "To’xtab turish tormozi tizimini qo’llash yo’li bilan",
      "Tormoz tepkisini oxirigacha bosish va avtomobilni to’liq to’xtaguncha tepkini qo’yib yubormaslik"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Agar transport vositasi antiblokirovkali (ABS) tormoz tizimi bilan jihozlangan bo’lsa, shinaning qatnov qismi qoplamasi bilan tishlashishini shu tizim nazorat qiladi. Shuning uchun favqulodda tormozlash paytida tormoz pedalini oxirigacha bosib turish kerak."
  },
  {
    "id": 724,
    "biletId": 73,
    "text": "Yo’l harakati qoidalari bo’yicha \"yonlama oraliq masofa\" ni ko’rsating:",
    "options": [
      "Faqat \"A\"",
      "Faqat \"B\"",
      "\"A\" va \"C\"",
      "Faqat \"C\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_4.webp",
    "explanation": "YHQ 10-bobi 73-bandi: Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to’qnashib ketmaslik kafolatini beradigan darajadagi oraliq masofani, shuningdek yo’l harakati xavfsizligini ta’minlaydigan yonlama oraliq masofani saqlashi kerak."
  },
  {
    "id": 725,
    "biletId": 73,
    "text": "Tumanga qarshi chiroqlar va orqa tumanga qarshi chiroqlar birga yoqilishi mumkin:",
    "options": [
      "Cheklangan ko’rinish sharoitida",
      "Yetarlicha ko’rinmaslik sharoitida"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 137, 140 bandlari: Quyidagi hollarda tumanga qarshi chiroqlarni qo’llash mumkin: yetarlicha ko’rinmaydigan sharoitda alohida, shuningdek uzoqni yorituvchi yoki yaqinni yorituvchi chiroqlar bilan;\nqorong’i vaqtda yo'lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga;\nushbu Qoidalarning 138-bandida ko’zda tutilgan holatlarda yaqinni yorituvchi chiroqlar o’rniga.\nTumanga qarshi orqa chiroqlarni faqat yetarlicha ko’rinmaydigan sharoitda qo'llash mumkin. Tumanga qarshi orqa chiroqlarni to’xtash chiroqlari(stop-signal)ga ulash taqiqlanadi."
  },
  {
    "id": 726,
    "biletId": 73,
    "text": "Ko’rsatilgan qaysi belgi reversiv harakat boshlanishi haqida axborot beradi?",
    "options": [
      "\"b\"",
      "\"a\"",
      "\"c\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_6.webp",
    "explanation": "YHQ 1 ilova 5.35. yo'l belgisi \"Reversiv harakatlanish\". Bir yoki bir necha tasmalarda harakatlanish yo’nalishi qarama-qarshi tomonga o’zgarishi mumkin bo'lgan yo’l qismining boshlanishini bildiradi."
  },
  {
    "id": 727,
    "biletId": 73,
    "text": "Ushbu yo’l belgisi chorrahaga yaqinlashayotganlik to’g’risida ogohlantiradi, bunda Siz:",
    "options": [
      "Faqatgina o’ng tomondan yaqinlashib kelayotgan transport vositalariga yo’l berishingiz kerak",
      "Kesib o’tayotgan yo’ldagi transport vositalariga yo’l berishingiz kerak",
      "Birinchi bo’lib o’tish huquqiga egasiz"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_7.webp",
    "explanation": "YHQ 1 ilova 1.6. yo'l belgisi \"Teng ahamiyatli yo'llar kesishuvi\".\nYHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo'lgan yo'llar kesishgan chorrahada relssiz transport vositasining haydovchisi o'ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o'zaro amal qilishlari kerak.\nBunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi."
  },
  {
    "id": 728,
    "biletId": 73,
    "text": "Haydovchiga transport vositasini boshqarish vaqtida telefondan foydalanishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Qo’lni ishlatmasdan texnik vositalardan foydalanib gaplashishga ruxsat etiladi",
      "20 km/soat tezlikda harakatlanayotganda ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandi: Haydovchiga quyidagilar taqiqlanadi: transport vositasini boshqarish paytida telefondan (telefondan quloqchinlar orqali va qo’llarni ishlatmasdan turib so’zlashuvlar olib borish imkoniyatini beradigan boshqa uskunalar orqali foydalanish bundan mustasno), transport vositasi salonining old qismiga o’rnatilgan tele, videomonitordan tele, videodasturlarni tomosha qilish uchun foydalanish."
  },
  {
    "id": 729,
    "biletId": 73,
    "text": "Haydovchi chapga burilishda qaysi yo’nalish bo’yicha qoidani buzmoqda?",
    "options": [
      "Faqat \"B\" yo’nalishi bo’yicha",
      "Faqat \"A\" yo’nalishi bo’yicha",
      "Ko’rsatilgan barcha yo’nalish bo’yicha"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_9.webp",
    "explanation": "YHQ 1 ilova: 5.8.1. \"Tasmalar bo’yicha harakat yo’nalishi\" Tasmalar soni va har biri bo’yicha ruxsat etilgan harakatlanish yo’nalishlari. Boshqa yo’nalishlar bo’yicha harakatlanish taqiqlanadi.\nYHQ 2 ilova: 1.1 — qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo’lning xavfli joylaridagi harakatlanish bo’lagi chegarasini va velosipedchilar uchun bo’lagining chegarasini bildiradi; yo’lning kirish taqiqlangan qismi chegarasini belgilaydi; transport vositalarining to’xtab turish joyi chegarasini hamda avtomagistral qatoriga kiritilmagan yo’lning qatnov qismi chegarasini bildiradi."
  },
  {
    "id": 730,
    "biletId": 73,
    "text": "Shatakka olib harakatlanishingiz mumkin:",
    "options": [
      "Istalgan yo’nalishda",
      "Faqat \"A\" yo’nalishda",
      "Faqat \"B\" yo’nalishda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i73_10.webp",
    "explanation": "YHQ 1 ilova 3.7. yo'l belgisi \"Tirkama bilan harakatlanish taqiqlanadi\". Yuk tashuvchi transport vositalari, traktorlarning barcha turdagi tirkamalar bilan harakatlanishi, shuningdek mexanik transport vositalarini har qanday usulda shatakka olish taqiqlanishini bildiradi."
  },
  {
    "id": 731,
    "biletId": 74,
    "text": "Sizga ruxsat etilgan to’la vazni 3,5 tonnadan ortiq yuk avtomobilida harakatlanish:",
    "options": [
      "Barcha yo’nalishlarda",
      "Faqat to’g’riga",
      "To’g’riga va o’ngga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i74_1.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. \"Harakatlanish to’g’riga\", 7.4.1 belgi bilan o’rnatilgan yo'l belgisining ta’siri yuk tashuvchi, shu jumladan, tirkamali, to'la vazni 3,5 tonnadan ortiq bo’lgan transport vositalariga."
  },
  {
    "id": 732,
    "biletId": 74,
    "text": "Kunning yorug’ vaqtida aholi punktlarida quvib o’tilayotgan transport vositasi haydovchisining e’tiborini jalb qilish uchun mumkin:",
    "options": [
      "Tovush signalidan foydalanish",
      "Faqat yaqinni yorituvchi chiroqni uzoqni yorituvchi chiroqqa qisqa muddat orasida o’tkazish bilan ishora berish",
      "Faqat birgalikda yorug’lik ishoralari bilan birga tovush signallarini qo’llash",
      "Sanab o’tilganlarning barchasidan foydalanish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 48-bandi: Tovushli ishoralar faqat quyidagi hollarda qo’llanilishi mumkin: aholi punktlaridan tashqarida boshqa haydovchilarni quvib o’tish haqida ogohlantirish uchun;\nzarur bo’lgan hollarda yo’l-transport hodisasining oldini olish uchun.\nYuqorida ko’rsatilgan hollardan tashqari tovushli ishoralardan foydalanish taqiqlanadi.\nYHQ 8-bobi 49-bandi: Quvib o’tish haqida tovushli ishora o’rniga yoki u bilan birga fara chiroqlarini yoqib-o’chirib, ogohlantirish ishorasini ham berish mumkin."
  },
  {
    "id": 733,
    "biletId": 74,
    "text": "Ushbu yo’l chizig’i Sizga qanday manevr bajarishni taqiqlaydi?",
    "options": [
      "Quvib o’tishni",
      "Aylanib o’tishni",
      "Sanab o’tilgan barcha manevrlarga ruxsat beradi",
      "Qayrilib olishni"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i74_3.webp",
    "explanation": "YHQ 2 ilova: 1.2, 1.5 — 1.8 chiziqlarini istalgan tomondan bosib o’tish mumkin."
  },
  {
    "id": 734,
    "biletId": 74,
    "text": "Ushbu belgi axborot beradi:",
    "options": [
      "Reversiv harakatlanish yo’liga chiqish haqida",
      "Siz o’ngga yoki chapga burilishingiz kerakligini ko’rsatadi",
      "Chorrahadan o’ngga va chapga bir tomonlama harakat tashkil qilingan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i74_4.webp",
    "explanation": "YHQ 1 ilova: 5.37. \"Reversiv harakatlanish yo’liga chiqish\"."
  },
  {
    "id": 735,
    "biletId": 74,
    "text": "Svetofor (ishoralari) qaysi guruh yo’l belgilarini bekor qiladi (miltilovchi sariq ishoradan tashqari)?",
    "options": [
      "Buyuruvchi belgilar",
      "Ta’qiqlovchi belgilar",
      "Imtiyoz belgilari",
      "Barcha sanab o’tilganlari"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 43-bandi: Svetofor ishoralari imtiyoz belgilari talablariga zid kelgan hollarda haydovchilar svetofor ishoralariga amal qilishlari kerak."
  },
  {
    "id": 736,
    "biletId": 74,
    "text": "108 km/soat tezlikda harakatlanayotgan transport vositasi 1 sekundda qancha masofani bosib o’tadi?",
    "options": [
      "30 m",
      "15 m",
      "25 m"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "1 km = 1000 metr\n1 soat = 60 min = 3600 sekund\nKeling, ushbu qiymatlarni almashtiramiz:\n108 km/soat = 108*1000/(1*3600) = 108000/3600 = 30 m/s."
  },
  {
    "id": 737,
    "biletId": 74,
    "text": "M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig’indisiga yo’l quyiladi:",
    "options": [
      "25°",
      "20°",
      "10°"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 2.1. Boshqaruv qurilmasidagi lyuft yig’indisi reglament (qat’iy belgilangan) sharoitlardagi sinovlarda quyidagi ko’rsatkichdan katta bo’lmasligi kerak: Transport vositasining toifasi Yo’l qo’yilgan lyuft ko’rsatgichi (gradusda)\nM1 - 10%\nM2, M3, N1 - 20%\nN2, N3 - 25%."
  },
  {
    "id": 738,
    "biletId": 74,
    "text": "Qaysi hollarda transport vositasidan foydalanish taqiqlanadi?",
    "options": [
      "Yonilg’i darajasini ko’rsatish qurilmasi ishlamaydi",
      "O’t oldirish tizimi nosoz",
      "Dvigatel qiyinchilik bilan ishga tushadi",
      "Tovush signallari ishlamaydi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 7.2. Tovush ishorasi ishlamasa."
  },
  {
    "id": 739,
    "biletId": 74,
    "text": "72 km/soat tezlikda harakatlanayotgan transport vositasi 1 sekundda qancha masofani bosib o’tadi?",
    "options": [
      "15 m",
      "20 m",
      "25 m"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "1 km = 1000 metr\n1 soat = 60 min = 3600 sekund\nKeling, ushbu qiymatlarni almashtiramiz:\n72 km/soat = 72*1000/(1*3600) = 72000/3600 = 20 m/s."
  },
  {
    "id": 740,
    "biletId": 74,
    "text": "Qaysi yo’nalishda harakatlanishni davom ettirishingiz mumkin?",
    "options": [
      "Сhapga va orqaga qayrilib olishga",
      "Faqat chapga",
      "O’ngga, chapga va orqaga qayrilib olishga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i74_10.webp",
    "explanation": "YHQ 1 ilova 4.1.6. \"Harakatlanish o’ngga yoki chapga\". Faqat belgilarda ko’rsatilgan ko’rsatkichlar yo’nalishlarida harakatlanishga ruxsat etiladi. Chapga burilishga ruxsat beruvchi belgilar qayrilib olishga ham ruxsat beradi. (Muayyan kesishmada talab etilgan harakatlanish yo’nalishiga tegishli ko’rsatkichlarning shakli tushirilgan 4.1.1 — 4.1.6 belgilarini qo’llash mumkin).\nYHQ 9-bobi 56-bandi: Haydovchi, aylanma harakatlanish tashkil qilingan chorrahalarga kirish uchun burilishdan boshqa barcha hollarda, o’ngga, chapga burilish yoki qayrilib olishdan oldin shu yo’nalishda harakatlanishi mo’ljallangan qatnov qismining eng chetki holatini egallashi shart."
  },
  {
    "id": 741,
    "biletId": 75,
    "text": "Siz yengil avtomobildan qaysi jihozlar mavjud bo’lmaganda foydalanishingiz mumkin?",
    "options": [
      "O’t o’chirgich",
      "G’ildirab ketishga qarshi moslama",
      "Tibbiy quticha",
      "Avariya sababli to’xtash belgisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova Transport vositalaridan foydalanishni taqiqlovchi shartlar: 7.10. Transport vositalari quyidagilar bilan jihozlanmagan bo’lsa: M2, МЗ toifadagi — favqulodda holatlarda oynani sindirish uchun foydalaniladigan bolg’acha, tibbiyot qutichasi, 2 ta o't o’chirgich (bittasi haydovchining kabinasida, ikkinchisi — yo’lovchilar salonida), majburiy to'xtaganini bildiruvchi belgi (yoki miltillovchi qizil chiroq) va nur qaytargichli kamzul (jilet)."
  },
  {
    "id": 742,
    "biletId": 75,
    "text": "Quvib o’tishda burilish ko’rsatkichi bilan beriladigan ogohlantiruvchi ishoralarni, haydovchi qachon o’chirishi kerak?",
    "options": [
      "O’z ixtiyoringizga ko’ra",
      "Manyovrni tugallagach, darhol",
      "Quvib o’tilayotgan transport vositasidan o’zib ketgandan so’ng istalgan vaqtda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 46-bandi: Burilish ko’rsatkichi yoki qo'l bilan berilayotgan ishora manyovrni bajarishdan oldinroq berilishi va uni tugallagach, darhol to’xtatilishi kerak (qo’l bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin).\nBeriladigan ishoralar yo'l harakatining boshqa qatnashchilarini chalg’itmasligi kerak.\nOgohlantiruvchi ishora berish haydovchiga oldin o'tish huquqini bermaydi va uni zaruriy ehtiyot choralarini ko’rish mas’uliyatidan ozod etmaydi."
  },
  {
    "id": 743,
    "biletId": 75,
    "text": "Qaysi yo’l belgisi chapga burilishni taqiqlaydi?",
    "options": [
      "Faqat \"a\"",
      "\"a\" va \"b\"",
      "\"a\" va \"d\"",
      "Barchasi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i75_3.webp",
    "explanation": "YHQ 1 ilova: 5.10.2, 5.10.3. \"Yo’nalishli transport vositalari uchun alohida ajratilgan tasmasi bor yo’lga chiqish\"."
  },
  {
    "id": 744,
    "biletId": 75,
    "text": "Piyodalar turar joy dahasida qayerda harakatlanishlari mumkin?",
    "options": [
      "Faqat trotuarda",
      "Faqat qatnov qismida",
      "Trotuarda, hamda qatnov qismida"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 20-bobi 123-bandi: Turar joy dahalari (kirish va chiqish 5.38 va 5.39 yo’l belgilari bilan belgilangan hududlar)da piyodalarga trotuarlar hamda qatnov qismida harakatlanishga ruxsat etiladi. Bunda piyodalar imtiyozga ega bo’ladilar, biroq ular transport vositalarining harakatlanishiga asossiz xalaqit bermasliklari kerak."
  },
  {
    "id": 745,
    "biletId": 75,
    "text": "Qaysi transport vositasining haydovchisi qoidani buzib burilmoqda?",
    "options": [
      "Faqat yengil avtomobil haydovchisi",
      "Ikkisi ham buzmoqda",
      "Faqat mototsikl haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i75_5.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. \"Harakatlanish to’g’riga\". 4.1.1 — 4.1.6 belgilarining ta’siri yo’nalishli transport vositalariga joriy qilinmaydi.\n4.1.1 — 4.1.6 yo’l belgilari qatnov qismlarining qaysi kesishmasidan oldin o’rnatilsa, belgining ta’siri shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o'rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o'ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 746,
    "biletId": 75,
    "text": "Kunning yorug’ vaqtida quyidagi hollarda yaqinni yorituvchi chiroqlar yoqilishi kerak:",
    "options": [
      "Mototsikl va mopedlarda",
      "Xavfli, katta o’lchamli va og’ir vaznli yuklarni tashishda",
      "Yo’lovchilarni tashiyotgan avtobus va yo’nalishli transport vositalarida",
      "Barcha sanab o’tilgan hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 138-bandi: Sutkaning yorug’ vaqtida quyidagi hollarda yaqinni yorituvchi fara chiroqlari yoqilishi kerak: transport vositalari tashkiliy jamlanma safida harakatlanayotganda;\nyo’lovchilarni tashiyotgan avtobuslar va yo’nalishli transport vositalarida;\nbolalar guruhini tashkiliy tashishda;\nxavfli, katta o’lchamli va og’ir vaznli yuklarni tashishda;\nmexanik transport vositalarini shatakka olishda (shatakka olib ketayotgan transport vositasida);\nkuchli yog’ingarchilik (yomg’ir, qor) sharoitida;\nmototsikl, elektromototsikl, skuter va mopedlarda."
  },
  {
    "id": 747,
    "biletId": 75,
    "text": "Ushbu yo’lda sizga yo’l belgisidan keyin qaysi tasmalarda harakatlanishga ruxsat beriladi?",
    "options": [
      "Faqat chap tasmadan",
      "Istalgan tasmadan",
      "O’ng tasmadan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i75_7.webp",
    "explanation": "YHQ 10-bobi 67-bandi: Aholi punktlaridan tashqaridagi yo'llarda hamda aholi punktlarida ayrim turdagi transport vositalari uchun ushbu Qoidalarda belgilangandan yuqori tezlikda harakatlanish ruxsat etilgan yo'l qismlarida haydovchilar transport vositalarini mumkin qadar qatnov qismining o'ng chetiga yaqinroq olib harakatlanishlari kerak. O’ng tasmalar bo'sh bo’lganda chap tasmalarni egallash taqiqlanadi."
  },
  {
    "id": 748,
    "biletId": 75,
    "text": "Qanday alomatlar charchash belgilari hisoblanadi?",
    "options": [
      "Uyquchanlik, bo’shashish, diqqatning susayishi",
      "Bosh aylanishi, ko’zlarga qum kirgan kabi achishish, terlash alomati",
      "Zo’riqish, asabiylashish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandi: Haydovchiga quyidagilar taqiqlanadi: transport vositasini spirtli ichimliklar, giyohvandlik vositalari, ularning analoglari, psixotrop yoxud kuchli ta’sir qiluvchi moddalar ta’sirida yoki o’zgacha tarzda mast holatda, sezgirlik va e’tiborni susaytiradigan dori-darmonlar ta’sirida, yo’l harakati xavfsizligiga tahdid soladigan charchoqlik va betoblik holatida boshqarish;\nhar qanday mastlik holatida, sezgirlik va e’tiborni susaytiradigan dori-darmonlar ta’sirida, yo'l harakati xavfsizligiga tahdid soladigan charchoqlik va betoblik holatida bo'lgan, shuningdek, tegishli toifadagi transport vositasini boshqarish huquqini beruvchi haydovchilik guvohnomasi bo'lmagan, yo'l varaqasida yoki transport vositalari egalarining fuqarolik javobgarligini majburiy sug’urta qilish bo’yicha sug’urta polisida ism-familiyasi ko’rsatilmagan (transport vositalari egalarining fuqarolik javobgarligini majburiy sug’urta qilish bo'yicha shartnoma ushbu transport vositasidan cheklanmagan shaxslarning foydalanilishini hisobga olgan holda tuzilgan hollardan tashqari) shaxslarga transport vositasini boshqarish uchun topshirish."
  },
  {
    "id": 749,
    "biletId": 75,
    "text": "Chorrahadagi uzuq-uzuq chiziqlar nimani bildiradi?",
    "options": [
      "Majburiy harakatlanish",
      "Chorrahada harakatlanish bo’lagini chegarasini"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i75_9.webp",
    "explanation": "YHQ 2 ilova: 1.7 (har bir chizig'i qisqa va oralari shu chiziqlar bo’yiga teng bo’lgan uzuq-uzuq chiziq) — chorrahadagi harakatlanish tasmalarini bildiradi."
  },
  {
    "id": 750,
    "biletId": 75,
    "text": "Yo’l transport hodisasiga daxldor haydovchilar birinchi navbatda nima qilishlari kerak?",
    "options": [
      "Transport vositasini darhol to’xtatishi, avariya ishoralarini yoqishi va avariya sababli to’xtash belgisini o’rnatishi",
      "Sodir etilgan hodisa xaqida YHXXga xabar berishi kerak",
      "Yo’lning harakat qismini bo’shatishlari kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3-bobi 13-bandi: Yo'l-transport hodisasi sodir bo’lganda unga daxldor haydovchilar quyidagilarni bajarishlari shart: transport vositasini darhol to’xtatishi, avariya ishoralarini yoqishi va avariya sababli to'xtash belgisini Qoidalarning 51-bandi talablariga muvofiq o’rnatishi, transport vositasini va hodisaga daxldor buyumlarni joyidan qo’zg’atmasligi;\nYHQ 8-bobi 51-bandi: Transport vositasi to'satdan to'xtab qolganda, zudlik bilan avariya yorug’lik ishorasini yoqish, agar u ishlamasa, avariya sababli to'xtash belgisini darhol o’rnatish kerak. Avariya sababli to’xtash belgisi quyidagi hollarda qo’llaniladi: yo’l-transport hodisasi sodir bo’lganda;\nto’xtash taqiqlangan joylarda va ko’rinishi cheklangan joylarda majburiy to’xtaganda;\nUshbu belgi boshqa haydovchilarni xavfli vaziyat haqida o'z vaqtida ogohlantirish imkonini beradigan masofada o’rnatilishi kerak. Bu masofa aholi punktlarida transport vositasidan 15 metr, aholi punktlaridan tashqaridagi joylarda esa 30 metrdan kam bo’lmasligi kerak."
  },
  {
    "id": 751,
    "biletId": 76,
    "text": "Kunning qorong’i vaqtida aholi punktlarida yo’lning yoritilgan qismida Siz qanday tashqi yoritish chiroqlaridan foydalanishingiz kerak?",
    "options": [
      "Yaqinni yoki uzoqni yorituvchi chiroqlardan",
      "Yaqinni yorituvchi chiroqlardan",
      "Gabarit chiroqlardan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 135-bandi: Quyidagi hollarda uzoqni yorituvchi chiroqlar o’rniga yaqinni yorituvchi chiroqlar yoqilishi kerak: yo’l yoritilgan bo’lsa;\nqarama-qarshi yo’nalishdagi transport vositasiga kamida 150 metr masofa qolganda, shuningdek, qarama-qarshi yo’nalishdagi transport vositasining haydovchisi fara chiroqlarini vaqti-vaqti bilan o'chirib-yoqib bunga zarurat borligini bildirgan hollarda undan ham ko’proq masofada;\nqarama-qarshi va bir yo’nalishdagi transport vositalari haydovchilarining ko’zini qamashtirishi mumkin bo'lgan boshqa barcha holatlarda. Ko’zi qamashgan haydovchi avariya ishoralarini yoqishi, harakatlanish bo’lagini o’zgartirmasdan tezlikni kamaytirishi va to’xtashi kerak."
  },
  {
    "id": 752,
    "biletId": 76,
    "text": "Qaysi holatda siz majburiy to’xtashni amalga oshirasiz?",
    "options": [
      "Piyodalar o’tish joyi oldida piyodalarga yo’l berish uchun to’xtab",
      "Texnik nosozlik tufayli yo’lning harakat qismida",
      "Har ikki sanab o’tilgan holda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ, Umumiy qoidalar: Majburiy to’xtash — texnik nuqson, tashilayotgan yuk, haydovchi va yo’lovchining holati, yo'ldagi biror to'siq tufayli xavf yuzaga kelganda yoxud ob-havo sharoitiga bog’liq holda transport vositasi harakatini to'xtatish. Haydovchining ushbu xatti-harakati oxirgi zarur chora bo’lib, qoidabuzarlik deb e’tirof etilmaydi."
  },
  {
    "id": 753,
    "biletId": 76,
    "text": "Qaysi hollarda Sizga harakatni davom ettirish taqiqlanadi, hatto ta’mirlash ustaxonasiga ham, agarda faralar va orqa gabarit chiroqlar nosoz bo’lsa?",
    "options": [
      "Kunning qorong’u vaqtida",
      "Har ikki sanab o’tilgan holda",
      "Faqat yetarlicha ko’rinmaslik sharoitida"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandi: Haydovchiga quyidagilar taqiqlanadi: tormoz tizimi, rul boshqaruvi ishlamayotgan, ulagich moslamasi (avtopoyezd tarkibida) nosoz bo’lgan, sutkaning qorong’i vaqtida yoki ko’rinish cheklangan vaziyatlarda yonmaydigan fara chiroqlari va orqa gabarit fara chiroqlari, yomg’ir yoki qor yog'ayotgan vaqtda oyna tozalagich ishlamaydigan transport vositasini boshqarish."
  },
  {
    "id": 754,
    "biletId": 76,
    "text": "Kunning yorug’ vaqtida aholi punktlaridan tashqarida Siz quvib o’tayotgan transport vositasi haydovchisining e’tiborini qanday jalb qilasiz?",
    "options": [
      "Faqat yorug’lik faralarini qisqa-qisqa yoqib o’chirish bilan",
      "Faqat tovush ishorasi bilan",
      "Sanab o’tilgan barcha usul bilan va ularni birga qo’llash bilan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 49-bandi: Quvib o’tish haqida tovushli ishora o'rniga yoki u bilan birga fara chiroqlarini yoqib-o’chirib, ogohlantirish ishorasini ham berish mumkin."
  },
  {
    "id": 755,
    "biletId": 76,
    "text": "Sanab o’tilgan qaysi transport vositalarini o’t o’chirgichsiz tasarruf etishga ruxsat etiladi?",
    "options": [
      "Avtobuslarni",
      "Faqat yon kajavasiz mototsikllarni",
      "Avtomobillarni",
      "Barcha mototsikllarni"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 7.10. Transport vositalari quyidagilar bilan jihozlanmagan bo’lsa: М1, N1, N2, N3 toifadagi, mikroavtobus va g'ildirakli traktorlarda tibbiyot qutichasi, o’t o’chirgich, majburiy to’xtaganligini bildiruvchi belgi (yoki miltillovchi qizil chiroq) va nur qaytargichli kamzul (jilet)."
  },
  {
    "id": 756,
    "biletId": 76,
    "text": "Qaysi qo’shimcha axborot belgilari birga qo’llanilganda belgilarning ta’sir oralig’ini ko’rsatadi?",
    "options": [
      "\"b\" va \"c\"",
      "Faqat \"b\"",
      "Faqat \"a\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i76_6.webp",
    "explanation": "YHQ 1 ilova: 7.2.1. \"Ta’sir oralig’i\". Ogohlantiruvchi belgilar bilan belgilangan xavfli joyning uzunligini yoki taqiqlovchi va axborot-ko’rsatkich belgilarining ta’sir oralig'ini ko’rsatadi. 7.2.2 — 7.2.6. \"Ta’sir oralig’i\"."
  },
  {
    "id": 757,
    "biletId": 76,
    "text": "Birinchi uzatmada uzoq tezlanishda yurish yoqilg’i sarfiga qanday ta’sir etadi?",
    "options": [
      "Yoqilg’i sarfi o’zgarmaydi",
      "Yoqilg’i sarfi ortadi",
      "Yoqilg’i sarfi kamayadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Dvigatel yuqori tezlikda ishlayotganida, birinchi uzatma yoqilgan avtomobilning uzoq vaqt tezlashishi yoqilg’i sarfini oshiradi."
  },
  {
    "id": 758,
    "biletId": 76,
    "text": "Ko’rsatilgan yo’l belgilaridan qaysilari Siz yo’lning tor qismida yo’l berishingizni talab qiladi?",
    "options": [
      "Faqat \"c\"",
      "\"b\" va \"c\"",
      "\"b\" va \"d\"",
      "\"a\" va \"c\""
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i76_8.webp",
    "explanation": "YHQ 21-bobi 128-bandi: Agar yo’lning 1.13 va 1.14 yo’l belgilari bilan belgilangan qiyaliklarda, qarama-qarshi yo’nalishlarda harakatlanishni qiyinlashtiradigan to’siq bo’lsa, nishablikka harakatlanayotgan transport vositasining haydovchisi yo’l berishi kerak.\n1 ilova: 2.6. \"Ro’para harakatlanishning ustunligi\". Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo’lning tor qismiga kirish taqiqlanadi. Haydovchi yo’lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 759,
    "biletId": 76,
    "text": "Qanday hollarda yo’lning burilish qismlarida yengil avtomobil ag’darilishga qarshi turg’unroq?",
    "options": [
      "Yo’lovchilar bilan yuksiz",
      "Yuksiz va yo’lovchilarsiz",
      "Yo’lovchilarsiz, yuqori yukxonasida yuki bilan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Avtomobilning og’irlik markazi qanchalik past va simmetrik bo’lsa, u shunchalik barqaror bo’ladi."
  },
  {
    "id": 760,
    "biletId": 76,
    "text": "Qaysi yo’l belgisi piyodalar yo’lkasini bildiradi?",
    "options": [
      "Faqat \"b\" va \"c\"",
      "Faqat \"b\"",
      "Barchasi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i76_10.webp",
    "explanation": "YHQ 1 ilova: 4.6. \"Piyodalar yo’lkasi\". Faqat piyodalar yurishiga ruxsat etiladi."
  },
  {
    "id": 761,
    "biletId": 77,
    "text": "\"Quvib o’tish\" atamasi nimani bildiradi?",
    "options": [
      "Egallagan harakatlanish bo’lagidan chiqib, oldinda harakatlanayotgan transport vositasidan o’zib ketish",
      "Bir va bir necha transport vositalaridan o’zib ketish",
      "Bir yoki bir nechta transport vositalarini qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib, so’ngra ilgari egallagan qatoriga qaytib o’tish bilan bog’liq bo’lgan o’zib ketish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova 1-bob. Umumiy qoidalar: Quvib o'tish — bir yoki bir nechta transport vositalarini qarama-qarshi yo'nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib, so'ngra ilgari egallagan qatoriga qaytib o’tish bilan bog'liq bo’lgan o’zib ketish."
  },
  {
    "id": 762,
    "biletId": 77,
    "text": "Ko’rsatilgan yo’l belgilaridan qaysi biri ruxsat etilgan to’la vazni 3,5 tonnadan kam bo’lgan yuk avtomobiliga o’ngga harakatlanishni buyuradi.",
    "options": [
      "Faqat \"b\"",
      "Faqat \"a\"",
      "\"b\" va \"c\"",
      "\"a\" va \"b\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i77_2.webp",
    "explanation": "YHQ 1 ilova: 4.1.2. \"Harakatlanish o'ngga\"."
  },
  {
    "id": 763,
    "biletId": 77,
    "text": "Tormoz tizimiga ega bo’lmagan tirkama bilan harakatlanayotganda yengil avtomobilni tormoz yo’li qanday o’zgaradi?",
    "options": [
      "Tormoz yo’li uzayadi",
      "Tirkama qo’shimcha qarshilikka ega bo’lgani uchun tormoz yo’li kamayadi",
      "Tormoz yo’li o’zgarmaydi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Tormoz yo’li uzayadi."
  },
  {
    "id": 764,
    "biletId": 77,
    "text": "Tuman sharoitida, agar ko’rinish masofasi 300 metrdan kam bo’lsa kunduzgi chiroqlarni yoqish yetarlimi?",
    "options": [
      "Yetarli",
      "Yetarli emas"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 137-bandi: Quyidagi hollarda tumanga qarshi fara chiroqlaridan foydalanish mumkin: yetarlicha ko’rinmaydigan sharoitda alohida, shuningdek, uzoqni yorituvchi yoki yaqinni yorituvchi fara chiroqlari bilan;\nsutkaning qorong’i vaqtida yo’lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi fara chiroqlari bilan birga."
  },
  {
    "id": 765,
    "biletId": 77,
    "text": "Qattiq yoki egiluvchan ulagichda shatakka olgan yuk avtomobilining kuzovida odam tashishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 143-bandi: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo’li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 766,
    "biletId": 77,
    "text": "Sanab o’tilgan qaysi hollarda haydovchi orqadagi vaziyatni e’tiborga olishi kerak?",
    "options": [
      "Har qanday tormozlashda",
      "Faqat nam qoplama yoki yaxmalakli yo’llarda tormoz berganda",
      "Faqat keskin tormoz berishda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Har qanday tormozlashda."
  },
  {
    "id": 767,
    "biletId": 77,
    "text": "Qaysi yo’l belgisi barcha transport vositalarining harakatini istisnosiz taqiqlaydi?",
    "options": [
      "\"b\"",
      "\"c\"",
      "\"a\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i77_7.webp",
    "explanation": "YHQ 1 ilova: 3.17.2. \"Xavf-xatar\". Yo’l-transport hodisasi yoki boshqa xavfli vaziyatlar tufayli, istisnosiz, barcha transport vositalarining harakatlanishi taqiqlanishini bildiradi."
  },
  {
    "id": 768,
    "biletId": 77,
    "text": "Chorrahaga kirishda Siz:",
    "options": [
      "Birinchi o’tish huquqiga egasiz",
      "Mototsiklga yo’l berishingiz kerak",
      "Har ikkisiga ham yo’l berishingiz kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i77_8.webp",
    "explanation": "YHQ 14-bobi 98-bandi: Aylanma harakatlanish chorrahasida harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga) ega."
  },
  {
    "id": 769,
    "biletId": 77,
    "text": "Yo’lning keskin burilishida yuzaga keladigan sirpanishning oldini olish uchun haydovchi nima qilishi kerak?",
    "options": [
      "Burilishdan oldin tezlikni kamaytirib, avtomobilni erkin harakatlanishi uchun ilashma tepkisini bosishi",
      "Burilishdan oldin tezlikni kamaytirish, kerak bo’lsa uzatmalar pog’onasini pasaytirish, burilishdan o’tayotganda tezlikni oshirmaslik va avtomobilni keskin tormozlamaslik",
      "Sanab o’tilgan har ikki usulni qo’llashga ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Burilishdan oldin tezlikni kamaytirish, kerak bo’lsa uzatmalar pog’onasini pasaytirish, burilishdan o’tayotganda tezlikni oshirmaslik va avtomobilni keskin tormozlamaslik."
  },
  {
    "id": 770,
    "biletId": 77,
    "text": "Kunning qorong’i vaqtida va bulutli ob-havoda ro’paradan kelayotgan avtomobil tezligi qanday tuyuladi?",
    "options": [
      "Tezlikni qabul qilish o’zgarmaydi",
      "Aslidagidan kam tezlikda tuyuladi",
      "Aslidagidan katta tezlikda tuyuladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Aslidagidan kam tezlikda tuyuladi."
  },
  {
    "id": 771,
    "biletId": 78,
    "text": "Siz ro’paradan yaqinlashayotgan yuk avtomobiliga yo’l berishingiz kerakmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i78_1.webp",
    "explanation": "YHQ 10-bobi 75-bandi: Agar biror to’siq sababli qarama-qarshi yo’nalishlarda harakatlanish qiyin bo’lsa, to’siq o’z tomonida bo’lgan haydovchi yo’l berishi kerak."
  },
  {
    "id": 772,
    "biletId": 78,
    "text": "Ushbu holatda Sizga temir yo’l kesishmasiga chiqishga ruxsat etiladimi?",
    "options": [
      "Ha, yaqinlashib kelayotgan poyezd yo’q bo’lsa",
      "Ha",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i78_2.webp",
    "explanation": "YHQ 18-bobi 118-bandi: Temir yo'l kesishmasiga quyidagi hollarda kirish taqiqlanadi: kesishmadan keyin hosil bo'lgan tirbandlik tufayli haydovchi kesishmada to’xtashga majbur bo’ladigan hollarda."
  },
  {
    "id": 773,
    "biletId": 78,
    "text": "Transport vositasi qiyalikda joyidan qo’zg’alishda to’xtab turish tormoz dastagini qay vaqtda tushirishni boshlash kerak?",
    "options": [
      "Harakatni boshlagandan so’ng",
      "Harakatni boshlashdan avval",
      "Harakatni boshlash bilan bir vaqtda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Harakatni boshlash bilan bir vaqtda."
  },
  {
    "id": 774,
    "biletId": 78,
    "text": "Avtomobilning ABS tizimi burilishida sirpanish va yonga siljishni oldini oladimi?",
    "options": [
      "Avtomobilni faqat sirpanish ehtimolining oldini oladi",
      "Avtomobilni sirpanish va yonga siljish ehtimolining oldini olmaydi",
      "Avtomobilni faqat yonga siljish ehtimolining oldini oladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Antiblokirovka tizimi (ABS) avtomobilning tormoz tizimi bilan birga qarama qarshi ishlab uni tartibga soladi, ya’ni g’ildiraklarni keskin tormozlaganda ularni blokirovkadan asraydi. Bu bilan avtomobilni turg'unligini va boshqaruvchanligini yengillashtiradi. Bu tizimning o’ziga yarasha qulayligi va shu bilan bir qatorda kamchiliklari ham mavjud. Qo’qqisdan tormozlanganda hatto quruq, qattiq qoplamali yo'llarda ABS tizimi avtomobilni to'xtata olmaydi uni ishga tushish vaqti (1-2 sek.) ushbu vaziyatga haydovchi ko'nikma hosil qilishi kerak. Bu esa o’z navbatida tajriba talab etadi. Burilishlarda markazdan qochirma kuch evaziga ABS sirpanish va siljishga ta’sir eta olmay qolish ehtimoli yuzaga keladi."
  },
  {
    "id": 775,
    "biletId": 78,
    "text": "Chorrahaning ko’rsatilgan joyida Sizga to’xtashga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi, agarda Sizning transport vositangiz bilan sidirg’a chiziq orasidagi masofa 3 metrdan ortiq bo’lsa",
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i78_5.webp",
    "explanation": "YHQ 13-bobi 91-bandi: quyidagi joy va holatlarda to’xtash taqiqlanadi: qatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 776,
    "biletId": 78,
    "text": "Siz chapga burilmoqchisiz, kimga yo’l berishingiz kerak?",
    "options": [
      "Har ikki transport vositasiga",
      "Faqat avtobusga",
      "Faqat yuk avtomobiliga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i78_6.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo'l berishi kerak."
  },
  {
    "id": 777,
    "biletId": 78,
    "text": "Yengil avtomobilning orqa oynasiga parda yoki jalyuzilar o’rnatish mumkinmi?",
    "options": [
      "Ruxsat etiladi, agarda ikki tomonda orqani ko’rsatuvchi ko’zgusi bo’lsa",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Vazirlar Mahkamasining 2019 yil 2 avgustdagi 646-son qarori: b) avtotransport vositalari orqa oynasining tusini, shuningdek, avtotransport vositalari old oynasining tepa qismi tusini 14 sm dan ko'p bo'lmagan polosa shaklida yorug’lik o’tkazuvchanligi cheklanmagan darajada o’zgartirish (qoraytirish) ruxsatnomasiz, tasdiqlangan davlat standarti asosida amalga oshiriladi."
  },
  {
    "id": 778,
    "biletId": 78,
    "text": "90 km/soat tezlikda harakatlanayotgan transport vositasi 1 sekundda qancha masofani bosib o’tadi?",
    "options": [
      "25 m",
      "15 m",
      "35 m"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "1 km = 1000 metr\n1 soat = 60 min = 3600 sekund\nKeling, ushbu qiymatlarni almashtiramiz:\n90 km/soat = 90*1000/(1*3600) = 90000/3600 = 25 m/s."
  },
  {
    "id": 779,
    "biletId": 78,
    "text": "Shatakka olingan avtomobilni avariya ishoralari nosoz bo’lganda transport vositasi qanday belgilanishi kerak?",
    "options": [
      "Shatakka olingan transport vositasi orqa tomoniga avariya sababli to’xtash belgisini o’rnatish",
      "Orqa tumanga qarshi chiroqlarini yoqish",
      "Gabarit chiroqlarini yoqish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 52-bandi: Shatakka olingan transport vositasida avariya yorug’lik ishoralari bo'lmasa yoki ular ishlamasa uning orqa tomoniga avariya sababli to'xtash belgisi o’rnatilishi kerak."
  },
  {
    "id": 780,
    "biletId": 78,
    "text": "Ko’rsatilgan qaysi joyda siz avtomobilni qoidaga binoan to’xtatishingiz mumkin?",
    "options": [
      "Hech qaysisida",
      "Faqat \"Б\" va \"B\"",
      "Faqat \"A\"",
      "Faqat \"Б\""
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i78_10.webp",
    "explanation": "YHQ 13-bobi 88-bandi: Aholi punktlarida o’rtada tramvay yo’li bo’lmagan, har yo’nalishda bittadan tasmasi bo’lgan, shuningdek bir tomonlama harakat tashkil etilgan yo’llarda yo’lning chap tomonida to’xtash va to’xtab turishga ruxsat etiladi.\nYHQ 13-bobi 91-bandi: Quyidagi joy va holatlarda to’xtash taqiqlanadi: piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda."
  },
  {
    "id": 781,
    "biletId": 79,
    "text": "Yonlama oraliq masofani tanlashda tezlikning dahli bormi?",
    "options": [
      "Yonlama oraliq masofani tanlashni tezlikka aloqasi yo’q",
      "Tezlik oshganda yonlama oraliq masofani oshirish kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 73-bandi: Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to’qnashib ketmaslik kafolatini beradigan darajadagi oraliq masofani, shuningdek yo’l harakati xavfsizligini ta’minlaydigan yonlama oraliq masofani saqlashi kerak."
  },
  {
    "id": 782,
    "biletId": 79,
    "text": "Ushbu vaziyatda quvib o’tishdan so’ng Siz o’rta bo’lakda qolishingiz mumkinmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i79_2.webp",
    "explanation": "YHQ 10-bobi 66-bandi: Harakat ikki tomonlama bo’lgan va chiziqlar bilan belgilangan (1.9 chizig’i bilan belgilanganidan tashqari) uchta bo’lakli yo’llarda, ikki yo’nalishda harakatlanish uchun mo’ljallangan o’rta bo’lakka faqat quvib o’tish, aylanib o’tish, chapga burilish va qayrilib olish uchungina chiqishga ruxsat etiladi. Qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan chetki chap bo’lakni egallash taqiqlanadi."
  },
  {
    "id": 783,
    "biletId": 79,
    "text": "Cheklangan ko’rinish sharoitida orqaga harakatlanishda harakat xavfsizligini ta’minlash uchun:",
    "options": [
      "Avariya (xavf-xatar) ishoralarini yoqish",
      "Tovushli signal berish",
      "Boshqa shaxslar yordamidan foydalanish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 63-bandi: Transport vositasini orqaga harakatlantirishda haydovchi yo’l harakati xavfsizligini ta’minlashi va boshqa yo’l harakati qatnashchilariga xalaqit bermasligi shart. Zarurat tug'ilganda haydovchi boshqa shaxslarning yordamidan foydalanishi kerak."
  },
  {
    "id": 784,
    "biletId": 79,
    "text": "Uzoq davom etadigan keng ravon yo’lda avtomobilni yuqori tezlikda boshqarganda haydovchiga tezlik qanday qabul qilinadi?",
    "options": [
      "Tezlikni qabul qilish o’zgarmaydi",
      "Aslidagidan tez harakatlanayotganga o’xshaydi",
      "Aslidagidan sekin harakatlanayotganga o’xshaydi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Aslidagidan sekin harakatlanayotganga o’xshaydi."
  },
  {
    "id": 785,
    "biletId": 79,
    "text": "Piyodalar to’xtab turgan avtobus va trolleybusning qaysi tomonidan yo’lni kesib o’tishlari kerak?",
    "options": [
      "Istalgan tomonidan",
      "Orqa tomonidan",
      "Oldi tomonidan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 19-bandi: Piyodalar to'xtab turgan avtobus va trolleybusning orqa tomonidan, tramvayning esa oldi tomonidan yo’lni kesib o’tishlari shart."
  },
  {
    "id": 786,
    "biletId": 79,
    "text": "Nosoz transport vositasini shatakka olgan yengil avtomobil salonida odam tashishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 143-bandi: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo’li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 787,
    "biletId": 79,
    "text": "Sizga ko’satilgan joyda yengil avtomobilda to’xtashga ruxsat etiladimi?",
    "options": [
      "Yo’q",
      "Ha"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i79_7.webp",
    "explanation": "YHQ 13-bobi 91-bandi: Quyidagi joy va holatlarda to’xtash taqiqlanadi: to'xtagan transport vositasi bilan sidirg’a chiziq (qatnov qismining chetini belgilovchi chiziqdan tashqari), ajratuvchi bo'lak yoki qatnov qismining qarama-qarshi cheti orasidagi masofa 3 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 788,
    "biletId": 79,
    "text": "Ushbu holatda siz bajarishingiz lozim:",
    "options": [
      "Boshqa transport vositalari bo’lmasa to’xtamasdan o’tib ketish",
      "Belgi oldida to’xtash",
      "To’xtash chizig’i oldida to’xtash"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i79_8.webp",
    "explanation": "YHQ 1 ilova: \"To'xtamasdan harakatlanish taqiqlangan\". To'xtash chizig'i oldida, agar u bo'lmasa, kesib o’tiladigan qatnov qismining chetida to’xtamasdan harakatlanish taqiqlanadi. Haydovchi kesib o’tilayotgan yo’ldan, 7.13 qo’shimcha-axborot belgisi bo’lganda esa asosiy yo’ldan harakatlanayotgan transport vositalariga yo’l berishi kerak."
  },
  {
    "id": 789,
    "biletId": 79,
    "text": "Yo’lning qanday qismida harakatlanganda kuchli yonlama shamol xavfi ortadi?",
    "options": [
      "Yo’lning yopiq qismidan ochiq qismiga o’tganda",
      "Yo’lning yopiq qismida harakatlanganda",
      "Ochiq joyda harakatlanganda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Yo’lning yopiq qismidan ochiq qismiga o’tganda."
  },
  {
    "id": 790,
    "biletId": 79,
    "text": "Kunning yorug’ vaqtida aholi punktlaridan tashqarida quvib o’tilayotgan transport vositasi haydovchisining e’tiborini qanday jalb qilasiz?",
    "options": [
      "Faqat chiroqlarni yoqib-o’chirish bilan",
      "Sanab o’tilgan barcha usul bilan va ularni birgalikda qo’llash bilan",
      "Faqat tovush ishoralarini qo’llab"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 48-bandi: Tovushli ishoralar faqat quyidagi hollarda qo’llanilishi mumkin:\naholi punktlaridan tashqarida boshqa haydovchilarni quvib o’tish haqida ogohlantirish uchun;\nzarur bo’lgan hollarda yo’l-transport hodisasining oldini olish uchun.\nYuqorida ko’rsatilgan hollardan tashqari tovushli ishoralardan foydalanish taqiqlanadi.\nYHQ 8-bobi 49-bandi: Quvib o’tish haqida tovushli ishora o’rniga yoki ubilan birga fara chiroqlarini yoqib-o’chirib, ogohlantirish ishorasini ham berish mumkin."
  },
  {
    "id": 791,
    "biletId": 80,
    "text": "To’xtab turish qoidasini kim buzdi?",
    "options": [
      "Faqat \"B\"",
      "Faqat \"A\"",
      "\"A\" va \"B\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i80_1.webp",
    "explanation": "YHQ 1-ilova: 7.6.1 — 7.6.9. \"Transport vositasini to’xtab turish joyiga qo’yish usuli\". 7.6.1 barcha turdagi transport vositalarini to’xtab turishi uchun yo’lning qatnov qismida, trotuar yoniga qo’yish usulini, 7.6.2 — 7.6.9 trotuar yonidagi to’xtab turish joyiga yengil avtomobillar, mototsikllar, mopedlar va skuterlarni qo’yish usulini bildiradi."
  },
  {
    "id": 792,
    "biletId": 80,
    "text": "Tormoz tizimi ishlamaydigan avtomobilning vazni sizning avtomobilingizni yarim vaznidan og’ir bo’lsa uni shatakka olishingizga ruxsat etiladimi",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi",
      "Faqat 30 km/soat tezlikda ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandi: Shatakka olish quyidagi holatlarda taqiqlanadi: tormoz tizimi ishlamayotgan transport vositasining haqiqiy vazni shatakka olgan transport vositasining haqiqiy vaznining yarmidan ortiq bo’lsa (haqiqiy vazni kam bo'lgan bunday transport vositasini faqat qattiq ulagich yordamida yoki qisman ortish usuli bilan shatakka olishga yo’l qo’yiladi)."
  },
  {
    "id": 793,
    "biletId": 80,
    "text": "Yoqilg’i bilan ta’minlash tepkisini keskin tezlikni oshirish uchun bosayotganda, avtomobil sirpanishni boshlasa haydovchi qanday harakat qilishi kerak?",
    "options": [
      "Tepkiga ta’sir etuvchi kuchni kamaytirish",
      "Tepkini yana kuchliroq bosish",
      "Tepkiga ta’sir etuvchi kuchni o’zgartirmaslik"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Tepkiga ta’sir etuvchi kuchni kamaytirish."
  },
  {
    "id": 794,
    "biletId": 80,
    "text": "Yengil avtomobilda qaysi yo’nalishda harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat to’g’riga",
      "Faqat o’ngga va chapga",
      "Istalgan yo’nalishda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i80_4.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. \"Harakatlanish to’g’riga\". 7.4.1 belgi bilan o’rnatilgan yo’l belgisining ta’siri yuk tashuvchi, shu jumladan, tirkamali, to’la vazni 3,5 tonnadan ortiq bo’lgan transport vositalariga tatbiq etiladi."
  },
  {
    "id": 795,
    "biletId": 80,
    "text": "Qaysi yo’l belgilari qayrilib olishga ruxsat beradi?",
    "options": [
      "Faqat \"b\" va \"d\"",
      "Faqat \"a\", \"b\" va \"c\"",
      "Faqat \"b\"",
      "Barchasi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i80_5.webp",
    "explanation": "YHQ 1-ilova: А va Б belgilari 5.7.1, 5.7.2. \"Bir tomonlama harakatli yo’lga chiqish\", Harakatlanish bir tomonlama bo’lgan yo’lga yoki qatnov qismiga chiqishni bildiradi. В va Г belgilari 5.10.2, 5.10.3. \"Yo’nalishli transport vositalari uchun bo’lagi bor yo’lga chiqish\" ni bildiradi. Bunday belgilar chorraxalarda qayrilib olishni taqiqlamaydi."
  },
  {
    "id": 796,
    "biletId": 80,
    "text": "Yo’nalishli transport vositasi bekatidan tashqarida yo’l chetidan qo’zg’alayotgan yo’nalishli transport vositasiga yo’l berishingiz kerakmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i80_6.webp",
    "explanation": "YHQ 9-bobi 53-bandi: Haydovchi harakatlanishni boshlash, manyovr qilish (qayta tizilish, burilish, qayrilib olish, quvib o’tish va aylanib o’tish) va to’xtashdan oldin bajarilayotgan manyovr boshqa yo’l harakati ishtirokchilarini harakatlanishiga xavf tug’dirmasligi kerak."
  },
  {
    "id": 797,
    "biletId": 80,
    "text": "Quruq ob-havo sharoitida asfalt - beton qoplamali yo’lda harakatlanayotgan haydovchi yomg’ir tomchilab qolganda nima qilishi kerak?",
    "options": [
      "Tezlikni o’zgartirmasdan harakatni davom etttirishi",
      "Yomg’ir tezlashib ketmasdan tezroq harakat qilishi",
      "Tezlikni kamaytirishi va ehtiyot bo’lishi kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Yomg’ir tomchilab boshlanganda tezlikni kamaytirishi va extiyotkorlik choralarini kurishi shart, chunki yo'ldagi chang va moy va rezina qoldiqlari va boshqalar yo’lda sirpanchiq qatlam xosil qilib, ishqalanish koefitsentini kamaytirib yuboradi."
  },
  {
    "id": 798,
    "biletId": 80,
    "text": "Aholi punktlariga tegishli yo’l harakati qoidalari qayerdan boshlanadi?",
    "options": [
      "Aholi punkti nomini ko’rsatuvchi oq rangli 5.22 yo’l belgisidan boshlab",
      "Aholi punkti nomini ko’rsatuvchi oq rangli 5.22 yoki 5.24 havorang rangli yo’l belgidan boshlab",
      "Yo’l yuzidagi qurilma va inshootlardan boshlab"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1 ilova: 5.22. \"Aholi punktining boshlanishi\". Ushbu Qoidalarning aholi punktlarida harakatlanish tartibini belgilovchi talablariga amal qilinadigan joylarning nomi hamda uning boshlanishini bildiradi."
  },
  {
    "id": 799,
    "biletId": 80,
    "text": "Ushbu yo’l belgisi ta’sir oralig’ida sizga odam tushirish (chiqarish)ga yoki yuk ortish (tushirish)ga ruxsat etiladimi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i80_9.webp",
    "explanation": "YHQ 1 ilova: 3.28. \"To'xtab turish taqiqlangan\". Transport vositalarining to'xtab turishi taqiqlanishini bildiradi. To'xtab turish — transport vositasiga yo’lovchilarni chiqarish yoki tushirish, yuk ortish yoki tushirish bilan bog’liq bo’lmagan hollarda harakatini 10 daqiqadan ko’proq vaqtga atayin to’xtatish."
  },
  {
    "id": 800,
    "biletId": 80,
    "text": "Burilish ko’rsatkichi bilan berilayotgan ogohlantiruvchi ishora qachon to’xtatilishi kerak?",
    "options": [
      "Manyovr bajargandan so’ng darhol",
      "Manyovr bajarayotganda",
      "Manyovr bajarishdan oldin"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 46-bandi: Burilish ko’rsatgichi yoki qo'l bilan berilayotgan ishora manyovrni bajarishdan oldinroq berilishi va uni tugallagach, darhol to’xtatilishi kerak (qo’l bilan berilayotgan ishorani manyovrni bevosita bajarishdan oldin tugallash mumkin).\nIshoralar boshqa yo’l harakati qatnashchilarini chalg’itmasligi kerak."
  },
  {
    "id": 801,
    "biletId": 81,
    "text": "Harakatlanishga ruxsat berilgan:",
    "options": [
      "Qizil va sariq avtomobilga",
      "Qizil, sariq va yashil avtomobilga",
      "Qizil, ko’k, yashil va sariq avtomobilga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i81_1.webp",
    "explanation": "YHQ 7-bobi 38-bandi: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi: qo'llari yon tomonga uzatilganda yoki tushirilganda: chap va o'ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o'tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi;\no'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o'ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonidan qatnov qismini kesib o'tishga ruxsat etiladi; qo’lini yuqoriga ko’targanda: ushbu Qoidalarning 42-bandida ko’rsatilganidan boshqa hollarda transport vositalari va piyodalarning barcha yo’nalishlarda harakatlanishi taqiqlanadi;\ntartibga soluvchi haydovchi va piyodalarga tushunarli bo'lgan boshqa ishoralarni ham berishi mumkin. Ishoralar yaxshi ko’rinishi uchun tartibga soluvchi jezl yoki yorug’lik qaytaradigan qizil rangli moslamalarni qo’llashi mumkin."
  },
  {
    "id": 802,
    "biletId": 81,
    "text": "Ushbu belgi ...",
    "options": [
      "Oldinda transport vositalarining tirbandligi haqida ogohlantiradi",
      "Oldinda transport vositalari orasida xavsfsiz oraliqni ta’minlash haqida ogohlantiradi",
      "Oldinda harakatlanish serqatnovligi haqida ogohlantiradi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i81_2.webp",
    "explanation": "YHQ, 1.32. “Tirbandlik” belgisi."
  },
  {
    "id": 803,
    "biletId": 81,
    "text": "Quyidagi belgilardan qaysi biri haydovchini boshqa xavf-xatarlar to’g’risida ogohlantiradi?",
    "options": [
      "Faqat \"b\"",
      "Faqat \"a\"",
      "Faqat \"c\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i81_3.webp",
    "explanation": "YHQ, 1.30. \"Boshqa xavf-xatarlar”."
  },
  {
    "id": 804,
    "biletId": 81,
    "text": "Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning yo’naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi kimga yo’l berishi kerak?",
    "options": [
      "Qarama-qarshi yo’nalishda to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga",
      "O’ngdan kelayotgan transport vositalariga",
      "Boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo’l berishi kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 15-bobi 100-bandi: Svetoforning qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning yo’naltirgichli yashil ishorasi yo’nalishida harakatlanayotgan transport vositasining haydovchisi boshqa yo’nalishlarda harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 805,
    "biletId": 81,
    "text": "Yo’l-transport hodisasi - bu ...",
    "options": [
      "Yo’l harakati qatnashchilarining yo’l-transport hodisalari va ularning oqibatlaridan himoyalanganlik darajasini aks ettiruvchi yo’l harakati holati",
      "Transport vositasining yo’lda harakatlanishi jarayonida ro’y bergan, fuqarolarning halok bo’lishiga yoki sog’lig’iga zarar yetishiga, transport vositalari, inshootlar, yuklarning shikastlanishi yoxud boshqa moddiy zarar yetishiga sabab bo’lgan hodisa"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar 6 band: Yo'l-transport hodisasi — transport vositasining yo'lda harakatlanishi jarayonida ro'y bergan, fuqarolarning halok bo'lishiga yoki sog’lig’iga zarar yetishiga, transport vositalari, inshootlar, yuklarning shikastlanishi yoxud boshqa moddiy zarar yetishiga sabab bo’lgan hodisa."
  },
  {
    "id": 806,
    "biletId": 81,
    "text": "Avtomobilni qanday boshqarish usuli yonilg’i sarfini tejaydi?",
    "options": [
      "Ohista (ravon) tezlanish va shiddat bilan sekinlashish bilan",
      "Shiddat bilan tezlanish va ohista (ravon) sekinlashish bilan",
      "Ohista (ravon) tezlanish va ohista (ravon) sekinlashish bilan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Avtomobilning tezligini ravon orttirish va uni ohista ravon tormozlash yoqilg’i sarfini tejaydi."
  },
  {
    "id": 807,
    "biletId": 81,
    "text": "Piyodalar o’tish joyi - bu ...",
    "options": [
      "Yo’l qatnov qismining piyodalar kesib o’tishi uchun mo’ljallangan, 5.16.1, 5.16.2 yo’l belgilari va 1.14.1-1.14.3 yo’l chiziqlari bilan ajratilgan bo’lagi",
      "Yo’lning piyodalar harakatlanishi uchun mo’ljallangan va transport vositalari harakati taqiqlangan qismi",
      "Qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to’siqlar bilan ajratilgan va piyodalarning harakatlanishi uchun mo’ljallangan yo’l qismi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar 6 band: Piyodalar o’tish joyi — yo'l qatnov qismining piyodalar kesib o’tishi uchun mo’ljallangan, 5.16.1, 5.16.2 yo’l belgilari va 1.14.1 — 1.14.3 yo’l chiziqlari bilan ajratilgan bo’lagi. Yo’l chiziqlari bo'lmasa, piyodalar o’tish joyining kengligi 5.16.1 va 5.16.2 yo’l belgilari orasidagi masofa bilan aniqlanadi."
  },
  {
    "id": 808,
    "biletId": 81,
    "text": "Moped haydovchilariga ruxsat beriladi:",
    "options": [
      "Faqat yo’l yoqasidan harakatlanishga, agar piyodalarga halaqit bermasa",
      "Faqat yo’lning chetki o’ng bo’lagi tomonidan bir qator bo’lib harakatlanishga",
      "Barcha sanab o’tilgan hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 166-bandi: Velosipedlar, individual harakatlanish vositalari, mopedlar, aravalar, miniladigan yoki yuk ortiladigan hayvonlarning yo’lning chetki o’ng bo’lagida imkoni boricha o’ng tomonidan bir qator bo’lib harakatlanishiga yo’l qo’yiladi. Agar piyodalarga xalaqit bermasa, yo’l yoqasidan harakatlanishga ham ruxsat etiladi."
  },
  {
    "id": 809,
    "biletId": 81,
    "text": "Ushbu yotiq chiziq nimani bildiradi?",
    "options": [
      "Sun’iy yo’l notekisligini",
      "Velosiped yo’lkasini",
      "Yo’nalishli taksilar to’xtaydigan joyni"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i81_9.webp",
    "explanation": "YHQ, 1.29 yotiq chiziq \"Sun’iy yo’l notekisligi\"."
  },
  {
    "id": 810,
    "biletId": 81,
    "text": "Siz chorrahada chapga burilishda qaysi transport vositasia yo’l berishingiz kerak?",
    "options": [
      "Hech kimga",
      "Yengil avtomobilga",
      "Avtobusga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i81_10.webp",
    "explanation": "YHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda rel’ssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 811,
    "biletId": 82,
    "text": "Bosh miya jarohatlanishining asosiy alomatlari:",
    "options": [
      "Hushdan ketish bir necha soniyadan bir necha soatgacha bo’lishi mumkin",
      "Qayt qilish bir-ikki marta, og’ir holatlarda ko’proq bo’lishi mumkin",
      "Amneziya - xotiraning yo’qolishi sodir bo’lgan jarohatlanish bilan bog’liq va hayotidagi ba’zi voqealar xotirasidan o’chadi",
      "Yuqoridagi barcha holatlar"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "Yuqoridagi barcha holatlar."
  },
  {
    "id": 812,
    "biletId": 82,
    "text": "G’ildiraklarni yo’l bilan ilashishi yo’qolganda (kuchli yomg’ir, sel yoki suv toshgan yo’l qismlari) haydovchi:",
    "options": [
      "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim",
      "Tezlikni oshirishi lozim",
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Suvda sirpanish kuchli yomg’ir, sel yoki suv toshgan yo'l qismlarida sodir bo’ladi bu holda harakat xavfsizligini ta’minlash maqsadida avtomobilni dvigatel bilan tormozlash yaxshi samara beradi. Bahorgi, kuzgi yomg’irlar va suv toshgan yo’lning pastqam qismlarida harakatlanishda yuqoridagi usulda tomozlash tavsiya etiladi."
  },
  {
    "id": 813,
    "biletId": 82,
    "text": "Ushbu ko’rsatilgan yo’llar nechta qatnov qismiga ega?",
    "options": [
      "Chapda bittadan, o’ngda ikkitadan",
      "Bittadan",
      "To’rttadan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i82_3.webp",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Ajratuvchi mintaqa — yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi."
  },
  {
    "id": 814,
    "biletId": 82,
    "text": "Yo’lning qiyaliklarida qisqa muddatga to’xtagan mexanik uzatmali avtomobilni joyidan to’satdan harakatlanib ketishini oldini olish uchun:",
    "options": [
      "Uzatmalar qutisi richagini neytral holatga o’tkazish lozim",
      "Birinchi uzatmani yoki orqauzatmani ulash lozim",
      "To’xtab turish tormozidan foydalanish lozim"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Yo'lning qiyalik qismlarida to’xtaganda mexanik uzatmali avtomobillarda to'xtab turish tormozi bilan ushlab turish maqsadga muvofiq."
  },
  {
    "id": 815,
    "biletId": 82,
    "text": "To’xtab turish tormoz tizimi N toifadagi avtotransport vositalarini aslahalangan holatda qanday qiyalikda harakatsiz holatda ushlab tura olmasa foydalanish taqiqlanadi?",
    "options": [
      "20 foizdam kam bo’lgan",
      "31 foizdam kam bo’lgan",
      "25 foizdam kam bo’lgan",
      "16 foizdam kam bo’lgan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ, 3-ilova, Tormoz tizimlari: 1.6.To'xtab turish tormoz tizimi transport vositalarini quyidagi joylarda harakatsiz holatda ushlab tura olmasa: to'la aslahalangan holatda transport vositalarini 16 foizdan kam bo'lmagan qiyalikda;\nM toifa uchun 25 foiz, N toifa uchun 31 foiz."
  },
  {
    "id": 816,
    "biletId": 82,
    "text": "Qaysi belgi yo’lning tor qismlarida ro’paradan kelayotgan transport vositasiga yo’l berish lozimligini bildiradi?",
    "options": [
      "\"b\" va \"c\"",
      "\"d\"",
      "\"a\" va \"d\"",
      "\"b\"",
      "\"a\""
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i82_6.webp",
    "explanation": "YHQ, 2.6. \"Ro’para harakatlanishning ustunligi\"."
  },
  {
    "id": 817,
    "biletId": 82,
    "text": "Ko’rsatilgan yo’l belgilaridan qaysi biri taqiqlovchi belgilar ilgari kiritgan barcha cheklovlarni bekor qiladi?",
    "options": [
      "\"c\" va \"d\"",
      "\"a\" va \"b\"",
      "Faqat \"c\"",
      "Barchasi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i82_7.webp",
    "explanation": "YHQ 1-ilova: 3.31. \"Barcha cheklovlarning oxiri\". 3.16, 3.20, 3.22, 3.24, 3.26 — 3.30 belgilaridan bir nechtasiga bir vaqtda amal qiladigan oraliqlarning oxirini bildiradi."
  },
  {
    "id": 818,
    "biletId": 82,
    "text": "Piyodalar yo’lkasi - bu ...",
    "options": [
      "Qatnov qismiga tutashgan yoki undan maysazor, ariq, maxsus to’siqlar bilan ajratilgan va piyodalarning harakatlanishi uchun mo’ljallangan yo’l qismi",
      "Yo’lning piyodalar harakatlanishi uchun mo’ljallangan va transport vositalari harakati taqiqlangan qismi",
      "Yo’l qatnov qismining piyodalar kesib o’tishi uchun mo’ljallangan, 5.16.1, 5.16.2 yo’l belgilari va 1.14.1-1.14.3 yo’l chiziqlari bilan ajratilgan bo’lagi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar 6 band: Piyodalar yo’lkasi — yo'lning piyodalar harakatlanishi uchun mo’ljallangan va transport vositalari harakati taqiqlangan qismi."
  },
  {
    "id": 819,
    "biletId": 82,
    "text": "Ushbu belgilardan qaysi biri haydovchining shu joydagi yashash yoki ishlash joyiga yetib borshiga monelik qilmaydi?",
    "options": [
      "\"a\"",
      "\"c\"",
      "\"b\" va \"c\"",
      "\"b\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i82_9.webp",
    "explanation": "YHQ 1-ilova 3.2. \"Harakatlanish taqiqlangan\"."
  },
  {
    "id": 820,
    "biletId": 82,
    "text": "Qaysi rasmda ajratuvchi mintaqasi bor bo’lgan yo’l ko’rsatilgan?",
    "options": [
      "Chap tarafdagisida",
      "Har ikkisida",
      "O’ng tarafdagisida"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i82_10.webp",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Ajratuvchi mintaqa — yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi."
  },
  {
    "id": 821,
    "biletId": 83,
    "text": "Agar haydovchi keskin tormoz bermasdan harakatni to’xtata olmasa, svetoforning yashil ishorasidan keyin yongan sariq ishorasida harakatni davom ettirishga ruxsat beriladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 42-bandi: Sariq ishora yonganda yoki tartibga soluvchining qo'li yuqoriga ko’tarilganida, ushbu Qoidalarning 41-bandida nazarda tutilgan joylarda, keskin tormoz bermasdan to’xtashga ulgura olmaydigan transport vositalarining haydovchilariga harakatni davom ettirishga ruxsat etiladi."
  },
  {
    "id": 822,
    "biletId": 83,
    "text": "Ushbu chorrahada kim yo’l beradi?",
    "options": [
      "Mototsikl va sariq avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i83_2.webp",
    "explanation": "YHQ 14-bobi 98-bandi: Aylanma harakatlanish chorrahasida harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga) ega."
  },
  {
    "id": 823,
    "biletId": 83,
    "text": "Qaysi belgi velosiped yo’lkasini ko’rsatadi?",
    "options": [
      "\"c\"",
      "\"a\"",
      "\"b\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i83_3.webp",
    "explanation": "YHQ, 1-ilova: 4.5. \"Velosiped yo’lkasi\". Faqat velosiped va individual harakatlanish vositalarida harakatlanishga ruxsat etilishini bildiradi. Trotuar yoki piyodalar yo’lkasi bo’lmasa, velosiped yo’lkasidan piyodalar ham yurishlari mumkin."
  },
  {
    "id": 824,
    "biletId": 83,
    "text": "Ushbu belgi qaysi turdagi transport vositalarini to’xtamasdan o’tishlarini taqiqlaydi?",
    "options": [
      "Yuk avtomobillarini",
      "Yengil avtomobillarini",
      "Barcha turdagi transport vositalarini"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i83_4.webp",
    "explanation": "YHQ, 1-ilova: 3.17.1. \"Bojxona\". Bojxona (nazorat punkti) oldida to'xtamasdan o’tib ketish taqiqlanadi."
  },
  {
    "id": 825,
    "biletId": 83,
    "text": "Shoking belgilari:",
    "options": [
      "Kuchli ter ajralishi",
      "Og’iz qurishi, chanqoqlik, nafas olishning tezlashuvi",
      "Teri va shilliq qavatining oqarishi",
      "Yuqoridagi barcha holatlar"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "Yuqoridagi barcha holatlar."
  },
  {
    "id": 826,
    "biletId": 83,
    "text": "Qaysi belgi \"Xavfli yuk tashiyotgan transport vositalarining harakati taqiqlangan\" deb nomlanadi?",
    "options": [
      "\"c\"",
      "\"a\"",
      "\"b\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i83_6.webp",
    "explanation": "YHQ, 1-Ilova: 3.32. \"Xavfli yuk tashiyotgan transport vositasining xarakati takiklangan\"."
  },
  {
    "id": 827,
    "biletId": 83,
    "text": "Xavfsiz oraliq masofani ko’rsating",
    "options": [
      "\"B\"",
      "\"C\"",
      "\"A\" va \"C\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i83_7.webp",
    "explanation": "YHQ 10-bobi 73-bandi: Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to’qnashib ketmaslik kafolatini beradigan darajadagi oraliq masofani, shuningdek yo’l harakati xavfsizligini ta’minlaydigan yonlama oraliq masofani saqlashi kerak."
  },
  {
    "id": 828,
    "biletId": 83,
    "text": "Quvib o’tishga taaluqli belgilarni ko’rsating?",
    "options": [
      "\"b\" va \"c\"",
      "\"a\" va \"b\"",
      "\"a\" va \"c\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i83_8.webp",
    "explanation": "YHQ, 1-ilova: 3.20. \"Quvib o’tish taqiqlangan\". 3.22. \"Yuk avtomobillarida quvib o'tish taqiqlangan\""
  },
  {
    "id": 829,
    "biletId": 83,
    "text": "Chorraha - bu ..",
    "options": [
      "Yo’llarning o’zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi",
      "Bevosita yo’lga tutashgan va transport vositalari o’tib ketishi uchun mo’ljallanmagan hudud (hovlilar, turar joy dahalari, avtomobil to’xtab turish joylari, yonilg’i quyish shoxobchalari, korxona va shunga o’xshashlar)",
      "Yo’lning relssiz transport vositalari harakati uchun mo’ljallangan qismi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Chorraha — yo’llarning o’zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi."
  },
  {
    "id": 830,
    "biletId": 83,
    "text": "Avtomobillarning bir qator bo’lib harakatlanishi uchun yetarlicha keng bo’lgan, yo’l chiziqlari bilan belgilangan yoki belgilanmagan yo’l qatnov qismining har qanday bo’ylama bo’lagi nima deb ataladi?",
    "options": [
      "Qatnov qismi",
      "Yo’l yoqasi",
      "Harakatlanish tasmasi",
      "Yondosh hudud"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Harakatlanish bo’lagi — avtomobillarning bir qator bo’lib harakatlanishi uchun yetarlicha keng bo'lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo’l qatnov qismining har qanday bo’ylama bo’lagi."
  },
  {
    "id": 831,
    "biletId": 84,
    "text": "Qaysi belgilar yuk avtomobillarida quvib o’tishning taqiqlangan hududning oxirini bildiradi?",
    "options": [
      "Faqat \"a\"",
      "Faqat \"a\", \"b\"",
      "\"a\", \"b\" va \"c\"",
      "Faqat \"b\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i84_1.webp",
    "explanation": "YHQ, 3.21. \"Quvib o’tish taqiqlangan hududning oxiri\".\n3.23. \"Yuk avtomobillarida quvib o’tish taqiqlangan hududning oxiri\" .3.Z1. \"Barcha cheklovlarning oxiri\". 3.16, 3.20, 3.22, 3.24, 3.26 — 3.30 belgilaridan bir nechtasiga bir vaqtda amal qiladigan oraliqlarning oxirini bildiradi."
  },
  {
    "id": 832,
    "biletId": 84,
    "text": "Ushbu holatda qaysi transport vositasi yo’l berishi kerak?",
    "options": [
      "Avtobus",
      "Yengil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i84_2.webp",
    "explanation": "YHQ 9-bobi 53-bandi: Haydovchi harakatlanishni boshlash, manyovr qilish (qayta tizilish, burilish, qayrilib olish, quvib o’tish va aylanib o’tish) va to’xtashdan oldin bajarilayotgan manyovr boshqa yo’l harakati ishtirokchilarini harakatlanishiga xavf tug’dirmasligi kerak."
  },
  {
    "id": 833,
    "biletId": 84,
    "text": "Svetoforning miltillovchi sariq ishorasi nima haqida ogohlantiradi?",
    "options": [
      "Chorraha tartibga solinmaganligi to’g’risida",
      "Harakatlanishga ruxsat beradi",
      "Barcha javoblar to’g’ri"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 31-bandi: miltillovchi sariq ishora harakatlanishga ruxsat beradi va tartibga solinmagan chorraha yoki piyodalar o’tish joyi borligidan xabardor qiladi, xavf-xatar haqida ogohlantiradi."
  },
  {
    "id": 834,
    "biletId": 84,
    "text": "Bosh miya jarohatlanishining quyidagi alomatlar bilan xarakterlanadi:",
    "options": [
      "Hushdan ketish bir necha soniyadan bir necha soatgacha bo’lishi mumkin",
      "Amneziya - xotiraning yo’qolishi sodir bo’lgan jarohatlanish bilan bog’liq va hayotidagi ba’zi voqealar xotirasidan o’chadi",
      "Qayt qilish bir-ikki marta, og’ir holatlarda ko’proq bo’lishi mumkin",
      "Yuqoridagi barcha holatlar"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "Yuqoridagi barcha holatlar."
  },
  {
    "id": 835,
    "biletId": 84,
    "text": "Yo’l harakati xavfsizligini ta’minlash -",
    "options": [
      "Yo’llarda harakatni boshqarish bo’yicha huquqiy, tashkiliy-texnikaviy tadbirlar va boshqaruv harakatlari majmui",
      "Yo’l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og’ir oqibatlarini kamaytirishga qaratilgan faoliyat"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Yo’l harakati xavfsizligini ta’minlash — yo’l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og’ir oqibatlarini kamaytirishga qaratilgan faoliyat."
  },
  {
    "id": 836,
    "biletId": 84,
    "text": "Trasport vositalarini qatnov qismining kengaytirilmagan joylarida qanday tartibda to’xtash va to’xtab turishiga ruxsat etiladi?",
    "options": [
      "Burchak ostida",
      "Parallel ravishda",
      "Istalgan usulda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 89-bandi: Transport vositalarini yo’lning qatnov qismida bir qator qilib, qatnov qismi chetiga parallel ravishda kajavasi bo’lmagan ikki g’ildirakli transport vositalarini ikki qator qilib qo’yishga ruxsat etiladi."
  },
  {
    "id": 837,
    "biletId": 84,
    "text": "Chorrahadan tashqaridagi tartibga solinmagan velosiped yo’lkasi bilan yo’l kesishmasida kim yo’l berishi kerak?",
    "options": [
      "Velosiped yo’lkasidan harakatlanayotgan velosiped va moped haydovchilari",
      "Transport vositalari haydovchilari"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 169-bandi: Chorrahadan tashqaridagi tartibga solinmagan velosiped yo’lkasi bilan yo’l kesishmasida velosiped va individual harakatlanish vositalari yo’lda harakatlanayotgan boshqa transport vositalariga yo’l berishlari kerak."
  },
  {
    "id": 838,
    "biletId": 84,
    "text": "Tik nishabliklarda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?",
    "options": [
      "Nishablik qancha qiya bo’lsa uzatma pog’onasi shuncha past tanlanadi",
      "Nishablik qancha qiya bo’lsa uzatma pog’onasi shuncha yuqori tanlanadi",
      "Pog’ona tanlshning nishablikka aloqasi yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Bunday samarali tormozlash usulini mexanik uzatmali avtomobillarda haydovchi tik nishabliklarda qo’llashi mumkin, yoki avtomatlashtirilgan uzatmada qo’l bilan boshqarish tizimiga o’tish maqsadga muvofiqdir."
  },
  {
    "id": 839,
    "biletId": 84,
    "text": "Qaysi belgi to’xtash chizig’i oldida, u bo’lmaganda, kesib o’tiladigan qatnov qismining chetida to’xtamasdan harakatlanishni taqiqlaydi?",
    "options": [
      "\"b\"",
      "\"d\"",
      "\"a\"",
      "\"b\" va \"c\"",
      "\"a\" va \"d\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i84_9.webp",
    "explanation": "YHQ 2.5. \"To’xtamasdan harakatlanish taqiqlangan\" belgisi."
  },
  {
    "id": 840,
    "biletId": 84,
    "text": "Hayvonlarni yo’lda haydab borishga qoidaga ko’ra ruxsat etiladimi?",
    "options": [
      "Kunning yorug’ vaqtida",
      "Kunning qorong’i vaqtida",
      "Istalgan vaqtida"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 171-bandi: Hayvonlar yo’lda, asosan kunning yorug’ vaqtida haydab borilishi kerak. Podachilar hayvonlarni mumkin qadar yo’lning o’ng chetida olib yurishlari kerak."
  },
  {
    "id": 841,
    "biletId": 85,
    "text": "Quyidagi izoh qaysi atamaga tegishli? Texnik nuqson, tashilayotgan yuk, haydovchi va yo’lovchining holati, yo’ldagi biror to’siq tufayli xavf yuzaga kelganda yoxud ob-havo sharoitiga bog’liq holda transport vositasi harakatini to’xtatish.",
    "options": [
      "Yo’l harakati xavfsizligini ta’minlash",
      "Yo’l transport hodisasi",
      "Majburiy to’xtash"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: majburiy to’xtash — texnik nuqson, tashilayotgan yuk, haydovchi va yo’lovchining holati, yo’ldagi biror to’siq tufayli xavf yuzaga kelganda yoxud ob-havo sharoitiga bog’liq holda transport vositasi harakatini to’xtatish. Haydovchining ushbu xatti-harakati oxirgi zarur chora bo’lib, qoidabuzarlik deb e’tirof etilmaydi."
  },
  {
    "id": 842,
    "biletId": 85,
    "text": "Avtomobilni qanday boshqarish usuli yonilg’i sarfini tejaydi?",
    "options": [
      "Ohista (ravon) tezlanish va shiddat bilan sekinlashish bilan",
      "Shiddat bilan tezlanish va ohista sekinlashish bilan",
      "Ohista (ravon) tezlanish va ohista sekinlashish bilan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Avtomobilning tezligini ravon orttirish va uni ohista ravon tormozlash yoqilg’i sarfini tejaydi."
  },
  {
    "id": 843,
    "biletId": 85,
    "text": "Ko’rsatilgan qaysi belgi yo’lning o’ta sirpanchiq bo’lgan qismini bildiradi?",
    "options": [
      "Faqat \"a\"",
      "\"a\" va \"b\"",
      "Faqat \"b\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i85_3.webp",
    "explanation": "YHQ, 1.15. \"Sirpanchiq yo’l\". Yo’lning o’ta sirpanchiq bo’lgan qismini bildiradi."
  },
  {
    "id": 844,
    "biletId": 85,
    "text": "Qaysi belgi falokatli holatlar uchun kirish yo’lini bildiradi?",
    "options": [
      "\"a\" ва \"d\"",
      "\"b\"",
      "\"c\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i85_4.webp",
    "explanation": "YHQ, 5.40. \"Falokatli holatlar uchun kirish yo’li\" belgisi."
  },
  {
    "id": 845,
    "biletId": 85,
    "text": "Qaysi belgi svetoforining (tartibga soluvchining) taqiqlovchi ishorasida transport vositalari to’xtaydigan joyni bildiradi?",
    "options": [
      "\"c\"",
      "\"b\"",
      "\"a\"",
      "\"d\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i85_5.webp",
    "explanation": "YHQ, 5.33. \"To’xtash chizig’i\" belgisi."
  },
  {
    "id": 846,
    "biletId": 85,
    "text": "Chap qo’lni yonga cho’zish yoki o’ng qo’lni tirsakdan to’g’ri burchak ostida bukib, yuqoriga ko’tarish ishorasi nimani bildiradi?",
    "options": [
      "Chapga burilishni yoki qayrilib olishni",
      "O’ngga burilishni yoki qayrilib olishni",
      "To’xtashni"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 45-bandi: Haydovchi harakatlanishni boshlashdan, qayta tizilishdan, burilish (qayrilib olish)dan va to’xtashdan oldin tegishli yo’nalishni ko’rsatuvchi yorug’lik ishoralarini yoqishi, ular bo’lmaganda yoki ishlamaganda qo’l bilan ishoralar berishi shart.\nChapga burilish (qayrilib olish)ni bildiruvchi ishoraga chap qo’lni yonga uzatish yoki o’ng qo’lni tirsakdan to’g’ri burchak ostida bukib, yuqoriga ko’tarish mos keladi.\no’ngga burilish (qayrilib olish)ni bildiruvchi ishoraga o’ng qo’lni yonga uzatish yoki chap qo’lni tirsakdan to’g’ri burchak ostida bukib, yuqoriga ko’tarish mos keladi.\nTo’xtash ishorasi chap yoki o’ng qo’lni yuqoriga ko’tarib beriladi."
  },
  {
    "id": 847,
    "biletId": 85,
    "text": "Arterial qon ketish alomatlarini ko’rsating:",
    "options": [
      "Qon tomirlaridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi",
      "Mayda qon tomirlaridan ichki a’zolarga qonning oqib chiqishi kuzatiladi",
      "Qon tomirlaridan to’q qizil rangdagi qon sizib oqib chiqadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Qon tomirlaridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi."
  },
  {
    "id": 848,
    "biletId": 85,
    "text": "Ushbu holatda qaysi transport vositasi yo’l berishi kerak?",
    "options": [
      "Yengil avtomobil",
      "Yuk avtomobili"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i85_8.webp",
    "explanation": "YHQ 10-bobi 75-bandi: Agar biror to’siq sababli qarama-qarshi yo’nalishlarda harakatlanish qiyin bo’lsa, to’siq o’z tomonida bo’lgan haydovchi yo’l berishi kerak."
  },
  {
    "id": 849,
    "biletId": 85,
    "text": "Sekinlashish bo’lagi bo’lgan yo’llarda burlmoqchi bo’lgan haydovchi qachon tezlikni kamaytirishi lozim?",
    "options": [
      "Sekinlashish bo’lagiga o’tguncha",
      "Sekinlashish bo’lagiga o’tgach"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 61-bandi: Sekinlashish bo’lagi bor bo’lgan yo’lda burilmoqchi bo’lgan haydovchi o’z vaqtida ushbu tasmaga qayta tizilishi va tezlikni faqat unda kamaytirishi kerak.\nYo’lga chiqish joyida tezlashish bo’lagi bo’lsa, haydovchi unda harakatlanishi va qo’shni tasmada harakatlanayotgan transport vositalariga yo’l berib, transport oqimiga qo’shilishi kerak."
  },
  {
    "id": 850,
    "biletId": 85,
    "text": "Qattiq ulagichda shatakka olingan avtobusda yoki trolleybusda odam tashishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 143-bandi: Qattiq yoki egiluvchan ulagich bilan shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish qisman ortish yo’li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 851,
    "biletId": 86,
    "text": "G’ildiraklarni yo’l bilan ilashishi yo’qolganda (kuchli yomg’ir, sel yoki suv toshgan yo’l qismlari) haydovchi:",
    "options": [
      "Tezlikni oshirishi lozim",
      "Tormoz tepkisini keskin bosish bilan tezlikni kamaytirishi lozim",
      "Dvigatel bilan tormozlash orqali tezlikni kamaytirishi lozim"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Suvda sirpanish kuchli yomg’ir, sel yoki suv toshgan yo'l qismlarida sodir bo’ladi bu holda harakat xavfsizligini ta’minlash maqsadida avtomobilni dvigatel bilan tormozlash yaxshi samara beradi. Bahorgi, kuzgi yomg’irlar va suv toshgan yo’lning pastqam qismlarida harakatlanishda yuqoridagi usulda tomozlash tavsiya etiladi."
  },
  {
    "id": 852,
    "biletId": 86,
    "text": "Venoz qon ketish alomatlarini ko’rsating:",
    "options": [
      "Mayda qon tomirlaridan ichki a’zolarga qonning oqib chiqishi kuzatiladi",
      "Qon tomiridan to’q qizil rangdagi qon sizib oqib chiqadi",
      "Qon tomiridan pushti rangli qon kuchli pulsatsiya bilan otilib chiqadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Qon tomiridan to’q qizil rangdagi qon sizib oqib chiqadi."
  },
  {
    "id": 853,
    "biletId": 86,
    "text": "Yengil avtomobil tirkamasi burilishda qanday troektoriya bo’yicha harakatlanadi?",
    "options": [
      "Burilish markaziga nisbatan avtomobil troektoriyasidan ichkarida",
      "Avtomobil troektoriyasidan bo’yicha",
      "Burilish markaziga nisbatan avtomobil troektoriyasidan tashqarida"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Har qanday tirkama shu kabi yengil avtomobil tirkamasi ham burilishda avtomobil burilish trayektoriyasidan ichkarida-markazga tomon siljiydi."
  },
  {
    "id": 854,
    "biletId": 86,
    "text": "Chorrahada qaysi avtomobil yo’l berishi kerak?",
    "options": [
      "Ko’k avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i86_4.webp",
    "explanation": "YHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 855,
    "biletId": 86,
    "text": "Agar biror-bir to’siq sababli qarama-qarshi yo’nalishlarda harakatlanish qiyin bo’lsa kim yo’l berishi kerak?",
    "options": [
      "To’siq o’z tomonida bo’lgan haydovchi",
      "To’siq bo’lmagan tomondagi haydovchi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 75-bandi: Agar biror to’siq sababli qarama-qarshi yo’nalishlarda harakatlanish qiyin bo’lsa, to’siq o’z tomonida bo’lgan haydovchi yo’l berishi kerak."
  },
  {
    "id": 856,
    "biletId": 86,
    "text": "Qaysi belgi temir yo’l kesishmasini to’suvchi qurilma bilan jihozlanganligi haqida ogohlantiradi?",
    "options": [
      "\"d\"",
      "\"c\"",
      "\"b\"",
      "\"a\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i86_6.webp",
    "explanation": "YHQ, 1.3. \"Diqqat temir yo’l kesishmasini to’suvchi qurilma\" belgisi."
  },
  {
    "id": 857,
    "biletId": 86,
    "text": "Ushbu belgilardan qaysi biri bir yoki bir nechta tasmalarda harakatlanish yo’nalishi qarama-qarshi tomonga o’zgarish mumkin bo’lgan yo’l qismining boshlanishini bildiradi?",
    "options": [
      "\"a\"",
      "\"b\"",
      "\"c\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i86_7.webp",
    "explanation": "YHQ, 5.35. \"Reversiv harakatlanish\". Bir yoki bir necha tasmalarda harakatlanish yo’nalishi qarama-qarshi tomonga o’zgarishi mumkin bo’lgan yo’l qismining boshlanishini bildiradi."
  },
  {
    "id": 858,
    "biletId": 86,
    "text": "Turar joy dahalaridan chiqishda haydovchilar:",
    "options": [
      "Boshqa harakat qatnashchilariga nisbatan imtiyozga ega",
      "Boshqa harakat qatnashchilariga yo’l berishi kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 20-bobi 126-bandi: Turar joy dahalaridan chiqishda haydovchilar boshqa harakat qatnashchilariga yo’l berishlari kerak."
  },
  {
    "id": 859,
    "biletId": 86,
    "text": "\"Imtiyoz\" atamasiga tegishli tarifni ko’rsating",
    "options": [
      "Yo’l harakati qatnashchilariga nisbatan imtiyozi bo’lgan boshka yo’l xarakati katnashchisining xarakat yunalishi yoki tezligini o’zgartirishga majbur etishi mumkin bo’lgan hollarda xarakatni davom ettirmasligini yoki boshlamasligini, biror-bir manyovr bajarishi mumkin emasligini bildiruvchi talab",
      "Mo’ljallangan yo’nalishda boshqa yo’l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Imtiyoz — mo’ljallangan yo'nalishda boshqa yo’l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi."
  },
  {
    "id": 860,
    "biletId": 86,
    "text": "Tumanga qarshi chiroqlarni qorong’i vaqtda yo’lning yoritilmagan qismlarida uzoqni yorituvchi chiroqlar bilan birga qo’llash mumkinmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 137-bandi: Quyidagi hollarda tumanga qarshi fara chiroqlaridan foydalanish mumkin: yetarlicha ko’rinmaydigan sharoitda alohida, shuningdek, uzoqni yorituvchi yoki yaqinni yorituvchi fara chiroqlari bilan;\nsutkaning qorong’i vaqtida yo’lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi fara chiroqlari bilan birga;\nushbu Qoidalarning 138-bandida ko’zda tutilgan holatlarda yaqinni yorituvchi fara chiroqlari o’rniga."
  },
  {
    "id": 861,
    "biletId": 87,
    "text": "Qorin bo’shlig’i jarohatlangan odamga ovqat, suv, dori-darmon berish mumkinmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Yo’q."
  },
  {
    "id": 862,
    "biletId": 87,
    "text": "Ushbu belgi nimani bidiradi?",
    "options": [
      "Oldinda ko’tarma ko’prik borligini",
      "Sun’iy yo’l notekisligi",
      "Oldinda tik balandlik borligini"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i87_2.webp",
    "explanation": "YHQ, 1.31. \"Sun’iy yo’l notekisligi\" belgisi."
  },
  {
    "id": 863,
    "biletId": 87,
    "text": "Mexanik transport vositasi - bu ...",
    "options": [
      "Dvigatel bilan harakatga keltiriladigan transport vositasi. Bu atama barcha traktor va o’ziyurar moslamalarga ham taalluklidir",
      "Odamlarni, yuklarni tashishga yoki maxsus ishlarni bajarishga mo’ljallangan qurilma",
      "Mexanik transport vositasi tarkibida xarakatlanishga mo’ljallangan, dvigatel bilan jihozlanmagan transport vositasi. Bu atama yarim tirkama va uzaytiriladigan tirkamalarga ham taalluklidir"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Mexanik transport vositasi — dvigatel bilan harakatga keltiriladigan transport vositasi. Bu atama barcha traktor va o’zi yurar moslamalarga ham taalluqlidir."
  },
  {
    "id": 864,
    "biletId": 87,
    "text": "Tezlik ortishi bilan haydovchining ko’rish maydoni qanday o’zgaradi?",
    "options": [
      "Torayadi",
      "Kengayadi",
      "O’zgarmaydi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Tezlikni oshirganda haydovchining kurish maydoni torayadi sabab shiddat bilan utayotgan masofani haydovchi barchasini kabul kila olmaydi, kamray olmaydi chunki u vaziyatni baxolashi kerak. Katta tezlikda haydovchi ulgurmaydi."
  },
  {
    "id": 865,
    "biletId": 87,
    "text": "Tormoz yo’li deb nimga aytiladi?",
    "options": [
      "Haydovchi tormoz tepkisini bosgandan to avtomobil to’liq to’xtatguncha bosib o’tgan masofasi",
      "Haydovchi biron bir xavfni aniqlab, avtomobilni to’liq to’xtatguncha bosib o’tgan masofasi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "To’xtash yo’li deb haydovchining biror bir xatarni sezib, to transport vositasini to’liq to’xtatgunga qadar bosib o’tilgan masofaga aytiladi. To’xtash yo’li o’z ichiga haydovchining reaksiya vaqtida, tormoz tizimining ishga tushish vaqtini va tormoz yo’lini o’z ichiga oladi."
  },
  {
    "id": 866,
    "biletId": 87,
    "text": "Ushbu holatda ko’k avtomobil haydovchisi kimga yo’l berishi lozim?",
    "options": [
      "Faqat yengil avtomobilga",
      "Faqat avtobusga",
      "Hech kimga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i87_6.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’i nazar, teng ahamiyatga ega bo’lgan yo’lda bir yo’nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 867,
    "biletId": 87,
    "text": "Ushbu belgilardan qaysi biri \"Notekis yo’l\" deb nomlanadi?",
    "options": [
      "\"c\"",
      "\"a\"",
      "\"b\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i87_7.webp",
    "explanation": "YHQ, 1.16. \"Yo’l notekisligi\" belgisi."
  },
  {
    "id": 868,
    "biletId": 87,
    "text": "Aholi punktlaridan tashqarida tirkamali yuk avtomabillari qanday yuqori tezlik bilan harakatlanishi mumkin?",
    "options": [
      "80 km/s",
      "60 km/s",
      "90 km/s",
      "70 km/s"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 79-bandi: Aholi punktlaridan tashqarida: tirkamali yuk avtomobillariga tezlikni soatiga 70 kilometrdan oshirmasdan harakatlanish ruxsat etiladi."
  },
  {
    "id": 869,
    "biletId": 87,
    "text": "Yo’l harakati qodalariga ko’ra yo’l belgilari necha guruhga bo’linadi?",
    "options": [
      "5 ta",
      "6 ta",
      "7 ta"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Ogohlantiruvchi belgilar\nImtiyoz belgilari\nTaqiqlovchi belgilar\nBuyuruvchi belgilar\nAxborot-ko’rsatgich belgilari\nServis belgilari\nQo’shimcha axborot belgilari"
  },
  {
    "id": 870,
    "biletId": 87,
    "text": "Yengil avtomobil qaysi yo’nalishlarda harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat o’ngga va chapga",
      "Istalgan yo’nalishda",
      "Faqat to’g’riga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i87_10.webp",
    "explanation": "YHQ, 7.4.1 belgi bilan o'rnatilgan yo'l belgisining ta’siri yuk tashuvchi, shu jumladan, tirkamali, to'la vazni 3,5 tonnadan ortiq bo’lgan transport vositalariga tatbiq etiladi."
  },
  {
    "id": 871,
    "biletId": 88,
    "text": "Yo’lning xavfli burilishlarida oldingi uzatmali avtomobilning orqa o’qi yon tomonga sirpanayotganda siz qanday harakat qilasiz?",
    "options": [
      "Gaz pedalini ko’proq bosib, avtomobilni rul chambaragini o’zgartirmasdan sirpanishdan olib chiqasiz",
      "Gaz pedalini ohista bosib, avtomobilni rul chambaragini to’g’irlab, avtomobilni sirpanishdan olib chiqib ketasiz",
      "Tormozlab turib rul chambaragini sirpangan tomonga burasiz",
      "Gaz berishni kamaytirib rul chambaragi bilan boshqaruvni barqarorlashtirasiz"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Oldingi uzatmali avtomobillar orqa uzatmali avtomobillardan yetarlicha farq qiladi. Bu farqni avtomobil boshqaruvida e’tiborga olish kerak. To’g’ri yo’lda yuqori tezlikda harakatlanishda orqa yetaklovchi avtomobilga nisbatan yonga siljish extimoli kam. Biroq nam qoplamali burilishlarda avtomobil boshqarish texnikasiga rioya etilmasa, nafaqat yonga sirpanish balki avtomobil barcha g’ildiraklarining yonga siljishi va yo’l-transport hodisalari kelib chiqishi ehtimoli mavjud."
  },
  {
    "id": 872,
    "biletId": 88,
    "text": "Haydovchining o’rtacha reaksiya vaqti deb qabul qilingan:",
    "options": [
      "Taxminan 0,2 sekund",
      "Taxminan 5 sekund",
      "Taxminan 1 sekund"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Haydovchilarning reaksiya vaqti turlicha bo'lib u yoshiga, kasbiga va malakasiga bog’liq. Shunga qaramay o’rtacha reaksiya vaqti haydovchilar uchun tajribaga asosan 1 sekund deb qabul qilingan. 1 sekun juda qisqa vaqt “yigirma ikki” deguncha bir sekund vaqt o’tdi. Reaksiya vaqtini oshirishning “oson yo’li” tezlikni kamaytirishdir."
  },
  {
    "id": 873,
    "biletId": 88,
    "text": "Ushbu tik chiziq nimani bildiradi?",
    "options": [
      "Temir yo’l kesishmasiga yaqinlashayotganlik haqida",
      "Xavfli chorrahaga  yaqinlashayotganlik haqida",
      "Yo’lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo’l to’siqlarining yon yuzalarini bildiradi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i88_3.webp",
    "explanation": "YHQ 2 ilova: 2.5 — yo'lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo'l to’siqlarining yon yuzalarini bildiradi."
  },
  {
    "id": 874,
    "biletId": 88,
    "text": "Yondosh hudud bu - ...",
    "options": [
      "Bevosita yo’lga tutashgan va transport vositalari o’tib ketishi uchun mo’ljallanmagan xudud (hovlilar, turar joy dahalari, avtomobil to’xtab turish joylari, yonilgi kuyish shoxobchalari, korxona va shunga o’xshashlari)",
      "Yo’lning relssiz transport vositalari harakati uchun mo’ljallangan qismi",
      "Yo’llarning o’zaro bir sathda kesishadigan, tutashadigan va ayriladigan joyi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Yondosh hudud — bevosita yo’lga tutashgan va transport vositalari o’tib ketishi uchun mo’ljallanmagan hudud (hovlilar, turar joy dahalari, avtomobil to’xtab turish joylari, yonilg’i quyish shoxobchalari, korxona va shunga o’xshashlar)."
  },
  {
    "id": 875,
    "biletId": 88,
    "text": "M3 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig’indisiga yo’l qo’yiladi?",
    "options": [
      "20 gradus",
      "25 gradus",
      "10 gradus"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 2.1. Boshqaruv qurilmasidagi lyuft yig’indisi reglament (qat’iy belgilangan) sharoitlardagi sinovlarda quyidagi ko’rsatkichdan katta bo’lmasligi kerak: Transport vositasining toifasi Yo’l qo’yilgan lyuft ko’rsatgichi (gradusda)\nM1 - 10%\nM2, M3, N1 - 20%\nN2, N3 - 25%."
  },
  {
    "id": 876,
    "biletId": 88,
    "text": "Bosh miya jarohatlanganda, miya chayqalganda yoki bo’yin qismi jarohatlanganda birinchi yordam ko’rsatish:",
    "options": [
      "Jaroxatlangan odamni yonboshlatib yotkizib, bo’yin kismi tagiga kattik Yestikcha kuyib, kuzgatmasdan, maxkam boglab shifoxonaga boriladi",
      "Jarohatlangan odamni tinchlantirib, jarohatlangan joy soxasini sovuk suv, muz kuyish yo’llari bilan sovitish, ogrikni susaytirish va kon ketishini kamaytirish",
      "Jaroxatlangan odamni kattik va tekis zambilga solib, bo’yin kismi tagiga yostikcha kuyib, kuzgatmasdan, maxkam boglab shifoxonaga yuboriladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Jaroxatlangan odamni kattik va tekis zambilga solib, bo’yin kismi tagiga yostikcha kuyib, kuzgatmasdan, maxkam boglab shifoxonaga yuboriladi."
  },
  {
    "id": 877,
    "biletId": 88,
    "text": "Qaysi yo’l belgilari yo’lning tor qismida haydovchiga ustunlik beradi?",
    "options": [
      "Faqat \"c\"",
      "Faqat \"d\"",
      "\"a\" va \"b\"",
      "Faqat \"b\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i88_7.webp",
    "explanation": "YHQ 1 ilova: 2.7. \"Ro’paradagi harakatlanishga nisbatan imtiyoz\" belgisi. Yo’lning tor qismida harakatlanishda haydovchi ro’paradan kelayotgan transport vositasiga nisbatan imtiyozga egaligini bildiradi."
  },
  {
    "id": 878,
    "biletId": 88,
    "text": "Ushbu chorrahada haydovchi orqaga harakatlanib ko’rsatilgan manyovrni bajarishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i88_8.webp",
    "explanation": "YHQ 9-bobi 63-bandi: Orqaga harakatlanish chorrahalarda taqiqlanadi."
  },
  {
    "id": 879,
    "biletId": 88,
    "text": "Ushbu yo’l belgisi qanday maqsadda qo’llaniladi?",
    "options": [
      "Ehtiyot choralarini ko’rish uchun",
      "Majburiy tarzda tezlikni kamaytirish uchun",
      "To’xtamasdan o’tishni taqiqlaydi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i88_9.webp",
    "explanation": "YHQ, 1-ilova: 3.17.1. \"Bojxona\". Bojxona (tekshiruv maskani) oldida to’xtamasdan o'tish taqiqlanishini bildiradi."
  },
  {
    "id": 880,
    "biletId": 88,
    "text": "Ushbu yo’l belgisi qanday maqsadda qo’llaniladi?",
    "options": [
      "Portlovchi va tez alangalanadigan yuk tashilayotgan transport vositalarining harakatini taqiqlaydi",
      "Og’ir yuk tashilayotgan transport vositalarining harakatini taqiqlaydi",
      "Xavfli yuk tashilayotgan transport vositalarining harakatini taqiqlaydi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i88_10.webp",
    "explanation": "YHQ, 1-ilova: 3.32. \"Xavfli yuk tashiyotgan transport vositasining harakati taqiqlangan\"."
  },
  {
    "id": 881,
    "biletId": 89,
    "text": "M2 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig’indisiga yo’l qo’yiladi?",
    "options": [
      "25 gradus",
      "10 gradus",
      "20 gradus"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 2.1. Boshqaruv qurilmasidagi lyuft yig’indisi reglament (qat’iy belgilangan) sharoitlardagi sinovlarda quyidagi ko’rsatkichdan katta bo’lmasligi kerak: Transport vositasining toifasi Yo’l qo’yilgan lyuft ko’rsatgichi (gradusda)\nM1 - 10%\nM2, M3, N1 - 20%\nN2, N3 - 25%."
  },
  {
    "id": 882,
    "biletId": 89,
    "text": "Turar joy dahalarida qanday eng katta tezlikda harakatlanishga ruxsat etiladi:",
    "options": [
      "30 km/s",
      "20 km/s",
      "40 km/s",
      "5 km/s"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 78-bandi: Aholi punktlarida transport vositalarining tezligini soatiga 70 kilometrdan, tegishli yo’l belgilari o’rnatilgan maktab va maktabgacha ta’lim tashkilotlariga yetmasdan va o’tib ketib 300 metrdan kam masofada soatiga 30 kilometrdan, turar joy dahalari va yondosh hududlarda (uy-joy binolari orasidagi yer uchastkasida) esa soatiga 20 kilometrdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 883,
    "biletId": 89,
    "text": "Kunning qorong’i vaqtida harakatlanayotgan transport vositasining haydovchisi tezlikni tanlashda qanday eng asosiy hal qiluvchi omilni e’tiborga olishi kerak?",
    "options": [
      "Ko’rinish sharoitini",
      "Transport vositasining texnik tavsifnomasida ko’rsatilgan tezlik chegarasini",
      "Yo’l harakati qoidalari o’rnatilgan tezlik chegaralarini"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Kunning qorong’i vaqtida harakatlanishda tezlikni to'g’ri tanlash asosiy masala hisoblanadi. Yo'lning ko’rinish masofasi to’xtash yo’lidan oshmasligi kerak."
  },
  {
    "id": 884,
    "biletId": 89,
    "text": "Qaysi rasmda ajratuvchi mintaqasi bor bo’lgan yo’l ko’rsatilgan?",
    "options": [
      "Har ikkisida",
      "O’ngda",
      "Chapda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i89_4.webp",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Ajratuvchi mintaqa — yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi."
  },
  {
    "id": 885,
    "biletId": 89,
    "text": "Ushbu chorrahada avtobus haydovchisi kimga yo’l berishi kerak?",
    "options": [
      "Hech kimga",
      "Ko’k avtomobilga",
      "Qizil avtomobilga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i89_5.webp",
    "explanation": "YHQ 16-bobi 106-bandi: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak.\nIkkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 886,
    "biletId": 89,
    "text": "Agar avtomobilning o’ng g’ildiraklari nam qoplamali yo’l yoqasiga chiqib qolsa, tavsiya etiladi:",
    "options": [
      "Avtomobilni tormozlash va to’liq to’xtatish",
      "Avtomobilni tormozlamasdan yo’lning qatnov qismiga ohista ravon burish",
      "Avtomobilni tormozlab, yo’lning qatnov qismiga ohista ravon burish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Bunday holatda avtomobilni moment kuchlar burib yuborishga moyil bo’ladi, shuning uchun Avtomobilni tormozlamasdan yo’lning qatnov qismiga ohista ravon burish usulni qo’llang."
  },
  {
    "id": 887,
    "biletId": 89,
    "text": "Ushbu qo’shimcha axborot yo’l belgisi bildiradi:",
    "options": [
      "Barcha turdagi transport vositalarining to’xtab turish uchun yo’lning qatnov qismida, trotuar yoniga qo’yish usulini",
      "Mexanik transport vositalarining to’xtab turish joyini",
      "Yengil avtomobillarning to’xtab turish joyini"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i89_7.webp",
    "explanation": "YHQ, 1 ilova: 7.6.1. \"Transport vositasini to’xtab turish joyiga qo’yish usuli\". 7.6.1 barcha turdagi transport vositalarini to’xtab turishi uchun yo’lning qatnov qismida, trotuar yoniga qo’yish usulini, 7.6.2 — 7.6.9 trotuar yonidagi to’xtab turish joyiga yengil avtomobillar, mototsikllar, mopedlar va skuterlarni qo’yish usulini bildiradi."
  },
  {
    "id": 888,
    "biletId": 89,
    "text": "Aylanma harakatlanish chorrahasida ...",
    "options": [
      "Harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga ega)",
      "Harakatlanayotgan transport vositalariga nisbatan aylanaga kirib kelayotgan transport vositalari ustunlikka (imtiyozga ega)"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 14-bobi 98-bandi: Harakatlanish navbati svetofor yoki tartibga soluvchining ishoralari bilan boshqariladigan chorraha — tartibga solingan chorraha hisoblanadi."
  },
  {
    "id": 889,
    "biletId": 89,
    "text": "Muskul va paylarning ezilishi hamda cho’zilishi alomatlari qanday?",
    "options": [
      "Jarohatlangan joyda og’riq seziladi",
      "Jarohatlangan joyda shish paydo bo’ladi, og’riq seziladi, ba’zan shu joyda mayda kappiliyar qon tomirlari yorilib, qon quyilishni natijasida ko’karish paydo bo’ladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Jarohatlangan joyda shish paydo bo’ladi, og’riq seziladi, ba’zan shu joyda mayda kappiliyar qin tomirlari yorilib, qon quyilishni natijasida ko’karish paydo bo’ladi."
  },
  {
    "id": 890,
    "biletId": 89,
    "text": "Chapga burilayotgan haydovchi kesishayotgan yo’lning qatnov qismidan o’tayotgan piyodalarga yo’l berishi kerakmi?",
    "options": [
      "Ha, agarda piyodalar o’tish joyi bo’lsa",
      "Ha, barcha hollarda o’tkazishi kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 14-bobi 96-bandi: Chapga yoki o'ngga burilayotgan haydovchi kesishayotgan yo'lning qatnov qismidan o’tayotgan piyoda(lar)ga, shuningdek velosiped yo’lkasidan yo’lni kesib o’tayotgan velosipedchi(lar)ga va individual harakatlanish vositalarini boshqarayotgan shaxs(lar)ga yo’l berishi kerak."
  },
  {
    "id": 891,
    "biletId": 90,
    "text": "Tik nishablikda dvigatel bilan tormozlashda qiyalikka nisbatan qanday uzatma tanlanadi?",
    "options": [
      "Nishablik qancha qiya bo’lsa uzatma pog’onasi shuncha past tanlanadi",
      "Pog’onalarni nishablikka aloqasi yo’q",
      "Nishablik qancha qiya bo’lsa uzatma pog’onasi shuncha yuqori tanlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "not"
  },
  {
    "id": 892,
    "biletId": 90,
    "text": "Tumanga qarshi old chiroqlrni qorong’i vaqtda, yo’lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga qo’llash mumkinmi?",
    "options": [
      "Mumkin emas",
      "Mumkin"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 23-bobi 137-bandi: Quyidagi hollarda tumanga qarshi fara chiroqlaridan foydalanish mumkin:\nyetarlicha ko’rinmaydigan sharoitda alohida, shuningdek, uzoqni yorituvchi yoki yaqinni yorituvchi fara chiroqlari bilan;\nsutkaning qorong’i vaqtida yo’lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi fara chiroqlari bilan birga;\nushbu Qoidalarning 138-bandida ko’zda tutilgan holatlarda yaqinni yorituvchi fara chiroqlari o’rniga."
  },
  {
    "id": 893,
    "biletId": 90,
    "text": "Ajratuvchi mintaqa - ... ",
    "options": [
      "Yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi",
      "Yo’lning relssiz transport vositalari harakati uchun mo’ljallangan qismi",
      "Avtomobillarning bir qator bo’lib harakatlanishi uchun yetarlicha keng bo’lgan, yo’l chiziqlari bilan belgilangan yoki belgilanmagan yo’l qatnov qismining har qanday bo’ylama mintaqa"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Ajratuvchi mintaqa — yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi."
  },
  {
    "id": 894,
    "biletId": 90,
    "text": "Qaysi belgi haydovchiga kesib o’tilayotgan yo’lda harakatlanayotgan transport vositalariga yo’l berishi lozimligini bildiradi?",
    "options": [
      "\"c\"",
      "\"b\" va \"d\"",
      "\"a\"",
      "\"d\"",
      "\"b\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i90_4.webp",
    "explanation": "YHQ, 2.4. \"Yo’l bering\" belgisi. 2.5. \"Tuxtamasdan harakatlanish taqiqlangan\" belgisi."
  },
  {
    "id": 895,
    "biletId": 90,
    "text": "\"Aholi punkti\" atamasi nimani bildiradi?",
    "options": [
      "Kirish va chiqish yo’llari 5.22 - 5.25 belgilari bilan belgilangan hududni",
      "Shahar, qishloq joylari hududini",
      "Aholi yashaydigan hududni"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Aholi punkti — kirish va chiqish yo’llari 5.22 — 5.25 yo’l belgilari bilan belgilangan hudud."
  },
  {
    "id": 896,
    "biletId": 90,
    "text": "Yo’l harakati xavfsizligi - ...",
    "options": [
      "Yo’l harakati qatnashchilarining yo’l-transport hodisalari va ularning oqibatlaridan himoyalanganlik darajasini aks ettiruvchi yo’l harakati holati",
      "Yo’l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og’ir oqibatlarini kamaytirishga qaratilgan faoliyat"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Yo’l harakati xavfsizligi — yo’l harakati qatnashchilarining yo’l-transport hodisalari va ularning oqibatlaridan himoyalanganlik darajasini aks ettiruvchi yo’l harakati holati."
  },
  {
    "id": 897,
    "biletId": 90,
    "text": "Ushbu ko’rsatilgan holatda kim yo’l berishi kerak?",
    "options": [
      "Mototsikl haydovchisi",
      "Avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i90_7.webp",
    "explanation": "YHQ 9-bobi 61-bandi: Yo’lga chiqish joyida tezlashish bo’lagi bo’lsa, haydovchi unda harakatlanishi va qo’shni bo’lakda harakatlanayotgan transport vositalariga yo’l berib, transport oqimiga qo’shilishi kerak."
  },
  {
    "id": 898,
    "biletId": 90,
    "text": "Agar avtomobilning o’ng g’ildiraklari nam qoplamali yo’l yoqasiga chiqib qolsa, tavsiya etiladi:",
    "options": [
      "Avtomobilni tormozlamasdan yo’lning qatnov qismiga ohista ravon burish",
      "Avtomobilni tormozlash va to’liq to’xtatish",
      "Avtomobilni tormozlab, yo’lning qatnov qismiga ohista ravon burish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Bunday holatda avtomobilni moment kuchlar burib yuborishga moyil bo’ladi, shuning uchun uchinchi javobdagi usulni qo’llang."
  },
  {
    "id": 899,
    "biletId": 90,
    "text": "Shokning belgilari qanday?",
    "options": [
      "Teri va shilliq qavatining oqarishi",
      "Kuchli ter ajralishi",
      "Og’iz qurishi, chanqoqlik, nafas olishning tezlashuvi",
      "Yuqoridagi barcha holatlar"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "not"
  },
  {
    "id": 900,
    "biletId": 90,
    "text": "Ushbu belgilardan qaysi biri oldinda yo’l qoplamasi ustida sun’iy notekislik borligi haqida ogohlantiradi?",
    "options": [
      "\"b\"",
      "\"a\" va \"c\"",
      "\"c\"",
      "\"a\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i90_10.webp",
    "explanation": "YHQ, 1.31. \"Sun’iy yo’l notekisligi\" belgisi."
  },
  {
    "id": 901,
    "biletId": 91,
    "text": "Ushbu vaziyatda siz o’ng tasmada harakatlanmoqdasiz, sizning tasmangizga qayta tizilayotgan transport vositasiga yo’l berishingiz kerakmi?",
    "options": [
      "Kerak emas",
      "Kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_1.webp",
    "explanation": "YHQ 9-bobi 55-bandi: Haydovchi qayta tizilishda harakatlanish yo’nalishini o’zgartirmasdan harakatlanayotgan yo’lakay transport vositalariga yo’l berishi kerak.\nBir yo'nalishda harakatlanayotgan transport vositalari bir vaqtda qayta tizilayotganlarida haydovchi o’ng tomondagi transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 902,
    "biletId": 91,
    "text": "Ushbu yo’l belgisi qaysi transport vositalarining harakatlanishini taqiqlaydi?",
    "options": [
      "Xavfli yuk tashiyotgan transport vositalarining  harakatlanishini",
      "Barcha javoblari to’g’ri",
      "Ruxsat etilgan to’la vazni 3,5 tonnadan ortiq bo’lgan yuk avtomobillarini"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_2.webp",
    "explanation": "YHQ 1 ilova: 3.32. \"Xavfli yuk tashiyotgan transport vositasining harakati taqiqlangan\"."
  },
  {
    "id": 903,
    "biletId": 91,
    "text": "Qaysi belgi to’siqni o’ng yoki chap tomonidan chetlab o’tishga ruxsat etilishini bildiradi?",
    "options": [
      "d",
      "c",
      "a",
      "e",
      "b"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_3.webp",
    "explanation": "YHQ 1 ilova: 4.2.3. \"To’siqni o’ngdan yoki chapdan chetlab o’tish\". To’siqni har tomonidan chetlab o’tishga ruxsat etilishini bildiradi."
  },
  {
    "id": 904,
    "biletId": 91,
    "text": "Bu joyda yo’lovchilarni chiqarish yoki tushirish maqsadida to’xtash mumkinmi?",
    "options": [
      "Ha",
      "Yo’q"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_4.webp",
    "explanation": "YHQ 1 ilova: 3.28. \"To'xtab turish taqiqlangan\". Transport vositalarining to'xtab turishi taqiqlanishini bildiradi."
  },
  {
    "id": 905,
    "biletId": 91,
    "text": "Qizil avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Oxirgi bo’lib",
      "Birinchi bo’lib",
      "Ikkinchi bo’lib"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_5.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada rel’ssiz transport vositasining haydovchisi o’ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay rel’ssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi.\nYHQ 16-bobi 106-bandi: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak.\nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda rel’ssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 906,
    "biletId": 91,
    "text": "To’xtash qoidasini qaysi transport vositasining haydovchisi buzdi?",
    "options": [
      "Faqat qizil avtomobil haydovchisi",
      "Har ikkala haydovchi ham",
      "Faqat ko’k avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_6.webp",
    "explanation": "YHQ 13-bobi 91-bandi: Quyidagi joy va holatlarda to’xtash taqiqlanadi: transport vositasi svetofor ishoralari, yo’l belgilarini boshqa haydovchilardan to’sib qo’yadigan, boshqa transport vositalarining harakatlanishiga (kirish va chiqishiga) imkon qoldirmaydigan yoki piyodalarning harakatiga xalaqit beradigan joylarda."
  },
  {
    "id": 907,
    "biletId": 91,
    "text": "Ushbu vaziyatda siz:",
    "options": [
      "To’xtamasdan harakatni davom ettirishingiz mumkin",
      "Belgi oldida to’xtashingiz va svetoforning ruxsat beruvchi ishorasini kutishingiz kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_7.webp",
    "explanation": "YHQ 15-bobi 102-bandi: Svetoforning ruxsat etuvchi ishorasida chorrahaga kirgan haydovchi, undan chiqishdagi svetofor ishorasidan qat’i nazar, belgilangan yo'nalishda harakatini davom ettirishi kerak. Biroq chorrahada haydovchining harakatlanayotgan yo’lida joylashgan svetoforlar oldida to’xtash chiziqlari (yoki 5.33 yo’l belgisi) bo’lsa, u har bir svetofor ishorasiga amal qilishi shart."
  },
  {
    "id": 908,
    "biletId": 91,
    "text": "Sanab o’tilgan qaysi hollarda egiluvchan ulagichda shatakka olish taqiqlanadi?",
    "options": [
      "Faqat sirpanchiq yo’lda",
      "Kunning qorong’i vaqtida va yetarlicha ko’rinmaslik sharoitida",
      "Faqat tog’li yo’llarda",
      "Barcha sanab o’tilgan hollarda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandi: Shatakka olish quyidagi holatlarda taqiqlanadi: yo'l yaxmalak, sirpanchiq bo'lgan hollarda egiluvchan ulagichda."
  },
  {
    "id": 909,
    "biletId": 91,
    "text": "Qanday hollarda sizga 50 km/s dan yuqori tezlikda harakatlanish taqiqlangan?",
    "options": [
      "Faqat qatnov qismi nam bo’lsa",
      "Har qanday holatda ham"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i91_9.webp",
    "explanation": "YHQ 1 ilova: 3.24. \"Yuqori tezlik cheklangan\". Belgida ko’rsatilganidan ortiq tezlikda (km/s) harakatlanish taqiqlanishini bildiradi. 7.16. \"Nam qoplama\". Belgi qatnov qismining qoplamasi nam bo'lgan vaqtda ta’sir etishini ko'rsatadi."
  },
  {
    "id": 910,
    "biletId": 91,
    "text": "\"Imtiyoz\" atamasiga tegishli ta’rifni ko’rsating.",
    "options": [
      "Mo’ljallangan yo’nalishda boshqa yo’l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi",
      "Yo’l harakati katnashchilariga nisbatan imtiyozi bo’lgan boshqa yo’l harakati katnashchisining harakat yo’nalishi yoki tezligini o’zgartirishga majbur etishi mumkin bo’lgan hollarda harakatni davom ettirmasligini yoki boshlamasligini, biror-bir manyovr bajarishi mumkin emasligini bildiruvchi talab"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Imtiyoz — mo’ljallangan yo’nalishda boshqa yo’l harakati qatnashchilariga nisbatan oldin harakatlanish huquqi."
  },
  {
    "id": 911,
    "biletId": 92,
    "text": "Ushbu yo’l nechta qatnov qismiga ega ?",
    "options": [
      "2 ta",
      "4 ta",
      "1 ta"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_1.webp",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: qatnov qismi — yo’lning relssiz transport vositalari harakatlanishi uchun mo’ljallangan qismi."
  },
  {
    "id": 912,
    "biletId": 92,
    "text": "Qaysi transport vositalariga harakatlanishga ruxsat berilgan?",
    "options": [
      "Mototsiklga o’nga va yengil avtomobilga barcha yo’nalishlarga",
      "Mototsiklga o’nga, yengil avtomobilga to’g’riga va o’nga",
      "Mototsikl va yengil avtomobilga to’g’riga va o’nga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_2.webp",
    "explanation": "YHQ 7-bobi 38-bandi: Tartibga soluvchining ishoralari quyidagi ma’noni bildiradi: Qo’llari yon tomonga uzatilganda yoki tushirilganda:\nchap va o’ng yon tomonidan tramvayga to’g’riga, relssiz transport vositalariga to’g’riga va o’ngga harakatlanishga, piyodalarga qatnov qismini kesib o’tishga ruxsat beriladi;\nold va orqa tomonidan barcha transport vositalari va piyodalarning harakatlanishi taqiqlanadi.\no’ng qo’li oldinga uzatilganda:\nchap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o’ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 913,
    "biletId": 92,
    "text": "Ushbu svetofor qaysi yo’nalishlarda harakatlanishga ruxsat beradi?",
    "options": [
      "To’g’riga va chapga",
      "Faqat o’ngga",
      "To’g’riga va o’ngga",
      "Faqat chapda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_3.webp",
    "explanation": "YHQ 7-bobi 36-bandi: Tramvaylarning hamda maxsus ajratilgan tasma bo’ylab harakatlanayotgan boshqa yo’nalishli transport vositalarining harakatlanishini tartibga solish uchun \"T\" harfi ko’rinishida joylashgan to’rtta doirasimon oq rang ishorali svetoforlar qo’llanilishi mumkin.\nYuqoridagi bir yoki bir nechta va pastki ishora bir vaqtning o’zida yonganda, harakatlanishga ruxsat etiladi. Ulardan chapdagisi chapga, o’ngdagisi o’ngga, o’rtadagisi to’g’riga yurishga ruxsat beradi. Pastdagi ishora o’chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi."
  },
  {
    "id": 914,
    "biletId": 92,
    "text": "N1 toifadagi avtotransport vositalarining boshqaruv qurilmasidagi qanday eng katta lyuft yig’indisiga yo’l qo’yiladi?",
    "options": [
      "25 gradus",
      "20 gradus",
      "10 gradus"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova: 2.1. Boshqaruv qurilmasidagi lyuft yig’indisi reglament (qat’iy belgilangan) sharoitlardagi sinovlarda quyidagi ko’rsatkichdan katta bo’lmasligi kerak: Transport vositasining toifasi Yo’l qo’yilgan lyuft ko’rsatgichi (gradusda)\nM1 - 10%\nM2, M3, N1 - 20%\nN2, N3 - 25%."
  },
  {
    "id": 915,
    "biletId": 92,
    "text": "Qaysi belgi ikkinchi darajali yo’l bilan kesishuvni bildiradi?",
    "options": [
      "a",
      "c",
      "d",
      "e",
      "b"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_5.webp",
    "explanation": "YHQ 1 ilova: 2.3.1. \"Ikkinchi darajali yo’l bilan kesishuv\"."
  },
  {
    "id": 916,
    "biletId": 92,
    "text": "Miltillovchi sariq ishorali svetofor:",
    "options": [
      "Svetofor chirog’i almashuvidan xabardor qiladi",
      "Tartibga solingan chorraha borligidan xabardor qiladi",
      "Tartibga solinmagan chorraha yoki piyodalar o’tish joyi borligidan xabardor qiladi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Miltillovchi sariq ishora harakatlanishga ruxsat beradi va tartibga solinmagan chorraha yoki piyodalar o’tish joyi borligidan xabardor qiladi, xavf-xatar haqida ogohlantiradi."
  },
  {
    "id": 917,
    "biletId": 92,
    "text": "Yuk avtomobili haydovchisiga qaysi yo’nalishda harakatlanishga ruxsat beriladi?",
    "options": [
      "Faqat o’ngga",
      "Barcha yo’nalishlarga",
      "O’ngga chapga va orqaga",
      "To’g’riga va o’ngga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_7.webp",
    "explanation": "YHQ 1 ilova: 3.4. \"Yuk avtomobillarining harakatlanishi taqiqlangan\". To'la vazni 3,5 tonnadan (agar vazni belgida ko'rsatilmagan bo’lsa) yoki to’la vazni belgida ko’rsatilgandan ortiq bo'lgan yuk avtomobillari va transport vositalari tarkiblarining, shuningdek traktorlar, o’ziyurar moslamalarning harakatlanishi taqiqlanishini bildiradi. 3.4 yo’l belgisi bortlariga qiya oq chiziq tortilgan yoki odamlarni tashish uchun mo’ljallangan yuk avtomobillarining harakatlanishini taqiqlamaydi."
  },
  {
    "id": 918,
    "biletId": 92,
    "text": "Ushbu vaziyatda siz o’ngga burilayotib:",
    "options": [
      "Barcha qatnov qismidagi piyodalarga yo’l berasiz",
      "Harakat yo’nalishi boyicha va burilayotgan ko’chani kesib o’tayotgan piyodalarga hamda boshqa transport vositalariga yo’l berasiz",
      "Faqat transport vositalariga yo’l berasiz"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_8.webp",
    "explanation": "YHQ 1 ilova: 5.42. bandi: \"Qizil chiroqda o’ngga harakatlanish\". Transport svetofori qizil chirog'ining опд yoniga 5.42 yo’l belgisi o'rnatilgan bo'lsa, transport vositalarining haydovchilari svetoforning taqiqlovchi ishorasi yonib turganda, barcha xavfsizlik choralarini ko'rgan holda o'ngga burilishlari mumkin. Bunda ular harakat yo’nalishi bo’yicha va burilayotgan ko’chani kesib o’tayotgan piyodalarga hamda boshqa transport vositalariga yo'l berishlari shart."
  },
  {
    "id": 919,
    "biletId": 92,
    "text": "Qaysi belgi yo’lning ko’rsatilgan yo’nalishida oxiri berk ko’chaligini bildiradi",
    "options": [
      "c",
      "d",
      "e",
      "b",
      "a"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_9.webp",
    "explanation": "YHQ 5.19.1 — 5.19.3. \"Oxiri berk yo’l\". Yo’lning ko’rsatilgan yo’nalishda oxiri berkligini bildiradi."
  },
  {
    "id": 920,
    "biletId": 92,
    "text": "Qaysi rasmda ikkita qatnov qismiga ega bo’lgan yo’l ko’rsatilgan?",
    "options": [
      "\"A\" rasmda",
      "Hech qaysi rasmda",
      "\"B\" rasmda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i92_10.webp",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Ajratuvchi mintaqa — yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi."
  },
  {
    "id": 921,
    "biletId": 93,
    "text": "Aynalma harakatlanish chorrahasida...",
    "options": [
      "Harakatlanayotgan transport vositalariga nisbatan aylanaga kirib kelayotgan transport vositalari ustunlikka ega",
      "Harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka ega"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 14-bobi 98-bandi: Aylanma harakatlanish chorrahasida harakatlanayotgan transport vositalari aylanaga kirib kelayotgan transport vositalariga nisbatan ustunlikka (imtiyozga) ega."
  },
  {
    "id": 922,
    "biletId": 93,
    "text": "Ushbu qo’shimcha axborot yo’l belgisi:",
    "options": [
      "Ob’yektgacha bo’lgan masofani bildiradi",
      "Belgining ta’sir oralig’ini bildiradi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_2.webp",
    "explanation": "YHQ 1 ilova: 7.1.3, 7.1.4. \"Ob’ektgacha bo’lgan masofa\". Yo’ldan chetda joylashgan manzilgacha bo’lgan masofani bildiradi."
  },
  {
    "id": 923,
    "biletId": 93,
    "text": "Qaysi belgi ikkinchi darajali yo’l bilan tutashuvni bildiradi?",
    "options": [
      "3",
      "1",
      "5",
      "2",
      "4"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_3.webp",
    "explanation": "YHQ 1 ilova: 2.3.2, 2.3.3. \"Ikkinchi darajali yo’l bilan tutashuv\". 2.3.2 — tutashuv o’ngdan, 2.3.3 — tutashuv chapdan. 2.3.1 — 2.3.3 yo’l belgilari aholi punktlarida kesishmagacha 50 — 100 metr masofada, aholi punktlaridan tashqarida esa 150 — 300 metr masofada o’rnatiladi."
  },
  {
    "id": 924,
    "biletId": 93,
    "text": "Ushbu qo’shimcha yo’l belgisi bildiradi:",
    "options": [
      "Belgi ta’sir oralig’ida to’xtagan transport vositalari majburiy evakuatsiya qilinishini ko’rsatadi",
      "Belgi ta’sir oralig’ida to’xtagan transport vositalarini evakuatsiya qilish taqiqlanganligini bildiradi",
      "Belgi ta’sir oralig’ida to’xtagan transport vositalarini evakuatsiya qilinish ruxsat etilganligini bildiradi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_4.webp",
    "explanation": "YHQ 1 ilova: 7.6.1. \"Transport vositasini to’xtab turish joyiga qo’yish usuli\". 7.6.1 barcha turdagi transport vositalarini to’xtab turishi uchun yo’lning qatnov qismida, trotuar yoniga qo’yish usulini, 7.6.2 — 7.6.9 trotuar yonidagi to’xtab turish joyiga yengil avtomobillar, mototsikllar, mopedlar va skuterlarni qo’yish usulini bildiradi."
  },
  {
    "id": 925,
    "biletId": 93,
    "text": "Qaysi rasmda ajratuvchi mintaqa ko’rsatilgan?",
    "options": [
      "Hech qaysi rasmda ajratuvchi mintaqa yo’q",
      "B",
      "A"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_5.webp",
    "explanation": "YHQ 1-ilova Umumiy qoidalar: Ajratuvchi mintaqa — yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan ko’tarilgan yoki maysazor, ariq, maxsus to’siqlar bilan ajratilgan baland qismi."
  },
  {
    "id": 926,
    "biletId": 93,
    "text": "Rasmda ko’rsatilgan chorraha-...",
    "options": [
      "Tartibga solingan chorraha",
      "Tartibga solinmagan, teng ahamiyatga ega bo’lmagan yo’llar kesishadigan chorraha",
      "Tartibga solinmagan, teng ahamiyatga ega bo’lgan yo’llar kesishadigan chorraha"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_6.webp",
    "explanation": "YHQ 14-bobi 98-bandi: Harakatlanish navbati svetofor yoki tartibga soluvchining ishoralari orqali aniqlanib boshqarilayotgan chorraha — tartibga solingan chorraha hisoblanadi.\nMiltillovchi sariq ishora yonib-o’chayotgan, svetoforlar ishlamayotgan yoki tartibga soluvchi bo’lmagan chorraha — tartibga solinmagan chorraha hisoblanadi. Haydovchilar tartibga solinmagan chorrahalardan o’tish qoidalariga hamda chorrahada o’rnatilgan imtiyoz belgilariga amal qilishlari shart."
  },
  {
    "id": 927,
    "biletId": 93,
    "text": "Ko’k avtomobil chorrahani kesib o’tadi:",
    "options": [
      "Oxirgi bo’lib",
      "Birinchi bo’lib",
      "Ikkinchi bo’lib"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_7.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada ikkinchi darajali yo’ldan harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga ularning keyingi harakatlanish yo’nalishidan qat’iy nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’iy nazar, teng ahamiyatli yo’lda bir yo’nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega."
  },
  {
    "id": 928,
    "biletId": 93,
    "text": "Yo’nalishli bo’lmagan transport vositalari \"A\" xarfi bilan belgilangan o’ng tasmada qaysi holatlarda harakatlanishlari mumkin?",
    "options": [
      "Yo’lovchilarni chiqarish va tushirishda",
      "O’nga burilishda",
      "Yuqoridagi barcha holatlarda aragda yo’nalishli transport vositalariga xalaqit bermasa"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i93_8.webp",
    "explanation": "YHQ 22-bobi 132-bandi: Yo’nalishli transport vositalarining harakatlanishi uchun 5.9, 5.10.1 — 5.10.3 yo’l belgilari bilan ajratilgan tasmada boshqa transport vositalarining harakatlanishi va to’xtashi taqiqlanadi.\nAgar 5.9 yo’l belgisi bilan belgilangan tasma qatnov qismining boshqa tasmalardan uzuq-uzuq chiziq bilan ajratilgan bo’lsa, burilmoqchi bo’layotgan transport vositalari bu tasmaga qayta tizilishlari kerak.\nShuningdek, bunday joylarda yo’nalishli transport vositalarining harakatiga xalaqit bermaslik sharti bilan yo’lga chiqish, qatnov qismining chetki o'ng tomonida yo’lovchilarni chiqarish va tushirish uchun bu bo’lakka o’tishga ruxsat etiladi."
  },
  {
    "id": 929,
    "biletId": 93,
    "text": "Agar avtomobilning o’ng g’ildiraklari nam qoplamali yo’l yoqasiga chiqib qolsa, tavsiya etiladi?",
    "options": [
      "Avtomobilni tormozlash va to’liq to’xtatish",
      "Avtomobilni tormozlamasdan, yo’lning harakat qismiga ohista ravon burish",
      "Avtomobilni tormozlab, yo’lning harakat qismiga ohista ravon burish"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Bunday holatda avtomobilni moment kuchlar burib yuborishga moyil bo’ladi, shuning uchun ikkinchi javobdagi usulni qo’llang."
  },
  {
    "id": 930,
    "biletId": 93,
    "text": "Turar joy dahalarida qanday eng katta tezlikda harakatlanishga ruxsat etiladi?",
    "options": [
      "30 km/s",
      "20 km/s",
      "5 km/s",
      "40 km/s"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 11-bobi 78-bandi: Aholi punktlarida transport vositalarining tezligini soatiga 70 kilometrdan, tegishli yo’l belgilari o’rnatilgan maktab va maktabgacha ta’lim tashkilotlariga yetmasdan va o’tib ketib 300 metrdan kam masofada soatiga 30 kilometrdan, turar joy dahalari va yondosh hududlarda (uy-joy binolari orasidagi yer uchastkasida) esa soatiga 20 kilometrdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 931,
    "biletId": 94,
    "text": "Qaysi belgi yo’lning kichik radiusli xavfli burilish joyiga yaqinlashayotganlik haqida ogohlantiradi?",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_1.webp",
    "explanation": "YHQ 1 ilova: 1.11.1, 1.11.2. \"Xavfli burilishi\". 1.11.1 — o’ngga, 1.11.2 — chapga yo’l belgilari yo’lning kichik radiusli yoki ko’rinishi cheklangan burilish joyini bildiradi."
  },
  {
    "id": 932,
    "biletId": 94,
    "text": "Yo’l to’sig’iga chizilgan tik chiziq nimani bildiradi?",
    "options": [
      "Yo’lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo’l to’siqlarining yon yuzalarini bildiradi",
      "Xavfli chorrahaga yaqinlashayotganlik haqida",
      "Temir yo’l kesishmasiga yaqinlashayotganlik haqida"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_2.webp",
    "explanation": "YHQ 2 ilova: 2.5 — yo'lning kichik radiusli burilish, tik nishablik va boshqa xavfli joylarda yo’l to’siqlarining yon yuzalarini bildiradi."
  },
  {
    "id": 933,
    "biletId": 94,
    "text": "Qaysi belgilar axborot-ko’rsatkich belgilari?",
    "options": [
      "b va c",
      "a va b",
      "a va d",
      "c va d"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_3.webp",
    "explanation": "YHQ 1 ilova: Axborot-ishora belgilari"
  },
  {
    "id": 934,
    "biletId": 94,
    "text": "Yo’lning xavfli burilishlarida oldingi uzatmali avtomobilning orqa o’qi yon tomonga sirpanayotganda siz qanday harakat qilasiz?",
    "options": [
      "Tormozlab turib rul chambaragini sirpangan tomonga burasiz",
      "Gaz berishni kamaytirib rul chambaragi bilan boshqaruvni barqarorlashtirasiz",
      "Gaz pedalini ohista bosib avtomobilni rul chambaragini to’g’rilab avtomobilni sirpanishdan olib chiqib ketasiz",
      "Gaz pedalini ko’proq bosib, avtomobilni rul chambaragini o’zgartirmasdan sirpanishdan olib chiqasiz"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Oldingi uzatmali avtomobillar orqa uzatmali avtomobillardan yetarlicha farq qiladi. Bu farqni avtomobil boshqaruvida e’tiborga olish kerak. To’g’ri yo'lda yuqori tezlikda harakatlanishda orqa yetaklovchi avtomobilga nisbatan yonga siljish extimoli kam. Biroq nam qoplamali burilishlarda avtomobil boshqarish texnikasiga rioya etilmasa, nafaqat yonga sirpanish balki avtomobil barcha g’ildiraklarining yonga siljishi va yo’l-transport hodisalari kelib chiqishi ehtimoli mavjud."
  },
  {
    "id": 935,
    "biletId": 94,
    "text": "Avtomobilning ABS tizimi burilishda sirpanish va yonga siljishni oldini oladimi?",
    "options": [
      "Avtomobil sirpanish va yonga sirpanishini  oldini olmaydi",
      "Avtomobil faqat sirpanish ehtimolining oldini oladi",
      "Avtomobil faqat yonga siljish ehtimolining oldini oladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Antiblokirovka tizimi (ABS) avtomobilning tormoz tizimi bilan birga qarama qarshi ishlab uni tartibga soladi, ya’ni g’ildiraklarni keskin tormozlaganda ularni blokirovkadan asraydi. Bu bilan avtomobilni turg’unligini va boshqaruvchanligini yengillashtiradi. Bu tizimning o’ziga yarasha qulayligi va shu bilan bir qatorda kamchiliklari ham mavjud. Qo’qqisdan tormozlanganda hatto quruq, qattiq qoplamali yo’llarda ABS tizimi avtomobilni to’xtata olmaydi uni ishga tushish vaqti (1-2 sek.) ushbu vaziyatga haydovchi ko’nikma hosil qilishi kerak. Bu esa o’z navbatida tajriba talab etadi. Burilishlarda markazdan qochirma kuch evaziga ABS sirpanish va siljishga ta’sir eta olmay qolish ehtimoli yuzaga keladi."
  },
  {
    "id": 936,
    "biletId": 94,
    "text": "Qaysi yo’l belgilari yo’lning tor qismida haydovchiga ustunlik beradi?",
    "options": [
      "\"a\" va \"c\"",
      "\"b\" va \"d\"",
      "\"b\" va \"c\"",
      "Faqat \"c\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_6.webp",
    "explanation": "YHQ 21-bobi 128-bandi: Agar yo’lning 1.13 va 1.14 yo’l belgilari bilan belgilangan qiyaliklarda, qarama-qarshi yo’nalishlarda harakatlanishni qiyinlashtiradigan to’siq bo’lsa, nishablikka harakatlanayotgan transport vositasining haydovchisi yo’l berishi kerak.\nYHQ 1 ilova: 2.7. \"Ro’paradagi harakatlanishga nisbatan imtiyoz\" belgisi. Yo’lning tor qismida harakatlanishda haydovchi ro’paradan kelayotgan transport vositasiga nisbatan imtiyozga egaligini bildiradi."
  },
  {
    "id": 937,
    "biletId": 94,
    "text": "Avtomobil haydovchisi qayrilib olmoqchi:",
    "options": [
      "Chorrahaga birinchi bo’lib o’tadi",
      "Tramvayga yo’l berib qayrilib oladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_7.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo'lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o'ngdan kelayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda, keyingi harakat yo’nalishidan qat’i nazar, tramvay relssiz transport vositalariga nisbatan oldin o'tish huquqiga ega bo’ladi."
  },
  {
    "id": 938,
    "biletId": 94,
    "text": "Rasmda ko’rsatilgan chorraha-...",
    "options": [
      "Tartibga solinmagan, teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorraha",
      "Tartibga solingan chorraha",
      "Tartibga solinmagan, teng ahamiyatga ega bo’lgan yo’llar kesishgan chorraha"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_8.webp",
    "explanation": "YHQ 14-bobi 98-bandi: Harakatlanish navbati svetofor yoki tartibga soluvchining ishoralari orqali aniqlanib boshqarilayotgan chorraha — tartibga solingan chorraha hisoblanadi.\nMiltillovchi sariq ishora yonib-o'chayotgan, svetoforlar ishlamayotgan yoki tartibga soluvchi bo’lmagan chorraha — tartibga solinmagan chorraha hisoblanadi. Haydovchilar tartibga solinmagan chorrahalardan o’tish qoidalariga hamda chorrahada o’rnatilgan imtiyoz belgilariga amal qilishlari shart."
  },
  {
    "id": 939,
    "biletId": 94,
    "text": "Ushbu yo’l belgisi qanday maqsadda qo’llaniladi?",
    "options": [
      "Majburiy tarzda tezlikni kamaytirish uchun",
      "Ehtiyot choralarini ko’rish uchun",
      "Keskin tormoz berish uchun"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_9.webp",
    "explanation": "YHQ 1 ilova: 1.31. \"Sun’iy yo’l notekisligi\". Yo’lning sun’iy notekislik o’rnatilgan qismiga yaqinlashayotganligi to’g’risida ogohlantiradi. Transport vositasining harakatlanish tezligini majburiy tarzda kamaytirish uchun qo’llaniladi."
  },
  {
    "id": 940,
    "biletId": 94,
    "text": "Mototsikl haydovchisi qo’lini yuqoriga ko’tarib nima haqida axborot berayapti?",
    "options": [
      "O’ngga burilmoqchi ekanligi haqida",
      "To’xtash haqida",
      "Harakatni davom ettirish haqida"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i94_10.webp",
    "explanation": "YHQ 8-bobi 45-bandi: Haydovchi harakatlanishni boshlashdan, qayta tizilishdan, burilish (qayrilib olish)dan va to’xtashdan oldin tegishli yo’nalishni ko'rsatuvchi yorug’lik ishoralarini yoqishi, ular bo’lmaganda yoki ishlamaganda qo’l bilan ishoralar berishi shart.\nTo’xtash ishorasi chap yoki o’ng qo'lni yuqoriga ko’tarib beriladi."
  },
  {
    "id": 941,
    "biletId": 95,
    "text": "Yengil avtomobil burilishda ag’darilib ketishga qarshi turg’unroq:",
    "options": [
      "Yo’lovchisiz, biroq yuqori yukxonasidagi yuki bilan",
      "Yo’lovchisiz va yuksiz",
      "Yo’lovchilari va yuksiz",
      "Yo’lovchi va yuki bilan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Avtomobil og'irlik markazi qancha pastda bo'lsa va undagi yuklar to’g’ri (simmetrik) joylashsa u shuncha turg’unroq bo’ladi. Yuksiz yo’lavchilarsiz avtomobil yo’lovchisi bor va yuki bor avtomobilga nisbatan turg’unroqdir."
  },
  {
    "id": 942,
    "biletId": 95,
    "text": "Qaysi javobda orqaga harakatlanish taqiqlangan joylar ko’rsatilgan?",
    "options": [
      "Tunnellarda",
      "Chorrahalarda",
      "Piyodalarning o’tish joyida",
      "Barcha javoblar to’g’ri"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 9-bobi 63-bandi: Transport vositasini orqaga harakatlantirishda haydovchi yo’l harakati xavfsizligini ta’minlashi va boshqa yo'l harakati qatnashchilariga xalaqit bermasligi shart. Zarurat tug’ilganda haydovchi boshqa shaxslarning yordamidan foydalanishi kerak.\nOrqaga harakatlanish chorrahalarda va ushbu Qoidalarning 62-bandiga muvofiq qayrilib olish mumkin bo'lmagan joylarda taqiqlanadi."
  },
  {
    "id": 943,
    "biletId": 95,
    "text": "108 km/soat tezlikda harakatlanayotgan avtomobil 1 sekundda qancha masofani bosib o’tadi? ",
    "options": [
      "15 m",
      "30 m",
      "20 m"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "1 km = 1000 metr\n1 soat = 60 min = 3600 sekund\nKeling, ushbu qiymatlarni almashtiramiz:\n108 km/soat = 108*1000/(1*3600) = 108000/3600 = 30 m/s."
  },
  {
    "id": 944,
    "biletId": 95,
    "text": "Qaysi transport vositasiga harakatlanish taqiqlangan?",
    "options": [
      "Hech kimga taqiqlanmagam",
      "Yuk avtomobiliga",
      "Mototsiklga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i95_4.webp",
    "explanation": "YHQ 7-bobi 38-bandi: Tartibga soluvchining o'ng qo’li oldinga uzatilganda: chap yonidan tramvayga chapga, relssiz transport vositalariga barcha yo’nalishlarda;\noldi tomonidan barcha transport vositalariga faqat o’ngga harakatlanishga ruxsat beriladi;\norqa tomonidan va o'ng yonidan barcha transport vositalarining harakatlanishi taqiqlanadi;\npiyodalarga tartibga soluvchining orqa tomonida qatnov qismini kesib o’tishga ruxsat etiladi."
  },
  {
    "id": 945,
    "biletId": 95,
    "text": "Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi bilan qancha oraliq masofa saqlab harakatlanishi kerak?",
    "options": [
      "20 m",
      "50 m",
      "Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to’qnashib ketmasligi kafolatini beradigan darajada oraliq masofani saqlash kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 73-bandi: Haydovchi o’zidan oldinda harakatlanayotgan transport vositasi keskin tormoz berganida to’qnashib ketmaslik kafolatini beradigan darajadagi oraliq masofani, shuningdek yo’l harakati xavfsizligini ta’minlaydigan yonlama oraliq masofani saqlashi kerak."
  },
  {
    "id": 946,
    "biletId": 95,
    "text": "Ushbu yo’l belgisi:",
    "options": [
      "Qatnov qismida to'suvchi qurilma borligini bildiradi",
      "Chorraha oldida to’suvchi qurilma borligini bildiradi",
      "Oldinda boshqariladigan to’suvchi qurilma borligini bildiradi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i95_6.webp",
    "explanation": "YHQ, 1 ilova: 1.34. \"Diqqat, boshqariladigan to’siq\". Ushbu yo’l belgisi boshqariladigan to’suvchi qurilmasiga yetmasdan o’rnatiladi va transport vositalari haydovchilarini oldinda to’suvchi qurilma borligi haqida ogohlantiradi."
  },
  {
    "id": 947,
    "biletId": 95,
    "text": "Chorrahadan oxirgi bo’lib qaysi transport vositasi kesib o’tadi?",
    "options": [
      "Sariq avtomobil",
      "Oq avtomobil sariq bilan bir vaqtda",
      "Qizil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i95_7.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak. \nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 948,
    "biletId": 95,
    "text": "Chap tomondagi yondosh hududdan foydalanib qayrilib olishning ko’rsatilgan qaysi usuli harakat xavfsizligini ta’minlaydi?",
    "options": [
      "Faqat o’ng tomondagi rasmda",
      "Ikkisida ham",
      "Faqat chap tomondagi rasmda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i95_8.webp",
    "explanation": "Eng maqbul va xavfsiz qayrilib olish o’ng tomondagi suratda ko’rsatilgan. Bunday vaziyatda ko'rish maydoni keng va kam harakat talab etiladi."
  },
  {
    "id": 949,
    "biletId": 95,
    "text": "Shatakka olingan avtobusda odam tashishga ruxsat etiladimi?",
    "options": [
      "Faqat o’tirgan holda tashishga ruxsat beriladi",
      "Ruxsat beriladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 143-bandi: Qattiq yoki egiluvchan ulagich yordamida shatakka olingan avtobusda, trolleybusda va yuk avtomobili yukxonasida odam tashish, qisman ortish yo’li bilan shatakka olishda esa shatakka olingan transport vositasining kabinasida va yukxonasida, shuningdek shatakka olgan transport vositasining yukxonasida odamlar bo’lishi taqiqlanadi."
  },
  {
    "id": 950,
    "biletId": 95,
    "text": "Piyodalar to’xtab turgan avtobus va trolleybusning qaysi tomonidan yo’lni kesib o’tishlari kerak?",
    "options": [
      "Istalgan tomonidan",
      "Oldi tomonidan",
      "Orqa tomonidan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 19-bandi: Piyodalar to'xtab turgan avtobus va trolleybusning orqa tomonidan, tramvayning esa oldi tomonidan yo’lni kesib o’tishlari shart."
  },
  {
    "id": 951,
    "biletId": 96,
    "text": "Chapga burilayotgan sariq avtomobil haydovchisi qaysi tasmani egallashi kerak?",
    "options": [
      "Chap tasmani",
      "O’rta tasmani",
      "Istalgan tasmani",
      "O’ng tasmani"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_1.webp",
    "explanation": "YHQ 9-bobi 57-bandi: Burilishni shunday amalga oshirish kerakki, bunda qatnov qismlarining kesishmasidan chiqayotgan transport vositasi qarama-qarshi yo’nalishdagi harakat tomoniga o’tib ketmasligi kerak.\nO’ngga burilayotgan transport vositasi iloji boricha qatnov qismining o'ng tomoniga yaqinroqda harakatlanishi kerak."
  },
  {
    "id": 952,
    "biletId": 96,
    "text": "O’ng tomondagi yondosh hududan foydalanib qayrilib olishning ko’rsatilgan qaysi usuli harakat xavfsizligini ta’minlaydi.",
    "options": [
      "Faqat chap tomondagi suratda",
      "Faqat o’ng tomondagi suratda",
      "Har ikki suratda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_2.webp",
    "explanation": "Chap tarafdagi suratda Siz yondosh xududdan chikishda vaziyatni tulik nazorat kila olasiz. O’ng tomondagi suratda yo’lga orqa tomon bilan chiqish siz uchun nisbatan xavfli, chunki yo’lni harakat qismida orqa bilan harakatlanayapsiz, shu bilan bir qatorda ko’rish maydoni cheklangan."
  },
  {
    "id": 953,
    "biletId": 96,
    "text": "M toifadagi transport vositalari bu:",
    "options": [
      "Kamida to’rt g’ildirakka ega bo’lgan va yo’lovchilarni tashish uchun foydalaniladigan mexanik transport vositalari",
      "Tirkamalar (yarim tirkamalar ham)",
      "Yuk tashish uchun mo’ljallangan, eng katta vazni 3,5 t dan oshmaydigan avtotransport vositalari"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova 7.22 band: M toifasi — kamida to’rt g’ildirakka ega bo’lgan va yo’lovchilarni tashish uchun foydalaniladigan mexanik transport vositalari, shu jumladan: M1 toifasi — yo’lovchilarni tashish uchun foydalaniladigan va haydovchining o’rindig’idan tashqari o’rindiqlar soni 8 tadan oshmaydigan avtotransport vositalari.\nM2 toifasi — yo’lovchilarni tashish uchun foydalaniladigan, haydovchining o’rindig’idan tashqari o’rindiqlar soni 8 tadan ortiq va eng katta vazni 5 t gacha bo’lgan avtotransport vositalari.\nM3 toifasi — yo’lovchilarni tashish uchun foydalaniladigan, haydovchining o’rindig’idan tashqari o’rindiqlar soni 8 tadan ortiq va eng katta vazni 5 t dan ko’p bo’lgan avtotransport vositalari."
  },
  {
    "id": 954,
    "biletId": 96,
    "text": "Ushbu yo’l belgisi qanday nomlanadi?",
    "options": [
      "Yuk avtomobillari bilan quvib o’tish taqiqlangan",
      "Katta o’lchamli yuklarni tashish taqiqlangan",
      "Xavfli yuk tashiyotgan transport vositasining harakati taqiqlangan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_4.webp",
    "explanation": "YHQ, 1 ilova 3.32: \"Xavfli yuk tashiyotgan transport vositasining harakati taqiqlangan\"."
  },
  {
    "id": 955,
    "biletId": 96,
    "text": "Yo’lning qatnov qismi-...",
    "options": [
      "Yo’lning relssiz transport vositalari harakati uchun mo’ljallagan qismi",
      "Yo’lning avtomobillar harakati uchun mo’ljallagan qismi",
      "Yo’lning transport vositalari harakati uchun mo’ljallagan qismi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Qatnov qismi — yo’lning relssiz transport vositalari harakati uchun mo’ljallangan qismi."
  },
  {
    "id": 956,
    "biletId": 96,
    "text": "Qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    "options": [
      "A",
      "B",
      "A va B"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_6.webp",
    "explanation": "YHQ 27-bobi 163-bandi: Transport vositasining gabaritlaridan oldi yoki orqa tomonga 1 metrdan, yon tomonga gabaritning chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk \"Katta o’lchamli yuk\" taniqlik belgisi bilan belgilanishi, sutkaning qorong’i vaqtida va yetarlicha ko’rinmaydigan sharoitda esa bunga qo’shimcha ravishda oldi oq rangli chiroq yoki yorug’lik qaytargich, orqasi esa qizil rangli chiroq yoki yorug’lik qaytargich bilan belgilanishi kerak."
  },
  {
    "id": 957,
    "biletId": 96,
    "text": "Chorrahani oxirgi bo’lib qaysi transport vositasi kesib o’tadi?",
    "options": [
      "Qizil avtomobil",
      "Yashil avtomobil",
      "Ko’k avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_7.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo'l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga yo'l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 958,
    "biletId": 96,
    "text": "Haydovchi yo’lning relssiz transport vositalari harakatlanayotgan tasmalar sonini belgilaydigan chiziqlar yoki yo’l belgilari bo’lmasa, tasmalar sonini qanday aniqlash kerak?",
    "options": [
      "Qatnov qismining kengligini, transport vositalari orasidagi zarur yonlama oraliq masofani va ularning gabarit o’lchamlarini hisobga olgan holda o’zi aniqlaydi",
      "Bunday yo’lni ikki tasmali qarama qarshi harakat tashkil qilingan yo’l deb qabul qilish kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 64-bandi: Relssiz transport vositalari harakatlanadigan tasmalar soni chiziqlar va (yoki) 5.8.1, 5.8.2, 5.8.7, 5.8.8 yo’l belgilari bilan belgilanadi. Bunday chiziqlar yoki yo'l belgilari bo’lmasa, haydovchilar harakatlanish tasmalari sonini, qatnov qismining kengligini, transport vositalari orasidagi zarur yonlama oraliq masofani va ularning gabarit o'lchamlarini hisobga olgan holda o’zlari aniqlaydilar. Bunda harakatlanish ikki tomonlama bo'lgan yo’l qatnov qismining chap tomondagi yarmi, qatnov qismining joylardagi kengayishlari (sekinlashish va tezlashish tasmalari, balandlikka ko’tarilishdagi qo'shimcha tasmalar, yo’nalishli transport vositalarining to’xtash joylaridagi kengayishlar)ni hisobga olmagan holda, qarama-qarshi yo’nalishda harakatlanish uchun mo’ljallangan deb hisoblanadi."
  },
  {
    "id": 959,
    "biletId": 96,
    "text": "Balandlika yo’l chetida to’siq mavjud bo’lganda to’xtagan avtomobilni joyidan g’ildirab ketishini oldini olish uchun oldingi g’ildiraklarni burib qo’yish usuli qaysi javobda to’g’ri ko’rsatilgan?",
    "options": [
      "\"B\" va \"C\"",
      "\"B\" va \"D\"",
      "\"A\" va \"D\"",
      "\"A\" va \"C\""
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_9.webp",
    "explanation": "YHQ 13-bobi 95-bandi: Transport vositasining o’z-o’zidan harakatlanib ketishini yoki o’zi yo’qligida undan foydalanishni istisno qiladigan zarur ehtiyot choralarini ko’rgandan keyingina haydovchi o’z joyini tashlab ketishi yoki transport vositasini qoldirishi mumkin.\nQiyalikda avtomobilni nazarda tutilmagan g’ildirab ketishini oldini olish uchun avtomobil g’ildiraklarini nishablik tomon yo’l cheti tosh bordyurga burib tirab qo’yish (A) va aksincha orqaga g’ildirab ketishni oldini olish uchun oldingi g’ildiraklarni orqa tomoni tosh bordyurga taqab qo’yish (B) avtomobilni joyidan qo’zg’almaslikni qo’shimcha choralari bo’lib xizmat qiladi."
  },
  {
    "id": 960,
    "biletId": 96,
    "text": "Qaysi yo’l belgilari yo’nalishsiz transport vositalariga chapga burilishni taqiqlaydi?",
    "options": [
      "Faqat \"a\"",
      "\"a\" va \"b\"",
      "Hammasi",
      "\"a\" va \"c\""
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i96_10.webp",
    "explanation": "YHQ 1-ilovaning quyidagi bandlar: 5.10.2, 5.10.3. \"Yunalishli transport vositalari uchun alohida ajratilgan tasmasi bor yo’lga chiqishi\".\n5.11.1. \"Qayrilib olish joyi\". Chapga burilish taqiqlanadi."
  },
  {
    "id": 961,
    "biletId": 97,
    "text": "Yo’lovchilarga taqiqlanadi:",
    "options": [
      "Transport vositasi harakatlanayotgan vaqtda uning eshiklarini ochish",
      "Harakatlanayotgan bortli yuk avtomobillarida tik turish, bortlarda yoki undan yuqoridagi yuk ustida o’tirish",
      "Transport vositasi harakatlanayotgan vaqtda haydovchini boshqarishdan chalg’itish va unga xalaqit berish",
      "Barcha ko’rsatilgan javoblar to’g’ri"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 5-bobi 24-bandi: Yo’lovchilarga quyidagilar taqiqlanadi: transport vositasi harakatlanayotgan vaqtda haydovchini boshqarishdan chalg'itish (unga xalaqit berish);\nharakatlanayotgan bortli yuk avtomobillarida tik turish, bortlarda yoki undan yuqoridagi yuk ustida o’tirish;\ntransport vositasi harakatlanayotgan vaqtda uning eshiklarini ochish;\ntransport vositasi harakatlanayotgan vaqtda salondan tana qismlarini (qo’ldan tashqari) chiqarish taqiqlanadi.\nBu talablarning bajarilishini haydovchi nazorat qilishi kerak."
  },
  {
    "id": 962,
    "biletId": 97,
    "text": "Ko’rsatilgan qaysi belgilar faqat shu o’rnatilgan tasmani o’ziga ta’sir qiladi?",
    "options": [
      "Faqat \"a\"",
      "Faqat \"b\"",
      "\"b\" va \"c\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i97_2.webp",
    "explanation": "YHQ, 1 ilova 3.24: \"Yukori tezlik cheklangan\". Belgida kursatilganidan ortik tezlikda (km/s) harakatlanish takiklanishini bildiradi.\n7.14. \"Harakatlanish tasmasi\". Belgi yoki svetofor ta’siridagi harakatlanish bo’lagini kursatadi."
  },
  {
    "id": 963,
    "biletId": 97,
    "text": "Mexanik transport vositalarini shatakka olishda egiluvchan ulagichga kamida nechta ogohlantiruvchi qurilma o’rnatiladi?",
    "options": [
      "Kamida uchta",
      "Kamida bitta",
      "Kamida ikkita"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 29-bobi 177-bandi: Mexanik transport vositalarini shatakka olishda egiluvchan ulagichni ko’rsatadigan ogohlantiruvchi, o’lchami 200 x 200 millimetr bo’lgan, diagonali bo'yicha ketma-ket joylashgan 50 millimetr qalinlikdagi qizil va oq rangli chiziqlar tushirilgan, yorug’lik qaytaradigan yuzali bayroqchalar yoki taxtachalar shaklidagi ogohlantiruvchi qurilmalar o’rnatilishi kerak. Egiluvchan ulagichga kamida ikkita ogohlantiruvchi qurilma o'rnatiladi."
  },
  {
    "id": 964,
    "biletId": 97,
    "text": "Siz to’g’ri yo’lda harakatlanayotib to’satdan yo’lning qisman katta bo’lmagan sirpanchiq qismiga duch keldingiz. Bunda qanday ehtiyot choralarini ko’rasiz?",
    "options": [
      "Rulni burib sirpanchiqdan chiqib ketish",
      "Avtomobilni ohista to’xtatish",
      "Harakat yo’nalishini va tezlikni o’zgartirmasdan ehtiyotkorlik bilan o’tib ketish"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "Ushbu holatda Siz yo’lning sirpanchiq qismidan harakatlanish yo’nalishi va tezligini o’zgartirmasdan ehtiyotkorlik bilan o'tib ketishingiz lozim bo'ladi."
  },
  {
    "id": 965,
    "biletId": 97,
    "text": "Turar joy dahasidan yo’lga chiqishda yo’l berish zarur:",
    "options": [
      "O’ng tomondan yaqinlashib kelayotgan transport vositalariga",
      "Ko’k rangli yalt-yalt etuvchi chiroqcha-mayoqcha yoqilgan transport vositalariga",
      "Chap tomondan yaqinlashib kelayotgan transport vositalariga",
      "Barcha transport vositalariga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 20-bobi 126-bandi: Turar joy dahalaridan chiqishda haydovchilar boshqa harakat qatnashchilariga yo'l berishlari kerak."
  },
  {
    "id": 966,
    "biletId": 97,
    "text": "Svetofor ishoralari imtiyoz belgilari talablariga zid kelgan hollarda:",
    "options": [
      "Haydovchilar svetofor ishoralariga amal qilishlari kerak",
      "Haydovchilar imtiyoz belgilariga amal qilishlari kerak"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 7-bobi 43-bandi: Svetofor ishoralari imtiyoz belgilari talablariga zid kelgan hollarda haydovchilar svetofor ishoralariga amal qilishlari kerak."
  },
  {
    "id": 967,
    "biletId": 97,
    "text": "Harakatlanish bo’lagidagi uchburchak shaklidagi chiziq:",
    "options": [
      "Yo’l berishingiz kerak bo’lgan joy yaqinlashayotganligi haqida ogohlantiradi",
      "To’xtashingiz zarur bo’lgan joyni bildiradi",
      "Yo’lning xavfli qismini bildiradi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i97_7.webp",
    "explanation": "YHQ 2 ilova. 1.20 — haydovchini 1.13 chizig'iga yaqinlashayotgani haqida ogohlantiradi. 1.13 — kesishayotgan yo’lda harakatlanayotgan transport vositasiga yo'l berish uchun to’xtash zarur bo’lganda, haydovchiga transport vositasini to’xtatish joyini ko’rsatadi."
  },
  {
    "id": 968,
    "biletId": 97,
    "text": "Sariq avtomobil chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Ikkinchi bo’lib",
      "Uchinchi bo’lib",
      "Oxirgi bo’lib"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i97_8.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 106-bandi: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak."
  },
  {
    "id": 969,
    "biletId": 97,
    "text": "Temir yo’l kesishmalari va ularga yaqin joylarda quvib o’tishga tegishli qanday yo’l harakati qoidalari amal qiladi?",
    "options": [
      "Quvib o’tish faqat temir yo’l kesishmalaridan keyin taqiqlanadi",
      "Temir yo’l kesishmalarida, ularga 100 metrdan kam masofa qolganda va temir yo’l kesishmalaridan keyin 100 metr davomida quvib o’tish taqiqlanadi",
      "Temir yo’l kesishmalarida va ularga 100 metrdan kam masofa qolganda quvib o’tish taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 86-bandi: Quvib o’tish quyidagi hollarda taqiqlanadi: tartibga solingan chorrahalarda;\ntartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;\nko’priklarda, yo'l o’tkazgichlarda, estakadalarda va ularning ostida;\npiyodalar o’tish joylarida;\ntemir yo'l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda;\nquvib yoki aylanib o'tayotgan transport vositalarini;\ntepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;\n3.20 va 3.22 yo’l belgilari ta’sir oralig’ida."
  },
  {
    "id": 970,
    "biletId": 97,
    "text": "Harakatlanish tasmasi:",
    "options": [
      "Avtomobillarning bir qator bo’lib harakatlanishi uchun yetarlicha keng bo’lgan, yo’l chiziqlari bilan belgilangan yoki belgilanmagan yo’l qatnov qismining har qanday bo’ylama tasmasi",
      "Yo’lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to’xtashi uchun mo’ljallanmagan, yo’l sathidan baland va (yoki) 1.1 yotiq chizig’i bilan belgilangan qismi",
      "Yo’lning relssiz transport vositalari harakati uchun mo’ljallangan qismi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Harakatlanish tasmasi — avtomobillarning bir qator bo’lib harakatlanishi uchun yetarlicha keng bo’lgan, yo'l chiziqlari bilan belgilangan yoki belgilanmagan yo’l qatnov qismining har qanday bo’ylama tasmasi."
  },
  {
    "id": 971,
    "biletId": 98,
    "text": "Bu qo’shimcha-axborot yo’l belgisi qaysi yo’l belgisi bilan birgalikda qullaniladi?",
    "options": [
      "\"A\"",
      "\"Б\"",
      "\"C\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i98_1.webp",
    "explanation": "YHQ 1 ilova 7.12: \"Xavfli yo’l yoqasi\". Yo’l ishlari bajarilayotgani sababli yo'l yoqasiga chiqish xavfli ekanligi haqida ogohlantiradi. 1.23 belgisi bilan qo’llaniladi."
  },
  {
    "id": 972,
    "biletId": 98,
    "text": "Agar piyodalar o’tish joylaridan keyin tirbandlik paydo bo’lsa haydovchi qayerda to’xtashi kerak?",
    "options": [
      "Bevosita piyodalar o’tish joyi oldida",
      "Piyodalar o’tish joyida, agar piyodalar bo’lmasa",
      "Piyodalar o’tish joyiga 5 m yetmasdan"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 17-bobi 112-bandi: Piyodalar o’tish joylaridan keyin paydo bo’lgan tirbandlik tufayli haydovchi piyodalar o’tish joyida to’xtashga majbur bo’ladigan bo’lsa, piyodalar o’tish joyiga kirish taqiqlanadi."
  },
  {
    "id": 973,
    "biletId": 98,
    "text": "Chorrahani ikkinchi bo’lib kesib o’tadi:",
    "options": [
      "Mototsikl",
      "Tramvay",
      "Avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i98_3.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo’lda harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 106-bandi: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak.\nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda rel’ssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o’tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 974,
    "biletId": 98,
    "text": "To’la vazni 3,5 tonnadan oshmaydigan yuk avtomobillarini quyidagilar bilan jihozlanmagan bo’lsa ham foydalanishga ruxsat etiladi:",
    "options": [
      "Tibbiyot qutichasi",
      "O’t o’chirgich",
      "O’zi yurib ketishidan saqlovchi, g’ildirak diametriga muvofiq (kamida ikkita) tirgak",
      "Majburiy to’xtaganini bildiruvchi belgi (yoki miltillovchi qizil chiroq)"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 3 ilova 7.10: M3, N2, N3 toifadagi — o’zi yurib ketishidan saqlovchi, g’ildirak diametriga muvofiq (kamida ikkita) tirgak."
  },
  {
    "id": 975,
    "biletId": 98,
    "text": "Ko’rsatilgan qaysi yo’l belgisi yengil yo’nalishsiz taksilarga yo’lovchilarni tushurish-chiqarish (yuklarni ortish-tushurish) vaqtida ta’sir qilmaydi?",
    "options": [
      "Faqat \"A\"",
      "Faqat \"Б\" \"C\" \"Д\"",
      "Faqat \"C\"",
      "Hammasi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i98_5.webp",
    "explanation": "YHQ 1 ilova: 3.27. belgisi yo’lalishsiz yengil taksilarga yo’lovchilarni tushurish-chiqarish (yuklarni ortish-tushurish) vaqtida ta’sir qilmaydi; Ushbu Qoidalarning 176-bandiga binoan \"Nogiron\" tanish belgisi bilan belgilangan avtomobillar va kajavali mototsikllarni boshqarayotgan nogiron haydovchilar 3.2, 3.3 va 3.28 belgilari talablaridan chetga chiqishlari mumkin. 7.18 belgi bo'lganda 3.27 belgisining ta’sir doirasida to'xtashga ruxsat etiladi. 3.28 — 3.30 belgilarining taksometri ishlab turgan taksilarga taalluqli emas."
  },
  {
    "id": 976,
    "biletId": 98,
    "text": "Chorraxadan oxirgi bo’lib qaysi transport vositasi kesib o’tadi?",
    "options": [
      "Velosiped",
      "Avtobus",
      "Avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i98_6.webp",
    "explanation": "YHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo'lmagan yo’llar kesishgan chorrahada, ikkinchi darajali yo'lda harakatlanayotgan transport vositasining haydovchisi asosiy yo'ldan yaqinlashayotgan transport vositalariga, ularning keyingi harakat yo’nalishidan qat’i nazar, yo’l berishi kerak.\nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo'ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan, shuningdek ruxsat etilgan hollarda quvib o'tayotgan transport vositalariga yo’l berishi shart."
  },
  {
    "id": 977,
    "biletId": 98,
    "text": "Avtomagistralda to’xtashga ruxsat berilgan:",
    "options": [
      "Faqat qatnov qismini chetini bildiruvchi chiziqdan chetda",
      "5.15 yoki 6.11 yo’l belgilari bilan belgilangan maxsus to’xtab turish maydonchalarida",
      "Qatnov qismidan chetda barcha joyda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 19-bobi 121-bandi: Avtomagistrallarda 5.15 yoki 6.11 yo’l belgilari bilan belgilangan maxsus to'xtab turish maydonchalaridan boshqa joylarda to’xtash taqiqlanadi."
  },
  {
    "id": 978,
    "biletId": 98,
    "text": "Kunning yorug’ vaqtida harakatlanayotgan qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    "options": [
      "Har ikkalasinda",
      "A",
      "Hech kim buzmayapti"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i98_8.webp",
    "explanation": "YHQ 27-bobi 163-bandi: Transport vositasining gabaritlaridan oldi yoki orqa tomonga 1 metrdan, yon tomonga gabaritning chetki qismidan 0,4 metrdan ortiq chiqib turgan yuk \"Katta o’lchamli yuk\" taniqlik belgisi bilan belgilanishi, sutkaning qorong’i vaqtida va yetarlicha ko’rinmaydigan sharoitda esa bunga qo'shimcha ravishda oldi oq rangli chiroq yoki yorug’lik qaytargich, orqasi esa qizil rangli chiroq yoki yorug’lik qaytargich bilan belgilanishi kerak."
  },
  {
    "id": 979,
    "biletId": 98,
    "text": "Qaysi holatlarda jabrlanuvchiga yurak-o’pka reanimatsiyasini boshlash kerak?",
    "options": [
      "Hushidan ketishda, nafas olish faoliyati va qon aylanishi to’xtaganda",
      "Yurak sohasida og’riq sezilganda va nafas olish qiyinlashganda",
      "Hushidan ketishda, nafas olish faoliyatidan qat’iy nazar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Yurak-o’pka reanimatsiyasi Faqat jabrlanuvchida xayot alomatlari yo’q bo'lganda amalga oshiriladi: xushidan ketish, uo'qui arteriyasida puls yo’qligi, nafas olish to’xtashi."
  },
  {
    "id": 980,
    "biletId": 98,
    "text": "Trotuar va piyodalar yo’lkasi bo’lmaganda bolalar guruhini yo’lda qanday tartibda olib yurish mumkin?",
    "options": [
      "Qatnov qismi chetidan katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi",
      "Yo’l yoqasidan faqat kunduzi va katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 4-bobi 16-bandi: Bolalar guruhini trotuarlar va piyodalar yo’lkalaridangina, ular bo'lmaganda esa yo’l yoqasidan faqat sutkaning yorug’ vaqtida va katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi."
  },
  {
    "id": 981,
    "biletId": 99,
    "text": "Chorraxadan uchinchi bo’lib qaysi avtomobil kesib o’tadi:",
    "options": [
      "Ko’k avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i99_1.webp",
    "explanation": "YHQ 6-bobi 26-bandi: Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi.\nYHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada ikkinchi darajali yo'ldan harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga ularning keyingi harakatlanish yo’nalishidan qat’iy nazar, yo’l berishi kerak. Bunday chorrahalarda tramvay harakatlanish yo’nalishidan qat’iy nazar, teng ahamiyatli yo’lda bir yo’nalishda yoki qarama-qarshi yo’nalishda harakatlanayotgan relssiz transport vositalariga nisbatan imtiyozga ega.\nYHQ 16-bobi 106-bandi: Asosiy yo'lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo'llar chorrahasidan o’tish qoidasiga amal qilishlari kerak. Ikkinchi darajali yo'llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak."
  },
  {
    "id": 982,
    "biletId": 99,
    "text": "Ushbu \"50\" yozuvli yo’l chizig’i nimani bildiradi?",
    "options": [
      "Yo’l yoki marshrut raqamini",
      "Yo’lning ushbu qismida tavsiya berilgan tezlikni",
      "Yo’lning ushbu qismida ruxsat berilgan eng yuqori tezlikni"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i99_2.webp",
    "explanation": "YHQ 2 ilova: 1.28 — taqiqlovchi yo’l belgilarini takrorlovchi yo’l chizig’i."
  },
  {
    "id": 983,
    "biletId": 99,
    "text": "Qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?",
    "options": [
      "A, B",
      "A",
      "B"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i99_3.webp",
    "explanation": "YHQ 27-bobi 162-bandi: Yengil avtomobilning tom qismiga o’rnatilgan yukxonasidagi yukning balandligi 1 metrdan (maxsus moslamalar bilan mustahkamlangan holda velosipedlar va individual harakatlanish vositalarini tashish bundan mustasno) va uzunligi avtomobilning gabaritidan 0,5 metrdan oshmasa yukni tashishga ruxsat beriladi."
  },
  {
    "id": 984,
    "biletId": 99,
    "text": "Qo’l oyoq uchlari( tirsakdan past qismi, boldir) sinishida transport shinalari yoki ularni qo’lda yasash uchun vositalar bo’lmasa birinchi tibbiy yordam qanday ko’rsatiladi?",
    "options": [
      "Qo’llarni tirsakdan bukib, ro’molga osgan holda tanaga bog’lash, oyoqlarni orasiga albatta yumshoq mato qo’yib bir-biriga bog’lash",
      "Qo’llarni tana bo’ylab cho’zgan holda tanaga bog’lash, oyoqlarni orasiga yumshoq mato qo’yib bir-biriga bog’lash",
      "Qo’llarni tirsakdan bukib, ro’molga osgan holda tanaga bog’lash, oyoqlarni bir-biriga yaxshilab jipslab tekkazib bog’lash"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Qo’l oyoq uchlari( tirsakdan past qismi, boldir) sinishida transport shinalari yoki ularni qo'lda yasash uchun vositalar bo'lmasa qo’llarni tirsakdan bukib, го‘то\\да osgan holda tanaga bog’lash, oyoqlarni orasiga albatta yumshoq mato qo’yib bir-biriga bog’lash kerak."
  },
  {
    "id": 985,
    "biletId": 99,
    "text": "Ko’rsatilgan belgilardan qaysi biri texnik tavsifnomasiga yoki holatiga ko’ra tezligi soatiga 40 kilometrdan kam bo’lgan transport vositalarining harakatlanishini taqiqlaydi?",
    "options": [
      "Faqat \"c\"",
      "\"a\" va \"b\"",
      "Faqat \"a\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i99_5.webp",
    "explanation": "YHQ 19-bobi 121-bandi: Avtomagistrallarda piyodalar, uy hayvonlari, ot-aravalar, velosipedlar, individual harakatlanish vositalari, skuterlar, mopedlar, traktorlar va o’zi yurar avtomobillar, texnik tavsifnomasiga yoki holatiga ko’ra tezligi soatiga 40 kilometrdan kam bo’lgan transport vositalarining harakatlanishi taqiqlanadi."
  },
  {
    "id": 986,
    "biletId": 99,
    "text": "Qaysi holatlarda aholi punktlarida tovushli ishoralardan foydalanish mumkin?",
    "options": [
      "Faqat zarur bo’lgan hollarda yo’l-transport hodisasining oldini olish uchun",
      "Faqat boshqa haydovchilarni quvib o’tish haqida ogohlantirish uchun",
      "Barcha javoblarda ko’rsatilgan holatlarda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 8-bobi 48-bandi: Tovushli ishoralar faqat quyidagi hollarda qo’llanilishi mumkin: aholi punktlaridan tashqarida boshqa haydovchilarni quvib o’tish haqida ogohlantirish uchun;\nzarur bo'lgan hollarda yo’l-transport hodisasining oldini olish uchun.\nYuqorida ko’rsatilgan hollardan tashqari tovushli ishoralardan foydalanish taqiqlanadi."
  },
  {
    "id": 987,
    "biletId": 99,
    "text": "Transport vositasining ruxsat etilgan to’la vazn bu - ...",
    "options": [
      "Aslahalangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan, yuk, haydovchi va yo’lovchilari bilan birgalikdagi eng yuqori vazni (o’lchovi)",
      "Transport vositasining yuki, haydovchi va yo’lovchilari bilan birgalikdagi vazni",
      "Aslahalangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan, yuksiz, haydovchisiz va yo’lovchilarsiz eng yuqori vazni (o’lchovi)"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Ruxsat etilgan to’liq vazn — jihozlangan transport vositasining ishlab chiqargan korxona tomonidan belgilangan yuk, haydovchi va yo’lovchilari bilan birgalikdagi eng yuqori vazni (o’lchovi)."
  },
  {
    "id": 988,
    "biletId": 99,
    "text": "Ko’rsatilgan belgilardan qaysi biri ruxsat etilgan to’la vazni 3,5 tonnadan oshmaydigan yuk avtomobillariga harakatlanishga ruxsat beradi?",
    "options": [
      "\"a\" va \"b\"",
      "Faqat \"b\"",
      "\"a\" va \"c\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i99_8.webp",
    "explanation": "YHQ 2 ilova: 3.1 - \"Kirish taqiqlangan\" belgisi. Barcha transport vositalarining kirishi taqiqlanishini bildiradi (yo’nalishli transport vositalaridan tashqari)."
  },
  {
    "id": 989,
    "biletId": 99,
    "text": "Turar joy dahalarida piyodalar yo’lning qaysi qismida harakatlanishlari kerak?",
    "options": [
      "Faqat trotuar bo’yicha",
      "Qatnov qismi chetida bir qator bo’lib",
      "Trotuardan yoki qatnov qismidan"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 20-bobi 123-bandi: Turar joy dahalari (kirish va chiqish 5.38 va 5.39 yo’l belgilari bilan belgilangan hududlar)da piyodalarga trotuarlar hamda qatnov qismida harakatlanishga ruxsat etiladi. Bunda piyodalar imtiyozga ega bo’ladilar, biroq ular transport vositalarining harakatlanishiga asossiz xalaqit bermasliklari kerak."
  },
  {
    "id": 990,
    "biletId": 99,
    "text": "Chorraxadan birinchi bo’lib qaysi transport vositasi kesib o’tadi?",
    "options": [
      "Ko’k avtomobil",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i99_10.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada rel’ssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak. Bunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay rel’ssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi.\nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda rel’ssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 991,
    "biletId": 100,
    "text": "Tartibga solinmagan chorrahada qaysi belgi albatta to’xtashni talab qiladi?",
    "options": [
      "Faqat \"b\" va \"c\"",
      "Faqat \"a\"",
      "Faqat \"b\"",
      "Hammasi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i100_1.webp",
    "explanation": "YHQ 1 ilova: 2.5. \"To’xtamasdan harakatlanish taqiqlangan\" belgisi. To’xtash chizig’i oldida, agar u bo'lmasa, kesib o’tiladigan qatnov qismining chetida to’xtamasdan harakatlanish taqiqlanadi. Haydovchi kesib o’tilayotgan yo'ldan, 7.13 qo'’shimcha-axborot belgisi bo’lganda esa asosiy yo’ldan harakatlanayotgan transport vositalariga yo’l berishi kerak."
  },
  {
    "id": 992,
    "biletId": 100,
    "text": "Qaysi transport vositalari yo’nalishli transport vositalari hisoblanadi?",
    "options": [
      "Belgilangan yo’nalishi va bekatlari bo’lgan, yo’lovchi tashish uchun mo’ljallangan umum foydalanishdagi transport vositalari (trolleybus, tramvay, avtobus, yo’nalishli taksi)",
      "Yo’lovchilarni tashuvchi istalgan transport vositalari",
      "Avtobuslar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Yo’nalishli transport vositasi — belgilangan yo'nalishi va bekatlari bo'lgan, yo’lovchi tashish uchun mo’ljallangan umum foydalanishdagi transport vositalari (trolleybus, tramvay, avtobus, yo’nalishli taksi)."
  },
  {
    "id": 993,
    "biletId": 100,
    "text": "Chorrahdan birinchi bo’lib kesib o’tadi",
    "options": [
      "Yashil avtomobil",
      "Ko’k avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i100_3.webp",
    "explanation": "YHQ 16-bobi 105-bandi: Teng ahamiyatga ega bo’lgan yo’llar kesishgan chorrahada relssiz transport vositasining haydovchisi o’ngdan yaqinlashayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak.\nBunday chorrahalarda keyingi harakat yo’nalishidan qat’iy nazar, tramvay relssiz transport vositalariga nisbatan oldin o’tish huquqiga ega bo’ladi."
  },
  {
    "id": 994,
    "biletId": 100,
    "text": "Qatnov qismi yo’l chiziqlari bilan ajratilgan bo’lsa haydovchilar qanday holatlarda qat’iy tasmalar bo’yicha harakatlanishlari kerak?",
    "options": [
      "Faqat harakatlanish tasmalari uzluksiz sidirg’a chiziqlar bilan ajratilgan bo’lsa",
      "Faqat harakatlanish serqatnov bo’lganda",
      "Barcha holatlarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 70-bandi: Agar qatnov qismi yo'l chiziqlari bilan tasmalarga ajratilgan bo’lsa, transport vositalarining harakatlanishi qat’iy ravishda belgilangan tasmalarda amalga oshirilishi kerak. Faqat qayta tizilishda uzuq-uzuq chiziqlarni bosib o’tishga ruxsat etiladi."
  },
  {
    "id": 995,
    "biletId": 100,
    "text": "Ko’rsatilgan belgilardan qaysilarining talabi bevosita o’rnatilgan joyidan kuchga kiradi?",
    "options": [
      "\"a\" va \"b\"",
      "\"b\"",
      "Hammasi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i100_5.webp",
    "explanation": "YHQ 1-ilova: 3.24 yo’l belgisi belgi o’rnatilgan joydan keyingi eng yaqin chorrahagacha, chorrahasi bo’lmagan aholi punktlarida aholi yashaydigan hududning oxirigacha ta’sir qiladi (“B”). Belgining ta’sir doirasi 7.2.1 qo’shimcha axborot belgisi bilan aniqlashtirilishi mumkin (“A”). Bunda belgining tasir doirasi belgi o’rnatilgan joydan 100 m gacha davom yetadi. (“V”) belgi ostidagi 7.1.1 \"Ob’ektgacha bo’lgan masofa\" qo’shimcha axborot belgisi belgi o'rnatilgan joydan tasir doirasi kuchga kiradigan joygacha bo'lgan masofani bildiradi."
  },
  {
    "id": 996,
    "biletId": 100,
    "text": "Chorrahadan ikkinchi bo’lib qaysi transport vositasi kesib o’tadi?",
    "options": [
      "Yashil avtomobil tramvay bilan bir vaqtda",
      "Yashil avtomobil",
      "Qizil avtomobil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i100_6.webp",
    "explanation": "YHQ 15-bobi 100-bandi: Svetoforning taqiqlovchi qizil yoki sariq ishorasi bilan bir vaqtda yongan qo’shimcha tarmoqning ko’rsatkichli yashil ishorasi yo’nalishida harakatlanayotgan haydovchi boshqa yo’nalishlardan harakatlanayotgan transport vositalariga yo'l berishi kerak."
  },
  {
    "id": 997,
    "biletId": 100,
    "text": "Asosiy yo’l -",
    "options": [
      "Ikki tasmali yo’lga nisbatan uch yoki undan ko’p tasmali yo’l",
      "Tuproqli yoki shag’alli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli va shunga o’xshashlar yotqizilgan) yo’l",
      "Toshli yo’lga nisbatan asfalt qoplamali yo’l",
      "Barcha javoblar to’g’ri"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Asosiy yo’l — tuproqli yoki shag’alli yo'lga nisbatan qattiq qoplamali (asfalt va sement-betonli va shunga o’xshashlar yotqizilgan), kesishayotgan yoki tutashgan yo'lga nisbatan 2.1, 2.3.1— 2.3.3 yoki 5.1 yo’l belgilari bilan belgilangan yoxud yondosh hududdan chiqadigan yo'lga nisbatan har qanday yo'l. Ikkinchi darajali yo'lning bevosita chorrahaga tutash qismining qoplamali bo’lishi uni asosiy yo'l bilan teng huquqli qilmaydi."
  },
  {
    "id": 998,
    "biletId": 100,
    "text": "Old chiroqlar va orqa gabarit chiroqlari ishlayotmagan transport vositasi harakatini davom ettirishi taqiqlanadi:",
    "options": [
      "Faqat kunning qorong’i vaqtida",
      "Faqat yetarli ko’rinmaslikda",
      "Barcha javoblarda ko’rsatilgan holatlarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 12-bandi: Haydovchiga tormoz tizimi, rul boshqaruvi ishlamayotgan, ulagich moslamasi (avtopoyezd tarkibida) nosoz bo'lgan, qorong’i vaqtda yoki yetarlicha ko’rinmaydigan sharoitda — old chiroqlar va orqa gabarit chiroqlari bo’lmagan yoki yonmayotgan, yomg’ir, qor yog'ayotgan vaqtda haydovchi tomonidagi oyna tozalagich ishlamayotgan transport vositalarini boshqarish taqiqlanadi."
  },
  {
    "id": 999,
    "biletId": 100,
    "text": "Qaysi belgi tartibga solinmagan piyodalar o’tish joyiga yaqinlashayotganlik haqida ogohlantiradi?",
    "options": [
      "a",
      "a, b",
      "Hammasi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i100_9.webp",
    "explanation": "YHQ 1 ilova: 1.20. \"Piyodalar o’tish joyi\"."
  },
  {
    "id": 1000,
    "biletId": 100,
    "text": "Yengil avtomobilning tormoz yo’li tormoz tizimiga ega bo’lmagan tirkama bilan harakatlanayotganda qanday o’zgaradi?",
    "options": [
      "Ortadi",
      "Kamayadi, chunki tirkama harakatlanishga qo’shimcha qarshilik ko’rsatadi",
      "O’zgarmaydi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "Avtomobilni tirkama bilan haydash ma’lum bir ko’nikma talab qiladi. Tormoz yo’li ortadi."
  },
  {
    "id": 1001,
    "biletId": 101,
    "text": "Yengil avtomobilning tom qismiga o’rnatilgan yukhonasida yukning balandligi (maxsus moslamalar bilan mustahkamlangan holda velosipedlarni tashish bundan mustasno) necha metrdan oshmasligi kerak?",
    "options": [
      "0.5 metr",
      "1.0 metr",
      "1.2 metr",
      "1.5 metr"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 162-bandi: Yengil avtomobilning tom qismiga o’rnatilgan yukxonasidagi yukning balandligi 1 metrdan (maxsus moslamalar bilan mustahkamlangan holda velosipedlar va individual harakatlanish vositalarini tashish bundan mustasno) va uzunligi avtomobilning gabaritidan 0,5 metrdan oshmasa yukni tashishga ruxsat beriladi."
  },
  {
    "id": 1002,
    "biletId": 101,
    "text": "Quyidagi javoblardan qaysi birida \"Yo’lovchi\" atamasining to’g’ri ta’rifi ko’rsatilgan?",
    "options": [
      "Transport vositasidagi barcha shaxslar",
      "Transport vositasidagi (haydovchidan tashqari) shaxs, shuningdek transport vositasiga kirayotgan(unga chiqib o’tirayotgan) yoki transport vositasidan chiqayotgan(undan tushayotgan) shaxs",
      "Har ikkala ta’rif to’g’ri"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Yo’lovchi — transport vositasidagi (haydovchidan tashqari) shaxs, shuningdek transport vositasiga kirayotgan (unga chiqib o’tirayotgan) yoki transport vositasidan chiqayotgan (undan tushayotgan) shaxs."
  },
  {
    "id": 1003,
    "biletId": 101,
    "text": "Bir yo’nalishda uch va undan ortiq tasmali har qanday yo’lda yuk avtomobillariga chetki chap qatorni egallashga ruxsat etiladi:",
    "options": [
      "Quvib o’tish, chapga burilish va qayrilib olishda",
      "Quvib o’tish va aylanib o’lishda",
      "Chapga burilish va qayrilib olishda",
      "Barcha hollarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 10-bobi 67-bandining uchinchi xatboshisiga asosan: Bir yo’nalishdagi uch va undan ortiq tasmali har qanday yo’lda chetki chap qatorni harakat serqatnovligi sababli boshqa bo’laklar band bo’lgan hollarda, shuningdek, quvib o’tish, chapga burilish yoki qayrilib olishga, yuk avtomobillariga faqat chapga burilish yoki qayrilib olish uchun chetki chap qatorni egallashga ruxsat etiladi."
  },
  {
    "id": 1004,
    "biletId": 101,
    "text": "Odam tashish uchun mo’ljallangan yuk avtomobili yukhonasiga o’rnatilgan o’rindiqlar, yukhona pastki qismidan qancha balandlikda mahkamlangan bo’lishi kerak?",
    "options": [
      "0.3 - 0.5 metr",
      "0.6 - 0.7 metr",
      "0.8 - 0.9 metr"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 153-bandi: Odam tashish uchun mo’ljallangan yuk avtomobili yukxonasining borti 1,3 metrdan kam bo’lmasligi shart. Bunda yukxonaning pastki qismidan 0,3 — 0,5 metr balandlikda mahkamlangan o’rindiqlar jihozlangan bo’lishi kerak."
  },
  {
    "id": 1005,
    "biletId": 101,
    "text": "Oq-qizil (1.14.4 zebra) yo’l chizig’i qanday joylarda piyodalar o’tish joyini belgilash uchun chiziladi?",
    "options": [
      "Piyodalar gavjum bo’lgan joylarda",
      "Savdo, madaniy-maishiy xizmat ko’rsatish binolari oldida",
      "Maktab va maktabgacha ta’lim muassasalari oldida",
      "Barcha javoblar to’g’ri"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2 ilova: 1.14.4 — oq-qizil rangli yo’l chizig’i maktab va maktabgacha ta’lim muassasalari oldida piyodalarning o’tish joyini belgilaydi."
  },
  {
    "id": 1006,
    "biletId": 101,
    "text": "Bu yotiq chiziq bildiradi:",
    "options": [
      "Ko’rsatilgan yo’nalishlarda harakatlanishni taqiqlaydi",
      "Chorrahada tasmalar bo’yicha ruxsat etilgan harakat yo’nalishlarini ko’rsatadi",
      "Harakat barcha yo’nalishlarda ruxsat etilgan yo’llarning kesishmasiga yaqinlashganlikni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i101_6.webp",
    "explanation": "YHQ 2 ilova: 1.18 — chorrahada tasmalar bo’laklar bo’yicha ruxsat etilgan harakatlanish yo’nalishlarini ko’rsatadi."
  },
  {
    "id": 1007,
    "biletId": 101,
    "text": "Kesishayotgan qatnov qismi chetiga qanchadan kam masofa qolganda ta’xtash taqiqlanadi?",
    "options": [
      "40 metr",
      "45 metr",
      "30 metr"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandi: To’xtash taqiqlanadi: Qatnov qismi kesishmalarida va kesishayotgan qatnov qismi chetiga 30 metrdan kam masofada (uch tomonlama kesishadigan chorrahalarda yondan tutashgan yo’lning sidirg’a chiziq yoki ajratuvchi mintaqa bilan ajratilgan qarama-qarshi tomoni bundan mustasno)."
  },
  {
    "id": 1008,
    "biletId": 101,
    "text": "Transport vositalarining qayrilib olish joylarida va unga yetmasdan yoki o’tib qanchadan kam masofada to’xtashi taqiqlanadi?",
    "options": [
      "40 metr",
      "35 metr",
      "30 metr",
      "50 metr"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandi: To’xtash taqiqlanadi: Transport vositalarining qayrilib olish joylarida va unga 30 metr yetmasdan yoki o’tib."
  },
  {
    "id": 1009,
    "biletId": 101,
    "text": "Odam tashish uchun mo’ljallangan yuk avtomobili yuk xonasi bortining balandligi:",
    "options": [
      "0.7 metrdan kam bo’lmasligi kerak",
      "1 metrdan kam bo’lmasligi kerak",
      "1.3 metrdan kam bo’lmasligi kerak",
      "1.5 metrdan kam bo’lmasligi kerak"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 26-bobi 153-bandi: Odam tashish uchun mo’ljallangan yuk avtomobili yukxonasining borti 1,3 metrdan kam bo’lmasligi shart"
  },
  {
    "id": 1010,
    "biletId": 101,
    "text": "Maktab va maktabgacha ta’lim tashkilotlari atrofidagi yo’llarda 300 metrgacha bo’lgan masofada qanday eng yuqori tezlikda harakatlanishga ruxsat etiladi?",
    "options": [
      "20 km/s",
      "30 km/s",
      "50 km/s",
      "60 km/s"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "Aholi punktlarida transport vositalarining tezligini soatiga 70 kilometrdan, maktab va maktabgacha ta’lim tashkilotlari atrofidagi yo’llarda 300 metrgacha bo’lgan masofada 30 kilometrdan, turar joy dahalari va yondosh hududlarda (uy-joy binolari orasidagi yer uchastkasida) esa soatiga 20 kilometrdan oshirmasdan harakatlanishga ruxsat etiladi."
  },
  {
    "id": 1011,
    "biletId": 102,
    "text": "O’zib ketish deb nimaga aytiladi ?",
    "options": [
      "Transport vositasining bir yo’nalishda transport vositasi tezligidan ortiq tezlikda harakatlanishi",
      "Qarama - qarshi yo’nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib,so’ngra ilgari egallagan qatoriga qaytib o’tish bilan bog’liq bo’lgan harakat",
      "Kam tezlik bilan qo’shni qatorda harakatlanayotgan bir yoki bir nechta transport vositasidan o’zib ketish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: O’zib ketish — transport vositasining o’tayotgan transport vositasining tezligidan yuqori tezlikda o’zib ketish."
  },
  {
    "id": 1012,
    "biletId": 102,
    "text": "To’siq deb nimaga aytiladi?",
    "options": [
      "Yo’lning qatnov qismida harakatsiz holda bo’lgan jism",
      "Tirbandlik tufayli qatnov qismida to’xtab turgan transport vositasi",
      "Yo’l harakati xavfsizligiga xavf soluvchi har qanday omil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: To’siq — yo’lning qatnov qismida harakatsiz holda bo’lgan jism (buzilib qolgan transport vositasi, tushib qolgan yuk, yiqilgan daraxt va boshqalar)."
  },
  {
    "id": 1013,
    "biletId": 102,
    "text": "Qayta tizilish deb nimaga aytiladi?",
    "options": [
      "Dastlabki harakat yo’nalishini saqlagan holda o’z harakatlanish tasmasidan boshqa harakatlanish qatoriga o’tish",
      "Qatnov qismining maxsus ajratilgan, 5.35 — 5.37 yo’l belgilari, 1.9 yo’l chizig’i bilan belgilangan va ustida reversiv svetofor o’rnatilgan bo’lagida harakatlanish yo’nalishini qarama-qarshi tomonga o’zgartirish",
      "Xavf tug’ilganda yo’ldagi boshqa harakat qatnashchilarining harakatlanishiga to’sqinlik qilmaslik uchun haydovchilar tomonidan bajariladigan harakat(manyovr)"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Qayta tizilish — dastlabki harakat yo’nalishini saqlagan holda o’z harakatlanish tasmasidan boshqa harakatlanish qatoriga o’tish."
  },
  {
    "id": 1014,
    "biletId": 102,
    "text": "Quyidagi javoblardan qaysi birida \"Xavf\" atamasining to’g’ri ta’rifi ko’rsatilgan?",
    "options": [
      "Yo’l harakati xavfsizligiga xavf soluvchi har qanday omil",
      "Yo’l harakati qatnashchilarining yo’nalishini o’zgartirishga majbur qiladigan har qanday to’siq",
      "Yo’l harakati jarayonidan o’sha yo’nalishda va o’sha tezlikda harakatlanishni davom ettirish yo’l transport hodisasi sodir bo’lishiga tahdid soladigan omil"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar: Xavf — yo’l harakati xavfsizligiga xavf soluvchi har qanday omil."
  },
  {
    "id": 1015,
    "biletId": 102,
    "text": "Yengil avtomobilning tom qismiga o’rnatilgan yukxonasida yuk tashishda, yukning uzunligi avtomobilning gabaritidan necha metrdan oshmasa tashishga yo’l qo’yiladi?",
    "options": [
      "2 metr",
      "1 metr",
      "1.2 metr",
      "0.5 metr"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 27-bobi 162-bandi: Yengil avtomobilning tom qismiga o’rnatilgan yukxonasidagi yukning balandligi 1 metrdan (maxsus moslamalar bilan mustahkamlangan holda velosipedlar va individual harakatlanish vositalarini tashish bundan mustasno) va uzunligi avtomobilning gabaritidan 0,5 metrdan oshmasa yukni tashishga ruxsat beriladi."
  },
  {
    "id": 1016,
    "biletId": 102,
    "text": "Piyodalar o’tish joyiga qancha masofa yetmasdan to’xtash va to’xtab turishga ruxsat beriladi?",
    "options": [
      "3 metr",
      "5 metr",
      "10 metr"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandi: To’xtash taqiqlanadi: Piyodalar o’tish joylarida va ulardan oldin 10 metrdan kam masofa qolganda."
  },
  {
    "id": 1017,
    "biletId": 102,
    "text": "Bekat maydonchalaridan harakatlanish yo’nalishi bo’ylab qanchadan kam masofada (yetmasdan va o’tib ketib) to’xtash va to’xtab turish taqiqlanadi?",
    "options": [
      "25 metr",
      "30 metr",
      "15 metr",
      "20 metr"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandi: To’xtash taqiqlanadi: Bekat maydonchalarida, yo’nalishli transport vositalari to’xtash joylarida, jumladan, 1.17 chizig’i bilan belgilangan, ular bo’lmaganda esa yo’nalishli transport vositalari to’xtash joyi belgilari va bekatdan harakatlanish yo’nalishi bo’ylab (etmasdan va o’tib ketib) 15 metrdan kam masofada (yo’nalishli transport vositalari harakatiga xalaqit bermasa yo’lovchilarni chiqarish yoki tushirish uchun to’xtash bundan mustasno)."
  },
  {
    "id": 1018,
    "biletId": 102,
    "text": "Ko’rsatilgan joyda to’xtashga ruxsat etiladimi ?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i102_8.webp",
    "explanation": "YHQ 2-ilovasi 1-bo’limining oltinchi xatboshisiga asosan: 1.4 — to’xtash taqiqlangan joyni bildiradi. Yakka holda yoki 3.27 \"To’xtash taqiqlangan\" yo’l belgisi bilan qo’llaniladi hamda yo’lning qatnov qismi chetiga yoki yo’l chetidagi to’siq ustidan chiziladi."
  },
  {
    "id": 1019,
    "biletId": 102,
    "text": "Mazkur yo’l belgisi:",
    "options": [
      "Doimiy belgi hisoblanadi",
      "Vaqtinchalik belgi hisoblanadi",
      "Mavsumiy belgi hisoblanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i102_9.webp",
    "explanation": "Vaqtincha (ko’chma tirgakdagi) va doimiy belgilar ma’no jihatidan bir-biriga zid kelgan hollarda haydovchilar vaqtincha o’rnatilgan belgilarga amal qilishlari kerak. 1,8 1.15, 1.16, 1.31, 1.17, 1.18.1 — 1.18.3, 1.21, 1.30, 2.6, 2.7, 3.1, 3.2, 3.11 — 3.16, 3.18.1 — 3.18.25 yo’l belgilari vaqtincha yo’l belgilari sifatida belgilanishi mumkin. Vaqtincha yo’l belgilari sariq rangda bo’ladi."
  },
  {
    "id": 1020,
    "biletId": 102,
    "text": "Qoidalarga ko’ra shatakka olish vaqtida bir-biriga ulangan transport vositalari tarkibining qanday umumiy uzunligiga yo’l qo’yiladi?",
    "options": [
      "20 m",
      "21 m",
      "22 m",
      "23 m",
      "24 m"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 24-bobi 145-bandi: Shatakka olish quyidagi holatlarda taqiqlanadi: Shatakka olingan va shatakka olgan transport vositalarining ulagich bilan birga umumiy uzunligi 20 metrdan ortiq bo’lsa."
  },
  {
    "id": 1021,
    "biletId": 103,
    "text": "Mazkur yo’l belgisi:",
    "options": [
      "Doimiy belgi hisoblanadi",
      "Vaqtinchalik belgi hisoblanadi",
      "Mavsumiy belgi hisoblanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_1.webp",
    "explanation": "YHQ 1 ilova: Vaqtincha (ko’chma tirgakdagi) va doimiy belgilar ma’no jihatidan bir-biriga zid kelgan hollarda haydovchilar vaqtincha o’rnatilgan belgilarga amal qilishlari kerak. 1,8 1.15, 1.16, 1.31, 1.17, 1.18.1 — 1.18.3, 1.21, 1.30, 2.6, 2.7, 3.1, 3.2, 3.11 — 3.16, 3.18.1 — 3.18.25 yo’l belgilari vaqtincha yo’l belgilari sifatida belgilanishi mumkin. Vaqtincha yo’l belgilari sariq rangda bo’ladi."
  },
  {
    "id": 1022,
    "biletId": 103,
    "text": "Ushbu yo’l belgisi qanday nomlanadi:",
    "options": [
      "Bir izli temir yo’l kesishmasi",
      "Temir yo’l kesishmasiga yaqinlashuv",
      "Shlagbaumli temir yo’l kesishmasi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_2.webp",
    "explanation": "YHQ 1 ilova: 1.4.1 — 1.4.6. “Temir yo’l kesishmasiga yaqinlashuv”.\nAholi punktlaridan tashqarida temir yo’l kesishmasiga yaqinlashayotganlik haqida qo’shimcha ogohlantirish beradi."
  },
  {
    "id": 1023,
    "biletId": 103,
    "text": "Ushbu belgilaridan qaysilari vaqtinchalik yo’l belgilari hisoblanadi:",
    "options": [
      "\"1\" va \"4\"",
      "\"2\" va \"3\"",
      "\"З\" va \"4\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_3.webp",
    "explanation": "YHQ 1 ilova: Vaqtincha (ko’chma tirgakdagi) va doimiy belgilar ma’no jihatidan bir-biriga zid kelgan hollarda haydovchilar vaqtincha o’rnatilgan belgilarga amal qilishlari kerak. 1,8 1.15, 1.16, 1.31, 1.17, 1.18.1 — 1.18.3, 1.21, 1.30, 2.6, 2.7, 3.1, 3.2, 3.11 — 3.16, 3.18.1 — 3.18.25 yo’l belgilari vaqtincha yo’l belgilari sifatida belgilanishi mumkin. Vaqtincha yo’l belgilari sariq rangda bo’ladi."
  },
  {
    "id": 1024,
    "biletId": 103,
    "text": "Qanday hollarda quvib o’tish taqiqlanadi?",
    "options": [
      "Tartibga solingan chorrahalarda",
      "Tepalikning oxirida va yo’lning ko’rinishi cheklangan joylarda",
      "Tartibga solinmagan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 12-bobi 86-bandi: Quvib o’tish quyidagi hollarda taqiqlanadi: tartibga solingan chorrahalarda;\ntartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;\nko’priklarda, yo'l o’tkazgichlarda, estakadalarda va ularning ostida;\npiyodalar o’tish joylarida;\ntemir yo'l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda;\nquvib yoki aylanib o'tayotgan transport vositalarini;\ntepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;\n3.20 va 3.22 yo’l belgilari ta’sir oralig’ida."
  },
  {
    "id": 1025,
    "biletId": 103,
    "text": "Quyidagi shaxslarga xavfsizlik kamarini (kanstruksiyasida xavfsizlik kamari nazarda tutilgan transport vositalarida)taqmaslikga ruxsat beriladi:",
    "options": [
      "Avtomobilning orqa o’rindiqdagi 12 yoshgacha bo’lgan bolalarga",
      "Homilador ayollarga",
      "Orqaga harakatni amalga oshiryotgan haydovchilarga",
      "F1 va F2 javoblar to’g’ri",
      "Sanab o’tilgan barcha hollarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 2-bobi 9-bandi: Quyidagi shaxslarga xavfsizlik kamarini taqmaslikka ruxsat beriladi:\navtomobilning orqa o’rindig’idagi 12 yoshgacha bo’lgan bolalar (ushbu Qoidalarning 159-bandiga muvofiq);\nhomilador ayollar, salomatligi xavfsizlik kamari taqish imkonini bermaydigan bemorlar (Sog’liqni saqlash vazirligi tomonidan belgilangan kasalliklar ro’yxatiga muvofiq va ushbu kasalliklar bilan kasallanganligi bo’yicha tibbiy ma’lumotnoma mavjud bo’lganda);"
  },
  {
    "id": 1026,
    "biletId": 103,
    "text": "Bu belgilardan qaysi biri maktab va maktabgacha ta’lim tashkilotlari oldida o’rnatiladi?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_6.webp",
    "explanation": "YHQ 1 ilova: 5.46 “Maktab”. Maktab yoki maktabgacha ta’lim tashkilotlari oldida o’rnatiladi."
  },
  {
    "id": 1027,
    "biletId": 103,
    "text": "Velosipedlarda yuk tashilganda gabaritidan bo’yiga va eniga qanchadan ortiq chiqib tursa, yuk tashish taqiqlanadi?",
    "options": [
      "0.3 m",
      "0.4 m",
      "0.5 m",
      "1 m"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 168-bandi: Velosipedchilar va individual harakatlanish vositalarini boshqarayotgan shaxslarga quyidagilar taqiqlanadi:\nrulni ushlamasdan yoki bir qo’lda ushlab harakatlanish (manyovrdan oldin ishoralar berish bundan mustasno);\nodam tashish (ishonchli oyoq qo’ygich bilan jihozlangan velosipeddagi qo’shimcha o’rindiqda 7 yoshgacha bo’lgan bolani tashish bundan mustasno);\ngabaritidan bo’yiga va eniga 0,5 metrdan ortiq chiqib turgan yoki boshqarishga xalaqit beradigan yuklarni tashish;"
  },
  {
    "id": 1028,
    "biletId": 103,
    "text": "Qaysi yo’nalish bo’yicha harakatlanishga ruxsat beriladi?",
    "options": [
      "\"A\" \"Б\" \"В\"",
      "\"A\" \"Б\" \"Г\"",
      "\"Г\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_8.webp",
    "explanation": "YHQ 7-bobi 32-bandi: Yo’naltirgich ko’rinishidagi qizil, sariq va yashil rangli svetofor ishoralari ham doirasimon shaklidagi svetofor ishoralari bilan bir xil ma’noga ega bo’ladi. Ular faqat ko’rsatilgan yo’nalishga ta’sir etadi.\nAgar tegishli yo’l belgisi bilan qayrilib olish taqiqlanmagan bo’lsa, chapga burilishga ruxsat beruvchi yo’naltirgich qayrilib olishga ham ruxsat beradi. Qo’shimcha tarmoqdagi yashil yo’naltirgich ham xuddi shu ma’noni bildiradi.\nSvetoforning qo’shimcha tarmoqdagi ishora o’chirilgan bo’lsa, shu tarmoq tartibga solayotgan yo’nalishda harakatlanish taqiqlanganligini bildiradi.\nYHQ 1 ilova: 3.18.2. “Chapga burilish taqiqlanadi”."
  },
  {
    "id": 1029,
    "biletId": 103,
    "text": "Chorrahadan chapga burilmoqchisiz, sizning harakatingiz:",
    "options": [
      "Chorrahadan birinchi o’tish",
      "\"Т\" simon svetoforning ruxsat beradigan ishorasini kutish va tramvayga yo’l berib chapga chiqish",
      "Tramvayga yo’l berish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_9.webp",
    "explanation": "YHQ 7-bobi 36-bandi: Tramvaylarning hamda maxsus ajratilgan tasma bo’ylab harakatlanayotgan boshqa yo’nalishli transport vositalarining harakatlanishini tartibga solish uchun “T” harfi ko’rinishida joylashgan to’rtta doirasimon oq rang ishorali svetoforlar qo’llanilishi mumkin.\nYuqoridagi bir yoki bir nechta va pastki ishora bir vaqtning o’zida yonganda, harakatlanishga ruxsat etiladi. Ulardan chapdagisi chapga, o’ngdagisi o’ngga, o’rtadagisi to’g’riga yurishga ruxsat beradi. Pastdagi ishora o’chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi.\nYengil avtomobl chorrahadan birinchi o’tadi."
  },
  {
    "id": 1030,
    "biletId": 103,
    "text": "Mayoqchasi yoqilgan transport vositasiga harakatni to’g’riga davom ettirishga ruxsat beriladimi?",
    "options": [
      "Ruxsat beriladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i103_10.webp",
    "explanation": "YHQ 6-bobi 25-bandi: Yo’l harakatining boshqa ishtirokchilariga nisbatan imtiyozga ega bo’lishi uchun tezkor va maxsus xizmatlarning transport vositalarida, tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishora yoqilgan bo’lishi shart. Ular o’zlariga yo’l berilayotganligiga ishonch hosil qilganlaridan so’nggina imtiyozdan foydalanishlari mumkin."
  },
  {
    "id": 1031,
    "biletId": 104,
    "text": "Ushbu holatda tramvayning old qismidan yo’lni kesib o’tishga ruxsat beriladimi?",
    "options": [
      "Ruxsat beriladi",
      "Taqiqlanadi",
      "Istalgan tomonidan ruxsat beriladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_1.webp",
    "explanation": "YHQ 4-bobi 19-bandi: Piyodalar to’xtab turgan avtobus va trolleybusning orqa tomonidan, tramvayning esa oldi tomonidan yo’lni kesib o’tishlari shart."
  },
  {
    "id": 1032,
    "biletId": 104,
    "text": "Ushbu belgi o’rnatiladi:",
    "options": [
      "Bozorlar oldindan",
      "Maktab va bolalarning dam olish maskanlari oldindan",
      "Vokzal oldindan"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_2.webp",
    "explanation": "YHQ 1 ilova: 1.21. “Bolalar”. Bolalar muassasasi (maktablar, bolalarning dam olish maskanlari va shunga o’xshashlar)ga yaqin yo’lning qatnov qismidan bolalarning chiqib qolish ehtimolini bildiradi."
  },
  {
    "id": 1033,
    "biletId": 104,
    "text": "Bir vaqtda qayrilib olishda qaysi transport vositasi yo’l berishi kerak?",
    "options": [
      "Avtobus haydovchisi",
      "Yengil avtomobil haydovchisi",
      "Bunday vaziyatda haydovchilar o’zaro kelishadilar"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_3.webp",
    "explanation": "YHQ 9-bobi 60-bandi: Transport vositalarining harakatlanish yo’nalishlari kesishganda va o’tish navbati Qoidalarda nazarda tutilmagan hollarda, haydovchi o’ng tomondan yaqinlashayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 1034,
    "biletId": 104,
    "text": "Qaysi transport vositasi haydovchisi qoida buzib harakatlanmoqda?",
    "options": [
      "Ruxsat etilgan to’la vazni 3 tonna bo’lgan yuk avtomobili va moped haydovchisi",
      "Faqat moped haydovchisi",
      "Hech kim qoida buzmayabdi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_4.webp",
    "explanation": "YHQ 19-bobi 121-bandi: Avtomagistrallarda quyidagilar taqiqlanadi:\npiyodalar, uy hayvonlari, ot-aravalar, velosipedlar, individual harakatlanish vositalari, skuterlar, mopedlar, traktorlar va o’ziyurar uskunalar, texnik tavsifnomasiga yoki holatiga ko’ra tezligi soatiga 40 kilometrdan kam bo’lgan transport vositalarining harakatlanishi;\nyuk avtomobillariga yo’lning chetki chap qatorida harakatlanishi;"
  },
  {
    "id": 1035,
    "biletId": 104,
    "text": "To’xtab turish joyidan chiqayotganda boshqa transport vositasi bilan yo’llaringiz kesishganda qanday harakat qilishingiz kerak?",
    "options": [
      "Yo’l berish",
      "Birinchi o’tish",
      "O’zaro kelishuvga binoan harakatlanish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_5.webp",
    "explanation": "YHQ 9-bobi 60-bandi: Transport vositalarining harakatlanish yo’nalishlari kesishganda va o’tish navbati Qoidalarda nazarda tutilmagan hollarda, haydovchi o’ng tomondan yaqinlashayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 1036,
    "biletId": 104,
    "text": "Qaysi yotiq yo’l chizig’i maktablar oldidagi piyodalar o’tish joylarida qo’llaniladi?",
    "options": [
      "1-chiziq",
      "2-chiziq",
      "3-chiziq"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_6.webp",
    "explanation": "YHQ 2 ilova: 1.14.4 — oq-qizil rangli yo’l chizig’i maktab va maktabgacha ta’lim muassasalari oldida piyodalarning o’tish joyini belgilaydi."
  },
  {
    "id": 1037,
    "biletId": 104,
    "text": "Qaysi belgi \"Avtomobillar uchun mo’ljallangan yo’l\" deb nomlanadi?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_7.webp",
    "explanation": "YHQ 1 ilova: 5.3. “Avtomobillar uchun mo’ljallangan yo’l”. Faqat avtomobillar, avtobus hamda mototsikllar, elektromototsiklar, mopedlar va skuterlarning harakatlanishi uchun mo’ljallangan yo’lni bildiradi."
  },
  {
    "id": 1038,
    "biletId": 104,
    "text": "Mototsikl haydovchisi qoidani buzayaptimi?",
    "options": [
      "Ha",
      "Yoq"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_8.webp",
    "explanation": "YHQ 12-bobi 86-bandi: Quvib o’tish quyidagi hollarda taqiqlanadi: tepalikning OXIRIDA va yo’lning ko’rinishi cheklangan joylarida;\nQoidani buzmadi sababi Mototsiklchi tepalikning oxirida emas."
  },
  {
    "id": 1039,
    "biletId": 104,
    "text": "Belgilardan qaysi biri qatnov qismi kesishmasi hududini bildiradi?",
    "options": [
      "\"A\"",
      "\"Б\"",
      "\"В\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_9.webp",
    "explanation": "YHQ 1 ilova: 1.33. “Qatnov qismi kesishmasi hududi”.\n1.30 yotiq chizig’i bilan belgilangan chorrahaga yaqinlashayotganligini anglatib, oldinda tirbandlik yuzaga kelganligi tufayli majburiy to’xtab, ko’ndalang yo’nalishdagi transport vositalarining harakatlanishiga to’sqinlik tug’diradigan bo’lsa, chorrahaga kirish, agar to’xtash chizig’i yoki 5.33 yo’l belgisidan o’tib bo’lgan haydovchiga esa qatnov qismlari kesishmasiga kirishni taqiqlanishini bildiradi."
  },
  {
    "id": 1040,
    "biletId": 104,
    "text": "Bu belgi o’rnatilgan joyda tirkamali yengil avtomobilni harakatlanishga ruxsat beriladimi?",
    "options": [
      "Ruxsat beriladi agar tirkamaning vazni 750kg dan oshmasa",
      "Ruxsat beriladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i104_10.webp",
    "explanation": "YHQ 1 ilova: 3.7. “Tirkama bilan harakatlanish taqiqlangan”. YUK avtomobillari va traktorlarning barcha turdagi tirkamalar bilan harakatlanishi, shuningdek, mexanik transport vositalarini shatakka olish taqiqlanadi."
  },
  {
    "id": 1041,
    "biletId": 105,
    "text": "Ushbu yo’l belgisi qanday nomlanadi?",
    "options": [
      "Tik nishablik",
      "Tik balandlik"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_1.webp",
    "explanation": "YHQ 1 ilova: 1.13 Tik nishablik"
  },
  {
    "id": 1042,
    "biletId": 105,
    "text": "Bu yo’l belgisi qanday nomlanadi?",
    "options": [
      "Piyodalarning yo’l yoqasidan yurishi mumkin bo’lgan hudud",
      "Piyodalarning qatnov qismidan yurishi mumkin bo’lgan hudud",
      "Piyodalarning trotuardan yurishi mumkin bo’lgan hudud"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_2.webp",
    "explanation": "YHQ 1 ilova: 1.35 “Piyodalarning yo’l yoqasidan yurishi mumkin bo’lgan hudud”"
  },
  {
    "id": 1043,
    "biletId": 105,
    "text": "Belgilardan qaysi biri er usti avtomobil quyish joyini bildiradi?",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_3.webp",
    "explanation": "YHQ 1 ilova: 5.15.2 Yer usti avtomobil qo’yish joyi."
  },
  {
    "id": 1044,
    "biletId": 105,
    "text": "Quyidagi belgilardan qaysi biri yengil avtomobillar harakati deb nomlanadi?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_4.webp",
    "explanation": "YHQ 1 ilova: 4.4. “Yengil avtomobillar harakati”. Yengil avtomobillar, avtobus, mototsikllar, mopedlar, skuterlar, belgilangan yo’nalishli transport vositalari va ruxsat etilgan to’liq vazni 3,5 tonnadan oshmaydigan yuk avtomobillari harakatlanishiga ruxsat etilishini bildiradi.\nBelgining ta’sir oralig’ida yashovchi va ishlovchi fuqarolarga tegishli, ularga va korxonalarga xizmat ko’rsatuvchi transport vositalariga bu belgi tatbiq etilmaydi. Bunday hollarda transport vositalari belgilangan joyga eng yaqin chorrahadan kirib yoki chiqib ketishlari kerak."
  },
  {
    "id": 1045,
    "biletId": 105,
    "text": "Ko’rsatilgan belgilardan qaysi biri bolalar deb nomlanadi?",
    "options": [
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_5.webp",
    "explanation": "YHQ 1 ilova: 1.21. “Bolalar”. Bolalar muassasasi (maktablar, bolalarning dam olish maskanlari va shunga o’xshashlar)ga yaqin yo’lning qatnov qismidan bolalarning chiqib qolish ehtimolini bildiradi."
  },
  {
    "id": 1046,
    "biletId": 105,
    "text": "Qaysi yo’nalishda harakatlanish taqiqlanadi?",
    "options": [
      "Faqat chapga",
      "O’nga, chapga va orqaga qayrilib olishga",
      "Chapga va orqaga qayrilib olishga",
      "Faqat to’riga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_6.webp",
    "explanation": "YHQ 1 ilova: 4.1.6. “Harakatlanish o’ngga yoki chapga”.\nFaqat belgilarda ko’rsatilgan ko’rsatkichlar yo’nalishlarida harakatlanishga ruxsat etiladi. Chapga burilishga ruxsat beruvchi belgilar qayrilib olishga ham ruxsat beradi. (Muayyan kesishmada talab etilgan harakatlanish yo’nalishiga tegishli ko’rsatkichlarning shakli tushirilgan 4.1.1 — 4.1.6 belgilarini qo’llash mumkin).\n4.1.1 — 4.1.6 belgilarining ta’siri yo’nalishli transport vositalariga joriy qilinmaydi.\n4.1.1 — 4.1.6 yo’l belgilari qatnov qismlarining qaysi kesishmasidan oldin o’rnatilsa, belgining ta’siri shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1047,
    "biletId": 105,
    "text": "Yovvoyi hayvonlar belgisini ko’rsating:",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "2 va 4"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_7.webp",
    "explanation": "YHQ 1 ilova: 1.25.1. “Yovvoyi hayvonlar”."
  },
  {
    "id": 1048,
    "biletId": 105,
    "text": "Qaysi rasmda piyoda(lar) yo’lni qoidani buzgan holda kesib o’tmoqda?",
    "options": [
      "Uchinchi va to’rtinchi rasmlarda",
      "Ikkinchi va uchinchi rasmlarda",
      "Ikkinchi rasmda",
      "Uchinchi rasmda",
      "Ikkinchi, uchinchi va to’rtinchi rasmlarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_8.webp",
    "explanation": "YHQ 4-bobi 17-bandi: Piyodalar yo’lning qatnov qismini piyodalar o’tish joylaridan, shuningdek, yer osti va yer usti o’tish joylaridan, ular bo’lmaganda esa chorrahalarda trotuar chiziqlari yoki yo’l yoqasi bo’ylab kesib o’tishlari kerak.\nPiyodalarga ko’rinadigan oraliqda o’tish joyi yoki chorraha bo’lmasa, ajratuvchi mintaqasiz va to’siqsiz yo’llardan yo’lning ikki tomoni yaxshi ko’rinadigan joyidan, qatnov qismining chetiga nisbatan to’g’ri burchak ostida kesib o’tish ruxsat etiladi."
  },
  {
    "id": 1049,
    "biletId": 105,
    "text": "Quyidagi ta’rif “transport vositasi harakatini 10 daqiqagacha bo’lgan muddatga to’xtatish (harakatsiz holatga keltirish)“ qaysi atamaga tegishli?",
    "options": [
      "To’xtash",
      "Majburiy to’xtash",
      "Yo’l berish",
      "To’xtab turish"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar 6-bandi: to’xtash — transport vositasi harakatini 10 daqiqagacha bo’lgan muddatga to’xtatish (harakatsiz holatga keltirish);"
  },
  {
    "id": 1050,
    "biletId": 105,
    "text": "Qaysi avtomobil haydovchisi yo’l berishi kerak?",
    "options": [
      "Ko’k avtomobil haydovchisi",
      "Yashil avtomobil haydovchisi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i105_10.webp",
    "explanation": "YHQ 1 ilova: 5.38. “Turar joy dahasi”. Yo’l harakati qoidalarining turar joy dahalarida harakatlanish tartibi o’rnatilgan yo’l.\nYHQ 9-bobi 60-bandi: Transport vositalarining harakatlanish yo’nalishlari kesishganda va o’tish navbati Qoidalarda nazarda tutilmagan hollarda, haydovchi o’ng tomondan yaqinlashayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 1051,
    "biletId": 106,
    "text": "Qaysi rasmda piyodalar qatnav qismida qoidani buzmay harakatlanmoqda?",
    "options": [
      "Chapdagi rasmda",
      "O’ngdagi rasmda",
      "Ikkala rasmda"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_1.webp",
    "explanation": "YHQ 4-bobi 15-bandi: Qatnov qismi chetida harakatlanayotgan piyodalar transport vositalarining harakatlanishiga qarama-qarshi yo’nalishda yurishlari kerak. Nogironlarning dvigatelsiz aravachasida harakatlanayotgan, mototsikl, elektromototsikl, moped, skuter, velosiped va individual harakatlanish vositalarini yetaklab ketayotgan shaxslar esa bunday hollarda transport vositalarining harakatlanish yo’nalishi bo’ylab yurishlari kerak."
  },
  {
    "id": 1052,
    "biletId": 106,
    "text": "Bu belgi nimani bildiradi?",
    "options": [
      "Oldinda tirbandlik borligini",
      "Navbat bilan o’tishni",
      "Tuxtab turish joyiga borishni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_2.webp",
    "explanation": "YHQ 1 ilova: 7.23. “Navbat bilan o’tish”."
  },
  {
    "id": 1053,
    "biletId": 106,
    "text": "Agar haydovchi o’zi harakatlanayotgan yo’lning qoplamasini bor - yo’qligini aniqlay olmasa (qorong’i vaqt, loy, qor) va imtiyoz belgilari bo’lmasa ?",
    "options": [
      "O’zini asosiy yo’lda deb hisoblashi kerak",
      "O’zini ikkinchi darajali yo’lda deb hisoblashi kerak",
      "Teng ahamyatli yo’llar kesishgan chorrahada deb hisoblashi kerak"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 16-bobi 108-bandi: Agar haydovchi o’zi harakatlanayotgan yo’lning qoplamasi bor-yo’qligini aniqlay olmasa (qorong’i vaqt, loy, qor va boshqalar) va imtiyoz belgilari bo’lmasa, unda u o’zini ikkinchi darajali yo’lda deb hisoblashi kerak."
  },
  {
    "id": 1054,
    "biletId": 106,
    "text": "Qaysi haydovchi belgi talabini buzmay to’xtadi?",
    "options": [
      "Yengil avtomobil",
      "Yuk avtomobil",
      "Har ikkisi ham buzmadi",
      "Har ikkisi buzdi"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_4.webp",
    "explanation": "YHQ 1 ilova: 2.5. “To’xtamasdan harakatlanish taqiqlangan”. To’xtash chizig’i oldida, agar u bo’lmasa, kesib o’tiladigan qatnov qismining chetida to’xtamasdan harakatlanish taqiqlanadi. Haydovchi kesib o’tilayotgan yo’ldan, 7.13 qo’shimcha-axborot belgisi bo’lganda esa asosiy yo’ldan harakatlanayotgan transport vositalariga yo’l berishi kerak.\nBu belgi temir yo’l kesishmasi yoki karantin maskanidan oldin o’rnatilishi mumkin. Bunday hollarda haydovchi to’xtash chizig’i oldida, u bo’lmasa, belgi oldida to’xtashi kerak."
  },
  {
    "id": 1055,
    "biletId": 106,
    "text": "Ogohlantiruvchi belgilarni toping",
    "options": [
      "Hammasi",
      "1,2,4,5",
      "4,5"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_5.webp",
    "explanation": "YHQ 1 ilova: 1.19. “Ikki tomonlama harakatlanish”. Yo’lning (qatnov qismining) qarama-qarshi harakatlanish qismi boshlanishini bildiradi.\nYHQ 1 ilova: 1.6. “Teng ahamiyatli yo’llar kesishuvi”."
  },
  {
    "id": 1056,
    "biletId": 106,
    "text": "Harakatlanish qaysi yo’nalishga ruxsat etilgan?",
    "options": [
      "Harakatlanish taqiqlanadi",
      "Faqat to’g’riga",
      "Faqat to’g’riga va o’ngga",
      "Barcha yo’nalishda ruxsat etiladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_6.webp",
    "explanation": "YHQ 7-bobi 36-bandi: Tramvaylarning hamda maxsus ajratilgan tasma bo’ylab harakatlanayotgan boshqa yo’nalishli transport vositalarining harakatlanishini tartibga solish uchun “T” harfi ko’rinishida joylashgan to’rtta doirasimon oq rang ishorali svetoforlar qo’llanilishi mumkin.\nYuqoridagi bir yoki bir nechta va pastki ishora bir vaqtning o’zida yonganda, harakatlanishga ruxsat etiladi. Ulardan chapdagisi chapga, o’ngdagisi o’ngga, o’rtadagisi to’g’riga yurishga ruxsat beradi. Pastdagi ishora o’chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi."
  },
  {
    "id": 1057,
    "biletId": 106,
    "text": "Bu taniqlik belgisi o’rnatiladi:",
    "options": [
      "Vaqtinchalik ta’mirlash ishlari olib borilayotgan yo’l qismlariga",
      "Portlovchi va tez alangalanuvchi yukni tashiyotgan transport vositalariga",
      "Haydovchi staji 2 yildan kam bo’lgan haydovchilar boshqarayotgan mexanik transport vositalariga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_7.webp",
    "explanation": "YHQ 29-bobi 176-bandi: “Haydovchilikni endi boshlagan” — “Haydovchilik malakasi yetarli bo’lmagan” haydovchilik staji 2 yildan kam bo’lgan haydovchilar boshqarayotgan mexanik transport vositalarining (traktorlar, o’ziyurar mashinalar mototsikl, elektromototsikllar, mopedlar va skuterlardan tashqari) orqasida — ichiga qora rangli 110 millimetr balandlikdagi “!” belgisining tasviri tushirilgan, sariq rangli, tomonlari 150 millimetr bo’lgan kvadrat ko’rinishidagi belgi."
  },
  {
    "id": 1058,
    "biletId": 106,
    "text": "Qoidalarda nechta asosiy tushuncha va atamalardan foydalaniladi?",
    "options": [
      "65 ta",
      "56 ta",
      "76 ta"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ umumiy qoidalar 6-bandi: avariya holatini yuzaga keltirish, avtomagistral, avtopoyezd va boshqalar (umumiy 76 ta)."
  },
  {
    "id": 1059,
    "biletId": 106,
    "text": "Ushbu vaziyatda qaysi transport vositasining haydovchisi yo’l berishi kerak?",
    "options": [
      "Oq avtomobil haydovchisi",
      "Qizil avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_9.webp",
    "explanation": "YHQ 9-bobi 60-bandi: Transport vositalarining harakatlanish yo’nalishlari kesishganda va o’tish navbati Qoidalarda nazarda tutilmagan hollarda, haydovchi o’ng tomondan yaqinlashayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 1060,
    "biletId": 106,
    "text": "Ushbu vaziyatda kim yo’l berishi kerak?",
    "options": [
      "Mikroavtobus haydovchisi",
      "Yengil avtomobil haydovchisi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i106_10.webp",
    "explanation": "YHQ 9-bobi 60-bandi: Transport vositalarining harakatlanish yo’nalishlari kesishganda va o’tish navbati Qoidalarda nazarda tutilmagan hollarda, haydovchi o’ng tomondan yaqinlashayotgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 1061,
    "biletId": 107,
    "text": "Ushbu svetofor tramvayga qaysi yo’nalishda harakatlanishga ruxsat beradi?",
    "options": [
      "Faqat to’g’riga",
      "Barcha yo’nalishlarga",
      "Barcha yo’nalishlarda harakatlanish taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_1.webp",
    "explanation": "YHQ 7-bobi 36-bandi: Tramvaylarning hamda maxsus ajratilgan tasma bo’ylab harakatlanayotgan boshqa yo’nalishli transport vositalarining harakatlanishini tartibga solish uchun “T” harfi ko’rinishida joylashgan to’rtta doirasimon oq rang ishorali svetoforlar qo’llanilishi mumkin.\nYuqoridagi bir yoki bir nechta va pastki ishora bir vaqtning o’zida yonganda, harakatlanishga ruxsat etiladi. Ulardan chapdagisi chapga, o’ngdagisi o’ngga, o’rtadagisi to’g’riga yurishga ruxsat beradi. Pastdagi ishora o’chirilib, yuqoridagi uchta ishora bir vaqtda yonsa, harakatlanish taqiqlanadi."
  },
  {
    "id": 1062,
    "biletId": 107,
    "text": "Tramvay reelssiz transport vositalariga nisbatan imtiyozga ega bo'lmagan holat:",
    "options": [
      "Depodan chiqishda",
      "Depoga kirishda",
      "Har ikkisida imtiyozga ega",
      "Har ikkisida imtiyozga ega emas"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 22-bobi 131-bandi: Tramvay yo’llari chorrahadan tashqarida qatnov qismini kesib o’tadigan joylarda tramvay relssiz transport vositalariga nisbatan imtiyozga ega bo’ladi (depodan chiqish joylari bundan mustasno)."
  },
  {
    "id": 1063,
    "biletId": 107,
    "text": "Bunday vaziyatda siz:",
    "options": [
      "Birinchi o’tish huquuqiga egaman",
      "Ro’paradan kelayotgan avtomobilga yo’l beraman"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_3.webp",
    "explanation": "YHQ 1 ilova: 2.6. “Ro’para harakatlanishning ustunligi”. Qarama-qarshi harakatlanishni qiyinlashtiradigan hollarda yo’lning tor qismiga kirish taqiqlanadi. Haydovchi yo’lning tor qismida bo’lgan yoki ro’paradan unga yaqin bo’lgan transport vositasiga yo’l berishi kerak."
  },
  {
    "id": 1064,
    "biletId": 107,
    "text": "Chorrahadan qaysi yo’nalishda harakatlanishingizga ruxsat berilgan?",
    "options": [
      "Faqat to’g’riga",
      "To’g’riga va o’ngga",
      "Faqat o’ngga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_4.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. “Harakatlanish to’g’riga”.\nFaqat belgilarda ko’rsatilgan ko’rsatkichlar yo’nalishlarida harakatlanishga ruxsat etiladi. Chapga burilishga ruxsat beruvchi belgilar qayrilib olishga ham ruxsat beradi. (Muayyan kesishmada talab etilgan harakatlanish yo’nalishiga tegishli ko’rsatkichlarning shakli tushirilgan 4.1.1 — 4.1.6 belgilarini qo’llash mumkin)."
  },
  {
    "id": 1065,
    "biletId": 107,
    "text": "Ushbu belgi qanday nomlanadi?",
    "options": [
      "Suniy notekislik",
      "Majburiy sekinlanish",
      "Baland piyodalar o'tish joyi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_5.webp",
    "explanation": "YHQ 1 ilova: 5.48. “Baland piyodalar o’tish joyi”. 5.16.1-5.16.2 yo’l belgilari bilan birga qo’llaniladi."
  },
  {
    "id": 1066,
    "biletId": 107,
    "text": "Qaysi yotiq yo’l chizig’i avtomobil yo’llarida 3D ko’rinishidagi piyodalar o’tish joyini bildiradi?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\""
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_6.webp",
    "explanation": "YHQ 2 ilova: 1.29.3-avtomobil yo’llarida “3D” ko’rinishdagi piyodalar o’tish joyi."
  },
  {
    "id": 1067,
    "biletId": 107,
    "text": "Qaysi yotiq yo’l chizig’i avtomobil yo’llarida 3D ko’rinishidagi baland piyodalar o’tish joyini bildiradi?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\""
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_7.webp",
    "explanation": "YHQ 2 ilova: 1.29.2-sun’iy notekislik (avtomobil yo’llarida “3D” ko’rinishdagi BALAND piyodalar o’tish joyini bildiradi);"
  },
  {
    "id": 1068,
    "biletId": 107,
    "text": "Qaysi yotiq yo’l chizig’i baland piyodalar o’tish joyini bildiradi?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\""
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_8.webp",
    "explanation": "YHQ 2 ilova: 1.29.1-sun’iy notekislik (baland piyodalar o’tish joyini bildiradi);"
  },
  {
    "id": 1069,
    "biletId": 107,
    "text": "Ko’rsatilgan holatda qayrilib olishga ruxsat etiladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat beriladi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_9.webp",
    "explanation": "YHQ 1 ilova: 4.3. “Aylanma harakatlanish”. Ko’rsatkichlar yo’nalishlarida harakatlanish ruxsat etiladi."
  },
  {
    "id": 1070,
    "biletId": 107,
    "text": "Ushbu kesishmadan o’ngga burilishga ruxsat beriladimi?",
    "options": [
      "Taqiqlanadi",
      "Ruxsat beriladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i107_10.webp",
    "explanation": "YHQ 1 ilova: 5.19.1 — 5.19.4. “Oxiri berk yo’l”. Yo’lning ko’rsatilgan yo’nalishda oxiri berkligini bildiradi."
  },
  {
    "id": 1071,
    "biletId": 108,
    "text": "Chorrahadan to’g’riga harakatlanmoqchisiz - sizning harakatingiz:",
    "options": [
      "Birinchi o’taman",
      "Avtobusga yo’l beraman"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_1.webp",
    "explanation": "YHQ 1 ilova: 2.1. “Asosiy yo’l”. Harakat tartibga solinmagan chorrahalarda oldin o’tish huquqini beradi.\nBelgi asosiy yo’l boshiga va chorrahalarning bevosita oldiga o’rnatiladi.\nYHQ 16-bobi 104-bandi: Teng ahamiyatga ega bo’lmagan yo’llar kesishgan chorrahada ikkinchi darajali yo’ldan harakatlanayotgan transport vositasining haydovchisi asosiy yo’ldan yaqinlashayotgan transport vositalariga ularning keyingi harakatlanish yo’nalishidan qat’iy nazar, yo’l berishi kerak."
  },
  {
    "id": 1072,
    "biletId": 108,
    "text": "Siz chorrahadan chapga burilmoqchisiz, kimga yo’l berishingiz kerak?",
    "options": [
      "Mikroavtobusga",
      "Traktorga",
      "Ikkala transportga",
      "Birinchi o’tish huquqiga egaman"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_2.webp",
    "explanation": "YHQ 16-bobi 106-bandi: Asosiy yo’lning yo’nalishi chorrahada o’zgarganda, asosiy yo’lda harakatlanayotgan haydovchilar o’zaro teng ahamiyatli yo’llar chorrahasidan o’tish qoidasiga amal qilishlari kerak.\nIkkinchi darajali yo’llarda harakatlanayotgan haydovchilar ham o’zaro shu qoidaga amal qilishlari kerak.\n\nYHQ 16-bobi 107-bandi: Chapga burilishda yoki qayrilib olishda relssiz transport vositasining haydovchisi teng ahamiyatli yo’ldan qarama-qarshi yo’nalishdan to’g’riga yoki o’ngga harakatlanayotgan transport vositalariga yo’l berishi shart. Bu qoidaga tramvay haydovchilari ham o’zaro amal qilishlari kerak."
  },
  {
    "id": 1073,
    "biletId": 108,
    "text": "Ushbu joyda quvib o’tishga ruxsat beriladimi?",
    "options": [
      "Ruxsat beriladi",
      "Oldindagi transport vositasi tezligi 40km/s dan kam bo’lsa",
      "Taqiqlanadi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_3.webp",
    "explanation": "YHQ 2 ilova: 1.1 — qarama-qarshi yo’nalishlarda harakatlanayotgan transport oqimlarini ajratadi, yo’lning xavfli joylaridagi harakatlanish bo’lagi chegarasini va velosipedchilar uchun bo’lagining chegarasini bildiradi; yo’lning kirish taqiqlangan qismi chegarasini belgilaydi; transport vositalarining to’xtab turish joyi chegarasini hamda avtomagistral qatoriga kiritilmagan yo’lning qatnov qismi chegarasini bildiradi;\nYHQ 12-bobi 86-bandi: Quvib o’tish quyidagi hollarda taqiqlanadi:\ntartibga solingan chorrahalarda;\ntartibga solinmaydigan chorrahalarda asosiy hisoblanmaydigan yo’llarda harakatlanishda;\nko’priklarda, yo’l o’tkazgichlarda, estakadalarda va ularning ostida;\npiyodalar o’tish joylarida;\ntemir yo’l kesishmalarida va ulargacha 100 metrdan kam masofa qolganda;\nquvib yoki aylanib o’tayotgan transport vositalarini;\ntepalikning oxirida va yo’lning ko’rinishi cheklangan joylarida;\n3.20 va 3.22 yo’l belgilari ta’sir oralig’ida."
  },
  {
    "id": 1074,
    "biletId": 108,
    "text": "Qaysi yo’nalish bo’yicha burilish mumkin?",
    "options": [
      "Faqat \"A\"",
      "Faqat \"Б\"",
      "Ikkala sanab o’tilgan hollarda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_4.webp",
    "explanation": "YHQ 1 ilova: 5.37. “Reversiv harakatlanish yo’liga chiqish”.\n\nYHQ 2 ilova:  1.9 — reversiv harakat tashkil etilgan bo’laklarning chegarasini belgilaydi; reversiv harakatlanish amalga oshirilgan yo’llarda (reversiv svetofori o’chirilgan holatda) qarama-qarshi yo’nalishdagi transport oqimini ajratadi;\n\nYHQ 10-bobi 71-bandi: Reversiv harakatlanishli yo’lga burilishda haydovchi transport vositasini shunday boshqarishi kerakki, bunda transport vositasi qatnov qismlari kesishmasidan chiqishda chetki o’ng qatorni egallashi kerak. Shu yo’nalishdagi boshqa tasmalardan ham harakatlanish ruxsat etilganiga ishonch hosil qilingandan keyingina haydovchiga qayta tizilishga ruxsat etiladi."
  },
  {
    "id": 1075,
    "biletId": 108,
    "text": "Ushbu transport vositasi qaysi yo’nalishda harakatlanishiga ruxsat etiladi?",
    "options": [
      "Faqat chapga",
      "To’g’riga va chapga",
      "Faqat chapga va qayrilib olishga",
      "Barcha yo’nalishlarga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_5.webp",
    "explanation": "YHQ 2 ilova: Yo’l belgilarining, shu jumladan, vaqtincha yo’l belgilarining va yotiq yo’l chiziqlarining ma’nolari bir-biriga zid kelgan hollarda yoki yo’l chiziqlarini yetarlicha farqlab bo’lmasa, haydovchilar yo’l belgilariga amal qilishlari kerak.\n\nYHQ 1 ilova: 5.8.1. “Tasmalar bo’yicha harakat yo’nalishi”. Tasmalar soni va har biri bo’yicha ruxsat etilgan harakatlanish yo’nalishlari. Boshqa yo’nalishlar bo’yicha harakatlanish taqiqlanadi.\nYo’lning chetki chap bo’lagidan chapga burilishga ruxsat beruvchi 5.8.1 va 5.8.2 belgilari shu tasmadan qayrilishga ham ruxsat beradi."
  },
  {
    "id": 1076,
    "biletId": 108,
    "text": "Ushbu belgi aholi punktlarida xavfli yo’l qismi boshlanishidan qancha masofa oldin o’rnatiladi?",
    "options": [
      "150-300 m",
      "50-100 m",
      "Xavfli yo’l qismi oldiga o’rnatiladi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_6.webp",
    "explanation": "YHQ 1 ilova: 1.1, 1.2, 1.5 — 1.32 ogohlantiruvchi belgilari aholi punktlarida xavfli joydan 50 — 100 metr, aholi punktlaridan tashqarida esa 150 — 300 metr oldin o’rnatiladi. Zaruriyat bo'lganda, bu belgilar 7.1.1 qo'shimcha axborot belgisida ko’rsatilgan boshqa masofada ham o’rnatilishi mumkin."
  },
  {
    "id": 1077,
    "biletId": 108,
    "text": "Qaysi belgilarda oyning juft kunlarida to’xtash mumkin",
    "options": [
      "Chapdagi rasmda",
      "O’ngdagi rasmda",
      "Har ikkisida mumkun"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_7.webp",
    "explanation": "YHQ 1 ilova: 3.29. “Oyning toq kunlarida to’xtab turish taqiqlangan” (xizmat vazifasini bajarayotgan xodimga biriktirilgan ko’k yoki qizil yoxud ko’k va qizil rangli yaltiroq mayoqchasi bilan jihozlangan hamda maxsus rangli bo’yoq sxemalar va yozuvlar bilan belgilangan transport vositalari bundan mustasno).\nYHQ 1 ilova: 3.30. “Oyning juft kunlarida to’xtab turish taqiqlangan” (xizmat vazifasini bajarayotgan xodimga biriktirilgan ko’k yoki qizil yoxud ko’k va qizil rangli yaltiroq mayoqchasi bilan jihozlangan hamda maxsus rangli bo’yoq sxemalar va yozuvlar bilan belgilangan transport vositalari bundan mustasno)."
  },
  {
    "id": 1078,
    "biletId": 108,
    "text": "Doimiy va vaqtinchalik yo’l belgilari ma’no jihatidan bir birini inkor etganda qaysi biriga amal qilasiz?",
    "options": [
      "Doimiy yo’l belgisiga",
      "Vaqtinchalik yo’l belgisiga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 1 ilova: Vaqtincha (ko’chma tirgakdagi) va doimiy belgilar ma’no jihatidan bir-biriga zid kelgan hollarda haydovchilar vaqtincha o’rnatilgan belgilarga amal qilishlari kerak."
  },
  {
    "id": 1079,
    "biletId": 108,
    "text": "Moped haydovchisi majbur:",
    "options": [
      "16 yoshga to’lgan bo’lishi",
      "Motoshlem kiyishlari va uni qadab olishlari",
      "Kunduzgi vaqtda ham yaqinni yorituvchi chiroqlarni yoqib yurishi",
      "Barcha sanab o’tilgan javoblar"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 28-bobi 165-bandi: Yo’lda velosiped, individual harakatlanish vositalarini va aravani boshqarish, miniladigan yoki yuk ortiladigan hayvonlarni haydab o’tish 14 yoshdan kichik bo’lmagan, moped va skuterni boshqarish esa 16 yoshdan kichik bo’lmagan shaxslarga ruxsat etiladi.\n\nYHQ 2-bobi 9-bandi: Mototsikl, elektromototsikl, moped va skuterda harakatlanayotgan haydovchi hamda yo’lovchilar maxsus motoshlem kiyishlari va uni qadab olishlari shart.\n\nYHQ 23-bobi 138-bandi: Sutkaning yorug’ vaqtida quyidagi hollarda yaqinni yorituvchi fara chiroqlari yoqilishi kerak:\nmototsikl, elektromototsikl, skuter va mopedlarda."
  },
  {
    "id": 1080,
    "biletId": 108,
    "text": "Yo’naltirgichlar bilan ko’rsatilgan qaysi yo’nalishlarda harakat ruxsat etilgan?",
    "options": [
      "Faqat to’g’riga",
      "Faqat o’ngga",
      "Faqat chapga",
      "Faqat to’g’riga va o’ngga",
      "Barcha yo’nalishlarga"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i108_10.webp",
    "explanation": "YHQ 1 ilova: 4.1.4. “Harakatlanish to’g’riga yoki o’ngga”. Faqat belgilarda ko’rsatilgan ko’rsatkichlar yo’nalishlarida harakatlanishga ruxsat etiladi. Chapga burilishga ruxsat beruvchi belgilar qayrilib olishga ham ruxsat beradi. (Muayyan kesishmada talab etilgan harakatlanish yo’nalishiga tegishli ko’rsatkichlarning shakli tushirilgan 4.1.1 — 4.1.6 belgilarini qo’llash mumkin).\n4.1.1 — 4.1.6 belgilarining ta’siri yo’nalishli transport vositalariga joriy qilinmaydi.\n4.1.1 — 4.1.6 yo’l belgilari qatnov qismlarining qaysi kesishmasidan oldin o’rnatilsa, belgining ta’siri shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1081,
    "biletId": 109,
    "text": "Ushbu vaziyatda avtomobil haydovchisiga qaysi yo’nalishda harakatlanish taqiqlanadi?",
    "options": [
      "To’g’riga va chapga ",
      "Chapga va qayrilib olishga",
      "Qayrilib olishga",
      "Barcha yo’nalishga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_1.webp"
  },
  {
    "id": 1082,
    "biletId": 109,
    "text": "Ushbu vaziyatda qaysi yo’nalishda harakatlanishingiz mumkin?",
    "options": [
      "1, 3 va 4 yo’nalishlarda",
      "1, 2 va 3 yo’nalishlarda",
      "1 va 4 yo’nalishlarda",
      "Barcha yo’nalishlarda"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_2.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. “Harakatlanish to’g’riga”. Yo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1083,
    "biletId": 109,
    "text": "Ushbu chorrahada chapga burilishga ruxsat etiladimi?",
    "options": [
      "Ruxsat etiladi",
      "Taqiqlanadi"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_3.webp",
    "explanation": "YHQ 1-ilovasi 4-bo’limining birinchi va sakkizinchi xatboshlariga asosan: 4.1.1. \"Harakatlanish to’g’riga\". 4.1.1 yo'l belgisi qatnov qismining qaysi kesishmasi oldiga o’rnatilsa, shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1084,
    "biletId": 109,
    "text": "Harakatlanish vaqtida velosipedchi bilan avtomobil yo’llari kesishganda kim yo’l berishi kerak?",
    "options": [
      "Avtomobil",
      "Velosipedchilar",
      "O’zaro kelishib o’tishadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_4.webp",
    "explanation": "YHQ 28-bobi 169-bandi: Chorrahadan tashqaridagi tartibga solinmagan velosiped yo’lkasi bilan yo’l kesishmasida velosiped va individual harakatlanish vositalari yo’lda harakatlanayotgan boshqa transport vositalariga yo’l berishlari kerak.\nVelosiped yo’lkasi va piyodalar yo’lkasi (trotuar) o’zaro kesishgan holatlarda velosiped va individual harakatlanish vositasi piyodaga yo’l berishi kerak."
  },
  {
    "id": 1085,
    "biletId": 109,
    "text": "Qaysi haydovchi to’xtab turish qoidalarini buzmadi?",
    "options": [
      "Mototsikl haydovchisi",
      "Trotuarda to’xtab turgan avtomobil haydovchisi",
      "Hech kim buzmadi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_5.webp",
    "explanation": "YHQ 13-bobi 89-bandi: Transport vositalarini yo’lning qatnov qismida bir qator qilib, qatnov qismi chetiga yo’l harakatining boshqa ishtirokchilariga xalaqit bermaslik sharti bilan faqat parallel ravishda, kajavasi bo’lmagan ikki g’ildirakli transport vositalarini ikki qator qilib qo’yishga ruxsat etiladi.\n Qatnov qismiga chegaradosh trotuar chetida faqat yengil avtomobillar, mototsikllar, mopedlar va velosipedlarga to'xtab turishga 5.15 yo’l belgisi bilan birga 7.6.2, 7.6.3, 7.6.6 — 7.6.9 qo’shimcha axborot belgilaridan biri o'rnatilgan joylarda ruxsat etiladi."
  },
  {
    "id": 1086,
    "biletId": 109,
    "text": "Haydovchi poyezdni o’tkazib yuborishi uchun to’g’ri to’xtaganmi?",
    "options": [
      "Ha",
      "Yoq"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_6.webp",
    "explanation": "YHQ 18-bobi 119-bandi: Kesishma orqali harakatlanish taqiqlangan hollarda haydovchi to’xtash chizig’i, 2.5 yo’l belgisi yoki svetofor oldida, ular bo’lmaganda shlagbaumga kamida 5 metr, shlagbaum bo’lmaganda esa birinchi temir yo’l iziga kamida 10 metr qolganda to’xtashi kerak."
  },
  {
    "id": 1087,
    "biletId": 109,
    "text": "Tezkor va maxsus xizmatlarning transport vositalari yo’l xarakatining boshqa qatnashchilariga nisbatan imtiyozga ega bo’lishi uchun:",
    "options": [
      "Ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar yoqilgan bo’lishi shart",
      "Maxsus tovushli ishora yoqilgan bo’lishi shart",
      "Har ikkalasi yoqilgan bo’lishi shart"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 6-bobi 25-bandi: Yo’l harakatining boshqa ishtirokchilariga nisbatan imtiyozga ega bo’lishi uchun tezkor va maxsus xizmatlarning transport vositalarida, tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishora yoqilgan bo’lishi shart. Ular o’zlariga yo’l berilayotganligiga ishonch hosil qilganlaridan so’nggina imtiyozdan foydalanishlari mumkin."
  },
  {
    "id": 1088,
    "biletId": 109,
    "text": "Qaysi rasmda haydovchi belgi talabini buzmay to’xtadi?",
    "options": [
      "Faqat 1-rasmda",
      "Faqat 2-rasmda",
      "Ikkala rasmda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_8.webp",
    "explanation": "YHQ 1 ilova: 2.5. “To’xtamasdan harakatlanish taqiqlangan”. To’xtash chizig’i oldida, agar u bo’lmasa, kesib o’tiladigan qatnov qismining chetida to’xtamasdan harakatlanish taqiqlanadi. Haydovchi kesib o’tilayotgan yo’ldan, 7.13 qo’shimcha-axborot belgisi bo’lganda esa asosiy yo’ldan harakatlanayotgan transport vositalariga yo’l berishi kerak.\nBu belgi temir yo’l kesishmasi yoki karantin maskanidan oldin o’rnatilishi mumkin. Bunday hollarda haydovchi to’xtash chizig’i oldida, u bo’lmasa, belgi oldida to’xtashi kerak."
  },
  {
    "id": 1089,
    "biletId": 109,
    "text": "Ushbu belgi qanday nomlanadi?",
    "options": [
      "Piyodalarning harakati taqiqlangan",
      "Individual harakatlanish vositalarini boshqarish taqiqlangan",
      "Bolalar uchishi taqiqlangan",
      "Ko’rsatilgan barcha javoblar to’g’ri"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_9.webp",
    "explanation": "YHQ 1 ilova: 3.34. “Individual harakatlanish vositalarini boshqarish taqiqlangan”."
  },
  {
    "id": 1090,
    "biletId": 109,
    "text": "Qaysi avtomobil haydovchisi qoidani buzib hovliga burildi?",
    "options": [
      "Faqat oq avtomobil haydovchisi",
      "Faqat sariq avtomobil haydovchisi",
      "Hech qaysi buzmadi",
      "Ikkisi ham buzdi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i109_10.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. “Harakatlanish to’g’riga”. Yo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1091,
    "biletId": 110,
    "text": "Qaysi transport vositasining haydovchisi aholi punktlarida to’xtash qoidasini buzmoqda?",
    "options": [
      "Sariq avtomobil haydovchisi",
      "Ko’k avtomobil haydovchisi",
      "Har ikkisi buzmadi",
      "Har ikkisi buzdi"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_1.webp",
    "explanation": "YHQ 13-bobi 88-bandi: Aholi punktlarida o’rtada tramvay yo’li bo’lmagan, har yo’nalishda bittadan tasmasi bo’lgan, shuningdek bir tomonlama harakat tashkil etilgan yo’llarda yo’lning chap tomonida to’xtash va to’xtab turishga ruxsat etiladi.\n\nYHQ 1 ilova: 7.18. “Nogironlar mustasno”. Belgilarning ta’siri ushbu Qoidalarning 175-bandiga muvofiq “Nogiron” taniqlik belgisi o’rnatilgan transport vositalariga joriy etilmaydi."
  },
  {
    "id": 1092,
    "biletId": 110,
    "text": "Yo’naltirgichlar bilan ko’rsatilgan qaysi yo’nalishlarda harakat ruxsat etilgan?",
    "options": [
      "Faqat to’g’riga",
      "Faqat o’ngga",
      "Faqat chapga",
      "Faqat to’g’riga va chapga",
      "Barcha yo’nalishlarga"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_2.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. “Harakatlanish to’g’riga”. Faqat belgilarda ko’rsatilgan ko’rsatkichlar yo’nalishlarida harakatlanishga ruxsat etiladi. Chapga burilishga ruxsat beruvchi belgilar qayrilib olishga ham ruxsat beradi. (Muayyan kesishmada talab etilgan harakatlanish yo’nalishiga tegishli ko’rsatkichlarning shakli tushirilgan 4.1.1 — 4.1.6 belgilarini qo’llash mumkin).\n4.1.1 — 4.1.6 belgilarining ta’siri yo’nalishli transport vositalariga joriy qilinmaydi.\n4.1.1 — 4.1.6 yo’l belgilari qatnov qismlarining qaysi kesishmasidan oldin o’rnatilsa, belgining ta’siri shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1093,
    "biletId": 110,
    "text": "Qaysi transport vositalariga yo’lovchilarni tushurishga ruxsat etiladi?",
    "options": [
      "\"А\"",
      "\"Б\"",
      "\"В\"",
      "Hech qaysi biriga"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_3.webp",
    "explanation": "YHQ 13-bobi 88-bandi: Aholi punktlarida o’rtada tramvay yo’li bo’lmagan, har yo’nalishda bittadan tasmasi bo’lgan, shuningdek bir tomonlama harakat tashkil etilgan yo’llarda yo’lning chap tomonida to’xtash va to’xtab turishga ruxsat etiladi.\n\nYHQ 17.1-bobi 115.1-bandi: Yo’nalishli transport vositalari uchun alohida ajratilgan tasmasi bor yo’ldan yo’nalishli jamoat transporti vositalari harakatlanishi mumkin va boshqa transport vositalari ushbu yo’lakda harakatlanishi taqiqlanadi, bundan tezkor va maxsus xizmatlarning transport vositalari mustasno."
  },
  {
    "id": 1094,
    "biletId": 110,
    "text": "Ushbu yotiq yo’l chizig’i qaysi guruh yo’l belgilarini takrorlaydi?",
    "options": [
      "Imtiyoz belgilarni",
      "Ogohlantiruvchi belgilarni",
      "Taqiqlovchi belgilarni",
      "Axborot-ko’rsatgich belgilarni"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_4.webp",
    "explanation": "YHQ 2 ilova: 1.27 — ogohlantiruvchi yo’l belgilarini takrorlovchi yo’l chizig’i;\n\nYHQ 1 ilova: 1.18.1 — 1.18.3. “Yo’lning torayishi”. 1.18.1 — ikki tomonlama torayish; 1.18.2 — o’ngga torayish va 1.18.3 — chapga torayishni bildiradi."
  },
  {
    "id": 1095,
    "biletId": 110,
    "text": "Velosiped yo’lkasi bilan kesishuvga qanchadan kam masofa qolganda to’xtash taqiqlanadi?",
    "options": [
      "10 metr",
      "15 metr",
      "30 metr"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "explanation": "YHQ 13-bobi 91-bandi: Quyidagilarda to’xtash taqiqlanadi:\nvelosiped yo’lkasi bilan kesishuvda va ulardan oldin 10 metrdan kam masofa qolganda;"
  },
  {
    "id": 1096,
    "biletId": 110,
    "text": "Qizil avtomobil haydovchisi qaysi yo’nalishlarda harakatlanishiga ruxsat berilgan?",
    "options": [
      "Faqat chapga",
      "Chapga va qayrilib olishga",
      "To’g’riga va chapga"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_6.webp",
    "explanation": "YHQ 2 ilova: Yo’l belgilarining, shu jumladan, vaqtincha yo’l belgilarining va yotiq yo’l chiziqlarining ma’nolari bir-biriga zid kelgan hollarda yoki yo’l chiziqlarini yetarlicha farqlab bo’lmasa, haydovchilar yo’l belgilariga amal qilishlari kerak.\n\nYHQ 1 ilova: 5.8.1. “Tasmalar bo’yicha harakat yo’nalishi”. Tasmalar soni va har biri bo’yicha ruxsat etilgan harakatlanish yo’nalishlari. Boshqa yo’nalishlar bo’yicha harakatlanish taqiqlanadi.\nYo’lning chetki chap bo’lagidan chapga burilishga ruxsat beruvchi 5.8.1 va 5.8.2 belgilari shu tasmadan qayrilishga ham ruxsat beradi."
  },
  {
    "id": 1097,
    "biletId": 110,
    "text": "Ushbu transport vositasi qaysi yo’nalishda harakatlanishiga ruxsat etiladi?",
    "options": [
      "Faqat to’g’riga",
      "To’g’riga va o’ngga",
      "Faqat to’g’riga va qayrilib olishga",
      "Barcha yo’nalishlarga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_7.webp",
    "explanation": "YHQ 1 ilova: 3.18.2. “Chapga burilish taqiqlanadi”."
  },
  {
    "id": 1098,
    "biletId": 110,
    "text": "Ushbu vaziyatda haydovchilar birinchi temir yo’l iziga eng kamida necha metr qolganda to’xtashlari kerak?",
    "options": [
      "3 metr",
      "5 metr",
      "10 metr"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_8.webp",
    "explanation": "YHQ 18-bobi 119-bandi: Kesishma orqali harakatlanish taqiqlangan hollarda haydovchi to’xtash chizig’i, 2.5 yo’l belgisi yoki svetofor oldida, ular bo’lmaganda shlagbaumga kamida 5 metr, shlagbaum bo’lmaganda esa birinchi temir yo’l iziga kamida 10 metr qolganda to’xtashi kerak."
  },
  {
    "id": 1099,
    "biletId": 110,
    "text": "Kemiruvchi va sudralib yuruvchi hayvonlar qaysi javobda ko’rsatilgan?",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "2 va 3"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_9.webp",
    "explanation": "YHQ 1 ilova: 1.25.3. “Kemiruvchi va sudralib yuruvchi hayvonlar”"
  },
  {
    "id": 1100,
    "biletId": 110,
    "text": "Qaysi belgi piyodalar o’tish joyini bildiradi?",
    "options": [
      "a",
      "b",
      "c"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i110_10.webp",
    "explanation": "YHQ 1 ilova: 5.16.1, 5.16.2. “Piyodalar o’tish joyi”. o’tish joyi oldida 1.14.1-1.14.2 yotiq chizig’i bo’lmaganda 5.16.2 belgisi yo’ldan o’ng tomonga o’tish joyining old chegarasiga, 5.16.1 belgisi esa chap tomonga o’tish joyining orqa chegarasiga o’rnatiladi."
  },
  {
    "id": 1101,
    "biletId": 111,
    "text": "Ko’k rangli yalt-yalt etuvchi mayoqchalari va maxsus tovushli ishorasi yoqilgan maxsus transport vositasi chorrahani nechanchi bo’lib kesib o’tadi?",
    "options": [
      "Oxirgi",
      "Birinchi",
      "Ikkinchi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_1.webp",
    "explanation": "YHQ 6-bobi 26-bandiga asosan:Haydovchilar tezkor va maxsus xizmatlarning ko’k yoki qizil yoxud ko’k va qizil rangli yalt-yalt etuvchi mayoqchalar va maxsus tovushli ishorasi yoqilgan holda yaqinlashayotgan transport vositalariga, shuningdek ularning kuzatuvidagi, yaqinni yorituvchi fara chiroqlari yoqilgan transport vositasi (transport vositalari)ga yo’l berishlari shart.\nMazkur turdagi transport vositalarini quvib o’tish taqiqlanadi."
  },
  {
    "id": 1102,
    "biletId": 111,
    "text": "Qaysi rasmdagi haydovchilar to’xtash qoidasini buzdilar?",
    "options": [
      "1",
      "2",
      "3",
      "1,2",
      "1,3"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_2.webp",
    "explanation": "YHQ 13-bobi 91-bandiga asosan: to'xtagan transport vositasi bilan sidirg’a chiziq (qatnov qismining chetini belgilovchi chiziqdan tashqari), ajratuvchi mintaqa yoki qatnov qismining qarama-qarshi cheti orasidagi masofa 3 metrdan kam bo’lgan joylarda."
  },
  {
    "id": 1103,
    "biletId": 111,
    "text": "Ushbu transport vositasiga chorraha orqali qaysi yo’nalishlar bo’yicha harakatlanishga ruxsat etiladi?",
    "options": [
      "Faqat to’g’riga va o’ngga",
      "Faqat chapga va qayrilib olishga",
      "Faqat o’ngga",
      "Faqat to’g’riga",
      "Barcha yo’nalishlarga"
    ],
    "correctAnswer": 4,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_3.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. “Harakatlanish to’g’riga”. Yo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1104,
    "biletId": 111,
    "text": "Qaysi avtomobil haydovchisiga burilishga ruxsat etilgan?",
    "options": [
      "Har ikkisiga ruxsat etilgan",
      "Oq avtomobil haydovchisiga",
      "Har ikkisiga taqiqlangan",
      "Qizil avtomobil haydovchisiga"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_4.webp",
    "explanation": "YHQ 1 ilova: 4.1.1. “Harakatlanish to’g’riga”. Faqat belgilarda ko’rsatilgan ko’rsatkichlar yo’nalishlarida harakatlanishga ruxsat etiladi. Chapga burilishga ruxsat beruvchi belgilar qayrilib olishga ham ruxsat beradi. (Muayyan kesishmada talab etilgan harakatlanish yo’nalishiga tegishli ko’rsatkichlarning shakli tushirilgan 4.1.1 — 4.1.6 belgilarini qo’llash mumkin).\n4.1.1 — 4.1.6 belgilarining ta’siri yo’nalishli transport vositalariga joriy qilinmaydi.\n4.1.1 — 4.1.6 yo’l belgilari qatnov qismlarining qaysi kesishmasidan oldin o’rnatilsa, belgining ta’siri shu kesishmaga joriy qilinadi.\nYo’lning qismi boshlanishida o’rnatilgan 4.1.1 belgisining ta’siri yaqin chorrahagacha joriy qilinadi. Belgi o’ng tomonda joylashgan hovlilarga va yo’lga yondosh boshqa hududlarga burilishni taqiqlamaydi."
  },
  {
    "id": 1105,
    "biletId": 111,
    "text": "Ushbu belgi qanday nomlanadi?",
    "options": [
      "To’xtab turish joyi",
      "Pullik to’xtab turish joyi",
      "Yer usti avtomobil qo’yish joyi",
      "Yer osti avtomobil qo’yish joyi"
    ],
    "correctAnswer": 1,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_5.webp",
    "explanation": "YHQ 1 ilova: 5.15.1. “Pullik to’xtab turish joyi”."
  },
  {
    "id": 1106,
    "biletId": 111,
    "text": "Qaysi rasmlarda quvib o’tish ko’rsatilgan?",
    "options": [
      "Faqat birinchi va ikkinchi rasmlarda",
      "Fagat birinchi va uchinchi rasmlarda",
      "Faqat birinchi, ikkinchi va to’rtinchi rasmlarda",
      "Fagat birinchi rasmda",
      "Barcha rasmlarda"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_6.webp",
    "explanation": "YHQ 1-ilova 1-bob. Umumiy qoidalar: Quvib o'tish — bir yoki bir nechta transport vositalarini qarama-qarshi yo'nalishda harakatlanish uchun mo’ljallangan tasmaga chiqib, so'ngra ilgari egallagan qatoriga qaytib o’tish bilan bog'liq bo’lgan o’zib ketish."
  },
  {
    "id": 1107,
    "biletId": 111,
    "text": "Qaysi rasmda piyodalarning tashkiliy jamlanmasi yo’lning qatnov qismida qoidani buzmay harakatlanmoqda?",
    "options": [
      "1",
      "2",
      "1,2"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_7.webp",
    "explanation": "YHQ 4-bobi 16-bandiga asosan:Piyodalarning tashkiliy jamlanmasiga yo’lning qatnov qismida bir qatorda to’rt kishidan ortiq bo’lmasdan, faqat transport vositalarining harakat yo’nalishi bo’ylab o’ng tomondan harakatlanishga ruxsat etiladi.\nJamlanmaning oldi va orqasida chap tomondan qizil bayroqcha, sutkaning qorong’i vaqtida yoki yetarlicha ko’rinmaslik sharoitida esa oldinda oq, orqada qizil rangli chiroq ko’targan kuzatuvchilar bo’lishi shart.\nBolalar guruhini trotuarlar va piyodalar yo’lkalaridangina, ular bo’lmaganda esa yo’l yoqasidan faqat sutkaning yorug’ vaqtida va katta yoshdagilar kuzatuvida olib yurishga ruxsat etiladi."
  },
  {
    "id": 1108,
    "biletId": 111,
    "text": "Asosiy yo’l:",
    "options": [
      "Faqat yuqori chapdagi rasmda",
      "Faqat yuqori o’ngdagi rasmda",
      "Yuqoridagi ikkala rasmda",
      "Barcha rasmlarda"
    ],
    "correctAnswer": 2,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_8.webp",
    "explanation": "YHQ 1-ilova 1-bob. Umumiy qoidalar: asosiy yo’l — tuproqli yoki shag’alli yo’lga nisbatan qattiq qoplamali (asfalt, sement-betonli va shunga o’xshashlar yotqizilgan), kesishayotgan yoki tutashgan yo’lga nisbatan 2.1, 2.3.1 — 2.3.3 yoki 5.1 yo’l belgilari bilan belgilangan yoxud yondosh hududdan chiqadigan yo’lga nisbatan har qanday yo’l. Ikkinchi darajali yo’lning bevosita chorrahaga tutash qismining qoplamali bo’lishi uni asosiy yo’l bilan teng huquqli qilmaydi;"
  },
  {
    "id": 1109,
    "biletId": 111,
    "text": "Ushbu qo’shimcha axborot belgisi qaysi yo’l belgisi bilan qo’llaniladi?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 3,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_9.webp",
    "explanation": "YHQ 1 ilova: 5.15.4 Elektr quvvatlashli avtomobil qo’yish joyi."
  },
  {
    "id": 1110,
    "biletId": 111,
    "text": "Ushbu transport vosita qaysi toifaga kiradi?",
    "options": [
      "M1",
      "M2",
      "N1",
      "O1"
    ],
    "correctAnswer": 0,
    "category": "Umumiy qoidalar",
    "imageUrl": "/images/questions/i111_10.webp",
    "explanation": "YHQ 3 ilova: 7.22. M1 toifasi — yo’lovchilarni tashish uchun foydalaniladigan va haydovchining o’rindig’idan tashqari o’rindiqlar soni 8 tadan oshmaydigan avtotransport vositalari."
  }
]

// Get total number of bilets
export const getTotalBilets = (): number => {
  const biletIds = new Set(questions.map(q => q.biletId))
  return biletIds.size
}

// Get questions for a specific bilet
export const getBiletQuestions = (biletId: number): Question[] => {
  return questions.filter(q => q.biletId === biletId)
}

// Get random questions for exam
export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.category === category)
}

// Get all unique categories
export const getCategories = (): string[] => {
  const categories = new Set(questions.map(q => q.category).filter(Boolean))
  return Array.from(categories) as string[]
}

// Bilet info interface
export interface BiletInfo {
  id: number
  number: number
  questionsCount: number
  isFree: boolean
}

// Get bilet information for all bilets
export const getBiletInfo = (): BiletInfo[] => {
  const totalBilets = getTotalBilets()
  const biletInfos: BiletInfo[] = []
  
  for (let i = 1; i <= totalBilets; i++) {
    const biletQuestions = getBiletQuestions(i)
    biletInfos.push({
      id: i,
      number: i,
      questionsCount: biletQuestions.length,
      isFree: i <= 5, // First 5 bilets are free
    })
  }
  
  return biletInfos
}
