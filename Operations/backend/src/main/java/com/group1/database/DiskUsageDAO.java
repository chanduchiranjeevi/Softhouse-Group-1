package com.group1.database;

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

    @SqlUpdate("CREATE TABLE IF NOT EXISTS diskUsage(id int auto_increment primary key, kbDiskAvailable varchar(255), kbDiskUsed varchar(255), percentageDiskUsed varchar(8))")
    void createTable();

    @SqlUpdate("INSERT INTO `diskUsage` VALUES(:id, :kbDiskAvailable, :kbDiskUsed, :percentageDiskUsed)")
    @GetGeneratedKeys
    int create(@BindBean DiskUsage diskUsage);

    @SqlQuery("SELECT * FROM `diskUsage`")
    List<DiskUsage> list();

    @SqlQuery("SELECT * FROM `diskUsage` WHERE id = :id")
    DiskUsage findBy(@Bind("id") int id);

    @SqlUpdate("DELETE FROM `diskUsage` WHERE id = :id")
    int deleteBy(@Bind("id") int id);

    @SqlUpdate("UPDATE `serverStatistics` SET percentageSystem = :percentageSystem, percentageUser = :percentageUser, kbMemoryFree = :kbMemoryFree, kbMemoryUsed = :kbMemoryUsed, percentageMemoryUsed = :percentageMemoryUsed, kbDiskAvailable = :kbDiskAvailable, kbDiskUsed = :kbDiskUsed, percentageDiskUsed = :percentageDiskUsed")
    Integer update(@BindBean DiskUsage diskUsage);

}
