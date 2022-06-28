package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;


@Document("Comment")
public class Comment {

    @Id
    private String id;
    @Indexed
    private User user;

    private String text;
    private SideTopic sidetopic;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public SideTopic getSidetopic() {
        return sidetopic;
    }

    public void setSidetopic(SideTopic sidetopic) {
        this.sidetopic = sidetopic;
    }
}