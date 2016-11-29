package com.group1.process;

import com.group1.database.entity.CpuUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;

/**
 * Created by sriku on 2016-10-27.
 */

public interface CpuUsageProcess {
    List<CpuUsage> list();
    CpuUsage create(CpuUsage cpuUsage);
    List<CpuUsage> find(String hostName) throws NotFoundException;
    void delete(String hostName);
}