package com.group1.process;

import com.group1.database.entity.CpuUsage;
import com.group1.database.entity.DiskUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;

/**
 * Created by sriku on 2016-10-27.
 */

public interface DiskUsageProcess {
    List<DiskUsage> list();
    DiskUsage create(DiskUsage diskUsage);
    List<DiskUsage> find(String hostName) throws NotFoundException;
    void delete(String hostName);
}
