package com.sgic.integration.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;

@Entity
public class ProjectTask {

	
	@OneToMany(mappedBy="projectTask", cascade=CascadeType.ALL)
	private List<ModuleTask> moduleTask;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long id;	
private String projectName;

public ProjectTask() {
	
}

public Long getId() {
	return id;
}

public void setId(Long id) {
	this.id = id;
}

public String getProjectName() {
	return projectName;
}

public void setProjectName(String projectName) {
	this.projectName = projectName;
}

public List<ModuleTask> getModuleTask() {
	return moduleTask;
}

public void setModuleTask(List<ModuleTask> moduleTask) {
	this.moduleTask = moduleTask;
}

@Override
public String toString() {
	return "ProjectTask [moduleTask=" + moduleTask + ", id=" + id + ", projectName=" + projectName + "]";
}





}
