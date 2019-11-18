# ДЗ

## Как делать:

1. Перед выполнением сделайте мердж мастера моего репозитория себе в форк (чтобы иметь актуальный кодбейс);
2. Создайте ветку для выполнения ДЗ;
3. Выполните ДЗ в этой ветке;
4. Сделайте Pull Request этой ветки на мастер моего репозитория;
5. Напишите мне (m.kramarenko@javascript.info) письмо со ссылкой на PR.

Дедлайн – 22:00 по Москве за день до занятия.

## HT1

1. С помощью компонента https://ant.design/components/rate/ вывести средний рейтинг ресторана;

2. Вывести списком отзывы о ресторане;

3. Переписать ReviewForm на Functional component.

## HT2

1. Написать тест на список отзывов;

2. Написать PropTypes компонентам (на сколько хватит усидчивости);

3. Тест на уменьшение позиций в корзине;

4\*. Написать асинхронный тест на меню (по желанию).

## HT3

1. Реализовать уменьшение блюд из корзины;

2. Сделали компонент Order, который бы отображал имена блюд, кол-во и стоимость позиций, и полную стоимость заказа;

## HT4

1. Починить AverageRating и Reviews также, как мы починили Menu;

2. Реализовать добавление отзыва к ресторану (сделать middleware для генерации id отзыва и пользователя) и добавить поле Имя пользователя в форму;

## HT5

1. Реализовать загрузку отзывов с помощью MW api (/api/reviews);

2. Реализовать загрузку пользователей с помощью thunk (/api/users).

3\*. Загружать данные только для одного ресторана (?id=<id_of_restaurant>)

## HT6

1. Починить загрузку отзывов;

2. Добавить странички Order и OrderComplete.

## HT7

1. Реализовать интернационализацию, хранить словарь в контексте.
