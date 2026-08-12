<?php

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

class Flipbox_Post_Meta
{
    public function __construct()
    {
        // `init` is an action, not a filter. add_filter() happened to work because both
        // share one callback registry, but the callback returns null and would blank the
        // value for anything that ever treats `init` as a filter.
        add_action('init', array($this, 'register_meta'));
    }

    /**
     * Register meta
     */
    public function register_meta()
    {
        register_meta(
            'post',
            '_eb_attr',
            array(
                'show_in_rest' => true,
                'single' => true,
                'auth_callback' => [$this, 'auth_callback'],
            )
        );
    }

    /**
     * Determine if the current user can edit posts
     *
     * @return bool True when can edit posts, else false.
     */
    public function auth_callback()
    {
        return current_user_can('edit_posts');
    }
}

new Flipbox_Post_Meta();
