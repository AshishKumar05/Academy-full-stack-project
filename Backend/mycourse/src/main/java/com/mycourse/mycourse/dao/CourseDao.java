package com.mycourse.mycourse.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mycourse.mycourse.entities.Course;

public interface CourseDao extends JpaRepository<Course,Long>{

}
