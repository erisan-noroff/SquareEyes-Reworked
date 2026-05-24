export class ErrorHandler {
    static displayError(errorMessage = 'Unexpected error occurred when retrieving data') {
        const loadingIndicator = document.getElementById('loading');
        errorMessage = `${errorMessage}.<br/>Please try again later. Contact us if the issue persists.`;
        
        if (!loadingIndicator)
            alert(errorMessage.replace('<br/>', '\n'));
        
        loadingIndicator.style.color = 'red';
        loadingIndicator.innerHTML = errorMessage;
    }
}