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
        저는 10여년 가량 검증과 운영 분야에서 다양한 도메인 지식과 경험을 쌓았습니다.
        또한 모바일 Gateway API 연결을 위한 컨트롤러 프로토타입 개발을 했었고, 이 프로젝트를 통해 스마트월렛의 상용화에 이바지 했던 경험도 있습니다.

        검증 분야에서는 IP 전화기 부터 다양한 모바일 기기의 네트워크 및 기능 검증 그리고 해외에서 필드테스트 및 성능테스트를 맡아서 일을 진행 했고, 다양한 Syrup, 11번가, T-map 같은 플랫폼 서비스들 그외에 LINE의 정산 시스템, 블록체인의 앱과 smartcontract 검증, 다양한 defi 앱들의 자동화 및 개발 환경에서의 트레이딩 시뮬레이터 봇등을 만들었습니다.
        그리고 SKT 기지국의 테스트 베드 운영을 약 1년반 가량 맡아 펌웨어 업데이트, 각 서버들의 에러로그 수집들을 맡았습니다.

        지난 6개월 동안은 직업훈련을 통해 다시 개발 롼경에 적응 할 수 있는 경험을 쌓았습니다.
        Java와 스프링을 이용한 백엔드 개발을 다시 공부 했고, 그밖에 JSP, Servlet 등 아직 레거시 프로젝트에서 사용하는 기술들에 대해서도 짧지만 공부 했습니다.
        그리고 백엔드 연동을 위해 프론트엔드 부분도 함께 공부 했는데 React, Bootstrap을 활용하여 html5, css3, javascript로 프론트엔드 구현도 함께 경험을 쌓았습니다.
        교육 과정 중 과제로는 쇼핑몰 구축을 팀 과제로 진행 했는데, 조장을 맡아서 쇼핑몰 개발의 기획 단계 부터 설계, 개발, 일정 관리, 테스트, 출시까지 다양한 경험을 했고, 그동안의 업무 경험을 살려 최대한 실제 개발 환경에서 개발 하는 것 처럼 노력을 했습니다.
        기획 부터 개발까지 4주 남짓한 짧은 기간이라 개발 환경, 상용 환경 등을 나누지 못하고 결제 시스템과 고객 데이터를 확인 할수 있는 CRM 어드민 까지 구축을 하지 못한 건 아쉬움이 남는 부분이었습니다. 하지만, 개발 과정에서 팀원들의 소스코드가 개발기간동안 많이 충돌이 났는데 이를 수정 하기 위해 모든 모듈을 이해하고 리팩토링 하는 과정들이 저에게는 많은 도움이 됐고, 이런 과정이 현업에서는 시니어 개발자들의 몫이라는 생각에 저도 그런 개발자가 되고 싶다는 생각을 했습니다.

        앞으로 벡엔드 개발자로써 IT에서 새로운 커리어를 시작 할 수 있다면, 저의 IT경험을 최대한 살려 빠르게 업무에 적응 하도록 노력하고 기본에 충실한 개발자가 될 수 있도록 하겠습니다.
        그리고 가정을 지키는 아빠의 책임감을 회사에서 제 역할에 책임감을 가지고 항상 일정 내에 좋은 결과물을 낼 수 있도록 팀내에서 소통하고 고민하고 열심히 공부하는 개발자가 되겠습니다.
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
            label: '와이프랑 맥주에 넷플릭스 보기',
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
            description : "https://prickly-sparrow-0cb.notion.site/193228727bfa807b949dd26f5a275f8c?v=193228727bfa808d94e2000c0c671cbd",
            live: "https://pauljeoung.github.io/yapyap",
            source: "https://github.com/PaulJeoung/yapyap",
            image: mock3
        },
        {
            title: "얍얍돌이의 포트폴리오 ver.2",
            description : "https://prickly-sparrow-0cb.notion.site/193228727bfa807b949dd26f5a275f8c?v=193228727bfa808d94e2000c0c671cbd",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        }
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}