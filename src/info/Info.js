import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let singlePage = false;

export const info = {
    firstName: " 정병오",
    lastName: "pauljeoung",
    initials: "🧐",
    position: "서버개발자",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🏠',
            text: '집에서는 딸바보'
        },
        {
            emoji: '🌎',
            text: '용인시 처인구 한터로 55-30'
        },
        {
            emoji: "💼",
            text: "활발히 구직활동중"
        },
        {
            emoji: "📧",
            text: "kuni05@naver.com"
        },
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
        저는 QA와 운영 경험을 가진 서버·클라이언트 초급 개발자입니다.
        다양한 도메인의 개발 조직에서 개발 QA로서 프로젝트의 모든 과정을 경험했으며, 설계부터 개발, 디버깅, 테스트, 출시까지 빠르게 적응할 수 있는 역량을 갖추고 있습니다.

        개발 직군에서 QA 업무를 수행하며 컴퓨터과학과에 편입하여 소프트웨어 공학의 기초를 다졌고, IT 교육기관에서 꾸준히 학습하며 개발 언어와 프로그래밍 기본기를 익혔습니다. 이를 바탕으로 사내 결제 시스템 개발과 모바일 Gateway API의 일부 컨트롤러 모듈 개발에 참여하며 개발 경험을 쌓아왔습니다.
        이처럼 개발 경험을 쌓아왔지만, 10여 년간 QA 업무에 기여해 왔으며, 개발에 대한 열정이 더욱 커져 개발자로의 직무 전환을 결심했습니다.

        작년 한해 저는 직업 훈련을 통해 개발자 양성과정 교육을 수료하며 Java와 Spring Boot를 활용한 서버 개발 역량을 강화했을 뿐만 아니라, JSP와 Servlet 등 레거시 기술에 대한 이해도도 높였습니다. 또한, React와 Bootstrap을 활용한 클라이언트 개발 경험을 통해 서버와 클라이언트 간 상호작용의 중요성을 깊이 이해하게 되었습니다.

        현재 부족한 부분들은 다양한 교육과 오픈소스 커뮤니티 참여를 통해 지속적으로 학습하고 실습하며 역량을 키워가고 있습니다. 팀 내에서는 소통을 중시하며, 완성도 높은 제품을 만들기 위해 노력하는 개발자가 되고자 합니다.
        궁극적으로 팀과 제품의 성공에 기여하는 것뿐만 아니라, 다양한 커뮤니티에서도 제가 가진 노하우를 공유하며 기여할 수 있는 성숙한 개발자로 성장하는 것이 저의 목표입니다.
    `,
    skills:
        {
            proficientWith: ['Java', 'Spring Boot', 'Python', 'Javascript', 'React.js', 'Bootstrap', 'HTML5', 'CSS3'],
            exposedTo: ['Github', 'Tortoisesvn', 'Nexus', 'Gradle', 'Maven', 'UIPath', 'Selenium', 'Appium', 'Postman', 'JMeter', 'Trello', 'Jira', 'Testrail' ]
        }
    ,
    hobbies: [
        {
            label: '책읽기',
            emoji: '📖'
        },
        {
            label: '와이프랑 한잔하며 OTT 보기',
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
            company: `
                회사 | 코이닉스 (2017.10 ~ 2018.05, 프리랜서)
                `,
            task: `

                프로젝트명 | Telkomsel twallet 프로토타입 모듈 개발 (2017.10 ~ 2018.01)
                
                주요업무 : Mobile Gateway API 의 스마트 월렛 컨트롤러 개발

                1️⃣ inbox, profile, setting 모듈의 API 컨트롤러 개발
                2️⃣ 유저와 HCE 카드 데이터 연동 지원
                
                업무성과 : telkomsel twallet v2.0 출시

                -------------------------
            `
        },
        {
            company: `
                회사 | 모지도코화이어코리아 (2015.06 ~ 2017.09 / 과장)
                `,
            task: `

                프로젝트명 | twMP 모바일지갑 프로토타입 모듈 개발 (2015.10 ~ 2015.12)

                주요업무 : Mobile Gateway API 의 스마트 월렛 컨트롤러 개발

                1️⃣ inbox, profile 모듈의 API 컨트롤러 개발
                2️⃣ mobile 유저 데이터와 Admin 시스템 데이터 연동 지원
                
                업무성과 : twMP 스마트월렛 플레이스토어 출시
            `
        },
        {
            company: `
                `,
            task: `
                프로젝트명 | 사내 결재 시스템 개발 및 유지보수 계약 (2015.06 ~ 2017.09)

                주요업무 : 사내 시스템 Serena Business Management (PLM) 구축 및 개발, 유지 보수

                1️⃣ 사내 결재 시스템 프로세스 구축 및 개발
                2️⃣ PLM (사내 운영시스템) 유지 보수 및 계약
                
                업무성과 : 사내 결재 및 휴가 관리 시스템 구축
            `
        },
    ],
    carrerpath: [
        {
            company: '크립티드 (2022.09 ~ 2024.04)',
            task: `
                
                주요 업무) 블록체인 기반의 자체 코인 서비스 검증 및 테스트
                기술 스택 및 도구) : python, selenium, appium, vscode, postman, jmeter

                1. 블록체인 기반 검색, 송금 웹 플랫폼 검증 (2023.01 ~ 2024.04)
                2. 블록체인 기반 메인넷 지갑 어플리케이션 검증 (2023.01 ~ 2024.04)
                3. 메인넷을 이용한 DeFi 플랫폼 검증 (2023.01 ~ 2024.04)
            `
        },
        {
            company: '솔메소프트 (2021.03 ~ 2022.09)',
            task: `
                
                주요 업무) SKT 테스트 베드의 테스트 환경 구성 지원 및 주/야간 기지국 펌웨어 업데이트 지원
                기술 스택 및 도구) linux, shell script, teraterm, filezilla

                1. SKT 테스트베드망 LTE/NR 기지국 시스템 운영 (2021.04 ~ 2022.09)
            `
        },
        {
            company: '티벨 (2020.05 ~ 2021.03)',
            task: `
                
                주요 업무) 고객사(LINE)의 정산 시스템의 테스트 및 업무 협의
                기술 스택 및 도구) postman, testrail, jira

                1. 고객사의 광고 정산 시스템(LINE JP)의 신뢰성 및 정합성 검토 (2020.05 ~ 2021.03)
            `
        },
        {
            company: 'BTIsolutions (2018.10.08 ~ 2020.03.09)',
            task: `
                
                주요 업무) 필드테스트 및 펌웨어 확인, 구글인증 업무 지원, 직원 입문 교육
                기술 스택 및 도구) linux, CTS, VTS
                ** 참고 : J1 트레이닝 비자 신분으로 1년 6개월간 미국 뉴저지에 거주 하며 근무

                1. Samsung Device Field Verification Test 및 스마트폰 바이너리 적용(NJ 상주)
            `
        },
        {
            company: '코이닉스 (2017.10.10 ~ 2018.05.09)',
            task: `
                
                주요 업무) 해외 고객사의 모바일 Gateway API 컨트롤러 개발 및 앱 검증, 산출물 문서 작성
                기술 스택 및 도구) Java, Spring, MySQL, Maven, Nexus, SVN, Postman, Jira

                1. Mobile Gateway API 의 스마트 월렛 컨트롤러 프로토타입 개발 (2017.10 ~ 2018.01)
                2. Telkomsel twallet 모바일 어플리케이션 검증 (2017.10 ~ 2018.05)
                3. Telkomsel(고객사)과 업무 협의 (2017.12 ~ 2018.04)
            `
        },
        {
            company: '모지도코화이어코리아 (2015.06.01 ~ 2017.09.16)',
            task: `
                
                주요 업무) 사내 인프라 관리, 해외 고객사의 모바일 Gateway API 컨트롤러 개발 및 앱 검증, 산출물 문서 작성
                기술 스택 및 도구) SBM(PLM도구), MSSQL, Java, Spring, MySQL, Maven, Nexus, SVN, Postman, Jira, PCIDSS 및 UL인증

                1. 사내 인프라 관리 및 유지보수 (2015.06 ~ 2017.09)
                2. Mobile Gateway API 의 스마트 월렛 컨트롤러 프로토타입 개발 (2015.10 ~ 2015.12)
                3. twMP twallet 모바일 어플리케이션 검증 (2015.09 ~ 2017.09)
                4. ADTC(고객사)과 업무 협의 (2015.11 ~ 2016.11)
            `
        },
        {
            company: '에스케이플래닛 (2013.02 ~ 2015.02)',
            task: `
                
                주요 업무) 사내 서비스 플랫폼 들에 대한 개발 사전 검증 및 데이터 수집
                기술 스택 및 도구) Android Studio, iPhone Utility, Agilent 멀티메터, Wireshark, Jira

                1. Tictoc 2.0 mVoIP sdk 탑재 검증 (2013.02 ~ 2015.02)
                2. T-map 4.0 VSM sdk 탑재 검증 (2014.10 ~ 2015.02)
                3. 사내 내재화 과제 업무 지원
                과제 1) play4me SDK 개발 지원
                과제 2) Geofence SDK 개발 지원
                과제 3) One ID Token authentication SDK 개발지원
                과제 4) UltraSound SDK 개발지원
            `
        },
        {
            company: '아이엔씨엠 (2009.10 ~ 2011.08)',
            task: `
                
                주요 업무) 피쳐폰, 스마트폰 모바일 및 IP 전화기 단말기 기능 테스트, 테스트케이스 유지보수
                기술 스택 및 도구) Eclipse, Wireshark, WIPI Tools, Jira, Yammer

                1. SKB 전용 IP 전화기 기능 검증 및 필드 테스트 (2009.10 ~ 2010.08)
                2. SKT 전용 3G 피쳐폰, Android 폰 기능 검증 및 필드 테스트 (2010.05 ~ 2011.08)
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