const nice = [window.innerWidth, window.innerHeight];

const homePageSwiper = new Swiper("#homePageSwiper", {
  effect: "creative",
  allowTouchMove: false,
  speed: 500,
  // autoHeight: true,

  navigation: {
    nextEl: ".toMainPage",
    prevEl: ".toHomePage",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

let mainSwiper;
let painBlockSwiper;
let possibilitiesBlockSwiper;
let implementationBlockSwiper;

function initSwipersOnPc() {
  if (window.innerWidth >= 1200) {
    mainSwiper = new Swiper("#mainSwiper", {
      direction: "vertical",
      // freeMode: true,
      speed: 500,
      mousewheel: true,
      allowTouchMove: false,
    });
  } else if (window.innerWidth < 1200 && mainSwiper) {
    mainSwiper.destroy(true, true);
    mainSwiper = undefined;
  }
}

function initSwipersOnTablet() {
  if (window.innerWidth <= 768) {
    painBlockSwiper = new Swiper("#painBlockSwiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
      },
      breakpoints: {
        769: {
          direction: "vertical",
          slidesPerView: 3,
        },
      },
    });
  } else if (
    window.innerWidth > 768 &&
    (painBlockSwiper, possibilitiesBlockSwiper)
  ) {
    painBlockSwiper.destroy(true, true);
    painBlockSwiper = undefined;
  }
}

function initSwipersOnMobile() {
  if (window.innerWidth <= 525) {
    possibilitiesBlockSwiper = new Swiper("#possibilitiesBlockSwiper", {
      direction: "horizontal",
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-pagination",
      },
    });
    implementationBlockSwiper = new Swiper("#implementationBlockSwiper", {
      direction: "horizontal",
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  } else if (
    window.innerWidth > 525 &&
    possibilitiesBlockSwiper &&
    implementationBlockSwiper
  ) {
    possibilitiesBlockSwiper.destroy(true, true);
    possibilitiesBlockSwiper = undefined;
    implementationBlockSwiper.destroy(true, true);
    implementationBlockSwiper = undefined;
  }
}

initSwipersOnPc();
initSwipersOnTablet();
initSwipersOnMobile();

// Инициализация при изменении размера окна
window.addEventListener("resize", () => {
  initSwipersOnPc;
  initSwipersOnTablet;
  initSwipersOnMobile;

  // alert(`${nice[0]}, ${nice[1]}, ${window.innerWidth}, ${window.innerHeight}`)

  // if (nice[0]  <= window.innerWidth) {
  //   location.reload();

  // }
  // if (nice[0]  >= window.innerWidth) {
  //   location.reload();

  // }
  // console.log(nice, window.innerWidth, window.innerHeight)
});

const mainInfo = [
  {
    name: "Продажи",
    pains: [
      "Низкая эффективность управления лидами и сделками приводит к потере потенциальных клиентов, упущенным продажам и упущенным возможностям для бизнеса.",
      "Bitrix24 – это мощная CRM-система, которая автоматизирует процесс управления лидами и сделками, улучшая их отслеживание и повышая конверсии. Используйте Bitrix24, чтобы избежать потерь клиентов и увеличить продажи.",
      "Отсутствие точной аналитики и отчетности затрудняет оценку эффективности продаж и принятие стратегических решений, что негативно сказывается на развитии бизнеса.",
      "Bitrix24 предлагает детализированные отчеты и аналитику в реальном времени, что позволяет владельцам бизнеса повышать точность решений и добиваться улучшения результатов продаж. С помощью Bitrix24 вы сможете анализировать ключевые метрики и оптимизировать свои бизнес-процессы.",
      "Разрозненные каналы коммуникации снижают эффективность взаимодействия с клиентами, что ведет к потере продаж и ухудшению лояльности клиентов.",
      "С Bitrix24 вы объедините все каналы коммуникации – от звонков и электронных писем до мессенджеров и социальных сетей – в одной удобной системе. Это улучшит управление взаимодействием с клиентами и повысит продуктивность ваших сотрудников, обеспечивая рост продаж и удовлетворенности клиентов.",
    ],
    possibilitiesHeader: [
      "Привлечение новых клиентов",
      "Полный контроль",
      "Прием заказов",
      "Автоматическая генерация документов",
    ],

    possibilities: [
      "Автоматизированная система увеличивает конверсию до 500%: Используйте проверенные решения для роста вашего бизнеса. Наша система не только снижает затраты на зарплату, но и значительно увеличивает приток новых клиентов. Подписывайте договоры с ЭЦП прямо в системе за считанные минуты. Все результаты звонков и встреч фиксируются и доступны для подробной отчетности, что помогает эффективно управлять процессами.",
      "Контакт-центр для интеграции всех источников заказов: Управляйте заказами из WhatsApp, Telegram, Instagram, сайта, Kaspi, Ozon и Satu в одной системе. Получите полный контроль над коммуникацией и улучшите анализ эффективности сотрудников. Оптимизируйте распределение задач и следите за результатами работы без необходимости покидать офис.",
      "Сократите время обработки заявок до 2 минут: Автоматизация процессов с помощью роботов ускоряет работу и поддерживает ваших сотрудников. Непрерывная цепочка клиент-менеджер-склад-курьер гарантирует быстрое и качественное обслуживание ваших клиентов.",
      "Наша система создает все необходимые документы — внутренние накладные, коммерческие предложения, договоры, счета на оплату, накладные и акты выполненных работ — за два клика. Исключите ошибки и ускорьте процесс оформления документов прямо в системе, что позволяет экономить время и повышать продуктивность.",
    ],
  },


  {
    name: "Розница",
    pains: ["", "", "", "", "", ""],
    possibilitiesHeader: ["", "", "", ""],
    possibilities: ["", "", "", ""],
  },

  {
    name: "Строительство",
    pains: ["", "", "", "", "", ""],
    possibilitiesHeader: ["", "", "", ""],
    possibilities: ["", "", "", ""],
  },

  {
    name: "Производство",

    pains: [
      " Низкая эффективность управления производственными процессами и недостаток контроля приводят к задержкам и увеличению издержек, что снижает прибыльность компании.",
      " Bitrix24 для производства автоматизирует управление производственными процессами и контроль заказов, что помогает сократить задержки и снизить издержки. Оптимизируйте производство и увеличьте свою прибыльность с помощью Bitrix24 уже сегодня!",
      "Отсутствие точной аналитики и отчетности затрудняет мониторинг ключевых показателей эффективности (KPI) и принятие обоснованных решений, что ослабляет конкурентные позиции компании.",
      " Bitrix24 предлагает мощные инструменты для аналитики и отчетности, которые позволяют точно отслеживать ключевые показатели эффективности (KPI) и оптимизировать производственные процессы. Повышайте конкурентоспособность и улучшайте производственные результаты с Bitrix24!",
      "Разрозненные каналы коммуникации между подразделениями создают путаницу и замедляют работу, что снижает общую продуктивность компании.",
      "Bitrix24 для производственных компаний объединяет все каналы коммуникации и управление процессами в одной системе. Это помогает устранить путаницу и повысить продуктивность работы сотрудников. Повышайте эффективность и улучшайте взаимодействие между подразделениями с Bitrix24!",
    ],
    possibilitiesHeader: [
      "Калькуляция изделий",
      "Планирование производства",
      "Закуп и прием сырья и упаковочного материала",
      "Аналитика",
    ],
    possibilities: [
      "Используйте наш модуль для формирования рецептов: Модуль привязывает упаковку и расходные материалы, автоматически рассчитывая затраты на электроэнергию и рабочую силу. Актуальные цены на сырье и упаковку обновляются на основе данных о закупках, что позволяет точно определить прибыльность каждого изделия. Оптимизируйте затраты и увеличьте рентабельность производства с помощью нашей системы.",
      "Оптимизируйте рабочие процессы и контролируйте эффективность сотрудников: Наша система упрощает организацию работы, предотвращая излишнюю нагрузку и обеспечивая своевременное выполнение задач. Автоматизированное управление позволяет руководству получать уведомления о любых нарушениях или несоответствиях, что способствует повышению эффективности и производительности команды.",
      "Эффективное управление закупками с канбаном и автогенерацией документов: Используйте канбан и автоматическую генерацию документов для упрощения процесса закупок. Когда остатки на складе достигают минимального уровня, система автоматически инициирует заказ и отправляет его поставщику. После подтверждения поставки информация добавляется в календарь кладовщика, что обеспечивает полный контроль и своевременное пополнение запасов.",
      "Полная информация о производственном процессе в реальном времени: Получайте детализированные данные о производственном процессе с помощью нашей системы. Отслеживайте занятость сотрудников, эффективность, количество и причины брака, а также обращения клиентов. Эти данные помогают принимать обоснованные решения и значительно улучшать общую эффективность производства.",
    ],
  },

  {
    name: "Медицина",

    pains: [
      "Низкая эффективность управления записями пациентов и медицинскими процессами ведет к длительным ожиданиям и неудовлетворенности пациентов, что ухудшает качество медицинского обслуживания и может привести к потере клиентов.",
      "Bitrix24 для медицинских учреждений автоматизирует управление записями и медицинскими процессами, что снижает время ожидания и повышает удовлетворенность пациентов. Оптимизируйте медицинское обслуживание и улучшите пациентский опыт с помощью Bitrix24!",
      "Отсутствие точной аналитики и отчетности затрудняет мониторинг эффективности медицинского учреждения и принятие верных решений, что приводит к снижению качества обслуживания и финансовым потерям.",
      "Bitrix24 для медицины предоставляет мощные инструменты для аналитики и отчетности, которые помогают точно оценивать эффективность работы медицинского учреждения. Увеличьте качество обслуживания и улучшите результаты с помощью наших аналитических инструментов!",
      "Разрозненные каналы коммуникации между медицинским персоналом и пациентами создают путаницу и замедляют процессы, что снижает продуктивность и эффективность работы учреждения.",
      "Bitrix24 для клиник объединяет все каналы коммуникации и управление медицинскими процессами в одной системе, устраняя путаницу и значительно повышая продуктивность. Повышайте эффективность и улучшайте коммуникацию в вашем медицинском учреждении с интегрированным решением Bitrix24!",
    ],
    possibilitiesHeader: [
      "Запись на прием",
      "История пациента и рекомендации",
      "Учет лекарств и расходников",
      "Аналитика",
    ],
    possibilities: [
      "Замените традиционную книгу записей с помощью нашей системы: Пациенты могут записываться на прием через удобную онлайн-форму, которая показывает только свободные слоты и адаптирована под ваш дизайн. Автоматическая регистрация записей у врачей и напоминания пациентам в день приема упрощают управление расписанием. Легко отменяйте записи и обеспечьте эффективную организацию приемов.",
      "Безопасное хранение и мгновенный обмен данными пациентов: Все данные пациентов хранятся в системе в соответствии с требованиями законодательства. Врачи имеют доступ к полной истории пациента в удобном формате. Синхронизация с 1С Медициной обеспечивает мгновенный обмен данными, а рекомендации формируются за минуту и отправляются на печать или в WhatsApp пациента.",
      "Эффективный складской учет для медицинских материалов: Наша система автоматически привязывает лекарства и расходные материалы к каждому лечению. При назначении лечения материалы списываются, а система уведомляет о необходимости пополнения запасов. Автоматическая отправка заявок представителям фармацевтических компаний упрощает управление запасами.",
      "Отчеты в реальном времени с помощью BI-конструктора: Все данные сохраняются и доступны в отчетах в реальном времени. Используйте BI-конструктор для создания индивидуальных отчетов для врачей, руководителей и собственников клиники. Это обеспечивает полную прозрачность и контроль над деятельностью медицинского учреждения.",
    ],
  },

  {
    name: "Реклама",
    pains: [
      "Неэффективное управление рекламными кампаниями и трудности в отслеживании их результатов приводят к упущенным возможностям и перерасходу рекламного бюджета.",
      "Bitrix24 для управления рекламными кампаниями автоматизирует процессы и обеспечивает детализированное отслеживание результатов. Это позволяет эффективно использовать рекламный бюджет и значительно улучшить результаты каждой кампании.",
      "Недостаток точной аналитики и отчетности затрудняет оценку возврата инвестиций (ROI) от рекламных кампаний, что мешает корректировке стратегий и снижает их эффективность.",
      " Bitrix24 предоставляет мощные инструменты для аналитики и отчетов, которые помогают точно оценивать ROI рекламных кампаний. С Bitrix24 вы сможете оптимизировать маркетинговые стратегии и достигать максимальных результатов.",
      "Разрозненные каналы коммуникации и инструменты управления рекламными проектами приводят к путанице и потере времени, снижая продуктивность рекламной команды.",
      "Bitrix24 для рекламных агентств объединяет все каналы коммуникации и инструменты управления проектами в одной системе. Это обеспечивает эффективное взаимодействие и значительно повышает продуктивность вашей рекламной команды.",
    ],
    possibilitiesHeader: [
      "Прием заказов",
      "Привлечение новых клиентов",
      "Автоматическая генерация документов",
      "Обновление рекламных материалов",
    ],
    possibilities: [
      "Сократите время обработки рекламных заявок до 1-2 минут с помощью автоматизации процессов в Bitrix24 для рекламных агентств. Роботы оптимизируют работу команды, создавая непрерывную цепочку клиент-менеджер-агент-кампания-клиент, что гарантирует быстрое и качественное обслуживание. Автоматизация заказов помогает минимизировать задержки и упростить управление рекламными кампаниями.",
      "Bitrix24 увеличивает конверсию до 70-500% благодаря автоматизации процессов. Минимальные затраты на зарплаты сочетаются с существенным увеличением числа клиентов. Используйте ЭЦП для подписания договоров прямо в системе за минуту. Все результаты рекламных звонков и встреч фиксируются и доступны для детальной отчетности, что помогает оптимизировать рекламные стратегии.",
      "Bitrix24 автоматизирует создание всех необходимых рекламных документов, таких как коммерческие предложения, договоры, счета и акты выполненных работ. Документы формируются за два клика, что исключает ошибки и упрощает документооборот. Автоматизация документооборота помогает улучшить управление рекламными проектами.",
      "Автоматизированная система обновления рекламных материалов от Bitrix24 исключает ошибки и обеспечивает актуальность кампаний. Любое изменение мгновенно передается команде и обновляется в рекламных кампаниях. Материалы и акции генерируются автоматически и адаптируются под ваш уникальный дизайн, что делает процесс управления маркетингом еще более эффективным.",
    ],
  },

  {
    name: "Образование",

    pains: [
      "Низкая эффективность управления учебными процессами и расписаниями приводит к путанице и потере времени в образовательных учреждениях.",
      "Bitrix24 для учебных заведений автоматизирует управление учебными процессами и расписаниями, что устраняет путаницу и повышает эффективность работы школ и вузов.",
      "Отсутствие точной аналитики и отчетности затрудняет оценку успеваемости учеников и эффективность образовательных программ, что мешает принятию обоснованных решений.",
      "Bitrix24 для образования предлагает мощные инструменты для аналитики и отчетов, позволяя точно оценивать успеваемость учеников и эффективность образовательных программ, что помогает принимать стратегически верные решения.",
      "Разрозненные каналы коммуникации между учениками, преподавателями и администрацией приводят к недопониманию и упущенным сообщениям, снижая продуктивность образовательного процесса.",
      "Bitrix24 объединяет все каналы коммуникации в одной платформе, обеспечивая четкую связь между учениками, преподавателями и администрацией. Это улучшает взаимодействие и повышает общую продуктивность в образовательных учреждениях.",
    ],
    possibilitiesHeader: [
      "Обучение учеников",
      "Пополнение курсов",
      "Учебный материал",
      "Документация",
    ],
    possibilities: [
      "Персонализированные канбан-доски и образовательные материалы: С помощью Bitrix24 для образования создавайте индивидуальные канбан-доски для каждого курса, внедряйте учебные материалы и тесты для эффективного обучения. Оцените успех учеников по освоенным навыкам и поддержите учителей с системой, которая гарантирует успех в обучении.",
      "Запуск рекламных кампаний и рассылок с маркетинговым кабинетом: Запускайте рекламные кампании и рассылки быстро и эффективно с помощью маркетингового кабинета Bitrix24. Контакт-центр объединяет все источники коммуникации, что устраняет упущения и обеспечивает эффективное взаимодействие с потенциальными учениками.",
      "База знаний для стандартизации учебных материалов: Используйте конструктор учебных материалов для стандартизации и улучшения методик обучения. Предотвращайте упущения учителей и обеспечивайте их постоянное повышение квалификации. Bitrix24 для образования помогает гарантировать высокое качество обучения и эффективное управление образовательным процессом.",
      "Организация хранения данных в Bitrix Диске: Храните тесты, результаты, аттестаты и сертификаты безопасно в Bitrix Диске. Создавайте разделы для каждого курса и организуйте удобные хранилища данных для учеников. Настройте права доступа, чтобы предотвратить потери и злоупотребления, и обеспечьте доступ к данным с любого устройства для нужных лиц.",
    ],
  },

  {
    name: "Автосервисы",
    pains: [
      "Низкая эффективность управления заказами и записями в автосервисе приводит к длительному времени ожидания и потере клиентов, что значительно снижает прибыльность бизнеса.",
      "Bitrix24 для автосервисов автоматизирует управление заказами и записями, что помогает минимизировать время ожидания и предотвращает потерю клиентов. Оптимизируйте бизнес-процессы и увеличьте прибыльность вашего автосервиса с Bitrix24 уже сейчас!",
      "Отсутствие точной аналитики и отчетности усложняет оценку работы автосервиса и принятие важных бизнес-решений, что приводит к неэффективному управлению и упущенным возможностям.",
      "Bitrix24 предлагает мощные инструменты аналитики и отчетности для автосервисов, которые позволяют точно отслеживать эффективность работы и оптимизировать бизнес-процессы. Повышайте конкурентоспособность и улучшайте результаты своего автосервиса с Bitrix24!",
      "Разрозненные каналы коммуникации с клиентами и между сотрудниками создают хаос и замедляют работу, что снижает общую продуктивность автосервиса.",
      "Bitrix24 для автосервисов объединяет все каналы коммуникации и управление процессами в одной интегрированной системе. Это устраняет хаос и значительно повышает продуктивность автосервиса. Повышайте эффективность и улучшайте взаимодействие в вашем бизнесе с помощью Bitrix24!",
    ],
    possibilitiesHeader: [
      "Запись на обслуживание автомобиля",
      "Поиск запчастей",
      "Автоматический расчет пробега",
      "Складской учет запчастей",
    ],
    possibilities: [
      "Автоматизированное управление записями: Упрощайте процесс записи клиентов с помощью нашей системы. Записи осуществляются через удобную онлайн-форму, адаптированную под ваш дизайн, которая отображает только свободные слоты. Автоматическая регистрация у мастеров и система отправки напоминаний в день обслуживания обеспечивают точность и удобство для клиентов. Легко отменяйте записи при необходимости, создавая максимальный комфорт для ваших клиентов.",
      "Автоматизация поиска лучших цен с помощью парсера: Ускорьте процесс поиска самых выгодных предложений с помощью нашего парсера цен на запчасти. Он автоматически анализирует цены на различных сайтах и предоставляет отчет о лучших предложениях по запросу конкретной запчасти. Это значительно экономит время и снижает нагрузку на менеджеров, обеспечивая более эффективное управление закупками.",
      "Автоматические уведомления для клиентов: Увеличьте лояльность и удовлетворенность клиентов с помощью автоматических напоминаний. Наша система отправляет сообщения на WhatsApp о необходимости замены масла и других регулярных процедур. Это улучшает клиентский опыт и выделяет ваш автосервис среди конкурентов.",
      "Автоматизированный учет запчастей и материалов: Эффективно управляйте запасами запчастей и жидкостей с помощью автоматизированного складского учета. Мастера выбирают необходимые запчасти, масла и материалы из удобного списка, а система отображает актуальные остатки и контролирует расходы. Это гарантирует полный контроль над запасами, предотвращает пропажи и упрощает управление складом.",
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const preloader = document.querySelector("#logo_preloader");
  const openConsultationPage = document.querySelectorAll(".open_consultation");
  const hideConsultationPage = document.querySelectorAll(".hide_consultation");
  const consultationPage = document.querySelector(".consultation");
  const homePage_cards = document.querySelector(".homepage__main");
  const painsText = document.querySelectorAll(".pain-block__main");
  const possibilitiesHead = document.querySelectorAll(
    ".possibilities-block__head"
  );
  const possibilitiesText = document.querySelectorAll(
    ".possibilities-block__main"
  );

  homePage_cards.addEventListener("click", (e) => {
    let btn = e.target.closest(".toMainPage");
    if (btn) {
      console.log("начало функции");

      let btnId = btn.getAttribute("data-id");
      let findedInfo = mainInfo[btnId];

      painsText.forEach((text, i) => {
        text.innerText = findedInfo.pains[i];
      });
      possibilitiesText.forEach((text, i) => {
        text.innerText = findedInfo.possibilities[i];
      });
      possibilitiesHead.forEach((text, i) => {
        text.innerText = findedInfo.possibilitiesHeader[i];
      });

      console.log(findedInfo);
    }
  });

  openConsultationPage.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.disabled = true;

      setTimeout(() => {
        btn.disabled = false;
      }, 500);
      consultationPage.classList.toggle("active");
    });
  });
  hideConsultationPage.forEach((btn) => {
    btn.addEventListener("click", () => {
      consultationPage.classList.toggle("active");
    });
  });

  video.addEventListener("canplaythrough", function () {
    preloader.style.display = "none";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Находим блок #mainSwiper
//   const mainSwiper = document.querySelector("#mainSwiper");

//   if (window.innerWidth < 1200) {
//     // Находим все элементы с классом replace
//     const replaceElements = mainSwiper.querySelectorAll(".replace");

//     // Находим блок #placeForMobileContent
//     const placeForMobileContent = document.querySelector(
//       "#placeForMobileContent"
//     );

//     // Перемещаем элементы в #placeForMobileContent
//     replaceElements.forEach(function (element) {
//       placeForMobileContent.appendChild(element);
//     });

//     // Удаляем блок #mainSwiper
//     mainSwiper.remove();
//   }
// });
