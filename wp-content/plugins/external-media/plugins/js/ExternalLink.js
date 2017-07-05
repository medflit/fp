/**
 * @package WP_ExternalMedia
 * ExternalLink integration.
 */

jQuery(function ($) {

  $( 'body' ).on( 'click', 'a#em-external-link, button#em-external-link',  function( e ) {
    var $plugin = $( this ).data( 'plugin' );
    $( '#em-external-link-modal' ).show();
    $( '#el-insert' ).click(function( e ) {
      var url = $('.em-form #url').val();
      if ( url !== '' ) {
        var filename = url.replace(/^.*[\\\/]/, '');
        external_media_upload( $plugin, url, filename );
        $( '#em-external-link-modal' ).hide();
      }
    });
    $( '#el-cancel' ).click(function( e ) {
      $('.em-form #url').val('');
      $( '#em-external-link-modal' ).hide();
    });
    e.preventDefault();
  });

});
