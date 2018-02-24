<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(
            \App\Repositories\Auth\LoginRepositoryInterface::class,
            \App\Repositories\Auth\LoginRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Version\VersionRepositoryInterface::class,
            \App\Repositories\Version\VersionRepository::class
        );
        $this->app->singleton(
            \App\Repositories\App\AppRepositoryInterface::class,
            \App\Repositories\App\AppRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Product\ProductRepositoryInterface::class,
            \App\Repositories\Product\ProductRepository::class
        );
        $this->app->singleton(
            \App\Repositories\Payment\PaymentRepositoryInterface::class,
            \App\Repositories\Payment\PaymentRepository::class
        );
    }
}
