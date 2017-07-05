<?php
/**
 * @package WP_ExternalMedia
 */

namespace WP_ExternalMedia;

class WP_ExternalUtility {

  /**
   * Load plugins.
   */
  public function load_plugins() {
    $plugins = $this->supported_plugins();
    foreach ( $plugins as $plugin => $info ) {
      $plugin_file = sprintf( "%s/plugins/%s", WP_ExternalMedia_PATH, $plugin . '.php' );
      if ( file_exists( $plugin_file ) ) {
        require_once ( $plugin_file );
      }
      else {
        // If plugin declared but the file doesn't exists.
        unset( $plugins[$plugin] );
      }
    }
    // Sort plugins by weight.
    uasort( $plugins, function ( $a, $b ) {
      $a_weight = ( is_array( $a ) && isset( $a['weight'] ) ) ? $a['weight'] : 0;
      $b_weight = ( is_array( $b ) && isset( $b['weight'] ) ) ? $b['weight'] : 0;
      if ( $a_weight == $b_weight ) {
        return 0;
      }
      return ( $a_weight < $b_weight ) ? -1 : 1;
    } );
    return $plugins;
  }

  /**
   * Load plugin.
   */
  public function load_plugin( $plugin = '' ) {
    $plugins = $this->supported_plugins();
    if ( !empty( $plugins[$plugin] ) ) {
      $plugin_file = sprintf( "%s/plugins/%s", WP_ExternalMedia_PATH, $plugin . '.php' );
      if ( file_exists( $plugin_file ) ) {
        require_once ( $plugin_file );
        return $plugins[$plugin];
      }
    }
  }

  /**
   * Call plugin methods.
   */
  function _call_class_method( $class, $method, $args = array() ) {
    $reflection = new \ReflectionClass( $class );
    $method = $reflection->getMethod( $method );
    $pluginClass = new $class();
    return $method->invokeArgs( $pluginClass, $args );
  }

}
