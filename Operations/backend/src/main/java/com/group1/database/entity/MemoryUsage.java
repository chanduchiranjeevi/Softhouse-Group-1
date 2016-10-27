package com.group1.database.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by sriku on 2016-10-27.
 */
public class MemoryUsage {

    @JsonProperty
    @NotEmpty
    private String kbMemoryFree;

    @JsonProperty
    @NotEmpty
    private String kbMemoryUsed;

    @JsonProperty
    @NotEmpty
    private String percentageMemoryUsed;

    public MemoryUsage(String kbMemoryFree, String kbMemoryUsed, String percentageMemoryUsed) {
        this.kbMemoryFree = kbMemoryFree;
        this.kbMemoryUsed = kbMemoryUsed;
        this.percentageMemoryUsed = percentageMemoryUsed;
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

}
