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
    public List<CpuUsage> find(String hostName) throws NotFoundException {
        return Optional
                .ofNullable(this.cpuUsageDAO.findByHostname(hostName))
                .orElseThrow(() -> new NotFoundException("CPU usage stats do not exist"));
    }

    @Override
    public void delete(String hostName) {
        this.cpuUsageDAO.deleteBy(hostName);
    }
}
