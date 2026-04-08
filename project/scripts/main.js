const currentYear = new Date().getFullYear();
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('nav ul');

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
document.getElementById("currentyear").innerHTML = currentYear

/*function capitalizeWords(str){
    return str.toLowerCase()
    .split(/\s+/)
    .map(w => w ? w[0].toUpperCase() + w.slice(1) : '')
    .join(' ');
}*/

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle('open');
});    

function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme');
    const icon = document.getElementById('theme-icon');
    if (!toggle) return;
    if (saved === 'light') {
        document.body.classList.add('light-mode');
        icon.src = 'images/night.svg'
    }    
    toggle.addEventListener('click', () => {
        console.log('clicked');

        icon.classList.add('switching');
        setTimeout(() => {

            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            icon.src = isLight ? 'images/night.svg' : 'images/day.svg';
            icon.classList.remove('switching');
        }, 300);    
    });    
}    

function filterProjects() {
  const buttons = document.querySelectorAll('.filter-button');  
  const projects = Array.from(document.querySelectorAll('.projects-grid .project-card'));
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));  
      button.classList.add('active');
      const filter = button.dataset.filter;
      const matched = projects.filter(project => {
        const types = project.dataset.type.split(' ');  
        return filter === 'all' || types.includes(filter);
      });  
      projects.forEach(project => project.classList.add('hidden'));
      matched.forEach(project => project.classList.remove('hidden'));
    });  
  });  
}  


function handleForm() {
    if (typeof emailjs === 'undefined') return;
    emailjs.init('NfaTKuU2FRrI2X5lF');
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
   
    if (localStorage.getItem('draft-name')) nameInput.value = localStorage.getItem('draft-name');
    if (localStorage.getItem('draft-email')) emailInput.value = localStorage.getItem('draft-email');
    if (localStorage.getItem('draft-subject')) subjectInput.value = localStorage.getItem('draft-subject');
    if (localStorage.getItem('draft-message')) messageInput.value = localStorage.getItem('draft-message');
   
    nameInput.addEventListener('input', () => localStorage.setItem('draft-name', nameInput.value));
    emailInput.addEventListener('input', () => localStorage.setItem('draft-email', emailInput.value));
    subjectInput.addEventListener('input', () => localStorage.setItem('draft-subject', subjectInput.value));
    messageInput.addEventListener('input', () => localStorage.setItem('draft-message', messageInput.value));
  
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }    

        const submission = {name, email, subject, message, date: new Date().toLocaleDateString()};
        localStorage.setItem('lastSubmission', JSON.stringify(submission));

        emailjs.send('service_fs80rts', 'template_i3e361u', submission)
            .then(() => {
                localStorage.removeItem('draft-name');
                localStorage.removeItem('draft-email');
                localStorage.removeItem('draft-subject');
                localStorage.removeItem('draft-message');
                form.reset();

                const popup = document.getElementById('popup');
                const popupMsg = document.getElementById('popup-msg');
                const popupClose = document.getElementById('popup-close');
                
                //popupMsg.textContent = `Thanks ${capitalizeWords({name})}! I'll get back to you shortly.`;
                popupMsg.textContent = `Thanks ${name}! I'll get back to you shortly.`;
                popup.classList.add('show');

                popupClose.addEventListener('click', () => {
                    popup.classList.remove('show');
                    
                });
                
            })
            .catch(() => {
                alert('Something went wrong. Please try again.');
            });
    });
}

initThemeToggle();
filterProjects();
handleForm();