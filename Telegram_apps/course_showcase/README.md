# 🎓 CODIM.ONLINE — Course Showcase

**Telegram Mini App** — витрина курсов онлайн-школы программирования для детей [CODIM.ONLINE](https://lesson.codim.online).

---

## 📱 Что это?

Полноценное Telegram Mini App (WebApp) с витриной курсов школы CODIM.ONLINE.  
Пользователь открывает его прямо внутри Telegram и может:

- 📂 **Просматривать все курсы** по категориям
- 🔍 **Искать** курс по названию, возрасту, навыкам
- 🃏 **Открывать карточку** с описанием, программой, тарифами и ценами
- 🎁 **Перейти на пробные уроки** / записаться / написать менеджеру

---

## 🗂️ Структура проекта

```
course_showcase/
│
├── webapp/                 # Telegram Mini App (HTML/CSS/JS)
│   ├── index.html          # Главная страница приложения
│   ├── styles.css          # Стили (Telegram-тема, dark mode)
│   ├── app.js              # Логика: фильтры, поиск, модал, Telegram SDK
│   └── courses_data.js     # Данные всех курсов (категории, описания, цены)
│
├── bot/                    # Python-бот на aiogram 3
│   ├── __init__.py
│   ├── main.py             # Точка входа
│   ├── config.py           # Конфиг (.env)
│   └── handlers.py         # Обработчики команд
│
├── requirements.txt        # Python зависимости
├── Dockerfile              # Docker-образ бота
├── docker-compose.yml      # Быстрый запуск
├── .env.example            # Шаблон переменных окружения
└── .gitignore
```

---

## ✨ Возможности WebApp

| Функция | Описание |
|---|---|
| 🗂️ Категории | Фильтрация по типу курса (Scratch, Minecraft, Python и др.) |
| 🔍 Поиск | Поиск по названию, возрасту, навыкам |
| 🃏 Карточки | Красивые карточки с эмодзи, возрастом, кол-вом уроков |
| 📋 Детали | Модальное окно с описанием, навыками, тарифами |
| 💰 Тарифы | Подписка / PRO / Zoom с ценами и скидками |
| 🎨 Тема | Автоматически подхватывает тёмную/светлую тему Telegram |
| 📳 Haptic | Тактильная обратная связь через Telegram HapticFeedback API |
| 📲 Back Button | Кнопка «Назад» в Telegram закрывает модалку |
| 🔗 Ссылки | Кнопки записи, пробных уроков, подробной страницы |

---

## 🚀 Деплой на сервер (тот же, где уже работает codimonline)

> Этот проект деплоится **в отдельную папку** на том же сервере `77.73.232.142`.  
> Он никак не затрагивает существующий бот `codimonline`.

---

### Шаг 1 — Создать нового бота

1. Открой [@BotFather](https://t.me/BotFather) в Telegram
2. `/newbot` → задай имя и username
3. Скопируй токен

---

### Шаг 2 — Настроить WebApp (нужен HTTPS!)

Telegram Mini App **обязательно** требует HTTPS.

#### Вариант А: GitHub Pages (бесплатно, рекомендую для портфолио)

```bash
# 1. Создай новый публичный репозиторий на GitHub, например course-showcase-webapp
# 2. Залей только папку webapp/ в корень репозитория
cd webapp/
git init
git remote add origin https://github.com/ТВО_ИМЯ/course-showcase-webapp.git
git add .
git commit -m "init webapp"
git push -u origin main

# 3. Зайди в Settings → Pages → Source → Deploy from branch → main → / (root)
# 4. Получишь URL: https://ТВО_ИМЯ.github.io/course-showcase-webapp/
```

#### Вариант Б: Прямо на своём сервере через nginx

Если у тебя есть домен — самый профессиональный вариант.

```bash
# На сервере установи certbot и получи SSL
apt install certbot python3-certbot-nginx
certbot --nginx -d твой-домен.ru
```

Конфиг nginx уже лежит в файле `nginx.conf` этого проекта.  
`deploy.sh` автоматически скопирует файлы webapp на сервер в `/var/www/course_showcase`.

#### Вариант В: Ngrok (только для тестирования)

```bash
cd webapp/
python3 -m http.server 8080
# В другом терминале:
ngrok http 8080
# Получишь временный URL вида: https://abc123.ngrok-free.app
```

---

### Шаг 3 — Заполнить .env

```bash
cp .env.example .env
nano .env   # или открой в редакторе
```

```dotenv
BOT_TOKEN=токен_от_BotFather
WEBAPP_URL=https://твой-url-webapp  # URL из шага 2
```

> ⚠️ Файл `.env` **не копируется** на сервер через `deploy.sh` (специально).  
> Его нужно создать на сервере вручную — один раз:
> ```bash
> ssh root@77.73.232.142
> nano /root/course_showcase/.env
> # Вставь BOT_TOKEN и WEBAPP_URL, сохрани
> ```

---

### Шаг 4 — Задеплоить

```bash
# Сделай скрипт исполняемым (один раз)
chmod +x deploy.sh

# Запусти деплой
./deploy.sh
```

Скрипт сделает:
1. Отправит файлы бота на сервер через `rsync` в `/root/course_showcase/`  
   (без `.env` — не перезапишет твои секреты!)
2. Скопирует WebApp в `/var/www/course_showcase/`
3. Пересоберёт Docker-образ
4. Перезапустит контейнер
5. Покажет статус

---

### Шаг 5 — Настроить кнопку WebApp в BotFather

```
/mybots → выбери бота → Bot Settings → Menu Button → Edit Menu Button URL
# Вставь WEBAPP_URL
```

---

## ⚠️ Если на сервере уже есть старые файлы

`rsync --delete` удалит файлы, которых нет локально, но **не тронет `.env`** (он в исключениях).  
Контейнер `codimonline` тоже не затрагивается — у нового контейнера другое имя (`course_showcase_bot`).

```bash
# Проверить запущенные контейнеры на сервере:
ssh root@77.73.232.142 "docker ps"

# Посмотреть логи нового бота:
ssh root@77.73.232.142 "docker logs -f course_showcase_bot"
```

---

## 🐳 Docker вручную (без deploy.sh)

```bash
# Сборка
docker build -t course_showcase_bot .

# Запуск
docker run -d \
  --name course_showcase_bot \
  --restart unless-stopped \
  --env-file .env \
  course_showcase_bot

# Логи
docker logs -f course_showcase_bot
```

---

## 📚 Курсы в приложении

| Курс | Возраст | Уроков |
|---|---|---|
| 🧸 Scratch Junior | 5–7 лет | 32 |
| ⛏️ Minecraft Junior | 5–7 лет | 16 |
| 🟡 Scratch Level 1 | 7–8 лет | 32 |
| 🟠 Scratch Level 2 | 9–10 лет | 32 |
| 🌍 Scratch: Большое путешествие | 9–13 лет | 32 |
| 📐 Scratch: Наглядная математика | 8–10 лет | 50 |
| ⛏️ Minecraft | 7–13 лет | 32 |
| 🎮 Roblox Studio | 9+ лет | 35 |
| 🐍 Python Level 1 | 9+ лет | 32 |
| 🌐 Web-разработка | 12+ лет | 32 |

---

## 🛠️ Технологии

- **Frontend:** Vanilla HTML / CSS / JavaScript, Telegram WebApp SDK
- **Backend бот:** Python 3.12, [aiogram 3.x](https://docs.aiogram.dev/)
- **Деплой:** Docker / GitHub Pages / Vercel

---

## 📝 Команды бота

| Команда | Описание |
|---|---|
| `/start` | Главное меню с кнопкой WebApp |
| `/courses` | Список всех курсов |
| `/demo` | Ссылка на пробные уроки |
| `/contact` | Контакты школы |
| `/help` | Справка |

---

## 🔗 Ссылки

- 🌐 Сайт: [lesson.codim.online](https://lesson.codim.online)
- 📚 Курсы: [lesson.codim.online/#курсы](https://lesson.codim.online/#rec422133304)
- 🎁 Демо: [codim.online/demo1/entrance](https://codim.online/demo1/entrance)
- 📱 WhatsApp: [wa.me/79052091715](https://wa.me/79052091715)
- ✈️ Telegram: [@codimonlinebot](https://t.me/codimonlinebot)

---

*Разработано как учебный проект для портфолио. Данные курсов взяты с официального сайта [codim.online](https://codim.online).*
