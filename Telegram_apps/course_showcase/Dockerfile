FROM python:3.12-slim

WORKDIR /app

# Зависимости
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Код бота
COPY bot/ ./bot/

# Переменные окружения (задаются через docker run -e или .env)
ENV PYTHONUNBUFFERED=1

CMD ["python", "-m", "bot.main"]
