#!bin/bash
DISKAVAILABLE() {
kbDiskAvailable="$(df ~/ | awk '{print $4}' | awk 'FNR == 2 {print}')"
#percentageDiskUsed="$(df ~/ | awk '{print $5}')"
echo $kbDiskAvailable
#echo $percentageDiskUsed

}

DISKUSED()
{
kbDiskUsed="$(df ~/ | awk '{print $3}' | awk 'FNR == 2 {print}')"
echo $kbDiskUsed
}

DISKAVAILABLE;
DISKUSED;


HOST=$(hostname)
kbDiskAvailable=$(DISKAVAILABLE)
kbDiskUsed=$(DISKUSED)
time=$(date +%s%3N)
echo $time

JSON="{\"hostName\":\"$HOST\", \"time\":$time, \"kbDiskAvailable\":$kbDiskAvailable, \"kbDiskUsed\":$kbDiskUsed}"


curl -X POST -H 'Content-Type: application/json' --data-ascii "$JSON" http://$1:8080/api/Metrics/DiskUsage

exit 0
