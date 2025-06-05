# 🚀 Project Setup Guide

Follow these steps to set up the project after cloning it.

## ⚙️ Install Dependencies

```bash
git clone https://github.com/WYL-Doinet/quiz

cd your-project

composer install

npm install

cp .env.example .env

php artisan key:generate

```

## 🧪 Testing Environment Setup

```bash
cp .env .env.testing
```

```env
DB_CONNECTION=sqlite
DB_URL='db-location':
```

```bash
php artisan test
```

## 📡 Pusher Setup (Real-Time Notifications)

```env
BROADCAST_DRIVER=pusher
PUSHER_APP_ID=your-app-id
PUSHER_APP_KEY=your-app-key
PUSHER_APP_SECRET=your-app-secret
PUSHER_HOST=
PUSHER_PORT=443
PUSHER_SCHEME=https
PUSHER_APP_CLUSTER=your-app-cluster
```

## 📧 Mail Setup (Gmail SMTP)

To enable email notifications via Gmail SMTP in Laravel:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your-email@gmail.com
MAIL_FROM_NAME="Your App Name"
```

## 🧼 Code Style with Laravel Pint

```bash
./vendor/bin/pint
```

## 🚀 Run the Project

```bash
composer run dev

php artisan queue:work

```
