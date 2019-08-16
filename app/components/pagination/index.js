import pagination from './src/pagination'

export default function(renderLocation, config) {

    if (config.pages > 0) {
        const component = `
            <div class="pagination" data-component-name="pagination">
                <a href="" class="button" data-role="prev" hidden>Prev</a>

                <nav class="pagination__nav" data-role="nav">
                </nav>

                <a href="" class="button" data-role="next" hidden>Next</a>
            </div>
        `;

        renderLocation.insertAdjacentHTML('beforeend', component);

        const rootElement = renderLocation.querySelector('[data-component-name="pagination"]');

        rootElement.config = config;

        pagination(rootElement);
    }

}