<?php if (!defined('ABSPATH')) exit; ?>
<?php get_header(); ?>

<section class="section container">
  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <h1><?php the_title(); ?></h1>
      <div class="content"><?php the_content(); ?></div>
    </article>
  <?php endwhile; endif; ?>
</section>

<?php get_footer(); ?>


