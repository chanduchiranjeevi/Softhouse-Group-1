package com.group1;

import com.bazaarvoice.dropwizard.assets.ConfiguredAssetsBundle;
import com.group1.database.CpuUsageDAO;
import com.group1.database.DiskUsageDAO;
import com.group1.database.MemoryUsageDAO;
import com.group1.process.*;
import com.group1.resource.CpuUsageResource;
import com.group1.resource.DiskUsageResource;
import com.group1.resource.MemoryUsageResource;
import io.dropwizard.Application;
import io.dropwizard.jdbi.DBIFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.h2.tools.Server;
import org.skife.jdbi.v2.DBI;

/**
 * Created by sriku on 2016-10-27.
 */
public class ServerMetricsApplication extends Application<ServerMetricsConfiguration> {

    @Override
    public void run(ServerMetricsConfiguration configuration, Environment environment) throws Exception {
        final Server h2db = Server.createWebServer("-webDaemon");
        final DBIFactory factory = new DBIFactory();
        final DBI dbi = factory.build(environment, configuration.getDataSourceFactory(), "h2");

        // h2
        h2db.start();

        // data access objects
        final CpuUsageDAO cpuUsageDAO = dbi.onDemand(CpuUsageDAO.class);
        final DiskUsageDAO diskUsageDAO = dbi.onDemand(DiskUsageDAO.class);
        final MemoryUsageDAO memoryUsageDAO = dbi.onDemand(MemoryUsageDAO.class);

        // tables
        cpuUsageDAO.createTable();
        diskUsageDAO.createTable();
        memoryUsageDAO.createTable();

        // processes
        CpuUsageProcess cpuUsageProcess = new CpuUsageDBImpl(cpuUsageDAO);
        DiskUsageProcess diskUsageProcess = new DiskUsageDBImpl(diskUsageDAO);
        MemoryUsageProcess memoryUsageProcess = new MemoryUsageDBImpl(memoryUsageDAO);

        // resources
        CpuUsageResource cpuUsageResource = new CpuUsageResource(cpuUsageProcess);
        DiskUsageResource diskUsageResource = new DiskUsageResource(diskUsageProcess);
        MemoryUsageResource memoryUsageResource = new MemoryUsageResource(memoryUsageProcess);

        // environment
        environment.jersey().register(cpuUsageResource);
        environment.jersey().register(diskUsageResource);
        environment.jersey().register(memoryUsageResource);
    }

    @Override
    public void initialize(Bootstrap<ServerMetricsConfiguration> configuration) {
        configuration.addBundle(new ConfiguredAssetsBundle("/assets/", "/", "index.html"));
    }

    public static void main(String[] args) throws Exception {
        new ServerMetricsApplication().run(args);
    }

}