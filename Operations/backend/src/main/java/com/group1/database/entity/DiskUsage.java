package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by sriku on 2016-10-27.
 */
public class DiskUsage {

    @JsonProperty
    @NotEmpty
    private String kbDiskAvailable;

    @JsonProperty
    @NotEmpty
    private String kbDiskUsed;

    @JsonProperty
    @NotEmpty
    private String percentageDiskUsed;

    public DiskUsage(String kbDiskAvailable, String kbDiskUsed, String percentageDiskUsed) {
        this.kbDiskAvailable = kbDiskAvailable;
        this.kbDiskUsed = kbDiskUsed;
        this.percentageDiskUsed = percentageDiskUsed;
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

    public String getPercentageDiskUsed() {
        return percentageDiskUsed;
    }

    public void setPercentageDiskUsed(String percentageDiskUsed) {
        this.percentageDiskUsed = percentageDiskUsed;
    }

}
