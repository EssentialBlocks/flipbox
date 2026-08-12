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
        $query_string = isset($_SERVER['QUERY_STRING']) ? sanitize_text_field(wp_unslash($_SERVER['QUERY_STRING'])) : '';

        // strpos() instead of str_contains(): str_contains() is PHP 8.0+ and fatals below it.
        if ($hook == 'post-new.php' || $hook == 'post.php' || $hook == 'site-editor.php' || ($hook == 'themes.php' && !empty($query_string) && strpos($query_string, 'gutenberg-edit-site') !== false)) {
            $controls_asset_path = EB_FLIPBOX_BLOCKS_ADMIN_PATH . '/dist/modules.asset.php';
            if (!file_exists($controls_asset_path)) {
                return;
            }

            // `include`, not `include_once`: include_once returns bool true rather than the
            // array when the file has already been included, which then fatals on PHP 8
            // at array_merge(null).
            $controls_dependencies = include $controls_asset_path;
            if (!is_array($controls_dependencies) || !isset($controls_dependencies['dependencies'])) {
                return;
            }

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
        // version_compare(), never a float cast: (float) "5.10" is 5.1 and (float) "7.0.3"
        // silently drops the patch, so any x.10+ release would take the wrong branch.
        // '< 5.7' is the exact equivalent of the previous '<= 5.6' float test.
        if (version_compare(get_bloginfo('version'), '5.7', '<')) {
            return $blockname;
        } else {
            return $blockPath;
        }
    }
}
Flipbox_Helper::register();
