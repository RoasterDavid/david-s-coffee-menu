// 제품 데이터
const productsData = {
    beans: [
        {
            id: 'bean-1',
            name: '에티오피아 젤라나 게이샤 G1',
            icon: '🌟',
            badge: 'best',
            description: '플로럴한 향과 깔끔한 산미, 베르가못의 우아함',
            options: [
                { size: '100g', price: 60 },
                { size: '200g', price: 100 }
            ]
        },
        {
            id: 'bean-2',
            name: '킹스블랜드 No.2',
            icon: '👑',
            badge: 'best',
            description: '부드러운 초콜릿과 캐러멜의 조화로운 블렌딩',
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        },
        {
            id: 'bean-3',
            name: '에티오피아 구지 아돌라 G1 Winey Natural',
            icon: '🍷',
            badge: 'best',
            soldOut: true,
            description: '와인같은 깊은 풍미와 베리류의 달콤함',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        {
            id: 'bean-4',
            name: '파나마 볼칸 바루 팔로마 SHB',
            icon: '🌺',
            badge: null,
            description: '밝은 감귤향과 꿀의 단맛, 균형잡힌 바디감',
            options: [
                { size: '100g', price: 60 },
                { size: '200g', price: 100 }
            ]
        },
        {
            id: 'bean-5',
            name: '인도네시아 가요 만델링 G1',
            icon: '🏝️',
            badge: null,
            description: '묵직한 바디감과 허브향, 깊은 다크 초콜릿',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 90 }
            ]
        },
        {
            id: 'bean-6',
            name: '킹스블랜드 No.1',
            icon: '👑',
            badge: null,
            description: '견과류의 고소함과 부드러운 질감의 베스트셀러',
            options: [
                { size: '100g', price: 40 },
                { size: '200g', price: 70 }
            ]
        },
        {
            id: 'bean-7',
            name: '콜롬비아 후일라 수프리모',
            icon: '☕',
            badge: null,
            description: '깔끔한 산미와 카라멜 단맛의 클래식한 맛',
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
            description: '시트러스한 산미와 부드러운 바디의 균형미',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        {
            id: 'bean-9',
            name: '케냐 니에리 스카 AA',
            icon: '🦁',
            badge: 'new',
            description: '블랙커런트와 토마토의 독특한 산미와 풍미',
            options: [
                { size: '100g', price: 50 },
                { size: '200g', price: 80 }
            ]
        },
        {
            id: 'bean-10',
            name: '브라질 세하도 바우 팜',
            icon: '🌳',
            badge: null,
            description: '고소한 넛향과 초콜릿, 부드러운 마무리',
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
            description: '카페인 없이 즐기는 달콤한 슈가케인 풍미',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 85 }
            ]
        },
        {
            id: 'bean-12',
            name: '케냐 엠부 AB TOP',
            icon: '🦁',
            badge: null,
            description: '강렬한 산미와 과일향, 생동감 넘치는 풍미',
            options: [
                { size: '100g', price: 55 },
                { size: '200g', price: 90 }
            ]
        },
        {
            id: 'bean-13',
            name: '콜롬비아 네바다 코코넛 버터 무산소발효',
            icon: '🥥',
            badge: null,
            description: '독특한 코코넛과 버터의 크리미한 열대 풍미',
            options: [
                { size: '100g', price: 70 },
                { size: '200g', price: 130 }
            ]
        }
    ],
    drip: [
        {
            id: 'drip-1',
            name: '5가지 & 8가지 맛 선물세트 랜덤',
            icon: '🎁',
            badge: 'best',
            description: '다양한 원산지의 맛을 한번에 즐기는 선물세트',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-2',
            name: '에티오피아 구지 아돌라 G1',
            icon: '🍷',
            badge: 'best',
            soldOut: true,
            description: '와인같은 깊은 풍미와 베리류의 달콤함',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-3',
            name: '에티오피아 젤라나 게이샤 G1',
            icon: '🌟',
            badge: 'best',
            description: '플로럴한 향과 깔끔한 산미, 베르가못의 우아함',
            options: [
                { size: '5개/박스', price: 60 },
                { size: '8개/박스', price: 90 }
            ]
        },
        {
            id: 'drip-4',
            name: '파나마 볼칸 바루 팔로마 SHB',
            icon: '🌺',
            badge: null,
            description: '밝은 감귤향과 꿀의 단맛, 균형잡힌 바디감',
            options: [
                { size: '5개/박스', price: 60 },
                { size: '8개/박스', price: 90 }
            ]
        },
        {
            id: 'drip-5',
            name: '인도네시아 가요 만델링 G1',
            icon: '🏝️',
            badge: null,
            description: '묵직한 바디감과 허브향, 깊은 다크 초콜릿',
            options: [
                { size: '5개/박스', price: 55 },
                { size: '8개/박스', price: 90 }
            ]
        },
        {
            id: 'drip-6',
            name: '킹스블랜드 No.1',
            icon: '👑',
            badge: null,
            description: '견과류의 고소함과 부드러운 질감의 베스트셀러',
            options: [
                { size: '5개/박스', price: 40 },
                { size: '8개/박스', price: 70 }
            ]
        },
        {
            id: 'drip-7',
            name: '콜롬비아 후일라 수프리모',
            icon: '☕',
            badge: null,
            description: '깔끔한 산미와 카라멜 단맛의 클래식한 맛',
            options: [
                { size: '5개 박스', price: 50 },
                { size: '8개 박스', price: 70 }
            ]
        },
        {
            id: 'drip-8',
            name: '코스타리카 센트럴밸리 뜨레스 누베스 SHB',
            icon: '☁️',
            badge: null,
            description: '시트러스한 산미와 부드러운 바디의 균형미',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-9',
            name: '케냐 니에리 스카 AA',
            icon: '🦁',
            badge: 'new',
            description: '블랙커런트와 토마토의 독특한 산미와 풍미',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-10',
            name: '브라질 세하도 바우 팜',
            icon: '🌳',
            badge: null,
            description: '고소한 넛향과 초콜릿, 부드러운 마무리',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-11',
            name: '콜롬비아 슈가케인 디카페인',
            icon: '🌾',
            badge: null,
            description: '카페인 없이 즐기는 달콤한 슈가케인 풍미',
            options: [
                { size: '5개/박스', price: 50 },
                { size: '8개/박스', price: 80 }
            ]
        },
        {
            id: 'drip-12',
            name: '케냐 엠부 AB TOP',
            icon: '🦁',
            badge: null,
            description: '강렬한 산미와 과일향, 생동감 넘치는 풍미',
            options: [
                { size: '5개/박스', price: 55 },
                { size: '8개/박스', price: 85 }
            ]
        },
        {
            id: 'drip-13',
            name: '콜롬비아 네바다 코코넛 버터',
            icon: '🥥',
            badge: null,
            description: '독특한 코코넛과 버터의 크리미한 열대 풍미',
            options: [
                { size: '5개/박스', price: 65 },
                { size: '8개/박스', price: 100 }
            ]
        }
    ]
};
