package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.CourseCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseCategoryRepository extends JpaRepository<CourseCategory, Long> {

}
