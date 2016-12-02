package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import java.util.Date;

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
    @NotNull
    private Date time;

    @JsonProperty
    @NotNull
    private Float kbDiskAvailable;

    @JsonProperty
    @NotNull
    private Float kbDiskUsed;

    public DiskUsage() {}

    public DiskUsage(Integer id, String hostName, Date time, Float kbDiskAvailable, Float kbDiskUsed) {
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

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Float getKbDiskAvailable() {
        return kbDiskAvailable;
    }

    public void setKbDiskAvailable(Float kbDiskAvailable) {
        this.kbDiskAvailable = kbDiskAvailable;
    }

    public Float getKbDiskUsed() {
        return kbDiskUsed;
    }

    public void setKbDiskUsed(Float kbDiskUsed) {
        this.kbDiskUsed = kbDiskUsed;
    }

}
