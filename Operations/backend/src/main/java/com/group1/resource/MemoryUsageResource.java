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
    @Path("/{id}")
    public MemoryUsage getMemoryUsage(@PathParam("id") Integer id) {
        return this.memoryUsageProcess.find(id);
    }

    @POST
    public MemoryUsage createMemoryUsage(@NotNull @Valid MemoryUsage memoryUsage) {
        return this.memoryUsageProcess.create(memoryUsage);
    }

    @PUT
    @Path("/{id}")
    public MemoryUsage updateMemoryUsage(@PathParam("id") Integer id, @Valid MemoryUsage memoryUsage) {
        return this.memoryUsageProcess.update(id, memoryUsage);
    }

    @DELETE
    @Path("/{id}")
    public void deleteMemoryUsage(@PathParam("id") Integer id) {
        this.memoryUsageProcess.delete(id);
    }

}
