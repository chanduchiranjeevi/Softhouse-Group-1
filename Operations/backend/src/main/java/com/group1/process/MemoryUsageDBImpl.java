package com.group1.process;

import com.group1.database.MemoryUsageDAO;
import com.group1.database.entity.MemoryUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Created by sriku on 2016-10-27.
 */
public class MemoryUsageDBImpl implements MemoryUsageProcess {

    private MemoryUsageDAO memoryUsageDAO;

    public MemoryUsageDBImpl(MemoryUsageDAO memoryUsageDAO) {
        this.memoryUsageDAO = memoryUsageDAO;
    }

    @Override
    public List<MemoryUsage> list() {
        return this.memoryUsageDAO.list();
    }

    @Override
    public MemoryUsage create(MemoryUsage memoryUsage) {
        return this.memoryUsageDAO.findBy(this.memoryUsageDAO.create(memoryUsage));
    }

    @Override
    public MemoryUsage update(Integer id, MemoryUsage updatedMemoryUsage) throws NotFoundException {
        MemoryUsage memoryUsage = this.find(id);

        memoryUsage.setHostName(updatedMemoryUsage.getHostName());
        memoryUsage.setKbMemoryFree(updatedMemoryUsage.getKbMemoryFree());
        memoryUsage.setKbMemoryUsed(updatedMemoryUsage.getKbMemoryUsed());

        this.memoryUsageDAO.update(memoryUsage);

        return memoryUsage;
    }

    @Override
    public MemoryUsage find(Integer id) throws NotFoundException {
        return Optional
                .ofNullable(this.memoryUsageDAO.findBy(id))
                .orElseThrow(() -> new NotFoundException("Memory usage stats do not exist"));
    }

    @Override
    public void delete(Integer id) {
        this.memoryUsageDAO.deleteBy(id);
    }
    
}
