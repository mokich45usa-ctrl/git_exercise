<?php if (!defined('ABSPATH')) exit; ?>
<section class="section hero">
  <div class="container">
    <h1><?php echo esc_html(gx_get_field('hero_title', get_bloginfo('name'))); ?></h1>
    <p class="muted"><?php echo esc_html(gx_get_field('hero_subtitle', get_bloginfo('description'))); ?></p>
    <?php $cta = gx_get_field('hero_cta_text', __('Get Started', 'git-exercise')); ?>
    <?php if ($cta): ?>
      <a class="button" href="#contact"><?php echo esc_html($cta); ?></a>
    <?php endif; ?>
  </div>
  
  <?php $bg = gx_get_field('hero_background'); if ($bg): ?>
    <style>.hero{background:url('<?php echo esc_url($bg); ?>') center/cover no-repeat;}</style>
  <?php endif; ?>
</section>


