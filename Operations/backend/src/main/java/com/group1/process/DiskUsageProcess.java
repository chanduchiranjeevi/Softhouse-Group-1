package com.group1.process;

import com.group1.database.entity.DiskUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;

/**
 * Created by sriku on 2016-10-27.
 */

public interface DiskUsageProcess {
    List<DiskUsage> list();
    DiskUsage create(DiskUsage diskUsage);
    DiskUsage update(Integer id, DiskUsage diskUsage) throws NotFoundException;
    DiskUsage find(Integer id) throws NotFoundException;
    void delete(Integer id);
}
