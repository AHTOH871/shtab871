document.addEventListener("DOMContentLoaded", function () {
            const data1 = [
                { id: 1, region: "Калужская обл.", category: "low-stability", additional2: "0%" },
                { id: 2, region: "Респ. Дагестан", category: "low-stability", additional2: "0%" },
                { id: 3, region: "Чукотский АО", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 4, region: "Карачаево-Черкесская Рес.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 5, region: "Кемеровская область", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 6, region: "Новгородская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 7, region: "Псковская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 8, region: "Курганская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 9, region: "Орловская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 10, region: "Республика Коми", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 11, region: "Томская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 12, region: "Саратовская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 13, region: "Смоленская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 14, region: "Иркутская обл.", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 15, region: "Приморский край", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 16, region: "Хабаровский край", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 17, region: "Приморский край", category: "low-stability", additional1: "12,5%", additional2: "0%" },
                { id: 18, region: "Хабаровский край", category: "low-stability", additional1: "12,5%", additional2: "0%" },
            ];

            const data2 = [
                { id: 1, region: "Москва", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 2, region: "Санкт-Петербург", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 3, region: "Чукотский АО", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 4, region: "Карачаево-Черкесская Рес.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 5, region: "Кемеровская область", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 6, region: "Новгородская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 7, region: "Псковская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 8, region: "Курганская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 9, region: "Орловская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 10, region: "Республика Коми", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 11, region: "Томская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 12, region: "Саратовская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 13, region: "Смоленская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 14, region: "Иркутская обл.", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 15, region: "Приморский край", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 16, region: "Хабаровский край", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 17, region: "Приморский край", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                { id: 18, region: "Хабаровский край", category: "medium-stability", additional1: "12,5%", additional2: "0%" },
                // ... добавьте больше данных ...
            ];
            
            const data3 = [
                { id: 1, region: "Ростовская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 2, region: "Воронежская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 3, region: "Калужская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 4, region: "Респ. Дагестан", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 5, region: "Чукотский АО", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 6, region: "Карачаево-Черкесская Рес.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 7, region: "Кемеровская область", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 8, region: "Новгородская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 9, region: "Псковская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 10, region: "Курганская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 11, region: "Орловская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 12, region: "Республика Коми", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 13, region: "Томская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 14, region: "Саратовская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 15, region: "Смоленская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 16, region: "Иркутская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 17, region: "Приморский край", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 18, region: "Хабаровский край", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 19, region: "Псковская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 20, region: "Курганская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 21, region: "Орловская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 22, region: "Республика Коми", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 23, region: "Томская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 24, region: "Саратовская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 25, region: "Смоленская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 26, region: "Иркутская обл.", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 27, region: "Приморский край", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                { id: 28, region: "Хабаровский край", category: "high-stability", additional1: "12,5%", additional2: "0%" },
                // ... добавьте больше данных ...
            ];
            const tableContainer6 = document.getElementById("tableContainer6");

    // Функция для создания таблицы
    function createTable(data, maxRowsPerColumn, tableTitle) {
        let currentTableWrapper = document.createElement("div");
        currentTableWrapper.classList.add("table-wrapper");
        let currentTable = document.createElement("table");
        currentTable.classList.add("custom-table");

        let tableTitleElement = document.createElement("h2");
        tableTitleElement.textContent = tableTitle;  // Заголовок

        tableTitleElement.style.fontSize = "8pt";  // Размер шрифта
        tableTitleElement.style.fontWeight = "bold";  // Жирный шрифт
        tableTitleElement.style.color = "#333";  // Цвет текста
        tableTitleElement.style.marginBottom = "10px"; 

        currentTableWrapper.appendChild(tableTitleElement);

        let headerAdded = false;
        let rowCount = 0;

        data.forEach((item, index) => {
            if (rowCount >= maxRowsPerColumn) {
                currentTableWrapper.appendChild(currentTable);
                tableContainer6.appendChild(currentTableWrapper);

                currentTableWrapper = document.createElement("div");
                currentTableWrapper.classList.add("table-wrapper");
                currentTable = document.createElement("table");
                currentTable.classList.add("custom-table");

                rowCount = 0;
                headerAdded = true;
            }

            if (!headerAdded && rowCount === 0) {
                let headerRow = document.createElement("tr");
                // Убираем столбец "Дефицит" из заголовка
                headerRow.innerHTML = `<th>№</th><th>Субъект</th><th>%</th>`;
                currentTable.appendChild(headerRow);
            }

            let row = document.createElement("tr");
            row.classList.add(item.category);
            // Убираем column для "Дефицит" и оставляем только регион и "ДК*"
            row.innerHTML = `<td>${item.id}</td><td>${item.region}</td><td>${item.additional2}</td>`;
            currentTable.appendChild(row);
            rowCount++;
        });

        if (currentTable.children.length > 0) {
            currentTableWrapper.appendChild(currentTable);
            tableContainer6.appendChild(currentTableWrapper);
        }
    }

    // Создание таблиц
    createTable(data1, 18, "Низкая устойчивость");
    createTable(data2, 18, "Средняя устойчивость");
    createTable(data3, 18, "Низкий уровень риска");
});