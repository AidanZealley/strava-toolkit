export default function(bar, step, steps, done) {

    const indicator = bar.querySelector('[data-role="progress-indicator"]');

    let progress = 100 * (step / steps);

    if (done) {
        bar.setAttribute('done', '')
    } else {
        bar.removeAttribute('done', '')
    }

    indicator.style.width = progress + '%';

}