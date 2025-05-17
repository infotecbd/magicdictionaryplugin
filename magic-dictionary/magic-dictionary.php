<?php
/*
Plugin Name: Magic Dictionary
Description: Show word meaning on magic using Magic Dictionary
Version: 1.0
Author: Mamun
Author URI: https://author.example.com
License: GPL v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Update URI: https://infotecbd.com
*/

add_action('wp_enqueue_scripts', 'magic_dictionary_enqueue_assets');

function magic_dictionary_enqueue_assets() {


    wp_enqueue_style(
        'magic-dictionary-css',
        plugin_dir_url(__FILE__) . 'assets/css/magic-dictionary.css',
        array(),
        '1.1'
    );

    wp_enqueue_script(
        'magic-dictionary-js',
        plugin_dir_url(__FILE__) . 'assets/js/magic-dictionary.js',
        array(),
        '1.1',
        true
    );
}