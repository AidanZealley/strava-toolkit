export default function(rootElement) {

    const modalInner = rootElement.querySelector('[data-role="modal-inner"]');
    const modalBody = rootElement.querySelector('[data-role="modal-body"]');

    function setModalCloseEvents() {
        const modalClosers = rootElement.querySelectorAll('[data-role="modal-close"]');

        Array.from(modalClosers).forEach(function(modalCloser) {        
            modalCloser.addEventListener('click', function(e) {
                e.preventDefault();
    
                closeModal();
            });
        });
    }

    function showModal() {
        rootElement.removeAttribute('hidden');
    }

    function closeModal() {
        rootElement.setAttribute('hidden', '');
    }

    const modalContentObserver = new MutationObserver(function() {
        showModal();
        setModalCloseEvents();
    });

    modalContentObserver.observe(modalBody, {
        characterData: true,
        attributes: true,
        childList: true,
        subtree: true
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