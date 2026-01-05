// 장바구니 관리
let cart = [];

// 장바구니에 제품 추가
function addToCart(productId, productName, option, price, type) {
    // 이미 장바구니에 같은 상품이 있는지 확인
    const existingIndex = cart.findIndex(item => item.id === `${productId}-${option}`);
    
    if (existingIndex === -1) {
        // 새 상품 추가
        const item = {
            id: `${productId}-${option}`,
            productId: productId,
            name: productName,
            option: option,
            price: price,
            quantity: 1,
            type: type
        };
        cart.push(item);
        showNotification('장바구니에 담았습니다! 🛒');
    } else {
        // 기존 상품 수량 증가
        cart[existingIndex].quantity += 1;
        showNotification('수량이 추가되었습니다! 🛒');
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

// 배송비 계산
function calculateShippingFee(productAmount) {
    const regionRadios = document.getElementsByName('shippingRegion');
    let selectedRegion = 'shanghai';
    
    for (const radio of regionRadios) {
        if (radio.checked) {
            selectedRegion = radio.value;
            break;
        }
    }
    
    // 200위안 이상이면 무료배송
    if (productAmount >= 200) {
        return { fee: 0, region: selectedRegion, isFree: true };
    }
    
    // 상하이 6위안, 기타 지역 10위안
    const fee = selectedRegion === 'shanghai' ? 6 : 10;
    return { fee, region: selectedRegion, isFree: false };
}

// 배송비 업데이트
function updateShippingFee() {
    const productAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const { fee, region, isFree } = calculateShippingFee(productAmount);
    
    const shippingFeeElement = document.getElementById('shippingFee');
    const regionText = region === 'shanghai' ? '상하이 지역' : '기타 지역';
    
    if (isFree) {
        shippingFeeElement.innerHTML = `<span style="color: #22c55e; font-weight: 700;">0 RMB (200위안 이상 무료배송 🎁)</span>`;
    } else {
        shippingFeeElement.textContent = `+${fee} RMB (${regionText})`;
    }
    
    // 총 금액 업데이트
    const totalPrice = productAmount + fee;
    document.getElementById('totalPrice').textContent = `¥${totalPrice}`;
    document.getElementById('productAmount').textContent = `¥${productAmount}`;
}

// 장바구니 UI 업데이트
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    
    // 장바구니 총 상품 개수 계산 (수량 포함)
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
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
                    <span class="cart-item-price">¥${item.price * item.quantity}</span>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="decreaseQuantity('${item.id}')">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity('${item.id}')">+</button>
                </div>
            </div>
        `).join('');
    }
    
    // 배송비 및 총액 업데이트
    updateShippingFee();
}

// 수량 증가
function increaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += 1;
        updateCartUI();
        saveCart();
    }
}

// 수량 감소
function decreaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            updateCartUI();
            saveCart();
        } else {
            // 수량이 1일 때 감소하면 삭제 확인
            if (confirm('상품을 장바구니에서 제거하시겠습니까?')) {
                removeFromCart(itemId);
            }
        }
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

// 주문 모달 표시
function showPaymentModal() {
    if (cart.length === 0) {
        showNotification('장바구니가 비어있습니다.');
        return;
    }
    
    // 배송 정보 확인
    const shippingName = document.getElementById('shippingName').value.trim();
    const shippingPhone = document.getElementById('shippingPhone').value.trim();
    const shippingAddress = document.getElementById('shippingAddress').value.trim();
    
    if (!shippingName || !shippingPhone || !shippingAddress) {
        showNotification('모든 배송 정보를 입력해주세요.');
        return;
    }
    
    // 배송 지역 확인
    const regionRadios = document.getElementsByName('shippingRegion');
    let selectedRegion = 'shanghai';
    for (const radio of regionRadios) {
        if (radio.checked) {
            selectedRegion = radio.value;
            break;
        }
    }
    
    // 주문 내역 생성
    const orderDetails = generateOrderDetails(shippingName, shippingPhone, shippingAddress, selectedRegion);
    
    // 주문 내역을 모달에 표시
    const orderDetailsBox = document.getElementById('orderDetailsBox');
    orderDetailsBox.innerHTML = `<pre class="order-text">${orderDetails}</pre>`;
    
    // 모달 표시
    const modal = document.getElementById('orderModal');
    modal.classList.add('active');
    
    // 장바구니 사이드바 닫기
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// 주문 모달 닫기
function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');
}

// 주문 내역 복사
function copyOrderDetails() {
    const orderText = document.querySelector('.order-text').textContent;
    
    // 클립보드에 복사
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(orderText).then(() => {
            showNotification('✅ 주문 내역이 복사되었습니다!');
        }).catch(() => {
            // 복사 실패 시 대체 방법
            fallbackCopyText(orderText);
        });
    } else {
        // 클립보드 API를 지원하지 않는 경우
        fallbackCopyText(orderText);
    }
}

// 대체 복사 방법
function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification('✅ 주문 내역이 복사되었습니다!');
    } catch (err) {
        showNotification('❌ 복사에 실패했습니다. 주문 내역을 직접 선택해서 복사해주세요.');
    }
    
    document.body.removeChild(textArea);
}

// 주문 확인
function confirmOrder() {
    // 장바구니 비우기
    cart = [];
    updateCartUI();
    saveCart();
    
    // 배송 정보 초기화
    document.getElementById('shippingName').value = '';
    document.getElementById('shippingPhone').value = '';
    document.getElementById('shippingAddress').value = '';
    // 지역 선택 초기화 (상하이로)
    document.querySelector('input[name="shippingRegion"][value="shanghai"]').checked = true;
    
    // 모달 닫기
    closeOrderModal();
    
    // 완료 알림
    showNotification('🎉 주문이 접수되었습니다!');
}

// 주문 내역 생성
function generateOrderDetails(shippingName, shippingPhone, shippingAddress, selectedRegion) {
    const productAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const { fee: shippingFee, isFree } = calculateShippingFee(productAmount);
    const totalPrice = productAmount + shippingFee;
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const orderDate = new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    
    const regionText = selectedRegion === 'shanghai' ? '상하이 지역 (上海地区)' : '기타 지역 (其他地区)';
    
    let orderText = `=== David's Coffee 주문 내역 ===\n\n`;
    orderText += `주문 일시: ${orderDate}\n\n`;
    
    orderText += `📦 배송 정보:\n`;
    orderText += `이름: ${shippingName}\n`;
    orderText += `연락처: ${shippingPhone}\n`;
    orderText += `배송 지역: ${regionText}\n`;
    orderText += `상세 주소: ${shippingAddress}\n\n`;
    
    orderText += `주문 상품:\n`;
    orderText += `━━━━━━━━━━━━━━━━━━━━\n`;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        orderText += `${index + 1}. ${item.name}\n`;
        orderText += `   용량/수량: ${item.option} × ${item.quantity}개\n`;
        orderText += `   가격: ¥${item.price} × ${item.quantity} = ¥${itemTotal}\n\n`;
    });
    
    orderText += `상품 금액: ¥${productAmount}\n`;
    
    if (isFree) {
        orderText += `배송비: 0 RMB (200위안 이상 무료배송)\n`;
    } else {
        orderText += `배송비: +${shippingFee} RMB (${regionText})\n`;
    }
    
    orderText += `──────────────────────\n`;
    orderText += `총 결제 금액: ¥${totalPrice}\n\n`;
    orderText += `결제 방법: 위챗페이\n`;
    orderText += `연락처: davids_coffee@outlook.com\n`;
    
    return orderText;
}

// 페이지 로드 시 장바구니 불러오기
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});
