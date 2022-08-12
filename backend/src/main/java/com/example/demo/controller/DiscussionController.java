package com.example.demo.controller;

import com.example.demo.model.Discussion;
import com.example.demo.model.MainTopic;
import com.example.demo.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import payload.request.DeletionRequest;
import payload.request.TopicApproveRequest;
import payload.request.DiscussionRequest;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/discussion")
public class DiscussionController {

    @Autowired
    private DiscussionRepository discussionRepository;


    @GetMapping("/alldiscussions")
    @CrossOrigin
    public ResponseEntity<List<Discussion>> getAllDiscussions() {
        return  ResponseEntity.ok(discussionRepository.findAll());
    }

    @GetMapping("/{sideTopicName}")
    @CrossOrigin
    public ResponseEntity<List<Discussion>> getApprovedSideTopicsByMainTopic(@PathVariable String sideTopicName) {
        return  ResponseEntity.ok(discussionRepository.findApprovedDiscussionsByName(sideTopicName));
    }

    @GetMapping("/pending")
    @PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public ResponseEntity<List<Discussion>> getDiscussionBySideTopic() {
        return  ResponseEntity.ok(discussionRepository.findPendingDiscussionsByName());
    }


    @PostMapping("/request")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void submitDiscussionRequest(@RequestBody DiscussionRequest discussionRequest){
        System.out.println( DiscussionRequest.getDiscussionName());
        Discussion discussion= new Discussion(DiscussionRequest.getDiscussionName(), DiscussionRequest.getSideTopicName(), DiscussionRequest.getUserSent() );
        discussion.setStatus("pending");
        discussionRepository.save(discussion);
    }


    @PostMapping("/approve")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void discussionApproveRequest(@RequestBody TopicApproveRequest discussionApproveRequest){
        Discussion discussion= discussionRepository.findItemByName(TopicApproveRequest.getName());
        discussion.setStatus(TopicApproveRequest.getStatus());
        System.out.println(discussion.getStatus());
        discussionRepository.save(discussion);
    }

    @PostMapping("/delete")
    @PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void deleteDiscussion(@RequestBody DeletionRequest deletionRequest) {
        Discussion discussion= discussionRepository.findItemByName(DeletionRequest.getName());
        discussionRepository.delete(discussion);

    }







}