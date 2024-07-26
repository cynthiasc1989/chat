document.addEventListener("DOMContentLoaded", function() {
    const chatImages = {
        pedro: 'assets/img/hombre1.jfif',
        juan: 'assets/img/hombre2.webp'
    };

    // Mensajes predeterminados para Pedro y Juan
    const messages = {
        pedro: [
            { type: 'received', text: 'Hola, ¿cómo estás?', time: 'hace 2 minutos', read: false },
            { type: 'sent', text: 'Estoy bien, ¿y tú?', time: 'hace 1 minuto', read: false },
            { type: 'received', text: 'Todo bien, gracias. ¿Quieres hacer algo esta tarde?', time: 'hace 30 segundos', read: false }
        ],
        juan: [
            { type: 'received', text: '¿Has terminado el proyecto?', time: 'hace 40 minutos', read: false },
            { type: 'sent', text: 'Casi, me falta poco. ¿Cómo va el tuyo?', time: 'hace 35 minutos', read: false },
            { type: 'received', text: 'Voy bien, solo me falta revisar algunos detalles.', time: 'hace 20 minutos', read: false },
            { type: 'sent', text: 'Perfecto, avísame si necesitas ayuda.', time: 'hace 15 minutos', read: false }
        ]
    };

    function selectChat(chatId) {
        const chatHeaderImg = document.querySelector('.chat-header img');
        const chatHeaderName = document.querySelector('.chat-header h2');
        const messagesContainer = document.querySelector('#messages-container');

        if (!messages[chatId]) {
            return;
        }

        chatHeaderImg.src = chatImages[chatId];
        chatHeaderName.textContent = chatId.charAt(0).toUpperCase() + chatId.slice(1);

        // Mostrar los mensajes
        const chatMessages = messages[chatId].map(message => `
            <div class="message ${message.type}">
                <p>${message.text}</p>
                <span class="time">${message.time}</span>
            </div>
        `).join('');

        messagesContainer.innerHTML = chatMessages;

        // Marcar todos los mensajes como leídos cuando se selecciona el chat
        messages[chatId].forEach(message => {
            message.read = true;
        });

        // Actualizar la lista de chats
        updateChatList();
    }

    function updateChatList() {
        document.querySelectorAll('.chat-item').forEach(item => {
            const chatId = item.id.replace('chat-', '');
            const unreadMessages = messages[chatId] ? messages[chatId].filter(msg => !msg.read).length : 0;

            if (unreadMessages > 0) {
                item.classList.add('unread');
                item.querySelector('.chat-last-message').textContent = `Tienes ${unreadMessages} mensajes no leídos`;
            } else {
                item.classList.remove('unread');
                item.querySelector('.chat-last-message').textContent = 'Último mensaje'; 
            }
        });
    }

    document.querySelectorAll('.chat-item').forEach(item => {
        item.addEventListener('click', function() {
            const chatId = item.id.replace('chat-', '');
            selectChat(chatId);
        });
    });

    // Inicial: cargar los mensajes de Pedro
    selectChat('pedro');
});

function attachFile(type) {
    switch (type) {
        case 'image':
            alert('Adjuntar una imagen.');
            break;
        case 'video':
            alert('Adjuntar un video.');
            break;
        case 'document':
            alert('Adjuntar un documento.');
            break;
        default:
            alert('Tipo de archivo no soportado.');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});






