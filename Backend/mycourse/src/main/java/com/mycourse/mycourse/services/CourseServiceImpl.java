package com.mycourse.mycourse.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycourse.mycourse.dao.CourseDao;
import com.mycourse.mycourse.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseDao courseDao;
	
	public CourseServiceImpl() {
		
	}

	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();
	}
	
	@Override
	public Course getCourse(long courseId) {
		
		return courseDao.getOne(courseId);
	}

	@Override
	public Course addCourse(Course course) {
		
		courseDao.save(course);
		return course;
	}
		
	@Override
	public Course updateCourse(Course course) {		
		courseDao.save(course);
		return course;
	}

	@Override
	public void deleteCourse(long parseLong) {
		
		Course course=courseDao.getOne(parseLong);
		courseDao.delete(course);
	}
}
