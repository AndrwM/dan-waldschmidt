$(document).ready(function() {

  if ($('body.blog-single')[0]){

    $('.post-details').waypoint('sticky', {
      wrapper: '<div class="post-details-placeholder" />',
      stuckClass: 'fixed'
    });
    
  };

});