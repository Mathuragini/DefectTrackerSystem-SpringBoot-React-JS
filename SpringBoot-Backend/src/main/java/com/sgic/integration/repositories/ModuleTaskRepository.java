package com.sgic.integration.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sgic.integration.entities.ModuleTask;

@Repository
public interface ModuleTaskRepository extends CrudRepository<ModuleTask, Long>  {
	ModuleTask getBymId(Long id);
}
