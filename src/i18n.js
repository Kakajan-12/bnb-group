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
                about: "About",
                partners: "Partners",
                products: "Products",
                implementers: "Implementers",
                contacts: "Contacts",
                home_advantages: "Our advantages",
                home_advantages_title1:"Wide range of products",
                home_advantages_text1:"\"BNB Group\" offers a variety of products, allowing customers to find all the products they need in one place.",
                home_advantages_title2:"Competitive prices",
                home_advantages_text2:"Thanks to optimized purchasing and logistics processes, the company can offer its customers attractive prices.",
                home_advantages_title3:"High quality service",
                home_advantages_text3:"\"BNB Group\" focuses on customer satisfaction by providing qualified support and advice.",
                home_advantages_title4:"Modern technologies",
                home_advantages_text4:"The use of modern technologies and inventory management systems allows the company to effectively manage logistics and minimize delivery time.",
                home_advantages_title5:"Reliable partnerships",
                home_advantages_text5:"\"BNB Group\" establishes long-term relationships with manufacturers and customers, which contributes to stability and trust in business.",
                home_advantages_title6:"Flexibility and adaptability",
                home_advantages_text6:"The company quickly responds to changes in the market and customer needs, which allows it to remain competitive and relevant.",
                partners_page:"Partners and opinions",
                partners1_title:"Barline",
                partners1_text:"BNB Group is a reliable partner that demonstrates a high level of professionalism and responsibility in their work. We cooperate with them and always receive quality services and support. Their team promptly responds to requests and offers optimal solutions, which makes joint work productive and enjoyable. We recommend BNB Group as a reliable partner in business.",
                partners2_title:"Peykam",
                partners2_text:"\"Working with BNB Group was a real discovery for our company. We were impressed by the professionalism of the team, attentive attitude to our needs and high quality of the services provided. We appreciate their innovative approach and flexibility in solutions. We recommend BNB Group as a reliable partner for business!\" - Peýkam",
                partners3_title:"Granum",
                partners3_text:"The company \"BNB Group\" has established itself as a reliable partner in the business sphere. We have been cooperating with them for several years, and their professionalism, efficiency and attention to detail are always impressive. The team of \"BNB Group\" demonstrates a high level of competence and readiness to solve any problems. We recommend them as a reliable service provider! — Granum.",
                contact_form:"Contact Form",
                contact_email:"Email Address",
                contact_message:"Message",
                contact_submit:"Submit",
                contact_address:"Turkmenistan, Ashgabat, Nazar Gullayev Street",
                footer_monday:"Mon",
                footer_friday:"Fri",
                footer_from:"from",
                footer_to:"to",
                footer_links:"Links",
                footer_social:"Social links",
                footer_copyright:"All rights reserved.",
                about_advantages:"Our advantages",
                counter1:"retail outlets in the capital Ashgabat",
                counter2:"retail outlets throughout Turkmenistan",
                counter3:"warehouse premises",
                counter4:"coverage of the country's retail networks",
                counter5:"Mitsubishi Fuso Canter",
                kw:"sq. m.",
                about_company: "BNB Group company",
                about_hero:"\"BNB Group\" has established itself as a prominent player in the distribution sector of Turkmenistan, boasting over a decade of successful operations. Our commitment to excellence and innovation has enabled us to build a robust network of partnerships with leading global manufacturers, ensuring that we provide high-quality food products to meet the diverse needs of our customers. This strategic focus allows us to dedicate our efforts to the development and promotion of partner brands, fostering strong relationships that drive mutual growth and success. Our team of experienced professionals is dedicated to understanding market trends and consumer preferences, which empowers us to tailor our distribution strategies effectively and maximize our partners' market presence. Our logistics and supply chain management systems are designed to optimize efficiency and reliability, enabling us to deliver products promptly and maintain the highest standards of quality. We actively seek out partnerships with manufacturers who share our values and dedication to ethical practices, ensuring that our operations contribute positively to the communities we serve. Our vision is to be the leading distribution company in the region, recognized for our quality products, exceptional service, and unwavering commitment to our partners and customers.",
                about_more:"Learn more",
                about_text: "BNB Group Company currently occupies a leading position in the distribution of food products of famous brands of Turkmenistan, Russia, Ukraine and Kazakhstan.\n" +
                    "A well-coordinated team of highly qualified specialists at the highest level ensures proper storage conditions and timely delivery of products of declared quality in the required quantity. Created more than 100 jobs.\n" +
                    "Dynamically developing, the company applies the latest technologies for managing of business processes, and successfully implements international standards of control and quality for distribution of all product groups.\n" +
                    "The geography of sales of BNB Group Company is constantly expanding. Currently, the company sells products in all regions of Turkmenistan. Having 4500 retail outlets in the country and 1600 retail outlets in the capital Ashgabat, the company supplies food to major retail networks and cooperates with national retailers.\n" +
                    "The mission of the company is to make distribution in Turkmenistan as efficient and harmonious as possible, contributing to the development of regions of its presence.",
                product_name:"Product name",
                product_brand:"Brand",

                implementers_text:"Thanks to the strong brands with which we currently have dealer agreements, as well as our team of experienced regional and leading managers, we are ready to offer you a high service with well-built logistics, are ready to jointly manage your inventory and offer an improved discount system to our future partners for the sake of mutually beneficial relationship.",



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
                home_advantages: "Наши преимущества",
                home_advantages_title1:"Широкий ассортимент продукции",
                home_advantages_text1:"\"BNB Group\" предлагает разнообразие товаров, что позволяет клиентам находить все необходимые продукты в одном месте.",
                home_advantages_title2:"Конкурентоспособные цены",
                home_advantages_text2:"Благодаря оптимизированным процессам закупок и логистики, компания может предложить своим клиентам привлекательные цены.",
                home_advantages_title3:"Высокое качество обслуживания",
                home_advantages_text3:"\"BNB Group\" фокусируется на удовлетворении потребностей клиентов, предоставляя квалифицированную поддержку и консультации.",
                home_advantages_title4:"Современные технологии",
                home_advantages_text4:"Использование современных технологий и систем управления запасами позволяет компании эффективно управлять логистикой и минимизировать время доставки.",
                home_advantages_title5:"Надежные партнерские отношения",
                home_advantages_text5:"\"BNB Group\" устанавливает долгосрочные отношения с производителями и клиентами, что способствует стабильности и доверия в бизнесе.",
                home_advantages_title6:"Гибкость и адаптивность",
                home_advantages_text6:"Компания быстро реагирует на изменения рынка и потребностей клиентов, что позволяет ей оставаться конкурентоспособной и актуальной.",
                partners_page:"Партнеры и мнения",
                partners1_title:"Barline",
                partners1_text:"BNB Group — это надежный партнер, который демонстрирует высокий уровень профессионализма и ответственности в своей работе. Мы сотрудничаем с ними и всегда получаем качественные услуги и поддержку. Их команда оперативно реагирует на запросы и предлагает оптимальные решения, что делает совместную работу продуктивной и приятной. Рекомендуем BNB Group как надежного партнера в бизнесе.",
                partners2_title:"Peykam",
                partners2_text:"\"Работа с BNB Group стала настоящим открытием для нашей компании. Профессионализм команды, внимательное отношение к нашим потребностям и высокое качество предоставляемых услуг произвели на нас впечатление. Мы ценим их инновационный подход и гибкость в решениях. Рекомендуем BNB Group как надежного партнера для бизнеса!\" - Peýkam",
                partners3_title:"Granum",
                partners3_text:"Компания \"BNB Group\" зарекомендовала себя как надежный партнер в сфере бизнеса. Мы сотрудничаем с ними уже несколько лет, и их профессионализм, оперативность и внимание к деталям всегда впечатляют. Команда \"BNB Group\" демонстрирует высокий уровень компетентности и готовность решать любые задачи. Рекомендуем их как надежного поставщика услуг! — Granum.",
                contact_form:"Контактная форма",
                contact_email:"Адрес электронной почты",
                contact_message:"Сообщение",
                contact_submit:"Отправить",
                contact_address:"Туркменистан, Ашхабад, улица Назара Гуллаева",
                footer_monday:"Пн",
                footer_friday:"Пт",
                footer_from:"с",
                footer_to:"до",
                footer_links:"Ссылки",
                footer_social:"Социальные ссылки",
                footer_copyright:"Все права защищены",
                about_advantages:"Наши преимущества",
                counter1:"торговых точек в столице Ашхабаде",
                counter2:"торговых точек по всему Туркменистану",
                counter3:"складских помещений",
                counter4:"покрытие ритейл сетей страны",
                counter5:"Mitsubishi Fuso Canter",
                kw:"кв. м.",
                about_company: "Компании \"BNB Group\"",
                about_hero:"«BNB Group» зарекомендовала себя как видный игрок в секторе дистрибуции Туркменистана, имея за плечами более десяти лет успешной работы. Наша приверженность совершенству и инновациям позволила нам создать надежную сеть партнерских отношений с ведущими мировыми производителями, гарантируя, что мы поставляем высококачественные продукты питания для удовлетворения разнообразных потребностей наших клиентов. Этот стратегический фокус позволяет нам направлять наши усилия на развитие и продвижение партнерских брендов, способствуя прочным отношениям, которые способствуют взаимному росту и успеху. Наша команда опытных профессионалов стремится понимать рыночные тенденции и предпочтения потребителей, что позволяет нам эффективно адаптировать наши стратегии дистрибуции и максимизировать присутствие наших партнеров на рынке. Наши системы логистики и управления цепочками поставок разработаны для оптимизации эффективности и надежности, что позволяет нам оперативно доставлять продукцию и поддерживать самые высокие стандарты качества. Мы активно ищем партнерские отношения с производителями, которые разделяют наши ценности и приверженность этическим нормам, гарантируя, что наша деятельность вносит положительный вклад в сообщества, которым мы служим. Наше видение — быть ведущей дистрибьюторской компанией в регионе, признанной за нашу качественную продукцию, исключительный сервис и непоколебимую приверженность нашим партнерам и клиентам.",
                about_more:"Узнать больше",
                about_text: "Компания BNB Group в настоящее время занимает лидирующие позиции в дистрибуции продуктов питания известных торговых марок Туркменистана, России, Украины и Казахстана.\n" +
                    "Слаженная команда высококвалифицированных специалистов на самом высоком уровне обеспечивает надлежащие условия хранения и своевременную поставку продукции заявленного качества в необходимом количестве. Создано более 100 рабочих мест.\n" +
                    "Динамично развиваясь, компания применяет новейшие технологии управления бизнес-процессами, успешно внедряет международные стандарты контроля и качества для дистрибуции всех групп товаров.\n" +
                    "География продаж компании BNB Group постоянно расширяется. В настоящее время компания реализует продукцию во всех регионах Туркменистана. Имея 4500 торговых точек по стране и 1600 торговых точек в столице Ашхабаде, компания поставляет продукты питания в крупные торговые сети и сотрудничает с национальными ритейлерами.\n" +
                    "Миссия компании — сделать дистрибуцию в Туркменистане максимально эффективной и слаженной, способствуя развитию регионов своего присутствия.",
                product_name:"Имя продукта",
                product_brand:"Бренд",

                implementers_text:"Благодаря сильным брендам, с которыми на данный момент у нас есть дилерские соглашения, а также нашей команде опытных региональных и ведущих менеджеров, мы готовы предложить Вам высокий сервис с четко выстроенной логистикой, готовы совместно управлять Вашими товарными запасами и предложить улучшенную систему скидок нашим будущим партнерам ради взаимовыгодных отношений.",



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
                home_advantages: "Biziň aýratynlyklarymyz",
                home_advantages_title1:"Önümleriň giň görnüşi",
                home_advantages_text1:"\"BNB Group\" müşderilere ähli zerur önümleri bir ýerde tapmaga mümkinçilik berýän dürli önümleri hödürleýär.",
                home_advantages_title2:"Bäsdeşlige ukyply bahalar",
                home_advantages_text2:"Optimallaşdyrylan satyn alyş we logistika amallary netijesinde kompaniýa müşderilerine özüne çekiji bahalary hödürläp biler.",
                home_advantages_title3:"Ýokary hilli hyzmat",
                home_advantages_text3:"\"BNB Group\", hünärli goldaw we maslahat bermek arkaly müşderileriň isleglerini kanagatlandyrmaga ünsi jemleýär.",
                home_advantages_title4:"Häzirki zaman tehnologiýalary",
                home_advantages_text4:"Döwrebap tehnologiýalary we inwentar dolandyryş ulgamlaryny ulanmaklyk arkaly kompaniýa logistikany netijeli dolandyrmaga we gowşuryş wagtyny azaltmaga mümkinçilik berýär.",
                home_advantages_title5:"Ygtybarly hyzmatdaşlyk",
                home_advantages_text5:"\"BNB Group\" öndürijiler we müşderiler bilen uzak möhletleýin gatnaşyklary ýola goýýar, bu bolsa durnuklylyga we işewürlige ynam döredýär.",
                home_advantages_title6:"Çeýeligi we uýgunlaşmagy",
                home_advantages_text6:"Kompaniýa, bazardaky üýtgeşmelere we müşderileriň zerurlyklaryna çalt jogap berýär, bu bolsa bäsdeşlik we ähmiýetli bolmaga mümkinçilik berýär.",
                partners_page:"Hyzmatdaşlar we pikirleri",
                partners1_title:"Barline",
                partners1_text:"BNB Group, işinde ýokary hünär derejesini we jogapkärçiligi görkezýän ygtybarly hyzmatdaşdyr. Biz olar bilen hyzmatdaşlyk edýäris we hemişe ýokary hilli hyzmatlary we goldawy alýarys. Topar ýüz tutmalara çalt jogap berýär we bilelikde işlemegi öndürijilikli we lezzetli edýän iň amatly çözgütleri hödürleýär. BNB Group ygtybarly iş hyzmatdaşy hökmünde maslahat berýäris.",
                partners2_title:"Peýkam",
                partners2_text:"\"BNB Group bilen işlemeklik biziň kompaniýamyz üçin hakyky açyş boldy. Toparyň ussatlygy, zerurlyklarymyza ünsli garamagy we hödürlenýän hyzmatlaryň ýokary hilli bolmagy bize täsir etdi. Olaryň innowasiýa çemeleşmesine we çözgütleriň çeýeligine ýokary baha berýäris. BNB Group ygtybarly iş hyzmatdaşy hökmünde maslahat berýäris! \" - Peýkam",
                partners3_title:"Granum",
                partners3_text:"\"BNB Group\" kompaniýasy, işewürlik ugrunda ygtybarly hyzmatdaş hökmünde özüni görkezdi. Birnäçe ýyl bäri olar bilen işleýäris we olaryň hünär ussatlygy, netijeliligi we jikme-jikliklere ünsi hemişe täsir galdyrýar. BNB Topar topary ýokary derejeli başarnyk we islendik meseläni çözmäge taýýardygyny görkezýär. Ygtybarly hyzmat üpjün ediji hökmünde maslahat berýäris! - Granum.",
                contact_form:"Habarlaşmak üçin forma",
                contact_email:"E-poçta salgysy",
                contact_message:"Hatyňyz",
                contact_submit:"Ugratmak",
                contact_address:"Türkmenistan, Aşgabat, Nazar Güllaýew köçesi",
                footer_monday:"Du",
                footer_friday:"An",
                footer_from:"-dan",
                footer_to:"çenli",
                footer_links:"Salgylar",
                footer_social:"Sosial baglanyşyklar",
                footer_copyright:"Ähli hukuklar goraglydyr.",
                about_advantages:"Biziň artykmaçlyklarymyz",
                counter1:"paýtagtymyz Aşgabatda söwda nokatlary",
                counter2:"Türkmenistanda söwda nokatlary",
                counter3:"ammarlar",
                counter4:"torlary gurşap alýar",
                counter5:"Mitsubishi Fuso Canter",
                kw:"kw. m.",
                about_company: "\"BNB Group\" kompaniýasy barada",
                about_hero:"\"BNB Group\" 10 ýyl üstünlikli işleri alyp barýar, Türkmenistanyň paýlaýyş pudagynda görnükli oýunçy hökmünde özüni görkezdi. Üstünlige we innowasiýa ygrarlylygymyz, müşderilerimiziň dürli isleglerini kanagatlandyrmak üçin ýokary hilli azyk önümlerini üpjün etmeklik bilen dünýäniň öňdebaryjy öndürijileri bilen berk hyzmatdaşlygy gurmaga mümkinçilik berdi. Bu strategiki ugur, öz güýjümizi hyzmatdaş markalaryny ösdürmäge we tanatmaga, özara ösüşe we üstünlige itergi berýän berk gatnaşyklary ösdürmäge bagyşlamaga mümkinçilik berýär. Tejribeli hünärmenler toparymyz, paýlanyş strategiýalarymyzy netijeli düzmäge we hyzmatdaşlarymyzyň bazardaky gatnaşygyny hasam artdyrmaga mümkinçilik berýän bazar meýillerine we sarp edijileriň isleglerine düşünmäge bagyşlanýar. Logistika we üpjünçilik zynjyryny dolandyrmak ulgamlarymyz önümleri çalt eltip bermäge we ýokary hilli standartlary saklamaga mümkinçilik berýän netijeliligi we ygtybarlylygy optimizirlemek üçin döredildi. Amallarymyzyň hyzmat edýän jemgyýetlerimize oňyn goşant goşmagyny üpjün edip, gymmatlyklarymyzy we ahlak amallaryna wepalylygymyzy paýlaşýan öndürijiler bilen hyzmatdaşlygy işjeň gözleýäris. Biziň gözýetimimiz, ýokary hilli önümlerimiz, ajaýyp hyzmatymyz we hyzmatdaşlarymyza we müşderilerimize üýtgewsiz ygrarlylygy bilen tanalýan sebitde öňdebaryjy paýlaýyş kompaniýasy bolmakdyr.",
                about_more:"Giňişleýin",
                about_text: "BNB Group Company häzirki wagtda Türkmenistan, Russiýa, Ukraina we Gazagystanyň meşhur markalarynyň azyk önümlerini paýlamakda öňdebaryjy orny eýeleýär.\n" +
                    "Iň ýokary derejedäki ýokary hünärli hünärmenleriň oňat utgaşdyrylan topary, saklanyş şertlerini we yglan edilen hilli önümleriň zerur mukdarda öz wagtynda iberilmegini üpjün edýär. 100-den gowrak iş ýerini döretdi.\n" +
                    "Dinamiki taýdan ösýän kompaniýa, iş amallaryny dolandyrmak üçin iň täze tehnologiýalary ulanýar we ähli önüm toparlaryny paýlamak üçin halkara gözegçilik we hil standartlaryny üstünlikli durmuşa geçirýär.\n" +
                    "BNB Group Company kompaniýasynyň satuwynyň geografiýasy yzygiderli giňelýär. Häzirki wagtda bu kompaniýa Türkmenistanyň ähli sebitlerinde önüm satýar. Countryurtda 4500 söwda nokady we paýtagt Aşgabatda 1600 söwda nokady bar, bu kompaniýa esasy bölekleýin torlara azyk berýär we milli bölek satyjylar bilen hyzmatdaşlyk edýär.\n" +
                    "Kompaniýanyň wezipesi, Türkmenistanda paýlanyşyny mümkin boldugyça netijeli we sazlaşykly etmek, bar bolan sebitleriniň ösmegine goşant goşýar.",
                product_name:"Önümiň ady",
                product_brand:"Brend",

                implementers_text:"Häzirki wagtda diler şertnamalarymyz bolan güýçli markalaryň, şeýle hem tejribeli sebitleýin we öňdebaryjy menejerler toparymyzyň kömegi bilen size anyk gurluşly logistika bilen ýokary hyzmat bermäge taýýardyrys, inwentarlaryňyzy bilelikde dolandyrmaga we kämilleşdirilen ulgamy hödürlemäge taýýardyrys özara peýdaly gatnaşyklar üçin geljekki hyzmatdaşlarymyza arzanladyşlar.",


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