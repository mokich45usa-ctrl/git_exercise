<?php if (!defined('ABSPATH')) exit; ?>
<section class="section final-cta" id="contact">
  <div class="container">
    <h2><?php echo esc_html(gx_get_field('final_cta_title', __('Ready to start?', 'git-exercise'))); ?></h2>
    <p class="muted"><?php echo esc_html(gx_get_field('final_cta_subtitle', __('Tell us about your project.', 'git-exercise'))); ?></p>
    <?php $cta = gx_get_field('final_cta_button', __('Contact us', 'git-exercise')); ?>
    <?php if ($cta): ?><a class="button" href="mailto:<?php echo antispambot(get_option('admin_email')); ?>"><?php echo esc_html($cta); ?></a><?php endif; ?>
  </div>
</section>


