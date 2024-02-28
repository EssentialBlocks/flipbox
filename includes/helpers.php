<?php

/**
 * Load google fonts.
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Flipbox_Helper
{

    private static $instance;

    /**
     * Registers the plugin.
     */
    public static function register()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    /**
     * The Constructor.
     */
    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'enqueues'));
    }

    /**
     * Load fonts.
     *
     * @access public
     */
    public function enqueues($hook)
    {
        /**
         * Only for Admin Add/Edit Pages
         */
        if ($hook == 'post-new.php' || $hook == 'post.php' || $hook == 'site-editor.php' || ($hook == 'themes.php' && !empty($_SERVER['QUERY_STRING']) && str_contains($_SERVER['QUERY_STRING'], 'gutenberg-edit-site'))) {
            $controls_dependencies = include_once EB_FLIPBOX_BLOCKS_ADMIN_PATH . '/dist/modules.asset.php';

            wp_register_script(
                "eb-flipbox-blocks-controls-util",
                EB_FLIPBOX_BLOCKS_ADMIN_URL . '/dist/modules.js',
                array_merge($controls_dependencies['dependencies']),
                $controls_dependencies['version'],
                true
            );

            wp_localize_script('eb-flipbox-blocks-controls-util', 'EssentialBlocksLocalize', array(
                'eb_wp_version' => (float) get_bloginfo('version'),
                'rest_rootURL' => get_rest_url(),
				'fontAwesome' => "true"
            ));

            if ($hook == 'post-new.php' || $hook == 'post.php') {
                wp_localize_script('eb-flipbox-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-post'
                ));
            } else if ($hook == 'site-editor.php') {
                wp_localize_script('eb-flipbox-blocks-controls-util', 'eb_conditional_localize', array(
                    'editor_type' => 'edit-site'
                ));
            }

			wp_register_style(
				'essential-blocks-iconpicker-css',
				EB_FLIPBOX_BLOCKS_ADMIN_URL . 'dist/style-modules.css',
				[],
				EB_FLIPBOX_BLOCKS_VERSION,
				'all'
			);

            wp_enqueue_style(
                'essential-blocks-editor-css',
                EB_FLIPBOX_BLOCKS_ADMIN_URL . '/dist/modules.css',
                array('essential-blocks-iconpicker-css','fontawesome-frontend-css'),
                $controls_dependencies['version'],
                'all'
            );
        }
    }
    public static function get_block_register_path($blockname, $blockPath)
    {
        if ((float) get_bloginfo('version') <= 5.6) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Flipbox_Helper::register();
