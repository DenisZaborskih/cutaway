import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/posts.interface';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { WorksShort } from '../interfaces/works.interface';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts: Posts[] = [
      { title: 'Опытный в форматировании даты и времени', date: new Date('2025-06-13'), theme: 'программирование', description: 'Опытный в форматировании даты и времени для веб-приложений с использованием JavaScript, Angular и Laravel.' },
      { title: 'Разработка сайтов с акцентом на планирование', date: new Date('2025-06-22'), theme: 'проекты', description: 'Разрабатывает сайты, включая сайты-визитки, с акцентом на эффективное планирование проектов.' },
      { title: 'Первый пост', date: new Date('2025-07-01'), theme: 'Angular', description: 'Текст первого поста' },
      { title: 'Второй пост', date: new Date('2025-07-02'), theme: null, description: 'Второй пост, который вы читаете, содержит множество важных мыслей, идей и наблюдений, которые могут оказаться полезными в самых разных ситуациях, будь то работа, учёба или повседневная жизнь.' },
      { title: 'Советы по оптимизации производительности', date: new Date('2025-05-15'), theme: 'программирование', description: 'Как улучшить производительность Angular-приложений.' },
      { title: 'Обзор новых возможностей TypeScript', date: new Date('2025-04-10'), theme: 'typescript', description: 'Рассмотрение новых функций в последней версии TypeScript.' },
      { title: 'Введение в RxJS', date: new Date('2025-03-05'), theme: 'rxjs', description: 'Основы реактивного программирования с использованием RxJS.' },
      { title: 'Лучшие практики CSS', date: new Date('2025-02-20'), theme: 'css', description: 'Советы по написанию чистого и поддерживаемого CSS.' },
      { title: 'Работа с REST API в Angular', date: new Date('2025-01-30'), theme: 'angular', description: 'Как эффективно работать с REST API в Angular-приложениях.' },
      { title: 'Тестирование Angular-приложений', date: new Date('2024-12-15'), theme: 'testing', description: 'Обзор инструментов и подходов к тестированию в Angular.' },
      { title: 'Управление состоянием с NgRx', date: new Date('2024-11-10'), theme: 'ngrx', description: 'Как использовать NgRx для управления состоянием приложения.' },
      { title: 'Создание адаптивного дизайна', date: new Date('2024-10-05'), theme: 'design', description: 'Основы адаптивной верстки и медиазапросов.' },
      { title: 'Введение в Web Accessibility', date: new Date('2024-09-01'), theme: 'accessibility', description: 'Как сделать веб-приложения доступными для всех пользователей.' },
      { title: 'Оптимизация загрузки изображений', date: new Date('2024-08-20'), theme: 'performance', description: 'Методы оптимизации изображений для ускорения загрузки страниц.' },
      { title: 'Использование Angular CLI', date: new Date('2024-07-15'), theme: 'tools', description: 'Обзор возможностей Angular CLI для разработки.' }
    ];
    const worksShort: WorksShort[] = [
      {
        title: 'Проект А',
        imgURL: './assets/img/avatar.png',
        year: 2023,
        theme: 'программирование',
        description: `Комплексное решение для автоматизации бизнес-процессов с использованием современных технологий. Обеспечивает высокую производительность, масштабируемость и безопасность данных.`
      },
      {
        title: 'Проект Б',
        imgURL: './assets/img/avatar.png',
        year: 2024,
        theme: 'дизайн',
        description: `Инновационный дизайн-концепт, сочетающий минимализм и функциональность. Адаптивный интерфейс, кроссбраузерность и удобство для широкой аудитории.`
      },
      {
        title: 'Проект В',
        imgURL: './assets/img/avatar.png',
        year: 2025,
        theme: 'маркетинг',
        description: `Разработка комплексной маркетинговой стратегии с анализом рынка и целевой аудитории. Создание уникального контента и рекламных кампаний для повышения узнаваемости бренда.`
      },
      {
        title: 'Проект Г',
        imgURL: './assets/img/avatar.png',
        year: 2022,
        theme: 'разработка сайтов',
        description: `Создание современных сайтов-визиток с акцентом на удобство пользователя и адаптивный дизайн. Оптимизация загрузки и интеграция с CMS.`
      },
      {
        title: 'Проект Д',
        imgURL: './assets/img/avatar.png',
        year: 2021,
        theme: 'frontend',
        description: `Разработка отзывчивого пользовательского интерфейса с использованием современных фреймворков. Оптимизация производительности и удобство взаимодействия.`
      },
      {
        title: 'Проект Е',
        imgURL: './assets/img/avatar.png',
        year: 2020,
        theme: 'backend',
        description: `Создание серверной части приложения с REST API, интеграцией с базами данных и механизмами аутентификации. Обеспечение безопасности и масштабируемости.`
      },
      {
        title: 'Проект Ж',
        imgURL: './assets/img/avatar.png',
        year: 2019,
        theme: 'devops',
        description: `Автоматизация процессов развертывания и мониторинга с использованием CI/CD, контейнеризации и облачных сервисов для повышения стабильности инфраструктуры.`
      },
      {
        title: 'Проект З',
        imgURL: './assets/img/avatar.png',
        year: 2018,
        theme: 'data science',
        description: `Анализ больших данных и построение моделей машинного обучения для решения бизнес-задач с использованием современных инструментов и библиотек.`
      },
      {
        title: 'Проект И',
        imgURL: './assets/img/avatar.png',
        year: 2017,
        theme: 'mobile',
        description: `Разработка кроссплатформенных мобильных приложений с акцентом на удобство интерфейса, производительность и интеграцию с внешними сервисами.`
      },
      {
        title: 'Проект К',
        imgURL: './assets/img/avatar.png',
        year: 2016,
        theme: 'testing',
        description: `Создание автоматизированных тестов для обеспечения качества ПО. Использование модульного, интеграционного и нагрузочного тестирования для повышения надежности.`
      }
    ];
    return { posts, worksShort };
  }
}
