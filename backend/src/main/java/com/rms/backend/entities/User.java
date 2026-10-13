package com.rms.backend.entities;

import com.rms.backend.entities.enums.UserRole;

import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "users")
@AttributeOverride(name = "id",column = @Column(name = "user_id"))
public class User extends BaseClass {
	
	@Column(name = "first_name",nullable = false,length = 50)
	private String firstName;
	
	@Column(name = "last_name",nullable = false,length = 50)
	private String lastName;
	
	@Column(unique = true,nullable = false,length = 50)
	private String email;
	
	@Column(length = 10)
	private String phone;
	
	@Column(length = 150)
	private String password;
	
	@Column(nullable = false,columnDefinition = "BOOLEAN DEFAULT TRUE")
	private boolean status = true;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private UserRole userRoles;
}
