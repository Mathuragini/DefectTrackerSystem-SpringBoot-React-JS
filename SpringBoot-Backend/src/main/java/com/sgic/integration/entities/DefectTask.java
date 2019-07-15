package com.sgic.integration.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class DefectTask {

	@ManyToOne
	@JoinColumn(name="mId",nullable=false)
	@JsonProperty(access=JsonProperty.Access.WRITE_ONLY)
	private ModuleTask moduleTask;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long dId;
	private String description;
	private String severity;
	private String priority;
	private String defectType;
	private String enteredBy;
	private String assignedTo;
    private Date enteredDate;
    private Date fixedDate;
	
    public DefectTask() {
    	
    }

	public Long getdId() {
		return dId;
	}

	public void setdId(Long dId) {
		this.dId = dId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSeverity() {
		return severity;
	}

	public void setSeverity(String severity) {
		this.severity = severity;
	}

	public String getPriority() {
		return priority;
	}

	public void setPriority(String priority) {
		this.priority = priority;
	}

	public String getDefectType() {
		return defectType;
	}

	public void setDefectType(String defectType) {
		this.defectType = defectType;
	}

	public String getEnteredBy() {
		return enteredBy;
	}

	public void setEnteredBy(String enteredBy) {
		this.enteredBy = enteredBy;
	}

	public String getAssignedTo() {
		return assignedTo;
	}

	public void setAssignedTo(String assignedTo) {
		this.assignedTo = assignedTo;
	}

	public Date getEnteredDate() {
		return enteredDate;
	}

	public void setEnteredDate(Date enteredDate) {
		this.enteredDate = enteredDate;
	}

	public Date getFixedDate() {
		return fixedDate;
	}

	public void setFixedDate(Date fixedDate) {
		this.fixedDate = fixedDate;
	}

	public ModuleTask getModuleTask() {
		return moduleTask;
	}

	public void setModuleTask(ModuleTask moduleTask) {
		this.moduleTask = moduleTask;
	}

	@Override
	public String toString() {
		return "DefectTask [dId=" + dId + ", description=" + description + ", severity=" + severity + ", priority="
				+ priority + ", defectType=" + defectType + ", enteredBy=" + enteredBy + ", assignedTo=" + assignedTo
				+ ", enteredDate=" + enteredDate + ", fixedDate=" + fixedDate + "]";
	}
    
    
}
