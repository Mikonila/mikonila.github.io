#!/bin/bash
# ══════════════════════════════════════════════════════════
# Деплой CODIM.ONLINE Course Showcase
# Бот + WebApp на тот же сервер, в отдельную папку
# ══════════════════════════════════════════════════════════
set -e

SERVER="root@77.73.232.142"
BOT_TARGET="/root/course_showcase"        # папка бота на сервере
WEBAPP_TARGET="/var/www/course_showcase"  # папка WebApp (раздаётся nginx)
BOT_IMAGE="course_showcase_bot"
BOT_CONTAINER="course_showcase_bot"

echo ""
echo "╔══════════════════════════════════════╗"
echo "║  Деплой Course Showcase → сервер     ║"
echo "╚══════════════════════════════════════╝"
echo ""

# ── 1. Синхронизация бота ──────────────────────────────────
echo "📦 [1/4] Синхронизирую бота..."
rsync -avz --delete \
  --exclude '__pycache__' \
  --exclude '*.pyc' \
  --exclude '.env' \
  --exclude 'venv/' \
  --exclude '.git/' \
  --exclude 'webapp/' \
  ./ "$SERVER:$BOT_TARGET/"

echo "✅ Файлы бота отправлены"

# ── 2. Синхронизация WebApp ───────────────────────────────
echo ""
echo "🌐 [2/4] Синхронизирую WebApp..."
ssh "$SERVER" "mkdir -p $WEBAPP_TARGET"
rsync -avz --delete \
  ./webapp/ "$SERVER:$WEBAPP_TARGET/"

echo "✅ Файлы WebApp отправлены"

# ── 3. Пересборка Docker-образа и перезапуск бота ─────────
echo ""
echo "🐳 [3/4] Пересобираю и перезапускаю бота..."
ssh "$SERVER" "
  cd $BOT_TARGET && \
  docker build -t $BOT_IMAGE . && \
  docker rm -f $BOT_CONTAINER 2>/dev/null || true && \
  docker run -d \
    --name $BOT_CONTAINER \
    --restart unless-stopped \
    --env-file .env \
    $BOT_IMAGE
"

echo "✅ Контейнер запущен"

# ── 4. Проверка ────────────────────────────────────────────
echo ""
echo "🔍 [4/4] Проверяю статус..."
ssh "$SERVER" "docker ps --filter name=$BOT_CONTAINER --format 'table {{.Names}}\t{{.Status}}\t{{.Ports}}'"

echo ""
echo "🎉 Деплой завершён!"
echo "   Бот:    $SERVER:$BOT_TARGET"
echo "   WebApp: http://$SERVER (nginx должен быть настроен)"
echo ""
