<?php

require_once( 'library/posts-grids.php' );
require_once( 'library/slick-slider.php' );
require_once( 'library/image-grid.php' );
require_once( 'library/team.php' );
require_once( 'library/child-pages.php' );


// Custom widget area.

if ( function_exists('register_sidebar') )
  register_sidebar(array(
    'name' =>  __( 'Top Widget Area'),
    'id' => 'topbar-widget-area',
    'description' => __( 'Widget area for search and languge switcher' ),
   'before_widget' => '<div id="%1$s" class="top-widget-container %2$s">',
    'after_widget' => "</div>",
    'before_title' => '<h3>',
    'after_title' => '</h3>',
  )
);



/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
add_image_size( 'home-grid-image', 370, 250, true );
add_image_size( 'team-grid', 400, 400, true );

add_filter( 'image_size_names_choose', 'child_custom_image_sizes' );

function child_custom_image_sizes( $sizes ) {
    return array_merge( $sizes, array(
        'home-grid-image' => __('370px by 250px'),
        'team-grid' => __('400px by 400px'),
    ) );
}


function child_scripts_and_styles() {

  global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way

		//where parent-style is the same $handle used in the parent theme when it registers it's stylesheet.
    	$parent_style =  'twentysixteen-style' ; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.

    	wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
		if ( is_rtl() ) {
			wp_enqueue_style( $parent_style.'_rtl', get_template_directory_uri() . '/rtl.css' );
		}
			
		// register main stylesheet
		wp_register_style( 'child-style', get_stylesheet_directory_uri() . '/library/css/style.css', array( $parent_style), wp_get_theme()->get('Version') );
		wp_enqueue_style( 'child-style' );
		
		wp_enqueue_style( 'accessibility-style', get_stylesheet_directory_uri() . '/library/css/accessible.css', array('child-style'),  '1.0.0', 'all' );
	    wp_enqueue_script( 'accessibility-script', get_stylesheet_directory_uri() . '/library/js/accessible.js', array(), '1.0.0', true );
	
		
		// ie-only style sheet
		//wp_register_style( 'bones-ie-only', get_stylesheet_directory_uri() . '/library/css/ie.css', array(), '' );
		
		wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'); 
		
	if (!is_admin()) {
				
		wp_register_script( 'child-js', get_stylesheet_directory_uri() . '/library/js/scripts.js', array( 'jquery' ), '', true );
		wp_enqueue_script( 'slickjs', get_stylesheet_directory_uri() . '/library/js/slick.min.js', array( 'jquery' ), '1.6.0', true );
		wp_enqueue_script( 'slickjs-init', get_stylesheet_directory_uri(). '/library/js/slick-init.js', array( 'slickjs' ), '1.6.0', true );
		wp_enqueue_style( 'slickcss', get_stylesheet_directory_uri() . '/library/css/slick.css', '1.6.0', 'all');
 		wp_enqueue_style( 'slickcsstheme', get_stylesheet_directory_uri(). '/library/css/slick-theme.css', '1.6.0', 'all');
		
		//	wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'child-js' );
		
	}
}




function child_starter(){
	//load translations:	
	load_child_theme_textdomain( 'child-kit', get_stylesheet_directory() . '/library/languages' );
	//load require:
	
	
}


// let's get this party started
add_action( 'after_setup_theme', 'child_starter' );

add_action( 'wp_enqueue_scripts', 'child_scripts_and_styles') //, 999 );


?>