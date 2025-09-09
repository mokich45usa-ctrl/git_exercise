<?php if (!defined('ABSPATH')) exit; ?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <?php wp_head(); ?>
  <style>img{max-width:100%;height:auto}</style>
  <title><?php wp_title('|', true, 'right'); bloginfo('name'); ?></title>
</head>
<body <?php body_class(); ?>>
  <header class="site-header">
    <div class="container">
      <div class="site-branding">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="logo"><?php bloginfo('name'); ?></a>
      </div>
      <nav class="site-nav" aria-label="Primary">
        <?php
          wp_nav_menu([
            'theme_location' => 'primary',
            'container' => false,
            'menu_class' => 'primary-menu',
            'fallback_cb' => false,
          ]);
        ?>
      </nav>
    </div>
  </header>

  <main class="site-main">

