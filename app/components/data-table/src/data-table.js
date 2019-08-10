export default function(rootElement) {

    const table = rootElement.querySelector('[data-role="table"]');

    function buildTableHeader() {
        const tableHeader = `
            <thead>
                <tr>
                    ${rootElement.config.tableHeadings.map(function (tableHeading) {
                        return `
                            <th>${tableHeading}</th>
                        `
                    }).join('')}
                </tr>
            </thead>
        `;

        table.insertAdjacentHTML('beforeend', tableHeader);
    }

    function buildTableRow(tableRow) {
        const newTableRow = `
            <tr>
                ${tableRow.map(function (cell) {
                    return `
                        <td>${cell}</td>
                    `
                }).join('')}
            </tr>
        `;

        table.insertAdjacentHTML('beforeend', newTableRow);
    }

    function buildTableBody() {
        const tableBody = `
            <tbody>
                ${rootElement.config.tableRows.map(function (tableRow) {
                    buildTableRow(tableRow)
                }).join('')}
            </tbody>
        `;

        table.insertAdjacentHTML('beforeend', tableBody);
    }

    buildTableHeader();
    buildTableBody();

}