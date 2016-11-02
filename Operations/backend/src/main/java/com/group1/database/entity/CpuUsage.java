package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.internal.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

import java.sql.Timestamp;

/**
 * Created by sriku on 2016-10-27.
 */

public class CpuUsage {

    @JsonProperty
    private Integer id;

    @JsonProperty
    @NotEmpty
    private String hostName;

    @JsonProperty
    private Timestamp time;

    @JsonProperty
    @NotNull
    private Float percentageCpu;

    public CpuUsage(){}

    public CpuUsage(Integer id, String hostName, Timestamp time, Float percentageCpu) {
        this.id = id;
        this.time = time;
        this.hostName = hostName;
        this.percentageCpu = percentageCpu;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getHostName() {
        return hostName;
    }

    public void setHostName(String hostName) {
        this.hostName = hostName;
    }

    public Timestamp getTime() {
        return time;
    }

    public void setTime(Timestamp time) {
        this.time = time;
    }

    public Float getPercentageCpu() {
        return percentageCpu;
    }

    public void setPercentageCpu(Float percentageCpu) {
        this.percentageCpu = percentageCpu;
    }
}
