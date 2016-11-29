package com.group1.database;

import com.group1.database.entity.CpuUsage;
import com.group1.database.entity.DiskUsage;
import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import java.util.List;

@RegisterMapperFactory(BeanMapperFactory.class)

/**
 * Created by sriku on 2016-10-27.
 */
public interface DiskUsageDAO {

    @SqlUpdate("CREATE TABLE IF NOT EXISTS diskUsage(id int auto_increment primary key, hostName varchar(255), time timestamp, kbDiskAvailable int, kbDiskUsed int)")
    void createTable();

    @SqlUpdate("INSERT INTO `diskUsage` VALUES(:id, :hostName, :time, :kbDiskAvailable, :kbDiskUsed)")
    @GetGeneratedKeys
    int create(@BindBean DiskUsage diskUsage);

    @SqlQuery("SELECT * FROM `diskUsage`")
    List<DiskUsage> list();

    @SqlQuery("SELECT * FROM `diskUsage` WHERE hostName = :hostName")
    List<DiskUsage> findByHostname(@Bind("hostName") String hostName);

    @SqlQuery("SELECT * FROM `diskUsage` WHERE id = :id")
    DiskUsage findBy(@Bind("id") int id);

    @SqlUpdate("DELETE FROM `diskUsage` WHERE hostName = :hostName")
    void deleteBy(@Bind("hostName") String hostName);

}
