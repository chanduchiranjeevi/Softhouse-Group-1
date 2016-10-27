package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

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
    @NotEmpty
    private String kbMemoryFree;

    @JsonProperty
    @NotEmpty
    private String kbMemoryUsed;

    public MemoryUsage() {}


    public MemoryUsage(Integer id, String hostName, String kbMemoryFree, String kbMemoryUsed) {
        this.id = id;
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

}
