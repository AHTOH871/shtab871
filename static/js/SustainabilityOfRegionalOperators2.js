async function fetchDataTech() {
    try {
        const response = await fetch('/stats_api'); // Flask endpoint
        const data = await response.json();
        
        const datared = data['tech'][0]
        const datamid = data['tech'][1]
        const datagreen = data['tech'][2]

        const tableContainer = document.getElementById("tableContainer2");

        createTable(datared, 6, "Низкая устойчивость", tableContainer);
        createTable(datamid, 4,"Средняя устойчивость", tableContainer);
        createTable(datagreen, 4,"Низкий уровень риска",tableContainer)
   
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
    function createTable(data, maxRowsPerColumn, tableTitle, tableContainer) {

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
                tableContainer.appendChild(currentTableWrapper);

                currentTableWrapper = document.createElement("div");
                currentTableWrapper.classList.add("table-wrapper");
                currentTable = document.createElement("table");
                currentTable.classList.add("custom-table");

                rowCount = 0;
                headerAdded = true;
            }

            if (!headerAdded && rowCount === 0) {
                let headerRow = document.createElement("tr");
                // Добавляем два новых столбца в заголовок
                headerRow.innerHTML = `<th>№</th><th>Субъект</th><th>Дефицит</br></th><th>ДК*</th>`;
                currentTable.appendChild(headerRow);
            }

            let row = document.createElement("tr");
            row.classList.add(item.category);
            // Добавляем значения для новых столбцов
            row.innerHTML = `<td>${item.id}</td><td>${item.region}</td><td>${item.additional1}</td><td>${item.additional2}</td>`;
            currentTable.appendChild(row);
            rowCount++;
        });

        if (currentTable.children.length > 0) {
            currentTableWrapper.appendChild(currentTable);
            tableContainer.appendChild(currentTableWrapper);
        }
    }
