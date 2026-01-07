// David's Coffee - Cart Functionality
// 장바구니 기능 관리

// 장바구니 데이터
let cart = [];

// LocalStorage에서 장바구니 로드
function loadCart() {
    const savedCart = localStorage.getItem('davidsCoffeeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// LocalStorage에 장바구니 저장
function saveCart() {
    localStorage.setItem('davidsCoffeeCart', JSON.stringify(cart));
}

// 장바구니에 상품 추가
function addToCart(productId, productName, option, price, type) {
    const itemId = `${productId}-${option}`;
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            productId: productId,
            name: productName,
            option: option,
            price: price,
            quantity: 1,
            type: type
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification(`${productName} (${option})이(가) 장바구니에 추가되었습니다!`);
}

// 장바구니에서 상품 제거
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
    showNotification('상품이 장바구니에서 제거되었습니다.');
}

// 수량 증가
function increaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += 1;
        saveCart();
        updateCartUI();
    }
}

// 수량 감소
function decreaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            saveCart();
            updateCartUI();
        } else {
            if (confirm('이 상품을 장바구니에서 제거하시겠습니까?')) {
                removeFromCart(itemId);
            }
        }
    }
}

// 배송비 계산
function calculateShippingFee(productAmount) {
    const region = document.querySelector('input[name="shippingRegion"]:checked').value;
    
    if (productAmount >= 200) {
        return 0;
    }
    
    return region === 'shanghai' ? 6 : 10;
}

// 배송비 업데이트
function updateShippingFee() {
    const productAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = calculateShippingFee(productAmount);
    const totalPrice = productAmount + shippingFee;
    
    document.getElementById('shippingFee').textContent = shippingFee === 0 ? '무료배송' : `+${shippingFee} RMB`;
    document.getElementById('totalPrice').textContent = `¥${totalPrice}`;
}

// 장바구니 UI 업데이트
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const productAmount = document.getElementById('productAmount');
    
    // 장바구니 아이템 개수 업데이트
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // 장바구니 비어있음
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>🛒</p>
                <p>장바구니가 비어있습니다</p>
            </div>
        `;
        productAmount.textContent = '¥0';
        updateShippingFee();
        return;
    }
    
    // 장바구니 아이템 렌더링
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <div class="cart-item-name">${item.name}</div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">×</button>
            </div>
            <div class="cart-item-option">${item.option}</div>
            <div class="cart-item-footer">
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
                </div>
                <div class="cart-item-price">¥${item.price * item.quantity}</div>
            </div>
        </div>
    `).join('') + '<div class="cart-divider">• • •</div>';
    
    // 상품 금액 계산
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    productAmount.textContent = `¥${totalAmount}`;
    
    // 배송비 업데이트
    updateShippingFee();
}

// 장바구니 토글
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 주문 상세 정보 생성
function generateOrderDetails() {
    const name = document.getElementById('shippingName').value.trim();
    const phone = document.getElementById('shippingPhone').value.trim();
    const address = document.getElementById('shippingAddress').value.trim();
    const region = document.querySelector('input[name="shippingRegion"]:checked').value;
    const regionText = region === 'shanghai' ? '상하이 지역' : '기타 지역';
    
    const productAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = calculateShippingFee(productAmount);
    const totalPrice = productAmount + shippingFee;
    
    const orderDate = new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let orderText = `━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `☕ David's Coffee 주문서\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    orderText += `📅 주문일시: ${orderDate}\n\n`;
    
    orderText += `📦 배송 정보\n`;
    orderText += `이름: ${name}\n`;
    orderText += `연락처: ${phone}\n`;
    orderText += `지역: ${regionText}\n`;
    orderText += `주소: ${address}\n\n`;
    
    orderText += `🛒 주문 내역\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━\n`;
    
    cart.forEach((item, index) => {
        orderText += `${index + 1}. ${item.name}\n`;
        orderText += `   옵션: ${item.option}\n`;
        orderText += `   수량: ${item.quantity}개\n`;
        orderText += `   가격: ¥${item.price} × ${item.quantity} = ¥${item.price * item.quantity}\n\n`;
    });
    
    orderText += `━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `상품 금액: ¥${productAmount}\n`;
    orderText += `배송비: ${shippingFee === 0 ? '무료배송' : `¥${shippingFee}`}\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━\n`;
    orderText += `총 결제 금액: ¥${totalPrice}\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━\n\n`;
    
    orderText += `💳 결제 방법: 위챗 송금 (WeChat Transfer)\n`;
    orderText += `📧 문의: david_han76@outlook.com\n\n`;
    orderText += `감사합니다! 😊`;
    
    return orderText;
}

// 결제 모달 표시
function showPaymentModal() {
    const name = document.getElementById('shippingName').value.trim();
    const phone = document.getElementById('shippingPhone').value.trim();
    const address = document.getElementById('shippingAddress').value.trim();
    
    if (!name || !phone || !address) {
        alert('배송 정보를 모두 입력해주세요.');
        return;
    }
    
    if (cart.length === 0) {
        alert('장바구니가 비어있습니다.');
        return;
    }
    
    const orderDetails = generateOrderDetails();
    document.getElementById('orderDetailsBox').textContent = orderDetails;
    
    const modal = document.getElementById('orderModal');
    modal.classList.add('active');
}

// 주문 상세 모달 닫기
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');
}

// 주문 내역 클립보드에 복사
function copyOrderDetails() {
    const orderText = document.getElementById('orderDetailsBox').textContent;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(orderText)
            .then(() => {
                showNotification('주문 내역이 클립보드에 복사되었습니다! 💬');
            })
            .catch(err => {
                console.error('복사 실패:', err);
                fallbackCopyText(orderText);
            });
    } else {
        fallbackCopyText(orderText);
    }
}

// 대체 복사 방법 (구형 브라우저)
function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        showNotification('주문 내역이 클립보드에 복사되었습니다! 💬');
    } catch (err) {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 주문 내역을 수동으로 복사해주세요.');
    }
    
    document.body.removeChild(textarea);
}

// 주문 확인
function confirmOrder() {
    if (confirm('주문을 완료하시겠습니까?\n위챗으로 주문 내역을 보내주세요.')) {
        // 주문 완료 처리
        cart = [];
        saveCart();
        updateCartUI();
        
        // 배송 정보 초기화
        document.getElementById('shippingName').value = '';
        document.getElementById('shippingPhone').value = '';
        document.getElementById('shippingAddress').value = '';
        document.querySelector('input[name="shippingRegion"][value="shanghai"]').checked = true;
        
        closeOrderModal();
        toggleCart();
        
        showNotification('주문이 완료되었습니다! 위챗으로 주문 내역을 보내주세요. 📧');
    }
}

// 알림 메시지 표시
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 페이지 로드 시 장바구니 로드
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});
