package ahmetov.slearnbackend.service;

import ahmetov.slearnbackend.model.course.Course;
import org.springframework.web.multipart.MultipartFile;

public interface CourseService extends BaseService<Course, Long> {
    void create(Course course, MultipartFile multipartFile);
    Course createAndReturnId(Course course, MultipartFile multipartFile);
}
