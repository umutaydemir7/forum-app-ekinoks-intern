package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;


@Document("SideTopic")
public class SideTopic {

    @Id
    private String id;
    @Indexed
    @Size(max = 30, message = "{validation.name.size.too_long}")
    private String name;
    private String mainTopicName;

    private String userSent;

    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMainTopicName() {
        return mainTopicName;
    }

    public void setMainTopicName(String mainTopicName) {
        this.mainTopicName = mainTopicName;
    }


    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserSent() {
        return userSent;
    }

    public void setUserSent(String userSent) {
        this.userSent = userSent;
    }

    public SideTopic(String name, String mainTopicName, String userSent) {
        this.name = name;
        this.mainTopicName =mainTopicName;
        this.userSent = userSent;

    }




}