export default function(filter) {

    const filterInputs = filter.getElementsByTagName('input');

    function readFilterFormFields(input) {
        switch(input.getAttribute('type')) {
            case 'text':
                return input.value;
            
            case 'checkbox':
                return !!filter.querySelector('input:checked');
        }
    }

    return readFilterFormFields(filterInputs[0]);

}