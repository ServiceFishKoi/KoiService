package com.example.profile_api.model;

import jakarta.persistence.*;

@Entity

@Table(name = "Role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="roleID")
    private Integer roleID;
    @Column(name="name")
    private String name;

    public Integer getRoleID() {
        return roleID;
    }

    public void setRoleID(Integer roleID) {
        this.roleID = roleID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Role(Integer roleID, String name) {
        this.roleID = roleID;
        this.name = name;
    }

    public Role() {
    }
}
