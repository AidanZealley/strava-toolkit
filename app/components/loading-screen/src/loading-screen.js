export default function(rootElement, config) {

    const message = rootElement.querySelector('[data-role="message"');

    message.textContent = config.message;
    
}