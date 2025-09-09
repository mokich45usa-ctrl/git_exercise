<?php if (!defined('ABSPATH')) exit; ?>
<section class="section portfolio">
  <div class="container">
    <h2><?php echo esc_html(gx_get_field('portfolio_title', __('Portfolio', 'git-exercise'))); ?></h2>
    <div class="grid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;">
      <?php if (function_exists('have_rows') && have_rows('portfolio_items', 'option')): ?>
        <?php while (have_rows('portfolio_items', 'option')): the_row(); ?>
          <?php $image = get_sub_field('image'); $title = get_sub_field('title'); $desc = get_sub_field('description'); $url = get_sub_field('url'); ?>
          <article class="card" style="border:1px solid #e2e8f0;padding:16px;border-radius:8px;">
            <?php if ($image): ?><img src="<?php echo esc_url($image); ?>" alt="" /><?php endif; ?>
            <h3><?php echo esc_html($title); ?></h3>
            <p class="muted"><?php echo esc_html($desc); ?></p>
            <?php if ($url): ?><p><a href="<?php echo esc_url($url); ?>" target="_blank" rel="noopener">Visit</a></p><?php endif; ?>
          </article>
        <?php endwhile; ?>
      <?php else: ?>
        <p class="muted"><?php esc_html_e('Add portfolio items in WP Admin → Site Settings.', 'git-exercise'); ?></p>
      <?php endif; ?>
    </div>
  </div>
</section>


