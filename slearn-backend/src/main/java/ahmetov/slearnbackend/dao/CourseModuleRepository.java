package ahmetov.slearnbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseModuleRepository extends JpaRepository<CourseModule, Long> {

}
