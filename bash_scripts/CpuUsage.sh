#!/bin/bash
CPU()
{
percentageCpu="$( sar -u 1 1 | awk '{ print (100-$8) }' | awk 'FNR == 4 {print}' )"
#awk 'FNR == 4 {print}')"
#percentageSystem="$(sar -u 1 1 | awk '{print $5}')" 
echo $percentageCpu
#echo $percentageSystem
}

CPU;

HOST=$(hostname)
time=$(date +%s%3N)
echo $time
percentageCpu=$(CPU)

JSON="{\"hostName\":\"$HOST\", \"time\":$time, \"percentageCpu\":$percentageCpu}"

curl -X POST -H 'Content-Type: application/json' --data-ascii "$JSON" http://$1:8080/api/Metrics/CpuUsage

exit 0
