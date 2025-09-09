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

// Define ACF fields programmatically (loaded when ACF is active)
add_action('acf/init', function () {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key' => 'group_gx_homepage_content',
        'title' => __('Homepage Content', 'git-exercise'),
        'fields' => [
            // Hero
            [
                'key' => 'field_gx_hero_title',
                'label' => __('Hero Title', 'git-exercise'),
                'name' => 'hero_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_hero_subtitle',
                'label' => __('Hero Subtitle', 'git-exercise'),
                'name' => 'hero_subtitle',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_hero_cta_text',
                'label' => __('Hero CTA Text', 'git-exercise'),
                'name' => 'hero_cta_text',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_hero_background',
                'label' => __('Hero Background', 'git-exercise'),
                'name' => 'hero_background',
                'type' => 'image',
                'return_format' => 'url',
                'preview_size' => 'medium',
                'library' => 'all',
            ],

            // Advantages
            [
                'key' => 'field_gx_advantages_title',
                'label' => __('Advantages Title', 'git-exercise'),
                'name' => 'advantages_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_advantages_items',
                'label' => __('Advantages Items', 'git-exercise'),
                'name' => 'advantages_items',
                'type' => 'repeater',
                'layout' => 'row',
                'button_label' => __('Add Advantage', 'git-exercise'),
                'sub_fields' => [
                    [
                        'key' => 'field_gx_adv_item_title',
                        'label' => __('Title', 'git-exercise'),
                        'name' => 'title',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_adv_item_description',
                        'label' => __('Description', 'git-exercise'),
                        'name' => 'description',
                        'type' => 'text',
                    ],
                ],
            ],

            // Portfolio
            [
                'key' => 'field_gx_portfolio_title',
                'label' => __('Portfolio Title', 'git-exercise'),
                'name' => 'portfolio_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_portfolio_items',
                'label' => __('Portfolio Items', 'git-exercise'),
                'name' => 'portfolio_items',
                'type' => 'repeater',
                'layout' => 'row',
                'button_label' => __('Add Project', 'git-exercise'),
                'sub_fields' => [
                    [
                        'key' => 'field_gx_port_item_image',
                        'label' => __('Image', 'git-exercise'),
                        'name' => 'image',
                        'type' => 'image',
                        'return_format' => 'url',
                        'preview_size' => 'medium',
                        'library' => 'all',
                    ],
                    [
                        'key' => 'field_gx_port_item_title',
                        'label' => __('Title', 'git-exercise'),
                        'name' => 'title',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_port_item_description',
                        'label' => __('Description', 'git-exercise'),
                        'name' => 'description',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_port_item_url',
                        'label' => __('URL', 'git-exercise'),
                        'name' => 'url',
                        'type' => 'url',
                    ],
                ],
            ],

            // Testimonials
            [
                'key' => 'field_gx_testimonials_title',
                'label' => __('Testimonials Title', 'git-exercise'),
                'name' => 'testimonials_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_testimonials_items',
                'label' => __('Testimonials Items', 'git-exercise'),
                'name' => 'testimonials_items',
                'type' => 'repeater',
                'layout' => 'row',
                'button_label' => __('Add Testimonial', 'git-exercise'),
                'sub_fields' => [
                    [
                        'key' => 'field_gx_test_item_quote',
                        'label' => __('Quote', 'git-exercise'),
                        'name' => 'quote',
                        'type' => 'textarea',
                        'rows' => 3,
                    ],
                    [
                        'key' => 'field_gx_test_item_author',
                        'label' => __('Author', 'git-exercise'),
                        'name' => 'author',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_test_item_role',
                        'label' => __('Role', 'git-exercise'),
                        'name' => 'role',
                        'type' => 'text',
                    ],
                ],
            ],

            // Pricing
            [
                'key' => 'field_gx_pricing_title',
                'label' => __('Pricing Title', 'git-exercise'),
                'name' => 'pricing_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_pricing_plans',
                'label' => __('Pricing Plans', 'git-exercise'),
                'name' => 'pricing_plans',
                'type' => 'repeater',
                'layout' => 'row',
                'button_label' => __('Add Plan', 'git-exercise'),
                'sub_fields' => [
                    [
                        'key' => 'field_gx_plan_name',
                        'label' => __('Name', 'git-exercise'),
                        'name' => 'name',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_plan_price',
                        'label' => __('Price', 'git-exercise'),
                        'name' => 'price',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_plan_features',
                        'label' => __('Features', 'git-exercise'),
                        'name' => 'features',
                        'type' => 'repeater',
                        'layout' => 'table',
                        'button_label' => __('Add Feature', 'git-exercise'),
                        'sub_fields' => [
                            [
                                'key' => 'field_gx_plan_feature_item',
                                'label' => __('Feature', 'git-exercise'),
                                'name' => 'feature',
                                'type' => 'text',
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_gx_plan_cta_text',
                        'label' => __('CTA Text', 'git-exercise'),
                        'name' => 'cta_text',
                        'type' => 'text',
                    ],
                ],
            ],

            // Process
            [
                'key' => 'field_gx_process_title',
                'label' => __('Process Title', 'git-exercise'),
                'name' => 'process_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_process_steps',
                'label' => __('Process Steps', 'git-exercise'),
                'name' => 'process_steps',
                'type' => 'repeater',
                'layout' => 'row',
                'button_label' => __('Add Step', 'git-exercise'),
                'sub_fields' => [
                    [
                        'key' => 'field_gx_step_title',
                        'label' => __('Title', 'git-exercise'),
                        'name' => 'title',
                        'type' => 'text',
                    ],
                    [
                        'key' => 'field_gx_step_description',
                        'label' => __('Description', 'git-exercise'),
                        'name' => 'description',
                        'type' => 'text',
                    ],
                ],
            ],

            // Final CTA
            [
                'key' => 'field_gx_final_cta_title',
                'label' => __('Final CTA Title', 'git-exercise'),
                'name' => 'final_cta_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_final_cta_subtitle',
                'label' => __('Final CTA Subtitle', 'git-exercise'),
                'name' => 'final_cta_subtitle',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_final_cta_button',
                'label' => __('Final CTA Button', 'git-exercise'),
                'name' => 'final_cta_button',
                'type' => 'text',
            ],

            // Lite Package
            [
                'key' => 'field_gx_lite_title',
                'label' => __('Lite Title', 'git-exercise'),
                'name' => 'lite_title',
                'type' => 'text',
            ],
            [
                'key' => 'field_gx_lite_description',
                'label' => __('Lite Description', 'git-exercise'),
                'name' => 'lite_description',
                'type' => 'textarea',
                'rows' => 3,
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'gx-site-settings',
                ],
            ],
        ],
        'position' => 'acf_after_title',
        'style' => 'seamless',
        'active' => true,
        'description' => __('Content settings for the homepage sections.', 'git-exercise'),
    ]);
});

// Auto-setup on theme activation: create Home page, set as front page, create menus
add_action('after_switch_theme', function () {
    // Create "Главная" page if not exists
    $home_page = get_page_by_path('glavnaya');
    if (!$home_page) {
        $home_page_id = wp_insert_post([
            'post_title'   => 'Главная',
            'post_name'    => 'glavnaya',
            'post_status'  => 'publish',
            'post_type'    => 'page',
            'post_content' => '',
        ]);
        $home_page = get_post($home_page_id);
    }

    if ($home_page) {
        // Set static front page
        update_option('show_on_front', 'page');
        update_option('page_on_front', $home_page->ID);
    }

    // Ensure menus exist and assign to locations
    $locations = get_theme_mod('nav_menu_locations');
    if (!is_array($locations)) {
        $locations = [];
    }

    // Primary menu
    $primary_menu = wp_get_nav_menu_object('Primary');
    if (!$primary_menu) {
        $primary_menu_id = wp_create_nav_menu('Primary');
        // Add Home link
        if (!is_wp_error($primary_menu_id)) {
            wp_update_nav_menu_item($primary_menu_id, 0, [
                'menu-item-title'  => __('Home', 'git-exercise'),
                'menu-item-url'    => home_url('/'),
                'menu-item-status' => 'publish',
            ]);
        }
        $primary_menu = wp_get_nav_menu_object($primary_menu_id);
    }

    // Footer menu
    $footer_menu = wp_get_nav_menu_object('Footer');
    if (!$footer_menu) {
        $footer_menu_id = wp_create_nav_menu('Footer');
        if (!is_wp_error($footer_menu_id)) {
            wp_update_nav_menu_item($footer_menu_id, 0, [
                'menu-item-title'  => __('Contact', 'git-exercise'),
                'menu-item-url'    => '#contact',
                'menu-item-status' => 'publish',
            ]);
        }
        $footer_menu = wp_get_nav_menu_object($footer_menu_id);
    }

    // Assign
    if ($primary_menu && isset($primary_menu->term_id)) {
        $locations['primary'] = (int) $primary_menu->term_id;
    }
    if ($footer_menu && isset($footer_menu->term_id)) {
        $locations['footer'] = (int) $footer_menu->term_id;
    }
    set_theme_mod('nav_menu_locations', $locations);
});


