package com.group1.process;

import com.group1.database.CpuUsageDAO;
import com.group1.database.entity.CpuUsage;

import javax.ws.rs.NotFoundException;
import java.util.List;
import java.util.Optional;

/**
 * Created by sriku on 2016-10-27.
 */


public class CpuUsageDBImpl implements CpuUsageProcess {
    private CpuUsageDAO cpuUsageDAO;

    public CpuUsageDBImpl(CpuUsageDAO cpuUsageDAO) {
        this.cpuUsageDAO = cpuUsageDAO;
    }

    @Override
    public List<CpuUsage> list() {
        return this.cpuUsageDAO.list();
    }

    @Override
    public CpuUsage create(CpuUsage cpuUsage) {
        return this.cpuUsageDAO.findBy(this.cpuUsageDAO.create(cpuUsage));
    }

    @Override
    public CpuUsage update(Integer id, CpuUsage updatedCpuUsage) throws NotFoundException {
        CpuUsage cpuUsage = this.find(id);

        cpuUsage.setTime(updatedCpuUsage.getTime());
        cpuUsage.setHostName(updatedCpuUsage.getHostName());
        cpuUsage.setPercentageCpu(updatedCpuUsage.getPercentageCpu());

        this.cpuUsageDAO.update(cpuUsage);

        return cpuUsage;
    }

    @Override
    public CpuUsage find(Integer id) throws NotFoundException {
        return Optional
                .ofNullable(this.cpuUsageDAO.findBy(id))
                .orElseThrow(() -> new NotFoundException("CPU usage stats do not exist"));
    }

    @Override
    public void delete(Integer id) {
        this.cpuUsageDAO.deleteBy(id);
    }
}
