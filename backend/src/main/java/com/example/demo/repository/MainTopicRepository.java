package com.example.demo.repository;

import com.example.demo.model.MainTopic;
import com.example.demo.model.SideTopic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface MainTopicRepository extends MongoRepository<MainTopic, String> {

    @Query("{name:'?0'}")
    MainTopic findItemByName(String name);

    @Query("{  status: 'approved' }")
    List<MainTopic> findApprovedMainTopics();

    @Query("{  status: 'pending'}")
    List<MainTopic> findPendingMainTopicsByName();

    public long count();

}
