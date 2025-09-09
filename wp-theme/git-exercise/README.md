# Git Exercise — WordPress Theme

Простая тема WordPress из этого проекта. Содержит шаблоны главной страницы и секций, поддерживает редактирование через ACF (если установлен).

## Установка локально
1. Установи LocalWP (или иной способ поднять WordPress).
2. Скопируй папку темы в `wp-content/themes/git-exercise/`.
3. В админке WP: Appearance → Themes → активируй «Git Exercise».
4. Создай страницу «Главная» и в Settings → Reading выбери «A static page» → Front page: «Главная».
5. (Опционально) Установи плагин ACF. Появится «Site Settings» (Options Page) для контента.

## Меню
Создай меню «Primary» и «Footer» в Appearance → Menus и привяжи к локациям темы.

## Поля ACF (Options Page)
Hero: `hero_title`, `hero_subtitle`, `hero_cta_text`, `hero_background`

Advantages: `advantages_title`, `advantages_items` (repeater: `title`, `description`)

Portfolio: `portfolio_title`, `portfolio_items` (repeater: `image`, `title`, `description`, `url`)

Testimonials: `testimonials_title`, `testimonials_items` (repeater: `quote`, `author`, `role`)

Pricing: `pricing_title`, `pricing_plans` (repeater: `name`, `price`, `features` (repeater: `feature`), `cta_text`)

Process: `process_title`, `process_steps` (repeater: `title`, `description`)

Final CTA: `final_cta_title`, `final_cta_subtitle`, `final_cta_button`

Lite Package: `lite_title`, `lite_description`

## Ассеты
Сейчас подключается только `style.css`. При необходимости добавь сборку и подключи файлы в `functions.php` через `wp_enqueue_style`/`wp_enqueue_script`.
