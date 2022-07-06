package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("Discussion")
public class Discussion {

    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private String sideTopicName;


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
    public Discussion(String name, String sideTopicName) {
        this.name = name;
        this.sideTopicName = sideTopicName;
    }
}