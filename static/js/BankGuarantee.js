 // Данные для таблиц
 const konkursData = [
    {
      subj: "Амурская область",
      num: "1.",
      operator: "ООО \"АВТОСИТИ\"",
      zone: "Кластер № 2",
      date: "31.12.2024 / 114 дней"
    },
    {
      subj: "Кабардино-Балкарская Р.",
      num: "2.",
      operator: "ООО «ЭКОЛОГИСТИКА»",
      zone: "Зона № 1<br>Зона № 2<br>Зона № 3",
      date: "01.01.2019 / 2305 дней<br>01.01.2019 / 2305 дней<br>01.01.2019 / 2305 дней"
    },
    {
      subj: "Карачаево-Черкесская Р.",
      num: "3.",
      operator: "ООО УК \"ГЛОБУС\"",
      zone: "Зона №2",
      date: "31.12.2024 / 480 дней"
    },
    {
      subj: "Магаданская область",
      num: "4.",
      operator: "ООО \"СПЕЦТРАНС-ОЛА\"<br>СМУП \"КОММУНАЛЬНИК\"<br>МУП \"ТЭС\"<br>МБУ \"СЕВЕРО-ЭВЕНСКИЙ ОЦ\"<br>ООО \"ВОДОСНАБЖЕНИЕ\"<br>МУП \"ТЕНЬКАНХОЗРЕСУРС\"<br>МУП \"КОМЭНЕРГО\"",
      zone: "Ольский ГО<br>Среднеканский ГО<br>Сусуманский ГО<br>Северо-Эвенский ГО<br>Омсукчанский ГО<br>Тенькинский ГО<br>Хасынский МО",
      date: "31.12.2024 / 114 дней<br>27.06.2023 / 667 дней<br>10.06.2022 / 1049 дней<br>28.12.2019 / 1971 дней<br>31.12.2024 / 114 дней<br>31.12.2024 / 114 дней<br>02.01.2020 / 1955 дней"
    },
    {
      subj: "Республика Калмыкия",
      num: "5.",
      operator: "ООО \"СПЕЦАВТОХОЗЯЙСТВО\"",
      zone: "Вся территория",
      date: "30.03.2025 / 25 дней"
    },
    {
      subj: "Республика Хакасия",
      num: "6.",
      operator: "ООО \"АЭРОСИТИ-2000\"",
      zone: "Зона № 10",
      date: "31.12.2024 / 114 дней"
    },
    {
      subj: "Тверская область",
      num: "7.",
      operator: "ООО \"ТСАХ\"<br>ООО \"СЕРВИС ГРУПП\"",
      zone: "Вся территория<br>Вся территория",
      date: "28.09.2023 / 574 дней<br>31.12.2024 / 114 дней"
    },
    {
      subj: "Чукотский автономный округ",
      num: "8.",
      operator: "МУП ЖКХ \"УЛЬТИНСКОЕ\"",
      zone: "Зона № 21",
      date: "31.12.2024 / 114 дней"
    }
  ];

  const vremData = [
    {
      subj: "Республика Дагестан",
      num: "1.",
      operator: "МАУ \"ГОРСЕРВИС\"<br>МБУ \"БЛАГОУСТРОЙСТВО Г. МАХАЧКАЛЫ\"<br>ООО \"БЛАГОУСТРОЙСТВО-1\"",
      zone: "Дербентская зона<br>Махачкалинская зона<br>Хасавюртовская зона"
    },
    {
      subj: "Ростовская область",
      num: "2.",
      operator: "ООО \"Экоцентр\"",
      zone: "Красносулинский МЭОК,<br>Миллеровский МЭОК"
    },
    {
      subj: "Самарская область",
      num: "3.",
      operator: "АО \"ЭКОЛОГИЯ\"",
      zone: "Вся территория"
    },
    {
      subj: "Хабаровский край",
      num: "4.",
      operator: "ООО \"МАГИСТРАЛЬ\"<br>ООО \"ГАРМОНИЯ\"",
      zone: "Зона деятельности № 8<br>Зона деятельности № 11"
    }
  ];

  // Универсальная функция для разворота данных с объединением операторов
  function expandOperatorsWithZones(data, withDate = true) {
    const expanded = [];
    let globalOpNum = 1;
    data.forEach(row => {
      const operators = row.operator.split('<br>');
      const zones = row.zone.split('<br>');
      const dates = withDate && row.date ? row.date.split('<br>') : [];
      let subjZoneCount = 0;
      // Считаем сколько всего строк будет у субъекта для rowspan
      operators.forEach((op, opIdx) => {
        // Для каждого оператора определяем сколько у него зон (и дат)
        let zoneCount = 1;
        if (zones.length === operators.length) {
          zoneCount = 1;
        } else if (operators.length === 1) {
          zoneCount = zones.length;
        }
        subjZoneCount += zoneCount;
      });

      let subjZoneIdx = 0;
      operators.forEach((op, opIdx) => {
        // Определяем сколько зон у этого оператора
        let opZones = [];
        let opDates = [];
        if (zones.length === operators.length) {
          opZones = [zones[opIdx]];
          opDates = [dates[opIdx] || ""];
        } else if (operators.length === 1) {
          opZones = zones;
          opDates = dates;
        } else {
          opZones = [zones[opIdx] || ""];
          opDates = [dates[opIdx] || ""];
        }
        opZones.forEach((zone, zoneIdx) => {
          expanded.push({
            subj: row.subj,
            num: row.num,
            opNum: globalOpNum,
            operator: op,
            zone: zone,
            date: withDate ? (opDates[zoneIdx] || opDates[0] || "") : undefined,
            firstSubjRow: subjZoneIdx === 0,
            subjRowspan: subjZoneCount,
            firstOpRow: zoneIdx === 0,
            opRowspan: opZones.length
          });
          subjZoneIdx++;
        });
        globalOpNum++;
      });
    });
    return expanded;
  }

  // Функция для создания таблицы с объединением ячеек
  function createTable(headers, data, className, withDate = true) {
    const table = document.createElement("table");
    table.className = className;

    // Заголовок
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headers.forEach(h => {
      const th = document.createElement("th");
      th.innerHTML = h;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Тело таблицы
    const tbody = document.createElement("tbody");
    data.forEach((row, idx) => {
      const tr = document.createElement("tr");

      // № п/п и Субъект с rowspan
      if (row.firstSubjRow) {
        const tdNum = document.createElement("td");
        tdNum.innerHTML = row.num || "";
        tdNum.rowSpan = row.subjRowspan;
        tr.appendChild(tdNum);

        const tdSubj = document.createElement("td");
        tdSubj.innerHTML = row.subj || "";
        tdSubj.rowSpan = row.subjRowspan;
        tr.appendChild(tdSubj);
      }

      // № оператора и оператор с rowspan
      if (row.firstOpRow) {
        const tdOpNum = document.createElement("td");
        tdOpNum.innerHTML = row.opNum;
        tdOpNum.rowSpan = row.opRowspan;
        tr.appendChild(tdOpNum);

        const tdOp = document.createElement("td");
        tdOp.innerHTML = row.operator;
        tdOp.rowSpan = row.opRowspan;
        tr.appendChild(tdOp);
      }

      // Зона
      const tdZone = document.createElement("td");
      tdZone.innerHTML = row.zone;
      tr.appendChild(tdZone);

      // Дата (если есть)
      if (withDate) {
        const tdDate = document.createElement("td");
        tdDate.innerHTML = row.date;
        tr.appendChild(tdDate);
      }

      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    return table;
  }

  // Вставка таблиц в контейнер
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("BankGuarantee");

    const flexRow = document.createElement("div");
    flexRow.className = "bgk-flex-row";

    // Левая колонка (конкурсные)
    const konkursCol = document.createElement("div");
    konkursCol.className = "bgk-flex-col";
    const konkursTitle = document.createElement("h2");
    konkursTitle.textContent = "Региональные операторы отобраны на конкурсной основе";
    konkursTitle.className = "bgk-table-title bgk-first";
    konkursCol.appendChild(konkursTitle);

    const konkursHeadersShort = [
      "№<br>п/п",
      "Субъект",
      "№<br>п/п",
      "Региональный оператор",
      "Зона деятельности",
      "Плановый<br>срок получения<br>БГ/Просрочка"
    ];
    const konkursDataExpanded = expandOperatorsWithZones(konkursData, true);
    const konkursTable = createTable(konkursHeadersShort, konkursDataExpanded, "bgk-table bgk-pink-table", true);
    konkursCol.appendChild(konkursTable);

    // Правая колонка (временные)
    const vremCol = document.createElement("div");
    vremCol.className = "bgk-flex-col";
    const vremTitle = document.createElement("h2");
    vremTitle.textContent = "«Временные» региональные операторы";
    vremTitle.className = "bgk-table-title";
    vremCol.appendChild(vremTitle);

    const vremHeaders = [
      "№<br>п/п",
      "Субъект",
      "№<br>п/п",
      "Региональный оператор",
      "Зона деятельности"
    ];
    const vremDataExpanded = expandOperatorsWithZones(vremData, false);
    const vremTable = createTable(vremHeaders, vremDataExpanded, "bgk-table bgk-yellow-table", false);
    vremCol.appendChild(vremTable);

    flexRow.appendChild(konkursCol);
    flexRow.appendChild(vremCol);

    container.appendChild(flexRow);
  });