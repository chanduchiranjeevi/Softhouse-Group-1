package com.group1.database;

import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import com.group1.database.entity.ServerStatistics;
import java.util.List;

@RegisterMapperFactory(BeanMapperFactory.class)
public interface ServerStatisticsDataAccessObject {

    @SqlUpdate("CREATE TABLE IF NOT EXISTS serverStatistics(id int auto_increment primary key, cpuUsageSystem varchar(8), cpuUsageUser varchar(8), kbMemoryFree varchar(255), kbMemoryUsed varchar(255), percentageMemoryUsed varchar(8), diskAvailable varchar(255), diskUsed varchar(255), percentageDiskUsed varchar(8))")
    void createTable();

    @SqlUpdate("INSERT INTO `serverStatistics` VALUES(:id, :cpuUsageSystem, :cpuUsageUser, :kbMemoryFree, :kbMemoryUsed, :percentageMemoryUsed, :diskAvailable, :diskUsed, :percentageDiskUsed)")
    @GetGeneratedKeys
    int create(@BindBean ServerStatistics serverStatistics);

    @SqlQuery("SELECT * FROM `serverStatistics`")
    List<ServerStatistics> list();

    @SqlQuery("SELECT * FROM `serverStatistics` WHERE id = :id")
    ServerStatistics findBy(@Bind("id") int id);

    @SqlUpdate("DELETE FROM `serverStatistics` WHERE id = :id")
    int deleteBy(@Bind("id") int id);

    @SqlUpdate("UPDATE `serverStatistics` SET cpuUsageSystem = :cpuUsageSystem,cpuUsageUser = :cpuUsageUser, kbMemoryFree = :kbMemoryFree, kbMemoryUsed = :kbMemoryUsed, percentageMemoryUsed = :percentageMemoryUsed, diskAvailable = :diskAvailable, diskUsed = :diskUsed, percentageDiskUsed = :percentageDiskUsed")
    Integer update(@BindBean ServerStatistics serverStatistics);
}