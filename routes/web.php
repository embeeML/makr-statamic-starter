<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Makr Starter routes
|--------------------------------------------------------------------------
| Atom feed for the blog and an XML sitemap. Both render Antlers views
| without the HTML layout.
*/

Route::statamic('feed', 'feed', [
    'layout' => null,
    'content_type' => 'atom',
]);

Route::statamic('sitemap.xml', 'sitemap', [
    'layout' => null,
    'content_type' => 'xml',
]);
