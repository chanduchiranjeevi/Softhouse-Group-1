package com.group1.resource;

import com.group1.database.entity.DiskUsage;
import com.group1.process.DiskUsageProcess;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.*;
import java.util.List;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Created by sriku on 2016-10-27.
 */

@Path("/Metrics/DiskUsage")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class DiskUsageResource {

    private DiskUsageProcess diskUsageProcess;

    public DiskUsageResource(DiskUsageProcess diskUsageProcess) {
        this.diskUsageProcess = checkNotNull(diskUsageProcess);
    }

    @GET
    public List<DiskUsage> listDiskUsage() {
        return this.diskUsageProcess.list();
    }

    @GET
    @Path("/{id}")
    public DiskUsage getDiskUsage(@PathParam("id") Integer id) {
        return this.diskUsageProcess.find(id);
    }

    @POST
    public DiskUsage createDiskUsage(@NotNull @Valid DiskUsage diskUsage) {
        return this.diskUsageProcess.create(diskUsage);
    }

    @PUT
    @Path("/{id}")
    public DiskUsage updateDiskUsage(@PathParam("id") Integer id, @Valid DiskUsage diskUsage) {
        return this.diskUsageProcess.update(id, diskUsage);
    }

    @DELETE
    @Path("/{id}")
    public void deleteDiskUsage(@PathParam("id") Integer id) {
        this.diskUsageProcess.delete(id);
    }

}
