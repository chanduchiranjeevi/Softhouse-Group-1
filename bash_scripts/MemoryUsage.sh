#!/bin/bash
MEMORYFREE()
{
kbMemoryFree="$(sar -r 1 1 | awk '{print $2}' | awk 'FNR == 4 {print}')"
echo $kbMemoryFree
l=$(echo “($kbMemoryFree/1000000)” | bc)
m=$(echo “($kbMemoryFree%1000000)” | bc)
n=$(echo “($l + 0.$m)” | bc)
echo $l
echo $m
echo $n

}

MEMORYUSED()
{
kbMemoryUsed="$(sar -r 1 1 | awk '{print $3}' |awk 'FNR == 4 {print}')"
echo $kbMemoryUsed
a=$(echo “($kbMemoryUsed/1000000)” | bc)
b=$(echo “($kbMemoryUsed%1000000)” | bc)
c=$(echo “($a + 0.$b)” | bc)
echo $a
echo $b
echo $c
}

MEMORYFREE;
MEMORYUSED;

HOST=$(hostname)
kbMemoryFree=$(MEMORYFREE)
kbMemoryUsed=$(MEMORYUSED)
time=$(date +%s%3N)
echo $time
JSON="{\"hostName\":\"$HOST\", \"time\":$time, \"kbMemoryFree\":$n, \"kbMemoryUsed\":$c}”



curl -X POST -H 'Content-Type: application/json' --data-ascii "$JSON" http://$1:8080/api/Metrics/MemoryUsage

exit 0
