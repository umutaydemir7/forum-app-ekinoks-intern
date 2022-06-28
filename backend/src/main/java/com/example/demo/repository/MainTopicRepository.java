package com.example.demo.repository;

import com.example.demo.model.MainTopic;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;



@Repository
public interface MainTopicRepository extends MongoRepository<MainTopic, String> {

    @Query("{name:'?0'}")
    MainTopic findItemByName(String name);

    public long count();

}
