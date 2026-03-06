const productsData = {
    beans: [
        // ===== NEW 제품 (4종) =====
        {
            id: 'bean-18',
            name: '르완다 냐마셰케 인조부 레드버번 A Washed',
            icon: '🌿',
            badge: 'new',
            description: '귤꽃의 화사한 향과 상큼한 감귤의 단맛에 더한 고소한 아몬드 초콜릿의 여운 | RFA 인증',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        {
            id: 'bean-17',
            name: '에티오피아 젤라나 게이샤 G1 와인 내추럴',
            icon: '💎',
            badge: 'new',
            description: '섬세한 재스민 꽃향과 복숭아의 달콤함에 더해진 와인의 풍미',
            options: [
                { size: '100g', price: 60 },
                { size: '200g', price: 100 }
            ]
        },
        {
            id: 'bean-15',
            name: '에티오피아 예가체프 반코 고티티 G1',
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
            icon: '☕',
            badge: 'new',
            description: '고소한 견과류와 밀크초콜릿의 부드럽고 균형잡힌 맛',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        // ===== BEST 제품 (2종) =====
        {
            id: 'bean-2',
            name: '킹스블랜드 No.2',
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
            icon: '🏝️',
            badge: 'best',
            description: '깊은 흙향과 다크초콜릿의 묵직한 바디감이 느껴지는 진한 풍미',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 90 }
            ]
        },
        // ===== 일반 제품 =====
        {
            id: 'bean-6',
            name: '킹스블랜드 No.1',
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
            icon: '☕',
            badge: null,
            description: '바닐라와 꿀의 달콤함에 부드러운 초콜릿이 감도는 균형잡힌 풍미',
            options: [
                { size: '100g', price: 45 },
                { size: '200g', price: 75 }
            ]
        },
        {
            id: 'bean-8',
            name: '코스타리카 센트럴밸리 뜨레스 누베스 SHB',
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
            icon: '🌾',
            badge: null,
            description: '은은한 단맛과 부드러운 견과류 향이 느껴지는 편안한 디카페인',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 90 }
            ]
        },
        {
            id: 'bean-12',
            name: '케냐 엠부 AB TOP',
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
            icon: '🥥',
            badge: null,
            description: '크리미한 코코넛과 버터의 달콤함에 바닐라 향이 감도는 디저트 같은 풍미',
            options: [
                { size: '100g', price: 70 },
                { size: '200g', price: 130 }
            ]
        },
        // ===== SEASON OUT =====
        {
            id: 'bean-9',
            name: '케냐 니에리 스카 AA',
            icon: '🦁',
            badge: 'season-out',
            description: '블랙커런트와 체리의 생동감 있는 산미에 와인향이 감도는 풍부한 풍미',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ],
            soldOut: true
        },
        {
            id: 'bean-1',
            name: '데이비드 시그니처',
            icon: '☕',
            badge: 'season-out',
            description: '깊고 풍부한 초콜릿과 견과류의 균형잡힌 조화',
            options: [
                { size: '100g', price: 35 },
                { size: '200g', price: 60 }
            ],
            soldOut: true
        },
        {
            id: 'bean-3',
            name: '과테말라 안티구아 SHB',
            icon: '☕',
            badge: 'season-out',
            description: '스모키한 향과 다크초콜릿의 풍부한 바디감',
            options: [
                { size: '100g', price: 45 },
                { size: '200g', price: 75 }
            ],
            soldOut: true
        },
        {
            id: 'bean-10',
            name: '브라질 세하도 옐로우 버번',
            icon: '☕',
            badge: 'season-out',
            description: '부드러운 바디감과 견과류의 고소한 풍미',
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ],
            soldOut: true
        }
    ],

    drip: [
        // ===== 선물세트 - 맨 위 =====
        {
            id: 'drip-17',
            name: '5가지 & 8가지 & 10가지 맛 선물세트 (랜덤)',
            icon: '🎁',
            badge: 'best',
            description: '다양한 원두를 한 번에! 취향에 맞는 커피를 찾아보세요',
            options: [
                { size: '5개 입/박스', price: 50 },
                { size: '8개 입/박스', price: 80 },
                { size: '10개 입/박스', price: 100 }
            ]
        },
        // ===== NEW 제품 (4종) =====
        {
            id: 'drip-19',
            name: '르완다 냐마셰케 인조부 레드버번 A Washed',
            icon: '🌿',
            badge: 'new',
            description: '귤꽃의 화사한 향과 상큼한 감귤의 단맛에 더한 고소한 아몬드 초콜릿의 여운 | RFA 인증',
            options: [
                { size: '5개 입/박스', price: 50 },
                { size: '8개 입/박스', price: 80 }
            ]
        },
        {
            id: 'drip-18',
            name: '에티오피아 젤라나 게이샤 G1 와인 내추럴',
            icon: '💎',
            badge: 'new',
            description: '섬세한 재스민 꽃향과 복숭아의 달콤함에 더해진 와인의 풍미',
            options: [
                { size: '5개 입/박스', price: 60 },
                { size: '8개 입/박스', price: 90 }
            ]
        },
        {
            id: 'drip-15',
            name: '에티오피아 예가체프 반코 고티티 G1',
            icon: '🌸',
            badge: 'new',
            description: '밝은 베리향과 은은한 꽃향이 조화를 이루는 부드러운 산미',
            options: [
                { size: '5개 입/박스', price: 60 },
                { size: '8개 입/박스', price: 90 }
            ]
        },
        {
            id: 'drip-16',
            name: '온두라스 오팔라카 SHG',
            icon: '☕',
            badge: 'new',
            description: '고소한 견과류와 밀크초콜릿의 부드럽고 균형잡힌 맛',
            options: [
                { size: '5개 입/박스', price: 50 },
                { size: '8개 입/박스', price: 80 }
            ]
        },
        // ===== BEST 제품 (2종) =====
        {
            id: 'drip-2',
            name: '킹스블랜드 No.2',
            icon: '👑',
            badge: 'best',
            description: '부드러운 초콜릿과 캐러멜의 달콤함이 균형있게 어우러진 블랜드',
            options: [
                { size: '5개 입/박스', price: 40 },
                { size: '8개 입/박스', price: 70 }
            ]
        },
        {
            id: 'drip-5',
            name: '인도네시아 가요 만델링 G1 SC19',
            icon: '🏝️',
            badge: 'best',
            description: '깊은 흙향과 다크초콜릿의 묵직한 바디감이 느껴지는 진한 풍미',
            options: [
                { size: '5개 입/박스', price: 55 },
                { size: '8개 입/박스', price: 90 }
            ]
        },
        // ===== 일반 제품 =====
        {
            id: 'drip-6',
            name: '킹스블랜드 No.1',
            icon: '👑',
            badge: null,
            description: '고소한 견과류와 다크초콜릿, 카라멜의 조화로운 블랜드',
            options: [
                { size: '5개 입/박스', price: 40 },
                { size: '8개 입/박스', price: 70 }
            ]
        },
        {
            id: 'drip-7',
            name: '콜롬비아 후일라 산 어거스틴 수프리모',
            icon: '☕',
            badge: null,
            description: '바닐라와 꿀의 달콤함에 부드러운 초콜릿이 감도는 균형잡힌 풍미',
            options: [
                { size: '5개 입/박스', price: 50 },
                { size: '8개 입/박스', price: 70 }
            ]
        },
        {
            id: 'drip-8',
            name: '코스타리카 센트럴밸리 뜨레스 누베스 SHB',
            icon: '☁️',
            badge: null,
            description: '시트러스의 상큼함과 꿀의 단맛이 어우러진 깔끔한 뒷맛',
            options: [
                { size: '5개 입/박스', price: 50 },
                { size: '8개 입/박스', price: 80 }
            ]
        },
        {
            id: 'drip-11',
            name: '콜롬비아 슈가케인 디카페인',
            icon: '🌾',
            badge: null,
            description: '은은한 단맛과 부드러운 견과류 향이 느껴지는 편안한 디카페인',
            options: [
                { size: '5개 입/박스', price: 55 },
                { size: '8개 입/박스', price: 90 }
            ]
        },
        {
            id: 'drip-12',
            name: '케냐 엠부 AB TOP',
            icon: '🦁',
            badge: null,
            description: '베리의 상큼함과 홍차의 깊이가 어우러진 복합적인 풍미',
            options: [
                { size: '5개 입/박스', price: 55 },
                { size: '8개 입/박스', price: 90 }
            ]
        },
        {
            id: 'drip-4',
            name: '파나마 볼칸 바루 팔로마 SHB',
            icon: '🌺',
            badge: null,
            description: '밝은 시트러스와 재스민 꽃향이 어우러진 산뜻하고 우아한 맛',
            options: [
                { size: '5개 입/박스', price: 60 },
                { size: '8개 입/박스', price: 90 }
            ]
        },
        {
            id: 'drip-13',
            name: '콜롬비아 네바다 코코넛 버터 무산소발효',
            icon: '🥥',
            badge: null,
            description: '크리미한 코코넛과 버터의 달콤함에 바닐라 향이 감도는 디저트 같은 풍미',
            options: [
                { size: '5개 입/박스', price: 65 },
                { size: '8개 입/박스', price: 100 }
            ]
        },
        // ===== SEASON OUT =====
        {
            id: 'drip-9',
            name: '케냐 니에리 스카 AA',
            icon: '🦁',
            badge: 'season-out',
            description: '블랙커런트와 체리의 생동감 있는 산미에 와인향이 감도는 풍부한 풍미',
            options: [
                { size: '5개 입/박스', price: 50 },
                { size: '8개 입/박스', price: 80 }
            ],
            soldOut: true
        },
        {
            id: 'drip-3',
            name: '과테말라 안티구아 SHB',
            icon: '☕',
            badge: 'season-out',
            description: '스모키한 향과 다크초콜릿의 풍부한 바디감',
            options: [
                { size: '5개 입/박스', price: 45 },
                { size: '8개 입/박스', price: 75 }
            ],
            soldOut: true
        },
        {
            id: 'drip-1',
            name: '데이비드 시그니처',
            icon: '☕',
            badge: 'season-out',
            description: '깊고 풍부한 초콜릿과 견과류의 균형잡힌 조화',
            options: [
                { size: '5개 입/박스', price: 35 },
                { size: '8개 입/박스', price: 60 }
            ],
            soldOut: true
        },
        {
            id: 'drip-10',
            name: '브라질 세하도 옐로우 버번',
            icon: '☕',
            badge: 'season-out',
            description: '부드러운 바디감과 견과류의 고소한 풍미',
            options: [
                { size: '5개 입/박스', price: 40 },
                { size: '8개 입/박스', price: 70 }
            ],
            soldOut: true
        }
    ]
};
