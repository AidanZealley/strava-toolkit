import prepareUi from './prepare-ui';

export default function(rootElement) {

    const prepareUiButton = rootElement.querySelector('[data-role="prepare-ui-button"]');

    prepareUiButton.onclick = function(e) {    
        prepareUi(rootElement);
    }

}