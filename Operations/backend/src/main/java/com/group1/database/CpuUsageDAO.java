package com.group1.database;

import com.group1.database.entity.CpuUsage;
import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import java.util.List;

@RegisterMapperFactory(BeanMapperFactory.class)

/**
 * Created by sriku on 2016-10-27.
 */
public interface CpuUsageDAO {

    @SqlUpdate("CREATE TABLE IF NOT EXISTS cpuUsage(id int auto_increment primary key, hostName varchar(255), time timestamp, percentageCpu float)")
    void createTable();

    @SqlUpdate("INSERT INTO `cpuUsage` VALUES(:id, :hostName, :time, :percentageCpu)")
    @GetGeneratedKeys
    int create(@BindBean CpuUsage cpuUsage);

    @SqlQuery("SELECT * FROM `cpuUsage`")
    List<CpuUsage> list();

    @SqlQuery("SELECT * FROM `cpuUsage` WHERE id = :id")
    CpuUsage findBy(@Bind("id") int id);

    @SqlUpdate("DELETE FROM `cpuUsage` WHERE id = :id")
    int deleteBy(@Bind("id") int id);

    @SqlUpdate("UPDATE `cpuUsage` SET hostName = :hostName, time = :time, percentageCpu = :percentageCpu")
    Integer update(@BindBean CpuUsage cpuUsage);

}
