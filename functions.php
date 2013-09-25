<?php

// Setup My Child Theme's textdomain.
// @link http://codex.wordpress.org/Child_Themes#Internationalization
function my_child_theme_setup() {
  load_child_theme_textdomain( 'youngtargets', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'my_child_theme_setup' );

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'na_newsletter', array(
      'labels' => array(
        'name' => __( 'Newsletter' ),
        'singular_name' => __( 'Newsletter' )
      ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array(
        'slug' => 'newsletter',
      ),
      'capability_type' => 'post',
      'hierarchical' => false,
      'supports' => array(
        'title',
        'editor',
        'excerpt',
        'trackbacks',
        'custom-fields',
        'comments',
        'revisions',
        'thumbnail',
        'author',
        'page-attributes',
      )
    )
  );
  // @link http://nooshu.com/page-not-found-with-custom-post-types
  // @link http://codex.wordpress.org/Function_Reference/register_post_type#Flushing_Rewrite_on_Activation
  flush_rewrite_rules( false );
}
//flush_rewrite_rules();

/** Enqueues SCRIPTS and STYLES for front-end.
 */
function child_scripts_styles() {

// Load other theme scripts here
wp_enqueue_script('child-plugins',    get_stylesheet_directory_uri() . '/js/plugins.js',  array('jquery'), null, true );
wp_enqueue_script('child-main',       get_stylesheet_directory_uri() . '/js/main.js',     array('jquery'), null, true );
  
}
add_action( 'wp_enqueue_scripts', 'child_scripts_styles' );





?>