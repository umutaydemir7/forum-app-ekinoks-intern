package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("MainTopic")
public class MainTopic {

    @Id
    private String id;
    @Indexed
    private String name;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public MainTopic(String name, String userSent) {

        this.name = name;
        this.userSent = userSent;
    }

    public String getUserSent() {
        return userSent;
    }

    public void setUserSent(String userSent) {
        this.userSent = userSent;
    }
}
