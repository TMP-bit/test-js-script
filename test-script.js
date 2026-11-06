// test-load.js
(function() {
    // Create a container element for the success message
    const alertDiv = document.createElement('div');
    
    // Style the element so it is clearly visible at the top of the page
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.padding = '15px 30px';
    alertDiv.style.backgroundColor = '#4CAF50'; // Green background
    alertDiv.style.color = '#ffffff'; // White text
    alertDiv.style.fontWeight = 'bold';
    alertDiv.style.fontFamily = 'sans-serif';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';
    alertDiv.style.zIndex = '99999';
    
    // Set the success text
    alertDiv.textContent = 'Success: Script successfully loaded from Domain A!';
    
    // Append the element to the body of the host site (Domain B)
    document.body.appendChild(alertDiv);
})();
