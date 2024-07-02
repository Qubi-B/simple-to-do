function updateMenu(activeItem){
    let itemsList = ['lmi0', 'lmi1', 'lmi2', 'lmi3', 'lmi4', 'lmi5', 'lmi6', 'lmi7'];
    let sourcesList = ['https://weather-pro-v2fr6.ondigitalocean.app/', 'https://weather-pro-v2fr6.ondigitalocean.app/', 'https://weather-pro-v2fr6.ondigitalocean.app/', 'https://weather-pro-v2fr6.ondigitalocean.app/']
    for(i = 0; i < itemsList.length; i++){
        document.getElementById(itemsList[i]).classList.remove('active');
    }
    document.getElementById(itemsList[activeItem]).classList.add('active');
    document.getElementById("currentWindow").src = sourcesList[activeItem];
}