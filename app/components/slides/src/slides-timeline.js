export default function(rootElement) {

    return `
        <div class="slides__timeline" data-role="slides-timeline">
            ${Array(rootElement.config.total).join(0).split(0).map((item, index) => `
                <div class="slides__timeline-node" data-role="timeline-node" data-slide="${index}">
                    <button class="slides__timeline-node-button" data-role="timeline-node-button"></button>
                </div>
            `).join('')}
        </div>
    `;

}