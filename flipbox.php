<?php

/**
 * Plugin Name:     Flipbox
 * Plugin URI:         https://essential-blocks.com
 * Description:     Deliver your content beautifully to grab attention with an animated Flipbox block.
 * Version:         1.3.1
 * Author:          WPDeveloper
 * Author URI:         https://wpdeveloper.net
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     flipbox
 *
 * @package         flipbox
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/includes/helpers.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_flipbox_block_init() {
    define( 'EB_FLIPBOX_BLOCKS_VERSION', "1.3.1" );
    define( 'EB_FLIPBOX_BLOCKS_ADMIN_URL', plugin_dir_url( __FILE__ ) );
    define( 'EB_FLIPBOX_BLOCKS_ADMIN_PATH', dirname( __FILE__ ) );

    $script_asset_path = EB_FLIPBOX_BLOCKS_ADMIN_PATH . "/dist/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
        throw new Error(
            'You need to run `npm start` or `npm run build` for the "flipbox/flipbox-block" block first.'
        );
    }
    $index_js         = EB_FLIPBOX_BLOCKS_ADMIN_URL . 'dist/index.js';
    $script_asset     = require $script_asset_path;
    $all_dependencies = array_merge( $script_asset['dependencies'], [
        'wp-blocks',
        'wp-i18n',
        'wp-element',
        'wp-block-editor',
        'eb-flipbox-blocks-controls-util',
        'essential-blocks-eb-animation'
    ] );

    wp_register_script(
        'eb-flipbox-block-editor-js',
        $index_js,
        $all_dependencies,
        $script_asset['version']
    );

    $load_animation_js = EB_FLIPBOX_BLOCKS_ADMIN_URL . 'assets/js/eb-animation-load.js';
    wp_register_script(
        'essential-blocks-eb-animation',
        $load_animation_js,
        [],
        EB_FLIPBOX_BLOCKS_VERSION,
        true
    );

	$frontend_js = EB_FLIPBOX_BLOCKS_ADMIN_URL . 'dist/frontend/index.js';
    wp_register_script(
        'essential-blocks-frontend-js',
        $frontend_js,
        ['essential-blocks-eb-animation'],
        EB_FLIPBOX_BLOCKS_VERSION,
        true
    );

    $animate_css = EB_FLIPBOX_BLOCKS_ADMIN_URL . 'assets/css/animate.min.css';
    wp_register_style(
        'essential-blocks-animation',
        $animate_css,
        [],
        EB_FLIPBOX_BLOCKS_VERSION
    );

    $fontpicker_theme = 'assets/css/fonticonpicker.base-theme.react.css';
    wp_register_style(
        'fontpicker-default-theme',
        plugins_url( $fontpicker_theme, __FILE__ ),
        []
    );

    $fontpicker_material_theme = 'assets/css/fonticonpicker.material-theme.react.css';
    wp_register_style(
        'fontpicker-matetial-theme',
        plugins_url( $fontpicker_material_theme, __FILE__ ),
        []
    );

    $fontawesome_css = 'assets/css/fontawesome/css/all.min.css';
    wp_register_style(
        'fontawesome-frontend-css',
        plugins_url( $fontawesome_css, __FILE__ ),
        []
    );

    $style_css = EB_FLIPBOX_BLOCKS_ADMIN_URL . 'dist/style.css';
    wp_register_style(
        'eb-flipbox-block-frontend-style',
        $style_css,
        ['fontawesome-frontend-css', 'essential-blocks-animation'],
        filemtime( EB_FLIPBOX_BLOCKS_ADMIN_PATH . '/dist/style.css' )
    );

    if ( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/flipbox' ) ) {
        register_block_type(
            Flipbox_Helper::get_block_register_path( 'flipbox/flipbox-block', EB_FLIPBOX_BLOCKS_ADMIN_PATH ),
            [
                'editor_script'   => 'eb-flipbox-block-editor-js',
                'style'           => 'eb-flipbox-block-frontend-style',
                'render_callback' => function ( $attributes, $content ) {
                    if ( ! is_admin() ) {
						wp_enqueue_script( 'essential-blocks-frontend-js' );
                    }
                    return $content;
                }
            ]
        );
    }
}
add_action( 'init', 'create_block_flipbox_block_init', 99 );
