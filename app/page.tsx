import Image from "next/image";
const skills = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "MySQL", icon: "🗄️" },
  { name: "HTML", icon: "HTML" },
  { name: "CSS", icon: "CSS" },
  { name: "JavaScript", icon: "JS" },
  { name: "Next.js", icon: "N" },
  { name: "Git", icon: "Git" },
  { name: "GitHub", icon: "GH" },
];
const projects = [
  {
    title: "ZODIAC-SPRING-APP",
    description: "Spring Bootを使って制作したWebアプリケーションです。",
    tech: ["Java", "Spring Boot", "HTML"],
    github: "https://github.com/w25001-ux/ZODIAC-SPRING-APP",
    image: "/images/zodiac-project.png",
    imageAlt: "Zodiac Sign Finderの詳細画面",
  },
  {
    title: "my-project",
    description: "HTMLとCSSを使って制作したWebサイトです。",
    tech: ["HTML", "CSS"],
    github: "https://github.com/w25013-ux/my-project",
    image: "/images/bike-project.jpg",
    imageAlt: "Golden Wheel Bikeに掲載しているHonda Trail 70",
  },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="logo">
            thwe
          </a>

          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#strengths">Strengths</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container heroGrid">
          <div className="heroText">
            <p className="eyebrow">HELLO, WELCOME TO MY PORTFOLIO</p>
            <h1>
              Hello, I&apos;m <span>THWE THWE AUNG</span>
            </h1>
            <h2>Javaを軸に、成長を続けるエンジニアへ。</h2>
            <p className="heroDescription">
              ミャンマー出身で、現在は日本の専門学校でITを学んでいます。
              JavaやWeb開発を中心に、考えたアイデアを形にする力を身につけています。
              このポートフォリオでは、これまでの学び、制作した作品、そしてエンジニアとしての成長をご紹介します。
            </p>

            <div className="heroButtons">
              <a href="#projects" className="primaryButton">
                View Projects
              </a>
              <a
                href="https://github.com/w25013-ux"
                target="_blank"
                rel="noreferrer"
                className="secondaryButton"
              >
                GitHub
              </a>
            </div>

            <div className="heroMeta">
              <div><strong>Java</strong><span>メイン言語</span></div>
              <div><strong>Next.js</strong><span>Web制作</span></div>
              <div><strong>SE</strong><span>目指す職種</span></div>
            </div>
          </div>

          <div className="profileCard">
            <span className="profileBadge">OPEN TO LEARNING</span>
            <Image
              src="/images/thwe.webp"
              alt="THWE THWE AUNG"
              width={200}
              height={200}
              className="profileImage"
            />
            <h3>THWE THWE AUNG</h3>

            <div className="profileInfo">
              <div>
                <span>出身</span>
                <strong>ミャンマー</strong>
              </div>
              <div>
                <span>学歴</span>
                <strong>沖縄ビジネス外語学院</strong>
              </div>
              <div>
                <span>目標</span>
                <strong>システムエンジニア</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="strengths" className="section strengthsSection">
        <div className="container">
          <div className="sectionTitle">
            <p>PROFILE</p>
            <h2>強みと趣味</h2>
          </div>

          <div className="strengthsGrid">
            <div className="strengthsList">
              <article>
                <div className="strengthIcon">✓</div>
                <div>
                  <span>STRENGTH 01</span>
                  <h3>責任感</h3>
                  <p>任されたことは最後までやり遂げます。</p>
                </div>
              </article>
              <article>
                <div className="strengthIcon">↗</div>
                <div>
                  <span>STRENGTH 02</span>
                  <h3>学習意欲</h3>
                  <p>新しい技術を自ら学び、実践する姿勢があります。</p>
                </div>
              </article>
              <article>
                <div className="strengthIcon">◎</div>
                <div>
                  <span>STRENGTH 03</span>
                  <h3>問題解決</h3>
                  <p>論理的に原因を分析し、着実に解決します。</p>
                </div>
              </article>
            </div>

            <div className="hobbiesList">
              <p className="hobbyLabel">MY FAVORITES</p>
              <h3>好きな時間が、<br />新しい発想につながる。</h3>
              <ul>
                <li><span>01</span>読書（技術書・小説）</li>
                <li><span>02</span>プログラミングの練習</li>
                <li><span>03</span>料理</li>
                <li><span>04</span>散歩・写真撮影</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section aboutSection">
        <div className="container">
          <div className="sectionTitle">
            <p>ABOUT</p>
            <h2>自己紹介</h2>
          </div>

          <div className="aboutGrid">
            <div className="aboutText">
              <p className="aboutLead">
                ミャンマー出身のTHWE THWE AUNGです。現在は日本の専門学校「沖縄ビジネス外語学院」でITを学んでいます。
              </p>
              <p>
                学校ではJava、HTML、CSS、JavaScript、Next.js、MySQLを学び、個人ではSpring BootやGit、GitHubなども学習しています。
                Webアプリケーションの制作を通して、フロントエンドだけでなくバックエンドについても理解を深めています。
              </p>
              <p>
                新しい技術を学ぶことが好きで、分からないことがあれば自分で調べ、原因を考えながら一つずつ解決することを大切にしています。
                将来はシステムエンジニアとして、多くの人に役立つシステムを開発できるエンジニアになりたいと考えています。
              </p>
            </div>

            <div className="aboutHighlights">
              <article>
                <strong>現在</strong>
                <h3>ITを専門的に学習中</h3>
                <p>沖縄ビジネス外語学院で、Web開発の基礎から実践まで学んでいます。</p>
              </article>
              <article>
                <strong>興味</strong>
                <h3>フロントからバックエンドへ</h3>
                <p>画面づくりだけでなく、システム全体を理解できる力を育てています。</p>
              </article>
              <article>
                <strong>未来</strong>
                <h3>人に役立つエンジニアへ</h3>
                <p>学び続ける姿勢を大切に、価値あるシステムをつくることが目標です。</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skillsSection">
  <div className="container skillsLayout">

    <div className="skillsLeft">
      <p className="smallTitle">SKILLS</p>
      <h2>私のスキル</h2>

      <p className="skillsDescription">
        学校や個人制作を通して学んでいる技術です。
        現在もWebアプリケーション開発を中心に、
        実践しながらスキルを身につけています。
      </p>

      <div className="skillMenu">
        <button className="activeSkillButton">すべてのスキル</button>
        <button>プログラミング</button>
        <button>フロントエンド</button>
        <button>開発ツール</button>
      </div>
    </div>

    <div className="skillsRight">
      <h3>My Skills</h3>

      <p>
        使用経験のある技術と、現在学習している技術をまとめました。
      </p>

      <div className="skillsGrid">
        {skills.map((skill) => (
          <article className="skillCard" key={skill.name}>
            <div className="skillIcon">{skill.icon}</div>
            <span className="skillName">{skill.name}</span>
          </article>
        ))}
      </div>
    </div>

  </div>

        <div className="container qualificationsBlock">
          <div className="sectionTitle">
            <p>QUALIFICATIONS</p>
            <h2>資格</h2>
          </div>

          <div className="qualificationsGrid">
            <article className="qualificationCard">
              <div className="qualificationMark">N2</div>
              <div>
                <span>JAPANESE LANGUAGE</span>
                <h3>日本語能力試験 JLPT N2</h3>
                <p>日本語を使った授業やコミュニケーションに対応できる力を身につけています。</p>
              </div>
            </article>

            <article className="qualificationCard">
              <div className="qualificationMark javaMark">☕</div>
              <div>
                <span>ORACLE CERTIFICATION</span>
                <h3>Java Bronze</h3>
                <p>Javaの基本文法とオブジェクト指向プログラミングの基礎知識を習得しています。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="sectionTitle">
            <p>WORK</p>
            <h2>制作実績</h2>
          </div>

          <div className="projectsGrid">
            {projects.map((project, index) => (
              <article className="projectCard" key={project.title}>
                <div className="projectImageWrap">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={720}
                    height={420}
                    className="projectImage"
                  />
                  <div className="projectNumber">0{index + 1}</div>
                </div>

                <div className="projectContent">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="techList">
                    {project.tech.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  <a href={project.github} target="_blank" rel="noreferrer">
                    View on GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contactSection">
        <div className="container contactBox">
          <div className="contactIntro">
            <p className="eyebrow">CONTACT</p>
            <h2>一緒にお話し<br />しませんか？</h2>
            <p>
              最後までご覧いただき、ありがとうございます。
              ご質問やご意見などがございましたら、お気軽にご連絡ください。
            </p>
            <span className="contactStatus"><i /> メッセージをお待ちしています</span>
          </div>

          <div className="contactLinks">
            <a href="mailto:w25013@osfl.ac.jp">
              <span className="contactIcon">✉</span>
              <span>
                <small>EMAIL</small>
                <strong>w25013@osfl.ac.jp</strong>
              </span>
              <b>↗</b>
            </a>
            <a
              href="https://github.com/w25013-ux"
              target="_blank"
              rel="noreferrer"
            >
              <span className="contactIcon">GH</span>
              <span>
                <small>GITHUB</small>
                <strong>w25013-ux</strong>
              </span>
              <b>↗</b>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerContent">
          <p>© 2026 THWE THWE AUNG. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
