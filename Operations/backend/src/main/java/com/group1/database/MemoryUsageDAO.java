package com.group1.database;

import com.group1.database.entity.MemoryUsage;
import org.skife.jdbi.v2.sqlobject.*;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapperFactory;
import org.skife.jdbi.v2.tweak.BeanMapperFactory;
import java.util.List;

@RegisterMapperFactory(BeanMapperFactory.class)

/**
 * Created by sriku on 2016-10-27.
 */
public interface MemoryUsageDAO {

    @SqlUpdate("CREATE TABLE IF NOT EXISTS memoryUsage(id int auto_increment primary key, hostName varchar(255), kbMemoryFree varchar(255), kbMemoryUsed varchar(255))")
    void createTable();

    @SqlUpdate("INSERT INTO `memoryUsage` VALUES(:id, :hostName, :kbMemoryFree, :kbMemoryUsed)")
    @GetGeneratedKeys
    int create(@BindBean MemoryUsage memoryUsage);

    @SqlQuery("SELECT * FROM `memoryUsage`")
    List<MemoryUsage> list();

    @SqlQuery("SELECT * FROM `memoryUsage` WHERE id = :id")
    MemoryUsage findBy(@Bind("id") int id);

    @SqlUpdate("DELETE FROM `memoryUsage` WHERE id = :id")
    int deleteBy(@Bind("id") int id);

    @SqlUpdate("UPDATE `memoryUsage` SET hostName = :hostName, kbMemoryFree = :kbMemoryFree, kbMemoryUsed = :kbMemoryUsed")
    Integer update(@BindBean MemoryUsage memoryUsage);

}
