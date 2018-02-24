<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use DB;

class BackupDatabase extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'database:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup database';

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
        $user       = env('DB_USERNAME');
        $pass       = env('DB_PASSWORD');
        $db_name    = env('DB_DATABASE');
        $path       = env('BACKUP_PATH');

        // if(!file_exists($path)){
        //     mkdir($path, 0777, true);
        // }
        $filename = $db_name . '_' . time() . '.sql';
        $source = $path . $filename;
        if($pass){
            exec('mysqldump -u'.$user.' -p'.$pass.' '.$db_name.' > '.$source);
        }else{
            exec('mysqldump -u'.$user.' '.$db_name.' > '.$source);
        }
        
        if(file_exists($source)){
            exec('gzip ' . $source);
        }else{
            //log
        }
        // DB::table('users')->insert(['user_name'=>'Test']);
        
    }
}
