package com.example.demo.controller;

import com.example.demo.model.Discussion;
import com.example.demo.model.MainTopic;
import com.example.demo.repository.MainTopicRepository;
import com.sun.tools.javac.Main;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import payload.request.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/maintopic")
public class MainTopicController {



    @Autowired
    private MainTopicRepository mainTopicRepository;





    @GetMapping("/allmaintopics")
    @CrossOrigin
    public ResponseEntity<List<MainTopic>> getAllMainTopics() {
        return  ResponseEntity.ok(mainTopicRepository.findApprovedMainTopics());
    }

    @PostMapping("/request")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void submitMainTopicRequest(@RequestBody MainTopicRequest mainTopicRequestRequest){
        MainTopic mainTopic= new MainTopic(MainTopicRequest.getName(),  MainTopicRequest.getUserSent());
        mainTopic.setStatus("pending");
        mainTopicRepository.save(mainTopic);
    }

    @PostMapping("/approve")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void mainTopicApproveRequest(@RequestBody TopicApproveRequest mainTopicApproveRequest){
        MainTopic mainTopic= mainTopicRepository.findItemByName(TopicApproveRequest.getName());
        mainTopic.setStatus(TopicApproveRequest.getStatus());

        mainTopicRepository.save(mainTopic);
    }

    @GetMapping("/pending")
    @PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public ResponseEntity<List<MainTopic>> getMainTopic() {
        return  ResponseEntity.ok(mainTopicRepository.findPendingMainTopicsByName());
    }

    @PostMapping("/delete")
    @PreAuthorize(" hasRole('MODERATOR') or hasRole('ADMIN')")
    @CrossOrigin
    public void deleteMainTopic(@RequestBody DeletionRequest deletionRequest) {
        MainTopic mainTopic= mainTopicRepository.findItemByName(DeletionRequest.getName());
        mainTopicRepository.delete(mainTopic);

    }



}
