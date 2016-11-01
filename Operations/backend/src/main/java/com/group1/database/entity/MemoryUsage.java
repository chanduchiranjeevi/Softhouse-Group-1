package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.internal.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

import java.util.Date;

/**
 * Created by sriku on 2016-10-27.
 */

public class MemoryUsage {

    @JsonProperty
    private Integer id;

    @JsonProperty
    @NotEmpty
    private String hostName;

    @JsonProperty
    private Date time;

    @JsonProperty
    @NotNull
    private Integer kbMemoryFree;

    @JsonProperty
    @NotNull
    private Integer kbMemoryUsed;

    public MemoryUsage() {}

    public MemoryUsage(Integer id, String hostName, Date time, Integer kbMemoryFree, Integer kbMemoryUsed) {
        this.id = id;
        this.time = time;
        this.hostName = hostName;
        this.kbMemoryFree = kbMemoryFree;
        this.kbMemoryUsed = kbMemoryUsed;
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

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Integer getKbMemoryFree() {
        return kbMemoryFree;
    }

    public void setKbMemoryFree(Integer kbMemoryFree) {
        this.kbMemoryFree = kbMemoryFree;
    }

    public Integer getKbMemoryUsed() {
        return kbMemoryUsed;
    }

    public void setKbMemoryUsed(Integer kbMemoryUsed) {
        this.kbMemoryUsed = kbMemoryUsed;
    }

}
