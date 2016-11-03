#!bin/bash
MEMORYFREE()
{
kbMemoryFree="$(sar -r 1 1 | awk '{print $2}' | awk 'FNR == 4 {print}')"
#percentageMemoryUsed="$(sar -r 1 1 | awk '{print $4}')"
echo $kbMemoryFree
}

MEMORYUSED()
{
kbMemoryUsed="$(sar -r 1 1 | awk '{print $3}' |awk 'FNR == 4 {print}')"
echo $kbMemoryUsed
}

MEMORYFREE;
MEMORYUSED;

HOST=$(hostname)
kbMemoryFree=$(MEMORYFREE)
#echo $kbMemoryFree
kbMemoryUsed=$(MEMORYUSED)
#echo $kbMemoryUsed
time=$(date +%s%3N)
echo $time
JSON="{\"hostName\":\"$HOST\", \"time\":$time, \"kbMemoryFree\":$kbMemoryFree, \"kbMemoryUsed\":$kbMemoryUsed}"



curl -X POST -H 'Content-Type: application/json' --data-ascii "$JSON" http://$1:8080/api/Metrics/MemoryUsage

exit 0
