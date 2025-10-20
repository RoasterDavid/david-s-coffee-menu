// 장바구니 관리
let cart = [];

// 장바구니에 제품 추가
function addToCart(productId, productName, option, price, type) {
    const item = {
        id: `${productId}-${option}`,
        productId: productId,
        name: productName,
        option: option,
        price: price,
        type: type
    };
    
    // 이미 장바구니에 같은 상품이 있는지 확인
    const existingIndex = cart.findIndex(item => item.id === `${productId}-${option}`);
    
    if (existingIndex === -1) {
        cart.push(item);
        showNotification('장바구니에 담았습니다! 🛒');
    } else {
        showNotification('이미 장바구니에 있는 상품입니다.');
    }
    
    updateCartUI();
    saveCart();
}

// 장바구니에서 제품 제거
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
    saveCart();
    showNotification('장바구니에서 제거되었습니다.');
}

// 장바구니 UI 업데이트
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const totalPriceElement = document.getElementById('totalPrice');
    const modalTotalPriceElement = document.getElementById('modalTotalPrice');
    
    // 장바구니 개수 업데이트
    cartCount.textContent = cart.length;
    
    // 총 금액 계산
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceElement.textContent = `¥${totalPrice}`;
    if (modalTotalPriceElement) {
        modalTotalPriceElement.textContent = `¥${totalPrice}`;
    }
    
    // 장바구니 아이템 렌더링
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>🛒</p>
                <p>장바구니가 비어있습니다</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-header">
                    <div class="cart-item-name">${item.name}</div>
                    <button class="remove-btn" onclick="removeFromCart('${item.id}')">×</button>
                </div>
                <div class="cart-item-details">
                    <span class="cart-item-option">${item.option}</span>
                    <span class="cart-item-price">¥${item.price}</span>
                </div>
            </div>
        `).join('');
    }
}

// 장바구니 토글
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 로컬 스토리지에 장바구니 저장
function saveCart() {
    localStorage.setItem('davidsCoffeeCart', JSON.stringify(cart));
}

// 로컬 스토리지에서 장바구니 불러오기
function loadCart() {
    const savedCart = localStorage.getItem('davidsCoffeeCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// 알림 표시
function showNotification(message) {
    // 기존 알림 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: #4A3426;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 14px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // 3초 후 제거
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 애니메이션 스타일 추가
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
}

// 결제 모달 표시
function showPaymentModal() {
    if (cart.length === 0) {
        showNotification('장바구니가 비어있습니다.');
        return;
    }
    
    const modal = document.getElementById('paymentModal');
    modal.classList.add('active');
    
    // 모달 총액 업데이트
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('modalTotalPrice').textContent = `¥${totalPrice}`;
}

// 결제 모달 닫기
function closePaymentModal() {
    const modal = document.getElementById('paymentModal');
    modal.classList.remove('active');
}

// 주문 제출
function submitOrder() {
    if (cart.length === 0) {
        showNotification('장바구니가 비어있습니다.');
        return;
    }
    
    // 주문 내역 생성
    const orderDetails = generateOrderDetails();
    
    // 이메일 발송
    sendOrderEmail(orderDetails);
    
    // 결제 모달 닫기
    closePaymentModal();
    
    // 주문 완료 모달 표시
    showSuccessModal();
    
    // 장바구니 비우기
    cart = [];
    updateCartUI();
    saveCart();
    
    // 장바구니 사이드바 닫기
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// 주문 내역 생성
function generateOrderDetails() {
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    const orderDate = new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    let orderText = `=== David's Coffee 주문서 ===\n\n`;
    orderText += `주문 일시: ${orderDate}\n\n`;
    orderText += `주문 내역:\n`;
    orderText += `────────────────────────\n`;
    
    cart.forEach((item, index) => {
        orderText += `${index + 1}. ${item.name}\n`;
        orderText += `   옵션: ${item.option}\n`;
        orderText += `   금액: ¥${item.price}\n\n`;
    });
    
    orderText += `────────────────────────\n`;
    orderText += `총 금액: ¥${totalPrice}\n\n`;
    orderText += `결제 방법: 위챗페이\n`;
    
    return orderText;
}

// 이메일 발송
function sendOrderEmail(orderDetails) {
    const email = 'david_han76@outlook.com';
    const subject = encodeURIComponent(`[David's Coffee] 새로운 주문`);
    const body = encodeURIComponent(orderDetails);
    
    // mailto 링크 생성 및 실행
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

// 주문 완료 모달 표시
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
}

// 주문 완료 모달 닫기
function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// 페이지 로드 시 장바구니 불러오기
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});
