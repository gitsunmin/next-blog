const template = document.createElement('template');
const style = document.createElement('style');

style.innerHTML = /* css */ `
  @import "/index.css";

  .experience-scene1 {
    max-width: 80vw;
    overflow-x: scroll;
    margin: 0 auto;
    white-space: nowrap;
  }

  .experience-scene1-cards {
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 80vw;
    overflow-x: scroll;
    gap: 12px;
  }

  .experience-scene1-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    white-space: normal;
    border: 2px solid #E0EAF1;
    border-radius: 8px;
    padding: 24px;
  }

  .experience-scene1-card-wrap {
    display: flex;
    flex-direction: row;
    wrap: nowrap;
    gap: 4px;
  }

  .experience-scene1-card-tag {
    color: #3E6D8E;
    background-color: #E0EAF1;
    border-bottom: 1px solid #3E6D8E;
    border-right: 1px solid #7F9FB6;
    padding: 3px 4px 3px 4px;
    margin: 2px 2px 2px 0;
    text-decoration: none;
    font-size: 90%;
    line-height: 2.4;
    white-space: nowrap;
    border-radius: 4px;
  }

  .experience-scene1-section > h2 {
    background-color: red;
  }
`;

template.innerHTML = /* html */ `
  <h2>Projects</h2>
  <div class="experience-scene1">
    <section class="experience-scene1-section">
      <ul class="experience-scene1-cards">
      </ul>
    </section>
  </div>
`;

const ProjectList = [
  {
    name: '공지사항 관리 시스템 개발',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce'],
  },
  {
    name: '업무 협업 프로그램 개발',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce'],
  },
  {
    name: '마켓봄 프로 개발',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce'],
  },
  {
    name: '공통 웹뷰 앱 개발',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce'],
  },
  {
    name: '식봄, Next.js로 전환 프로젝트',
    description:
      '식봄은 사업자 대상으로 식자재 유통 서비스를 제공하는 E-Commerce 서비스입니다.',
    tags: ['E-Commerce'],
  },
];

export default class HistoryScene1 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }); // Shadow DOM을 사용하도록 설정

    this.shadowRoot.appendChild(style.cloneNode(true));
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.cards$el = this.shadowRoot.querySelector('.experience-scene1-cards');

    this.cards$el.innerHTML = ProjectList.map((project) => {
      return /* html */ `
        <li class="experience-scene1-card">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="experience-scene1-card-wrap">
            ${project.tags
              .map(
                (tag) =>
                  /* html */ `<span class="experience-scene1-card-tag">${tag}</span>`
              )
              .join('')}
          </div>
        </li>
      `;
    }).join('');
  }

  connectedCallback() {
    let observer = new IntersectionObserver((observers) => {
      observers.forEach((observer) => {});
    });

    observer.observe(this);
  }
}
