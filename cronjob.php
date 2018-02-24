<?php 
	// $user 	= $argv[1];
	// $pass 	= $argv[2];
	// $dbName = $argv[3];
	// $path 	= $argv[4];
	// // exec('echo -e "`crontab -l`\n0 * * * * USER='.$user.' PASS='.$pass.' DBNAME='.$dbName.'PATH='.$path.' cronjob.sh" | crontab -');
	// exec('echo -e "`crontab -l`\n59 23 * * * find '.$path.' -mtime +7 -exec rm {} \" | crontab -');
	$user = 'root';
	$pass = 'q1w2e3r4T%';
	$db_name = 'leegjn';
	$path = '/home/bak/';
	set_time_limit(0);
	while (true) {
		if(!file_exists($path)){
			mkdir($path, 0777, true);
		}
		$filename = $db_name . '_' . time() . '.sql';
		$source = $path . $filename;
		exec('mysqldump -u'.$user.' -p'.$pass.' '.$db_name.' > '.$source);
		if(file_exists($source)){
			exec('gzip ' . $source);
		}else{
			//log
		}
	  	if ($handle = opendir($path)) {
	     	while (false !== ($file = readdir($handle))) {
		        if ((time()-filectime($path.$file)) > 10) {  
		        	if (preg_match('/\.gz$/i', $file)) {
			            unlink($path.$file);
			        }
		        }
		    }
	   	}
		// exec('find '.$path.' -mtime +7 -exec rm {}\\');
		sleep(10);
		
	}

?>