// David's Coffee - Products Data
// 모든 상품 데이터 (원두 & 드립백)

const productsData = {
    beans: [
        // === NEW 제품 (3종) ===
        {
            id: 'bean-14',
            name: '에티오피아 벤치 마지 게이샤 G1',
            nameEn: 'Ethiopia Bench Maji Geisha G1',
            icon: '💎',
            badge: 'new',
            description: '섬세한 재스민 꽃향과 복숭아의 달콤함이 어우러진 우아한 풍미',
            options: [
                { size: '100g', price: 60 },
                { size: '200g', price: 100 }
            ]
        },
        {
            id: 'bean-15',
            name: '에티오피아 예가체프 반코 고티티 G1',
            nameEn: 'Ethiopia Yirgacheffe Banko Gotiti G1',
            icon: '🌸',
            badge: 'new',
            description: '밝은 베리향과 은은한 꽃향이 조화를 이루는 부드러운 산미',
            options: [
                { size: '100g', price: 60 },
                { size: '200g', price: 100 }
            ]
        },
        {
            id: 'bean-16',
            name: '온두라스 오팔라카 SHG',
            nameEn: 'Honduras SHG EP Opalaca',
            icon: '☕',
            badge: 'new',
            description: '고소한 견과류와 밀크초콜릿의 부드럽고 균형잡힌 맛',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },

        // === BEST 제품 (2종) ===
        {
            id: 'bean-2',
            name: '킹스블랜드 No.2',
            nameEn: "King's Blend No.2",
            icon: '👑',
            badge: 'best',
            description: '부드러운 초콜릿과 캐러멜의 달콤함이 균형있게 어우러진 블랜드',
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        },
        {
            id: 'bean-5',
            name: '인도네시아 가요 만델링 G1 SC19',
            nameEn: 'Indonesia Gayo Mandheling G1 SC19',
            icon: '🏝️',
            badge: 'best',
            description: '깊은 흙향과 다크초콜릿의 묵직한 바디감이 느껴지는 진한 풍미',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 90 }
            ]
        },

        // === 일반 제품 (가격순) ===
        {
            id: 'bean-6',
            name: '킹스블랜드 No.1',
            nameEn: "King's Blend No.1",
            icon: '👑',
            badge: null,
            description: '고소한 견과류와 다크초콜릿, 카라멜의 조화로운 블랜드',
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        },
        {
            id: 'bean-7',
            name: '콜롬비아 후일라 산 어거스틴 수프리모',
            nameEn: 'Colombia Huila San Agustin Supremo',
            icon: '☕',
            badge: null,
            description: '바닐라와 꿀의 달콤함에 부드러운 초콜릿이 감도는 균형잡힌 풍미',
            options: [
                { size: '100g', price: 45 },
                { size: '200g', price: 75 }
            ]
        },
        {
            id: 'bean-9',
            name: '케냐 니에리 스카 AA',
            nameEn: 'Kenya Nyeri Scar AA',
            icon: '🦁',
            badge: null,
            description: '블랙커런트와 체리의 생동감 있는 산미에 와인향이 감도는 풍부한 풍미',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        {
            id: 'bean-8',
            name: '코스타리카 센트럴밸리 뜨레스 누베스 SHB',
            nameEn: 'Costa Rica Central Valley Tres Nubes SHB',
            icon: '☁️',
            badge: null,
            description: '시트러스의 상큼함과 꿀의 단맛이 어우러진 깔끔한 뒷맛',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        {
            id: 'bean-11',
            name: '콜롬비아 슈가케인 디카페인',
            nameEn: 'Colombia Sugarcane Decaf',
            icon: '🌾',
            badge: null,
            description: '은은한 단맛과 부드러운 견과류 향이 느껴지는 편안한 디카페인',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 85 }
            ]
        },
        {
            id: 'bean-12',
            name: '케냐 엠부 AB TOP',
            nameEn: 'Kenya Embu AB Top',
            icon: '🦁',
            badge: null,
            description: '베리의 상큼함과 홍차의 깊이가 어우러진 복합적인 풍미',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 90 }
            ]
        },
        {
            id: 'bean-4',
            name: '파나마 볼칸 바루 팔로마 SHB',
            nameEn: 'Panama Volcan Baru Palomar SHB',
            icon: '🌺',
            badge: null,
            description: '밝은 시트러스와 재스민 꽃향이 어우러진 산뜻하고 우아한 맛',
            options: [
                { size: '100g', price: 60 },
                { size: '200g', price: 100 }
            ]
        },
        {
            id: 'bean-13',
            name: '콜롬비아 네바다 코코넛 버터 무산소발효',
            nameEn: 'Colombia Nevada Coconut Butter Anaerobic',
            icon: '🥥',
            badge: null,
            description: '크리미한 코코넛과 버터의 달콤함에 바닐라 향이 감도는 디저트 같은 풍미',
            options: [
                { size: '100g', price: 70 },
                { size: '200g', price: 130 }
            ]
        },

        // === SEASON OUT (3종) - 품절 ===
        {
            id: 'bean-1',
            name: '킹스블랜드 No.3',
            nameEn: "King's Blend No.3",
            icon: '👑',
            badge: 'seasonout',
            description: '진한 다크초콜릿과 견과류의 풍부한 바디감',
            soldOut: true,
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        },
        {
            id: 'bean-3',
            name: '브라질 옐로우 버번 펄프드 내추럴',
            nameEn: 'Brazil Yellow Bourbon Pulped Natural',
            icon: '☕',
            badge: 'seasonout',
            description: '고소한 견과류와 캐러멜의 부드러운 단맛',
            soldOut: true,
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        },
        {
            id: 'bean-10',
            name: '인도 푸자 로부스타 카피 로얄',
            nameEn: 'India Puja Robusta Kaapi Royal',
            icon: '🏝️',
            badge: 'seasonout',
            description: '깊은 쓴맛과 강렬한 바디감의 로부스타 블랜드',
            soldOut: true,
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        }
    ],

    drip: [
        // === 선물세트 (맨 위 고정) ===
        {
            id: 'drip-gift',
            name: '5가지 & 8가지 & 10가지 맛 선물세트 (랜덤)',
            nameEn: 'Assorted Gift Set (Random Selection)',
            icon: '🎁',
            badge: 'best',
            description: '인기 드립백 5종 또는 8종을 랜덤으로 담은 선물 세트. 다양한 맛을 한 번에 즐기고 싶으신 분께 추천합니다.',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 },
                { size: '10개/박스', price: 100 }
            ]
        },

        // === NEW 제품 (3종) - 원두와 동일한 맛 표현 ===
        {
            id: 'drip-14',
            name: '에티오피아 벤치 마지 게이샤 G1',
            nameEn: 'Ethiopia Bench Maji Geisha G1',
            icon: '💎',
            badge: 'new',
            description: '섬세한 재스민 꽃향과 복숭아의 달콤함이 어우러진 우아한 풍미',
            options: [
                { size: '5개/박스', price: 60 },
                { size: '8개/박스', price: 90 }
            ]
        },
        {
            id: 'drip-15',
            name: '에티오피아 예가체프 반코 고티티 G1',
            nameEn: 'Ethiopia Yirgacheffe Banko Gotiti G1',
            icon: '🌸',
            badge: 'new',
            description: '밝은 베리향과 은은한 꽃향이 조화를 이루는 부드러운 산미',
            options: [
                { size: '5개/박스', price: 60 },
                { size: '8개/박스', price: 90 }
            ]
        },
        {
            id: 'drip-16',
            name: '온두라스 오팔라카 SHG',
            nameEn: 'Honduras SHG EP Opalaca',
            icon: '☕',
            badge: 'new',
            description: '고소한 견과류와 밀크초콜릿의 부드럽고 균형잡힌 맛',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },

        // === BEST 제품 (2종) ===
        {
            id: 'drip-2',
            name: '킹스블랜드 No.2',
            nameEn: "King's Blend No.2",
            icon: '👑',
            badge: 'best',
            description: '부드러운 초콜릿과 캐러멜의 달콤함이 균형있게 어우러진 블랜드',
            options: [
                { size: '5개/박스', price: 40 },
                { size: '8개/박스', price: 70 }
            ]
        },
        {
            id: 'drip-5',
            name: '인도네시아 가요 만델링 G1 SC19',
            nameEn: 'Indonesia Gayo Mandheling G1 SC19',
            icon: '🏝️',
            badge: 'best',
            description: '깊은 흙향과 다크초콜릿의 묵직한 바디감이 느껴지는 진한 풍미',
            options: [
                { size: '5개/박스', price: 55 },
                { size: '8개/박스', price: 90 }
            ]
        },

        // === 일반 제품 (가격순) - 원두와 동일한 맛 표현 ===
        {
            id: 'drip-6',
            name: '킹스블랜드 No.1',
            nameEn: "King's Blend No.1",
            icon: '👑',
            badge: null,
            description: '고소한 견과류와 다크초콜릿, 카라멜의 조화로운 블랜드',
            options: [
                { size: '5개/박스', price: 40 },
                { size: '8개/박스', price: 70 }
            ]
        },
        {
            id: 'drip-7',
            name: '콜롬비아 후일라 산 어거스틴 수프리모',
            nameEn: 'Colombia Huila San Agustin Supremo',
            icon: '☕',
            badge: null,
            description: '바닐라와 꿀의 달콤함에 부드러운 초콜릿이 감도는 균형잡힌 풍미',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 70 }
            ]
        },
        {
            id: 'drip-9',
            name: '케냐 니에리 스카 AA',
            nameEn: 'Kenya Nyeri Scar AA',
            icon: '🦁',
            badge: null,
            description: '블랙커런트와 체리의 생동감 있는 산미에 와인향이 감도는 풍부한 풍미',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-8',
            name: '코스타리카 센트럴밸리 뜨레스 누베스 SHB',
            nameEn: 'Costa Rica Central Valley Tres Nubes SHB',
            icon: '☁️',
            badge: null,
            description: '시트러스의 상큼함과 꿀의 단맛이 어우러진 깔끔한 뒷맛',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-11',
            name: '콜롬비아 슈가케인 디카페인',
            nameEn: 'Colombia Sugarcane Decaf',
            icon: '🌾',
            badge: null,
            description: '은은한 단맛과 부드러운 견과류 향이 느껴지는 편안한 디카페인',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-12',
            name: '케냐 엠부 AB TOP',
            nameEn: 'Kenya Embu AB Top',
            icon: '🦁',
            badge: null,
            description: '베리의 상큼함과 홍차의 깊이가 어우러진 복합적인 풍미',
            options: [
                { size: '5개/박스', price: 55 },
                { size: '8개/박스', price: 85 }
            ]
        },
        {
            id: 'drip-4',
            name: '파나마 볼칸 바루 팔로마 SHB',
            nameEn: 'Panama Volcan Baru Palomar SHB',
            icon: '🌺',
            badge: null,
            description: '밝은 시트러스와 재스민 꽃향이 어우러진 산뜻하고 우아한 맛',
            options: [
                { size: '5개/박스', price: 60 },
                { size: '8개/박스', price: 90 }
            ]
        },
        {
            id: 'drip-13',
            name: '콜롬비아 네바다 코코넛 버터 무산소발효',
            nameEn: 'Colombia Nevada Coconut Butter Anaerobic',
            icon: '🥥',
            badge: null,
            description: '크리미한 코코넛과 버터의 달콤함에 바닐라 향이 감도는 디저트 같은 풍미',
            options: [
                { size: '5개/박스', price: 65 },
                { size: '8개/박스', price: 100 }
            ]
        },

        // === SEASON OUT (3종) - 품절 ===
        {
            id: 'drip-1',
            name: '킹스블랜드 No.3',
            nameEn: "King's Blend No.3",
            icon: '👑',
            badge: 'seasonout',
            description: '진한 다크초콜릿과 견과류의 풍부한 바디감',
            soldOut: true,
            options: [
                { size: '5개/박스', price: 40 },
                { size: '8개/박스', price: 70 }
            ]
        },
        {
            id: 'drip-3',
            name: '브라질 옐로우 버번 펄프드 내추럴',
            nameEn: 'Brazil Yellow Bourbon Pulped Natural',
            icon: '☕',
            badge: 'seasonout',
            description: '고소한 견과류와 캐러멜의 부드러운 단맛',
            soldOut: true,
            options: [
                { size: '5개/박스', price: 40 },
                { size: '8개/박스', price: 70 }
            ]
        },
        {
            id: 'drip-10',
            name: '인도 푸자 로부스타 카피 로얄',
            nameEn: 'India Puja Robusta Kaapi Royal',
            icon: '🏝️',
            badge: 'seasonout',
            description: '깊은 쓴맛과 강렬한 바디감의 로부스타 블랜드',
            soldOut: true,
            options: [
                { size: '5개/박스', price: 40 },
                { size: '8개/박스', price: 70 }
            ]
        }
    ]
};
