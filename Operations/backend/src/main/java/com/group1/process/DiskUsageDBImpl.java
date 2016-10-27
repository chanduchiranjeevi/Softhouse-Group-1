package com.group1.process;

import com.group1.database.DiskUsageDAO;
import com.group1.database.entity.DiskUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Created by sriku on 2016-10-27.
 */
public class DiskUsageDBImpl implements DiskUsageProcess {

    private DiskUsageDAO diskUsageDAO;

    public DiskUsageDBImpl(DiskUsageDAO diskUsageDAO) {
        this.diskUsageDAO = diskUsageDAO;
    }

    @Override
    public List<DiskUsage> list() {
        return this.diskUsageDAO.list();
    }

    @Override
    public DiskUsage create(DiskUsage diskUsage) {
        return this.diskUsageDAO.findBy(this.diskUsageDAO.create(diskUsage));
    }

    @Override
    public DiskUsage update(Integer id, DiskUsage updatedDiskUsage) throws NotFoundException {
        DiskUsage diskUsage = this.find(id);

        diskUsage.setHostName(updatedDiskUsage.getHostName());
        diskUsage.setKbDiskAvailable(updatedDiskUsage.getKbDiskAvailable());
        diskUsage.setKbDiskUsed(updatedDiskUsage.getKbDiskUsed());

        this.diskUsageDAO.update(diskUsage);

        return diskUsage;
    }

    @Override
    public DiskUsage find(Integer id) throws NotFoundException {
        return Optional
                .ofNullable(this.diskUsageDAO.findBy(id))
                .orElseThrow(() -> new NotFoundException("CPU usage stats do not exist"));
    }

    @Override
    public void delete(Integer id) {
        this.diskUsageDAO.deleteBy(id);
    }

}
