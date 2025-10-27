// 선택된 옵션 추적
const selectedOptions = {};

// 탭 전환
function switchTab(tabName) {
    // 탭 버튼 활성화
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // 탭 이름으로 버튼 찾아서 활성화
    const targetButton = tabName === 'beans' 
        ? document.querySelector('.tab-btn[onclick*="beans"]')
        : document.querySelector('.tab-btn[onclick*="drip"]');
    
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // 섹션 표시/숨김
    const sections = document.querySelectorAll('.products-section');
    sections.forEach(section => section.classList.remove('active'));
    
    if (tabName === 'beans') {
        document.getElementById('beans-section').classList.add('active');
    } else if (tabName === 'drip') {
        document.getElementById('drip-section').classList.add('active');
    }
}

// 현재 활성화된 탭 가져오기
function getCurrentTab() {
    const beansSection = document.getElementById('beans-section');
    return beansSection.classList.contains('active') ? 'beans' : 'drip';
}

// 스와이프 제스처 감지
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

function handleSwipeGesture() {
    const swipeThreshold = 50; // 최소 스와이프 거리
    const verticalThreshold = 30; // 수직 이동 허용 범위
    
    const horizontalDistance = touchEndX - touchStartX;
    const verticalDistance = Math.abs(touchEndY - touchStartY);
    
    // 수직 스크롤이 너무 크면 스와이프로 인식하지 않음
    if (verticalDistance > verticalThreshold) {
        return;
    }
    
    const currentTab = getCurrentTab();
    
    // 왼쪽으로 스와이프 (다음 탭)
    if (horizontalDistance < -swipeThreshold) {
        if (currentTab === 'beans') {
            switchTab('drip');
        }
    }
    
    // 오른쪽으로 스와이프 (이전 탭)
    if (horizontalDistance > swipeThreshold) {
        if (currentTab === 'drip') {
            switchTab('beans');
        }
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
    // 품절 처리
    const isSoldOut = product.soldOut === true;
    const isAlmostSoldOut = product.almostSoldOut === true;
    const soldOutClass = isSoldOut ? 'sold-out' : '';
    
    // 배지 처리 (여러 배지 동시 표시 가능)
    let badgeHTML = '';
    
    if (isSoldOut) {
        // SEASON OUT은 단독 표시
        badgeHTML = `
            <div class="product-badge badge-soldout">
                SEASON OUT
            </div>
        `;
    } else {
        // 일반 배지 + 품절임박 동시 표시
        const badges = [];
        
        if (product.badge) {
            badges.push(`
                <div class="product-badge badge-${product.badge}">
                    ${product.badge === 'best' ? 'BEST' : 'NEW'}
                </div>
            `);
        }
        
        if (isAlmostSoldOut) {
            badges.push(`
                <div class="product-badge badge-almostsoldout" style="top: ${product.badge ? '34px' : '8px'};">
                    품절임박
                </div>
            `);
        }
        
        badgeHTML = badges.join('');
    }
    
    // 옵션 HTML 생성 (할인율 포함)
    const optionsHTML = product.options.map((option, index) => {
        let priceHTML = `¥${option.price}`;
        
        // 두 번째 옵션(200g 또는 8개 박스)일 경우 할인율 계산
        if (index === 1 && product.options.length === 2) {
            const smallPrice = product.options[0].price;
            const largePrice = product.options[1].price;
            const expectedPrice = smallPrice * 2;
            const discount = ((expectedPrice - largePrice) / expectedPrice * 100).toFixed(0);
            
            if (discount > 0) {
                priceHTML = `
                    <span>¥${option.price}</span>
                    <span class="discount-badge">${discount}%↓</span>
                `;
            }
        }
        
        return `
            <div class="option-row" 
                 data-product-id="${product.id}" 
                 data-option-index="${index}"
                 onclick="${isSoldOut ? '' : `selectOption('${product.id}', ${index}, '${type}')`}">
                <span class="option-label">${option.size}</span>
                <span class="option-price">${priceHTML}</span>
            </div>
        `;
    }).join('');
    
    const buttonText = isSoldOut ? 'SEASON OUT' : '옵션을 선택하세요';
    
    return `
        <div class="product-card ${soldOutClass}">
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
                        onclick="${isSoldOut ? '' : `addProductToCart('${product.id}', '${type}')`}"
                        disabled>
                    ${buttonText}
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
    
    // 스와이프 제스처 이벤트 리스너 추가 (모든 컨테이너에 적용)
    const containers = document.querySelectorAll('.container');
    
    containers.forEach(container => {
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipeGesture();
        }, { passive: true });
    });
});
