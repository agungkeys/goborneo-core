<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale-1.0, maximum-scale=1.0" />
        
        <!-- CSS Assets -->
        <link rel="stylesheet" href="{{ asset('template/css/app.css') }}" />

        <!-- Javascript Assets -->
        <script src="{{ asset('template/js/app.js') }}" defer></script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
            rel="stylesheet"
        />
        <script>
            localStorage.getItem("_x_darkMode_on") === "true" &&
            document.documentElement.classList.add("dark");
        </script>

        <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
        <script src="{{ mix('/js/app.js') }}" defer></script>
        @inertiaHead
    </head>
    <body x-data class="is-header-blur" x-bind="$store.global.documentBody">
        <!-- App preloader-->
        <div class="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
            <div class="app-preloader-inner relative inline-block h-48 w-48"></div>
        </div>
        @inertia
    </body>
</html>