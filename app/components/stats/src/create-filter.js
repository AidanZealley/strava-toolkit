export default function(filter) {

    function createFilterFormFields(filter) {
        switch(filter.field) {
            case 'name':
                return `
                    <label class="form__label">Activity name</label>
                    <input class="form__input" type="text"${filter.value ? ` value="${filter.value}"` : ''}>
                `;
            
            case 'commute':
                return `
                    <label class="form__label">Commute</label>
                    <input type="checkbox" name="commute"${filter.value ? ` checked` : ''}>
                `;
        }
    }

    return `
        <div class="stats__filter" data-role="filter" data-filter="${filter.field}">
            <form class="form">
                <div class="form__block">
                    ${createFilterFormFields(filter)}
                </div>
            </form>

            <button class="button button--small" data-role="remove-filter"><span>Remove</span></button>
        </div>
    `;

}