package com.sgic.integration.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sgic.integration.entities.DefectTask;
import com.sgic.integration.repositories.DefectTaskRepository;

@Service
public class DefectTaskService {
	@Autowired
	private DefectTaskRepository defectTaskRepository;
	
	public DefectTask saveOrUpdateDefectTask(DefectTask defectTask) {
		return defectTaskRepository.save(defectTask) ;
	}
	
	public Iterable<DefectTask>findAll(){
		return defectTaskRepository.findAll(); 
	}
	
	public DefectTask findById(Long id) {
		return defectTaskRepository.getBydId(id);		
	}
	public void delete(Long id) {
		DefectTask defectTask= findById(id);
		defectTaskRepository.delete(defectTask);
		
	}

}
