package ahmetov.slearnbackend.dao;

import ahmetov.slearnbackend.model.course.FileDB;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, String> {

}