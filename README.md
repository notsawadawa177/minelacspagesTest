
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/52877865-0c35-4c12-95de-238b50562ce9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/52877865-0c35-4c12-95de-238b50562ce9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Пошаговая инструкция по размещению сайта на GitHub Pages

### 1. Создайте репозиторий на GitHub

1. Откройте [GitHub](https://github.com) и войдите в свой аккаунт
2. Нажмите на кнопку "+" в правом верхнем углу и выберите "New repository"
3. Введите имя репозитория (например, "minelacs-website")
4. Выберите "Public" для публичного доступа
5. Нажмите "Create repository"

### 2. Загрузите код в репозиторий

Вы можете использовать GitHub Desktop или командную строку:

**Через командную строку:**
```bash
# Клонируйте ваш пустой репозиторий
git clone https://github.com/ваш-логин/имя-репозитория.git

# Перейдите в директорию проекта
cd имя-репозитория

# Скопируйте все файлы из Lovable проекта в эту директорию

# Добавьте все файлы в Git
git add .

# Сделайте коммит
git commit -m "Первая версия сайта"

# Отправьте изменения на GitHub
git push
```

### 3. Настройте GitHub Actions для деплоя

1. В вашем репозитории на GitHub перейдите во вкладку "Actions"
2. Нажмите на кнопку "New workflow"
3. Нажмите "set up a workflow yourself" для создания собственного workflow

4. Скопируйте и вставьте следующий код в редактор:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18.x'
          cache: npm
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Нажмите на кнопку "Commit changes" (или "Start commit") и введите сообщение "Add GitHub Pages workflow"

### 4. Настройте GitHub Pages

1. В вашем репозитории перейдите в "Settings"
2. Прокрутите вниз до раздела "Pages"
3. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
4. Сохраните изменения

### 5. Запустите процесс деплоя

1. Перейдите во вкладку "Actions"
2. Найдите workflow "Deploy to GitHub Pages"
3. Нажмите на кнопку "Run workflow"
4. Выберите ветку "main" и нажмите "Run workflow"

### 6. Проверьте ваш сайт

После успешного деплоя (около 1-2 минут) ваш сайт будет доступен по адресу:
```
https://ваш-логин.github.io/имя-репозитория/
```

Например: https://username.github.io/minelacs-website/

### Обновление сайта

Для обновления сайта просто внесите изменения в код и отправьте их в репозиторий:

```bash
git add .
git commit -m "Обновление сайта"
git push
```

GitHub Actions автоматически обновит ваш сайт через несколько минут после отправки изменений.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/52877865-0c35-4c12-95de-238b50562ce9) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
