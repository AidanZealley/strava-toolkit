export default function(bar, indicator, progress, done) {

    if (done) {
        bar.setAttribute('done', '')
    } else {
        bar.removeAttribute('done', '')
    }

    indicator.style.width = progress + '%';

}