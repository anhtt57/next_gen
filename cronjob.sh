#!/bin/sh
# yourBackupShellFileName.sh
Mdate="$(date +"%d-%m-%Y_%H:%M:%S")"
SQLFILE="/home/bak/bak.$Mdate.leegjn.sql"
mysqldump -uroot -pq1w2e3r4T% leegjn > $SQLFILE



#Mdate="$(date +"%d-%m-%Y_%H:%M:%S")"
#NAME="root"
#PASS="q1w2e3r4T%"
#DBNAME="leegjn"
#PATH="/home/bak"
#SQLFILE="$PATH/$DBNAME.$Mdate.sql"
#mysqldump -u$NAME -p$PASS $DBNAME > $SQLFILE


gzip $SQLFILE


#59 23 * * * find '.$path.' -mtime +7 -exec rm {} \