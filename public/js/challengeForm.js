window.onload = function () {

  var formulario = document.getElementsByTagName("form")[0];
  var campos = formulario.elements; //obtengo todos los elementos html de mi object html pertenecientes al formulario!!
  campos = Array.from(campos);
  campos.pop();//hay que sacar el boton del submit
  campos.pop();//hay que sacar el boto volver
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const regexNumbers = /^\d+$/;

  var campoName = formulario.name;
  var campoDescription = formulario.description;
  var campoMetaChallenge = formulario.metaChallenge;

  function validateEmpty () {
    var error = this.parentElement.querySelector('.invalid-feedback');
    var nombreCampo = this.parentElement.parentElement.querySelector('label').innerText;
    if (this.value.trim() === '') {
      this.classList.add('is-invalid');
      error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
    } else {
      error.innerText = '';
      this.classList.remove('is-invalid');
    }
  }

  function validateEmptyAndNumber () {
    var error = this.parentElement.querySelector('.invalid-feedback');
    var nombreCampo = this.parentElement.parentElement.querySelector('label').innerText;
    if (this.value.trim() === '') {
      this.classList.add('is-invalid');
      error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
    } else if (!regexNumbers.test(this.value.trim())) {
      this.classList.add('is-invalid');
      error.innerText = 'El desafio solo puede ser un numero';
    } else {
      error.innerText = '';
      this.classList.remove('is-invalid');
    }
  }
  campoMetaChallenge.addEventListener('blur', validateEmptyAndNumber);
  campoName.addEventListener('blur', validateEmpty);
  campoDescription.addEventListener('blur', validateEmpty);

  formulario.addEventListener("submit", function(e){
    if(
      campoName.value.trim() === '' ||
      campoDescription.value.trim() === '' ||
      campoStep_1.value.trim() === '' ||
      campoStep_2.value.trim() === '' ||
      campoStep_3.value.trim() === '' ||
      campoStep_4.value.trim() === '' ||
      campoStep_5.value.trim() === ''
    ) {
        e.preventDefault();
      // alert();
      campos.forEach(function (campo) {
        var error = campo.parentElement.querySelector('.invalid-feedback');
        console.log(error);
        var nombreCampo = campo.parentElement.parentElement.querySelector('label').innerText;
        if (campo.value.trim() === '') {
          campo.classList.add('is-invalid');
          error.innerText = 'El campo ' + nombreCampo + ' es obligatorio';
        }
      });
    }
  });

};