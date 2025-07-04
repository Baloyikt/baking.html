const panels = document.querySelectorAll('.panel')

panels.forEach ((panel) => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

   function showTime() {
       const timeNow = new Date().toLocaleTimeString();
       document.getElementById("timeDisplay").textContent = timeNow;
   }

   setInterval(showTime, 1000); 