<?php

/******** Team Member Post ************/

// Creates Custom Post Type
function team_members_init() {
    $args = array(
      'label' => 'Team Members',
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'page',
        'hierarchical' => false,
        'rewrite' => array('slug' => 'scholl-staff'),
        'query_var' => true,
        'menu_icon' => 'dashicons-admin-users',
        'supports' => array(
            'title',
            'editor',
            'excerpt',
            'custom-fields',
            'comments',
            'revisions',
            'thumbnail',
            'author',
            'page-attributes',)
        );
    register_post_type( 'team-members', $args );
}
add_action( 'init', 'team_members_init' );

?>