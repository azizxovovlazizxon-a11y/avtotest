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
]

// Total bilets available (premium bilets served from API)
const TOTAL_BILETS = 111

// Free bilets that are stored locally
const FREE_BILETS = [1, 2, 3, 4, 5]

// Get total number of bilets
export const getTotalBilets = (): number => {
  return TOTAL_BILETS
}

// Get questions for a specific bilet (only free bilets available locally)
export const getBiletQuestions = (biletId: number): Question[] => {
  return questions.filter(q => q.biletId === biletId)
}

// Get random questions for exam (from free bilets only)
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
  const biletInfos: BiletInfo[] = []
  
  for (let i = 1; i <= TOTAL_BILETS; i++) {
    biletInfos.push({
      id: i,
      number: i,
      questionsCount: 10,
      isFree: FREE_BILETS.includes(i),
    })
  }
  
  return biletInfos
}
