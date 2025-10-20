// 선택된 옵션 추적
const selectedOptions = {};

// 탭 전환
function switchTab(tabName) {
    // 탭 버튼 활성화
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // 섹션 표시/숨김
    const sections = document.querySelectorAll('.products-section');
    sections.forEach(section => section.classList.remove('active'));
    
    if (tabName === 'beans') {
        document.getElementById('beans-section').classList.add('active');
    } else if (tabName === 'drip') {
        document.getElementById('drip-section').classList.add('active');
    }
}

// 제품 카드 렌더링
function renderProducts() {
    // 원두 렌더링
    const beansContainer = document.getElementById('beansProducts');
    beansContainer.innerHTML = productsData.beans.map(product => createProductCard(product, 'beans')).join('');
    
    // 드립백 렌더링
    const dripContainer = document.getElementById('dripProducts');
    dripContainer.innerHTML = productsData.drip.map(product => createProductCard(product, 'drip')).join('');
}

// 제품 카드 HTML 생성
function createProductCard(product, type) {
    const badgeHTML = product.badge ? `
        <div class="product-badge badge-${product.badge}">
            ${product.badge === 'best' ? 'BEST' : 'NEW'}
        </div>
    ` : '';
    
    const optionsHTML = product.options.map((option, index) => `
        <div class="option-row" 
             data-product-id="${product.id}" 
             data-option-index="${index}"
             onclick="selectOption('${product.id}', ${index}, '${type}')">
            <span class="option-label">${option.size}</span>
            <span class="option-price">¥${option.price}</span>
        </div>
    `).join('');
    
    return `
        <div class="product-card">
            ${badgeHTML}
            <div class="product-header">
                <div class="product-icon">${product.icon}</div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                </div>
            </div>
            <div class="product-body">
                <div class="product-options">
                    ${optionsHTML}
                </div>
                <button class="add-to-cart-btn" 
                        id="add-btn-${product.id}"
                        disabled
                        onclick="addProductToCart('${product.id}', '${type}')">
                    옵션을 선택하세요
                </button>
            </div>
        </div>
    `;
}

// 옵션 선택
function selectOption(productId, optionIndex, type) {
    // 같은 제품의 다른 옵션 선택 해제
    const allOptions = document.querySelectorAll(`[data-product-id="${productId}"]`);
    allOptions.forEach(option => option.classList.remove('selected'));
    
    // 선택한 옵션 활성화
    const selectedOption = document.querySelector(`[data-product-id="${productId}"][data-option-index="${optionIndex}"]`);
    selectedOption.classList.add('selected');
    
    // 선택된 옵션 저장
    selectedOptions[productId] = {
        index: optionIndex,
        type: type
    };
    
    // 버튼 활성화
    const addBtn = document.getElementById(`add-btn-${productId}`);
    addBtn.disabled = false;
    addBtn.textContent = '담기';
}

// 장바구니에 제품 추가
function addProductToCart(productId, type) {
    const selectedOption = selectedOptions[productId];
    
    if (!selectedOption) {
        showNotification('옵션을 선택해주세요.');
        return;
    }
    
    // 제품 정보 가져오기
    const product = type === 'beans' 
        ? productsData.beans.find(p => p.id === productId)
        : productsData.drip.find(p => p.id === productId);
    
    if (!product) return;
    
    const option = product.options[selectedOption.index];
    
    // 장바구니에 추가
    addToCart(
        productId,
        product.name,
        option.size,
        option.price,
        type
    );
    
    // 선택 초기화
    const allOptions = document.querySelectorAll(`[data-product-id="${productId}"]`);
    allOptions.forEach(option => option.classList.remove('selected'));
    
    delete selectedOptions[productId];
    
    // 버튼 비활성화
    const addBtn = document.getElementById(`add-btn-${productId}`);
    addBtn.disabled = true;
    addBtn.textContent = '옵션을 선택하세요';
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    
    // 모달 외부 클릭 시 닫기
    const orderModal = document.getElementById('orderModal');
    
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            closeOrderModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (orderModal.classList.contains('active')) {
                closeOrderModal();
            }
            if (document.getElementById('cartSidebar').classList.contains('active')) {
                toggleCart();
            }
        }
    });
});
