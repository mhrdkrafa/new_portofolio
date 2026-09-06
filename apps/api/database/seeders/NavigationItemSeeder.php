<?php

namespace Database\Seeders;

use App\Models\NavigationItem;
use Illuminate\Database\Seeder;

class NavigationItemSeeder extends Seeder
{
    public function run(): void
    {
        $items = [
            [
                'label' => 'Projects',
                'url' => '#projects',
                'route_name' => 'projects',
                'target' => '_self',
                'sort_order' => 1,
                'is_visible' => true,
            ],
            [
                'label' => 'Experience',
                'url' => '#experience',
                'route_name' => 'experience',
                'target' => '_self',
                'sort_order' => 2,
                'is_visible' => true,
            ],
            [
                'label' => 'Skills',
                'url' => '#skills',
                'route_name' => 'skills',
                'target' => '_self',
                'sort_order' => 3,
                'is_visible' => true,
            ],
            [
                'label' => 'Articles',
                'url' => '/articles',
                'route_name' => 'articles.index',
                'target' => '_self',
                'sort_order' => 4,
                'is_visible' => true,
            ],
            [
                'label' => 'Contact',
                'url' => '#contact',
                'route_name' => 'contact',
                'target' => '_self',
                'sort_order' => 5,
                'is_visible' => true,
            ],
        ];

        foreach ($items as $item) {
            NavigationItem::updateOrCreate(
                ['label' => $item['label']],
                $item
            );
        }
    }
}
