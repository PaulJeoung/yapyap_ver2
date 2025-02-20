import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: " 정병오",
    lastName: "pauljeoung",
    initials: "PJ",
    position: "Backend Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🏠',
            text: '딸바보 아빠'
        },
        {
            emoji: '🌎',
            text: '경기도 용인시 처인구 한터로 55-30'
        },
        {
            emoji: "💼",
            text: "활발히 구직활동중"
        },
        {
            emoji: "📧",
            text: "kuni05@naver.com"
        }
    ],
    socials: [ // https://fontawesome.com/v4/icons/
        {
            link: "https://open.kakao.com/o/sua56Aeh",
            icon: 'fa fa-commenting-o',
            label: 'kakao'
        },
        {
            link: "https://prickly-sparrow-0cb.notion.site/Backend-Developer-Applicant-193228727bfa8016bce7ce0148f384d3",
            icon: "fa fa-file-text",
            label: 'notion'
        },
        {
            link: "https://github.com/PaulJeoung",
            icon: "fa fa-github-alt",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/byoungow-paul-jeoung-96691383",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://blog.naver.com/pauljeoung",
            icon: "fa fa-code",
            label: 'devblog'
        },
        {
            link: "https://passorfail.tistory.com",
            icon: "fa fa-rss",
            label: 'qablog'
        }

    ],
    bio: `
        저는 지난 10여 년간 검증과 운영 분야에서 폭넓은 도메인 지식과 실무 경험을 쌓아왔습니다. 특히, 모바일 Gateway API 연결을 위한 컨트롤러 프로토타입 개발을 통해 스마트월렛의 상용화에 기여한 바 있습니다. 

        검증 분야에서는 IP 전화기부터 모바일 기기에 이르는 네트워크 및 기능 검증을 수행했으며, 해외 현지에서의 필드 테스트 및 성능 테스트도 주도적으로 진행했습니다.
        또한, Syrup, 11번가, T-map과 같은 웹/모바일 플랫폼서비스는 물론, LINE의 광고정산시스템과 블록체인 기반의 스마트컨트랙트 검증 등 다양한 도메인의 프로젝트에 참여했습니다. 그중 블록체인 도메인에서 앱 자동화 구축, DeFi 시스템 내에 트레이딩 시뮬레이터 봇 개발 등의 경험을 통해 신기술 트렌드를 빠르게 습득하고 적용할 수 있는 능력을 키웠습니다.
        그리고 운영 분양에서는 SKT 기지국 테스트베드 운영업무를 약 1년 반 동안 맡아 펌웨어 업데이트 및 서버 에러 로그 수집 등의 업무를 체계적으로 수행했습니다.

        최근 6개월 동안은 직업훈련을 통해 빠르게 변화하는 개발 환경에 다시 적응하기 위해 노력했습니다. Java와 Spring을 활용한 백엔드 개발 역량을 강화했으며, JSP, Servlet 등 레거시 기술에 대한 이해도도 높였습니다. 또한, React와 Bootstrap을 활용한 프론트엔드 개발도 병행하며 HTML5, CSS3, JavaScript를 이용한 UI/UX 구현 경험을 쌓았습니다.
        
        직업훈련과정 중 진행한 쇼핑몰 구축 팀 프로젝트에서는 조장으로서 기획부터 설계, 개발, 일정 관리, 테스트, 출시까지 전 과정을 주도적으로 이끌었습니다. 특히, 실제 개발 환경을 최대한 반영하며 소스 코드 충돌 관리와 리팩토링을 통해 협업 능력과 문제 해결 능력을 크게 향상시키고자 노력 했습니다. 
        하지만, 기획 부터 개발까지 4주 남짓한 짧은 기간동안 각 환경 등을 나누어 개발 하지 못하고 결제시스템과 고객데이터를 확인 하는 CRM 어드민 모듈까지 제대로 구현 하지 못한 건 많은 아쉬움이 남았습니다.

        이제는 백엔드 개발자로서 새로운 도전에 나서고자 합니다. 그동안 쌓아온 IT 경험을 바탕으로 빠르게 업무에 적응하고 기본에 충실한 개발자가 되겠습니다. 
        또한, 가정을 책임지는 아빠로서의 책임감을 바탕으로 팀 내 소통과 협업에 적극적으로 참여하며, 항상 일정 내에 완성도 높은 결과물을 만들어내는 신뢰받는 개발자가 되겠습니다.
        끊임없이 공부하고 성장하며, 팀의 성공에 기여할 수 있는 개발자로 자리매김하고 싶습니다.
    `,
    skills:
        {
            proficientWith: ['java', 'spring', 'MySQL', 'python', 'javascript', 'react', 'bootstrap', 'html5', 'css3', 'nodejs'],
            exposedTo: ['github', 'tortoise svn', 'bitbucket', 'gradle', 'maven', 'ui path', 'slack', 'notion', 'jira', 'trello', 'wiki', 'testrail', 'postman', 'jmeter']
        }
    ,
    hobbies: [
        {
            label: '책읽기',
            emoji: '📖'
        },
        {
            label: '와이프랑 한잔하며 넷플릭스 보기',
            emoji: '🍻📼'
        },
        {
            label: '아이랑 놀아주기',
            emoji: '👶🏽'
        },
        {
            label: '개발 공부',
            emoji: '🧑🏽‍💻'
        }

    ],
    expriences: [
        {
            company: '크립티드 (2022.09 ~ 2024.04)',
            task: `
                주요업무 : 블록체인 서비스 개발 검증 및 자동화 구축
                ㄴ 블록체인 기반 메인넷 웹/앱 어플리케이션 검증
                ㄴ defi 금융시스템 개발 검증, 테스트환경 내 트레이딩 봇 가격자동화 시스템 구축
            `
        },
        {
            company: '솔메소프트 (2021.03 ~ 2022.09)',
            task: `
                주요업무 : SKT 기지국 테스트베드 펌웨어 패지 작업 및 테스트 환경 운영
                ㄴ LTE/NR 기지국 테스트 환경 구축 (파라메터 수정 및 시스템 디버깅)
                ㄴ 서버 별 로그 수집 및 통계 분석
                ㄴ 기지국 펌웨어 긴급 패치 작업
            `
        },
        {
            company: '티벨 (2020.05 ~ 2021.03)',
            task: `
                주요업무 : 고객사(LINE) 광고 정산 시스템 기능 검증 및 서버 API 검증
                ㄴ 광고정산시스템 기능 및 서버 API 검증
                ㄴ 고객사와의 테스트 일정 기간 협의 및 커뮤니케이션
            `
        },
        {
            company: 'BTI Solutions (2018.10 ~ 2020.03)',
            task: `
                주요업무 : SEA(삼성) 미주 단말기 Verizon, T-mobile 필드 테스트 및 안드로이드 인증 시험 진행
                ㄴ J1 트레이닝 비자 신분으로 1년 6개월간 미국 뉴저지에 거주 하며 근무
                ㄴ Samsung Device Field Verification Test 및 스마트폰 상용화 (NJ 상주)
                ㄴ 데이터 부하 Testing, Log trace, 상용 바이너리 입고 작업
                ㄴ 인턴 직무기초 교육 (네트워크 기초 및 테스트 장비 사용 방법)
            `
        },
        {
            company: '코이닉스 (2017.09 ~ 2018.05)',
            task: `
                주요업무 : 인도네시아 twallet 앱 모바일 게이트웨이 API 컨트롤러 개발 및 검증
                ㄴ 인도네시아 telkomsel에서 제공하는 twallet 앱의 모바일 게이트웨이 API 컨트롤러 프로토타입 개발 (inbox, profile)
                ㄴ 결제모듈 (Cloud Payment)와의 API 연동
                ㄴ 구 버전의 유지 보수 및 전체 앱의 검증
            `
        },
        {
            company: '모지도코화이어코리아 (2015.06 ~ 2017.09)',
            task: `
                주요업무 : 대만 twmp의 스마트월렛 앱 모바일 게이트웨이 API 컨트롤러 개발 및 검증
                ㄴ 대만은행 연합 twmp에서 제공하는 스마트월렛 앱의 모바일 게이트웨이 API 컨트롤러 프로토타입 개발 (inbox, setting, addonservice)
                ㄴ 결제모듈 (Cloud Payment)와의 API 연동
                ㄴ 결제와 관련된 PCI DSS, Master카드 UL 인증 결과 보고서 작성 (결제 보안인증 툴 테스트)
                ㄴ 개발 산출물 문서 작성 및 관리
                ㄴ 대만 통신사 ATDC 의 이전 계약 종료를 위한 산출물 작성
            `
        },
        {
            company: '에스케이플래닛 (2012.02 ~ 2014.02)',
            task: `
                주요업무 : 사내플랫폼서비스 (11번가, Syrup, T-map)의 개발 검증 및 프로토타입 데이터 시험
                ㄴ 코덱 별 SIP 세션 연동 검증
                ㄴ 네트워크 간 데이터 지연 튜닝 테스트
                ㄴ Vector Streaming Map Layer 레벨 분석 및 테스트
                ㄴ 배터리 성능 및 효율성 성능 테스트
            `
        },
        {
            company: '아이엔씨엠 (2009.10 ~ 2011.08)',
            task: `
                주요업무 : IP 전화기 및 모바일 기기의 기능 테스트
                ㄴ IP 전화기의 기능 검증
                ㄴ CDMA/WCDMA 단말기의 네트워크 및 Callflow, WIPI, IOT 검증
                ㄴ 안드로이드 단말기의 GPS 필드 시험
            `
        },
    ],
    portfolio: [
        {
            title: "팀프로젝트 쇼핑몰 구축",
            description : "https://prickly-sparrow-0cb.notion.site/193228727bfa8068984dc255f0d28e94",
            live: "https://your-shopping-place-here.netlify.app",
            source: "https://github.com/hexaceps/Hexaceps",
            image: mock1
        },
        {
            title: "(주)앱솔루트솔루션 홈페이지 제작",
            description : "https://prickly-sparrow-0cb.notion.site/193228727bfa80f4b07efa41d24003ae",
            live: "http://www.iabsolute.net", // "https://pauljeoung.github.io/absolute_corp",
            source: "https://github.com/PaulJeoung/absolute_corp",
            image: mock2
        },
        {
            title: "얍얍돌이의 포트폴리오 ver.1",
            description : "https://prickly-sparrow-0cb.notion.site/ver-1-1a0228727bfa8030afb4df1041070a38",
            live: "https://pauljeoung.github.io/yapyap",
            source: "https://github.com/PaulJeoung/yapyap",
            image: mock3
        },
        {
            title: "얍얍돌이의 포트폴리오 ver.2",
            description : "https://prickly-sparrow-0cb.notion.site/ver-2-1a0228727bfa800691c1f7ed6004d1ba",
            live: "https://yapyap-ver2.netlify.app/",
            source: "https://github.com/PaulJeoung/yapyap_ver2",
            image: mock4
        }
    ]
}