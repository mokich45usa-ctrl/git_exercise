<?php if (!defined('ABSPATH')) exit; ?>
<?php get_header(); ?>

<section class="section container">
  <h1><?php esc_html_e('Page not found', 'git-exercise'); ?></h1>
  <p class="muted"><?php esc_html_e('The page you are looking for doesn’t exist or was moved.', 'git-exercise'); ?></p>
  <p><a class="button" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Back to home', 'git-exercise'); ?></a></p>
  <?php get_search_form(); ?>
</section>

<?php get_footer(); ?>


