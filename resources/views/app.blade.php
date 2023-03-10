<!DOCTYPE html>
<html lang="id">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {!! \App\Meta::render() !!}

        <meta http-equiv="content-type" content="text/html;charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>

        <meta name="referrer" content="no-referrer-when-downgrade"/>
        <meta name="robots" content="index, follow"/>
        <meta name="google-site-verification" content=""/>
        <meta name="facebook-domain-verification" content=""/>
        <meta name="language" content="id"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no"/>
        <meta name="theme-color" content="#70CBCF"/>

        <link rel="canonical" href="https://www.goborneo.id"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://www.goborneo.id/public/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://www.goborneo.id/public/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://www.goborneo.id/public/favicon-16x16.png"/>
        <link rel="shortcut icon" type="image/x-icon" sizes="16x16" href="https://www.goborneo.id/public/favicon.ico?v=1"/>

        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
