/* ========================================
   Knowledge Base & System Prompt
   ======================================== */
const KNOWLEDGE_BASE = `
ABOUT VALERYA:
- Python developer with 5+ years of programming experience
- Specializes in building AI bots for practical business tasks
- Develops backend solutions focused on applicability, performance and scalability
- Works with async services, databases and external storage
- Experience integrating AI solutions and external APIs
- Current main focus: crypto trading bots
- Over 40 completed projects
- Authored a Python programming course
- 30%+ returning clients
- Leads her own team of artists and programmers, managing projects end-to-end with a focus on deadlines and quality control
- Project management experience: planning, deadlines, quality control, code review
- Methodology: Agile / Kanban with daily standups
- 98% on-time delivery rate
- Telegram: @mikonila
- GitHub: github.com/Mikonila

WORK FORMAT:
- Daily progress reports
- Technical support after project delivery
- Fast responses and revisions throughout the day

LEADERSHIP & PROJECT MANAGEMENT:
- Leads own team of artists and developers
- End-to-end project management from planning to delivery
- Focus on deadlines, quality, and transparent communication
- Process: Planning → Development → Review & QA → Delivery
- 98% on-time delivery rate
- Code review + QA as quality approach
- Agile / Kanban methodology

TECH STACK:
- Languages & Frameworks: Python, aiogram, FastAPI, Streamlit, Flask
- AI & ML: OpenAI GPT, LangChain, FAISS, Google Cloud Vision, RAG
- Databases: PostgreSQL, SQLite, Redis, Vector DB
- APIs: Telegram Bot API, Binance API, TradingView, REST API, Webhooks
- DevOps: Docker, Git, Linux/VPS, CI/CD

KEY PROJECTS:
1. Trading AI Telegram Bot (AiSignal_GPTBot) — Trading bot for Pocket Option combining AI engine (OpenAI + TradingView) with 15+ technical indicators for binary options and OTC assets. Verifies users via Pocket Option postback, provides detailed signals with probability scoring and chart screenshots. Stack: Python, OpenAI, TradingView, Binance, Docker.
2. Helion School Bot — Telegram bot for an anime drawing school (Helion). Guides users through the learning funnel, showcases artwork examples and accepts applications for online lessons. Stack: Python, aiogram, Docker, SQLite.
3. Psychology Bot — AI bot for anxiety management using CBT (Cognitive Behavioral Therapy) techniques. Features conversation with a smart GPT-powered psychologist. Stack: Python, OpenAI, Telegram.
4. Online School Manager Bot — Smart Telegram consultant bot for a coding school. Matches programming courses by age, experience and interests using GPT-4o and vector knowledge base. Stack: Python, GPT-4o, LangChain, FAISS.
5. Trading Signal Bot — Automated BTC/USDT trading signal bot combining Binance market data, technical indicators and OpenAI GPT analysis for swing and scalping signals delivered via Telegram. Stack: Python, Binance API, GPT, Telegram.
6. Referral System Bot — Telegram referral bot for private communities. Generates personal invite links, tracks who invited whom in SQLite, admin approval system with full referral stats. Stack: Python, SQLite, Telegram.

INDUSTRIES:
- FinTech & Trading: trading signals, market analysis, exchange integrations
- Education: consultant bots, course matching, learning funnels
- Psychology & Health: mental health bots, CBT techniques
- Creative & Art: bots for creative schools, showcases
- E-commerce: referral systems, sales automation
- Customer Service: AI assistants, adaptive communication
`;

const SYSTEM_PROMPT = `You are acting as Valerya (female), the programmer and AI specialist. Your role is to answer questions about Valerya's projects, tech stack, experience, leadership skills, and work format. Be helpful, friendly and concise. Use the knowledge base below to answer accurately.

If someone asks something not related to Valerya or her work, politely redirect the conversation.

Keep responses short (2-4 sentences max) unless the user asks for details. Use a casual but professional tone.

If the user writes in Russian, respond in Russian. If they write in English, respond in English. Do not end messages with questions or phrases like "If you are interested, feel free to ask", but feel free to ask for clarification if the user's message is unclear.

If the user asks about experience that is not in the knowledge base, say that you have similar relevant experience but it is better to ask Valerya directly for details (e.g., via Telegram @mikonila).

${KNOWLEDGE_BASE}`;

/* ========================================
   Demo mode responses
   ======================================== */
const DEMO_RESPONSES_EN = {
    'projects': "Valerya has 40+ completed projects! Her flagship ones include a Trading AI Bot for Pocket Option with 15+ indicators, a Psychology Bot with CBT techniques, and an Online School Manager using GPT-4o + FAISS. Check the Projects section above to see them all!",
    'stack': "Valerya's core stack: Python, aiogram, FastAPI for backend. OpenAI GPT, LangChain, FAISS for AI. PostgreSQL, SQLite, Redis for databases. Docker + Linux for deployment. She also works with Binance API and TradingView for trading bots.",
    'experience': "5+ years of Python development, 40+ projects completed, 30%+ returning clients. She's also authored a Python programming course. Currently focused on crypto trading bots with AI integration.",
    'trading': "Valerya's specialty! Her Trading AI Bot for Pocket Option combines OpenAI + TradingView with 15+ technical indicators. It verifies users via postback, generates signals for binary options and OTC assets with probability scoring and chart screenshots.",
    'contact': "Best way to reach Valerya is via Telegram: @mikonila. You can also check her GitHub: github.com/Mikonila for code samples and project repos.",
    'work': "Valerya offers daily progress reports, tech support after delivery, and fast responses throughout the day. She focuses on practical applicability, performance and scalability.",
    'hire': "Valerya is open to projects! She specializes in AI bots, Telegram bots, trading bots, and backend solutions. Reach out via Telegram @mikonila to discuss your project.",
    'team': "Valerya leads her own team of artists and developers. She manages projects end-to-end with 98% on-time delivery, using Agile/Kanban methodology with daily standups and code review + QA quality gates.",
    'default': "I can tell you about Valerya's projects, tech stack, experience, team leadership, work format, or how to get in touch. What interests you most?"
};

const DEMO_RESPONSES_RU = {
    'projects': "У Валерии более 40 завершённых проектов! Ключевые: Trading AI Bot для Pocket Option с 15+ индикаторами, бот-психолог с КПТ-техниками и менеджер онлайн-школы на GPT-4o + FAISS. Загляните в секцию проектов выше!",
    'stack': "Основной стек: Python, aiogram, FastAPI для бэкенда. OpenAI GPT, LangChain, FAISS для AI. PostgreSQL, SQLite, Redis для баз данных. Docker + Linux для деплоя. Также работает с Binance API и TradingView.",
    'experience': "5+ лет опыта в Python, 40+ проектов, 30%+ возвращающихся клиентов. Автор курса по Python. Сейчас основной фокус — крипто-торговые боты с AI.",
    'trading': "Главная специализация! Trading AI Bot для Pocket Option — OpenAI + TradingView с 15+ техническими индикаторами. Верификация через постбэк, сигналы для бинарных опционов и OTC с оценкой вероятности.",
    'contact': "Лучший способ связаться — Telegram: @mikonila. Также можно посмотреть код на GitHub: github.com/Mikonila.",
    'work': "Валерия предлагает ежедневную отчётность, техподдержку после сдачи и оперативные ответы в течение дня. Фокус на практичность, производительность и масштабируемость.",
    'hire': "Валерия открыта к проектам! Специализация: AI-боты, Telegram-боты, торговые боты, бэкенд-решения. Пишите в Telegram @mikonila.",
    'team': "Валерия руководит собственной командой художников и разработчиков. Ведёт проекты от планирования до сдачи с 98% сдачей в срок, используя Agile/Kanban с ежедневными стендапами и код-ревью.",
    'default': "Могу рассказать о проектах Валерии, стеке технологий, опыте, управлении командой, формате работы или контактах. Что вас интересует?"
};

function getDemoResponse(message) {
    const lower = message.toLowerCase();
    const isRussian = /[а-яё]/i.test(lower);
    const r = isRussian ? DEMO_RESPONSES_RU : DEMO_RESPONSES_EN;

    if (/проект|project|portfolio|работ/i.test(lower)) return r.projects;
    if (/стек|stack|tech|технолог|python|lang/i.test(lower)) return r.stack;
    if (/опыт|experience|год|year|about/i.test(lower)) return r.experience;
    if (/трейд|trad|бот.*торг|signal|сигнал|крипто|crypto|binance/i.test(lower)) return r.trading;
    if (/контакт|contact|связ|reach|telegram|написа|email/i.test(lower)) return r.contact;
    if (/работа|формат|work|format|daily|отчёт|поддерж|support/i.test(lower)) return r.work;
    if (/нанять|hire|заказ|order|price|цен|стоим|сколько/i.test(lower)) return r.hire;
    if (/команд|team|lead|управлен|менедж|manag|pm|сроки|deadline|качеств|quality/i.test(lower)) return r.team;

    return r.default;
}

/* ========================================
   Chat State
   ======================================== */
let chatMode = null; // 'api' or 'demo'
let apiKey = null;
let chatHistory = [];
let currentLang = 'en';

/* ========================================
   Initialize Chat Mode from config.js
   ======================================== */
function initChatMode() {
    // OPENAI_API_KEY is defined in config.js (loaded before this script)
    if (typeof OPENAI_API_KEY !== 'undefined' && OPENAI_API_KEY && OPENAI_API_KEY.startsWith('sk-')) {
        apiKey = OPENAI_API_KEY;
        chatMode = 'api';
    } else {
        chatMode = 'demo';
    }
}

/* ========================================
   Particle Constellation (Hero Background)
   ======================================== */
function initParticles() {
    const canvas = document.getElementById('heroParticles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: -1000, y: -1000 };
    const PARTICLE_COUNT = 60;
    const CONNECT_DIST = 150;
    const MOUSE_DIST = 200;

    function resize() {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? 'rgba(124,92,255,' : 'rgba(0,212,170,'
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            // Mouse interaction
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_DIST) {
                const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.02;
                p.vx += dx * force;
                p.vy += dy * force;
            }

            p.x += p.vx;
            p.y += p.vy;
            p.vx *= 0.99;
            p.vy *= 0.99;

            // Bounce off edges
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            p.x = Math.max(0, Math.min(width, p.x));
            p.y = Math.max(0, Math.min(height, p.y));

            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color + '0.6)';
            ctx.fill();
        });

        // Connect nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECT_DIST) {
                    const alpha = (1 - dist / CONNECT_DIST) * 0.15;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(124, 92, 255, ${alpha})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });

    // Track mouse only over hero section
    const hero = document.querySelector('.hero');
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });
}

/* ========================================
   Glitch Effect on Hero Title
   ======================================== */
function initGlitch() {
    const title = document.getElementById('heroTitle');
    if (!title) return;

    function triggerGlitch() {
        title.classList.add('glitch');
        setTimeout(() => title.classList.remove('glitch'), 300);
    }

    // Random glitch every 4-8 seconds
    function scheduleGlitch() {
        const delay = 4000 + Math.random() * 4000;
        setTimeout(() => {
            triggerGlitch();
            scheduleGlitch();
        }, delay);
    }
    scheduleGlitch();
}

/* ========================================
   Metric Bar Animation
   ======================================== */
function initMetricBars() {
    const bars = document.querySelectorAll('.metric-fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => observer.observe(bar));
}

/* ========================================
   Terminal Typing Effect
   ======================================== */
const commands = [
    {
        text: 'cat about.json',
        output: [
            '{ "name": "Valerya",',
            '  "role": "AI Bot Developer",',
            '  "stack": ["Python", "GPT", "LangChain"],',
            '  "telegram": "@mikonila" }'
        ]
    },
    {
        text: 'python deploy_bot.py --prod',
        output: [
            '✓ Loading AI model... done',
            '✓ Connecting Telegram API... done',
            '✓ Bot is live on production 🚀'
        ]
    },
    {
        text: 'git log --oneline -3',
        output: [
            'a3f2c1d feat: add GPT-4o trading signals',
            'b7e4a9f fix: optimize FAISS vector search',
            'c1d8f3a chore: update aiogram to v3.4'
        ]
    }
];

let commandIndex = 0;
let charIndex = 0;
let isTyping = false;

const typingEl = document.getElementById('typing-text');
const outputEl = document.getElementById('terminal-output');

function typeCommand() {
    if (isTyping) return;
    isTyping = true;

    const cmd = commands[commandIndex];
    typingEl.textContent = '';
    outputEl.innerHTML = '';

    function typeChar() {
        if (charIndex < cmd.text.length) {
            typingEl.textContent += cmd.text[charIndex];
            charIndex++;
            setTimeout(typeChar, 40 + Math.random() * 40);
        } else {
            setTimeout(() => {
                cmd.output.forEach((line, i) => {
                    setTimeout(() => {
                        const span = document.createElement('span');
                        span.className = 'out-line';
                        span.textContent = line;
                        span.style.animationDelay = `${i * 0.1}s`;
                        outputEl.appendChild(span);
                    }, i * 150);
                });
                setTimeout(() => {
                    commandIndex = (commandIndex + 1) % commands.length;
                    charIndex = 0;
                    isTyping = false;
                    setTimeout(typeCommand, 1500);
                }, cmd.output.length * 150 + 2500);
            }, 300);
        }
    }
    typeChar();
}

setTimeout(typeCommand, 1200);

/* ========================================
   Scroll Reveal
   ======================================== */
function initScrollReveal() {
    const elements = document.querySelectorAll(
        '.section-label, .section-title, .about-desc, .stat-card, ' +
        '.stack-category, .project-card, .sphere-card, .contact-block, ' +
        '.about-text, .about-right, .work-format, .leadership-info, ' +
        '.leadership-metrics, .metric-card, .process-step, .photo-frame'
    );
    elements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                let delay = 0;
                siblings.forEach((sib, i) => { if (sib === entry.target) delay = i * 80; });
                setTimeout(() => entry.target.classList.add('visible'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
}
initScrollReveal();

/* ========================================
   Active Nav
   ======================================== */
function initActiveNav() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.style.color = '';
                    if (link.getAttribute('href') === `#${id}`) link.style.color = 'var(--text)';
                });
            }
        });
    }, { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' });

    sections.forEach(sec => observer.observe(sec));
}
initActiveNav();

/* ========================================
   Mobile Menu
   ======================================== */
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const spans = navToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
});

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
});

/* ========================================
   Smooth Scroll
   ======================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* ========================================
   Nav scroll
   ======================================== */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 100 ? 'var(--border)' : 'transparent';
});

/* ========================================
   Cursor Glow (Desktop)
   ======================================== */
if (window.innerWidth > 768) {
    const glow = document.createElement('div');
    glow.style.cssText = `
        position:fixed; width:500px; height:500px; border-radius:50%;
        background:radial-gradient(circle, rgba(124,92,255,0.06) 0%, transparent 70%);
        pointer-events:none; z-index:0; transform:translate(-50%,-50%);
        transition:left 0.3s ease, top 0.3s ease;
    `;
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => { glow.style.left = e.clientX+'px'; glow.style.top = e.clientY+'px'; });
}

/* ========================================
   Language Toggle
   ======================================== */
const langToggle = document.getElementById('langToggle');

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-en]');

    elements.forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            if (text.includes('<')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    // Update placeholders
    const placeholderEls = document.querySelectorAll('[data-en-placeholder]');
    placeholderEls.forEach(el => {
        const ph = el.getAttribute(`data-${lang}-placeholder`);
        if (ph) el.placeholder = ph;
    });

    // Update toggle button
    const flag = langToggle.querySelector('.lang-flag');
    const code = langToggle.querySelector('.lang-code');
    if (lang === 'en') {
        flag.textContent = '🇷🇺';
        code.textContent = 'RU';
        langToggle.title = 'Switch to Russian';
    } else {
        flag.textContent = '🇬🇧';
        code.textContent = 'EN';
        langToggle.title = 'Switch to English';
    }

    localStorage.setItem('portfolio-lang', lang);
}

langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'ru' : 'en');
});

// Check saved language
const savedLang = localStorage.getItem('portfolio-lang');
if (savedLang && savedLang !== 'en') {
    setLanguage(savedLang);
}

/* ========================================
   Chat Widget
   ======================================== */
const chatToggle = document.getElementById('chatToggle');
const chatWindow = document.getElementById('chatWindow');
const chatMinimize = document.getElementById('chatMinimize');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const chatSend = document.getElementById('chatSend');
const chatInputArea = document.getElementById('chatInputArea');
const toggleIcon = document.querySelector('.chat-toggle-icon');
const toggleClose = document.querySelector('.chat-toggle-close');

// Toggle chat
chatToggle.addEventListener('click', () => {
    const isOpen = chatWindow.classList.toggle('open');
    toggleIcon.style.display = isOpen ? 'none' : 'block';
    toggleClose.style.display = isOpen ? 'block' : 'none';
    if (isOpen) chatInput.focus();
});

chatMinimize.addEventListener('click', () => {
    chatWindow.classList.remove('open');
    toggleIcon.style.display = 'block';
    toggleClose.style.display = 'none';
});

// Send message
function addMessage(text, isUser) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${isUser ? 'user' : 'bot'}`;
    msg.innerHTML = `
        <div class="chat-msg-avatar">${isUser ? '👤' : '🤖'}</div>
        <div class="chat-msg-bubble">${text}</div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const msg = document.createElement('div');
    msg.className = 'chat-msg bot';
    msg.id = 'typing-msg';
    msg.innerHTML = `
        <div class="chat-msg-avatar">🤖</div>
        <div class="typing-indicator"><span></span><span></span><span></span></div>
    `;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const el = document.getElementById('typing-msg');
    if (el) el.remove();
}

async function sendMessage() {
    const text = chatInput.value.trim();
    if (!text) return;

    addMessage(text, true);
    chatInput.value = '';
    addTypingIndicator();

    if (chatMode === 'demo') {
        setTimeout(() => {
            removeTypingIndicator();
            addMessage(getDemoResponse(text), false);
        }, 800 + Math.random() * 700);
    } else {
        chatHistory.push({ role: 'user', content: text });

        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-4o-mini',
                    messages: [
                        { role: 'system', content: SYSTEM_PROMPT },
                        ...chatHistory
                    ],
                    max_tokens: 300,
                    temperature: 0.7
                })
            });

            const data = await response.json();
            removeTypingIndicator();

            if (data.error) {
                addMessage(`⚠️ API error: ${data.error.message}`, false);
                // Fallback to demo
                chatMode = 'demo';
            } else {
                const reply = data.choices[0].message.content;
                chatHistory.push({ role: 'assistant', content: reply });
                addMessage(reply, false);
            }
        } catch (err) {
            removeTypingIndicator();
            addMessage('⚠️ Connection error. Switching to demo mode.', false);
            chatMode = 'demo';
        }
    }
}

chatSend.addEventListener('click', sendMessage);
chatInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

/* ========================================
   Contact Form → Telegram
   ======================================== */
const TELEGRAM_CHAT_ID = 1339362869;

async function submitContactForm(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !message) return;

    const submitBtn = form.querySelector('.form-submit');
    const statusEl = document.getElementById('formStatus');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '...';
    statusEl.className = 'form-status';

    const text = `📩 <b>Новая заявка!</b> (AI Bot Portfolio)\n\n👤 <b>Имя:</b> ${name}\n📧 <b>Email:</b> ${email}\n\n💬 <b>Сообщение:</b>\n${message}`;

    try {
        if (typeof TELEGRAM_BOT_TOKEN !== 'undefined' && TELEGRAM_BOT_TOKEN) {
            const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'HTML' })
            });
            const data = await res.json();
            if (data.ok) {
                statusEl.className = 'form-status success';
                statusEl.textContent = currentLang === 'ru'
                    ? '✓ Сообщение отправлено! Отвечу в ближайшее время.'
                    : '✓ Message sent! I\'ll get back to you soon.';
                form.reset();
            } else { throw new Error(data.description || 'API error'); }
        } else {
            window.location.href = `mailto:miko.nila20@gmail.com?subject=${encodeURIComponent('Заявка от ' + name)}&body=${encodeURIComponent(message + '\n\nEmail: ' + email)}`;
            statusEl.className = 'form-status success';
            statusEl.textContent = currentLang === 'ru' ? '✓ Открывается почтовый клиент...' : '✓ Opening your mail client...';
        }
    } catch (err) {
        statusEl.className = 'form-status error';
        statusEl.textContent = currentLang === 'ru'
            ? '✗ Ошибка. Напишите напрямую: @mikonila'
            : '✗ Error. Contact directly: @mikonila';
    }
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
}

const contactForm = document.getElementById('contactForm');
if (contactForm) contactForm.addEventListener('submit', submitContactForm);

/* ========================================
   Init Everything
   ======================================== */
initChatMode();
initParticles();
initGlitch();
initMetricBars();
