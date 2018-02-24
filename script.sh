crontab -l > mycron
echo "* * * * * php /path/to/artisan schedule:run >> /dev/null 2>&1
" >> mycron
crontab mycron