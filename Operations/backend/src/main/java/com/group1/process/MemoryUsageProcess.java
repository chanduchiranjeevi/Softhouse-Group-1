package com.group1.process;


import com.group1.database.entity.MemoryUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;

/**
 * Created by sriku on 2016-10-27.
 */

public interface MemoryUsageProcess {
    List<MemoryUsage> list();
    MemoryUsage create(MemoryUsage memoryUsage);
    MemoryUsage update(Integer id, MemoryUsage memoryUsage) throws NotFoundException;
    MemoryUsage find(Integer id) throws NotFoundException;
    void delete(Integer id);
}
