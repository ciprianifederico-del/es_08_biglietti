let inputAggiuntive = [];

const radioUnico = document.getElementById("unico");
const radioPiu   = document.getElementById("piu");
const divAgg     = document.getElementById("divAggiuntivi");
const contenitore= document.getElementById("contenitoreAgg");
const numInput   = document.getElementById("numAggiuntivi");

function aggiornaNumero() {
  numInput.value = inputAggiuntive.length;
}

function creaCasella() {
  const index = inputAggiuntive.length + 1;
  const lbl = document.createElement("label");
  lbl.textContent = "Codice fiscale persona aggiuntiva " + index + ": ";
  const input = document.createElement("input");
  input.type = "text";
  input.name = "agg" + index;
  input.required = true;
  lbl.appendChild(input);
  contenitore.appendChild(lbl);
  inputAggiuntive.push(input);
  aggiornaNumero();
}

function rimuoviCasella() {
  if (inputAggiuntive.length > 1) {
    const input = inputAggiuntive.pop();
    contenitore.removeChild(input.parentElement); // il <label>
    aggiornaNumero();
  }
}

function resetDiv() {
  // Rimuove tutte le caselle e ricrea una sola casella vuota
  while (contenitore.firstChild) {
    contenitore.removeChild(contenitore.firstChild);
  }
  inputAggiuntive = [];
  creaCasella();
}

document.getElementById("btnPiu").addEventListener("click", function() {
  if (inputAggiuntive.length < 4) {
    creaCasella();
  }
});

document.getElementById("btnMeno").addEventListener("click", function() {
  rimuoviCasella();
});

radioPiu.addEventListener("change", function() {
  divAgg.style.display = "block";
  resetDiv();
});

radioUnico.addEventListener("change", function() {
  divAgg.style.display = "none";
});