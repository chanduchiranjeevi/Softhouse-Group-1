package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

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
    @NotEmpty
    private String kbDiskAvailable;

    @JsonProperty
    @NotEmpty
    private String kbDiskUsed;

    public DiskUsage() {}

    public DiskUsage(Integer id, String hostName, String kbDiskAvailable, String kbDiskUsed) {
        this.id = id;
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

    public String getKbDiskAvailable() {
        return kbDiskAvailable;
    }

    public void setKbDiskAvailable(String kbDiskAvailable) {
        this.kbDiskAvailable = kbDiskAvailable;
    }

    public String getKbDiskUsed() {
        return kbDiskUsed;
    }

    public void setKbDiskUsed(String kbDiskUsed) {
        this.kbDiskUsed = kbDiskUsed;
    }

}
