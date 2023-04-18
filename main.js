const inputs = document.querySelectorAll('.input');

function handlerUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(el => el.addEventListener('change', handlerUpdate));
inputs.forEach(el => el.addEventListener('mousemove', handlerUpdate));