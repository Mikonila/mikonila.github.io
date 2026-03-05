from aiogram import Router
from aiogram.filters import Command, CommandStart
from aiogram.types import (
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    Message,
    WebAppInfo,
)

from bot.config import load_config

router = Router()
config = load_config()

# ────────────────────────────────────────────────────────────
# /start
# ────────────────────────────────────────────────────────────
@router.message(CommandStart())
async def cmd_start(message: Message) -> None:
    first = message.from_user.first_name or "друг"

    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="🎓 Витрина курсов",
                    web_app=WebAppInfo(url=config.WEBAPP_URL),
                )
            ],
            [
                InlineKeyboardButton(
                    text="📋 Все курсы на сайте",
                    url="https://lesson.codim.online/#rec422133304",
                ),
            ],
            [
                InlineKeyboardButton(
                    text="🎁 3 пробных урока бесплатно",
                    url="https://codim.online/demo1/entrance",
                ),
                InlineKeyboardButton(
                    text="📱 WhatsApp",
                    url="https://wa.me/79052091715",
                ),
            ],
        ]
    )

    await message.answer(
        f"👋 Привет, <b>{first}</b>!\n\n"
        f"Я помогу найти идеальный курс программирования для твоего ребёнка 🚀\n\n"
        f"<b>CODIM.ONLINE</b> — онлайн-школа программирования для детей <b>5–17 лет</b>.\n"
        f"С 2018 года мы обучили более <b>10 000 учеников</b> из 49 стран!\n\n"
        f"Нажми кнопку ниже, чтобы открыть <b>витрину курсов</b> 👇",
        reply_markup=kb,
    )


# ────────────────────────────────────────────────────────────
# /courses
# ────────────────────────────────────────────────────────────
@router.message(Command("courses"))
async def cmd_courses(message: Message) -> None:
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="🎓 Открыть витрину курсов",
                    web_app=WebAppInfo(url=config.WEBAPP_URL),
                )
            ],
        ]
    )
    await message.answer(
        "📚 <b>Наши курсы программирования:</b>\n\n"
        "🧸 <b>5–7 лет:</b> Scratch Junior, Minecraft Junior\n"
        "🐱 <b>7–13 лет:</b> Scratch 1, Scratch 2, Scratch: Большое путешествие, Scratch: Наглядная математика\n"
        "⛏️ <b>7–13 лет:</b> Minecraft\n"
        "🎮 <b>9+ лет:</b> Roblox Studio (язык Lua)\n"
        "🐍 <b>9+ лет:</b> Python Level 1\n"
        "🌐 <b>12+ лет:</b> Web-разработка (HTML, CSS, JS)\n\n"
        "Все подробности в витрине курсов 👇",
        reply_markup=kb,
    )


# ────────────────────────────────────────────────────────────
# /help
# ────────────────────────────────────────────────────────────
@router.message(Command("help"))
async def cmd_help(message: Message) -> None:
    await message.answer(
        "ℹ️ <b>Доступные команды:</b>\n\n"
        "/start — Главное меню\n"
        "/courses — Список курсов\n"
        "/demo — Пробные уроки\n"
        "/contact — Связаться с нами\n"
        "/help — Справка"
    )


# ────────────────────────────────────────────────────────────
# /demo
# ────────────────────────────────────────────────────────────
@router.message(Command("demo"))
async def cmd_demo(message: Message) -> None:
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text="🎁 Посмотреть бесплатные уроки",
                    url="https://codim.online/demo1/entrance",
                )
            ]
        ]
    )
    await message.answer(
        "🎁 <b>3 пробных урока — БЕСПЛАТНО!</b>\n\n"
        "Зарегистрируйся и получи доступ к <b>200+ демо-урокам</b> "
        "по всем направлениям прямо сейчас. Никаких обязательств — "
        "просто посмотри и реши, подходит ли формат.",
        reply_markup=kb,
    )


# ────────────────────────────────────────────────────────────
# /contact
# ────────────────────────────────────────────────────────────
@router.message(Command("contact"))
async def cmd_contact(message: Message) -> None:
    kb = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(text="📱 WhatsApp", url="https://wa.me/79052091715"),
                InlineKeyboardButton(text="✈️ Telegram", url="https://t.me/codimonlinebot"),
            ],
            [
                InlineKeyboardButton(text="💙 ВКонтакте", url="https://vk.com/kidseducation"),
            ],
        ]
    )
    await message.answer(
        "📞 <b>Свяжитесь с нами:</b>\n\n"
        "📧 info@codim.online\n"
        "📞 +7 905 209-17-15\n"
        "🕐 Пн–Пт 9:00–20:00\n\n"
        "Выбери удобный мессенджер:",
        reply_markup=kb,
    )
