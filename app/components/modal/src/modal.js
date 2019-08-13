export default function(rootElement) {

    const modalInner = rootElement.querySelector('[data-role="modal-inner"]');
    const modalBody = rootElement.querySelector('[data-role="modal-body"]');
    const modalClose = rootElement.querySelector('[data-role="modal-close"]');

    function showModal() {
        rootElement.removeAttribute('hidden');
    }

    function closeModal() {
        rootElement.setAttribute('hidden', '');
    }

    const modalContentObserver = new MutationObserver(function() {
        console.log('show')
        showModal();
    });

    modalContentObserver.observe(modalBody, {
        characterData: true,
        attributes: true,
        childList: true,
        subtree: true
    });

    modalClose.addEventListener('click', function(e) {
        closeModal();
    });

    rootElement.addEventListener('click', function(e) {
        if (!modalInner.contains(e.target)) {
            closeModal();
        }
    });
  
    window.addEventListener('keyup', function(e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });

}