# Устанавливаем базовый образ
FROM node:20

# Создаем директорию приложения
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости приложения
RUN npm install

# Копируем исходный код приложения
COPY . .

# Компилируем TypeScript в JavaScript
RUN npx tsc

# Собираем приложение
RUN npm run build

# Определяем порт, который будет прослушивать приложение
EXPOSE 3000

# Запускаем приложение
CMD [ "npm", "start" ]
