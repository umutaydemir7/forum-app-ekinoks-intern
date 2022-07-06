package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Size;


@Document("SideTopic")
public class SideTopic {

    @Id
    private String id;
    @Indexed(unique = true)
    @Size(max = 30, message = "{validation.name.size.too_long}")
    private String name;
    private String mainTopicName;

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

    public SideTopic(String name, String mainTopicName) {
        this.name = name;
        this.mainTopicName =mainTopicName;
    }




}