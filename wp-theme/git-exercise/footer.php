  </main>
  <footer class="site-footer">
    <div class="container">
      <div>
        <span>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></span>
      </div>
      <nav class="site-footer-nav" aria-label="Footer">
        <?php
          wp_nav_menu([
            'theme_location' => 'footer',
            'container' => false,
            'menu_class' => 'primary-menu',
            'fallback_cb' => false,
          ]);
        ?>
      </nav>
    </div>
  </footer>
  <?php wp_footer(); ?>
</body>
</html>


