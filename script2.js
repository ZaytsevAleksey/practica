document.addEventListener('DOMContentLoaded', function () {
    const cartButton = document.getElementById('cart-button');
    const modal = document.getElementById('cart-modal');
    const closeButton = document.querySelector('.close-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-button');


    let cart = [];

    // Загрузка корзины из localStorage при запуске
    loadCartFromLocalStorage();
    updateCartDisplay();


    // Функциональность для добавления товара в корзину
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = this.dataset.id;
            const name = this.dataset.name;
            const price = parseFloat(this.dataset.price);

            const itemInCart = cart.find(item => item.id === id);

            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            saveCartToLocalStorage();
            updateCartDisplay();
        });
    });

    // Открытие модального окна
    cartButton.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Закрытие модального окна по клику на крестик
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Закрытие модального окна по клику вне окна
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    // Функция для удаления элемента из корзины
     function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        saveCartToLocalStorage();
        updateCartDisplay();
    }


    // Обновление отображения корзины
    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            const itemTotal = item.price * item.quantity;
            total += itemTotal
            listItem.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>$${itemTotal.toFixed(2)}</span>
            <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
        `;
        cartItemsList.appendChild(listItem);


        const removeButton = listItem.querySelector('.remove-from-cart');
            removeButton.addEventListener('click', function() {
            const itemId = this.dataset.id;
            removeFromCart(itemId);
            });

        });


        cartTotalElement.textContent = `Итого: $${total.toFixed(2)}`;
    }
    // Функция для сохранения корзины в localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Функция для загрузки корзины из localStorage
    function loadCartFromLocalStorage() {
        const storedCart = localStorage.getItem('shoppingCart');
        if (storedCart) {
            cart = JSON.parse(storedCart);
        }
    }
     // Обработчик события для кнопки "Оформить заказ"
    checkoutButton.addEventListener('click', function() {
        // Вы можете добавить логику оформления заказа здесь
         alert('Заказ оформлен!');
    });

});