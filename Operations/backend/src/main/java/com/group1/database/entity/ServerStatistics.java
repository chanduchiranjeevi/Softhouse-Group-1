package com.group1.database.entity;

/**
 * Created by sriku on 2016-10-26.
 */

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

public class ServerStatistics {

    @JsonProperty
    private Integer id;

    @JsonProperty
    @NotEmpty
    private String cpuUsageSystem;

    @JsonProperty
    @NotEmpty
    private String cpuUsageUser;

    @JsonProperty
    @NotEmpty
    private String kbMemoryFree;

    @JsonProperty
    @NotEmpty
    private String kbMemoryUsed;

    @JsonProperty
    @NotEmpty
    private String percentageMemoryUsed;

    @JsonProperty
    @NotEmpty
    private String diskAvailable;

    @JsonProperty
    @NotEmpty
    private String diskUsed;

    @JsonProperty
    @NotEmpty
    private String percentageDiskUsed;

    public ServerStatistics() {}

    public ServerStatistics(Integer id, String cpuUsageSystem, String cpuUsageUser, String kbMemoryFree, String kbMemoryUsed, String percentageMemoryUsed, String diskAvailable, String diskUsed, String percentageDiskUsed) {
        this.id = id;
        this.cpuUsageSystem = cpuUsageSystem;
        this.cpuUsageUser = cpuUsageUser;
        this.kbMemoryFree = kbMemoryFree;
        this.kbMemoryUsed = kbMemoryUsed;
        this.percentageMemoryUsed = percentageMemoryUsed;
        this.diskAvailable = diskAvailable;
        this.diskUsed = diskUsed;
        this.percentageDiskUsed = percentageDiskUsed;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCpuUsageSystem() {
        return cpuUsageSystem;
    }

    public void setCpuUsageSystem(String cpuUsageSystem) {
        this.cpuUsageSystem = cpuUsageSystem;
    }

    public String getCpuUsageUser() {
        return cpuUsageUser;
    }

    public void setCpuUsageUser(String cpuUsageUser) {
        this.cpuUsageUser = cpuUsageUser;
    }

    public String getKbMemoryFree() {
        return kbMemoryFree;
    }

    public void setKbMemoryFree(String kbMemoryFree) {
        this.kbMemoryFree = kbMemoryFree;
    }

    public String getKbMemoryUsed() {
        return kbMemoryUsed;
    }

    public void setKbMemoryUsed(String kbMemoryUsed) {
        this.kbMemoryUsed = kbMemoryUsed;
    }

    public String getPercentageMemoryUsed() {
        return percentageMemoryUsed;
    }

    public void setPercentageMemoryUsed(String percentageMemoryUsed) {
        this.percentageMemoryUsed = percentageMemoryUsed;
    }

    public String getDiskAvailable() {
        return diskAvailable;
    }

    public void setDiskAvailable(String diskAvailable) {
        this.diskAvailable = diskAvailable;
    }

    public String getDiskUsed() {
        return diskUsed;
    }

    public void setDiskUsed(String diskUsed) {
        this.diskUsed = diskUsed;
    }

    public String getPercentageDiskUsed() {
        return percentageDiskUsed;
    }

    public void setPercentageDiskUsed(String percentageDiskUsed) {
        this.percentageDiskUsed = percentageDiskUsed;
    }
}
