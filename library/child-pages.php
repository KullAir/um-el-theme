<?php

function wpb_list_child_pages() {
global $post;

 	$mypages = get_pages( array( 'child_of' => $post->ID, 'sort_column' => 'post_date', 'sort_order' => 'desc' ) );  	
 	
	$string="<ul class='subpages'>";
	
 	foreach( $mypages as $page )
 	{
		$content = $page->post_content;
		if ( ! $content ) // Check for empty page 
			continue; 
		$content =  strip_tags(apply_filters( 'the_content', $content )); 
		
		if(strlen($content)>100)
			$content  = substr($content  , 0, strpos($content ," ",100));
		
		
			
		$string= $string.' <li class="post-in-list"><h2 class="entry-title"><a href="'.get_page_link( $page->ID ).'">'.$page->post_title.'</a></h2>
			<div class="entry">'.$content.'</div></li>';
	}
$string= $string.'</ul>';
return $string;

}

add_shortcode('wpb_childpages', 'wpb_list_child_pages');

?>