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

    @SqlUpdate("CREATE TABLE IF NOT EXISTS diskUsage(id int auto_increment primary key, hostName varchar(255), kbDiskAvailable varchar(255), kbDiskUsed varchar(255))")
    void createTable();

    @SqlUpdate("INSERT INTO `diskUsage` VALUES(:id, :hostName, :kbDiskAvailable, :kbDiskUsed)")
    @GetGeneratedKeys
    int create(@BindBean DiskUsage diskUsage);

    @SqlQuery("SELECT * FROM `diskUsage`")
    List<DiskUsage> list();

    @SqlQuery("SELECT * FROM `diskUsage` WHERE id = :id")
    DiskUsage findBy(@Bind("id") int id);

    @SqlUpdate("DELETE FROM `diskUsage` WHERE id = :id")
    int deleteBy(@Bind("id") int id);

    @SqlUpdate("UPDATE `diskUsage` SET hostName = :hostName, kbDiskAvailable = :kbDiskAvailable, kbDiskUsed = :kbDiskUsed")
    Integer update(@BindBean DiskUsage diskUsage);

}
