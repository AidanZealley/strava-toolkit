export default function(filter) {

    const filterInputs = filter.getElementsByTagName('input');

    function readFilterFormFields(input) {
        switch(input.getAttribute('type')) {
            case 'text':
                return input.value;
            
            case 'checkbox':
                if (filter.querySelector('input:checked')) {
                    return 'true';
                } else {
                    return 'false';
                }
        }
    }

    return readFilterFormFields(filterInputs[0]);

}