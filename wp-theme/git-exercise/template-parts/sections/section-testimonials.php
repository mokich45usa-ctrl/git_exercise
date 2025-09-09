<?php if (!defined('ABSPATH')) exit; ?>
<section class="section testimonials">
  <div class="container">
    <h2><?php echo esc_html(gx_get_field('testimonials_title', __('Testimonials', 'git-exercise'))); ?></h2>
    <div class="grid" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px;">
      <?php if (function_exists('have_rows') && have_rows('testimonials_items', 'option')): ?>
        <?php while (have_rows('testimonials_items', 'option')): the_row(); ?>
          <blockquote class="card" style="border:1px solid #e2e8f0;padding:16px;border-radius:8px;">
            <p>“<?php echo esc_html(get_sub_field('quote')); ?>”</p>
            <cite class="muted">— <?php echo esc_html(get_sub_field('author')); ?>, <?php echo esc_html(get_sub_field('role')); ?></cite>
          </blockquote>
        <?php endwhile; ?>
      <?php else: ?>
        <p class="muted"><?php esc_html_e('Add testimonials in WP Admin → Site Settings.', 'git-exercise'); ?></p>
      <?php endif; ?>
    </div>
  </div>
</section>


