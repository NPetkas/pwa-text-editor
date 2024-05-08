const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event for later use
    window.deferredPrompt = event;
    // Show the install button
    butInstall.classList.remove('hidden');
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
      return;
    }
    // Show the installation prompt to the user
    promptEvent.prompt();
    // Wait for the user to respond to the prompt
    const userChoice = await promptEvent.userChoice;
    
    if (userChoice.outcome === 'accepted') {
        console.log('User accepted the install prompt');
    } else {
        console.log('User dismissed the install prompt');
    }

    // Clear the deferred prompt
    window.deferredPrompt = null;
    // Hide the install button
    butInstall.classList.add('hidden');
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt
    window.deferredPrompt = null;
    // You might want to do something here after the app is installed
    console.log('App installed successfully');
});