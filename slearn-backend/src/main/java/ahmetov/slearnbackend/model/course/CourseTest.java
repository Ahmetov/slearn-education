package ahmetov.slearnbackend.model.course;

import javax.persistence.*;

@Entity
@Table(name = "test")
public class CourseTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
}
