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
    private String percentageSystem;

    @JsonProperty
    @NotEmpty
    private String percentageUser;

    public CpuUsage(){}

    public CpuUsage(Integer id, String percentageSystem, String percentageUser) {
        this.id = id;
        this.percentageSystem = percentageSystem;
        this.percentageUser = percentageUser;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPercentageSystem() {
        return percentageSystem;
    }

    public void setPercentageSystem(String percentageSystem) {
        this.percentageSystem = percentageSystem;
    }

    public String getPercentageUser() {
        return percentageUser;
    }

    public void setPercentageUser(String percentageUser) {
        this.percentageUser = percentageUser;
    }

}
