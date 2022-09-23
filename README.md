# react-hello-22-09
Стартер для проектов на React с TypeScript, привычными конфигами линтера-приттиера и тестами.

## О сборке
Cборка Webpack + TypeScript + React, основные инструменты:
- [TypeScript](https://www.typescriptlang.org/docs/),
- [Webpack](https://webpack.js.org/guides/getting-started/),
- [Babel](https://babeljs.io/setup),
- [React](https://ru.react.js.org/docs/getting-started.html),
- [React Router](https://reactrouter.com/en/main),
- [Styled Components](https://styled-components.com/docs),
- [Axios](https://axios-http.com/docs/intro).

для тестов:
- [Jest](https://jestjs.io/docs/getting-started),
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

для соблюдения чистоты кода используются:
- [ESLint](https://eslint.org/),
- [Prettier](https://prettier.io/).

Переменные окружения берутся из файла .ENV (использован [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)).

## Основные скрипты (yarn или npm ...)
- build - production сборка в dist
- build-n - production сборка с предварительным созданием файла .env на Netlify
- lint - eslint, только ошибки
- fix - eslint, исправление ошибок
- start - запуск дев-сервера, порт 3000
- test - запуск тестов

## Деплой
### Netlify
Для деплоя на сервисе создан файл редиректов (для роутера, если он будет) и скрипт, собирающий переменные окружения в файл. Имена переменных в файле надо задавать вручную!)
