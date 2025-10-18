window.onload = function () {
    let pronoun = ['the', 'our'];
    let adjevtive = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let extensiones = ['.com', '.net', '.us', '.io'];
    // Contenedor donde se insertarán los dominios
    let container = document.getElementById('domain-list');
    // Generar combinaciones con bucles for
    for (let i = 0; i < pronoun.length; i++) {
        for (let j = 0; j < adjevtive.length; j++) {
            for (let k = 0; k < noun.length; k++) {
                for (let l = 0; l < extensiones.length; l++) {
                    let domain = `${pronoun[i]}${adjevtive[j]}${noun[k]}${extensiones[l]}`;
                    console.log(domain);
                    container.innerHTML += `
                        <div class="col-12 col-md-6 col-lg-4 mb-3">
                          <div class="card shadow-sm h-100">
                            <div class="card-body text-center">
                              <h5 class="card-title text-primary">${domain}</h5>
                            </div>
                          </div>
                        </div>
                     `;
                }
            }
        }
    }
}