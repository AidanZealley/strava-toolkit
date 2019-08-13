export default function(value) {

    let time = '';

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = Math.floor(value % 60);

    if (hours > 0) {
        time += hours + 'h ' + (minutes < 10 ? '0' : '');
    }

    time += '' + minutes + 'm ' + (seconds < 10 ? '0' : '');
    time += '' + seconds + 's';
    
    return time;

}