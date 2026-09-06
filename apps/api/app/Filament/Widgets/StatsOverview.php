<?php

namespace App\Filament\Widgets;

use App\Models\Article;
use App\Models\ContactMessage;
use App\Models\Profile;
use App\Models\Project;
use Filament\Widgets\StatsOverviewWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends StatsOverviewWidget
{
    protected static ?int $sort = 1;
    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        $projectCount = Project::count();
        $articleCount = Article::where('status', 'published')->count();
        $unreadMessages = ContactMessage::where('status', 'unread')->count();
        $status = Profile::value('availability_status') ?? 'available';

        return [
            Stat::make('Selected Projects', $projectCount)
                ->description('Architectural case studies')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('success'),

            Stat::make('Published Articles', $articleCount)
                ->description('Engineering notes & benchmarks')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),

            Stat::make('Unread Inquiries', $unreadMessages)
                ->description($unreadMessages > 0 ? 'Requires attention' : 'Inbox clear')
                ->descriptionIcon('heroicon-m-envelope')
                ->color($unreadMessages > 0 ? 'warning' : 'success'),

            Stat::make('Availability', ucfirst(str_replace('_', ' ', $status)))
                ->description('Live engagement status')
                ->descriptionIcon('heroicon-m-sparkles')
                ->color('success'),
        ];
    }
}
