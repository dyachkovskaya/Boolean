document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.selectButtom2');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем класс 'selected' у всех кнопок
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Добавляем класс 'selected' к нажатой кнопке
            this.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.selectButtom');
    const selectedText = document.getElementById('selectedText');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем класс 'selected' у всех кнопок
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Добавляем класс 'selected' к нажатой кнопке
            this.classList.add('selected');
            // Обновляем текст выбранного значения
            selectedText.textContent = 'Selected: ' + this.textContent.trim();
        });
    });
});

document.getElementById('sendMessageButton').addEventListener('click', function() {
    // const selectCategotia = document.getElementById('selectCategoria').value;
    // const selectTech = document.getElementById('selectTech').value;
    const selectCategotia = document.querySelector('.selectButtom.selected').textContent.replace(/\s+/g, ' ').trim();
    const selectTech = document.querySelector('.selectButtom2.selected').textContent.replace(/\s+/g, ' ').trim();

    const fullname = document.getElementById('fullnameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;
    const url = "https://api.telegram.org/bot7091641888:AAFzD1Sh0RKP7ravyq-Fd6sLf45XwoZUqgs/sendMessage";
    const data = {
        chat_id: "-1002211912373",
        text: `Application:\n\nКатегория: ${selectCategotia}\nУслуги: ${selectTech}\nИмя: ${fullname} \nПочта: ${email} \nОписание: ${message}`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})

document.getElementById('sendMessageButtonAsk').addEventListener('click', function() {
    const fullname = document.getElementById('fullnameInputAsk').value;
    const email = document.getElementById('emailInputAsk').value;
    const message = document.getElementById('messageInputAsk').value;
    const url = "https://api.telegram.org/bot7091641888:AAFzD1Sh0RKP7ravyq-Fd6sLf45XwoZUqgs/sendMessage";
    const data = {
        chat_id: "-1002211912373",
        text: `Ask us anything:\n\n Имя: ${fullname} \nПочта: ${email} \nВопрос: ${message}`
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
})


document.getElementById('sendMessageButton').addEventListener('click', function() {
    // Очистка выбранных элементов в группе selectButtom
    const selectButtomElements = document.querySelectorAll('.selectButtom.selected');
    selectButtomElements.forEach(element => {
        element.classList.remove('selected');
    });

    // Очистка выбранных элементов в группе selectButtom2
    const selectButtom2Elements = document.querySelectorAll('.selectButtom2.selected');
    selectButtom2Elements.forEach(element => {
        element.classList.remove('selected');
    });
    // Очистка значений полей ввода
    document.getElementById('fullnameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
});

document.getElementById('sendMessageButtonAsk').addEventListener('click', function() {
    // Очистка значений полей ввода
    document.getElementById('fullnameInputAsk').value = '';
    document.getElementById('emailInputAsk').value = '';
    document.getElementById('messageInputAsk').value = '';
});
