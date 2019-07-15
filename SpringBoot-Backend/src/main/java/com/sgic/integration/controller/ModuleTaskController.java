package com.sgic.integration.controller;

import java.util.HashMap;
import java.util.Map;

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

import com.sgic.integration.dto.ModuleDto;
import com.sgic.integration.entities.ModuleTask;
import com.sgic.integration.entities.ProjectTask;
import com.sgic.integration.services.ModuleTaskService;
import com.sgic.integration.services.ProjectTaskService;

@RestController
@CrossOrigin
public class ModuleTaskController {
	@Autowired
	private ModuleTaskService moduleTaskService;
	
	@Autowired
	private ProjectTaskService projectTaskService;
	
//	@PostMapping("/saveModule")
//	public ResponseEntity<?> addPTToBoard(@Valid @RequestBody ModuleTask moduleTask, BindingResult result){
//		
//		ModuleTask newPT=moduleTaskService.saveOrUpdateModuleTask(moduleTask);
//		return new ResponseEntity<ModuleTask>(newPT, HttpStatus.CREATED);	
//	}
	
	@PostMapping("/saveModule")
	public ResponseEntity<?> addPTToBoard(@Valid @RequestBody ModuleDto moduledto, BindingResult result){
		
		ModuleTask newPT=new ModuleTask();
		newPT.setmId(moduledto.getmId());
		newPT.setModuleName(moduledto.getModuleName());
		
		ProjectTask projectTask=projectTaskService.findById(moduledto.getId());
		newPT.setProjectTask(projectTask);
		
		newPT=moduleTaskService.saveOrUpdateModuleTask(newPT);
		return new ResponseEntity<ModuleTask>(newPT, HttpStatus.CREATED);	
	}
	
	@GetMapping("/getAllModule")
	public Iterable<ModuleTask>getAllPTs(){
		return moduleTaskService.findAll();
	}

	@GetMapping("/getModuleId/{pt_id}")
	public ResponseEntity<?> getPTById(@PathVariable Long pt_id){
		ModuleTask moduleTask = moduleTaskService.findById(pt_id);
		return new ResponseEntity<ModuleTask>(moduleTask, HttpStatus.OK);
	}

	@DeleteMapping("/deleteModule/{pt_id}")
	public ResponseEntity<?> deleteModuleTask(@PathVariable Long pt_id){
		moduleTaskService.delete(pt_id);
		return new ResponseEntity<String>("Module Task Deleted",HttpStatus.OK);
	}
	
	@GetMapping("/getDto")
	public ModuleDto getDetail() {
		return new ModuleDto();
	}

}
