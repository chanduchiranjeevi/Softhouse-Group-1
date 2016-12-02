package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

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
    @NotNull
    private Date time;

    @JsonProperty
    @NotNull
    private Float kbMemoryFree;

    @JsonProperty
    @NotNull
    private Float kbMemoryUsed;

    public MemoryUsage() {}

    public MemoryUsage(Integer id, String hostName, Date time, Float kbMemoryFree, Float kbMemoryUsed) {
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

    public Float getKbMemoryFree() {
        return kbMemoryFree;
    }

    public void setKbMemoryFree(Float kbMemoryFree) {
        this.kbMemoryFree = kbMemoryFree;
    }

    public Float getKbMemoryUsed() {
        return kbMemoryUsed;
    }

    public void setKbMemoryUsed(Float kbMemoryUsed) {
        this.kbMemoryUsed = kbMemoryUsed;
    }

}