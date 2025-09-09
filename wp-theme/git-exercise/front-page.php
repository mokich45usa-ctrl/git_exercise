<?php if (!defined('ABSPATH')) exit; ?>
<?php get_header(); ?>

<?php
  // Главная: собираем секции из шаблонов.
  get_template_part('template-parts/sections/section', 'hero');
  get_template_part('template-parts/sections/section', 'advantages');
  get_template_part('template-parts/sections/section', 'portfolio');
  get_template_part('template-parts/sections/section', 'testimonials');
  get_template_part('template-parts/sections/section', 'pricing');
  get_template_part('template-parts/sections/section', 'process');
  get_template_part('template-parts/sections/section', 'final-cta');
  get_template_part('template-parts/sections/section', 'lite-package');
?>

<?php get_footer(); ?>


