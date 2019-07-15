package com.sgic.integration.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sgic.integration.entities.DefectTask;

@Repository
public interface DefectTaskRepository  extends CrudRepository<DefectTask,Long> {
	DefectTask getBydId(Long id);
}
