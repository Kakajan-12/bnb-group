import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
            translation: {
                slogan: "Reliability. Quality.",
                about: "About company",
                partners: "Partners",
                products: "Products",
                implementers: "Implementers",
                contacts: "Contacts",
                about_company: "About company",
                about_text: "BNB Group Company currently occupies a leading position in the distribution of food products of famous brands of Turkmenistan, Russia, Ukraine and Kazakhstan.\n" +
                    "A well-coordinated team of highly qualified specialists at the highest level ensures proper storage conditions and timely delivery of products of declared quality in the required quantity. Created more than 100 jobs.\n" +
                    "Dynamically developing, the company applies the latest technologies for managing of business processes, and successfully implements international standards of control and quality for distribution of all product groups.\n" +
                    "The geography of sales of BNB Group Company is constantly expanding. Currently, the company sells products in all regions of Turkmenistan. Having 4500 retail outlets in the country and 1600 retail outlets in the capital Ashgabat, the company supplies food to major retail networks and cooperates with national retailers.\n" +
                    "The mission of the company is to make distribution in Turkmenistan as efficient and harmonious as possible, contributing to the development of regions of its presence.",
                implementers_text:"Thanks to the strong brands with which we currently have dealer agreements, as well as our team of experienced regional and leading managers, we are ready to offer you a high service with well-built logistics, are ready to jointly manage your inventory and offer an improved discount system to our future partners for the sake of mutually beneficial relationship.",
                contact_form:"Contact Form",
                contact_email:"Email Address",
                contact_message:"Message",
                contact_submit:"Submit",
                contact_address:"Turkmenistan, Ashgabat, Nazar Gullayev Street",
                footer_copyright:"All rights reserved.",
                counter1:"retail outlets in the capital Ashgabat",
                counter2:"retail outlets throughout Turkmenistan",
                counter3:"warehouse premises",
                counter4:"coverage of the country's retail networks",
                kw:"sq. m.",
                card1:"Efficient and well-established logistics",
                card2:"International standards of quality control and quality",
                card3:"Modern technologies in management",
                card4:"Many years of experience and reliable cooperation",
                card5:"Progressive system of discounts for partners"
            }
        },
        ru: {
            translation: {
                slogan: "Надежность. Качество.",
                about: "О компании",
                partners: "Партнеры",
                products: "Продукция",
                implementers: "Реализаторы",
                contacts: "Контакты",
                about_company: "О компании",
                about_text: "Компания BNB Group в настоящее время занимает лидирующие позиции в дистрибуции продуктов питания известных торговых марок Туркменистана, России, Украины и Казахстана.\n" +
                    "Слаженная команда высококвалифицированных специалистов на самом высоком уровне обеспечивает надлежащие условия хранения и своевременную поставку продукции заявленного качества в необходимом количестве. Создано более 100 рабочих мест.\n" +
                    "Динамично развиваясь, компания применяет новейшие технологии управления бизнес-процессами, успешно внедряет международные стандарты контроля и качества для дистрибуции всех групп товаров.\n" +
                    "География продаж компании BNB Group постоянно расширяется. В настоящее время компания реализует продукцию во всех регионах Туркменистана. Имея 4500 торговых точек по стране и 1600 торговых точек в столице Ашхабаде, компания поставляет продукты питания в крупные торговые сети и сотрудничает с национальными ритейлерами.\n" +
                    "Миссия компании — сделать дистрибуцию в Туркменистане максимально эффективной и слаженной, способствуя развитию регионов своего присутствия.",
                implementers_text:"Благодаря сильным брендам, с которыми на данный момент у нас есть дилерские соглашения, а также нашей команде опытных региональных и ведущих менеджеров, мы готовы предложить Вам высокий сервис с четко выстроенной логистикой, готовы совместно управлять Вашими товарными запасами и предложить улучшенную систему скидок нашим будущим партнерам ради взаимовыгодных отношений.",
                contact_form:"Контактная форма",
                contact_email:"Адрес электронной почты",
                contact_message:"Сообщение",
                contact_submit:"Отправить",
                contact_address:"Туркменистан, Ашхабад, улица Назара Гуллаева",
                footer_copyright:"Все права защищены",
                counter1:"торговых точек в столице Ашхабаде",
                counter2:"торговых точек по всему Туркменистану",
                counter3:"складских помещений",
                counter4:"покрытие ритейл сетей страны",
                kw:"кв. м.",
                card1:"Эффективная и отлаженная логистика",
                card2:"Международные стандарты контроля и качества",
                card3:"Современные технологии в управлении",
                card4:"Многолетний опыт и надежное сотрудничество",
                card5:"Прогрессивная система скидок для партнеров"
            }
        },
        tk: {
            translation: {
                slogan: "Ygtybarlylyk. Hil.",
                about: "Kompaniýa barada",
                partners: "Hyzmatdaşlar",
                products: "Önümler",
                implementers: "Ýerine ýetirijiler",
                contacts: "Kontaktlar",
                about_company: "Kompaniýa hakda",
                about_text: "BNB Group Company häzirki wagtda Türkmenistan, Russiýa, Ukraina we Gazagystanyň meşhur markalarynyň azyk önümlerini paýlamakda öňdebaryjy orny eýeleýär.\n" +
                    "Iň ýokary derejedäki ýokary hünärli hünärmenleriň oňat utgaşdyrylan topary, saklanyş şertlerini we yglan edilen hilli önümleriň zerur mukdarda öz wagtynda iberilmegini üpjün edýär. 100-den gowrak iş ýerini döretdi.\n" +
                    "Dinamiki taýdan ösýän kompaniýa, iş amallaryny dolandyrmak üçin iň täze tehnologiýalary ulanýar we ähli önüm toparlaryny paýlamak üçin halkara gözegçilik we hil standartlaryny üstünlikli durmuşa geçirýär.\n" +
                    "BNB Group Company kompaniýasynyň satuwynyň geografiýasy yzygiderli giňelýär. Häzirki wagtda bu kompaniýa Türkmenistanyň ähli sebitlerinde önüm satýar. Countryurtda 4500 söwda nokady we paýtagt Aşgabatda 1600 söwda nokady bar, bu kompaniýa esasy bölekleýin torlara azyk berýär we milli bölek satyjylar bilen hyzmatdaşlyk edýär.\n" +
                    "Kompaniýanyň wezipesi, Türkmenistanda paýlanyşyny mümkin boldugyça netijeli we sazlaşykly etmek, bar bolan sebitleriniň ösmegine goşant goşýar.",
                implementers_text:"Häzirki wagtda diler şertnamalarymyz bolan güýçli markalaryň, şeýle hem tejribeli sebitleýin we öňdebaryjy menejerler toparymyzyň kömegi bilen size anyk gurluşly logistika bilen ýokary hyzmat bermäge taýýardyrys, inwentarlaryňyzy bilelikde dolandyrmaga we kämilleşdirilen ulgamy hödürlemäge taýýardyrys özara peýdaly gatnaşyklar üçin geljekki hyzmatdaşlarymyza arzanladyşlar.",
                contact_form:"Habarlaşmak üçin forma",
                contact_email:"E-poçta salgysy",
                contact_message:"Hatyňyz",
                contact_submit:"Ugratmak",
                contact_address:"Türkmenistan, Aşgabat, Nazar Güllaýew köçesi",
                footer_copyright:"Ähli hukuklar goraglydyr.",
                counter1:"paýtagtymyz Aşgabatda söwda nokatlary",
                counter2:"Türkmenistanda söwda nokatlary",
                counter3:"ammarlar",
                counter4:"torlary gurşap alýar",
                kw:"kw. m.",
                card1:"Netijeli we tertipli logistika",
                card2:"Dolandyryşyň we hiliň halkara ülňüleri",
                card3:"Dolandyryşda häzirki zaman tehnologiýalary",
                card4:"Köp ýyllyk tejribe we ygtybarly hyzmatdaşlyk",
                card5:"Hyzmatdaşlar üçin arzanladyş ulgamy"
            }
        }
    }
});

export default i18n;