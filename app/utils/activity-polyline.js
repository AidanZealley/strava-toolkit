import polyline from '@mapbox/polyline';

export default function(activity) {

    function latLng2point(coords){
        return {
            x:(coords[1]+180)*(256/360),
            y:(256/2)-(256*Math.log(Math.tan((Math.PI/4)+((coords[0]*Math.PI/180)/2)))/(2*Math.PI))
        };
    }

    const decodedPolyline = polyline.decode(activity.map.summary_polyline);

    let coordsString = '';
    let minX = null;
    let maxX = 0;
    let minY = null;
    let maxY = 0;

    decodedPolyline.forEach(function(coords) {
        const convertedCoords = latLng2point(coords);
        
        if (minX == null) {
            minX = convertedCoords.x;
        } else if (convertedCoords.x < minX) {
            minX = convertedCoords.x;
        }

        if (minY == null) {
            minY = convertedCoords.y;
        } else if (convertedCoords.y < minY) {
            minY = convertedCoords.y;
        }

        if (convertedCoords.x > maxX) {
            maxX = convertedCoords.x;
        }

        if (convertedCoords.y > maxY) {
            maxY = convertedCoords.y;
        }

        coordsString += convertedCoords.x + ',' + convertedCoords.y + ' ';
    });

    const svg = `
        <svg class="activity-route" viewBox="${minX} ${minY} ${maxX-minX} ${maxY-minY}" xmlns="http://www.w3.org/2000/svg">
            <polyline points="${coordsString}" stroke-width="0.0015" fill="none"/>
        </svg>
    `;

    return svg;

}