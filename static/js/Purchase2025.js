document.addEventListener("DOMContentLoaded", () => {
    // Данные для таблиц
    const lowSupplyData = [
      { region: "Республика Тыва", deficit: 84, plan: 17, fact: 21, percent: "123,5%", roFunds: "-", budgetFunds: "-" },
      { region: "Луганская Народная Республика", deficit: 138, plan: 30, fact: 12, percent: "40%", roFunds: "-", budgetFunds: "-" },
      { region: "Запорожская область", deficit: 16, plan: 25, fact: 9, percent: "36%", roFunds: "-", budgetFunds: "-" },
      { region: "Херсонская область", deficit: 30, plan: 27, fact: 8, percent: "30%", roFunds: "-", budgetFunds: "-" },
      { region: "Курская область", deficit: 17, plan: 17, fact: 1, percent: "6%", roFunds: "105,8", budgetFunds: "73,2" },
      { region: "Архангельская область", deficit: 32, plan: 25, fact: 1, percent: "4%", roFunds: "-", budgetFunds: "-" },
      { region: "Донецкая Народная Республика", deficit: 72, plan: 31, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Еврейская автономная область", deficit: 15, plan: 3, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Камчатский край", deficit: 11, plan: 3, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Магаданская область", deficit: 13, plan: 3, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Республика Алтай", deficit: 25, plan: 3, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Республика Дагестан", deficit: 124, plan: 0, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Республика Крым", deficit: 72, plan: 55, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Томская область", deficit: 15, plan: 3, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Чукотский АО", deficit: 9, plan: 3, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" }
    ];
  
    const mediumSupplyData = [
      { region: "Новгородская область", deficit: 5, plan: 2, fact: 1, percent: "50%", roFunds: "-", budgetFunds: "-" },
      { region: "Вологодская область", deficit: 9, plan: 2, fact: 0, percent: "0%", roFunds: "265,0", budgetFunds: "0" },
      { region: "Забайкальский край", deficit: 5, plan: 10, fact: 4, percent: "40%", roFunds: "-", budgetFunds: "-" },
      { region: "Иркутская область", deficit: 15, plan: 5, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Республика Саха (Якутия)", deficit: 3, plan: 2, fact: 0, percent: "0%", roFunds: "39,0", budgetFunds: "50,7" },
      { region: "Республика Хакасия", deficit: 3, plan: 2, fact: 0, percent: "0%", roFunds: "-", budgetFunds: "-" },
      { region: "Смоленская область", deficit: 6, plan: 1, fact: 0, percent: "0%", roFunds: "10,0", budgetFunds: "0" },
      { region: "Тверская область", deficit: 19, plan: 7, fact: 0, percent: "0%", roFunds: "11,0", budgetFunds: "0" }
    ];
  
    // Функция генерации таблицы с объединённой шапкой
    function createSupplyTable(title, data, className, addNote = false) {
      const wrapper = document.createElement("div");
      wrapper.className = "purchase-flex-col";
  
      const h2 = document.createElement("h2");
      h2.className = "purchase-table-title";
      h2.textContent = title;
      wrapper.appendChild(h2);
  
      const table = document.createElement("table");
      table.className = className;
  
      // Первая строка шапки
      const thead = document.createElement("thead");
      const tr1 = document.createElement("tr");
      tr1.innerHTML =
        '<th rowspan="2">№</th>' +
        '<th rowspan="2">Субъект</th>' +
        '<th rowspan="2">Дефицит всего, ед.</th>' +
        '<th colspan="2">2025</th>' +
        '<th rowspan="2">Исполнение, %</th>' +
        '<th colspan="2">Факт финансирования**</th>';
      thead.appendChild(tr1);
  
      // Вторая строка шапки
      const tr2 = document.createElement("tr");
      tr2.innerHTML =
        '<th>план</th>' +
        '<th>факт</th>' +
        '<th>Средства РО/операторов, млн руб.</th>' +
        '<th>Бюджетные средства, млн руб.</th>';
      thead.appendChild(tr2);
  
      table.appendChild(thead);
  
      // Тело таблицы
      const tbody = document.createElement("tbody");
      data.forEach((row, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${idx + 1}.</td>
          <td>${row.region}</td>
          <td>${row.deficit}</td>
          <td>${row.plan}</td>
          <td>${row.fact}</td>
          <td>${row.percent}</td>
          <td>${row.roFunds}</td>
          <td>${row.budgetFunds}</td>
        `;
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      wrapper.appendChild(table);
  
      // Примечание под жёлтой таблицей
      if (addNote) {
        const note = document.createElement("div");
        note.style.marginTop = "8px";
        note.style.fontSize = "8pt";
        note.innerHTML =
          '<span style="font-size:8pt;"><i>*снижение планового показателя закупки техники на 2025 год в связи с переходом Республики Мордовия в «зеленую зону» (закупка 8&nbsp;ед.&nbsp;ТС)</i></span>';
        wrapper.appendChild(note);
      }
  
      return wrapper;
    }
  
    // Контейнер для таблиц
    const container = document.getElementById("Purchase2025");
    const flexRow = document.createElement("div");
    flexRow.className = "purchase-flex-row";
  
    // Левая (розовая) таблица
    flexRow.appendChild(
      createSupplyTable(
        "Низкая обеспеченность",
        lowSupplyData,
        "purchase-table purchase-pink-table"
      )
    );
  
    // Правая (жёлтая) таблица с примечанием под ней
    flexRow.appendChild(
      createSupplyTable(
        "Средняя обеспеченность",
        mediumSupplyData,
        "purchase-table purchase-yellow-table",
        true // примечание только под жёлтой
      )
    );
  
    container.appendChild(flexRow);
  });
  