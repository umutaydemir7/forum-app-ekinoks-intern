package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;


@Document("Comment")
public class Comment {

    @Id
    private String id;
    @Indexed
    private User user;

    private String text;

    private LocalDate date;

    private String discussionName;

    @Indexed
    private String userSent;


    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

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

    public String getDiscussionName() {
        return discussionName;
    }

    public void setDiscussionName(String discussionName) {
        this.discussionName = discussionName;
    }

    public String getUserSent() {
        return userSent;
    }

    public void setUserSent(String userSent) {
        this.userSent = userSent;
    }

    public Comment(String text, String discussionName, String userSent) {
        this.text = text;
        this.discussionName = discussionName;
        this.userSent = userSent;
    }
}
