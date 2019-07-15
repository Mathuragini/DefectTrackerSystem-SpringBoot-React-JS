package com.sgic.integration.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class ModuleTask {
	 
	@ManyToOne
	@JoinColumn(name="id",nullable=false)
	@JsonProperty(access=JsonProperty.Access.WRITE_ONLY)
	private ProjectTask projectTask;
	
	@OneToMany(mappedBy="moduleTask",cascade=CascadeType.ALL)
	private List<DefectTask> defectTask;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long mId;
	private String moduleName;
	
	
	public ModuleTask() {
		
	}

	public Long getmId() {
		return mId;
	}

	public void setmId(Long mId) {
		this.mId = mId;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public ProjectTask getProjectTask() {
		return projectTask;
	}

	public void setProjectTask(ProjectTask projectTask) {
		this.projectTask = projectTask;
	}
	

	public List<DefectTask> getDefectTask() {
		return defectTask;
	}

	public void setDefectTask(List<DefectTask> defectTask) {
		this.defectTask = defectTask;
	}

	@Override
	public String toString() {
		return "ModuleTask [projectTask=" + projectTask + ", mId=" + mId + ", moduleName=" + moduleName + "]";
	}


}
