export default function(bar, step, steps, done) {

    const indicator = bar.querySelector('[data-role="progress-bar-indicator"]');
    let progress = 100 * (step / steps);

    if (done) {
        bar.setAttribute('done', '')
    } else {
        bar.removeAttribute('done', '')
    }

    indicator.style.clipPath = 'polygon(0% 0, ' + progress + '% 0, ' + progress + '% 100%, 0% 100%)';

}