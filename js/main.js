// David's Coffee - Main UI & Event Handlers
// UI 렌더링 및 이벤트 처리

// 현재 선택된 탭
let currentTab = 'beans';

// 탭 전환
function switchTab(tab) {
    currentTab = tab;
    
    // 탭 버튼 활성화 상태 변경
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // 섹션 표시/숨김
    document.querySelectorAll('.products-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(`${tab}-section`).classList.add('active');
}

// 제품 카드 생성
function createProductCard(product, type) {
    const soldOutClass = product.soldOut ? 'sold-out' : '';
    const badge = product.badge ? `<span class="badge ${product.badge}">${product.badge}</span>` : '';
    
    // 옵션 버튼들 생성
    const optionsHTML = product.options.map((option, index) => `
        <button class="option-btn" 
                onclick="selectOption(event, '${product.id}', '${option.size}', ${option.price})">
            <span class="option-size">${option.size}</span>
            <span class="option-price">¥${option.price}</span>
        </button>
    `).join('');
    
    return `
        <div class="product-card ${soldOutClass}" data-product-id="${product.id}">
            <div class="product-info">
                <div class="product-header">
                    <div class="product-icon">${product.icon}</div>
                    <div class="product-title">
                        ${badge}
                        <h3 class="product-name">${product.name}</h3>
                    </div>
                </div>
                <p class="product-description">${product.description}</p>
                <div class="product-options">
                    ${optionsHTML}
                </div>
                <button class="add-to-cart-btn" 
                        onclick="addProductToCart('${product.id}', '${product.name}', '${type}')"
                        ${product.soldOut ? 'disabled' : ''}>
                    ${product.soldOut ? '품절' : '🛒 장바구니에 담기'}
                </button>
            </div>
        </div>
    `;
}

// 옵션 선택
function selectOption(event, productId, size, price) {
    const productCard = event.target.closest('.product-card');
    const buttons = productCard.querySelectorAll('.option-btn');
    
    // 모든 옵션 버튼 비활성화
    buttons.forEach(btn => btn.classList.remove('selected'));
    
    // 클릭한 옵션 버튼 활성화
    event.target.closest('.option-btn').classList.add('selected');
    
    // 선택된 옵션 정보 저장 (data 속성 사용)
    productCard.setAttribute('data-selected-size', size);
    productCard.setAttribute('data-selected-price', price);
}

// 장바구니에 상품 추가
function addProductToCart(productId, productName, type) {
    const productCard = document.querySelector(`[data-product-id="${productId}"]`);
    const selectedButton = productCard.querySelector('.option-btn.selected');
    
    // 옵션이 선택되지 않은 경우
    if (!selectedButton) {
        alert('옵션을 먼저 선택해주세요!');
        return;
    }
    
    const selectedSize = productCard.getAttribute('data-selected-size');
    const selectedPrice = parseInt(productCard.getAttribute('data-selected-price'));
    
    addToCart(productId, productName, selectedSize, selectedPrice, type);
}

// 제품 목록 렌더링
function renderProducts(products, containerId, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = products.map(product => createProductCard(product, type)).join('');
}

// 페이지 초기화
function initializePage() {
    // 원두 제품 렌더링
    renderProducts(productsData.beans, 'beansProducts', 'beans');
    
    // 드립백 제품 렌더링
    renderProducts(productsData.drip, 'dripProducts', 'drip');
    
    // 장바구니 로드
    loadCart();
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', (event) => {
    const modal = document.getElementById('orderModal');
    if (event.target === modal) {
        closeOrderModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const modal = document.getElementById('orderModal');
        const cartSidebar = document.getElementById('cartSidebar');
        
        if (modal.classList.contains('active')) {
            closeOrderModal();
        } else if (cartSidebar.classList.contains('active')) {
            toggleCart();
        }
    }
});

// 스와이프 제스처로 탭 전환 (모바일)
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.container').addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
}, false);

document.querySelector('.container').addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 50;
    const verticalThreshold = 30;
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // 왼쪽으로 스와이프 -> 드립백으로 이동
        if (currentTab === 'beans') {
            document.querySelectorAll('.tab-btn')[1].click();
        }
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
        // 오른쪽으로 스와이프 -> 원두로 이동
        if (currentTab === 'drip') {
            document.querySelectorAll('.tab-btn')[0].click();
        }
    }
}

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
});
