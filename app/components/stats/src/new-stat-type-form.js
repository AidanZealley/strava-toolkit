export default function() {

    return `
        <form class="form form--light" data-role="add-stat">
            <div class="form__block">
                <label class="form__label">Choose order</label>
                <div>
                    <input type="radio" id="desc" name="order" value="desc" checked>
                    <label for="desc">Highest first</label>
                </div>

                <div>
                    <input type="radio" id="asc" name="order" value="asc">
                    <label for="asc">Lowest first</label>
                </div>
            </div>

            <div class="form__block">
                <button class="button button--secondary" data-role="prev"><span>Prev</span></button>
                <button class="button button--right" data-role="next"><span>Next</span></button>
            </div>
        </form>
    `;

}