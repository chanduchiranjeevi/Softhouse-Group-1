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
    @Path("/{hostName}")
    public List<DiskUsage> getDiskUsage(@PathParam("hostName") String hostName) {
        return this.diskUsageProcess.find(hostName);
    }

    @POST
    public DiskUsage createDiskUsage(@NotNull @Valid DiskUsage diskUsage) {
        return this.diskUsageProcess.create(diskUsage);
    }

    @DELETE
    @Path("/{hostName}")
    public void deleteDiskUsage(@PathParam("hostName") String hostName) {
        this.diskUsageProcess.delete(hostName);
    }

}