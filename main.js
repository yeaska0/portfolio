/* ─────────────────────────────────────────
   TRANSLATIONS  (EN / RU / KZ)
───────────────────────────────────────── */
const TR = {
    en: {
        as: 'Student',
        tli: 'Sign In', trg: 'Sign Up',
        le: 'Email', lp: 'Password', ln: 'Name',
        bli: 'Sign In →', brg: 'Create Account →',
        bg: 'Continue as Guest', or: 'or',

        na: 'About', ns: 'Skills', np: 'Projects',
        nrm: 'Roadmap', nc: 'Contact', ned: 'Education',

        hb: 'Student · Taraz, Kazakhstan',
        hn1: 'Yerasyl', hr: 'Software Dev Student',
        hd: 'Software Engineering Student from Kazakhstan. Building Java, Python and SQL projects. Passionate about programming, databases and scalable systems.',
        hb1: 'View My Work', hb2: 'Get in Touch',
        sc: 'Scroll to explore',

        ah: 'Building systems<br>that scale.',
        ap1: 'I\'m <strong>Yerasyl</strong> — a developer and student at <strong>Taraz M.Kh. Dulati University</strong>, Department of <span class="hi">Information Systems &amp; Technology</span>.',
        ap2: 'I know <strong>4 programming languages</strong>: Java (main), Python, C++ and SQL. Working on a <strong>MacBook Air M4</strong> — fast builds, clean workflow. Git in every project.',
        ap3: 'Actively seeking <strong>internship opportunities</strong>. My goal: become a <strong>world-class developer</strong> who ships fast, reliable, elegant systems.',

        iu: 'University', id: 'Department', idv: 'IS & Technology',
        ic: 'Campus', icv: 'Tech Building',
        ist: 'Status', isv: 'Open to Internship',

        sl2: 'Languages', se: 'Since', sd: 'Drive', su2: 'Tools',
        su: 'My Setup',
        skh: 'Tech Stack', skl: 'Languages',
        skf: 'Frameworks', skdb: 'Databases', sktl: 'Tools', skide: 'IDEs',

        ph: 'Featured Projects',
        p1t: 'Portfolio Site',
        p1d: 'Personal developer portfolio — responsive, multi-language (EN/RU/KZ), dark/light mode, smooth animations. Built from scratch with vanilla HTML/CSS/JS.',
        p2t: 'Student Management System',
        p2d: 'CRUD system for managing students, grades and courses. REST API with JWT authentication. Spring Boot + PostgreSQL.',
        p3t: 'Telegram Finance Bot',
        p3d: 'Personal finance tracker via Telegram. Track income, expenses and savings. Python + PostgreSQL + Telegram API.',
        p4t: 'IELTS Tracker API',
        p4d: 'REST API for IELTS preparation tracking. Vocabulary, progress charts, study sessions. Java + Spring Boot + PostgreSQL + JWT.',
        pv: 'View', ps: 'Soon', pc: 'Demo soon →',
        ps_live: 'Live', ps_wip: 'In Progress', ps_plan: 'Planned',

        rmh: 'Backend Career Path',
        rm1t: 'Started University', rm1d: 'M.Kh. Dulati University · IS & Technology · Learning C++, Python, SQL basics',
        rm2t: 'Java & Spring Boot', rm2d: 'Mastering Java Core, Spring Boot, PostgreSQL, REST API, JWT, Docker',
        rm3t: 'Real Projects & Internship', rm3d: 'Building production-ready backend projects. Actively seeking first internship opportunity',
        rm4t: 'Junior Backend Developer', rm4d: 'Graduate & land first full-time backend role. Microservices, CI/CD, Kubernetes',
        rm5t: 'Middle Backend Developer', rm5d: 'Lead backend architecture decisions. High-load systems, distributed computing',

        ch1: 'Let\'s', ch2: 'together',
        cs: 'Open to collaborations, internships, and interesting backend projects.',
        fa: 'Open to Internship',

        ghrep: 'Repos', ghlang: 'Main Lang', ghact: 'Status',
        ee: 'Enter a valid email', ep: 'Min 6 chars', en: 'Enter your name',
        ex: 'Email already registered', enf: 'User not found', ew: 'Wrong password',
        hcv: 'Download CV',

        edh: 'Education',
        edn1: 'M.Kh. Dulati Taraz University',
        edd1: 'Information Systems & Technology',
        edst: 'Current · GPA 3.5',
        certh: 'Certificates',
        cfn: 'Your Name', cfe: 'Your Email', cfm: 'Message', cfs: 'Send Message', cfsent: 'Sent! ✓',
        skprof: 'Proficiency',
    },

    ru: {
        as: 'Студент',
        tli: 'Войти', trg: 'Регистрация',
        le: 'Email', lp: 'Пароль', ln: 'Имя',
        bli: 'Войти →', brg: 'Создать аккаунт →',
        bg: 'Войти как гость', or: 'или',

        na: 'Обо мне', ns: 'Навыки', np: 'Проекты',
        nrm: 'Роадмап', nc: 'Контакты', ned: 'Образование',

        hb: 'Студент · Тараз, Казахстан',
        hn1: 'Ерасыл', hr: 'Студент-разработчик',
        hd: 'Студент-разработчик из Казахстана. Строю проекты на Java, Python и SQL. Увлечён программированием, базами данных и масштабируемыми системами.',
        hb1: 'Мои проекты', hb2: 'Написать мне',
        sc: 'Прокрутите вниз',

        ah: 'Создаю системы,<br>которые работают.',
        ap1: 'Я <strong>Ерасыл</strong> — разработчик и студент <strong>Таразского университета им. М.Х. Дулати</strong>, кафедра <span class="hi">Информационных систем и технологий</span>.',
        ap2: 'Знаю <strong>4 языка программирования</strong>: Java (основной), Python, C++ и SQL. Работаю на <strong>MacBook Air M4</strong> — быстрые сборки, чистый рабочий процесс.',
        ap3: 'Активно ищу <strong>стажировку</strong>. Цель — стать <strong>первоклассным разработчиком</strong>, создающим быстрые, надёжные и элегантные системы.',

        iu: 'Университет', id: 'Кафедра', idv: 'Информационные системы и технологии',
        ic: 'Корпус', icv: 'Технологический',
        ist: 'Статус', isv: 'Открыт к стажировке',

        sl2: 'Языки', se: 'Год начала', sd: 'Мотивация', su2: 'Инструменты',
        su: 'Моё оборудование',
        skh: 'Стек технологий', skl: 'Языки программирования',
        skf: 'Фреймворки', skdb: 'Базы данных', sktl: 'Инструменты', skide: 'IDE',

        ph: 'Избранные проекты',
        p1t: 'Портфолио',
        p1d: 'Личное портфолио — адаптивное, мультиязычное (EN/RU/KZ), тёмная/светлая тема, плавные анимации. Написано с нуля на HTML/CSS/JS.',
        p2t: 'Система управления студентами',
        p2d: 'CRUD-система для управления студентами, оценками и курсами. REST API с JWT-аутентификацией. Spring Boot + PostgreSQL.',
        p3t: 'Финансовый Telegram-бот',
        p3d: 'Личный трекер финансов через Telegram. Учёт доходов, расходов и сбережений. Python + PostgreSQL + Telegram API.',
        p4t: 'IELTS Tracker API',
        p4d: 'REST API для отслеживания подготовки к IELTS. Словарный запас, графики прогресса, учебные сессии. Java + Spring Boot + PostgreSQL + JWT.',
        pv: 'Смотреть', ps: 'Скоро', pc: 'Демо скоро →',
        ps_live: 'Готово', ps_wip: 'В разработке', ps_plan: 'Планируется',

        rmh: 'Карьерный путь Backend',
        rm1t: 'Поступил в университет', rm1d: 'Университет им. М.Х. Дулати · ИС и Технологии · Изучаю C++, Python, основы SQL',
        rm2t: 'Java и Spring Boot', rm2d: 'Осваиваю Java Core, Spring Boot, PostgreSQL, REST API, JWT, Docker',
        rm3t: 'Реальные проекты и стажировка', rm3d: 'Строю production-ready backend проекты. Активно ищу первую стажировку',
        rm4t: 'Junior Backend Developer', rm4d: 'Выпуск и первая full-time должность. Микросервисы, CI/CD, Kubernetes',
        rm5t: 'Middle Backend Developer', rm5d: 'Архитектурные решения на бэкенде. Высоконагруженные системы, распределённые вычисления',

        ch1: 'Давайте', ch2: 'создадим вместе',
        cs: 'Открыт к сотрудничеству, стажировкам и интересным проектам.',
        fa: 'Открыт к стажировке',

        ghrep: 'Репо', ghlang: 'Основной язык', ghact: 'Статус',
        ee: 'Введите корректный email', ep: 'Минимум 6 символов', en: 'Введите имя',
        ex: 'Email уже зарегистрирован', enf: 'Пользователь не найден', ew: 'Неверный пароль',
        hcv: 'Скачать резюме',

        edh: 'Образование',
        edn1: 'ТарМУ им. М.Х. Дулати',
        edd1: 'Информационные системы и технологии',
        edst: 'Сейчас · GPA 3.5',
        certh: 'Сертификаты',
        cfn: 'Ваше имя', cfe: 'Ваш Email', cfm: 'Сообщение', cfs: 'Отправить', cfsent: 'Отправлено! ✓',
        skprof: 'Уровень владения',
    },

    kz: {
        as: 'Студент',
        tli: 'Кіру', trg: 'Тіркелу',
        le: 'Email', lp: 'Құпия сөз', ln: 'Атыңыз',
        bli: 'Кіру →', brg: 'Аккаунт жасау →',
        bg: 'Қонақ ретінде кіру', or: 'немесе',

        na: 'Мен туралы', ns: 'Дағдылар', np: 'Жобалар',
        nrm: 'Жол карта', nc: 'Байланыс', ned: 'Білім',

        hb: 'Студент · Тараз, Қазақстан',
        hn1: 'Ерасыл', hr: 'Студент-бағдарламашы',
        hd: 'Қазақстандық студент-бағдарламашы. Java, Python және SQL жобалар жасаймын. Бағдарламалауға, дерекқорларға және масштабталатын жүйелерге құштармын.',
        hb1: 'Жобаларым', hb2: 'Байланысу',
        sc: 'Төмен жылжыңыз',

        ah: 'Жұмыс істейтін<br>жүйелер жасаймын.',
        ap1: 'Мен <strong>Ерасыл</strong> — бағдарламашы, <strong>М.Х. Дулати атындағы Тараз университетінің</strong> <span class="hi">Ақпараттық жүйелер және технологиялар</span> кафедрасының студентімін.',
        ap2: '<strong>4 бағдарламалау тілін</strong> білемін: Java (негізгі), Python, C++ және SQL. <strong>MacBook Air M4</strong>-те жұмыс жасаймын — жылдам жинақтар, таза жұмыс үрдісі.',
        ap3: 'Белсенді түрде <strong>тәжірибе іздеп</strong> жатырмын. Мақсатым — жылдам, сенімді жүйелер жасайтын <strong>дүниежүзілік деңгейдегі бағдарламашы</strong> болу.',

        iu: 'Университет', id: 'Кафедра', idv: 'Ақпараттық жүйелер және технологиялар',
        ic: 'Корпус', icv: 'Технологиялық',
        ist: 'Мәртебе', isv: 'Тәжірибеге дайын',

        sl2: 'Тілдер', se: 'Бастаған жыл', sd: 'Ынта', su2: 'Құралдар',
        su: 'Менің жабдығым',
        skh: 'Технологиялар', skl: 'Бағдарламалау тілдері',
        skf: 'Фреймворктер', skdb: 'Дерекқорлар', sktl: 'Құралдар', skide: 'IDE',

        ph: 'Таңдаулы жобалар',
        p1t: 'Портфолио сайт',
        p1d: 'Жеке developer портфолио — адаптивті, көптілді (EN/RU/KZ), қараңғы/жарық режим, анимациялар. Нөлден HTML/CSS/JS-пен жазылды.',
        p2t: 'Студент Басқару Жүйесі',
        p2d: 'Студенттерді, бағаларды және курстарды басқару CRUD жүйесі. JWT аутентификациясымен REST API. Spring Boot + PostgreSQL.',
        p3t: 'Telegram Қаржы Боты',
        p3d: 'Telegram арқылы жеке қаржы трекері. Кіріс, шығыс және жинақтарды бақылау. Python + PostgreSQL + Telegram API.',
        p4t: 'IELTS Tracker API',
        p4d: 'IELTS дайындығын бақылауға арналған REST API. Сөздік, прогресс графиктері. Java + Spring Boot + PostgreSQL + JWT.',
        pv: 'Қарау', ps: 'Жақында', pc: 'Демо жақында →',
        ps_live: 'Дайын', ps_wip: 'Әзірленуде', ps_plan: 'Жоспарланған',

        rmh: 'Backend Мансап Жолы',
        rm1t: 'Университетке түстім', rm1d: 'М.Х. Дулати атындағы ТарМУ · АЖ және Технологиялар · C++, Python, SQL негіздерін үйренемін',
        rm2t: 'Java және Spring Boot', rm2d: 'Java Core, Spring Boot, PostgreSQL, REST API, JWT, Docker үйренемін',
        rm3t: 'Нақты жобалар және тәжірибе', rm3d: 'Production-ready backend жобалар жасаймын. Алғашқы тәжірибе іздеп жатырмын',
        rm4t: 'Junior Backend Developer', rm4d: 'Бітіру және алғашқы full-time лауазым. Микросервистер, CI/CD, Kubernetes',
        rm5t: 'Middle Backend Developer', rm5d: 'Backend архитектура шешімдері. Жоғары жүктелім жүйелері, таратылған есептеу',

        ch1: 'Бірге', ch2: 'жасайық',
        cs: 'Ынтымақтастыққа, тәжірибеге және қызықты жобаларға ашықпын.',
        fa: 'Тәжірибеге дайын',

        ghrep: 'Репо', ghlang: 'Негізгі тіл', ghact: 'Мәртебе',
        ee: 'Дұрыс email енгізіңіз', ep: 'Ең кемі 6 таңба', en: 'Атыңызды енгізіңіз',
        ex: 'Email тіркелген', enf: 'Пайдаланушы табылмады', ew: 'Қате құпия сөз',
        hcv: 'CV жүктеу',

        edh: 'Білім',
        edn1: 'М.Х. Дулати атындағы ТарМУ',
        edd1: 'Ақпараттық жүйелер және технологиялар',
        edst: 'Қазір · GPA 3.5',
        certh: 'Сертификаттар',
        cfn: 'Атыңыз', cfe: 'Email-іңіз', cfm: 'Хабарлама', cfs: 'Жіберу', cfsent: 'Жіберілді! ✓',
        skprof: 'Деңгей',
    }
};

/* ─────────────────────────────────────────
   LANGUAGE
───────────────────────────────────────── */
let lang = 'en';

function sl(l) {
    lang = l;
    document.querySelectorAll('[data-t]').forEach(el => {
        const k = el.dataset.t;
        if (TR[l][k] !== undefined) el.innerHTML = TR[l][k];
    });
    document.querySelectorAll('.lpill').forEach(b => {
        b.classList.toggle('on', b.dataset.lang === l);
    });
    document.documentElement.lang = l;
}

/* ─────────────────────────────────────────
   THEME
───────────────────────────────────────── */
let dark = true;

function togTheme() {
    dark = !dark;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const btn = document.getElementById('thbtn');
    if (btn) btn.textContent = dark ? '🌙' : '☀️';
}


/* ─────────────────────────────────────────
   CUSTOM CURSOR
───────────────────────────────────────── */
(function initCursor() {
    const cdot  = document.getElementById('cdot');
    const cring = document.getElementById('cring');
    if (!cdot || !cring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    (function loop() {
        rx += (mx - rx) * 0.13;
        ry += (my - ry) * 0.13;
        cdot.style.left   = mx + 'px';
        cdot.style.top    = my + 'px';
        cring.style.left  = rx + 'px';
        cring.style.top   = ry + 'px';
        requestAnimationFrame(loop);
    })();

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
})();

/* ─────────────────────────────────────────
   STICKY NAV + SCROLL PROGRESS + ACTIVE
───────────────────────────────────────── */
const navEl   = document.getElementById('nav');
const nprog   = document.getElementById('nprog');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nlinks a[href^="#"]');

function onScroll() {
    const sy = scrollY;
    const dh = document.documentElement.scrollHeight - window.innerHeight;

    // Sticky nav
    if (navEl) navEl.classList.toggle('stuck', sy > 50);

    // Scroll progress bar
    if (nprog && dh > 0) nprog.style.width = Math.min(100, (sy / dh) * 100) + '%';

    // Active nav link
    let current = '';
    sections.forEach(sec => {
        if (sy >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ─────────────────────────────────────────
   MOBILE MENU
───────────────────────────────────────── */
const nbg = document.getElementById('nbg');
const ndr = document.getElementById('ndr');
const nov = document.getElementById('nov');

function closeMob() {
    if (!nbg || !ndr || !nov) return;
    nbg.classList.remove('open');
    ndr.classList.remove('open');
    nov.classList.remove('show');
}

if (nbg) {
    nbg.addEventListener('click', () => {
        const o = nbg.classList.toggle('open');
        ndr.classList.toggle('open', o);
        nov.classList.toggle('show', o);
    });
}

document.querySelectorAll('.nmlink').forEach(l => {
    l.addEventListener('click', closeMob);
});

/* ─────────────────────────────────────────
   SCROLL REVEAL + COUNTERS
───────────────────────────────────────── */
const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('in');

        el.querySelectorAll('[data-tg]').forEach(n => {
            const tg = +n.dataset.tg;
            let c = 0;
            const t = setInterval(() => {
                c += tg / 50;
                if (c >= tg) { n.textContent = tg; clearInterval(t); }
                else n.textContent = Math.floor(c);
            }, 28);
        });

        obs.unobserve(el);
    });
}, { threshold: 0.12 });

document.querySelectorAll('.rv, .rvl, .rvr, .titem').forEach(el => obs.observe(el));

/* ─────────────────────────────────────────
   STAGGER ANIMATIONS
───────────────────────────────────────── */
document.querySelectorAll('.ttile').forEach((t, i) => {
    t.style.transitionDelay = (i * 0.045) + 's';
});
document.querySelectorAll('.pcard').forEach((t, i) => {
    t.style.transitionDelay = (i * 0.08) + 's';
});
document.querySelectorAll('.cert-card').forEach((t, i) => {
    t.style.transitionDelay = (i * 0.07) + 's';
});
document.querySelectorAll('.socard').forEach((t, i) => {
    t.style.transitionDelay = (i * 0.06) + 's';
});

/* ─────────────────────────────────────────
   ROADMAP STAGGER
───────────────────────────────────────── */
document.querySelectorAll('.titem').forEach((t, i) => {
    t.style.transitionDelay = (i * 0.12) + 's';
});

/* ─────────────────────────────────────────
   HERO NAME GLITCH
───────────────────────────────────────── */
const hn = document.querySelector('.hname');
if (hn) {
    setInterval(() => {
        hn.style.transform = `skewX(${(Math.random() - 0.5) * 1.2}deg)`;
        setTimeout(() => { hn.style.transform = 'none'; }, 80);
    }, 5500);
}

/* ─────────────────────────────────────────
   TERMINAL TYPEWRITER
───────────────────────────────────────── */
(function initTypewriter() {
    const cursor = document.querySelector('.term-cursor');
    if (!cursor) return;
    setInterval(() => cursor.classList.toggle('hidden'), 530);
})();

/* ─────────────────────────────────────────
   LOADER
───────────────────────────────────────── */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hide');
            setTimeout(() => { loader.style.display = 'none'; }, 700);
        }
    }, 1800);
});

/* ─────────────────────────────────────────
   BACK TO TOP
───────────────────────────────────────── */
const totop = document.getElementById('totop');
if (totop) {
    window.addEventListener('scroll', () => {
        totop.classList.toggle('show', scrollY > 400);
    }, { passive: true });
}

/* ─────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────── */
const cform = document.getElementById('cform');
if (cform) {
    cform.addEventListener('submit', () => {
        const btn = cform.querySelector('.cfbtn');
        if (btn) {
            btn.textContent = (TR[lang] && TR[lang].cfsent) ? TR[lang].cfsent : 'Sending...';
            btn.disabled = true;
        }
    });
}

/* ─────────────────────────────────────────
   INIT LANGUAGE
───────────────────────────────────────── */
sl(lang);