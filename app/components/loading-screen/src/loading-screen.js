export default function(rootElement) {

    const message = rootElement.querySelector('[data-role="message"');

    message.textContent = rootElement.config.message;
    
}