package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

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
    @NotEmpty
    private String percentageCpu;

    public CpuUsage(){}

    public CpuUsage(Integer id, String hostName, String percentageCpu) {
        this.id = id;
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

    public String getPercentageCpu() {
        return percentageCpu;
    }

    public void setPercentageCpu(String percentageCpu) {
        this.percentageCpu = percentageCpu;
    }
}