export default function(rootElement) {

    const table = rootElement.querySelector('[data-role="table"]');

    function buildTableHeader() {
        const tableHeader = `
            <thead class="data-table__table-header">
                <tr>
                    ${rootElement.config.data.tableHeadings.map(function (tableHeading) {
                        return `
                            <th class="data-table__table-heading">${tableHeading}</th>
                        `
                    }).join('')}
                </tr>
            </thead>
        `;

        table.insertAdjacentHTML('beforeend', tableHeader);
    }

    function buildTableRow(tableRow, index) {
        const newTableRow = `
            <tr class="data-table__table-row" data-role="table-row" data-row="${index}">
                ${tableRow.map(function(cell) {
                    return `
                        <td class="data-table__table-cell">${cell}</td>
                    `
                }).join('')}
            </tr>
        `;

        return newTableRow;
    }

    function buildTableBody() {
        const tableBody = `
            <tbody class="data-table__table-body">
                ${rootElement.config.data.tableRows.map(function(tableRow, index) {
                    return buildTableRow(tableRow, index);
                }).join('')}
            </tbody>
        `;

        table.insertAdjacentHTML('beforeend', tableBody);
    }

    buildTableHeader();
    buildTableBody();

}