<?php

namespace App;

class Meta
{
    protected static $meta = [];
    protected static $title = "GoBorneo - Beautiful Kalimantan";
    protected static $image = "https://res.cloudinary.com/do5w0oe22/image/upload/v1674557601/images/favicon_kv0qm4.png";
    protected static $icon = "https://res.cloudinary.com/do5w0oe22/image/upload/v1674557601/images/favicon_kv0qm4.png";

    public static function addMeta($name, $content)
    {
        static::$meta[$name] = $content;
    }

    public static function addMetaTitle($content)
    {
        static::$title = $content;
    }

    public static function render()
    {
        $html = '';
        $html .= '<title>'.static::$title.'</title>'.PHP_EOL;
        $html .= '<link rel="icon" type="image/png" href="'.static::$icon.'" />'.PHP_EOL;
        
        foreach (static::$meta as $name => $content) {
            $html .= '<meta name="'.$name.'" content="'.$content.'" />'.PHP_EOL;
        }
        return $html;
    }
}