package com.sgic.integration.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sgic.integration.dto.DefectDto;
import com.sgic.integration.entities.ModuleTask;
import com.sgic.integration.entities.DefectTask;
import com.sgic.integration.services.DefectTaskService;
import com.sgic.integration.services.ModuleTaskService;

@RestController
@CrossOrigin
public class DefectTaskController {
	
	@Autowired
	private DefectTaskService defectTaskService;
	
	@Autowired
	private ModuleTaskService moduleTaskService;

	
	@PostMapping("/saveDefect")
	public ResponseEntity<?> addDTToBoard(@Valid @RequestBody DefectDto defectdto, BindingResult result){
		
		DefectTask newDT=new DefectTask();
		newDT.setdId(defectdto.getdId());
		newDT.setDescription(defectdto.getDescription());
		newDT.setSeverity(defectdto.getSeverity());
		newDT.setPriority(defectdto.getPriority());
		newDT.setDefectType(defectdto.getDefectType());
		newDT.setEnteredBy(defectdto.getEnteredBy());
		newDT.setAssignedTo(defectdto.getAssignedTo());
		newDT.setEnteredDate(defectdto.getEnteredDate());
		newDT.setFixedDate(defectdto.getEnteredDate());
		
		ModuleTask moduleTask=moduleTaskService.findById(defectdto.getmId());
		newDT.setModuleTask(moduleTask);
		
		newDT=defectTaskService.saveOrUpdateDefectTask(newDT);
		return new ResponseEntity<DefectTask>(newDT, HttpStatus.CREATED);	
	}
	
	@GetMapping("/getAllDefect")
	public Iterable<DefectTask>getAllDTs(){
		return defectTaskService.findAll();
	}

	@GetMapping("/getDefectId/{pt_id}")
	public ResponseEntity<?> getDTById(@PathVariable Long pt_id){
		DefectTask defectTask = defectTaskService.findById(pt_id);
		return new ResponseEntity<DefectTask>(defectTask, HttpStatus.OK);
	}

	@DeleteMapping("/deleteDefect/{pt_id}")
	public ResponseEntity<?> deleteDefectTask(@PathVariable Long pt_id){
		defectTaskService.delete(pt_id);
		return new ResponseEntity<String>("Defect Task Deleted",HttpStatus.OK);
	}
	
	@GetMapping("/getDefectDto")
	public DefectDto getDefectDetail() {
		return new DefectDto();
	}

}
