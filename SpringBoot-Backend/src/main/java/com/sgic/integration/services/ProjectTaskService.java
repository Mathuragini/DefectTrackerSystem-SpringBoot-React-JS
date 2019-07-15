package com.sgic.integration.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.integration.entities.ProjectTask;
import com.sgic.integration.repositories.ProjectTaskRepository;

@Service
public class ProjectTaskService {

	@Autowired
	private ProjectTaskRepository projectTaskRepository;
	 
	public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask) {
		return projectTaskRepository.save(projectTask) ;
	}
	
	public Iterable<ProjectTask>findAll(){
		return projectTaskRepository.findAll(); 
	}
	
	public ProjectTask findById(Long id) {
		return projectTaskRepository.getById(id);		
	}
	public void delete(Long id) {
		ProjectTask projectTask= findById(id);
		projectTaskRepository.delete(projectTask);
		
	}
}
