package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("Discussion")
public class Discussion {

    @Id
    private String id;
    @Indexed
    private String name;
    private String sideTopicName;

    private String status;

    private String userSent;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }

    public String getSideTopicName() {
        return sideTopicName;
    }

    public void setSideTopicName(String sideTopicName) {
        this.sideTopicName = sideTopicName;
    }


    public String getUserSent() {
        return userSent;
    }

    public void setUserSent(String userSent) {
        this.userSent = userSent;
    }

    public Discussion(String name, String sideTopicName, String userSent) {
        this.name = name;
        this.sideTopicName = sideTopicName;
        this.userSent= userSent;
    }
}