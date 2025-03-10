// shareModal.js

export function createShareModal() {
    // Check if the share Modal is already open
    let shareModal = document.querySelector('#shareModal');
    if (shareModal) {
        // If already open, remove it
        shareModal.remove();
        return;
    }

    // Create a container for the share Modal
    shareModal = document.createElement('div');
    shareModal.id = 'shareModal';
    shareModal.style.position = 'fixed';
    shareModal.style.top = '50%'; // Vertically center
    shareModal.style.left = '50%'; // Horizontally center
    shareModal.style.transform = 'translate(-50%, -50%)'; // Center the modal
    shareModal.style.backgroundColor = '#fff';
    shareModal.style.padding = '20px';
    shareModal.style.borderRadius = '8px';
    shareModal.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)';
    shareModal.style.display = 'flex';
    shareModal.style.flexDirection = 'column';
    shareModal.style.gap = '10px';

    // Add a close button ('X') in the top-right corner
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;'; // Use &times; for the close button
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.backgroundColor = 'transparent';
    closeButton.style.color = '#ff0000';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '30px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => shareModal.remove(); // Close the modal when clicked
    shareModal.appendChild(closeButton);

    // Add "Share on" title
    const title = document.createElement('h3');
    title.innerText = 'Share on:';
    title.style.marginBottom = '10px'; // Add spacing below the title
    shareModal.appendChild(title);

    // Create share platform buttons with icons
    const platforms = [
        { 
            text: "Facebook", 
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, 
            icon: './assets/share/facebook.png' // Replace with your Facebook icon path
        },
        { 
            text: "Twitter", 
            url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=Check%20out%20this%20awesome%20portfolio!`, 
            icon: './assets/share/x.png' // Replace with your Twitter icon path
        },
        { 
            text: "LinkedIn", 
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, 
            icon: './assets/share/linkedin.jpg' // Replace with your LinkedIn icon path
        },
        { 
            text: "WhatsApp", 
            url: `https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20portfolio!%20${encodeURIComponent(window.location.href)}`, 
            icon: './assets/share/whatsapp.jpg' // Replace with your WhatsApp icon path
        },
    ];

    // Create individual share buttons with icons
    platforms.forEach(platform => {
        const button = document.createElement('button');
        button.style.backgroundColor = 'red';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.padding = '10px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '1em';
        button.style.borderRadius = '5px';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.gap = '10px'; // Space between the icon and the text

        // Create an image for the platform icon
        const icon = document.createElement('img');
        icon.src = platform.icon; // Set the icon source to the respective platform icon
        icon.alt = platform.text;
        icon.style.width = '20px'; // Set the size of the icon
        icon.style.height = '20px';
        
        // Append icon and text to the button
        button.appendChild(icon);
        button.appendChild(document.createTextNode(`${platform.text}`));

        button.onclick = () => window.open(platform.url, '_blank');
        shareModal.appendChild(button);
    });

    // Add "Copy Link" button
    const copyButton = document.createElement('button');
    copyButton.innerText = 'Copy Link';
    copyButton.style.backgroundColor = '#28a745';
    copyButton.style.color = '#fff';
    copyButton.style.border = 'none';
    copyButton.style.padding = '10px';
    copyButton.style.cursor = 'pointer';
    copyButton.style.fontSize = '1em';
    copyButton.style.borderRadius = '5px';
    copyButton.onclick = () => {
        // Copy current URL to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('Link copied to clipboard!');
        });
    };
    shareModal.appendChild(copyButton);

    // Append the share Modal to the body
    document.body.appendChild(shareModal);
}
