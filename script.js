
document.addEventListener('DOMContentLoaded', () => {
    const catalogBtn = document.getElementById('catalogBtn');
    const sellBtn = document.getElementById('sellBtn');
    const catalogSection = document.getElementById('catalogSection');
    const sellSection = document.getElementById('sellSection');
    const form = document.getElementById('sellForm');
    const formMessage = document.getElementById('formMessage');

    catalogBtn.addEventListener('click', () => {
        catalogSection.classList.remove('hidden');
        sellSection.classList.add('hidden');
        formMessage.textContent = '';
    });

    sellBtn.addEventListener('click', () => {
        sellSection.classList.remove('hidden');
        catalogSection.classList.add('hidden');
        formMessage.textContent = '';
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        formMessage.textContent = 'Отправка...';

        // Собираем данные формы
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Здесь имитация отправки (можно заменить на реальную API)
        setTimeout(() => {
            formMessage.textContent = 'Спасибо! Ваша заявка отправлена.';
            form.reset();
        }, 1000);
    });
});
