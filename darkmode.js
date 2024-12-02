let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () =>{
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.removeItem('darkmode', null)
}

if (darkmode === 'active') enableDarkMode()


themeSwitch.addEventListener("click", () => {
    // Toggle dark mode on/off
   darkmode = localStorage.getItem('darkmode')
   if (darkmode !== "active") {
     enableDarkMode()
   } 
   else{
     disableDarkMode()
   } 
}) 