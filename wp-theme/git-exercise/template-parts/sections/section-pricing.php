<?php if (!defined('ABSPATH')) exit; ?>
<section class="section pricing">
  <div class="container">
    <h2><?php echo esc_html(gx_get_field('pricing_title', __('Pricing', 'git-exercise'))); ?></h2>
    <div class="grid" style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;">
      <?php $target = function_exists('get_field') ? gx_acf_target() : null; ?>
      <?php if (function_exists('have_rows') && have_rows('pricing_plans', $target)): ?>
        <?php while (have_rows('pricing_plans', $target)): the_row(); ?>
          <div class="card" style="border:1px solid #e2e8f0;padding:16px;border-radius:8px;">
            <h3><?php echo esc_html(get_sub_field('name')); ?></h3>
            <p><strong><?php echo esc_html(get_sub_field('price')); ?></strong></p>
            <?php if (have_rows('features')): ?>
              <ul>
                <?php while (have_rows('features')): the_row(); ?>
                  <li><?php echo esc_html(get_sub_field('feature')); ?></li>
                <?php endwhile; ?>
              </ul>
            <?php endif; ?>
            <?php $cta = get_sub_field('cta_text'); if ($cta): ?>
              <p><a class="button" href="#contact"><?php echo esc_html($cta); ?></a></p>
            <?php endif; ?>
          </div>
        <?php endwhile; ?>
      <?php else: ?>
        <p class="muted"><?php esc_html_e('Add pricing plans in WP Admin → Site Settings.', 'git-exercise'); ?></p>
      <?php endif; ?>
    </div>
  </div>
</section>


