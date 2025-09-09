<?php

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Theme setup
add_action('after_setup_theme', function () {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('menus');

    register_nav_menus([
        'primary' => __('Primary Menu', 'git-exercise'),
        'footer' => __('Footer Menu', 'git-exercise'),
    ]);
});

// Enqueue assets
add_action('wp_enqueue_scripts', function () {
    $theme_version = wp_get_theme()->get('Version');

    // Main stylesheet
    wp_enqueue_style(
        'git-exercise-style',
        get_stylesheet_uri(),
        [],
        $theme_version
    );

    // Example: enqueue built CSS/JS from a build folder if later added
    // wp_enqueue_style('git-exercise-app', get_template_directory_uri() . '/build/style.css', [], $theme_version);
    // wp_enqueue_script('git-exercise-app', get_template_directory_uri() . '/build/app.js', [], $theme_version, true);
});

// Helper: get field safely (works even if ACF not installed)
function gx_get_field($key, $default = '') {
    if (function_exists('get_field')) {
        $value = get_field($key, 'option');
        return $value !== null && $value !== false && $value !== '' ? $value : $default;
    }
    return $default;
}

// Register ACF Options page if ACF exists
add_action('init', function () {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' => __('Site Settings', 'git-exercise'),
            'menu_title' => __('Site Settings', 'git-exercise'),
            'menu_slug'  => 'gx-site-settings',
            'capability' => 'manage_options',
            'redirect'   => false,
            'position'   => 61,
        ]);
    }
});


