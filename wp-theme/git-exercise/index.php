<?php if (!defined('ABSPATH')) exit; ?>
<?php get_header(); ?>

<section class="section container">
  <h2><?php esc_html_e('Blog', 'git-exercise'); ?></h2>
  <?php if (have_posts()) : ?>
    <?php while (have_posts()) : the_post(); ?>
      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
        <div class="muted"><?php the_time(get_option('date_format')); ?></div>
        <div><?php the_excerpt(); ?></div>
      </article>
    <?php endwhile; ?>
    <div class="pagination"><?php the_posts_pagination(); ?></div>
  <?php else : ?>
    <p><?php esc_html_e('No posts found.', 'git-exercise'); ?></p>
  <?php endif; ?>
</section>

<?php get_footer(); ?>


