#!/bin/bash
DISKAVAILABLE() {
kbDiskAvailable="$(df ~/ | awk '{print $4}' | awk 'FNR == 2 {print}')"
echo $kbDiskAvailable
l=$(echo “($kbDiskAvailable/1000000)” | bc)
m=$(echo “($kbDiskAvailable%1000000)” | bc)
n=$(echo “($l + 0.$m)” | bc)
echo $l
echo $m
echo $n
}

DISKUSED()
{
kbDiskUsed="$(df ~/ | awk '{print $3}' | awk 'FNR == 2 {print}')"
echo $kbDiskUsed
a=$(echo “($kbDiskUsed/1000000)” | bc)
b=$(echo “($kbDiskUsed%1000000)” | bc)
c=$(echo “($a + 0.$b)” | bc)
echo $a
echo $b
echo $c

}

DISKAVAILABLE;
DISKUSED;


HOST=$(hostname)
kbDiskAvailable=$n
kbDiskUsed=$c
time=$(date +%s%3N)
echo $time

JSON="{\"hostName\":\"$HOST\", \"time\":$time, \"kbDiskAvailable\":$n, \"kbDiskUsed\":$c}”


curl -X POST -H 'Content-Type: application/json' --data-ascii "$JSON" http://$1:8080/api/Metrics/DiskUsage

exit 0
