import dataTable from './src/data-table'

export default function(renderLocation, config) {

    const component = `
        <div class="data-table${config.modifiers ? ` ${config.modifiers}` : ''}" data-component-name="data-table">
            <table class="data-table__table" data-role="table">
            </table>
        </div>
    `;

    renderLocation.insertAdjacentHTML('beforeend', component);

    const rootElement = renderLocation.querySelector('[data-component-name="data-table"]');

    rootElement.config = config;

    dataTable(rootElement);

}