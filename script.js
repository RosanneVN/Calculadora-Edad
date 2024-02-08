const boton = document.getElementById('boton');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const fecha = new Date();
const anoActual = fecha.getFullYear();
const mesActual = fecha.getMonth() + 1;
const diaActual = fecha.getDate();
const resultadoCont = document.querySelector('.resultado-contenedor');
const textFecha = document.querySelector('.text-fecha')


boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarCampos();
    error = validarCamposVacios();
    if (error) {
        textFecha.classList.add("red");
    }
    else {
        textFecha.classList.remove("red");
        resultadoCont.innerHTML = CalcularEdad();

    }
})


validarCampos = () => {
    let error = false;
    if (ano.value > anoActual) {
        error = true;
        return error;
    }
    else if (mes.value > mesActual && ano.value == anoActual) {
        error = true;
        return error;
    }
    else if (dia.value > diaActual && mes.value == mesActual && ano.value == anoActual) {
        error = true;
        return error;
    }
    else if (mes.value > 12 || mes.value < 1) {
        error = true;
        return error;
    }
    else if (mes.value == 2) {
        if (dia.value > 28) {
            error = true;
        }
        return error;
    }
    else if (mes.value == 4 || mes.value == 6 || mes.value == 9 || mes.value == 11) {
        if (dia.value > 30) {
            error = true;
        } else if (dia.value > 31) {
            error = true;
        }
        return error;
    }
    return error;
}

CalcularEdad = () => {
    let resultadoAno = anoActual - ano.value;

    let resultadoMes = mesActual - mes.value;
    if (resultadoMes <= 0) {
        resultadoMes = 12 + resultadoMes;
        resultadoAno -= 1;
    }


    let resultadoDia = diaActual - dia.value;
    if (mes.value == 2) {
        if (dia.value > 28) {
            if (resultadoDia <= 0) {
                resultadoDia = 28 + resultadoDia;
                resultadoMes -= 1
            }
        }
    }
    else if (mes.value == 4 || mes.value == 6 || mes.value == 9 || mes.value == 11) {
        if (resultadoDia <= 0) {
            resultadoDia = 30 + resultadoDia;
            resultadoMes -= 1
        }
    } else {
        if (resultadoDia <= 0) {
            resultadoDia = 31 + resultadoDia;
            resultadoMes -= 1
        }
    }


    htmlCode = ` <div class="resultado">
<p> <span>${resultadoAno}</span>YEARS</p>
<p><span>${resultadoMes}</span>MONTHS</p>
<p><span>${resultadoDia}</span>DAYS</p>
</div>`

    return htmlCode;
}

const validarCamposVacios = () => {
    let error = false;
    if (ano.value == "") {
        error = true;
        return error;
    } else if (mes.value == "") {
        error = true;
        return error;
    } else if (dia.value == "") {
        error = true;
        return error;
    }
    return error;
}




/*
if (ano.value >= anoActual) {
    if (mes.value >= mesActual || ano.value >= anoActual) {
        if (dia.value > diaActual || mes.value >= mesActual || ano.value >= anoActual) {
            error = true;
        }
    }*/