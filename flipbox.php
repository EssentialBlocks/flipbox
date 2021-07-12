<?php

/**
 * Plugin Name:     Flipbox
 * Plugin URI: 		https://essential-blocks.com
 * Description:     Deliver your content beautifully to grab attention with an animated Flipbox block.
 * Version:         1.1.0
 * Author:          WPDeveloper
 * Author URI: 		https://wpdeveloper.net
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
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_flipbox_block_init()
{
	$dir = dirname(__FILE__);

	$script_asset_path = "$dir/build/index.asset.php";
	if (!file_exists($script_asset_path)) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "flipbox/flipbox-block" block first.'
		);
	}
	$index_js = 'build/index.js';
	wp_register_script(
		'create-block-flipbox-block-editor',
		plugins_url($index_js, __FILE__),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
		),
		filemtime("$dir/$index_js")
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-flipbox-block-editor',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-flipbox-block',
		plugins_url($style_css, __FILE__),
		array(),
		filemtime("$dir/$style_css")
	);

	$fontpicker_theme = 'assets/css/fonticonpicker.base-theme.react.css';
	wp_enqueue_style(
		'fontpicker-default-theme',
		plugins_url($fontpicker_theme, __FILE__),
		array()
	);

	$fontpicker_material_theme = 'assets/css/fonticonpicker.material-theme.react.css';
	wp_enqueue_style(
		'fontpicker-matetial-theme',
		plugins_url($fontpicker_material_theme, __FILE__),
		array()
	);

	$fontawesome_css = 'assets/css/font-awesome5.css';
	wp_enqueue_style(
		'fontawesome-frontend-css',
		plugins_url($fontawesome_css, __FILE__),
		array()
	);

	if (!WP_Block_Type_Registry::get_instance()->is_registered('essential-blocks/flipbox')) {
		register_block_type('flipbox/flipbox-block', array(
			'editor_script' => 'create-block-flipbox-block-editor',
			'editor_style' => 'create-block-flipbox-block-editor',
			'style'         => 'create-block-flipbox-block',
			'fontpicker_theme' => 'fontpicker-default-theme',
			'fontpicker_material_theme' => 'fontpicker-material-theme',
			'fontawesome_css' => 'fontawesome-frontend-css',
		));
	}
}
add_action('init', 'create_block_flipbox_block_init');
