addEventListener('load', async () => {
    let sw = await navigator.serviceWorker.register('sw.js');
    console.log(sw);
});

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "BIOtk6FPLlCCQjTlKzmYL6j8M-WtNBc8GHieh5mlnjK-kvBIw3V7DPi__sEX0f1Ok8b1LN3sgGiZSdkF9T5rdmE"
       
    });
    console.log(JSON.stringify(push));
}