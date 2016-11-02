package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.internal.NotNull;
import org.hibernate.validator.constraints.NotEmpty;

import java.sql.Timestamp;

/**
 * Created by sriku on 2016-10-27.
 */

public class DiskUsage {

    @JsonProperty
    private Integer id;

    @JsonProperty
    @NotEmpty
    private String hostName;

    @JsonProperty
    private Timestamp time;

    @JsonProperty
    @NotNull
    private Integer kbDiskAvailable;

    @JsonProperty
    @NotNull
    private Integer kbDiskUsed;

    public DiskUsage() {}

    public DiskUsage(Integer id, String hostName, Timestamp time, Integer kbDiskAvailable, Integer kbDiskUsed) {
        this.id = id;
        this.time = time;
        this.hostName = hostName;
        this.kbDiskAvailable = kbDiskAvailable;
        this.kbDiskUsed = kbDiskUsed;
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

    public Integer getKbDiskAvailable() {
        return kbDiskAvailable;
    }

    public void setKbDiskAvailable(Integer kbDiskAvailable) {
        this.kbDiskAvailable = kbDiskAvailable;
    }

    public Integer getKbDiskUsed() {
        return kbDiskUsed;
    }

    public void setKbDiskUsed(Integer kbDiskUsed) {
        this.kbDiskUsed = kbDiskUsed;
    }

}
