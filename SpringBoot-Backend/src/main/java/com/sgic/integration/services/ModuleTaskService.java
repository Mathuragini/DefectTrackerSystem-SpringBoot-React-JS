package com.sgic.integration.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.integration.entities.ModuleTask;
import com.sgic.integration.repositories.ModuleTaskRepository;

@Service
public class ModuleTaskService {
	
	@Autowired
	private ModuleTaskRepository moduleTaskRepository;
	 
	public ModuleTask saveOrUpdateModuleTask(ModuleTask moduleTask) {
		return moduleTaskRepository.save(moduleTask) ;
	}
	
	public Iterable<ModuleTask>findAll(){
		return moduleTaskRepository.findAll(); 
	}
	
	public ModuleTask findById(Long id) {
		return moduleTaskRepository.getBymId(id);		
	}
	public void delete(Long id) {
		ModuleTask projectTask= findById(id);
		moduleTaskRepository.delete(projectTask);
		
	}

}
