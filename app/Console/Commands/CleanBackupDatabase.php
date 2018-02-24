<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class CleanBackupDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:clean';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clean backup database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $path = env('BACKUP_PATH');
        if ($handle = opendir($path)) {
            while (false !== ($file = readdir($handle))) {
                if ((time()-filectime($path.$file)) > 10) {  
                    if (preg_match('/\.gz$/i', $file)) {
                        unlink($path.$file);
                    }
                }
            }
        }
    }
}
