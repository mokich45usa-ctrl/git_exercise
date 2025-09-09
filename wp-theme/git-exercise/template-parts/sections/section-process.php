<?php if (!defined('ABSPATH')) exit; ?>
<section class="section process">
  <div class="container">
    <h2><?php echo esc_html(gx_get_field('process_title', __('Process', 'git-exercise'))); ?></h2>
    <ol>
      <?php if (function_exists('have_rows') && have_rows('process_steps', 'option')): ?>
        <?php while (have_rows('process_steps', 'option')): the_row(); ?>
          <li>
            <strong><?php echo esc_html(get_sub_field('title')); ?></strong>
            <div class="muted"><?php echo esc_html(get_sub_field('description')); ?></div>
          </li>
        <?php endwhile; ?>
      <?php else: ?>
        <li class="muted"><?php esc_html_e('Add steps in WP Admin → Site Settings.', 'git-exercise'); ?></li>
      <?php endif; ?>
    </ol>
  </div>
</section>


