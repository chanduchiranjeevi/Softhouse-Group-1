package com.group1.resource;

import com.group1.database.entity.MemoryUsage;
import com.group1.process.MemoryUsageProcess;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Created by sriku on 2016-10-27.
 */

@Path("/Metrics/MemoryUsage")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class MemoryUsageResource {

    private MemoryUsageProcess memoryUsageProcess;

    public MemoryUsageResource(MemoryUsageProcess memoryUsageProcess) {
        this.memoryUsageProcess = checkNotNull(memoryUsageProcess);
    }

    @GET
    public List<MemoryUsage> listMemoryUsage() {
        return this.memoryUsageProcess.list();
    }

    @GET
    @Path("/{hostName}")
    public List<MemoryUsage> getMemoryUsage(@PathParam("hostName") String hostName) {
        return this.memoryUsageProcess.find(hostName);
    }

    @POST
    public MemoryUsage createMemoryUsage(@NotNull @Valid MemoryUsage memoryUsage) {
        return this.memoryUsageProcess.create(memoryUsage);
    }

    @DELETE
    @Path("/{hostName}")
    public void deleteMemoryUsage(@PathParam("hostName") String hostName) {
        this.memoryUsageProcess.delete(hostName);
    }

}
