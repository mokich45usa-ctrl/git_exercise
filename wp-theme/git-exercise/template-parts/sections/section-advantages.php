<?php if (!defined('ABSPATH')) exit; ?>
<section class="section advantages">
  <div class="container">
    <h2><?php echo esc_html(gx_get_field('advantages_title', __('Advantages', 'git-exercise'))); ?></h2>
    <div class="grid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;">
      <?php if (function_exists('have_rows') && have_rows('advantages_items', 'option')): ?>
        <?php while (have_rows('advantages_items', 'option')): the_row(); ?>
          <div class="card" style="border:1px solid #e2e8f0;padding:16px;border-radius:8px;">
            <h3><?php echo esc_html(get_sub_field('title')); ?></h3>
            <p class="muted"><?php echo esc_html(get_sub_field('description')); ?></p>
          </div>
        <?php endwhile; ?>
      <?php else: ?>
        <p class="muted"><?php esc_html_e('Add advantages in WP Admin → Site Settings.', 'git-exercise'); ?></p>
      <?php endif; ?>
    </div>
  </div>
</section>


