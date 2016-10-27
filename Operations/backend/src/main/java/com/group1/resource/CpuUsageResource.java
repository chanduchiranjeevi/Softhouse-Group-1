package com.group1.resource;

import com.group1.database.entity.CpuUsage;
import com.group1.process.CpuUsageProcess;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

import static com.google.common.base.Preconditions.checkNotNull;

/**
 * Created by sriku on 2016-10-27.
 */

@Path("/Metrics/CpuUsage")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class CpuUsageResource {

    private CpuUsageProcess cpuUsageProcess;

    public CpuUsageResource(CpuUsageProcess cpuUsageProcess) {
        this.cpuUsageProcess = checkNotNull(cpuUsageProcess);
    }

    @GET
    public List<CpuUsage> listCpuUsage() {
        return this.cpuUsageProcess.list();
    }

    @GET
    @Path("/{id}")
    public CpuUsage getCpuUsage(@PathParam("id") Integer id) {
        return this.cpuUsageProcess.find(id);
    }

    @POST
    public CpuUsage createCpuUsage(@NotNull @Valid CpuUsage cpuUsage) {
        return this.cpuUsageProcess.create(cpuUsage);
    }

    @PUT
    @Path("/{id}")
    public CpuUsage updateCpuUsage(@PathParam("id") Integer id, @Valid CpuUsage cpuUsage) {
        return this.cpuUsageProcess.update(id, cpuUsage);
    }

    @DELETE
    @Path("/{id}")
    public void deleteCpuUsage(@PathParam("id") Integer id) {
        this.cpuUsageProcess.delete(id);
    }

}
