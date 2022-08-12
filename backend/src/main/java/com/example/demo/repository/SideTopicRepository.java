package com.example.demo.repository;


import com.example.demo.model.Discussion;
import com.example.demo.model.SideTopic;
import com.example.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface SideTopicRepository extends MongoRepository<SideTopic, String> {

    @Query("{name:'?0'}")
    SideTopic findItemByName(String name);



    @Query("{ 'mainTopicName' : ?0, status: 'approved' }")
    List<SideTopic> findApprovedSideTopicsByName(String mainTopicName);

    @Query("{  status: 'pending'}")
    List<SideTopic> findPendingMainTopicsByName();



    public long count();

}