        // Navigation
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => page.classList.remove('active'));
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active'));
            document.getElementById('nav-' + pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Form handling
        document.getElementById('pesquisaForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            for (let [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            console.log('Dados da pesquisa:', data);
            
            // Show loading
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate submission
            setTimeout(() => {
                // Hide form and show success message
                document.getElementById('pesquisaForm').style.display = 'none';
                document.getElementById('successMessage').style.display = 'block';
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });

        function resetForm() {
            // Reset form
            document.getElementById('pesquisaForm').reset();
            
            // Show form and hide success message
            document.getElementById('pesquisaForm').style.display = 'block';
            document.getElementById('successMessage').style.display = 'none';
        }

        // Smooth scrolling for internal links
        document.addEventListener('DOMContentLoaded', function() {
            // Add smooth scrolling to all internal links
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });
        });

        // Add some interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to cards
            const cards = document.querySelectorAll('.card, .problem-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });
        


function sendEmail(event) {
    event.preventDefault(); // evita o reload do form

    const parms = {
        concentracao: document.querySelector('input[name="concentracao"]:checked')?.value || "",
        cansaco: document.querySelector('input[name="cansaco"]:checked')?.value || "",
        sono_energia: document.querySelector('input[name="sono_energia"]:checked')?.value || "",

        pular_refeicoes: document.querySelector('input[name="pular_refeicoes"]:checked')?.value || "",
        ultraprocessados: document.querySelector('input[name="ultraprocessados"]:checked')?.value || "",
        equilibrada: document.querySelector('input[name="equilibrada"]:checked')?.value || "",

        conhece_neuro: document.querySelector('input[name="conhece_neuro"]:checked')?.value || "",
        deficiencia: document.querySelector('input[name="deficiencia"]:checked')?.value || "",
        interesse: document.querySelector('input[name="interesse"]:checked')?.value || ""
    };

    emailjs.send("service_9c641zo", "template_tfxqytg", parms)
        .then(() => {
            alert("Email enviado com sucesso!");
            document.getElementById("pesquisaForm").reset();
            document.getElementById("successMessage").style.display = "block";
        })
        .catch((error) => {
            alert("Erro ao enviar o email: " + error.text);
        });
}
